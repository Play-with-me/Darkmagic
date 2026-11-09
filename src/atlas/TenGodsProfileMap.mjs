/**
 * src/atlas/TenGodsProfileMap.mjs
 * ĐỒ BẢN IV: THẬP THẦN CÁCH CỤC & DỤNG THẦN PHÁP QUYẾT
 * Bố cục Split-View:
 * - Cột Trái: Mạn-đà-la 10 Cung Thập Thần + Ấn Chương Dụng Thần Pháp Quyết
 * - Cột Phải: Lời giải đời thường giải mã Thiên Hướng Sự Nghiệp & Bản Đồ Tâm Lý cho người mới
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
  const yongShen = chart.yongShen || {
    isStrong: true,
    pattern: 'Chính Tài Cách',
    yongShen: { element: 'Thổ', name: 'Tài Tinh' },
    xiShen: { element: 'Hỏa', name: 'Thực Thương' },
    jiShen: { element: 'Thủy', name: 'Tỷ Kiếp' },
  };

  const curGod = tenGodList.find((g) => g.name === selectedGodName) || tenGodList[0] || {
    name: 'Chính tài',
    group: 'Tài Tinh',
    element: 'Thổ',
    desc: 'Tài chính minh bạch, cần cù tích lũy, trọng chữ tín.',
  };

  // Cẩm nang giải mã 10 Thập Thần bằng ngôn ngữ đời thường cho người mới
  const TEN_GODS_BEGINNER_MEANINGS = {
    'Tỷ kiên': {
      archetype: 'Người Bạn Đồng Hành Cùng Chí Hướng',
      modernRole: 'Khả năng tự chủ, làm việc độc lập, tự lực cánh sinh.',
      career: 'Hợp với công việc chuyên môn cao, tự doanh hoặc làm chủ dự án riêng.',
      shadow: 'Hơi bướng bỉnh, khó nhún nhường, dễ bị bạn bè cạnh tranh.',
    },
    'Kiếp tài': {
      archetype: 'Chiến Binh Cạnh Tranh & Táo Bạo',
      modernRole: 'Sức bật dấn thân, hành động quyết đoán, dám chấp nhận rủi ro.',
      career: 'Hợp với kinh doanh khởi nghiệp, thương thuyết gay cấn, môi trường cạnh tranh cao.',
      shadow: 'Dễ vung tay quá trán, cả nể cho vay mượn tiền bạc rồi mất lòng.',
    },
    'Thực thần': {
      archetype: 'Nghệ Sĩ Yêu Đời & Hưởng Thụ Phúc Lộc',
      modernRole: 'Tâm hồn rộng mở, tư duy sáng tạo nghệ thuật, sành ăn nói và ẩm thực.',
      career: 'Hợp với nghệ thuật, thiết kế, ẩm thực, giáo dục, sáng tạo nội dung.',
      shadow: 'Đôi khi hơi lười biếng, dễ thỏa mãn với sự an nhàn, thiếu kỷ luật thép.',
    },
    'Thương quan': {
      archetype: 'Kẻ Phá Cách & Tài Năng Hùng Biện',
      modernRole: 'Trí thông minh sắc sảo, thích đổi mới cái cũ, hùng biện xuất sắc.',
      career: 'Hợp với luật sư, nhà báo, đạo diễn, diễn giả, kiến trúc sư giải pháp mới.',
      shadow: 'Lời nói sắc như dao dễ làm mất lòng cấp trên; tính tình kiêu ngạo.',
    },
    'Chính tài': {
      archetype: 'Nhà Quản Lý Tài Chính Chu Đáo',
      modernRole: 'Thực tế, coi trọng chữ tín, cần cù tích lũy dòng tiền ổn định.',
      career: 'Hợp với ngân hàng, kế toán, bất động sản dài hạn, quản lý chuỗi cung ứng.',
      shadow: 'Đôi khi quá thực dụng hoặc quá tính toán chi li khiến người khác ngột ngạt.',
    },
    'Thiên tài': {
      archetype: 'Nhà Đầu Tư Cơ Hội Hào Sảng',
      modernRole: 'Nhạy bén với cơ hội mới, kiếm tiền nhanh từ nhiều nguồn, giao thiệp rộng.',
      career: 'Hợp với đầu tư tài chính, chứng khoán, thương mại quốc tế, tổ chức sự kiện.',
      shadow: 'Kiếm nhanh nhưng tiêu cũng nhanh; tiền vào như nước, ra như thác.',
    },
    'Chính quan': {
      archetype: 'Nhà Lãnh Đạo Kỷ Luật & Trách Nhiệm',
      modernRole: 'Tác phong chuẩn mực, tôn trọng pháp luật và quy chuẩn, trọng danh dự.',
      career: 'Hợp với cơ quan công quyền, quản lý doanh nghiệp lớn, cố vấn pháp lý.',
      shadow: 'Đôi lúc quá bảo thủ theo quy trình, sợ sai sót nên chậm đổi mới.',
    },
    'Thất sát': {
      archetype: 'Tướng Lĩnh Xung Trận Trong Nghịch Cảnh',
      modernRole: 'Ý chí sắt đá, uy quyền quyết đoán, có khả năng lội ngược dòng thần kỳ.',
      career: 'Hợp với quản lý khủng hoảng, lực lượng vũ trang, chỉ huy dự án gai góc.',
      shadow: 'Áp lực nội tâm lớn, hay nghi ngờ; phong cách quản lý dễ độc đoán.',
    },
    'Chính ấn': {
      archetype: 'Bậc Thầy Trí Thức & Chỗ Dựa Ấm Áp',
      modernRole: 'Lòng nhân từ, học vấn chính thống uyên bác, được người bề trên yêu mến.',
      career: 'Hợp với giảng viên, nhà nghiên cứu, bác sĩ, hoạt động thiện nguyện.',
      shadow: 'Dễ ỷ lại vào sự bảo bọc, thiếu tính dứt khoát khi đối mặt với thương trường khốc liệt.',
    },
    'Thiên ấn': {
      archetype: 'Nhà Triết Học Độc Bản & Trực Giác Ẩn Vi',
      modernRole: 'Tư duy dị biệt, thấu suốt tâm lý con người, hứng thú với huyền học và triết lý.',
      career: 'Hợp với tâm lý học, cố vấn chiến lược, chiêm tinh học, lập trình viên thuật toán.',
      shadow: 'Thích cô độc, khó mở lòng, dễ chìm vào suy nghĩ xa rời thực tế.',
    },
  };

  const curGodMeaning = TEN_GODS_BEGINNER_MEANINGS[curGod.name] || TEN_GODS_BEGINNER_MEANINGS['Chính tài'];
  const godTheme = ELEMENT_THEME[curGod.element] || ELEMENT_THEME['Thổ'];

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
      h('h2', { className: 'chapter-title' }, 'Thập Thần Cách Cục & Dụng Thần Định Hướng'),
      h(
        'p',
        { className: 'chapter-desc' },
        'Mười luồng tâm lý Thập Thần biểu diễn tài năng, tham vọng và thiên hướng nghề nghiệp. Bấm chọn từng Thập Thần bên trái để mở chìa khóa phát triển bản thân bên phải.'
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

        // Thẻ Dụng Thần — Hỷ Thần — Kỵ Thần
        h(
          'div',
          { className: 'yongshen-decree-box' },
          h('h4', { className: 'decree-title' }, 'Dụng Thần Pháp Quyết (Chìa Khóa Cải Mệnh)'),
          h(
            'div',
            { className: 'decree-cards-grid' },
            h(
              'div',
              { className: 'decree-card yong-card' },
              h('span', { className: 'decree-type-tag' }, 'DỤNG THẦN (DÙNG ĐẦU TIÊN)'),
              h('strong', null, `Hành ${yongShen.yongShen.element}`),
              h('p', null, yongShen.yongShen.desc || 'Hóa giải xung đột nguyên cục.')
            ),
            h(
              'div',
              { className: 'decree-card xi-card' },
              h('span', { className: 'decree-type-tag' }, 'HỶ THẦN (TRỢ LỰC)'),
              h('strong', null, `Hành ${yongShen.xiShen.element}`),
              h('p', null, yongShen.xiShen.desc || 'Nâng đỡ sức mạnh Dụng Thần.')
            ),
            h(
              'div',
              { className: 'decree-card ji-card' },
              h('span', { className: 'decree-type-tag' }, 'KỴ THẦN (CẦN TIẾT CHẾ)'),
              h('strong', null, `Hành ${yongShen.jiShen.element}`),
              h('p', null, yongShen.jiShen.desc || 'Tránh bồi đắp thêm vào lối sống.')
            )
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
          h('span', { className: 'col-tag beginner-tag' }, 'DÀNH CHO NGƯỜI MỚI · BẢN ĐỒ TÂM LÝ & NGHỀ NGHIỆP'),
          h('span', { className: 'col-hint' }, `Đang soi: ${curGod.name}`)
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
              h('span', null, curGodMeaning.archetype)
            ),
            h('span', { className: 'guide-period-pill' }, curGod.group)
          ),
          h('h3', { className: 'guide-headline' }, `Thiên Hướng Thực Tế Của ${curGod.name}`),
          h('p', { className: 'guide-meaning-body' }, curGodMeaning.modernRole),
          h(
            'div',
            { className: 'guide-prompt-quote' },
            h(InfoIcon, { React, size: 15, color: 'var(--gold)' }),
            h('span', null, `Môi trường tỏa sáng: ${curGodMeaning.career}`)
          )
        ),

        // Điểm Mạnh & Điểm Mù Cần Lưu Ý
        h(
          'div',
          { className: 'guide-card-secondary' },
          h('h4', { className: 'card-sec-title' }, 'Điểm Mạnh Tự Nhiên & Điểm Mù Cần Nhận Biết'),
          h(
            'div',
            { className: 'guide-traits-grid' },
            h(
              'div',
              { className: 'trait-box' },
              h('span', { className: 'trait-label' }, 'Điểm Mạnh Cốt Lõi'),
              h('strong', { style: { color: godTheme.color } }, curGod.name),
              h('p', null, curGod.desc)
            ),
            h(
              'div',
              { className: 'trait-box' },
              h('span', { className: 'trait-label' }, 'Điểm Mù Cần Tránh'),
              h('strong', null, 'Cảnh giác nội tâm'),
              h('p', null, curGodMeaning.shadow)
            )
          )
        ),

        // Lời khuyên định hướng công việc
        h(
          'div',
          { className: 'guide-card-action' },
          h(CheckCircleIcon, { React, size: 16, color: 'var(--gold)' }),
          h(
            'div',
            { className: 'guide-action-text' },
            h('strong', null, 'Ứng dụng vào công việc:'),
            h('p', null, `Hãy chọn những dự án cho phép bạn vận dụng ${curGodMeaning.modernRole.toLowerCase()} và tránh các tình huống ${curGodMeaning.shadow.toLowerCase()}`)
          )
        )
      )
    )
  );
}
