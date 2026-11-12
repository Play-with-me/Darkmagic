/**
 * src/atlas/TenGodsProfileMap.mjs
 * ĐỒ BẢN IV: THẬP THẦN CÁCH CỤC
 * Bố cục Split-View:
 * - Cột Trái: Mạn-đà-la 10 Cung Thập Thần
 * - Cột Phải: giải thích truyền thống để người đọc tự đối chiếu
 */

import {
  AwardIcon,
  SparklesIcon,
  BookOpenIcon,
  InfoIcon,
  CheckCircleIcon,
  LayersIcon,
} from './icons.mjs';
import { ELEMENT_THEME } from './bazi-engine-ext.mjs';

export function TenGodsProfileMap({ React, chart }) {
  const h = React.createElement;
  const [selectedGodName, setSelectedGodName] = React.useState('Chính tài');

  const tenGodList = chart.tenGodList || [];
  const curGod = tenGodList.find((g) => g.name === selectedGodName) || tenGodList[0] || {
    name: 'Chính tài',
    group: 'Tài Tinh',
    element: 'Thổ',
    count: 0,
    desc: 'Tài chính minh bạch, cần cù tích lũy, trọng chữ tín.',
  };

  // Cẩm nang giải mã 10 Thập Thần bằng ngôn ngữ đời thường cho người mới
  const TEN_GODS_BEGINNER_MEANINGS = {
    'Tỷ kiên': {
      archetype: 'Người Bạn Đồng Hành Cùng Chí Hướng',
      modernRole: 'Khả năng tự chủ, làm việc độc lập, tự lực cánh sinh.',
      career: 'Gợi ý đối chiếu: công việc chuyên môn, tự chủ hoặc chịu trách nhiệm một dự án.',
      shadow: 'Hơi bướng bỉnh, khó nhún nhường, dễ bị bạn bè cạnh tranh.',
    },
    'Kiếp tài': {
      archetype: 'Chiến Binh Cạnh Tranh & Táo Bạo',
      modernRole: 'Sức bật dấn thân, hành động quyết đoán, dám chấp nhận rủi ro.',
      career: 'Gợi ý đối chiếu: môi trường cần dấn thân, thương lượng và làm rõ ranh giới hợp tác.',
      shadow: 'Dễ vung tay quá trán, cả nể cho vay mượn tiền bạc rồi mất lòng.',
    },
    'Thực thần': {
      archetype: 'Nghệ Sĩ Yêu Đời & Hưởng Thụ Phúc Lộc',
      modernRole: 'Tâm hồn rộng mở, tư duy sáng tạo nghệ thuật, sành ăn nói và ẩm thực.',
      career: 'Gợi ý đối chiếu: hoạt động tạo ra sản phẩm hữu hình, giảng giải hoặc sáng tạo.',
      shadow: 'Đôi khi hơi lười biếng, dễ thỏa mãn với sự an nhàn, thiếu kỷ luật thép.',
    },
    'Thương quan': {
      archetype: 'Kẻ Phá Cách & Tài Năng Hùng Biện',
      modernRole: 'Trí thông minh sắc sảo, thích đổi mới cái cũ, hùng biện xuất sắc.',
      career: 'Gợi ý đối chiếu: hoạt động đặt câu hỏi, trình bày quan điểm hoặc cải tiến cách làm.',
      shadow: 'Lời nói sắc như dao dễ làm mất lòng cấp trên; tính tình kiêu ngạo.',
    },
    'Chính tài': {
      archetype: 'Nhà Quản Lý Tài Chính Chu Đáo',
      modernRole: 'Thực tế, coi trọng chữ tín, cần cù tích lũy dòng tiền ổn định.',
      career: 'Gợi ý đối chiếu: công việc cần giữ nhịp, quản lý nguồn lực và theo dõi kết quả.',
      shadow: 'Đôi khi quá thực dụng hoặc quá tính toán chi li khiến người khác ngột ngạt.',
    },
    'Thiên tài': {
      archetype: 'Nhà Đầu Tư Cơ Hội Hào Sảng',
      modernRole: 'Nhạy bén với cơ hội mới, kiếm tiền nhanh từ nhiều nguồn, giao thiệp rộng.',
      career: 'Gợi ý đối chiếu: thử nghiệm cơ hội mới ở quy mô nhỏ và đánh giá bằng kết quả.',
      shadow: 'Kiếm nhanh nhưng tiêu cũng nhanh; tiền vào như nước, ra như thác.',
    },
    'Chính quan': {
      archetype: 'Nhà Lãnh Đạo Kỷ Luật & Trách Nhiệm',
      modernRole: 'Tác phong chuẩn mực, tôn trọng pháp luật và quy chuẩn, trọng danh dự.',
      career: 'Gợi ý đối chiếu: vai trò có tiêu chuẩn rõ, trách nhiệm và cơ chế phản hồi.',
      shadow: 'Đôi lúc quá bảo thủ theo quy trình, sợ sai sót nên chậm đổi mới.',
    },
    'Thất sát': {
      archetype: 'Tướng Lĩnh Xung Trận Trong Nghịch Cảnh',
      modernRole: 'Ý chí sắt đá, uy quyền quyết đoán, có khả năng lội ngược dòng thần kỳ.',
      career: 'Gợi ý đối chiếu: tình huống cần ưu tiên, kỷ luật và xử lý áp lực theo từng bước.',
      shadow: 'Áp lực nội tâm lớn, hay nghi ngờ; phong cách quản lý dễ độc đoán.',
    },
    'Chính ấn': {
      archetype: 'Bậc Thầy Trí Thức & Chỗ Dựa Ấm Áp',
      modernRole: 'Lòng nhân từ, học vấn chính thống uyên bác, được người bề trên yêu mến.',
      career: 'Gợi ý đối chiếu: học có hệ thống, hướng dẫn người khác hoặc làm việc theo nguồn tin cậy.',
      shadow: 'Dễ ỷ lại vào sự bảo bọc, thiếu tính dứt khoát khi đối mặt với thương trường khốc liệt.',
    },
    'Thiên ấn': {
      archetype: 'Nhà Triết Học Độc Bản & Trực Giác Ẩn Vi',
      modernRole: 'Tư duy dị biệt, thấu suốt tâm lý con người, hứng thú với huyền học và triết lý.',
      career: 'Gợi ý đối chiếu: nghiên cứu một câu hỏi sâu, so sánh nguồn và kiểm tra qua thực tế.',
      shadow: 'Thích cô độc, khó mở lòng, dễ chìm vào suy nghĩ xa rời thực tế.',
    },
  };

  const curGodMeaning = TEN_GODS_BEGINNER_MEANINGS[curGod.name] || TEN_GODS_BEGINNER_MEANINGS['Chính tài'];
  const godTheme = ELEMENT_THEME[curGod.element] || ELEMENT_THEME['Thổ'];
  const dynamicGod = chart.dynamicTenGodInsights?.[curGod.name] || null;

  return h(
    'section',
    {
      id: 'ten-gods',
      className: 'atlas-chapter-section ritual-mist-card',
      'aria-label': 'Đồ Bản IV: Thập Thần Cách Cục',
    },
    // Tiêu đề chương
    h(
      'header',
      { className: 'chapter-header' },
      h(
        'div',
        { className: 'chapter-badge' },
        h(AwardIcon, { React, size: 14, color: 'var(--gold)' }),
        h('span', null, 'ĐỒ BẢN IV · THẬP THẦN PHÁP QUYẾT (十神格局)')
      ),
      h('h2', { className: 'chapter-title' }, 'Thập Thần trong cấu trúc Bát tự'),
      h(
        'p',
        { className: 'chapter-desc' },
        'Thập Thần là tên gọi truyền thống cho quan hệ giữa các Can với Nhật chủ. Bấm từng mục để xem dữ kiện xuất hiện ở đâu và một cách hiểu dễ đối chiếu; mục này không xác định tính cách, nghề nghiệp hay tài chính của bạn.'
      )
    ),

    // Bố cục Chia Đôi (Split View)
    h(
      'div',
      { className: 'chapter-split-layout' },

      // ================= CỘT TRÁI: ĐỒ BẢN CHUYÊN SÂU =================
      h(
        'div',
        { className: 'split-column split-column-tech' },
        h(
          'div',
          { className: 'column-header-bar' },
          h('span', { className: 'col-tag pro-tag' }, 'DÀNH CHO DÂN CHUYÊN · MẠN-ĐÀ-LA 10 CUNG'),
          h('span', { className: 'col-hint' }, 'Bấm chọn từng Thần để soi vị trí')
        ),

        // Lưới 10 Thập Thần
        h(
          'div',
          { className: 'tengods-grid' },
          tenGodList.map((god) => {
            const isSelected = selectedGodName === god.name;
            const theme = ELEMENT_THEME[god.element] || godTheme;
            return h(
              'button',
              {
                key: god.name,
                type: 'button',
                className: `tengod-card ${isSelected ? 'is-selected-god' : ''}`,
                onClick: () => setSelectedGodName(god.name),
              },
              h(
                'div',
                { className: 'tengod-card-top' },
                h('span', { className: 'tengod-group-pill' }, god.group?.split('(')[0] || ''),
                god.count > 0 && h('span', { className: 'tengod-count-badge' }, `${god.count.toFixed(1)}`)
              ),
              h('strong', { className: 'tengod-name', style: { color: isSelected ? 'var(--gold)' : theme.color } }, god.name),
              h('small', { className: 'tengod-subdesc' }, god.desc)
            );
          })
        ),
        h('p', { className: 'atlas-data-limit' }, 'Vượng suy, Dụng thần và Hỷ thần chưa được phát hành trong bản thử nghiệm vì quy tắc nội dung đang chờ duyệt độc lập.')
      ),

      // ================= CỘT PHẢI: LỜI GIẢI ĐỜI THƯỜNG =================
      h(
        'div',
        { className: 'split-column split-column-guide' },
        h(
          'div',
          { className: 'column-header-bar' },
          h('span', { className: 'col-tag beginner-tag' }, 'DÀNH CHO NGƯỜI ĐỌC · GIẢI NGHĨA TRUYỀN THỐNG'),
          h('span', { className: 'col-hint' }, `Đang soi: ${curGod.name} (${(curGod.count || 0).toFixed(1)} điểm)`)
        ),

        // Hàng nút chọn nhanh 10 Thần cho người đọc
        h(
          'div',
          { className: 'quick-switch-tabs' },
          tenGodList.map((g, gIdx) =>
            h(
              'button',
              {
                key: gIdx,
                type: 'button',
                className: `switch-tab-btn ${curGod.name === g.name ? 'is-active' : ''}`,
                onClick: () => setSelectedGodName(g.name),
              },
              `${g.name} (${(g.count || 0).toFixed(1)})`
            )
          )
        ),

        // Thẻ Giải Nghĩa Thập Thần Đang Chọn
        h(
          'div',
          { className: 'guide-card-primary' },
          h(
            'div',
            { className: 'guide-card-head' },
            h(
              'div',
              { className: 'guide-card-badge' },
              h(AwardIcon, { React, size: 14, color: 'var(--gold)' }),
              h('span', null, `Quan hệ ${curGod.name}`)
            ),
            h('span', { className: 'guide-period-pill' }, dynamicGod?.presenceText || curGod.group)
          ),
          h('h3', { className: 'guide-headline' }, `Hình tượng ${curGod.name} (${curGod.group})`),
          h('p', { className: 'guide-meaning-body' }, dynamicGod ? dynamicGod.strategicAdvice : `Theo cách diễn giải truyền thống: ${curGodMeaning.modernRole} Đây là khung tham khảo để tự đối chiếu, không phải nhãn cố định về con người bạn.`),
          h(
            'div',
            { className: 'guide-prompt-quote' },
            h(InfoIcon, { React, size: 15, color: 'var(--gold)' }),
            h('span', null, dynamicGod?.locations?.length ? `Vị trí: ${dynamicGod.locations.join(', ')}. ${curGodMeaning.career}` : curGodMeaning.career)
          ),

          // Lưới 4 Chiều Năng Lực (Môi trường, Kiếm tiền, Sức mạnh, Cạm bẫy)
          h(
            'div',
            { className: 'guide-domains-grid' },
            h(
              'div',
              { className: 'domain-card' },
              h(
                'div',
                { className: 'domain-card-head' },
                h('span', { style: { fontFamily: 'var(--font-han-brush)', color: 'var(--cinnabar-glow)', marginRight: '6px', fontSize: '13px' } }, '事業'),
                'Bối Cảnh Để Đối Chiếu'
              ),
              h('p', { className: 'domain-card-desc' }, curGodMeaning.career)
            ),
            h(
              'div',
              { className: 'domain-card' },
              h(
                'div',
                { className: 'domain-card-head' },
                h('span', { style: { fontFamily: 'var(--font-han-brush)', color: 'var(--cinnabar-glow)', marginRight: '6px', fontSize: '13px' } }, '財帛'),
                'Cách Quản Lý Nguồn Lực'
              ),
              h('p', { className: 'domain-card-desc' }, 'Quan sát cách bạn phân bổ thời gian, công sức và tiền bạc trong hoàn cảnh thật; không dùng Bát tự thay cho tư vấn tài chính.')
            ),
            h(
              'div',
              { className: 'domain-card' },
              h(
                'div',
                { className: 'domain-card-head' },
                h('span', { style: { fontFamily: 'var(--font-han-brush)', color: 'var(--cinnabar-glow)', marginRight: '6px', fontSize: '13px' } }, '天賦'),
                'Hình Tượng Truyền Thống'
              ),
              h('p', { className: 'domain-card-desc' }, curGod.desc)
            ),
            h(
              'div',
              { className: 'domain-card' },
              h(
                'div',
                { className: 'domain-card-head' },
                h('span', { style: { fontFamily: 'var(--font-han-brush)', color: 'var(--cinnabar-glow)', marginRight: '6px', fontSize: '13px' } }, '慎行'),
                'Mặt Cần Tự Đối Chiếu'
              ),
              h('p', { className: 'domain-card-desc' }, curGodMeaning.shadow)
            )
          )
        ),

        // Giới hạn diễn giải chưa được duyệt
        h(
          'div',
          { className: 'guide-card-secondary' },
          h('h4', { className: 'card-sec-title' }, 'Giới hạn của phần giải nghĩa'),
          h('p', { className: 'card-sec-desc' }, 'Số lần xuất hiện cho biết vị trí trong cấu trúc đang hiển thị, không phải điểm năng lực hay mức độ tốt xấu. Mệnh Quán không phát hành kết luận Dụng thần khi quy tắc chưa được duyệt.')
        ),

        // Lời khuyên định hướng công việc
        h(
          'div',
          { className: 'guide-card-action' },
          h(CheckCircleIcon, { React, size: 16, color: 'var(--gold)' }),
          h(
            'div',
            { className: 'guide-action-text' },
            h('strong', null, 'Một câu hỏi tự đối chiếu:'),
            h('p', null, `${curGodMeaning.career} Nếu không phù hợp với trải nghiệm của bạn, hãy ghi nhận sự khác biệt thay vì cố gán kết quả.`)
          )
        )
      )
    )
  );
}
