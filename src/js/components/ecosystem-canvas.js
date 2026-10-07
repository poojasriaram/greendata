// ══════════════════════════════════════════════════════════════════════════
// GreenNext Technologies — Digital Infrastructure Ecosystem Interactive Canvas
// ══════════════════════════════════════════════════════════════════════════

export function initEcosystemCanvas() {
  const canvas = document.getElementById('ecosystemCanvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let animationFrameId;
  let width, height;
  let hoveredNode = null;

  const centerNode = { label: 'GREENNEXT\nPLATFORM', x: 0.5, y: 0.5, radius: 44, color: '#123B35', textColor: '#F7F8F5' };

  const ecosystemNodes = [
    { id: 'dc', label: 'Data Centers', sub: 'Hyperscale & Colocation', angle: 0, dist: 0.36, color: '#123B35' },
    { id: 'aigpu', label: 'AI & GPU Compute', sub: 'High-Density Workloads', angle: 33, dist: 0.38, color: '#0B2925' },
    { id: 'cloud', label: 'Cloud Infrastructure', sub: 'Enterprise Hosting', angle: 66, dist: 0.35, color: '#174A43' },
    { id: 'gcc', label: 'GCC Workspaces', sub: 'Global Capability Centers', angle: 99, dist: 0.38, color: '#123B35' },
    { id: 'itparks', label: 'Integrated IT Parks', sub: 'Commercial Tech Zones', angle: 132, dist: 0.35, color: '#0B2925' },
    { id: 'connect', label: 'Fiber & Connectivity', sub: 'Carrier-Neutral NOC', angle: 165, dist: 0.38, color: '#174A43' },
    { id: 'power', label: 'Power & BESS', sub: 'Substations & Clean Energy', angle: 198, dist: 0.36, color: '#123B35' },
    { id: 'sec', label: 'Command & SOC', sub: 'Predictive DCIM Monitoring', angle: 231, dist: 0.38, color: '#0B2925' },
    { id: 'edge', label: 'Edge Computing', sub: 'Micro-DC & Low Latency', angle: 264, dist: 0.35, color: '#174A43' },
    { id: 'invest', label: 'Institutional Capital', sub: 'JV / SPV Investment', angle: 297, dist: 0.38, color: '#123B35' },
    { id: 'partners', label: 'Technology Partners', sub: 'Hardware & Systems', angle: 330, dist: 0.35, color: '#0B2925' }
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

  function getMousePos(e) {
    const rect = canvas.getBoundingClientRect();
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    };
  }

  canvas.addEventListener('mousemove', (e) => {
    const mouse = getMousePos(e);
    let found = null;

    ecosystemNodes.forEach((node) => {
      const rad = (node.angle * Math.PI) / 180;
      const minDim = Math.min(width, height);
      const nx = width * 0.5 + Math.cos(rad) * minDim * node.dist;
      const ny = height * 0.5 + Math.sin(rad) * minDim * node.dist;

      const dist = Math.hypot(mouse.x - nx, mouse.y - ny);
      if (dist < 36) {
        found = node;
      }
    });

    hoveredNode = found;
  });

  canvas.addEventListener('mouseleave', () => {
    hoveredNode = null;
  });

  function render(time) {
    ctx.clearRect(0, 0, width, height);

    const minDim = Math.min(width, height);
    const cx = width * 0.5;
    const cy = height * 0.5;

    // Draw concentric orbital guides
    ctx.strokeStyle = 'rgba(18, 59, 53, 0.08)';
    ctx.lineWidth = 1;
    [0.22, 0.36, 0.44].forEach((scale) => {
      ctx.beginPath();
      ctx.arc(cx, cy, minDim * scale, 0, Math.PI * 2);
      ctx.stroke();
    });

    // Draw Connection Lines to center
    ecosystemNodes.forEach((node) => {
      const rad = (node.angle * Math.PI) / 180;
      const nx = cx + Math.cos(rad) * minDim * node.dist;
      const ny = cy + Math.sin(rad) * minDim * node.dist;

      const isHovered = hoveredNode && hoveredNode.id === node.id;

      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(nx, ny);
      ctx.strokeStyle = isHovered ? 'rgba(107, 199, 167, 0.9)' : 'rgba(18, 59, 53, 0.16)';
      ctx.lineWidth = isHovered ? 2.5 : 1.2;
      ctx.stroke();

      // Flowing energy dot along line
      const flowProgress = (time * 0.001 + node.angle * 0.02) % 1;
      const fx = cx + (nx - cx) * flowProgress;
      const fy = cy + (ny - cy) * flowProgress;

      ctx.beginPath();
      ctx.arc(fx, fy, 2.5, 0, Math.PI * 2);
      ctx.fillStyle = '#6BC7A7';
      ctx.fill();
    });

    // Draw Ecosystem Outer Nodes
    ecosystemNodes.forEach((node) => {
      const rad = (node.angle * Math.PI) / 180;
      const nx = cx + Math.cos(rad) * minDim * node.dist;
      const ny = cy + Math.sin(rad) * minDim * node.dist;

      const isHovered = hoveredNode && hoveredNode.id === node.id;
      const nodeRadius = isHovered ? 32 : 26;

      // Node background pill / circle
      ctx.beginPath();
      ctx.arc(nx, ny, nodeRadius, 0, Math.PI * 2);
      ctx.fillStyle = isHovered ? '#0B2925' : '#FFFFFF';
      ctx.shadowColor = 'rgba(18, 59, 53, 0.15)';
      ctx.shadowBlur = isHovered ? 16 : 6;
      ctx.fill();
      ctx.shadowBlur = 0;

      ctx.strokeStyle = isHovered ? '#6BC7A7' : '#CBD7D1';
      ctx.lineWidth = isHovered ? 2 : 1;
      ctx.stroke();

      // Node label
      ctx.font = '600 11px "Plus Jakarta Sans", sans-serif';
      ctx.fillStyle = isHovered ? '#F7F8F5' : '#18211F';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(node.label, nx, isHovered ? ny - 4 : ny);

      if (isHovered) {
        ctx.font = '500 9px "JetBrains Mono", monospace';
        ctx.fillStyle = '#6BC7A7';
        ctx.fillText(node.sub, nx, ny + 9);
      }
    });

    // Draw Center Node (GreenNext)
    ctx.beginPath();
    ctx.arc(cx, cy, centerNode.radius, 0, Math.PI * 2);
    ctx.fillStyle = centerNode.color;
    ctx.shadowColor = 'rgba(18, 59, 53, 0.3)';
    ctx.shadowBlur = 18;
    ctx.fill();
    ctx.shadowBlur = 0;

    ctx.strokeStyle = '#6BC7A7';
    ctx.lineWidth = 2.5;
    ctx.stroke();

    ctx.font = '700 12px "JetBrains Mono", monospace';
    ctx.fillStyle = '#F7F8F5';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('GREENNEXT', cx, cy - 6);

    ctx.font = '500 9px "JetBrains Mono", monospace';
    ctx.fillStyle = '#6BC7A7';
    ctx.fillText('ECOSYSTEM', cx, cy + 8);

    animationFrameId = requestAnimationFrame(render);
  }

  animationFrameId = requestAnimationFrame(render);

  return () => {
    window.removeEventListener('resize', resize);
    cancelAnimationFrame(animationFrameId);
  };
}
