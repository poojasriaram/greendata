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
    { id: 'cbe-zone-a', label: 'Coimbatore · Zone A (15 AC DC)', x: 0.28, y: 0.35, size: 8, color: '#6BC7A7', pulse: 0 },
    { id: 'cbe-zone-b', label: 'Coimbatore · Zone B (25 AC IT)', x: 0.35, y: 0.52, size: 7, color: '#DDEBE4', pulse: 1 },
    { id: 'mindspace', label: 'MindSpace (8 AC)', x: 0.22, y: 0.65, size: 5, color: '#BFDCD0', pulse: 2 },
    { id: 'sangarilla', label: 'Sangarilla (50 AC)', x: 0.45, y: 0.25, size: 9, color: '#6BC7A7', pulse: 3 },
    { id: 'madurai-30', label: 'Madurai ELCOT (30 AC DC/IT)', x: 0.68, y: 0.68, size: 8, color: '#6BC7A7', pulse: 4 },
    { id: 'madurai-15', label: 'Madurai ELCOT (15 AC Tech)', x: 0.78, y: 0.52, size: 6, color: '#DDEBE4', pulse: 5 },
    { id: 'madurai-3', label: 'Madurai ELCOT (3 AC Edge)', x: 0.85, y: 0.38, size: 4, color: '#BFDCD0', pulse: 0 },
    { id: 'techmax', label: 'TechMax (15 AC)', x: 0.62, y: 0.42, size: 6, color: '#DDEBE4', pulse: 1 },
    { id: 'greenminds', label: 'GreenMinds (30 AC)', x: 0.55, y: 0.78, size: 7, color: '#6BC7A7', pulse: 2 }
  ];

  const links = [
    [0, 1], [1, 2], [0, 3], [1, 3],
    [4, 5], [5, 6], [4, 7], [4, 8],
    [0, 4], [3, 7], [1, 8] // Inter-cluster backbone links
  ];

  let packets = [
    { from: 0, to: 4, progress: 0.1, speed: 0.004 },
    { from: 3, to: 7, progress: 0.6, speed: 0.003 },
    { from: 1, to: 8, progress: 0.3, speed: 0.005 },
    { from: 4, to: 5, progress: 0.8, speed: 0.006 }
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
