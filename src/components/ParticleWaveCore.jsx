import { useEffect, useRef } from "react";

export default function ParticleWaveCore() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return undefined;
    }

    const context = canvas.getContext("2d", { alpha: true });
    if (!context) {
      return undefined;
    }

    const DPR = Math.min(window.devicePixelRatio || 1, 1.6);
    const particles = [];
    const latSegments = 42;
    const lngSegments = 72;
    const fieldDepth = 420;

    for (let lat = 0; lat <= latSegments; lat += 1) {
      const v = lat / latSegments;
      const theta = v * Math.PI;

      for (let lng = 0; lng < lngSegments; lng += 1) {
        const u = lng / lngSegments;
        const phi = u * Math.PI * 2;

        particles.push({
          theta,
          phi,
          seed: Math.sin(phi * 3.7 + theta * 5.1),
          band: Math.sin(theta * 1.8),
        });
      }
    }

    let width = 0;
    let height = 0;
    let animationFrame = 0;

    const resize = () => {
      const bounds = canvas.getBoundingClientRect();
      width = bounds.width;
      height = bounds.height;
      canvas.width = Math.max(1, Math.floor(width * DPR));
      canvas.height = Math.max(1, Math.floor(height * DPR));
      context.setTransform(DPR, 0, 0, DPR, 0, 0);
    };

    const draw = (time) => {
      const t = time * 0.00048;
      const cx = width * 0.52;
      const cy = height * 0.5;
      const baseRadius = Math.min(width, height) * 0.31;
      const scaleY = 1.06;
      const scaleX = 0.96;

      context.clearRect(0, 0, width, height);
      context.save();
      context.globalCompositeOperation = "lighter";

      for (let i = 0; i < particles.length; i += 1) {
        const point = particles[i];
        const waveA = Math.sin(point.theta * 4.2 + t * 1.05 + point.phi * 2.1);
        const waveB = Math.cos(point.phi * 5.1 - t * 0.85 + point.theta * 3.2);
        const waveC = Math.sin((point.theta + point.phi) * 2.7 - t * 1.2 + point.seed * 2.0);
        const breathe = 1 + Math.sin(t * 1.4) * 0.028;
        const displacedRadius = baseRadius * breathe * (1 + waveA * 0.11 + waveB * 0.06 + waveC * 0.035);

        const sinTheta = Math.sin(point.theta);
        const cosTheta = Math.cos(point.theta);
        const cosPhi = Math.cos(point.phi);
        const sinPhi = Math.sin(point.phi);

        let x = displacedRadius * sinTheta * cosPhi * scaleX;
        let y = displacedRadius * cosTheta * scaleY;
        let z = displacedRadius * sinTheta * sinPhi;

        const rotateY = t * 0.55;
        const rotateX = Math.sin(t * 0.6) * 0.18;

        const x1 = x * Math.cos(rotateY) - z * Math.sin(rotateY);
        const z1 = x * Math.sin(rotateY) + z * Math.cos(rotateY);
        const y1 = y * Math.cos(rotateX) - z1 * Math.sin(rotateX);
        const z2 = y * Math.sin(rotateX) + z1 * Math.cos(rotateX);

        x = x1;
        y = y1;
        z = z2;

        const perspective = fieldDepth / (fieldDepth - z);
        const px = cx + x * perspective;
        const py = cy + y * perspective;
        const depthFactor = (z + baseRadius) / (baseRadius * 2);
        const poleFade = Math.pow(Math.sin(point.theta), 0.09);
        const alpha = (0.08 + depthFactor * 0.42) * poleFade;
        const size = 0.45 + perspective * 1.1 + point.band * 0.28;

        context.beginPath();
        context.fillStyle = `rgba(255,59,59,${alpha})`;
        context.arc(px, py, Math.max(0.3, size), 0, Math.PI * 2);
        context.fill();
      }

      context.restore();
      animationFrame = window.requestAnimationFrame(draw);
    };

    resize();
    animationFrame = window.requestAnimationFrame(draw);

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas);
    window.addEventListener("resize", resize);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div className="ai-core-container">
      <div className="ai-core-aura"></div>
      <div className="ai-core-vignette"></div>
      <canvas ref={canvasRef} className="ai-core-canvas" aria-hidden="true"></canvas>
    </div>
  );
}
