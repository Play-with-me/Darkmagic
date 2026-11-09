// src/atlas/FiveElementsRadar.mjs
// Bản Đồ 3: Trận Đồ Radar Ngũ Hành Sinh Khắc & Dòng Khí Tuần Hoàn

import { ELEMENT_THEME } from './bazi-engine-ext.mjs';

const ELEMENTS_ORDER = ['Mộc', 'Hỏa', 'Thổ', 'Kim', 'Thủy'];

const GENERATION_INFO = {
  'Mộc':  { generates: 'Hỏa', generatedBy: 'Thủy', controls: 'Thổ', controlledBy: 'Kim' },
  'Hỏa':  { generates: 'Thổ', generatedBy: 'Mộc',  controls: 'Kim', controlledBy: 'Thủy' },
  'Thổ':  { generates: 'Kim', generatedBy: 'Hỏa',  controls: 'Thủy', controlledBy: 'Mộc' },
  'Kim':  { generates: 'Thủy', generatedBy: 'Thổ', controls: 'Mộc', controlledBy: 'Hỏa' },
  'Thủy': { generates: 'Mộc', generatedBy: 'Kim',  controls: 'Hỏa', controlledBy: 'Thổ' },
};

function radarPoint(cx, cy, r, idx) {
  const angleDeg = idx * 72 - 90;
  const rad = (angleDeg * Math.PI) / 180;
  return {
    x: cx + r * Math.cos(rad),
    y: cy + r * Math.sin(rad),
  };
}

export function FiveElementsRadar({ React, chart }) {
  const h = React.createElement;
  const [selectedEl, setSelectedEl] = React.useState(chart.dayElement || 'Thủy');

  const weighted = chart.weightedCounts || { Mộc: 1, Hỏa: 1, Thổ: 1, Kim: 1, Thủy: 1 };
  const rawCounts = chart.counts || { Mộc: 0, Hỏa: 0, Thổ: 0, Kim: 0, Thủy: 0 };
  const totalWeight = Object.values(weighted).reduce((a, b) => a + b, 0) || 1;
  const maxVal = Math.max(...Object.values(weighted), 2.5);

  const cx = 210;
  const cy = 210;
  const maxR = 132;

  // Polygon points for actual chart energy
  const polyPoints = ELEMENTS_ORDER.map((el, idx) => {
    const val = weighted[el] || 0;
    const ratio = Math.max(0.16, Math.min(1, val / maxVal));
    const pt = radarPoint(cx, cy, maxR * ratio, idx);
    return `${pt.x.toFixed(1)},${pt.y.toFixed(1)}`;
  }).join(' ');

  const outerVertices = ELEMENTS_ORDER.map((el, idx) => ({
    el,
    idx,
    ...radarPoint(cx, cy, maxR, idx),
    labelPos: radarPoint(cx, cy, maxR + 40, idx),
  }));

  const selRelation = GENERATION_INFO[selectedEl] || GENERATION_INFO['Thủy'];
  const selTheme = ELEMENT_THEME[selectedEl] || ELEMENT_THEME['Thủy'];

  return h(
    'section',
    {
      id: 'map-five-elements-radar',
      className: 'atlas-card atlas-radar-section',
      'aria-label': 'Bản đồ 3: Trận Đồ Ngũ Hành Sinh Khắc',
    },
    h(
      'div',
      { className: 'atlas-card-header' },
      h(
        'div',
        { className: 'atlas-card-title-group' },
        h('span', { className: 'atlas-map-kicker' }, 'ĐẠI BẢN ĐỒ 03 · NGŨ HÀNH KHÍ TRẬN (五行生剋圖)'),
        h('h2', { className: 'atlas-card-title' }, 'Trận Đồ Ngũ Hành & Dòng Khí Tuần Hoàn'),
        h(
          'p',
          { className: 'atlas-card-subtitle' },
          'Vòng ngoài biểu thị Dòng Khí Tương Sinh tuần hoàn theo chiều kim đồng hồ; ngôi sao 5 cánh bên trong biểu thị mạng lưới Tương Khắc chế hóa.'
        )
      )
    ),

    h(
      'div',
      { className: 'radar-layout' },
      // SVG Radar + Qi Stream
      h(
        'div',
        { className: 'radar-svg-container' },
        h(
          'svg',
          {
            viewBox: '0 0 420 420',
            className: 'five-elements-radar-svg',
            role: 'img',
            'aria-label': 'Biểu đồ Radar Ngũ Hành Sinh Khắc',
          },
          // Outer Qi Generation Stream Circle (Animated Particles)
          h('circle', {
            cx,
            cy,
            r: maxR + 12,
            className: 'qi-generation-ring-track',
          }),
          h('circle', {
            cx,
            cy,
            r: maxR + 12,
            className: 'qi-generation-ring-stream',
          }),

          // Concentric Pentagon Webs
          [0.25, 0.5, 0.75, 1.0].map(scale => {
            const pts = ELEMENTS_ORDER.map((_, idx) => {
              const p = radarPoint(cx, cy, maxR * scale, idx);
              return `${p.x.toFixed(1)},${p.y.toFixed(1)}`;
            }).join(' ');
            return h('polygon', {
              key: scale,
              points: pts,
              className: 'radar-web-polygon',
            });
          }),

          // Inner Overcoming Star (Ngôi Sao Tương Khắc)
          ELEMENTS_ORDER.map((el, idx) => {
            const targetIdx = (idx + 2) % 5;
            const p1 = outerVertices[idx];
            const p2 = outerVertices[targetIdx];
            const isHighlighted = el === selectedEl || ELEMENTS_ORDER[targetIdx] === selectedEl;
            return h('line', {
              key: `star-${el}`,
              x1: p1.x,
              y1: p1.y,
              x2: p2.x,
              y2: p2.y,
              className: `radar-overcoming-line ${isHighlighted ? 'is-active-overcome' : ''}`,
            });
          }),

          // Axis Spokes
          outerVertices.map(v =>
            h('line', {
              key: `axis-${v.el}`,
              x1: cx,
              y1: cy,
              x2: v.x,
              y2: v.y,
              className: 'radar-axis-line',
            })
          ),

          // Filled Energy Polygon
          h('polygon', {
            points: polyPoints,
            className: 'radar-energy-polygon',
          }),

          // Element Vertex Nodes
          outerVertices.map(v => {
            const theme = ELEMENT_THEME[v.el];
            const isSel = v.el === selectedEl;
            const pct = Math.round(((weighted[v.el] || 0) / totalWeight) * 100);
            return h(
              'g',
              {
                key: v.el,
                onClick: () => setSelectedEl(v.el),
                className: `radar-vertex-group ${isSel ? 'is-selected' : ''}`,
                style: { cursor: 'pointer' },
              },
              h('circle', {
                cx: v.x,
                cy: v.y,
                r: isSel ? 22 : 18,
                fill: isSel ? 'rgba(185, 28, 28, 0.92)' : 'rgba(16, 9, 11, 0.94)',
                stroke: theme.color,
                strokeWidth: isSel ? '2.8' : '1.8',
              }),
              h(
                'text',
                {
                  x: v.x,
                  y: v.y + 5,
                  textAnchor: 'middle',
                  fill: theme.color,
                  fontSize: '15',
                  fontWeight: '700',
                },
                theme.han
              ),
              h(
                'text',
                {
                  x: v.labelPos.x,
                  y: v.labelPos.y,
                  textAnchor: 'middle',
                  fill: '#f5ebe6',
                  fontSize: '12',
                  fontWeight: '700',
                },
                `${v.el} (${pct}%)`
              )
            );
          })
        )
      ),

      // Right Column: Five Elements Breakdown & Sinh Khắc Detail
      h(
        'div',
        { className: 'radar-details-column' },
        h(
          'div',
          {
            className: 'radar-selected-banner',
            style: { '--sel-color': selTheme.color },
          },
          h(
            'div',
            { className: 'radar-banner-head' },
            h('span', { className: 'radar-han-seal' }, selTheme.han),
            h(
              'div',
              null,
              h('h3', null, `Hành ${selectedEl} — ${selTheme.guardian}`),
              h('p', null, selTheme.trait)
            )
          ),
          h(
            'div',
            { className: 'sinh-khac-pills' },
            h('span', { className: 'sk-pill sk-sinh' }, `✦ Sinh xuất: ${selectedEl} sinh ${selRelation.generates}`),
            h('span', { className: 'sk-pill sk-duocsinh' }, `✦ Nguồn sinh: ${selRelation.generatedBy} sinh ${selectedEl}`),
            h('span', { className: 'sk-pill sk-khac' }, `⚔ Chế khắc: ${selectedEl} khắc ${selRelation.controls}`),
            h('span', { className: 'sk-pill sk-bikhac' }, `⚡ Bị khắc bởi: ${selRelation.controlledBy}`)
          )
        ),

        h(
          'div',
          { className: 'elements-bars-list' },
          ELEMENTS_ORDER.map(el => {
            const theme = ELEMENT_THEME[el];
            const wVal = weighted[el] || 0;
            const pct = Math.round((wVal / totalWeight) * 100);
            const rawCount = rawCounts[el] || 0;
            const isYong = chart.yongShen?.yongShen?.element === el;
            const isXi = chart.yongShen?.xiShen?.element === el;

            return h(
              'div',
              {
                key: el,
                onClick: () => setSelectedEl(el),
                className: `element-bar-row ${selectedEl === el ? 'is-active' : ''}`,
              },
              h(
                'div',
                { className: 'el-bar-meta' },
                h(
                  'strong',
                  { style: { color: theme.color } },
                  `${theme.han} ${el}`
                ),
                h(
                  'div',
                  { className: 'el-bar-tags' },
                  isYong && h('span', { className: 'yongshen-mini-tag tag-yong' }, '★ Dụng Thần'),
                  isXi && h('span', { className: 'yongshen-mini-tag tag-xi' }, '✦ Hỷ Thần'),
                  h('span', { className: 'el-raw-count' }, `${rawCount} chữ hiển lộ · ${pct}% khí lực`)
                )
              ),
              h(
                'div',
                { className: 'el-bar-track' },
                h('div', {
                  className: 'el-bar-fill',
                  style: {
                    width: `${Math.max(6, pct)}%`,
                    backgroundColor: theme.color,
                  },
                })
              )
            );
          })
        )
      )
    )
  );
}
