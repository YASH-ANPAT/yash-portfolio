import { useEffect, useRef } from "react";

export default function ParticleWaveCore() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) {
      return undefined;
    }

    const context = canvas.getContext("2d", {
      alpha: true,
    });

    if (!context) {
      return undefined;
    }

    const reducedMotionQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    let width = 0;
    let height = 0;
    let animationFrame = 0;
    let formationStart = null;

    const pointer = {
      x: 0,
      y: 0,
      targetX: 0,
      targetY: 0,
    };

    const particles = [];

    /*
     * Formation timeline:
     *
     * 0.0s  -> visible scattered particle field
     * 1.6s  -> sphere fully formed
     * 2.0s  -> travelling energy pulse complete
     * after -> normal living core
     */
    const formationDuration = 2200;
    const pulseDuration = 1800;

    const clamp = (value, min, max) =>
      Math.min(max, Math.max(min, value));

    const smoothStep = (value) => {
      const t = clamp(value, 0, 1);

      return t * t * (3 - 2 * t);
    };

    const easeOutCubic = (value) => {
      const t = clamp(value, 0, 1);

      return 1 - Math.pow(1 - t, 3);
    };

    const createParticles = () => {
      particles.length = 0;

      const area = width * height;

      const count = Math.max(
        1200,
        Math.min(2400, Math.floor(area / 150))
      );

      const goldenAngle =
        Math.PI * (3 - Math.sqrt(5));

      for (let i = 0; i < count; i += 1) {
        const normalized =
          i / Math.max(1, count - 1);

        /*
         * Fibonacci sphere distribution.
         */
        const sphereY =
          1 - normalized * 2;

        const sphereRadius =
          Math.sqrt(
            Math.max(
              0,
              1 - sphereY * sphereY
            )
          );

        const theta =
          goldenAngle * i;

        const targetX =
          sphereRadius *
          Math.sin(theta);

        const targetY =
          sphereY;

        const targetZ =
          sphereRadius *
          Math.cos(theta);

        /*
         * Deterministic pseudo-random value.
         */
        const rawSeed =
          Math.sin(i * 12.9898) *
          43758.5453;

        const seed =
          ((rawSeed % 1) + 1) % 1;

        /*
         * Initial scattered position.
         *
         * The particles begin slightly outside
         * their final sphere positions so that
         * the formation is clearly visible.
         */
        const scatterAngle =
          theta +
          seed *
          Math.PI *
          2;

        const scatterRadius =
          1.25 +
          seed *
          0.72;

        particles.push({
          x: targetX,
          y: targetY,
          z: targetZ,

          targetX,
          targetY,
          targetZ,

          startX:
            Math.cos(scatterAngle) *
            scatterRadius,

          startY:
            (seed - 0.5) *
            1.45 *
            scatterRadius,

          startZ:
            Math.sin(scatterAngle) *
            scatterRadius,

          seed,

          phase:
            i * 0.017,
        });
      }
    };

    const resize = () => {
      const bounds =
        canvas.getBoundingClientRect();

      width =
        Math.max(
          1,
          bounds.width
        );

      height =
        Math.max(
          1,
          bounds.height
        );

      const dpr =
        Math.min(
          window.devicePixelRatio || 1,
          1.6
        );

      canvas.width =
        Math.floor(
          width * dpr
        );

      canvas.height =
        Math.floor(
          height * dpr
        );

      context.setTransform(
        dpr,
        0,
        0,
        dpr,
        0,
        0
      );

      createParticles();

      formationStart = null;
    };

    const handlePointerMove = (event) => {
      if (
        reducedMotionQuery.matches
      ) {
        return;
      }

      const bounds =
        canvas.getBoundingClientRect();

      pointer.targetX =
        event.clientX -
        bounds.left;

      pointer.targetY =
        event.clientY -
        bounds.top;
    };

    const handlePointerLeave = () => {
      pointer.targetX =
        width * 0.5;

      pointer.targetY =
        height * 0.5;
    };

    const draw = (time) => {
      if (
        formationStart === null
      ) {
        formationStart = time;
      }

      const elapsed =
        time -
        formationStart;

      /*
       * -----------------------------------------------
       * FORMATION
       * -----------------------------------------------
       */
      const rawFormationProgress =
        elapsed /
        formationDuration;

      const formationProgress =
        reducedMotionQuery.matches
          ? 1
          : easeOutCubic(
            rawFormationProgress
          );

      /*
       * Brightness locks slightly after
       * the physical particle formation.
       */
      const lockProgress =
        smoothStep(
          clamp(
            (rawFormationProgress -
              0.08) /
            0.92,
            0,
            1
          )
        );

      /*
       * -----------------------------------------------
       * TRAVELLING ENERGY PULSE
       * -----------------------------------------------
       */
      const pulseProgress =
        clamp(
          (elapsed -
            formationDuration) /
          pulseDuration,
          0,
          1
        );

      /*
       * The pulse is active only during
       * the short post-formation window.
       */
      const pulseActive =
        !reducedMotionQuery.matches &&
        pulseProgress > 0 &&
        pulseProgress < 1;

      const seconds =
        time * 0.0005;

      const motionScale =
        reducedMotionQuery.matches
          ? 0
          : 1;

      /*
       * Faster cursor response.
       */
      pointer.x +=
        (pointer.targetX -
          pointer.x) *
        0.11;

      pointer.y +=
        (pointer.targetY -
          pointer.y) *
        0.11;

      /*
       * Core position.
       */
      const cx =
        width * 0.53;

      const cy =
        height * 0.5;

      const baseRadius =
        Math.min(
          width,
          height
        ) * 0.34;

      /*
       * Cursor interaction.
       */
      const repelRadius =
        Math.min(
          width,
          height
        ) * 0.93;

      const repelStrength =
        baseRadius * 0.095;

      context.clearRect(
        0,
        0,
        width,
        height
      );

      context.save();

      /*
       * Additive particle blending.
       */
      context.globalCompositeOperation =
        "lighter";

      for (
        let i = 0;
        i < particles.length;
        i += 1
      ) {
        const particle =
          particles[i];

        /*
         * -------------------------------------------
         * 1. PARTICLE FORMATION
         * -------------------------------------------
         *
         * Particles travel from their initial
         * scattered positions toward the exact
         * Fibonacci sphere.
         */
        let x =
          particle.startX *
          (1 -
            formationProgress) +
          particle.targetX *
          formationProgress;

        let y =
          particle.startY *
          (1 -
            formationProgress) +
          particle.targetY *
          formationProgress;

        let z =
          particle.startZ *
          (1 -
            formationProgress) +
          particle.targetZ *
          formationProgress;

        /*
         * Stronger organic movement during
         * the formation phase.
         */
        const formationStrength =
          1 -
          formationProgress;

        const formationMotion =
          Math.sin(
            particle.phase +
            elapsed *
            0.0022
          ) *
          formationStrength;

        x +=
          formationMotion *
          particle.seed *
          0.11;

        y +=
          Math.cos(
            particle.phase +
            elapsed *
            0.0019
          ) *
          formationStrength *
          particle.seed *
          0.085;

        z +=
          Math.sin(
            particle.phase *
            0.7 +
            elapsed *
            0.0016
          ) *
          formationStrength *
          0.07;

        /*
         * -------------------------------------------
         * 2. NORMAL CORE DEFORMATION
         * -------------------------------------------
         */
        const flowA =
          Math.sin(
            y * 7 +
            x * 4 +
            seconds *
            2.2 *
            motionScale +
            particle.phase
          );

        const flowB =
          Math.cos(
            z * 8 -
            y * 3 +
            seconds *
            1.5 *
            motionScale
          );

        const flowC =
          Math.sin(
            (x + z) * 10 -
            seconds *
            1.1 *
            motionScale +
            particle.phase *
            0.7
          );

        const deformation =
          1 +
          (
            flowA * 0.045 +
            flowB * 0.035 +
            flowC * 0.02
          ) *
          formationProgress;

        x *=
          baseRadius *
          deformation;

        y *=
          baseRadius *
          deformation;

        z *=
          baseRadius *
          deformation;

        /*
         * -------------------------------------------
         * 3. ROTATION
         * -------------------------------------------
         */
        const rotation =
          seconds *
          0.7 *
          motionScale *
          formationProgress;

        const cosRotation =
          Math.cos(
            rotation
          );

        const sinRotation =
          Math.sin(
            rotation
          );

        const rotatedX =
          x *
          cosRotation -
          z *
          sinRotation;

        const rotatedZ =
          x *
          sinRotation +
          z *
          cosRotation;

        x = rotatedX;
        z = rotatedZ;

        /*
         * -------------------------------------------
         * 4. CURSOR TILT
         * -------------------------------------------
         */
        const tilt =
          (pointer.x *
            0.26) /
          Math.max(
            width,
            1
          );

        const cosTilt =
          Math.cos(tilt);

        const sinTilt =
          Math.sin(tilt);

        const tiltedY =
          y *
          cosTilt -
          z *
          sinTilt;

        const tiltedZ =
          y *
          sinTilt +
          z *
          cosTilt;

        y = tiltedY;
        z = tiltedZ;

        /*
         * Horizontal cursor influence.
         */
        x +=
          (pointer.x -
            width * 0.2) *
          0.01 *
          motionScale *
          formationProgress;

        /*
         * -------------------------------------------
         * 5. PERSPECTIVE
         * -------------------------------------------
         */
        const focalLength =
          baseRadius * 3;

        const perspective =
          focalLength /
          (focalLength - z);

        let px =
          cx +
          x *
          perspective;

        let py =
          cy +
          y *
          perspective;

        /*
         * -------------------------------------------
         * 6. CURSOR REPULSION
         * -------------------------------------------
         */
        if (
          !reducedMotionQuery.matches &&
          formationProgress >
          0.2
        ) {
          const dx =
            px -
            pointer.x;

          const dy =
            py -
            pointer.y;

          const distanceSquared =
            dx * dx +
            dy * dy;

          if (
            distanceSquared <
            repelRadius *
            repelRadius
          ) {
            const distance =
              Math.sqrt(
                distanceSquared
              );

            const safeDistance =
              Math.max(
                distance,
                0.001
              );

            const normalizedDistance =
              1 -
              distance /
              repelRadius;

            const force =
              normalizedDistance *
              normalizedDistance *
              normalizedDistance;

            const push =
              force *
              repelStrength *
              perspective;

            px +=
              (dx /
                safeDistance) *
              push;

            py +=
              (dy /
                safeDistance) *
              push;
          }
        }

        /*
         * -------------------------------------------
         * 7. DEPTH
         * -------------------------------------------
         */
        const depth =
          (z +
            baseRadius) /
          (baseRadius * 2);

        /*
         * Keep the upper/lower edges slightly
         * softer while preserving the sphere.
         */
        const edgeFade =
          Math.pow(
            Math.max(
              0,
              1 -
              Math.abs(
                particle.targetY
              ) *
              0.78
            ),
            0.35
          );

        /*
         * -------------------------------------------
         * 8. TRAVELLING ENERGY PULSE
         * -------------------------------------------
         *
         * Convert the particle's screen-space
         * Y position into approximately:
         *
         * -1 = top of sphere
         *  0  = centre
         * +1 = bottom
         */
        const normalizedParticleY =
          clamp(
            (py - cy) /
            Math.max(
              baseRadius,
              1
            ),
            -1,
            1
          );

        /*
         * Pulse travels from:
         *
         * -1 → +1
         *
         * top → bottom
         */
        /*
 * Smooth acceleration and deceleration.
 *
 * The pulse starts gently,
 * moves through the sphere,
 * then slows down before exiting.
 */
        const smoothPulseProgress =
          smoothStep(pulseProgress);

        const pulseCenter =
          -1 +
          smoothPulseProgress *
          2;

        /*
         * Distance between this particle
         * and the moving pulse.
         */
        const pulseDistance =
          Math.abs(
            normalizedParticleY -
            pulseCenter
          );

        /*
         * Narrow travelling energy band.
         *
         * Lower value = thinner pulse.
         */
        const pulseWidth =
          0.1;

        /*
         * Gaussian-like falloff.
         *
         * Particles closest to the pulse
         * become brightest.
         */
        const travellingPulse =
          pulseActive
            ? Math.exp(
              -Math.pow(
                pulseDistance /
                pulseWidth,
                2
              )
            )
            : 0;

        /*
         * Slightly stronger response for
         * particles with greater depth.
         */
        const pulseStrength =
          travellingPulse *
          (0.72 +
            depth * 0.28);

        /*
         * Base core brightness.
         *
         * The sphere never disappears.
         */
        const baseBrightness =
          0.28;

        /*
         * Brightness accumulated as the
         * sphere finishes forming.
         */
        const formedBrightness =
          lockProgress *
          0.72;

        /*
         * Final brightness.
         *
         * Only particles touched by the
         * travelling pulse receive the
         * temporary extra brightness.
         */
        const totalBrightness =
          baseBrightness +
          formedBrightness +
          pulseStrength;

        const alpha =
          (
            0.12 +
            depth * 0.9
          ) *
          edgeFade *
          totalBrightness;

        /*
         * Particles touched by the pulse
         * expand slightly.
         */
        const pulseSize =
          1 +
          pulseStrength *
          0.22;

        const size =
          (
            0.55 +
            perspective *
            1.05 +
            depth *
            0.55
          ) *
          pulseSize;

        /*
         * -------------------------------------------
         * 9. DRAW PARTICLE
         * -------------------------------------------
         */
        context.beginPath();

        context.fillStyle =
          `rgba(255, 59, 59, ${alpha})`;

        context.arc(
          px,
          py,
          Math.max(
            0.35,
            size
          ),
          0,
          Math.PI * 2
        );

        context.fill();
      }

      /*
       * -----------------------------------------------
       * 10. NO GLOBAL PULSE
       * -----------------------------------------------
       *
       * Intentionally empty.
       *
       * The energy pulse is created entirely
       * by individual particles becoming brighter
       * as the wave travels from top to bottom.
       */

      context.restore();

      animationFrame =
        window.requestAnimationFrame(
          draw
        );
    };

    resize();

    /*
     * Start pointer interaction from center.
     */
    pointer.x =
      width * 0.5;

    pointer.y =
      height * 0.5;

    pointer.targetX =
      width * 0;

    pointer.targetY =
      height * 0;

    window.addEventListener(
      "resize",
      resize
    );

    window.addEventListener(
      "pointermove",
      handlePointerMove,
      {
        passive: true,
      }
    );

    window.addEventListener(
      "pointerleave",
      handlePointerLeave
    );

    animationFrame =
      window.requestAnimationFrame(
        draw
      );

    return () => {
      window.cancelAnimationFrame(
        animationFrame
      );

      window.removeEventListener(
        "resize",
        resize
      );

      window.removeEventListener(
        "pointermove",
        handlePointerMove
      );

      window.removeEventListener(
        "pointerleave",
        handlePointerLeave
      );
    };
  }, []);

  return (
    <div
      className="ai-core-container"
      aria-hidden="true"
    >
      <div className="ai-core-aura" />

      <canvas
        ref={canvasRef}
        className="ai-core-canvas"
      />
    </div>
  );
}