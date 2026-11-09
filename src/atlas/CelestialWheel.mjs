/**
 * src/atlas/CelestialWheel.mjs
 * ĐỒ BẢN II: LA KINH TINH BÀN 24 SƠN & THẦN SÁT CHIẾU MỆNH
 * Bố cục Split-View:
 * - Cột Trái: La Kinh 5 vòng đồng tâm cổ pháp + Vị trí các Thần Sát
 * - Cột Phải: Lời giải đời thường giải mã Quý Nhân, Đào Hoa, Dịch Mã... cho người mới
 */

import {
  CompassIcon,
  SparklesIcon,
  BookOpenIcon,
  InfoIcon,
  CheckCircleIcon,
  AlertCircleIcon,
} from './icons.mjs';
import {
  ELEMENT_THEME,
  BRANCH_META,
  SHENSHA_BEGINNER_MEANINGS,
} from './bazi-engine-ext.mjs';

export function CelestialWheel({ React, chart }) {
  const h = React.createElement;
  const [selectedStar, setSelectedStar] = React.useState(null);

  const shenShaList = chart.shenSha || [];
  const curStar = selectedStar || shenShaList[0] || {
    name: 'Thiên Ất Quý Nhân',
    pinyin: 'Tiān Yǐ Guì Rén',
    branch: chart.dayBranch || 'Tý',
    nature: 'cát',
    desc: 'Đệ nhất cát thần trong Bát Tự, chuyển nguy thành an.',
    effect: 'Gặp quý nhân tương trợ khi hoạn nạn.',
  };

  const starGuide = SHENSHA_BEGINNER_MEANINGS[curStar.name] || {
    title: curStar.name,
    nature: curStar.nature === 'cát' ? 'Cát Tinh' : 'Biến Động Tinh',
    simpleDesc: curStar.desc || 'Năng lượng đặc biệt chi phối một khía cạnh đời sống.',
    advice: curStar.effect || 'Thuận theo tự nhiên, bồi dưỡng tâm tính.',
  };

  // 24 Sơn Hướng La Kinh
  const MOUNTAINS_24 = [
    { name: 'Nhâm', han: '壬', deg: 337.5, type: 'stem' },
    { name: 'Tý',   han: '子', deg: 0,     type: 'branch' },
    { name: 'Quý',  han: '癸', deg: 22.5,  type: 'stem' },
    { name: 'Sửu',  han: '丑', deg: 45,    type: 'branch' },
    { name: 'Cấn',  han: '艮', deg: 67.5,  type: 'gua' },
    { name: 'Dần',  han: '寅', deg: 90,    type: 'branch' },
    { name: 'Giáp', han: '甲', deg: 112.5, type: 'stem' },
    { name: 'Mão',  han: '卯', deg: 135,   type: 'branch' },
    { name: 'Ất',   han: '乙', deg: 157.5, type: 'stem' },
    { name: 'Thìn', han: '辰', deg: 180,   type: 'branch' },
    { name: 'Tốn',  han: '巽', deg: 202.5, type: 'gua' },
    { name: 'Tỵ',   han: '巳', deg: 225,   type: 'branch' },
    { name: 'Bính', han: '丙', deg: 247.5, type: 'stem' },
    { name: 'Ngọ',  han: '午', deg: 270,   type: 'branch' },
    { name: 'Đinh', han: '丁', deg: 292.5, type: 'stem' },
    { name: 'Mùi',  han: '未', deg: 315,   type: 'branch' },
    { name: 'Khôn', han: '坤', deg: 337.5, type: 'gua' },
    { name: 'Thân', han: '申', deg: 0,     type: 'branch' },
    { name: 'Canh', han: '庚', deg: 22.5,  type: 'stem' },
    { name: 'Dậu',  han: '酉', deg: 45,    type: 'branch' },
    { name: 'Tân',  han: '辛', deg: 67.5,  type: 'stem' },
    { name: 'Tuất', han: '戌', deg: 90,    type: 'branch' },
    { name: 'Càn',  han: '乾', deg: 112.5, type: 'gua' },
    { name: 'Hợi',  han: '亥', deg: 135,   type: 'branch' },
  ];

  const pillarBranches = (chart.pillars || []).map((p) => p.branch);

  const BRANCH_DEGREES = {
    'Tý': 270, 'Sửu': 300, 'Dần': 330, 'Mão': 0, 'Thìn': 30, 'Tỵ': 60,
    'Ngọ': 90, 'Mùi': 120, 'Thân': 150, 'Dậu': 180, 'Tuất': 210, 'Hợi': 240
  };
  const starDeg = curStar.branch ? BRANCH_DEGREES[curStar.branch] : null;
  const starBranchPos = starDeg !== null && starDeg !== undefined
    ? {
        x: 300 + 235 * Math.cos((starDeg * Math.PI) / 180),
        y: 300 + 235 * Math.sin((starDeg * Math.PI) / 180),
      }
    : null;

  return h(
    'section',
    {
      id: 'celestial-wheel',
      className: 'atlas-chapter-section ritual-mist-card',
      'aria-label': 'Đồ Bản II: La Kinh 24 Sơn',
    },
    // Tiêu đề chương
    h(
      'header',
      { className: 'chapter-header' },
      h(
        'div',
        { className: 'chapter-badge' },
        h(CompassIcon, { React, size: 14, color: 'var(--gold)' }),
        h('span', null, 'ĐỒ BẢN II · LA KINH THẦN SÁT (二十四山)')
      ),
      h('h2', { className: 'chapter-title' }, 'La Kinh Tinh Bàn 24 Sơn & Thần Sát Chiếu Mệnh'),
      h(
        'p',
        { className: 'chapter-desc' },
        'La Kinh định phương hướng năng lượng không gian, kết hợp cùng các chòm sao Quý Nhân, Đào Hoa, Dịch Mã chiếu rọi cung mệnh. Bấm chọn từng sao để xem lời giải đời thường.'
      )
    ),

    // Bố cục Chia Đôi (Split View)
    h(
      'div',
      { className: 'chapter-split-layout' },

      // ================= CỘT TRÁI: LA KINH CHUYÊN SÂU =================
      h(
        'div',
        { className: 'split-column split-column-tech' },
        h(
          'div',
          { className: 'column-header-bar' },
          h('span', { className: 'col-tag pro-tag' }, 'DÀNH CHO DÂN CHUYÊN · LA KINH 5 VÒNG ĐỒNG TÂM'),
          h('span', { className: 'col-hint' }, 'Bấm chọn sao Thần Sát để soi phương vị')
        ),

        // Khung tròn La Kinh SVG
        h(
          'div',
          { className: 'compass-svg-container' },
          h(
            'svg',
            {
              viewBox: '0 0 600 600',
              className: 'compass-master-svg',
              role: 'img',
              'aria-label': 'La Kinh 24 Sơn Hướng',
            },
            h(
              'defs',
              null,
              // Đĩa nền Thiên Bàn ngọc đen huyền bí tách lớp khỏi nền trang web
              h(
                'radialGradient',
                { id: 'compassPlateGrad', cx: '50%', cy: '50%', r: '50%' },
                h('stop', { offset: '0%', stopColor: '#1d2722', stopOpacity: '0.98' }),
                h('stop', { offset: '60%', stopColor: '#141d18', stopOpacity: '0.98' }),
                h('stop', { offset: '90%', stopColor: '#0e1512', stopOpacity: '0.98' }),
                h('stop', { offset: '100%', stopColor: '#0a0f0d', stopOpacity: '0.99' })
              ),
              h(
                'radialGradient',
                { id: 'compassCoreGlow', cx: '50%', cy: '50%', r: '50%' },
                h('stop', { offset: '75%', stopColor: 'transparent', stopOpacity: '0' }),
                h('stop', { offset: '95%', stopColor: 'var(--copper-gold)', stopOpacity: '0.3' }),
                h('stop', { offset: '100%', stopColor: 'transparent', stopOpacity: '0' })
              )
            ),

            // Đĩa Thiên Bàn Ngọc Đen (Tách lớp hoàn toàn khỏi nền web)
            h('circle', {
              cx: 300,
              cy: 300,
              r: 288,
              fill: 'url(#compassPlateGrad)',
              stroke: 'var(--copper-gold)',
              strokeWidth: 1.5,
              strokeOpacity: 0.55,
              filter: 'drop-shadow(0 0 22px rgba(191, 75, 69, 0.28))',
            }),
            h('circle', { cx: 300, cy: 300, r: 295, fill: 'url(#compassCoreGlow)' }),
            h('circle', { cx: 300, cy: 300, r: 280, className: 'compass-ring-outer', stroke: 'var(--copper-gold)', strokeWidth: 1.2, strokeOpacity: 0.65 }),
            h('circle', { cx: 300, cy: 300, r: 260, className: 'compass-ring-middle', stroke: 'var(--copper-gold)', strokeWidth: 1.2, strokeOpacity: 0.7 }),
            h('circle', { cx: 300, cy: 300, r: 215, className: 'compass-ring-inner', stroke: 'var(--gold)', strokeDasharray: '2 6', strokeOpacity: 0.8 }),
            h('circle', { cx: 300, cy: 300, r: 155, className: 'compass-ring-inner', stroke: 'var(--copper-gold)', strokeOpacity: 0.6 }),
            h('circle', { cx: 300, cy: 300, r: 85, className: 'compass-ring-core', stroke: 'var(--cinnabar-bright)', strokeWidth: 1.5 }),

            // 24 Vạch Sơn Hướng (Xoay 60fps mượt mà)
            h(
              'g',
              { className: 'celestial-orbit-cw' },
              Array.from({ length: 24 }).map((_, idx) => {
                const deg = idx * 15;
                const rad = (deg * Math.PI) / 180;
                return h('line', {
                  key: idx,
                  x1: 300 + 260 * Math.cos(rad),
                  y1: 300 + 260 * Math.sin(rad),
                  x2: 300 + 280 * Math.cos(rad),
                  y2: 300 + 280 * Math.sin(rad),
                  stroke: idx % 2 === 0 ? '#f5d59f' : 'rgba(214, 154, 136, 0.6)',
                  strokeWidth: idx % 2 === 0 ? 1.6 : 1,
                });
              })
            ),

            // Tia chùm sáng thiên thể từ tâm La Kinh phóng tới cung chi tương ứng
            starBranchPos &&
              h('line', {
                x1: 300,
                y1: 300,
                x2: starBranchPos.x,
                y2: starBranchPos.y,
                className: 'qi-stream-line',
                stroke: 'var(--cinnabar-bright)',
                strokeWidth: 2.2,
                opacity: 0.9,
              }),

            // 12 Cung Địa Chi trên La Kinh (Giữ chữ đứng thẳng ngay ngắn, không xoay ngược đầu)
            h(
              'g',
              { className: 'compass-branches-static' },
              [
                { name: 'Tý', han: '子', deg: 270 },
                { name: 'Sửu', han: '丑', deg: 300 },
                { name: 'Dần', han: '寅', deg: 330 },
                { name: 'Mão', han: '卯', deg: 0 },
                { name: 'Thìn', han: '辰', deg: 30 },
                { name: 'Tỵ', han: '巳', deg: 60 },
                { name: 'Ngọ', han: '午', deg: 90 },
                { name: 'Mùi', han: '未', deg: 120 },
                { name: 'Thân', han: '申', deg: 150 },
                { name: 'Dậu', han: '酉', deg: 180 },
                { name: 'Tuất', han: '戌', deg: 210 },
                { name: 'Hợi', han: '亥', deg: 240 },
              ].map((b) => {
                const rad = (b.deg * Math.PI) / 180;
                const x = 300 + 235 * Math.cos(rad);
                const y = 300 + 235 * Math.sin(rad);
                const isPillar = pillarBranches.includes(b.name);
                const isStarPos = curStar.branch === b.name;

                return h(
                  'g',
                  { key: b.name, className: isStarPos ? 'compass-node-highlight' : '' },
                  isStarPos &&
                    h('circle', {
                      cx: x,
                      cy: y + 2,
                      r: 18,
                      fill: 'var(--cinnabar)',
                      opacity: 0.4,
                      filter: 'drop-shadow(0 0 6px var(--cinnabar-bright))',
                    }),
                  h(
                    'text',
                    {
                      x,
                      y: y - 1,
                      textAnchor: 'middle',
                      className: 'compass-han-char',
                      fill: isStarPos ? '#f7dfb9' : isPillar ? '#f5d59f' : '#eddcd0',
                      fontSize: isStarPos ? 16 : isPillar ? 14 : 12.5,
                      fontWeight: isStarPos || isPillar ? '700' : '600',
                    },
                    b.han
                  ),
                  h(
                    'text',
                    {
                      x,
                      y: y + 11,
                      textAnchor: 'middle',
                      className: 'compass-viet-char',
                      fill: isStarPos ? 'var(--gold)' : isPillar ? '#f3ebe4' : '#b3a297',
                      fontSize: 9,
                      fontWeight: isStarPos ? '700' : '500',
                    },
                    b.name
                  )
                );
              })
            ),

            // 8 Quẻ Bát Quái Tiên Thiên (Giữ quẻ và tên quẻ đứng thẳng ngay ngắn)
            h(
              'g',
              { className: 'compass-trigrams-static' },
              [
                { han: '☰', name: 'Càn', deg: 270 },
                { han: '☱', name: 'Đoài', deg: 315 },
                { han: '☲', name: 'Ly', deg: 0 },
                { han: '☳', name: 'Chấn', deg: 45 },
                { han: '☴', name: 'Tốn', deg: 90 },
                { han: '☵', name: 'Khảm', deg: 135 },
                { han: '☶', name: 'Cấn', deg: 180 },
                { han: '☷', name: 'Khôn', deg: 225 },
              ].map((g) => {
                const rad = (g.deg * Math.PI) / 180;
                const x = 300 + 185 * Math.cos(rad);
                const y = 300 + 185 * Math.sin(rad);
                return h(
                  'g',
                  { key: g.name },
                  h(
                    'text',
                    {
                      x,
                      y: y + 2,
                      textAnchor: 'middle',
                      className: 'compass-trigram',
                      fill: '#f7dfb9',
                      fontSize: 16,
                      fontWeight: '700',
                      opacity: 0.95,
                    },
                    g.han
                  ),
                  h(
                    'text',
                    {
                      x,
                      y: y + 12,
                      textAnchor: 'middle',
                      className: 'compass-gua-name',
                      fill: 'var(--copper-gold)',
                      fontSize: 8.5,
                      fontWeight: '500',
                      opacity: 0.85,
                    },
                    g.name
                  )
                );
              })
            ),

            // Tâm La Kinh: Thái Cực mang nhịp thở hào quang
            h(
              'g',
              { className: 'compass-taiji-center aura-breathe' },
              h('circle', { cx: 300, cy: 300, r: 50, fill: 'rgba(11, 16, 14, 0.4)', stroke: 'var(--cinnabar)', strokeWidth: 1.5 }),
              h('path', {
                d: 'M300 250 A25 25 0 0 1 300 300 A25 25 0 0 0 300 350 A50 50 0 0 1 300 250 Z',
                fill: 'var(--cinnabar)',
                opacity: 0.7,
              }),
              h('circle', { cx: 300, cy: 275, r: 5, fill: 'var(--paper-card)' }),
              h('circle', { cx: 300, cy: 325, r: 5, fill: 'var(--cinnabar)' })
            )
          )
        ),

        // Danh sách Thần Sát chọn nhanh
        h(
          'div',
          { className: 'shensha-picker-panel' },
          h('h4', { className: 'picker-label' }, 'Các Chòm Sao Hiện Diện Trong Lá Số:'),
          h(
            'div',
            { className: 'shensha-chips-wrap' },
            shenShaList.map((star, sIdx) => {
              const isSelected = curStar.name === star.name;
              return h(
                'button',
                {
                  key: sIdx,
                  type: 'button',
                  className: `shensha-pill ${isSelected ? 'is-selected' : ''} ${star.nature === 'cát' ? 'pill-cat' : 'pill-bien'}`,
                  onClick: () => setSelectedStar(star),
                },
                h(SparklesIcon, { React, size: 12, color: isSelected ? 'var(--gold)' : 'currentColor' }),
                h('span', null, star.name),
                h('small', null, `(${star.branch || star.primaryBranch || 'Cung Chi'})`)
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
          h('span', { className: 'col-tag beginner-tag' }, 'DÀNH CHO NGƯỜI ĐỌC · GIẢI MÃ SAO CHIẾU MỆNH'),
          h('span', { className: 'col-hint' }, `Đang soi: ${curStar.name} (${curStar.branch || curStar.primaryBranch || 'Cung Chi'})`)
        ),

        // Hàng nút chọn nhanh Thần Sát cho người đọc
        h(
          'div',
          { className: 'quick-switch-tabs' },
          shenShaList.map((star, sIdx) =>
            h(
              'button',
              {
                key: sIdx,
                type: 'button',
                className: `switch-tab-btn ${curStar.name === star.name ? 'is-active' : ''}`,
                onClick: () => setSelectedStar(star),
              },
              `${star.name} (${star.branch || star.primaryBranch || 'Cung Chi'})`
            )
          )
        ),

        // Thẻ Giải Nghĩa Sao Đang Chọn
        h(
          'div',
          { className: 'guide-card-primary' },
          h(
            'div',
            { className: 'guide-card-head' },
            h(
              'div',
              { className: 'guide-card-badge' },
              h(SparklesIcon, { React, size: 14, color: 'var(--gold)' }),
              h('span', null, starGuide.title || curStar.name)
            ),
            h('span', { className: 'guide-period-pill' }, starGuide.nature || curStar.nature || 'Chiếu Cung Chi')
          ),
          h('h3', { className: 'guide-headline' }, `Khí Chất Của ${curStar.name} Trong Đời Sống Thực Tế`),
          h('p', { className: 'guide-meaning-body' }, starGuide.simpleDesc || curStar.desc),
          h(
            'div',
            { className: 'guide-prompt-quote' },
            h(InfoIcon, { React, size: 15, color: 'var(--gold)' }),
            h('span', null, `Tọa độ cung ${curStar.branch || curStar.primaryBranch || 'Bản mệnh'} (${curStar.palace || 'Chiếu Cung'}): ${starGuide.advice || 'Vận dụng thế mạnh này vào các quyết định lớn.'}`)
          ),

          // Lưới 4 Chiều Ứng Dụng Sao (Sự nghiệp, Tình cảm, Việc nên làm, Việc nên tránh - Không dùng emoji)
          starGuide.careerPower &&
            h(
              'div',
              { className: 'guide-domains-grid' },
              h(
                'div',
                { className: 'domain-card' },
                h(
                  'div',
                  { className: 'domain-card-head' },
                  h('span', { style: { fontFamily: 'var(--font-han-brush)', color: 'var(--cinnabar-glow)', marginRight: '4px', fontSize: '13px' } }, '事業'),
                  'Năng Lực Sự Nghiệp'
                ),
                h('p', { className: 'domain-card-desc' }, starGuide.careerPower)
              ),
              h(
                'div',
                { className: 'domain-card' },
                h(
                  'div',
                  { className: 'domain-card-head' },
                  h('span', { style: { fontFamily: 'var(--font-han-brush)', color: 'var(--cinnabar-glow)', marginRight: '4px', fontSize: '13px' } }, '姻緣'),
                  'Duyên Vận & Xã Giao'
                ),
                h('p', { className: 'domain-card-desc' }, starGuide.relationshipEffect)
              ),
              h(
                'div',
                { className: 'domain-card' },
                h(
                  'div',
                  { className: 'domain-card-head' },
                  h('span', { style: { fontFamily: 'var(--font-han-brush)', color: 'var(--cinnabar-glow)', marginRight: '4px', fontSize: '13px' } }, '天命'),
                  'Việc Thuận Thiên Mệnh'
                ),
                h('p', { className: 'domain-card-desc' }, starGuide.dos)
              ),
              h(
                'div',
                { className: 'domain-card' },
                h(
                  'div',
                  { className: 'domain-card-head' },
                  h('span', { style: { fontFamily: 'var(--font-han-brush)', color: 'var(--cinnabar-glow)', marginRight: '4px', fontSize: '13px' } }, '慎行'),
                  'Điều Cần Thận Trọng'
                ),
                h('p', { className: 'domain-card-desc' }, starGuide.donts)
              )
            )
        ),

        // Cẩm nang người mới: Hiểu đúng về Thần Sát
        h(
          'div',
          { className: 'guide-card-secondary' },
          h('h4', { className: 'card-sec-title' }, 'Góc Nhìn Khoa Học & Khách Quan Về "Thần Sát"'),
          h(
            'p',
            { className: 'card-sec-desc' },
            'Trong cổ học Đông Phương, "Thần Sát" không phải là thần thánh hay ma quỷ ban phước giáng họa, mà là những mô thức tâm lý bẩm sinh và cơ hội tương tác xã hội lặp đi lặp lại.'
          ),
          h(
            'div',
            { className: 'guide-traits-grid' },
            h(
              'div',
              { className: 'trait-box' },
              h('span', { className: 'trait-label' }, 'Quý Nhân'),
              h('strong', null, 'Mạng lưới tương trợ'),
              h('p', null, 'Khả năng kết nối và được người có tầm ảnh hưởng giúp đỡ đúng thời điểm then chốt.')
            ),
            h(
              'div',
              { className: 'trait-box' },
              h('span', { className: 'trait-label' }, 'Đào Hoa'),
              h('strong', null, 'Sức hút giao tiếp'),
              h('p', null, 'Duyên ăn nói, năng khiếu thẩm mỹ và độ nhạy cảm tinh tế với cảm xúc người khác.')
            ),
            h(
              'div',
              { className: 'trait-box' },
              h('span', { className: 'trait-label' }, 'Dịch Mã'),
              h('strong', null, 'Vận động & Đổi mới'),
              h('p', null, 'Sự linh hoạt đổi mới, cơ duyên đi xa, thay đổi chỗ ở hay mở rộng tầm nhìn toàn cầu.')
            ),
            h(
              'div',
              { className: 'trait-box' },
              h('span', { className: 'trait-label' }, 'Văn Xương'),
              h('strong', null, 'Trí tuệ & Học thức'),
              h('p', null, 'Khả năng tự học xuất sắc, nghiên cứu và diễn đạt thuyết phục bằng văn tự.')
            )
          )
        ),

        // Lời khuyên kích hoạt
        h(
          'div',
          { className: 'guide-card-action' },
          h(CheckCircleIcon, { React, size: 16, color: 'var(--gold)' }),
          h(
            'div',
            { className: 'guide-action-text' },
            h('strong', null, 'Bí quyết kích hoạt vận hội:'),
            h('p', null, 'Không cần hoang mang trước những tên gọi hung tinh hay thần sát. Mọi vì sao đều là hai mặt của một đồng xu; hiểu rõ bản chất giúp bạn chủ động phát huy điểm mạnh và thiết lập rào chắn an toàn cho điểm yếu.')
          )
        )
      )
    )
  );
}
