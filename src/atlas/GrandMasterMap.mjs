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
  const guide = chart.beginnerGuide || {};
  const archetype = guide.archetype || {};
  const takeaways = guide.takeaways || [];

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
        React.createElement('span', { className: 'grand-master-archetype' }, archetype.archetype || 'Bản Mệnh Chiêm Nghiệm'),
        React.createElement('span', { className: 'grand-master-subtitle' }, ` · ${archetype.tagline || 'Thấu tỏ mệnh cục'}`)
      ),
      React.createElement(
        'p',
        { className: 'grand-master-desc' },
        'Đồ bản hợp nhất 4 cột mốc thời gian (Tứ Trụ), La Kinh 24 Sơn Hướng và Ngũ Khí Triều Nguyên. Dành cho cả người mới muốn nắm bắt hình tượng bản thân trong 30 giây lẫn người nghiên cứu muốn soi sâu mạch khí.'
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
            React.createElement(
              'radialGradient',
              { id: 'masterGlow', cx: '50%', cy: '50%', r: '50%' },
              React.createElement('stop', { offset: '0%', stopColor: elTheme.color, stopOpacity: '0.18' }),
              React.createElement('stop', { offset: '60%', stopColor: 'var(--cinnabar)', stopOpacity: '0.06' }),
              React.createElement('stop', { offset: '100%', stopColor: 'transparent', stopOpacity: '0' })
            )
          ),

          // Nền hào quang mờ
          React.createElement('circle', { cx: 350, cy: 350, r: 335, fill: 'url(#masterGlow)' }),

          // Vòng ngoài cùng: Vòng hào quang nét chỉ tơ tự xoay chậm theo chiều kim đồng hồ
          React.createElement(
            'g',
            { className: 'celestial-orbit-cw' },
            React.createElement('circle', { cx: 350, cy: 350, r: 330, className: 'compass-ring-outer', stroke: 'var(--line)', fill: 'none', strokeWidth: 1.2 }),
            React.createElement('circle', { cx: 350, cy: 350, r: 322, className: 'compass-ring-thin', stroke: 'var(--gold)', fill: 'none', strokeDasharray: '3 6', opacity: 0.7 })
          ),

          // Vòng 12 Địa Chi & 24 Sơn (Tự xoay chậm như thiên thể vũ trụ)
          React.createElement(
            'g',
            { className: 'compass-branches-group celestial-orbit-cw' },
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
                React.createElement('line', {
                  x1: 350 + 280 * Math.cos(rad),
                  y1: 350 + 280 * Math.sin(rad),
                  x2: 350 + 310 * Math.cos(rad),
                  y2: 350 + 310 * Math.sin(rad),
                  stroke: isPillarBranch ? 'var(--gold)' : 'var(--line)',
                  strokeWidth: isPillarBranch ? 2 : 1,
                }),
                React.createElement(
                  'text',
                  {
                    x,
                    y: y + 5,
                    textAnchor: 'middle',
                    className: 'compass-han-text',
                    fill: isPillarBranch ? 'var(--gold)' : 'var(--muted)',
                    fontSize: isPillarBranch ? 16 : 13,
                    fontWeight: isPillarBranch ? '600' : '400',
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
                    fill: isPillarBranch ? brElTheme.color : 'var(--soft)',
                    fontSize: 10,
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
            React.createElement('circle', { cx: 350, cy: 350, r: 235, className: 'compass-ring-middle', stroke: 'var(--line)', fill: 'none', strokeWidth: 1 }),
            React.createElement('circle', { cx: 350, cy: 350, r: 215, className: 'compass-ring-thin', stroke: 'var(--cinnabar)', fill: 'none', strokeDasharray: '4 8', opacity: 0.6 })
          ),

          // Các tia mạch khí chảy liên tục từ tâm đến 4 Trụ Can Chi
          pillars.map((p, idx) => {
            const angles = [300, 30, 120, 210]; // 4 góc bố trí 4 trụ
            const rad = (angles[idx] * Math.PI) / 180;
            const x = 350 + 175 * Math.cos(rad);
            const y = 350 + 175 * Math.sin(rad);
            const pStemTheme = ELEMENT_THEME[p.stemElement] || elTheme;
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
                className: 'qi-stream-line',
                stroke: p.isDayMaster ? 'var(--cinnabar-bright)' : 'var(--copper-gold)',
                strokeWidth: p.isDayMaster ? 2.5 : 1.4,
                opacity: isHovered || p.isDayMaster ? 1 : 0.7,
              }),
              React.createElement('circle', {
                cx: x,
                cy: y,
                r: p.isDayMaster ? 32 : 26,
                fill: 'rgba(11, 16, 14, 0.4)',
                stroke: p.isDayMaster ? 'var(--cinnabar-bright)' : 'var(--line)',
                strokeWidth: p.isDayMaster ? 2 : 1,
              }),
              // Chữ Hán Can Chi Trụ (Thư pháp bút lông)
              React.createElement(
                'text',
                {
                  x,
                  y: y - 2,
                  textAnchor: 'middle',
                  className: 'master-pillar-han',
                  fill: pStemTheme.color,
                  fontSize: p.isDayMaster ? 20 : 16,
                },
                `${p.stemHan}${p.branchHan}`
              ),
              React.createElement(
                'text',
                {
                  x,
                  y: y + 15,
                  textAnchor: 'middle',
                  className: 'master-pillar-name',
                  fill: 'var(--ink)',
                  fontSize: 10,
                },
                p.name
              ),
              React.createElement(
                'text',
                {
                  x,
                  y: y + 42,
                  textAnchor: 'middle',
                  className: 'master-pillar-role-badge',
                  fill: p.isDayMaster ? 'var(--cinnabar-soft)' : 'var(--muted)',
                  fontSize: 9,
                  letterSpacing: 1,
                },
                idx === 2 ? 'NHẬT CHỦ' : `TRỤ ${p.label.toUpperCase()}`
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
              fill: 'rgba(11, 16, 14, 0.5)',
              stroke: 'var(--cinnabar)',
              strokeWidth: 2,
            }),
            React.createElement('circle', {
              cx: 350,
              cy: 350,
              r: 64,
              fill: 'none',
              stroke: 'var(--gold)',
              strokeWidth: 0.8,
              strokeDasharray: '2 4',
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
                fontSize: 44,
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
                fill: 'var(--gold)',
                fontSize: 10,
                letterSpacing: 2,
              },
              `${dayStem} ${dayElement.toUpperCase()}`
            )
          )
        )
      ),

      // CỘT PHẢI: 3 MỤC ĐÚC KẾT KINH THƯ KHẮC NỔI 30 GIÂY (ZERO-CARD, ZERO-EMOJI)
      React.createElement(
        'div',
        { className: 'master-takeaways-column' },
        React.createElement(
          'div',
          { className: 'takeaways-header-row' },
          React.createElement(BookOpenIcon, { React, size: 16, color: 'var(--gold)' }),
          React.createElement('h3', null, 'Cẩm Nang 30 Giây Thấu Hiểu Bản Thân'),
          React.createElement('span', { className: 'takeaways-badge' }, 'ĐÚC KẾT CỐT LÕI')
        ),
        takeaways.map((item) => {
          let sealHan = '本命';
          if (item.id === 'dominant') sealHan = '氣勢';
          if (item.id === 'remedy') sealHan = '補養';

          return React.createElement(
            'div',
            { key: item.id, className: 'takeaway-editorial-row' },
            React.createElement(
              'div',
              { className: 'takeaway-label-row' },
              React.createElement(
                'span',
                { className: 'takeaway-tag' },
                React.createElement('span', { style: { fontFamily: 'var(--font-han-brush)', color: 'var(--cinnabar-glow)', marginRight: '6px' } }, sealHan),
                item.label
              )
            ),
            React.createElement('h4', { className: 'takeaway-title' }, item.title),
            React.createElement('div', { className: 'takeaway-sub' }, item.subtitle),
            React.createElement('p', { className: 'takeaway-body' }, item.detail)
          );
        })
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
        { id: 'ten-gods', num: 'IV', label: 'Thập Thần & Dụng Thần', icon: AwardIcon },
        { id: 'luck-timeline', num: 'V', label: 'Đại Vận 80 Năm', icon: MilestoneIcon },
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
