/**
 * src/atlas/FiveElementsRadar.mjs
 * ĐỒ BẢN III: NGŨ HÀNH SINH KHẮC TRẬN & ĐIỀU HÒA NGUYÊN KHÍ
 * Bố cục Split-View:
 * - Cột Trái: Trận đồ Ngũ Giác Tinh 5 sắc độ trầm cổ + Mạch Tương Sinh / Lưới Tương Khắc
 * - Cột Phải: cách đọc phép đếm và giới hạn dành cho người mới
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

  const weightedCounts = chart.weightedCounts || { Mộc: 0, Hỏa: 0, Thổ: 0, Kim: 0, Thủy: 0 };
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
      lifestyle: 'Câu hỏi tự đối chiếu: gần đây bạn đang nuôi dưỡng kỹ năng hoặc kế hoạch dài hạn nào?',
      environment: 'Không gian sống thoáng đãng, nhiều ánh sáng tự nhiên, trang trí nội thất gỗ mộc tự nhiên.',
      reading: 'Điểm Mộc chỉ phản ánh các Can, Chi và tàng can thuộc Mộc trong phép đếm đang dùng; không chứng minh nghề nghiệp hay sức khỏe.',
      mindset: 'Rèn tính mềm dẻo như cây tre trước gió bão: kiên định gốc rễ nhưng linh hoạt cành lá.',
    },
    'Hỏa': {
      virtue: 'Nhiệt Huyết & Khả Năng Lan Tỏa',
      meaning: 'Đại diện cho sự ấm áp, danh tiếng, tính bộc trực, khả năng kết nối cộng đồng và truyền cảm hứng.',
      excess: 'Nếu Hỏa quá vượng: dễ nóng vội, bốc đồng, nói nhanh hơn nghĩ, mau kiệt sức.',
      deficient: 'Nếu Hỏa khuyết thiếu: thiếu nhiệt tình, ngại xuất hiện trước đám đông, ngại bộc lộ cảm xúc.',
      lifestyle: 'Câu hỏi tự đối chiếu: bạn thường thể hiện sự chủ động và nhiệt tình ở hoàn cảnh nào?',
      environment: 'Không gian ấm cúng, sử dụng sắc đỏ son / cam đất / tím trầm tạo điểm nhấn sinh động.',
      reading: 'Điểm Hỏa chỉ phản ánh các Can, Chi và tàng can thuộc Hỏa trong phép đếm đang dùng; không chứng minh nghề nghiệp hay sức khỏe.',
      mindset: 'Học cách làm nguội cái đầu trước khi đưa ra các quyết định quan trọng; dùng sự nhiệt tâm để sưởi ấm người khác.',
    },
    'Thổ': {
      virtue: 'Chữ Tín & Sự Ổn Định Vững Chắc',
      meaning: 'Đại diện cho lòng trung thành, khả năng bao dung, sự thực tế, đáng tin cậy và giỏi giữ gìn thành quả.',
      excess: 'Nếu Thổ quá vượng: chậm thích nghi, bảo thủ, hay lo xa cho chuyện gia đình.',
      deficient: 'Nếu Thổ khuyết thiếu: thiếu kiên nhẫn tích lũy, dễ thay đổi mục tiêu giữa chừng.',
      lifestyle: 'Câu hỏi tự đối chiếu: điều gì giúp bạn giữ nhịp và hoàn thành một cam kết đều đặn?',
      environment: 'Nội thất gốm sứ, đá phong thủy, màu vàng đất, nâu trầm tạo cảm giác che chở, an toàn.',
      reading: 'Điểm Thổ chỉ phản ánh các Can, Chi và tàng can thuộc Thổ trong phép đếm đang dùng; không chứng minh nghề nghiệp hay sức khỏe.',
      mindset: 'Giữ chữ tín làm gốc; biết bao dung nhưng phải thiết lập ranh giới rõ ràng để không bị lợi dụng.',
    },
    'Kim': {
      virtue: 'Kỷ Luật & Trực Giác Quyết Đoán',
      meaning: 'Đại diện cho chuẩn mực đạo đức, tính công bằng, sự sắc bén trong tư duy và kỷ luật tự giác cao độ.',
      excess: 'Nếu Kim quá vượng: quá khắt khe với bản thân và người khác, lời nói dễ làm tổn thương.',
      deficient: 'Nếu Kim khuyết thiếu: thiếu nguyên tắc, dễ thỏa hiệp với sự cẩu thả, khó dứt khoát buông bỏ.',
      lifestyle: 'Câu hỏi tự đối chiếu: nguyên tắc nào đang giúp bạn quyết định rõ ràng hơn?',
      environment: 'Không gian tối giản (minimalism), sắc trắng, ánh bạc và các vật phẩm kim khí tinh xảo.',
      reading: 'Điểm Kim chỉ phản ánh các Can, Chi và tàng can thuộc Kim trong phép đếm đang dùng; không chứng minh nghề nghiệp hay sức khỏe.',
      mindset: 'Lấy sự cương trực làm giáp, lấy lòng từ bi làm khiên; nói lời ái ngữ để giữ hòa khí.',
    },
    'Thủy': {
      virtue: 'Trí Tuệ & Khả Năng Thích Nghi',
      meaning: 'Đại diện cho sự thông minh, trực giác nhạy bén, khả năng nhìn xa trông rộng và xoay chuyển khéo léo.',
      excess: 'Nếu Thủy quá vượng: cảm xúc thất thường như sóng biển, hay suy diễn phức tạp hóa vấn đề.',
      deficient: 'Nếu Thủy khuyết thiếu: tư duy cứng nhắc, ngại thay đổi phương pháp, khó thích ứng khi có biến chuyển đột ngột.',
      lifestyle: 'Câu hỏi tự đối chiếu: khi hoàn cảnh thay đổi, bạn đang linh hoạt ở đâu và cần thêm dữ kiện ở đâu?',
      environment: 'Bể cá cảnh, đài phun nước mini, sắc xanh lam / đen tuyền mang lại cảm giác sâu thẳm tĩnh tại.',
      reading: 'Điểm Thủy chỉ phản ánh các Can, Chi và tàng can thuộc Thủy trong phép đếm đang dùng; không chứng minh nghề nghiệp hay sức khỏe.',
      mindset: 'Mềm mại như nước luồn qua kẽ đá: gặp chướng ngại vật thì uốn lượn đi qua, không đối đầu vô ích.',
    },
  };

  const curGuide = ELEMENT_DAILY_GUIDE[selectedEl] || ELEMENT_DAILY_GUIDE['Thủy'];
  const dynamicEl = chart.dynamicElementInsights?.[selectedEl] || null;

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
      h('h2', { className: 'chapter-title' }, 'Phân bố Ngũ hành trong Tứ trụ'),
      h(
        'p',
        { className: 'chapter-desc' },
        'Biểu đồ cộng các Can, Chi và tàng can theo trọng số đang công bố. Bấm từng hành để xem dữ kiện nào đang được mô tả; tỷ trọng này không phải chẩn đoán sức khỏe, tính cách hay mức độ tốt xấu.'
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

            // Tâm trận đồ chỉ mô tả phép đếm; không suy ra vượng suy hoặc Dụng thần.
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
                'PHÂN BỐ'
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
                'NGŨ HÀNH'
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
          h('span', { className: 'col-tag beginner-tag' }, 'DÀNH CHO NGƯỜI ĐỌC · CÁCH ĐỌC DỮ LIỆU'),
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

        // Thẻ giải thích phép đếm đang dùng
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
              h('span', null, 'Phép đếm cấu trúc Ngũ hành')
            ),
            h('span', { className: 'guide-period-pill' }, 'Dữ kiện, không phải kết luận')
          ),
          h('h3', { className: 'guide-headline' }, 'Biểu đồ cho biết hành nào xuất hiện nhiều hoặc ít hơn'),
          h(
            'p',
            { className: 'guide-meaning-body' },
            'Mỗi điểm đến từ vị trí Can, Chi và tàng can trong bốn trụ, với Nguyệt lệnh có trọng số cao hơn. Chênh lệch trên biểu đồ chỉ mô tả phép đếm đó; nó không tự chứng minh một đặc điểm cá nhân.'
          ),
          h(
            'div',
            { className: 'guide-prompt-quote' },
            h(InfoIcon, { React, size: 15, color: 'var(--gold)' }),
            h('span', null, 'Phần Vượng suy và Dụng thần đang chờ quy tắc được duyệt độc lập nên không được suy ra từ biểu đồ này.')
          )
        ),

        // Thẻ Chi Tiết Hành Đang Chọn & 4 Chiều Đời Sống
        h(
          'div',
          { className: 'guide-card-secondary' },
          h('h4', { className: 'card-sec-title' }, `Hành ${selectedEl} (${curTheme.han}) Trong Tâm Tính & Ứng Dụng Thực Tế`),
          h('p', { className: 'card-sec-desc' }, dynamicEl ? dynamicEl.dynamicAnalysis : curGuide.meaning),
          h(
            'div',
            { className: 'guide-traits-grid' },
            h(
              'div',
              { className: 'trait-box' },
              h('span', { className: 'trait-label' }, 'Quan Hệ Với Nhật Chủ'),
              h('strong', { style: { color: curTheme.color } }, dynamicEl ? dynamicEl.role : curGuide.virtue),
              h('p', null, dynamicEl ? dynamicEl.roleDesc : curTheme.trait)
            ),
            h(
              'div',
              { className: 'trait-box' },
              h('span', { className: 'trait-label' }, 'Trạng Thái Khí Mạch'),
              h(
                'strong',
                null,
                dynamicEl ? dynamicEl.stateLabel : (
                  (weightedCounts[selectedEl] || 0) > 2.5
                    ? 'Tỷ Trọng Cao (> 2.5đ)'
                    : (weightedCounts[selectedEl] || 0) === 0
                      ? 'Chưa Có Điểm'
                      : 'Hài Hòa Vừa Vặn'
                )
              ),
              h(
                'p',
                null,
                dynamicEl ? dynamicEl.application : (
                  (weightedCounts[selectedEl] || 0) > 2.5
                    ? curGuide.excess
                    : (weightedCounts[selectedEl] || 0) === 0
                      ? curGuide.deficient
                      : (curGuide.reading || 'Khí mạch ngũ hành điều hòa ổn định.')
                )
              )
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
                'Câu Hỏi Tự Đối Chiếu'
              ),
              h('p', { className: 'domain-card-desc' }, curGuide.lifestyle)
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
                'Biểu Đồ Đang Nói Gì'
              ),
              h('p', { className: 'domain-card-desc' }, curGuide.reading)
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
