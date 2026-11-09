// src/atlas/LuckTimeline.mjs
// Bản Đồ 5: Sóng Sinh Khí Đại Vận 80 Năm & Bảng Lưu Niên Ấn Triện Chu Sa

import { ELEMENT_THEME } from './bazi-engine-ext.mjs';

function buildSmoothWavePath(points) {
  if (!points || points.length === 0) return '';
  let d = `M ${points[0].x} ${points[0].y}`;
  for (let i = 0; i < points.length - 1; i++) {
    const p0 = points[i];
    const p1 = points[i + 1];
    const midX = (p0.x + p1.x) / 2;
    d += ` C ${midX} ${p0.y}, ${midX} ${p1.y}, ${p1.x} ${p1.y}`;
  }
  return d;
}

export function LuckTimeline({ React, chart, onQuickNote }) {
  const h = React.createElement;
  const cycles = chart.timeline?.cycles || [];
  const annuals = chart.timeline?.annuals || [];

  const currentCycle = cycles.find(c => c.isCurrent) || cycles[2] || cycles[0];
  const [selectedCycleIdx, setSelectedCycleIdx] = React.useState(currentCycle?.index || 1);
  const [hoveredCycle, setHoveredCycle] = React.useState(null);

  const activeCycle = hoveredCycle || cycles.find(c => c.index === selectedCycleIdx) || currentCycle;

  // SVG Wave Geometry
  const svgW = 820;
  const svgH = 230;
  const padX = 56;
  const usableW = svgW - padX * 2;

  const wavePoints = cycles.map((c, i) => {
    const x = padX + (i / Math.max(1, cycles.length - 1)) * usableW;
    const score = c.stage?.score || 60;
    const y = svgH - 42 - ((score - 20) / 85) * (svgH - 92);
    return { x, y, cycle: c };
  });

  const wavePath = buildSmoothWavePath(wavePoints);
  const areaPath = wavePoints.length > 1
    ? `${wavePath} L ${wavePoints[wavePoints.length - 1].x} ${svgH - 28} L ${wavePoints[0].x} ${svgH - 28} Z`
    : '';

  return h(
    'section',
    {
      id: 'map-luck-timeline',
      className: 'atlas-card atlas-timeline-section',
      'aria-label': 'Bản đồ 5: Sóng Vận Trình Đại Vận & Lưu Niên',
    },
    h(
      'div',
      { className: 'atlas-card-header' },
      h(
        'div',
        { className: 'atlas-card-title-group' },
        h('span', { className: 'atlas-map-kicker' }, 'ĐẠI BẢN ĐỒ 05 · ĐẠI VẬN & LƯU NIÊN (大運流年圖)'),
        h('h2', { className: 'atlas-card-title' }, 'Sóng Sinh Khí 80 Năm & Ấn Triện Lưu Niên'),
        h(
          'p',
          { className: 'atlas-card-subtitle' },
          'Đường sóng Trường Sinh khắc họa sự thăng trầm của 8 chu kỳ Đại Vận (mỗi vận 10 năm). Chạm vào từng đỉnh sóng để soi chiếu cơ duyên và bước hành động.'
        )
      )
    ),

    // Living Life-Wave SVG
    h(
      'div',
      { className: 'life-wave-svg-wrap' },
      h(
        'svg',
        {
          viewBox: `0 0 ${svgW} ${svgH}`,
          className: 'living-life-wave-svg',
          role: 'img',
          'aria-label': 'Biểu đồ Sóng Sinh Khí 8 Đại Vận',
        },
        h(
          'defs',
          null,
          h(
            'linearGradient',
            { id: 'waveAreaGrad', x1: '0%', y1: '0%', x2: '0%', y2: '100%' },
            h('stop', { offset: '0%', stopColor: '#dc2626', stopOpacity: '0.38' }),
            h('stop', { offset: '60%', stopColor: '#d4af37', stopOpacity: '0.12' }),
            h('stop', { offset: '100%', stopColor: '#090506', stopOpacity: '0' })
          ),
          h(
            'linearGradient',
            { id: 'waveLineGrad', x1: '0%', y1: '0%', x2: '100%', y2: '0%' },
            h('stop', { offset: '0%', stopColor: '#f87171' }),
            h('stop', { offset: '50%', stopColor: '#fde047' }),
            h('stop', { offset: '100%', stopColor: '#34d399' })
          )
        ),

        // Horizontal Guide Lines
        [45, 95, 145, 195].map((gy, idx) =>
          h('line', {
            key: idx,
            x1: padX - 20,
            y1: gy,
            x2: svgW - padX + 20,
            y2: gy,
            className: 'wave-grid-line',
          })
        ),

        // Area under curve
        areaPath && h('path', { d: areaPath, fill: 'url(#waveAreaGrad)' }),

        // Animated Spline Path
        wavePath &&
          h('path', {
            d: wavePath,
            fill: 'none',
            stroke: 'url(#waveLineGrad)',
            strokeWidth: '3.5',
            className: 'wave-spline-animated',
          }),

        // Nodes along the wave
        wavePoints.map(pt => {
          const c = pt.cycle;
          const isAct = activeCycle && activeCycle.index === c.index;
          const elTheme = ELEMENT_THEME[c.element] || ELEMENT_THEME['Thủy'];

          return h(
            'g',
            {
              key: c.index,
              onClick: () => setSelectedCycleIdx(c.index),
              onMouseEnter: () => setHoveredCycle(c),
              onMouseLeave: () => setHoveredCycle(null),
              className: `wave-node-group ${isAct ? 'is-active' : ''} ${c.isCurrent ? 'is-current-cycle' : ''}`,
              style: { cursor: 'pointer' },
            },
            c.isCurrent &&
              h('circle', {
                cx: pt.x,
                cy: pt.y,
                r: 22,
                className: 'wave-current-halo',
              }),
            h('circle', {
              cx: pt.x,
              cy: pt.y,
              r: isAct ? 12 : 9,
              fill: c.isCurrent ? '#b91c1c' : '#160b0d',
              stroke: isAct ? '#fde047' : elTheme.color,
              strokeWidth: isAct ? '3' : '2',
            }),
            h(
              'text',
              {
                x: pt.x,
                y: pt.y - 18,
                textAnchor: 'middle',
                fill: isAct ? '#fef08a' : '#f5ebe6',
                fontSize: '12',
                fontWeight: '700',
              },
              `${c.han} · ${c.name}`
            ),
            h(
              'text',
              {
                x: pt.x,
                y: pt.y - 33,
                textAnchor: 'middle',
                fill: '#fbbf24',
                fontSize: '10',
              },
              `${c.stage?.name} (${c.stage?.score}%)`
            ),
            h(
              'text',
              {
                x: pt.x,
                y: svgH - 8,
                textAnchor: 'middle',
                fill: c.isCurrent ? '#f87171' : '#b89f97',
                fontSize: '11',
                fontWeight: c.isCurrent ? '700' : '400',
              },
              `${c.startYear}–${c.endYear} (${c.startAge}t)`
            )
          );
        })
      )
    ),

    // Selector Pills for 8 Cycles
    h(
      'div',
      { className: 'dayun-pills-row' },
      cycles.map(c => {
        const isSel = activeCycle && activeCycle.index === c.index;
        return h(
          'button',
          {
            key: c.index,
            type: 'button',
            onClick: () => setSelectedCycleIdx(c.index),
            className: `dayun-cycle-btn ${isSel ? 'is-selected' : ''} ${c.isCurrent ? 'is-current' : ''}`,
          },
          c.isCurrent && h('span', { className: 'current-cycle-dot' }, 'ẤN ĐƯƠNG VẬN'),
          h('strong', null, `Vận ${c.index}: ${c.name}`),
          h('small', null, `${c.startYear}–${c.endYear} · ${c.tenGod}`)
        );
      })
    ),

    // Selected 10-Year Cycle Guidance Box
    activeCycle &&
      h(
        'div',
        { className: 'dayun-guidance-panel' },
        h(
          'div',
          { className: 'dayun-guidance-header' },
          h(
            'div',
            null,
            h(
              'span',
              { className: 'dayun-kicker' },
              `ĐẠI VẬN THỨ ${activeCycle.index} (${activeCycle.startYear}–${activeCycle.endYear} · ${activeCycle.startAge}–${activeCycle.endAge} TUỔI)`
            ),
            h(
              'h3',
              null,
              `${activeCycle.han} ${activeCycle.name} · Chủ tinh ${activeCycle.tenGod} · Vòng ${activeCycle.stage?.name}`
            ),
            h('p', { className: 'dayun-nayin-sub' }, `Nạp âm: ${activeCycle.naYin} — Chủ đề: ${activeCycle.guidance?.theme}`)
          ),
          activeCycle.isCurrent &&
            h('span', { className: 'cinnabar-seal-badge' }, '印 ĐẠI VẬN HIỆN TẠI')
        ),
        h(
          'div',
          { className: 'dayun-three-columns' },
          h(
            'div',
            { className: 'dayun-col-box' },
            h('h4', null, '👁️ Cơ Duyên Quan Sát'),
            h('p', null, activeCycle.guidance?.observe)
          ),
          h(
            'div',
            { className: 'dayun-col-box' },
            h('h4', null, '⚠️ Điều Cần Thận Trọng'),
            h('p', null, activeCycle.guidance?.caution)
          ),
          h(
            'div',
            { className: 'dayun-col-box' },
            h('h4', null, '🧭 Bước Hành Động Thực Tế'),
            h('p', null, activeCycle.guidance?.action)
          )
        )
      ),

    // 10-Year Annual Table (Lưu Niên) with Current Year Cinnabar Stamp Pulse
    h(
      'div',
      { className: 'liunian-table-section' },
      h('h3', { className: 'liunian-heading' }, '📜 BẢNG LƯU NIÊN 10 NĂM & ẤN TRIỆN CHU SA ĐƯƠNG NIÊN (2022–2031)'),
      h(
        'div',
        { className: 'liunian-table-wrap' },
        h(
          'table',
          { className: 'liunian-table' },
          h(
            'thead',
            null,
            h(
              'tr',
              null,
              h('th', null, 'Năm Lưu Niên'),
              h('th', null, 'Can Chi & Nạp Âm'),
              h('th', null, 'Thập Thần & Trường Sinh'),
              h('th', null, 'Chủ Đề Vận Niên & Lời Khuyên Hành Sự'),
              h('th', null, 'Ghi Sổ')
            )
          ),
          h(
            'tbody',
            null,
            annuals.map(row =>
              h(
                'tr',
                {
                  key: row.year,
                  className: row.isCurrent ? 'liunian-current-row stamp-pulse-row' : '',
                },
                h(
                  'td',
                  { className: 'liunian-year-cell' },
                  h('strong', null, row.year),
                  row.isCurrent &&
                    h('span', { className: 'cinnabar-year-stamp' }, '印 ĐƯƠNG NIÊN')
                ),
                h(
                  'td',
                  null,
                  h('strong', { className: 'liunian-ganzhi' }, `${row.han} · ${row.name}`),
                  h('small', { className: 'liunian-nayin' }, row.naYin)
                ),
                h(
                  'td',
                  null,
                  h('span', { className: 'liunian-tengod' }, row.tenGod),
                  h('small', { className: 'liunian-stage' }, ` · ${row.stage?.name} (${row.stage?.score}%)`)
                ),
                h(
                  'td',
                  null,
                  h('strong', { className: 'liunian-theme' }, row.theme),
                  h('p', { className: 'liunian-advice' }, row.advice)
                ),
                h(
                  'td',
                  null,
                  h(
                    'button',
                    {
                      type: 'button',
                      className: 'liunian-save-btn',
                      onClick: () =>
                        onQuickNote &&
                        onQuickNote(
                          `Lưu Niên ${row.year} (${row.name} - ${row.tenGod}): ${row.theme}. ${row.advice}`
                        ),
                    },
                    '✎ Lưu'
                  )
                )
              )
            )
          )
        )
      )
    )
  );
}
