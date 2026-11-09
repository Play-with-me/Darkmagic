/**
 * src/atlas/LuckTimeline.mjs
 * ĐỒ BẢN V: ĐẠI VẬN LƯU NIÊN THỦY TRIỀU ĐỒ & CHU SA ẤN
 * Bố cục Split-View:
 * - Cột Trái: Đồ thị Thủy Triều 8 Đại Vận (80 năm) + Lưới Lưu Niên + Chu Sa Ấn
 * - Cột Phải: Lời giải đời thường giải mã nhịp điệu thăng trầm và thời cơ cuộc đời cho người mới
 */

import {
  MilestoneIcon,
  SparklesIcon,
  BookOpenIcon,
  InfoIcon,
  CheckCircleIcon,
  AwardIcon,
  ArrowUpRightIcon,
} from './icons.mjs';
import { ELEMENT_THEME } from './bazi-engine-ext.mjs';

export function LuckTimeline({ React, chart }) {
  const h = React.createElement;
  const timeline = chart.timeline || { cycles: [], annuals: [] };
  const cycles = timeline.cycles || [];
  const annuals = timeline.annuals || [];

  const defaultCycleIdx = cycles.findIndex((c) => c.isCurrent);
  const [selectedCycleIdx, setSelectedCycleIdx] = React.useState(defaultCycleIdx >= 0 ? defaultCycleIdx : 2);
  const [selectedYear, setSelectedYear] = React.useState(new Date().getFullYear());

  const curCycle = cycles[selectedCycleIdx] || cycles[0] || {
    name: 'Bính Dần',
    han: '丙寅',
    tenGod: 'Chính tài',
    startAge: 25,
    endAge: 34,
    startYear: 2020,
    endYear: 2029,
    guidance: {
      theme: 'Tài Chính Minh Bạch & Tích Lũy Vững Chắc',
      observe: 'Cơ hội phát triển tài chính qua công việc chuyên môn ổn định.',
      caution: 'Tránh đầu cơ rủi ro cao hoặc chi tiêu phung phí.',
      action: 'Tập trung xây dựng nền móng sự nghiệp và tích lũy dài hạn.',
    },
  };

  const curAnnual = annuals.find((a) => a.year === selectedYear) || annuals[0] || {};
  const cycleTheme = ELEMENT_THEME[curCycle.element] || ELEMENT_THEME['Hỏa'];

  return h(
    'section',
    {
      id: 'luck-timeline',
      className: 'atlas-chapter-section ritual-mist-card',
      'aria-label': 'Đồ Bản V: Đại Vận Lưu Niên Thủy Triều Đồ',
    },
    // Tiêu đề chương
    h(
      'header',
      { className: 'chapter-header' },
      h(
        'div',
        { className: 'chapter-badge' },
        h(MilestoneIcon, { React, size: 14, color: 'var(--gold)' }),
        h('span', null, 'ĐỒ BẢN V · ĐẠI VẬN THỦY TRIỀU (大運流年)')
      ),
      h('h2', { className: 'chapter-title' }, 'Đại Vận Lưu Niên Thủy Triều Đồ & Chu Sa Ấn'),
      h(
        'p',
        { className: 'chapter-desc' },
        'Đời người như con thuyền trên sông lớn, Đại Vận 10 năm là dòng nước xuôi ngược. Bấm chọn từng Đại Vận bên trái để đóng ấn Chu Sa và đọc cẩm nang hành động bên phải.'
      )
    ),

    // Bố cục Chia Đôi (Split View)
    h(
      'div',
      { className: 'chapter-split-layout' },

      // ================= CỘT TRÁI: ĐỒ THỊ CHUYÊN SÂU =================
      h(
        'div',
        { className: 'split-column split-column-tech' },
        h(
          'div',
          { className: 'column-header-bar' },
          h('span', { className: 'col-tag pro-tag' }, 'DÀNH CHO DÂN CHUYÊN · ĐỒ THỊ 8 ĐẠI VẬN (80 NĂM)'),
          h('span', { className: 'col-hint' }, 'Bấm chọn Đại Vận để kích hoạt Chu Sa Ấn')
        ),

        // Đồ thị Sóng Thủy Triều 8 Đại Vận SVG
        h(
          'div',
          { className: 'timeline-svg-container' },
          h(
            'svg',
            {
              viewBox: '0 0 680 260',
              className: 'luck-wave-svg',
              role: 'img',
              'aria-label': 'Đồ thị nhịp điệu 8 Đại Vận',
            },
            h(
              'defs',
              null,
              h(
                'linearGradient',
                { id: 'waveFill', x1: '0', y1: '0', x2: '0', y2: '1' },
                h('stop', { offset: '0%', stopColor: 'var(--gold)', stopOpacity: '0.22' }),
                h('stop', { offset: '100%', stopColor: 'var(--cinnabar)', stopOpacity: '0.02' })
              )
            ),

            // Các vạch lưới ngang chỉ tơ
            [60, 110, 160, 210].map((y, idx) =>
              h('line', {
                key: idx,
                x1: 40,
                y1: y,
                x2: 640,
                y2: y,
                stroke: 'var(--line)',
                strokeWidth: 0.8,
                strokeDasharray: '2 4',
                opacity: 0.5,
              })
            ),

            // Đồ thị dạng đường cong mềm mại
            cycles.length > 1 &&
              h('path', {
                d: cycles.reduce((acc, c, idx) => {
                  const x = 50 + idx * 80;
                  const y = 200 - ((c.stage?.score || 50) / 100) * 140;
                  return idx === 0 ? `M ${x} ${y}` : `${acc} L ${x} ${y}`;
                }, ''),
                fill: 'none',
                stroke: 'var(--gold)',
                strokeWidth: 2,
              }),

            // Vùng diện tích mờ phía dưới đường sóng
            cycles.length > 1 &&
              h('path', {
                d: `${cycles.reduce((acc, c, idx) => {
                  const x = 50 + idx * 80;
                  const y = 200 - ((c.stage?.score || 50) / 100) * 140;
                  return idx === 0 ? `M ${x} ${y}` : `${acc} L ${x} ${y}`;
                }, '')} L ${50 + (cycles.length - 1) * 80} 220 L 50 220 Z`,
                fill: 'url(#waveFill)',
              }),

            // 8 Cột Mốc Đại Vận trên sóng
            cycles.map((c, idx) => {
              const x = 50 + idx * 80;
              const y = 200 - ((c.stage?.score || 50) / 100) * 140;
              const isSelected = selectedCycleIdx === idx;
              const theme = ELEMENT_THEME[c.element] || cycleTheme;

              return h(
                'g',
                {
                  key: idx,
                  className: `wave-node ${isSelected ? 'is-selected-cycle' : ''}`,
                  onClick: () => setSelectedCycleIdx(idx),
                  style: { cursor: 'pointer' },
                },
                // Vòng hào quang nếu chọn
                isSelected &&
                  h('circle', {
                    cx: x,
                    cy: y,
                    r: 22,
                    fill: 'none',
                    stroke: 'var(--cinnabar-bright)',
                    strokeWidth: 1.5,
                    strokeDasharray: '2 3',
                  }),
                h('circle', {
                  cx: x,
                  cy: y,
                  r: isSelected ? 12 : 7,
                  fill: isSelected ? 'var(--cinnabar-bright)' : theme.color,
                  stroke: 'var(--paper-card)',
                  strokeWidth: 2,
                }),
                // Chữ Hán Thư Pháp Can Chi
                h(
                  'text',
                  {
                    x,
                    y: y - 18,
                    textAnchor: 'middle',
                    className: 'wave-han-char',
                    fill: isSelected ? 'var(--gold)' : 'var(--ink)',
                    fontSize: isSelected ? 15 : 12,
                    fontWeight: isSelected ? '600' : '400',
                  },
                  c.han
                ),
                // Độ tuổi & Năm
                h(
                  'text',
                  {
                    x,
                    y: 235,
                    textAnchor: 'middle',
                    className: 'wave-age-label',
                    fill: isSelected ? 'var(--gold)' : 'var(--muted)',
                    fontSize: 9,
                  },
                  `${c.startAge}t`
                )
              );
            })
          )
        ),

        // Lưới 10 năm Lưu Niên trong giai đoạn hiện tại
        h(
          'div',
          { className: 'annuals-timeline-panel' },
          h('h4', { className: 'panel-subtitle' }, 'Các Năm Lưu Niên Gần Nhất (Bấm chọn để soi vận năm):'),
          h(
            'div',
            { className: 'annuals-chips-grid' },
            annuals.map((yr) => {
              const isSelected = selectedYear === yr.year;
              return h(
                'button',
                {
                  key: yr.year,
                  type: 'button',
                  className: `annual-chip ${isSelected ? 'is-selected-year' : ''} ${yr.isCurrent ? 'is-now-year' : ''}`,
                  onClick: () => setSelectedYear(yr.year),
                },
                h('span', { className: 'annual-year-num' }, yr.year),
                h(
                  'strong',
                  { className: 'annual-han-name' },
                  h('span', { className: 'annual-han-char' }, yr.han),
                  h('span', { className: 'annual-sep' }, ' · '),
                  h('span', { className: 'annual-viet-name' }, yr.name)
                ),
                h('small', { className: 'annual-god' }, yr.tenGod)
              );
            })
          )
        )
      ),

      // ================= CỘT PHẢI: LỜI GIẢI ĐỜI THƯỜNG =================
      h(
        'div',
        { className: 'split-column split-column-guide' },
        h(
          'div',
          { className: 'column-header-bar' },
          h('span', { className: 'col-tag beginner-tag' }, 'DÀNH CHO NGƯỜI ĐỌC · NHỊP ĐIỆU CUỘC ĐỜI & ĐẠI VẬN'),
          h('span', { className: 'col-hint' }, `Đang soi: Đại Vận ${curCycle.name} (${curCycle.startAge}–${curCycle.endAge} tuổi)`)
        ),

        // Hàng nút chọn nhanh Đại Vận 10 năm
        h(
          'div',
          { className: 'quick-switch-tabs' },
          cycles.map((c) =>
            h(
              'button',
              {
                key: c.index,
                type: 'button',
                className: `switch-tab-btn ${curCycle.index === c.index ? 'is-active' : ''}`,
                onClick: () => setSelectedCycleIdx(c.index),
              },
              `${c.startAge}–${c.endAge}t: ${c.name}${c.isCurrent ? ' ★' : ''}`
            )
          )
        ),

        // Thẻ Giải Mã Đại Vận Đang Chọn
        h(
          'div',
          { className: 'guide-card-primary' },
          h(
            'div',
            { className: 'guide-card-head' },
            h(
              'div',
              { className: 'guide-card-badge' },
              h(MilestoneIcon, { React, size: 14, color: 'var(--gold)' }),
              h('span', null, `Đại Vận ${curCycle.startAge} – ${curCycle.endAge} Tuổi (${curCycle.han})`)
            ),
            h('span', { className: 'guide-period-pill' }, `${curCycle.startYear} – ${curCycle.endYear}`)
          ),
          h('h3', { className: 'guide-headline' }, curCycle.guidance?.theme || 'Giai Đoạn Bứt Phá Năng Lực'),
          h('p', { className: 'guide-meaning-body' }, curCycle.guidance?.observe || 'Môi trường thuận lợi mở rộng kinh nghiệm.'),
          h(
            'div',
            { className: 'guide-prompt-quote' },
            h(InfoIcon, { React, size: 15, color: 'var(--gold)' }),
            h('span', null, `Chiến lược cốt lõi: ${curCycle.guidance?.action || 'Kiên trì mục tiêu dài hạn.'}`)
          ),

          // Lưới 4 Chiều Chiến Lược 10 Năm (Xu thế, Cơ hội, Cẩn trọng, Hành động)
          h(
            'div',
            { className: 'guide-domains-grid' },
            h(
              'div',
              { className: 'domain-card' },
              h(
                'div',
                { className: 'domain-card-head' },
                h('span', { style: { fontFamily: 'var(--font-han-brush)', color: 'var(--cinnabar-glow)', marginRight: '6px', fontSize: '13px' } }, '戰略'),
                'Nhịp Điệu Chiến Lược'
              ),
              h('p', { className: 'domain-card-desc' }, curCycle.tenGod.includes('Tài') || curCycle.tenGod.includes('Thương') ? 'Vận Tiến Công: Thời điểm vàng mở rộng kinh doanh, đầu tư và bứt phá danh tiếng.' : 'Vận Tích Lũy: Tập trung học tập, củng cố nội lực, xây dựng nền tảng vững chắc.')
            ),
            h(
              'div',
              { className: 'domain-card' },
              h(
                'div',
                { className: 'domain-card-head' },
                h('span', { style: { fontFamily: 'var(--font-han-brush)', color: 'var(--cinnabar-glow)', marginRight: '6px', fontSize: '13px' } }, '契機'),
                'Cơ Hội Bứt Phá'
              ),
              h('p', { className: 'domain-card-desc' }, curCycle.guidance?.observe)
            ),
            h(
              'div',
              { className: 'domain-card' },
              h(
                'div',
                { className: 'domain-card-head' },
                h('span', { style: { fontFamily: 'var(--font-han-brush)', color: 'var(--cinnabar-glow)', marginRight: '6px', fontSize: '13px' } }, '警示'),
                'Điểm Cần Cẩn Trọng'
              ),
              h('p', { className: 'domain-card-desc' }, curCycle.guidance?.caution)
            ),
            h(
              'div',
              { className: 'domain-card' },
              h(
                'div',
                { className: 'domain-card-head' },
                h('span', { style: { fontFamily: 'var(--font-han-brush)', color: 'var(--cinnabar-glow)', marginRight: '6px', fontSize: '13px' } }, '踐行'),
                'Hành Động Đề Xuất'
              ),
              h('p', { className: 'domain-card-desc' }, curCycle.guidance?.action)
            )
          )
        ),

        // Thẻ Chi Tiết Năm Lưu Niên Đang Chọn (có thanh chọn nhanh các năm)
        h(
          'div',
          { className: 'guide-card-secondary' },
          h('h4', { className: 'card-sec-title' }, `Điểm Rơi Vận Khí Năm ${curAnnual.year} (${curAnnual.name} · ${curAnnual.han})`),
          // Hàng nút chọn nhanh năm
          h(
            'div',
            { className: 'quick-switch-tabs', style: { marginBottom: '12px' } },
            annuals.map((yr) =>
              h(
                'button',
                {
                  key: yr.year,
                  type: 'button',
                  className: `switch-tab-btn ${curAnnual.year === yr.year ? 'is-active' : ''}`,
                  onClick: () => setSelectedYear(yr.year),
                },
                `${yr.year} ${yr.name}${yr.isCurrent ? ' (Hiện tại)' : ''}`
              )
            )
          ),
          h(
            'div',
            { className: 'guide-traits-grid' },
            h(
              'div',
              { className: 'trait-box' },
              h('span', { className: 'trait-label' }, 'Quan Hệ Với Bạn'),
              h('strong', null, curAnnual.tenGod),
              h('p', null, curAnnual.theme)
            ),
            h(
              'div',
              { className: 'trait-box' },
              h('span', { className: 'trait-label' }, 'Vòng Sinh Khí'),
              h('strong', null, curAnnual.stage?.name || 'Bình hòa'),
              h('p', null, curAnnual.stage?.omen || 'Khí thế thuận buồm xuôi gió.')
            )
          ),
          h(
            'div',
            { className: 'guide-prompt-quote', style: { marginTop: '12px' } },
            h(InfoIcon, { React, size: 14, color: 'var(--copper-gold)' }),
            h('span', null, `Lời khuyên cho năm ${curAnnual.year}: ${curAnnual.advice || 'Chủ động điều phối công việc linh hoạt.'}`)
          )
        ),

        // Chu Sa Ấn Xác Nhận Chiêm Nghiệm
        h(
          'div',
          { className: 'guide-card-action cinnabar-seal-card aura-breathe' },
          h(AwardIcon, { React, size: 20, color: 'var(--cinnabar-bright)' }),
          h(
            'div',
            { className: 'guide-action-text' },
            h('strong', null, 'Chu Sa Ấn Pháp Quyết:'),
            h('p', null, `Thời thế thay đổi sau mỗi 10 năm. Khi gặp vận thuận lợi hãy dũng cảm vươn buồm; khi gặp vận thử thách hãy kiên nhẫn tích lũy nội lực, chờ ngày gió lên.`)
          )
        )
      )
    )
  );
}
