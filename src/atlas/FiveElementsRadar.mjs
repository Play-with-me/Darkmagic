/**
 * src/atlas/FiveElementsRadar.mjs
 * ĐỒ BẢN III: NGŨ HÀNH SINH KHẮC TRẬN & ĐIỀU HÒA NGUYÊN KHÍ
 * Bố cục Split-View:
 * - Cột Trái: Trận đồ Ngũ Giác Tinh 5 sắc độ trầm cổ + Mạch Tương Sinh / Lưới Tương Khắc
 * - Cột Phải: Lời giải đời thường giải mã Thân Vượng/Nhược và cách cân bằng lối sống cho người mới
 */

import {
  ScaleIcon,
  SparklesIcon,
  BookOpenIcon,
  InfoIcon,
  CheckCircleIcon,
  FlameIcon,
  DropletIcon,
  TreeIcon,
  MountainIcon,
  ShieldIcon,
} from './icons.mjs';
import { ELEMENT_THEME } from './bazi-engine-ext.mjs';

export function FiveElementsRadar({ React, chart }) {
  const h = React.createElement;
  const [selectedEl, setSelectedEl] = React.useState(chart.dayElement || 'Thủy');

  const weightedCounts = chart.weightedCounts || { Mộc: 1, Hỏa: 1, Thổ: 1, Kim: 1, Thủy: 1 };
  const yongShen = chart.yongShen || { isStrong: true, yongShen: { element: 'Hỏa' }, xiShen: { element: 'Mộc' }, jiShen: { element: 'Thủy' } };
  const curTheme = ELEMENT_THEME[selectedEl] || ELEMENT_THEME['Thủy'];

  const ELEMENTS = ['Mộc', 'Hỏa', 'Thổ', 'Kim', 'Thủy'];
  const maxScore = Math.max(...Object.values(weightedCounts), 3.5);

  // Tọa độ 5 đỉnh Ngũ Giác (đỉnh Hỏa hướng lên trên: -90 độ)
  const PENTAGRAM_COORDS = {
    'Hỏa':  { x: 250, y: 70,  han: '火', icon: FlameIcon },
    'Thổ':  { x: 410, y: 190, han: '土', icon: MountainIcon },
    'Kim':  { x: 350, y: 380, han: '金', icon: ShieldIcon },
    'Thủy': { x: 150, y: 380, han: '水', icon: DropletIcon },
    'Mộc':  { x: 90,  y: 190, han: '木', icon: TreeIcon },
  };

  // Cẩm nang giải nghĩa 5 hành trong đời sống hàng ngày
  const ELEMENT_DAILY_GUIDE = {
    'Mộc': {
      virtue: 'Lòng Nhân Ái & Khát Vọng Sinh Sôi',
      meaning: 'Đại diện cho sức sống vươn lên, lòng trắc ẩn, tính kiên nhẫn và khả năng học hỏi đổi mới không ngừng.',
      excess: 'Nếu Mộc quá vượng: dễ bướng bỉnh, thiếu linh hoạt, hay suy nghĩ ôm đồm.',
      deficient: 'Nếu Mộc khuyết thiếu: dễ chán nản, thiếu định hướng dài hạn, hay do dự trước cơ hội.',
      lifestyle: 'Thêm cây xanh vào bàn làm việc, tập thói quen dậy sớm đi bộ dưới bóng cây, học thêm kỹ năng mới.',
      health: 'Chăm sóc gan mật, điều tiết cảm xúc bực bội, ngủ trước 23h để gan đào thải độc tố tốt nhất.',
      environment: 'Không gian sống thoáng đãng, nhiều ánh sáng tự nhiên, trang trí nội thất gỗ mộc tự nhiên.',
      careerFields: 'Giáo dục, nông nghiệp hữu cơ, y dược thảo mộc, xuất bản, kiến trúc và sáng tạo nội dung.',
      mindset: 'Rèn tính mềm dẻo như cây tre trước gió bão: kiên định gốc rễ nhưng linh hoạt cành lá.',
    },
    'Hỏa': {
      virtue: 'Nhiệt Huyết & Khả Năng Lan Tỏa',
      meaning: 'Đại diện cho sự ấm áp, danh tiếng, tính bộc trực, khả năng kết nối cộng đồng và truyền cảm hứng.',
      excess: 'Nếu Hỏa quá vượng: dễ nóng vội, bốc đồng, nói nhanh hơn nghĩ, mau kiệt sức.',
      deficient: 'Nếu Hỏa khuyết thiếu: thiếu nhiệt tình, ngại xuất hiện trước đám đông, tay chân dễ lạnh.',
      lifestyle: 'Tắm nắng sớm 15 phút mỗi ngày, dùng ánh đèn vàng ấm, giữ nụ cười và sự chủ động khi chào hỏi.',
      health: 'Dưỡng tim mạch và tuần hoàn máu, tránh làm việc quá sức khi trời nắng gắt, uống trà hoa cúc.',
      environment: 'Không gian ấm cúng, sử dụng sắc đỏ son / cam đất / tím trầm tạo điểm nhấn sinh động.',
      careerFields: 'Truyền thông giải trí, marketing, nhà hàng ẩm thực, công nghệ cao, quan hệ công chúng.',
      mindset: 'Học cách làm nguội cái đầu trước khi đưa ra các quyết định quan trọng; dùng sự nhiệt tâm để sưởi ấm người khác.',
    },
    'Thổ': {
      virtue: 'Chữ Tín & Sự Ổn Định Vững Chắc',
      meaning: 'Đại diện cho lòng trung thành, khả năng bao dung, sự thực tế, đáng tin cậy và giỏi giữ gìn thành quả.',
      excess: 'Nếu Thổ quá vượng: chậm thích nghi, bảo thủ, hay lo xa cho chuyện gia đình.',
      deficient: 'Nếu Thổ khuyết thiếu: thiếu kiên nhẫn tích lũy, dễ thay đổi mục tiêu giữa chừng.',
      lifestyle: 'Giữ môi trường sống ngăn nắp, tôn trọng lời hứa, tập thiền tĩnh tâm hoặc làm vườn nhẹ nhàng.',
      health: 'Chăm sóc tỳ vị và hệ tiêu hóa, ăn uống đúng giờ, tránh suy nghĩ quá nhiều trong lúc ăn.',
      environment: 'Nội thất gốm sứ, đá phong thủy, màu vàng đất, nâu trầm tạo cảm giác che chở, an toàn.',
      careerFields: 'Bất động sản, xây dựng, bảo hiểm, kho bãi, quản lý nhân sự và các ngành nông lâm nghiệp.',
      mindset: 'Giữ chữ tín làm gốc; biết bao dung nhưng phải thiết lập ranh giới rõ ràng để không bị lợi dụng.',
    },
    'Kim': {
      virtue: 'Kỷ Luật & Trực Giác Quyết Đoán',
      meaning: 'Đại diện cho chuẩn mực đạo đức, tính công bằng, sự sắc bén trong tư duy và kỷ luật tự giác cao độ.',
      excess: 'Nếu Kim quá vượng: quá khắt khe với bản thân và người khác, lời nói dễ làm tổn thương.',
      deficient: 'Nếu Kim khuyết thiếu: thiếu nguyên tắc, dễ thỏa hiệp với sự cẩu thả, khó dứt khoát buông bỏ.',
      lifestyle: 'Lập thời gian biểu rõ ràng, giữ đồ dùng kim loại/đồng hồ sạch bóng, tập hít thở sâu nuôi dưỡng phổi.',
      health: 'Dưỡng phổi và hệ hô hấp, tránh nơi khói bụi, giữ ấm cổ họng và tập yoga hít thở dưỡng khí.',
      environment: 'Không gian tối giản (minimalism), sắc trắng, ánh bạc và các vật phẩm kim khí tinh xảo.',
      careerFields: 'Tài chính ngân hàng, luật pháp, cơ khí chính xác, quân đội, an ninh và kiểm toán.',
      mindset: 'Lấy sự cương trực làm giáp, lấy lòng từ bi làm khiên; nói lời ái ngữ để giữ hòa khí.',
    },
    'Thủy': {
      virtue: 'Trí Tuệ & Khả Năng Thích Nghi',
      meaning: 'Đại diện cho sự thông minh, trực giác nhạy bén, khả năng nhìn xa trông rộng và xoay chuyển khéo léo.',
      excess: 'Nếu Thủy quá vượng: cảm xúc thất thường như sóng biển, hay suy diễn phức tạp hóa vấn đề.',
      deficient: 'Nếu Thủy khuyết thiếu: tư duy cứng nhắc, ngại thay đổi phương pháp, uống ít nước.',
      lifestyle: 'Uống đủ nước ấm mỗi ngày, nghe tiếng sóng/nhạc êm dịu, rèn luyện sự tĩnh lặng nội tâm trước khi quyết định.',
      health: 'Bồi dưỡng thận và hệ bài tiết, giữ ấm lòng bàn chân, tránh thức khuya làm tổn hao chân âm.',
      environment: 'Bể cá cảnh, đài phun nước mini, sắc xanh lam / đen tuyền mang lại cảm giác sâu thẳm tĩnh tại.',
      careerFields: 'Logistic hàng hải, công nghệ thông tin, ngoại giao, tư vấn tâm lý, nghiên cứu chiến lược.',
      mindset: 'Mềm mại như nước luồn qua kẽ đá: gặp chướng ngại vật thì uốn lượn đi qua, không đối đầu vô ích.',
    },
  };

  const curGuide = ELEMENT_DAILY_GUIDE[selectedEl] || ELEMENT_DAILY_GUIDE['Thủy'];

  return h(
    'section',
    {
      id: 'five-elements',
      className: 'atlas-chapter-section ritual-mist-card',
      'aria-label': 'Đồ Bản III: Ngũ Hành Sinh Khắc Trận',
    },
    // Tiêu đề chương
    h(
      'header',
      { className: 'chapter-header' },
      h(
        'div',
        { className: 'chapter-badge' },
        h(ScaleIcon, { React, size: 14, color: 'var(--gold)' }),
        h('span', null, 'ĐỒ BẢN III · NGŨ KHÍ TRIỀU NGUYÊN (五行生剋)')
      ),
      h('h2', { className: 'chapter-title' }, 'Ngũ Hành Sinh Khắc Trận & Cân Bằng Năng Lượng'),
      h(
        'p',
        { className: 'chapter-desc' },
        'Mộc · Hỏa · Thổ · Kim · Thủy lưu chuyển không ngừng trong cơ thể và vận mệnh. Bấm chọn từng đỉnh hành trên trận đồ bên trái để xem phương pháp bồi dưỡng lối sống ở bên phải.'
      )
    ),

    // Bố cục Chia Đôi (Split View)
    h(
      'div',
      { className: 'chapter-split-layout' },

      // ================= CỘT TRÁI: TRẬN ĐỒ CHUYÊN SÂU =================
      h(
        'div',
        { className: 'split-column split-column-tech' },
        h(
          'div',
          { className: 'column-header-bar' },
          h('span', { className: 'col-tag pro-tag' }, 'DÀNH CHO DÂN CHUYÊN · NGŨ GIÁC SINH KHẮC TRẬN'),
          h('span', { className: 'col-hint' }, 'Vòng ngoài Tương Sinh · Lưới trong Tương Khắc')
        ),

        // Khung SVG Trận Đồ Ngũ Giác Tinh
        h(
          'div',
          { className: 'radar-svg-container' },
          h(
            'svg',
            {
              viewBox: '0 0 500 480',
              className: 'pentagram-svg',
              role: 'img',
              'aria-label': 'Đồ hình Ngũ Giác Tinh Sinh Khắc',
            },
            h(
              'defs',
              null,
              // Đĩa nền Ngũ Hành Trận Đồ ngọc đen tách lớp khỏi nền web
              h(
                'radialGradient',
                { id: 'pentaPlateGrad', cx: '50%', cy: '50%', r: '50%' },
                h('stop', { offset: '0%', stopColor: '#1d2722', stopOpacity: '0.98' }),
                h('stop', { offset: '65%', stopColor: '#141d18', stopOpacity: '0.98' }),
                h('stop', { offset: '90%', stopColor: '#0e1512', stopOpacity: '0.98' }),
                h('stop', { offset: '100%', stopColor: '#0a0f0d', stopOpacity: '0.99' })
              ),
              h(
                'radialGradient',
                { id: 'pentagramGlow', cx: '50%', cy: '50%', r: '50%' },
                h('stop', { offset: '75%', stopColor: 'transparent', stopOpacity: '0' }),
                h('stop', { offset: '95%', stopColor: 'var(--copper-gold)', stopOpacity: '0.3' }),
                h('stop', { offset: '100%', stopColor: 'transparent', stopOpacity: '0' })
              )
            ),

            // Đĩa Ngũ Giác Tinh Ngọc Đen (Tách lớp hoàn toàn khỏi nền web)
            h('circle', {
              cx: 250,
              cy: 240,
              r: 218,
              fill: 'url(#pentaPlateGrad)',
              stroke: 'var(--copper-gold)',
              strokeWidth: 1.5,
              strokeOpacity: 0.55,
              filter: 'drop-shadow(0 0 22px rgba(191, 75, 69, 0.28))',
            }),
            h('circle', { cx: 250, cy: 240, r: 226, fill: 'url(#pentagramGlow)' }),

            // Vòng ngoài Tương Sinh (Mộc -> Hỏa -> Thổ -> Kim -> Thủy -> Mộc)
            h('circle', {
              cx: 250,
              cy: 240,
              r: 185,
              fill: 'none',
              stroke: 'var(--gold)',
              strokeWidth: 1.5,
              strokeDasharray: '4 4',
              strokeOpacity: 0.85,
            }),

            // Đường Tương Khắc hình ngôi sao 5 cánh (Mộc khắc Thổ, Thổ khắc Thủy, Thủy khắc Hỏa, Hỏa khắc Kim, Kim khắc Mộc)
            h('path', {
              d: 'M250 70 L350 380 L90 190 L410 190 L150 380 Z',
              className: 'qi-stream-line',
              fill: 'rgba(28, 38, 34, 0.75)',
              stroke: 'var(--copper-gold)',
              strokeWidth: 1.6,
              strokeOpacity: 0.85,
            }),

            // 5 Đỉnh Ngũ Hành
            ELEMENTS.map((el) => {
              const node = PENTAGRAM_COORDS[el];
              const theme = ELEMENT_THEME[el];
              const score = weightedCounts[el] || 0;
              const isSelected = selectedEl === el;

              return h(
                'g',
                {
                  key: el,
                  className: `pentagram-node ${isSelected ? 'is-selected' : ''}`,
                  onClick: () => setSelectedEl(el),
                  style: { cursor: 'pointer' },
                },
                // Vòng sáng nếu được chọn
                isSelected &&
                  h('circle', {
                    cx: node.x,
                    cy: node.y,
                    r: 38,
                    fill: theme.bg,
                    stroke: theme.color,
                    strokeWidth: 1.5,
                  }),
                h('circle', {
                  cx: node.x,
                  cy: node.y,
                  r: 28,
                  fill: 'rgba(28, 38, 34, 0.96)',
                  stroke: theme.color,
                  strokeWidth: 1.5,
                }),
                // Chữ Hán đại tự
                h(
                  'text',
                  {
                    x: node.x,
                    y: node.y - 1,
                    textAnchor: 'middle',
                    className: 'penta-han-char',
                    fill: theme.color,
                    fontSize: 18,
                    fontWeight: '700',
                  },
                  node.han
                ),
                // Tên tiếng Việt & Điểm số
                h(
                  'text',
                  {
                    x: node.x,
                    y: node.y + 16,
                    textAnchor: 'middle',
                    className: 'penta-viet-name',
                    fill: isSelected ? '#f7dfb9' : '#f3ebe4',
                    fontSize: 9.5,
                    fontWeight: '600',
                  },
                  `${el} (${score.toFixed(1)})`
                )
              );
            }),

            // Tâm Trận Đồ: Trạng thái Thân Vượng / Thân Nhược
            h(
              'g',
              { className: 'penta-center-seal aura-breathe' },
              h('circle', { cx: 250, cy: 240, r: 42, fill: 'rgba(26, 36, 31, 0.98)', stroke: 'var(--cinnabar-bright)', strokeWidth: 1.8 }),
              h(
                'text',
                {
                  x: 250,
                  y: 236,
                  textAnchor: 'middle',
                  fill: '#f7dfb9',
                  fontSize: 13.5,
                  fontWeight: '700',
                },
                yongShen.isStrong ? 'THÂN VƯỢNG' : 'THÂN NHƯỢC'
              ),
              h(
                'text',
                {
                  x: 250,
                  y: 253,
                  textAnchor: 'middle',
                  fill: '#eddcd0',
                  fontSize: 10,
                  fontWeight: '600',
                  letterSpacing: 1,
                },
                `DỤNG ${yongShen.yongShen.element?.toUpperCase()}`
              )
            )
          )
        ),

        // Thanh đo tỷ trọng 5 Hành
        h(
          'div',
          { className: 'elements-weight-bar-box' },
          ELEMENTS.map((el) => {
            const score = weightedCounts[el] || 0;
            const pct = Math.min(Math.round((score / maxScore) * 100), 100);
            const theme = ELEMENT_THEME[el];
            return h(
              'div',
              {
                key: el,
                className: `el-score-row ${selectedEl === el ? 'is-active-row' : ''}`,
                onClick: () => setSelectedEl(el),
                style: { cursor: 'pointer' },
              },
              h('span', { className: 'el-score-label', style: { color: theme.color } }, `${theme.han} ${el}`),
              h(
                'div',
                { className: 'el-score-track' },
                h('div', {
                  className: 'el-score-fill',
                  style: { width: `${pct}%`, backgroundColor: theme.color },
                })
              ),
              h('span', { className: 'el-score-num' }, `${score.toFixed(1)} đ`)
            );
          })
        )
      ),

      // ================= CỘT PHẢI: LỜI GIẢI ĐỜI THƯỜNG =================
      h(
        'div',
        { className: 'split-column split-column-guide' },
        h(
          'div',
          { className: 'column-header-bar' },
          h('span', { className: 'col-tag beginner-tag' }, 'DÀNH CHO NGƯỜI ĐỌC · CÂN BẰNG NĂNG LƯỢNG & SỨC KHỎE'),
          h('span', { className: 'col-hint' }, `Đang soi: Hành ${selectedEl}`)
        ),

        // Hàng nút chọn nhanh 5 Hành
        h(
          'div',
          { className: 'quick-switch-tabs' },
          ELEMENTS.map((el) => {
            const score = (weightedCounts[el] || 0).toFixed(1);
            const theme = ELEMENT_THEME[el];
            return h(
              'button',
              {
                key: el,
                type: 'button',
                className: `switch-tab-btn ${selectedEl === el ? 'is-active' : ''}`,
                onClick: () => setSelectedEl(el),
              },
              `${theme.han} Hành ${el} (${score}đ)`
            );
          })
        ),

        // Thẻ Giải Mã Thân Vượng / Thân Nhược
        h(
          'div',
          { className: 'guide-card-primary' },
          h(
            'div',
            { className: 'guide-card-head' },
            h(
              'div',
              { className: 'guide-card-badge' },
              h(ScaleIcon, { React, size: 14, color: 'var(--gold)' }),
              h('span', null, yongShen.isStrong ? 'Thể Trạng: Thân Vượng' : 'Thể Trạng: Thân Nhược')
            ),
            h('span', { className: 'guide-period-pill' }, 'Nguyên Khí Sinh Mệnh')
          ),
          h('h3', { className: 'guide-headline' }, yongShen.isStrong ? 'Thân Vượng: Động cơ mạnh, cần nơi tỏa nhiệt' : 'Thân Nhược: Tinh tế nhạy cảm, cần nạp dưỡng khí'),
          h(
            'p',
            { className: 'guide-meaning-body' },
            yongShen.isStrong
              ? 'Thân Vượng không phải là "tốt hơn", mà là bạn có nguồn năng lượng dồi dào, dám nghĩ dám làm nhưng nếu không xả bớt ra bên ngoài qua công việc hoặc thể thao thì dễ bị bức bối, nóng nảy.'
              : 'Thân Nhược là người có nội tâm nhạy bén, đồng cảm sâu sắc, làm việc cẩn trọng. Bạn cần biết tiết kiệm năng lượng, chọn bạn mà chơi và tránh để người khác hút cạn sinh khí của mình.'
          ),
          h(
            'div',
            { className: 'guide-prompt-quote' },
            h(InfoIcon, { React, size: 15, color: 'var(--gold)' }),
            h('span', null, `Chất liệu cứu cánh (Dụng Thần): Bổ trợ Hành ${yongShen.yongShen.element} — ${yongShen.yongShen.desc || 'Chìa khóa mở khóa vượng vận thuận hòa.'}`)
          )
        ),

        // Thẻ Chi Tiết Hành Đang Chọn & 4 Chiều Đời Sống
        h(
          'div',
          { className: 'guide-card-secondary' },
          h('h4', { className: 'card-sec-title' }, `Hành ${selectedEl} (${curTheme.han}) Trong Tâm Tính & Ứng Dụng Thực Tế`),
          h('p', { className: 'card-sec-desc' }, curGuide.meaning),
          h(
            'div',
            { className: 'guide-traits-grid' },
            h(
              'div',
              { className: 'trait-box' },
              h('span', { className: 'trait-label' }, 'Đức Tính'),
              h('strong', { style: { color: curTheme.color } }, curGuide.virtue),
              h('p', null, curTheme.trait)
            ),
            h(
              'div',
              { className: 'trait-box' },
              h('span', { className: 'trait-label' }, 'Biểu Hiện Trong Lá Số'),
              h('strong', null, (weightedCounts[selectedEl] || 0) > 2.5 ? 'Đang Rất Vượng' : (weightedCounts[selectedEl] || 0) === 0 ? 'Khuyết Thiếu' : 'Hài Hòa Vừa Vặn'),
              h('p', null, (weightedCounts[selectedEl] || 0) > 2.5 ? curGuide.excess : curGuide.deficient)
            )
          ),

          // Lưới 4 Chiều Ứng Dụng Ngũ Hành Đời Thường
          h(
            'div',
            { className: 'guide-domains-grid' },
            h(
              'div',
              { className: 'domain-card' },
              h(
                'div',
                { className: 'domain-card-head' },
                h('span', { style: { fontFamily: 'var(--font-han-brush)', color: 'var(--cinnabar-glow)', marginRight: '6px', fontSize: '13px' } }, '養生'),
                'Dưỡng Sinh & Thể Chất'
              ),
              h('p', { className: 'domain-card-desc' }, curGuide.health)
            ),
            h(
              'div',
              { className: 'domain-card' },
              h(
                'div',
                { className: 'domain-card-head' },
                h('span', { style: { fontFamily: 'var(--font-han-brush)', color: 'var(--cinnabar-glow)', marginRight: '6px', fontSize: '13px' } }, '空間'),
                'Màu Sắc & Không Gian'
              ),
              h('p', { className: 'domain-card-desc' }, curGuide.environment)
            ),
            h(
              'div',
              { className: 'domain-card' },
              h(
                'div',
                { className: 'domain-card-head' },
                h('span', { style: { fontFamily: 'var(--font-han-brush)', color: 'var(--cinnabar-glow)', marginRight: '6px', fontSize: '13px' } }, '事業'),
                'Nghề Nghiệp Thích Hợp'
              ),
              h('p', { className: 'domain-card-desc' }, curGuide.careerFields)
            ),
            h(
              'div',
              { className: 'domain-card' },
              h(
                'div',
                { className: 'domain-card-head' },
                h('span', { style: { fontFamily: 'var(--font-han-brush)', color: 'var(--cinnabar-glow)', marginRight: '6px', fontSize: '13px' } }, '心性'),
                'Thói Quen Nuôi Dưỡng'
              ),
              h('p', { className: 'domain-card-desc' }, curGuide.mindset)
            )
          )
        ),

        // Lời khuyên bồi dưỡng lối sống
        h(
          'div',
          { className: 'guide-card-action' },
          h(CheckCircleIcon, { React, size: 16, color: 'var(--gold)' }),
          h(
            'div',
            { className: 'guide-action-text' },
            h('strong', null, `Cách bồi đắp hành ${selectedEl} trong đời sống hôm nay:`),
            h('p', null, curGuide.lifestyle)
          )
        )
      )
    )
  );
}
