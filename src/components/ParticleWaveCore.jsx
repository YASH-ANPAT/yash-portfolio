import { useEffect, useRef } from "react";

export default function ParticleWaveCore() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    const context = canvas.getContext("2d", { alpha: true });
    if (!context) return undefined;

    const reducedMotionQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    let width = 0;
    let height = 0;
    let animationFrame = 0;

    const pointer = {
      x: 0,
      y: 0,
      targetX: 0,
      targetY: 0,
    };

    const particles = [];

    const createParticles = () => {
      particles.length = 0;

      const area = width * height;
      const count = Math.max(
        1200,
        Math.min(2400, Math.floor(area / 150))
      );

      const goldenAngle = Math.PI * (3 - Math.sqrt(5));

      for (let i = 0; i < count; i += 1) {
        const normalized = i / Math.max(1, count - 1);
        const y = 1 - normalized * 2;
        const radius = Math.sqrt(Math.max(0, 1 - y * y));
        const theta = goldenAngle * i;

        const rawSeed = Math.sin(i * 12.9898) * 43758.5453;
        const seed = ((rawSeed % 1) + 1) % 1;

        particles.push({
          x: radius * Math.sin(theta),
          y,
          z: radius * Math.cos(theta),
          seed,
          phase: i * 0.017,
        });
      }
    };

    const resize = () => {
      const bounds = canvas.getBoundingClientRect();

      width = Math.max(1, bounds.width);
      height = Math.max(1, bounds.height);

      const dpr = Math.min(window.devicePixelRatio || 1, 1.6);

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);

      context.setTransform(dpr, 0, 0, dpr, 0, 0);

      createParticles();
    };

    const handlePointerMove = (event) => {
      if (reducedMotionQuery.matches) return;

      /*
       * Convert the cursor from viewport coordinates
       * into coordinates relative to the particle canvas.
       */
      const bounds = canvas.getBoundingClientRect();

      pointer.targetX = event.clientX - bounds.left;
      pointer.targetY = event.clientY - bounds.top;
    };

    const handlePointerLeave = () => {
      pointer.targetX = width * 0.5;
      pointer.targetY = height * 0.5;
    };

    const draw = (time) => {
      const seconds = time * 0.00022;
      const motionScale = reducedMotionQuery.matches ? 0 : 1;

      /*
       * Smooth cursor movement.
       *
       * This is deliberately not too fast.
       * The cursor should feel connected to the field,
       * not make it snap around.
       */
      pointer.x += (pointer.targetX - pointer.x) * 0.075;
      pointer.y += (pointer.targetY - pointer.y) * 0.075;

      const cx = width * 0.53;
      const cy = height * 0.5;

      const baseRadius = Math.min(width, height) * 0.34;

      /*
       * Interaction settings.
       *
       * repelRadius:
       * How close the cursor must be before particles react.
       *
       * repelStrength:
       * Maximum distance particles are pushed away.
       */
      const repelRadius = Math.min(width, height) * 0.93;
      const repelStrength = baseRadius * 0.055;

      context.clearRect(0, 0, width, height);

      context.save();
      context.globalCompositeOperation = "lighter";

      for (let i = 0; i < particles.length; i += 1) {
        const particle = particles[i];

        /*
         * Organic flowing deformation.
         */
        const flowA = Math.sin(
          particle.y * 7 +
            particle.x * 4 +
            seconds * 2.2 * motionScale +
            particle.phase
        );

        const flowB = Math.cos(
          particle.z * 8 -
            particle.y * 3 +
            seconds * 1.5 * motionScale
        );

        const flowC = Math.sin(
          (particle.x + particle.z) * 10 -
            seconds * 1.1 * motionScale +
            particle.phase * 0.7
        );

        const deformation =
          1 +
          flowA * 0.045 +
          flowB * 0.035 +
          flowC * 0.02;

        let x = particle.x * baseRadius * deformation;
        let y = particle.y * baseRadius * deformation;
        let z = particle.z * baseRadius * deformation;

        /*
         * Slow rotation of the particle field.
         */
        const rotation = seconds * 0.7 * motionScale;

        const cosRotation = Math.cos(rotation);
        const sinRotation = Math.sin(rotation);

        const rotatedX = x * cosRotation - z * sinRotation;
        const rotatedZ = x * sinRotation + z * cosRotation;

        x = rotatedX;
        z = rotatedZ;

        /*
         * Smooth vertical mouse influence.
         */
        const tilt = pointer.x * 0.26 / Math.max(width, 1);

        const cosTilt = Math.cos(tilt);
        const sinTilt = Math.sin(tilt);

        const tiltedY = y * cosTilt - z * sinTilt;
        const tiltedZ = y * sinTilt + z * cosTilt;

        y = tiltedY;
        z = tiltedZ;

        /*
         * Small horizontal response to cursor.
         */
        x +=
          (pointer.x - width * 0.2) *
          0.01 *
          motionScale;

        /*
         * Perspective projection.
         */
        const focalLength = baseRadius * 3;
        const perspective =
          focalLength / (focalLength - z);

        let px = cx + x * perspective;
        let py = cy + y * perspective;

        /*
         * ==========================================
         * PARTICLE REPULSION
         * ==========================================
         *
         * Calculate distance from the cursor to the
         * projected particle.
         */
        if (!reducedMotionQuery.matches) {
          const dx = px - pointer.x;
          const dy = py - pointer.y;

          const distanceSquared = dx * dx + dy * dy;

          if (distanceSquared < repelRadius * repelRadius) {
            const distance = Math.sqrt(distanceSquared);

            /*
             * Prevent division by zero when the cursor
             * sits exactly on a particle.
             */
            const safeDistance = Math.max(distance, 0.001);

            /*
             * 0 at the outer edge
             * 1 at the cursor
             */
            const normalizedDistance =
              1 - distance / repelRadius;

            /*
             * Smooth cubic falloff.
             *
             * This avoids the harsh "force field" look.
             */
            const force =
              normalizedDistance *
              normalizedDistance *
              normalizedDistance;

            const push =
              force * repelStrength * perspective;

            px += (dx / safeDistance) * push;
            py += (dy / safeDistance) * push;
          }
        }

        /*
         * Depth-based visibility.
         */
        const depth =
          (z + baseRadius) /
          (baseRadius * 2);

        const edgeFade = Math.pow(
          Math.max(
            0,
            1 - Math.abs(particle.y) * 0.78
          ),
          0.35
        );

        /*
         * Brighter than the previous version,
         * but still controlled.
         */
        const alpha =
          (0.12 + depth * 0.9) *
          edgeFade;

        const size =
          0.55 +
          perspective * 1.05 +
          depth * 0.55;

        context.beginPath();

        context.fillStyle = `rgba(255, 59, 59, ${alpha})`;

        context.arc(
          px,
          py,
          Math.max(0.35, size),
          0,
          Math.PI * 2
        );

        context.fill();
      }

      context.restore();

      animationFrame =
        window.requestAnimationFrame(draw);
    };

    /*
     * Start.
     */
    resize();

    /*
     * Start cursor in the center so the sphere
     * doesn't jump when the page loads.
     */
    pointer.x = width * 0.5;
    pointer.y = height * 0.5;
    pointer.targetX = width * 0;
    pointer.targetY = height * 0;

    window.addEventListener("resize", resize);

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
      window.requestAnimationFrame(draw);

    return () => {
      window.cancelAnimationFrame(animationFrame);

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