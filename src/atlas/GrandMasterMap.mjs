/**
 * src/atlas/GrandMasterMap.mjs
 * ĐẠI MỆNH BÀN TỔNG HỢP (Grand Master Atlas)
 * Đồ bản lớn khởi đầu lá số: kết hợp La Kinh 24 Sơn, Tứ Trụ Can Chi,
 * Mạng lưới Ngũ Hành và 3 Thẻ Đọc Nhanh 30 Giây dành cho người mới.
 */

import {
  CompassIcon,
  SparklesIcon,
  ScrollTextIcon,
  LayersIcon,
  ScaleIcon,
  MilestoneIcon,
  BookOpenIcon,
  AwardIcon,
  ArrowUpRightIcon,
} from './icons.mjs';
import { ELEMENT_THEME, STEM_META, BRANCH_META } from './bazi-engine-ext.mjs';

export function GrandMasterMap({ React, chart, onNavigateChapter }) {
  if (!chart || !chart.pillars) return null;

  const [activeTab, setActiveTab] = React.useState('takeaways'); // 'takeaways' | 'pillars_overview'
  const [hoveredPillar, setHoveredPillar] = React.useState(null);

  const pillars = chart.pillars;
  const dayMaster = pillars[2] || {};
  const dayStem = chart.dayStem || 'Nhâm';
  const dayStemHan = STEM_META[dayStem]?.han || '壬';
  const dayElement = chart.dayElement || 'Thủy';
  const elTheme = ELEMENT_THEME[dayElement] || ELEMENT_THEME['Thủy'];

  // 12 nhánh Địa Chi trên vòng tròn La Kinh
  const circleBranches = [
    { name: 'Tý', han: '子', angle: 270, element: 'Thủy' },
    { name: 'Sửu', han: '丑', angle: 300, element: 'Thổ' },
    { name: 'Dần', han: '寅', angle: 330, element: 'Mộc' },
    { name: 'Mão', han: '卯', angle: 0, element: 'Mộc' },
    { name: 'Thìn', han: '辰', angle: 30, element: 'Thổ' },
    { name: 'Tỵ', han: '巳', angle: 60, element: 'Hỏa' },
    { name: 'Ngọ', han: '午', angle: 90, element: 'Hỏa' },
    { name: 'Mùi', han: '未', angle: 120, element: 'Thổ' },
    { name: 'Thân', han: '申', angle: 150, element: 'Kim' },
    { name: 'Dậu', han: '酉', angle: 180, element: 'Kim' },
    { name: 'Tuất', han: '戌', angle: 210, element: 'Thổ' },
    { name: 'Hợi', han: '亥', angle: 240, element: 'Thủy' },
  ];

  return React.createElement(
    'section',
    {
      className: 'grand-master-atlas ritual-mist-card',
      'aria-label': 'Đại Mệnh Bàn Tổng Hợp',
      id: 'grand-master-map',
    },
    // 1. Tiêu đề Đại Mệnh Bàn
    React.createElement(
      'header',
      { className: 'grand-master-header' },
      React.createElement(
        'div',
        { className: 'grand-master-badge' },
        React.createElement(CompassIcon, { React, size: 14, color: 'var(--gold)' }),
        React.createElement('span', null, 'CỔ PHÁP ĐÔNG PHƯƠNG · ĐẠI MỆNH BÀN TỔNG HỢP')
      ),
      React.createElement(
        'h2',
        { className: 'grand-master-title' },
      React.createElement('span', { className: 'grand-master-archetype' }, 'Đại Mệnh Bàn Tổng Hợp'),
      React.createElement('span', { className: 'grand-master-subtitle' }, ' · Bốn trụ và các lớp dữ kiện')
      ),
      React.createElement(
        'p',
        { className: 'grand-master-desc' },
        'Đồ bản đặt bốn trụ sinh vào cùng một hình để bạn nhìn toàn cấu trúc trước khi đọc giải nghĩa. Các vòng và đường nối là cách trình bày dữ kiện, không phải bằng chứng về tính cách hay sự kiện tương lai.'
      )
    ),

    // 2. KHU VỰC BỐ CỤC CHIA ĐÔI: TRÁI ĐẠI LA KINH / PHẢI 3 ĐÚC KẾT KINH THƯ
    React.createElement(
      'div',
      { className: 'grand-master-split-body' },

      // CỘT TRÁI: ĐỒ BẢN LA KINH TỔNG HỢP VỚI CHUYỂN ĐỘNG THIÊN THỂ 60FPS
      React.createElement(
        'div',
        { className: 'grand-master-visual-frame' },
        React.createElement(
          'svg',
          {
            viewBox: '0 0 700 700',
            className: 'grand-master-svg',
            role: 'img',
            'aria-label': 'Sơ đồ Đại Mệnh Bàn La Kinh',
          },
          React.createElement(
            'defs',
            null,
            // 1. Đĩa nền Thiên Bàn ngọc đen huyền bí (Obsidian Plate) tách lớp khỏi nền trang web
            React.createElement(
              'radialGradient',
              { id: 'celestialPlateGrad', cx: '50%', cy: '50%', r: '50%' },
              React.createElement('stop', { offset: '0%', stopColor: '#1d2722', stopOpacity: '0.98' }),
              React.createElement('stop', { offset: '60%', stopColor: '#141d18', stopOpacity: '0.98' }),
              React.createElement('stop', { offset: '90%', stopColor: '#0e1512', stopOpacity: '0.98' }),
              React.createElement('stop', { offset: '100%', stopColor: '#0a0f0d', stopOpacity: '0.99' })
            ),
            // 2. Vầng hào quang đồng hồng quanh mép đĩa
            React.createElement(
              'radialGradient',
              { id: 'masterGlow', cx: '50%', cy: '50%', r: '50%' },
              React.createElement('stop', { offset: '75%', stopColor: 'transparent', stopOpacity: '0' }),
              React.createElement('stop', { offset: '95%', stopColor: 'var(--copper-gold)', stopOpacity: '0.3' }),
              React.createElement('stop', { offset: '100%', stopColor: 'transparent', stopOpacity: '0' })
            )
          ),

          // Đĩa Thiên Bàn Ngọc Đen (Tách lớp hoàn toàn khỏi nền web)
          React.createElement('circle', {
            cx: 350,
            cy: 350,
            r: 338,
            fill: 'url(#celestialPlateGrad)',
            stroke: 'var(--copper-gold)',
            strokeWidth: 1.5,
            strokeOpacity: 0.55,
            filter: 'drop-shadow(0 0 22px rgba(191, 75, 69, 0.28))',
          }),
          // Hào quang viền mờ
          React.createElement('circle', { cx: 350, cy: 350, r: 348, fill: 'url(#masterGlow)' }),

          // Vòng ngoài cùng: Vòng hào quang nét chỉ tơ tự xoay chậm theo chiều kim đồng hồ
          React.createElement(
            'g',
            { className: 'celestial-orbit-cw' },
            React.createElement('circle', {
              cx: 350,
              cy: 350,
              r: 330,
              className: 'compass-ring-outer',
              stroke: 'var(--copper-gold)',
              fill: 'none',
              strokeWidth: 1.2,
              strokeOpacity: 0.65,
            }),
            React.createElement('circle', {
              cx: 350,
              cy: 350,
              r: 322,
              className: 'compass-ring-thin',
              stroke: 'var(--gold)',
              fill: 'none',
              strokeDasharray: '3 6',
              strokeOpacity: 0.85,
            })
          ),

          // Vòng 12 Địa Chi & 24 Sơn:
          // 1. Nhóm vạch la bàn tự xoay 60fps mượt mà
          React.createElement(
            'g',
            { className: 'compass-ticks-rotating celestial-orbit-cw' },
            circleBranches.map((br) => {
              const rad = (br.angle * Math.PI) / 180;
              const isPillarBranch = pillars.some((p) => p.branch === br.name);
              return React.createElement('line', {
                key: `tick-${br.name}`,
                x1: 350 + 280 * Math.cos(rad),
                y1: 350 + 280 * Math.sin(rad),
                x2: 350 + 310 * Math.cos(rad),
                y2: 350 + 310 * Math.sin(rad),
                stroke: isPillarBranch ? '#f5d59f' : 'rgba(214, 154, 136, 0.6)',
                strokeWidth: isPillarBranch ? 2.2 : 1.2,
              });
            })
          ),

          // 2. Nhóm chữ Địa Chi cố định vị trí (luôn đứng thẳng, không bao giờ bị lộn ngược đầu)
          React.createElement(
            'g',
            { className: 'compass-branches-labels' },
            circleBranches.map((br) => {
              const rad = (br.angle * Math.PI) / 180;
              const x = 350 + 295 * Math.cos(rad);
              const y = 350 + 295 * Math.sin(rad);
              const isPillarBranch = pillars.some((p) => p.branch === br.name);
              const brElTheme = ELEMENT_THEME[br.element] || elTheme;

              return React.createElement(
                'g',
                {
                  key: br.name,
                  className: `compass-branch-node ${isPillarBranch ? 'is-active-pillar' : ''}`,
                },
                React.createElement(
                  'text',
                  {
                    x,
                    y: y + 5,
                    textAnchor: 'middle',
                    className: 'compass-han-text',
                    fill: isPillarBranch ? '#f7dfb9' : '#e6caa5',
                    fontSize: isPillarBranch ? 17 : 14,
                    fontWeight: isPillarBranch ? '700' : '600',
                  },
                  br.han
                ),
                React.createElement(
                  'text',
                  {
                    x: 350 + 265 * Math.cos(rad),
                    y: 350 + 265 * Math.sin(rad) + 4,
                    textAnchor: 'middle',
                    className: 'compass-viet-text',
                    fill: isPillarBranch ? brElTheme.color : '#f3ebe4',
                    fontSize: 10,
                    fontWeight: isPillarBranch ? '600' : '500',
                  },
                  br.name
                )
              );
            })
          ),

          // Vòng Trung Giới: 5 Cung Ngũ Hành tự xoay chậm ngược chiều
          React.createElement(
            'g',
            { className: 'celestial-orbit-ccw' },
            React.createElement('circle', {
              cx: 350,
              cy: 350,
              r: 235,
              className: 'compass-ring-middle',
              stroke: 'var(--copper-gold)',
              fill: 'none',
              strokeWidth: 1.2,
              strokeOpacity: 0.7,
            }),
            React.createElement('circle', {
              cx: 350,
              cy: 350,
              r: 215,
              className: 'compass-ring-thin',
              stroke: 'var(--cinnabar-bright)',
              fill: 'none',
              strokeDasharray: '4 8',
              strokeOpacity: 0.85,
            })
          ),

          // Các tia mạch khí chảy liên tục từ tâm đến 4 Trụ Can Chi
          pillars.map((p, idx) => {
            const angles = [300, 30, 120, 210]; // 4 góc bố trí 4 trụ
            const rad = (angles[idx] * Math.PI) / 180;
            const x = 350 + 175 * Math.cos(rad);
            const y = 350 + 175 * Math.sin(rad);
            const isUnknown = p.isUnknown || (!p.stem && !p.branch);
            const pStemTheme = (!isUnknown && p.stemElement) ? (ELEMENT_THEME[p.stemElement] || elTheme) : { color: '#8c7d74' };
            const isHovered = hoveredPillar === idx;

            return React.createElement(
              'g',
              {
                key: p.label,
                className: `master-pillar-station ${isHovered ? 'is-hovered' : ''}`,
                onMouseEnter: () => setHoveredPillar(idx),
                onMouseLeave: () => setHoveredPillar(null),
                style: { cursor: 'pointer' },
                onClick: () => onNavigateChapter && onNavigateChapter('bazi-matrix'),
              },
              React.createElement('line', {
                x1: 350,
                y1: 350,
                x2: x,
                y2: y,
                className: isUnknown ? 'qi-stream-line-dash' : 'qi-stream-line',
                stroke: isUnknown ? 'rgba(152, 123, 112, 0.35)' : (p.isDayMaster ? 'var(--cinnabar-bright)' : 'var(--copper-gold)'),
                strokeWidth: p.isDayMaster ? 2.5 : 1.6,
                strokeDasharray: isUnknown ? '3 4' : undefined,
                opacity: isHovered || p.isDayMaster ? 1 : 0.75,
              }),
              React.createElement('circle', {
                cx: x,
                cy: y,
                r: p.isDayMaster ? 32 : 26,
                fill: 'rgba(28, 38, 34, 0.96)',
                stroke: isUnknown ? 'rgba(152, 123, 112, 0.45)' : (p.isDayMaster ? 'var(--cinnabar-bright)' : 'var(--copper-gold)'),
                strokeWidth: p.isDayMaster ? 2.4 : 1.4,
              }),
              // Chữ Hán Can Chi Trụ (Thư pháp bút lông)
              React.createElement(
                'text',
                {
                  x,
                  y: y - 2,
                  textAnchor: 'middle',
                  className: 'master-pillar-han',
                  fill: isUnknown ? '#7d7067' : pStemTheme.color,
                  fontSize: p.isDayMaster ? 21 : 17,
                  fontWeight: '700',
                },
                isUnknown ? '——' : `${p.stemHan}${p.branchHan}`
              ),
              React.createElement(
                'text',
                {
                  x,
                  y: y + 15,
                  textAnchor: 'middle',
                  className: 'master-pillar-name',
                  fill: isUnknown ? '#a89d95' : '#ffffff',
                  fontSize: 10.5,
                  fontWeight: '600',
                },
                isUnknown ? 'Chưa rõ giờ' : p.name
              ),
              React.createElement(
                'text',
                {
                  x,
                  y: y + 42,
                  textAnchor: 'middle',
                  className: 'master-pillar-role-badge',
                  fill: isUnknown ? '#8c7d74' : (p.isDayMaster ? '#f2a79b' : '#e5b098'),
                  fontSize: 10,
                  fontWeight: '600',
                  letterSpacing: 1.5,
                },
                idx === 2 ? 'NHẬT CHỦ' : (isUnknown ? 'TRỤ GIỜ (KHUYẾT)' : `TRỤ ${p.label.toUpperCase()}`)
              )
            );
          }),

          // Tâm Đại Mệnh Bàn: Thái Cực Âm Dương & Chu Sa Ấn Chương Nhật Chủ mang nhịp thở hào quang
          React.createElement(
            'g',
            { className: 'grand-master-core aura-breathe' },
            React.createElement('circle', {
              cx: 350,
              cy: 350,
              r: 72,
              fill: 'rgba(26, 36, 31, 0.98)',
              stroke: 'var(--cinnabar-bright)',
              strokeWidth: 2.2,
            }),
            React.createElement('circle', {
              cx: 350,
              cy: 350,
              r: 64,
              fill: 'none',
              stroke: 'var(--gold)',
              strokeWidth: 1.2,
              strokeDasharray: '3 5',
              strokeOpacity: 0.9,
            }),
            // Chữ Hán Thư Pháp lớn của Nhật Can
            React.createElement(
              'text',
              {
                x: 350,
                y: 348,
                textAnchor: 'middle',
                className: 'master-core-brush-han',
                fill: elTheme.color,
                fontSize: 48,
                fontWeight: '700',
              },
              dayStemHan
            ),
            React.createElement(
              'text',
              {
                x: 350,
                y: 382,
                textAnchor: 'middle',
                className: 'master-core-sub',
                fill: '#ffffff',
                fontSize: 11,
                fontWeight: '600',
                letterSpacing: 2,
              },
              `${dayStem} ${dayElement.toUpperCase()}`
            )
          )
        )
      )
    ),

    // 4. Thanh Nhảy Nhanh 5 Chương (Navigation Jump Links)
    React.createElement(
      'nav',
      { className: 'master-jump-strip', 'aria-label': 'Chuyển nhanh đến từng bản đồ' },
      [
        { id: 'bazi-matrix', num: 'I', label: 'Tứ Trụ Huyền Bàn', icon: LayersIcon },
        { id: 'celestial-wheel', num: 'II', label: 'La Kinh 24 Sơn', icon: CompassIcon },
        { id: 'five-elements', num: 'III', label: 'Ngũ Hành Sinh Khắc', icon: ScaleIcon },
        { id: 'ten-gods', num: 'IV', label: 'Thập Thần', icon: AwardIcon },
        { id: 'luck-timeline', num: 'V', label: 'Đại Vận & Lưu Niên', icon: MilestoneIcon },
      ].map((chapter) =>
        React.createElement(
          'button',
          {
            key: chapter.id,
            type: 'button',
            className: 'master-jump-pill',
            onClick: () => {
              if (onNavigateChapter) onNavigateChapter(chapter.id);
              const target = document.getElementById(chapter.id);
              if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            },
          },
          React.createElement(chapter.icon, { React, size: 14 }),
          React.createElement('span', { className: 'jump-num' }, `Đồ Bản ${chapter.num}`),
          React.createElement('span', { className: 'jump-text' }, chapter.label)
        )
      )
    )
  );
}
