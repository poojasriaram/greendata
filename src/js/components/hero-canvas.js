// ══════════════════════════════════════════════════════════════════════════
// GreenNext Technologies — Hero Architectural Topology Visualizer
// ══════════════════════════════════════════════════════════════════════════

export function initHeroCanvas() {
  const canvas = document.getElementById('heroCanvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let animationFrameId;
  let width, height;

  const nodes = [
    { id: 'cbe-flagship', label: 'Coimbatore (98 AC · DC & IT)', x: 0.22, y: 0.38, size: 8, color: '#6BC7A7', pulse: 0 },
    { id: 'hosur-hub', label: 'Hosur (65 AC · Precision & SpaceTech)', x: 0.42, y: 0.18, size: 8, color: '#6BC7A7', pulse: 1 },
    { id: 'pondicherry-hub', label: 'Pondicherry (35 AC · Innovation & Convention)', x: 0.78, y: 0.25, size: 7, color: '#DDEBE4', pulse: 2 },
    { id: 'trichy-hub', label: 'Trichy (45 AC · Knowledge City & DC)', x: 0.52, y: 0.48, size: 7, color: '#6BC7A7', pulse: 3 },
    { id: 'madurai-elcot', label: 'Madurai (93 AC · ELCOT & TechMax)', x: 0.38, y: 0.72, size: 8, color: '#6BC7A7', pulse: 4 },
    { id: 'tirunelveli-hub', label: 'Tirunelveli (55 AC · AI DC & Clean Energy)', x: 0.30, y: 0.88, size: 8, color: '#6BC7A7', pulse: 5 },
    { id: 'chennai-gateway', label: 'Subsea Cable Interconnect (Chennai)', x: 0.88, y: 0.12, size: 5, color: '#BFDCD0', pulse: 0 },
    { id: 'bengaluru-corridor', label: 'Tech Corridor Gateway (Bengaluru)', x: 0.32, y: 0.10, size: 5, color: '#BFDCD0', pulse: 1 }
  ];

  const links = [
    [7, 1], // Bengaluru -> Hosur
    [1, 0], // Hosur -> Coimbatore
    [1, 3], // Hosur -> Trichy
    [6, 2], // Subsea -> Pondicherry
    [2, 3], // Pondicherry -> Trichy
    [0, 3], // Coimbatore -> Trichy
    [0, 4], // Coimbatore -> Madurai
    [3, 4], // Trichy -> Madurai
    [4, 5], // Madurai -> Tirunelveli
    [6, 1]  // Subsea -> Hosur
  ];

  let packets = [
    { from: 7, to: 1, progress: 0.1, speed: 0.005 },
    { from: 1, to: 0, progress: 0.4, speed: 0.004 },
    { from: 6, to: 2, progress: 0.2, speed: 0.006 },
    { from: 3, to: 4, progress: 0.7, speed: 0.004 },
    { from: 4, to: 5, progress: 0.5, speed: 0.005 }
  ];

  function resize() {
    const rect = canvas.parentElement.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    width = rect.width;
    height = rect.height;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);
  }

  window.addEventListener('resize', resize);
  resize();

  function drawGrid() {
    ctx.strokeStyle = 'rgba(107, 199, 167, 0.06)';
    ctx.lineWidth = 1;
    const gridSize = 40;

    for (let x = 0; x < width; x += gridSize) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }

    for (let y = 0; y < height; y += gridSize) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }
  }

  function render(time) {
    ctx.clearRect(0, 0, width, height);

    drawGrid();

    // Draw connecting links
    links.forEach(([i, j]) => {
      const n1 = nodes[i];
      const n2 = nodes[j];
      const x1 = n1.x * width;
      const y1 = n1.y * height;
      const x2 = n2.x * width;
      const y2 = n2.y * height;

      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.strokeStyle = 'rgba(221, 235, 228, 0.15)';
      ctx.lineWidth = 1.5;
      ctx.stroke();
    });

    // Draw active data packets
    packets.forEach((pkt) => {
      pkt.progress += pkt.speed;
      if (pkt.progress >= 1) pkt.progress = 0;

      const n1 = nodes[pkt.from];
      const n2 = nodes[pkt.to];
      const curX = n1.x * width + (n2.x * width - n1.x * width) * pkt.progress;
      const curY = n1.y * height + (n2.y * height - n1.y * height) * pkt.progress;

      ctx.beginPath();
      ctx.arc(curX, curY, 3, 0, Math.PI * 2);
      ctx.fillStyle = '#6BC7A7';
      ctx.shadowColor = '#6BC7A7';
      ctx.shadowBlur = 8;
      ctx.fill();
      ctx.shadowBlur = 0;
    });

    // Draw Nodes
    nodes.forEach((n, idx) => {
      const px = n.x * width;
      const py = n.y * height;
      const pulseVal = Math.sin(time * 0.002 + n.pulse) * 0.5 + 0.5;

      // Pulse ring
      ctx.beginPath();
      ctx.arc(px, py, n.size + 4 + pulseVal * 6, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(107, 199, 167, ${0.4 - pulseVal * 0.3})`;
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Node Body
      ctx.beginPath();
      ctx.arc(px, py, n.size, 0, Math.PI * 2);
      ctx.fillStyle = n.color;
      ctx.fill();

      // Node Label
      ctx.font = '500 10px "JetBrains Mono", monospace';
      ctx.fillStyle = 'rgba(247, 248, 245, 0.85)';
      ctx.fillText(n.label, px + n.size + 8, py + 3);
    });

    animationFrameId = requestAnimationFrame(render);
  }

  animationFrameId = requestAnimationFrame(render);

  return () => {
    window.removeEventListener('resize', resize);
    cancelAnimationFrame(animationFrameId);
  };
}
