import React, { useEffect, useRef } from 'react';

export default function InteractiveTopologyCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      canvas.width = parent.clientWidth * window.devicePixelRatio;
      canvas.height = parent.clientHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    resize();
    window.addEventListener('resize', resize);

    const nodes = [
      { x: 0.25, y: 0.35, label: 'Coimbatore Hub (98 AC)', size: 6, color: '#6BC7A7' },
      { x: 0.75, y: 0.65, label: 'Madurai ELCOT (93 AC)', size: 6, color: '#6BC7A7' },
      { x: 0.50, y: 0.20, label: 'Bengaluru Grid Interconnect', size: 4, color: '#DDEBE4' },
      { x: 0.85, y: 0.30, label: 'Chennai Subsea Cable Landing', size: 4, color: '#DDEBE4' },
      { x: 0.20, y: 0.70, label: 'Kochi Fiber Gateway', size: 4, color: '#DDEBE4' },
    ];

    let pulse = 0;

    const render = () => {
      const w = canvas.width / window.devicePixelRatio;
      const h = canvas.height / window.devicePixelRatio;
      ctx.clearRect(0, 0, w, h);

      pulse += 0.02;

      // Draw Connection Lines
      ctx.lineWidth = 1.5;
      ctx.strokeStyle = 'rgba(107, 199, 167, 0.25)';
      ctx.setLineDash([4, 4]);

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const n1 = nodes[i];
          const n2 = nodes[j];
          ctx.beginPath();
          ctx.moveTo(n1.x * w, n1.y * h);
          ctx.lineTo(n2.x * w, n2.y * h);
          ctx.stroke();
        }
      }

      ctx.setLineDash([]);

      // Draw Nodes & Labels
      nodes.forEach((n, i) => {
        const nx = n.x * w;
        const ny = n.y * h;

        // Glowing Ring
        const ringSize = n.size + Math.sin(pulse + i) * 3;
        ctx.beginPath();
        ctx.arc(nx, ny, ringSize + 4, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(107, 199, 167, 0.3)';
        ctx.lineWidth = 1;
        ctx.stroke();

        // Node Circle
        ctx.beginPath();
        ctx.arc(nx, ny, n.size, 0, Math.PI * 2);
        ctx.fillStyle = n.color;
        ctx.fill();

        // Label
        ctx.font = '10px JetBrains Mono, monospace';
        ctx.fillStyle = '#BFDCD0';
        ctx.fillText(n.label, nx + 10, ny + 3);
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="hero-visual" aria-label="Interactive Regional Topology Map">
      <div className="visual-header">
        <span>TAMIL NADU DIGITAL CORRIDOR TOPOLOGY</span>
        <span className="text-mono" style={{ color: 'var(--c-accent-mint)' }}>LIVE INTERCONNECT</span>
      </div>
      <div className="visual-canvas-container">
        <canvas ref={canvasRef} style={{ width: '100%', height: '100%', display: 'block' }}></canvas>
      </div>
      <div className="visual-overlay-card">
        <div>
          <strong style={{ display: 'block', fontSize: '12px', fontWeight: 600 }}>Coimbatore &amp; Madurai Strategic Backbone</strong>
          <span style={{ fontSize: '11px', color: 'var(--c-dark-text-secondary)' }}>Dedicated Substation Feeds · Tier-Ready Connectivity</span>
        </div>
      </div>
    </div>
  );
}
