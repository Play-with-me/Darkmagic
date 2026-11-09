// src/atlas/CelestialWheel.mjs
// Bản Đồ 2: La Kinh Thiên Bàn 24 Sơn Hướng & Chùm Tia Tinh Tú Thần Sát

import { BRANCHES, BRANCH_META, ELEMENT_THEME } from './bazi-engine-ext.mjs';

const BAGUA_RING = [
  { trigram: '☵', name: 'Khảm Thủy', angle: 0 },
  { trigram: '☶', name: 'Cấn Sơn',   angle: 45 },
  { trigram: '☳', name: 'Chấn Lôi',  angle: 90 },
  { trigram: '☴', name: 'Tốn Phong', angle: 135 },
  { trigram: '☲', name: 'Ly Hỏa',    angle: 180 },
  { trigram: '☷', name: 'Khôn Địa',  angle: 225 },
  { trigram: '☱', name: 'Đoài Trạch', angle: 270 },
  { trigram: '☰', name: 'Càn Thiên', angle: 315 },
];

function polarToCartesian(cx, cy, r, angleDeg) {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  return {
    x: cx + r * Math.cos(rad),
    y: cy + r * Math.sin(rad),
  };
}

export function CelestialWheel({ React, chart }) {
  const h = React.createElement;
  const shenSha = chart.shenSha || [];
  const defaultStar = shenSha.find(s => s.present) || shenSha[0];

  const [selectedStarId, setSelectedStarId] = React.useState(defaultStar?.id || 'thien-at');
  const [selectedBranch, setSelectedBranch] = React.useState(null);

  const activeStar = shenSha.find(s => s.id === selectedStarId) || defaultStar;
  const targetBranch = selectedBranch || activeStar?.matchedPillars?.[0]?.branch || activeStar?.primaryBranch || chart.dayBranch || 'Tý';
  const targetBranchIdx = Math.max(0, BRANCHES.indexOf(targetBranch));
  const targetAngle = targetBranchIdx * 30;

  const cx = 230;
  const cy = 230;
  const beamEnd = polarToCartesian(cx, cy, 152, targetAngle);
  const bMeta = BRANCH_META[targetBranch] || BRANCH_META['Tý'];

  // Map branches to pillars present in the chart
  const branchPillarsMap = {};
  (chart.pillars || []).forEach(p => {
    if (p.branch) {
      if (!branchPillarsMap[p.branch]) branchPillarsMap[p.branch] = [];
      branchPillarsMap[p.branch].push(p.label);
    }
  });

  return h(
    'section',
    {
      id: 'map-celestial-wheel',
      className: 'atlas-card atlas-wheel-section',
      'aria-label': 'Bản đồ 2: La Kinh Thiên Bàn & Tinh Đồ Thần Sát',
    },
    h(
      'div',
      { className: 'atlas-card-header' },
      h(
        'div',
        { className: 'atlas-card-title-group' },
        h('span', { className: 'atlas-map-kicker' }, 'ĐẠI BẢN ĐỒ 02 · LA KINH THIÊN BÀN (羅經天盤)'),
        h('h2', { className: 'atlas-card-title' }, 'La Kinh 24 Sơn Hướng & Chùm Tia Tinh Tú'),
        h(
          'p',
          { className: 'atlas-card-subtitle' },
          'Bấm vào từng Thần Sát hoặc cung Địa Chi trên mặt La Kinh để kích hoạt luồng tia sao từ tâm Thái Cực chiếu thẳng vào phương vị mệnh cung.'
        )
      )
    ),

    h(
      'div',
      { className: 'celestial-wheel-layout' },
      // SVG Compass
      h(
        'div',
        { className: 'celestial-svg-container' },
        h(
          'svg',
          {
            viewBox: '0 0 460 460',
            className: 'celestial-compass-svg',
            role: 'img',
            'aria-label': `La Kinh Bát Tự chiếu cung ${targetBranch}`,
          },
          h(
            'defs',
            null,
            h(
              'radialGradient',
              { id: 'compassCoreGlow', cx: '50%', cy: '50%', r: '50%' },
              h('stop', { offset: '0%', stopColor: '#d4af37', stopOpacity: '0.35' }),
              h('stop', { offset: '55%', stopColor: '#b91c1c', stopOpacity: '0.16' }),
              h('stop', { offset: '100%', stopColor: '#090506', stopOpacity: '0' })
            ),
            h(
              'linearGradient',
              { id: 'constellationBeamGrad', x1: cx, y1: cy, x2: beamEnd.x, y2: beamEnd.y, gradientUnits: 'userSpaceOnUse' },
              h('stop', { offset: '0%', stopColor: '#d4af37', stopOpacity: '0.95' }),
              h('stop', { offset: '60%', stopColor: '#ef4444', stopOpacity: '0.85' }),
              h('stop', { offset: '100%', stopColor: '#fde047', stopOpacity: '1' })
            )
          ),

          // Background Aura
          h('circle', { cx, cy, r: 215, fill: 'url(#compassCoreGlow)' }),
          h('circle', { cx, cy, r: 210, className: 'compass-ring-outer' }),
          h('circle', { cx, cy, r: 182, className: 'compass-ring-bagua' }),
          h('circle', { cx, cy, r: 124, className: 'compass-ring-branches' }),
          h('circle', { cx, cy, r: 62, className: 'compass-ring-inner' }),

          // 24 Mountain Degree Ticks
          Array.from({ length: 24 }, (_, idx) => {
            const deg = idx * 15;
            const p1 = polarToCartesian(cx, cy, 182, deg);
            const p2 = polarToCartesian(cx, cy, 210, deg);
            return h('line', {
              key: `tick-${idx}`,
              x1: p1.x,
              y1: p1.y,
              x2: p2.x,
              y2: p2.y,
              className: 'compass-spoke-line',
            });
          }),

          // 8 Bagua Trigrams
          BAGUA_RING.map(bg => {
            const pos = polarToCartesian(cx, cy, 196, bg.angle);
            return h(
              'text',
              {
                key: bg.name,
                x: pos.x,
                y: pos.y + 5,
                textAnchor: 'middle',
                className: 'compass-bagua-glyph',
              },
              bg.trigram
            );
          }),

          // Active Constellation Beam from Center to Target Branch
          h(
            'g',
            { className: 'celestial-beam-group' },
            h('line', {
              x1: cx,
              y1: cy,
              x2: beamEnd.x,
              y2: beamEnd.y,
              stroke: 'url(#constellationBeamGrad)',
              strokeWidth: '3.5',
              strokeLinecap: 'round',
              className: 'celestial-constellation-beam',
            }),
            h('circle', {
              cx: beamEnd.x,
              cy: beamEnd.y,
              r: 28,
              className: 'celestial-active-pulse-ring',
            })
          ),

          // 12 Earthly Branches Nodes
          BRANCHES.map((b, idx) => {
            const deg = idx * 30;
            const pos = polarToCartesian(cx, cy, 152, deg);
            const meta = BRANCH_META[b];
            const elTheme = ELEMENT_THEME[meta.element] || ELEMENT_THEME['Thổ'];
            const matchedPillars = branchPillarsMap[b] || [];
            const isTarget = b === targetBranch;
            const hasPillar = matchedPillars.length > 0;

            return h(
              'g',
              {
                key: b,
                onClick: () => setSelectedBranch(b),
                className: `compass-branch-node ${isTarget ? 'is-target' : ''} ${hasPillar ? 'has-pillar' : ''}`,
                style: { cursor: 'pointer' },
              },
              h('circle', {
                cx: pos.x,
                cy: pos.y,
                r: isTarget ? 24 : 20,
                fill: isTarget ? 'rgba(185, 28, 28, 0.88)' : hasPillar ? 'rgba(38, 18, 22, 0.95)' : 'rgba(15, 9, 11, 0.9)',
                stroke: isTarget ? '#fde047' : hasPillar ? elTheme.color : 'rgba(212, 175, 55, 0.3)',
                strokeWidth: isTarget ? '2.5' : hasPillar ? '1.8' : '1',
              }),
              h(
                'text',
                {
                  x: pos.x,
                  y: pos.y - 3,
                  textAnchor: 'middle',
                  fill: isTarget ? '#fef08a' : elTheme.color,
                  fontSize: '14',
                  fontWeight: '700',
                },
                meta.han
              ),
              h(
                'text',
                {
                  x: pos.x,
                  y: pos.y + 12,
                  textAnchor: 'middle',
                  fill: '#f5ebe6',
                  fontSize: '10',
                },
                b
              ),
              hasPillar &&
                h(
                  'text',
                  {
                    x: pos.x,
                    y: pos.y - 26,
                    textAnchor: 'middle',
                    fill: '#fbbf24',
                    fontSize: '9',
                    fontWeight: '700',
                  },
                  `[${matchedPillars.join('/')}]`
                )
            );
          }),

          // Center Taiji Core
          h(
            'g',
            { className: 'compass-core-group' },
            h('circle', { cx, cy, r: 42, fill: 'rgba(18, 8, 10, 0.96)', stroke: '#d4af37', strokeWidth: '1.5' }),
            h(
              'text',
              { x: cx, y: cy - 6, textAnchor: 'middle', fill: '#d4af37', fontSize: '18', fontWeight: '700' },
              chart.dayMasterMeta?.han || '命'
            ),
            h(
              'text',
              { x: cx, y: cy + 12, textAnchor: 'middle', fill: '#f5ebe6', fontSize: '10' },
              `Nhật chủ ${chart.dayStem}`
            ),
            h(
              'text',
              { x: cx, y: cy + 25, textAnchor: 'middle', fill: '#f87171', fontSize: '9' },
              `→ Cung ${targetBranch}`
            )
          )
        )
      ),

      // Right Column: Star Selector & Palace Decree
      h(
        'div',
        { className: 'celestial-info-column' },
        h(
          'div',
          { className: 'celestial-palace-readout' },
          h(
            'div',
            { className: 'palace-readout-top' },
            h('span', { className: 'palace-glyph-badge' }, `${bMeta.han} · Cung ${targetBranch}`),
            h('span', { className: 'palace-dir-tag' }, `Phương vị: ${bMeta.direction} · Mùa: ${bMeta.season}`)
          ),
          h(
            'h3',
            { className: 'palace-star-heading' },
            activeStar ? `✦ ${activeStar.name} (${activeStar.han})` : `Phương vị Cung ${targetBranch}`
          ),
          h(
            'p',
            { className: 'palace-star-desc' },
            activeStar?.desc || 'Khí mạch lưu thông qua 12 địa chi, phản ánh nhịp chuyển vần của đất trời.'
          ),
          h(
            'div',
            { className: 'palace-meta-strip' },
            h('span', null, `Linh thú: ${bMeta.animal}`),
            h('span', null, `Giờ ứng: ${bMeta.hours}`),
            h(
              'span',
              null,
              branchPillarsMap[targetBranch]
                ? `★ Đóng tại Trụ: ${branchPillarsMap[targetBranch].join(', ')}`
                : 'Cung lưu niên / chiếu hợp'
            )
          )
        ),

        h('h4', { className: 'shensha-list-title' }, 'CỬU DIỆU THẦN SÁT CỔ PHÁP (Chạm để xoay tia La Kinh)'),
        h(
          'div',
          { className: 'shensha-grid' },
          shenSha.map(st => {
            const isSel = activeStar && activeStar.id === st.id;
            return h(
              'button',
              {
                key: st.id,
                type: 'button',
                onClick: () => {
                  setSelectedStarId(st.id);
                  setSelectedBranch(st.matchedPillars?.[0]?.branch || st.primaryBranch);
                },
                className: `shensha-card-btn ${isSel ? 'is-selected' : ''} ${st.present ? 'is-present' : 'is-latent'}`,
              },
              h(
                'div',
                { className: 'shensha-btn-top' },
                h('strong', null, st.name),
                h(
                  'span',
                  { className: `shensha-status-badge status-${st.present ? 'present' : 'latent'}` },
                  st.present ? `Nhập mệnh (${st.matchedPillars.map(m => m.label).join('/')})` : `Chiếu cung ${st.primaryBranch}`
                )
              ),
              h('small', null, `${st.han} · Tọa cung: ${st.targets.join(', ')}`)
            );
          })
        )
      )
    )
  );
}
