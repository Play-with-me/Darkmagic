/**
 * src/atlas/BaziMatrixMap.mjs
 * ĐỒ BẢN I: TỨ TRỤ HUYỀN BÀN 7 TẦNG & MẠCH KHÍ ĐỊA CHI
 * Bố cục Split-View:
 * - Cột Trái: Đồ bản chuyên sâu 7 tầng + Cầu Mạch Khí Hình-Xung-Hợp-Hại
 * - Cột Phải: Lời giải đời thường dễ hiểu cho người mới (Tương ứng với trụ đang chọn)
 */

import {
  LayersIcon,
  SparklesIcon,
  BookOpenIcon,
  InfoIcon,
  CheckCircleIcon,
  AlertCircleIcon,
} from './icons.mjs';
import { ELEMENT_THEME, PILLAR_ROLES_BEGINNER, STEM_META } from './bazi-engine-ext.mjs';

export function BaziMatrixMap({ React, chart, activePillar, onSelectPillar }) {
  const h = React.createElement;
  const [selectedPillarIdx, setSelectedPillarIdx] = React.useState(activePillar ?? 2);
  const [hoveredInteraction, setHoveredInteraction] = React.useState(null);

  const pillars = chart.pillars || [];
  const curPillar = pillars[selectedPillarIdx] || pillars[2] || pillars[0] || {
    label: 'Chưa xác định',
    name: '',
    stem: null,
    branch: null,
  };
  const highlightedColIndices = hoveredInteraction ? (hoveredInteraction.pillars || []) : [];

  const pillarReadingGuide = [
    { theme: 'Trụ Năm', period: 'Mốc năm sinh', meaning: 'Gồm Can và Chi của trụ Năm theo quy ước lịch đang dùng.', question: 'Đọc Can, Chi, tàng can và quan hệ Thập Thần ở cùng cột; không suy ra hoàn cảnh gia đình nếu bạn chưa chia sẻ.' },
    { theme: 'Trụ Tháng', period: 'Mốc tháng theo tiết khí', meaning: 'Gồm Can và Chi của trụ Tháng; mốc đổi tháng dùng tiết khí theo quy ước đã công bố.', question: 'Đây là cột có trọng số Nguyệt lệnh trong biểu đồ Ngũ hành; trọng số không phải điểm tính cách.' },
    { theme: 'Trụ Ngày', period: 'Mốc ngày sinh', meaning: 'Thiên Can của trụ Ngày được dùng làm Nhật chủ để tính quan hệ Thập Thần.', question: 'Nhật chủ là điểm tham chiếu kỹ thuật của phép tính, không phải nhãn cố định mô tả toàn bộ con người bạn.' },
    { theme: 'Trụ Giờ', period: 'Mốc giờ sinh', meaning: 'Gồm Can và Chi của giờ dân sự địa phương; phần này để trống khi không biết giờ.', question: 'Nếu giờ sinh chưa chắc chắn, hãy xem đây là phần chưa xác định thay vì chọn một giờ gần đúng.' },
  ];
  const beginnerPillarInfo = curPillar.dynamicInsight || pillarReadingGuide[selectedPillarIdx] || pillarReadingGuide[2];
  const stemTheme = ELEMENT_THEME[curPillar?.stemElement] || ELEMENT_THEME['Thủy'];
  const branchTheme = ELEMENT_THEME[curPillar?.branchElement] || ELEMENT_THEME['Thủy'];

  function handleSelect(idx) {
    setSelectedPillarIdx(idx);
    if (onSelectPillar) onSelectPillar(idx);
  }

  function renderElementBadge(el) {
    if (!el) {
      return h('span', { className: 'atlas-el-badge-unknown' }, 'Khuyết giờ');
    }
    const theme = ELEMENT_THEME[el] || ELEMENT_THEME['Thủy'];
    return h(
      'span',
      {
        className: 'atlas-el-badge',
        style: {
          color: theme.color,
          backgroundColor: theme.bg,
          borderColor: theme.border,
        },
      },
      `${theme.han} ${el}`
    );
  }

  return h(
    'section',
    {
      id: 'bazi-matrix',
      className: 'atlas-chapter-section ritual-mist-card',
      'aria-label': 'Đồ Bản I: Tứ Trụ Huyền Bàn',
    },
    // Tiêu đề chương
    h(
      'header',
      { className: 'chapter-header' },
      h(
        'div',
        { className: 'chapter-badge' },
        h(LayersIcon, { React, size: 14, color: 'var(--gold)' }),
        h('span', null, 'ĐỒ BẢN I · TỨ TRỤ NGUYÊN CỤC (四柱八字)')
      ),
      h('h2', { className: 'chapter-title' }, 'Tứ Trụ Huyền Bàn & Mạch Khí Địa Chi'),
      h(
        'p',
        { className: 'chapter-desc' },
        'Bốn trụ Năm · Tháng · Ngày · Giờ là dữ kiện nền của lá số. Bấm từng trụ để xem cách đọc Can, Chi, tàng can và quan hệ với Nhật chủ; phần này không tự suy diễn hoàn cảnh đời sống.'
      )
    ),

    // Bố cục Chia Đôi (Split View)
    h(
      'div',
      { className: 'chapter-split-layout' },

      // ================= CỘT TRÁI: BẢN ĐỒ CHUYÊN SÂU =================
      h(
        'div',
        { className: 'split-column split-column-tech' },
        h(
          'div',
          { className: 'column-header-bar' },
          h('span', { className: 'col-tag pro-tag' }, 'DÀNH CHO DÂN CHUYÊN · ĐỒ BẢN CỔ PHÁP 7 TẦNG'),
          h('span', { className: 'col-hint' }, 'Bấm chọn từng cột trụ để soi mạch')
        ),

        // Ma trận 7 tầng
        h(
          'div',
          { className: 'matrix-table-wrap' },
          h(
            'table',
            { className: 'bazi-matrix-table' },
            h(
              'thead',
              null,
              h(
                'tr',
                null,
                h('th', { className: 'col-header-sticky' }, 'TẦNG MA TRẬN'),
                pillars.map((p, idx) =>
                  h(
                    'th',
                    {
                      key: p.label,
                      className: `pillar-col-header ${selectedPillarIdx === idx ? 'is-selected-col' : ''} ${highlightedColIndices.includes(idx) ? 'is-beaming-col' : ''}`,
                      onClick: () => handleSelect(idx),
                    },
                    h('div', { className: 'header-label-viet' }, `Trụ ${p.label}`),
                    h('div', { className: 'header-palace-title' }, p.palaceTitle?.split('&')[0] || ''),
                    p.isDayMaster && h('span', { className: 'header-daymaster-pill' }, 'NHẬT CHỦ')
                  )
                )
              )
            ),
            h(
              'tbody',
              null,
              // Tầng 1: Thập Thần Can
              h(
                'tr',
                null,
                h('td', { className: 'row-title' }, '1. Thập Thần Can'),
                pillars.map((p, idx) =>
                  h(
                    'td',
                    { key: idx, className: selectedPillarIdx === idx ? 'cell-active' : '' },
                    p.isDayMaster
                      ? h('strong', { className: 'daymaster-star' }, 'Bản Thân')
                      : h('span', { className: 'ten-god-tag' }, p.stemRelation || 'Chưa định')
                  )
                )
              ),
              // Tầng 2: Thiên Can (Thư pháp bút lông)
              h(
                'tr',
                { className: 'row-highlight-stem' },
                h('td', { className: 'row-title' }, '2. Thiên Can'),
                pillars.map((p, idx) => {
                  const pStemTheme = p.stemElement ? (ELEMENT_THEME[p.stemElement] || stemTheme) : { color: '#8c7d74' };
                  return h(
                    'td',
                    {
                      key: idx,
                      className: `cell-stem ${selectedPillarIdx === idx ? 'cell-active' : ''}`,
                      onClick: () => handleSelect(idx),
                    },
                    h('div', { className: 'han-brush-char', style: { color: pStemTheme.color } }, p.stemHan),
                    h('div', { className: 'viet-name-sub' }, p.stem || '—'),
                    renderElementBadge(p.stemElement)
                  );
                })
              ),
              // Tầng 3: Địa Chi (Thư pháp bút lông)
              h(
                'tr',
                { className: 'row-highlight-branch' },
                h('td', { className: 'row-title' }, '3. Địa Chi'),
                pillars.map((p, idx) => {
                  const pBrTheme = p.branchElement ? (ELEMENT_THEME[p.branchElement] || branchTheme) : { color: '#8c7d74' };
                  return h(
                    'td',
                    {
                      key: idx,
                      className: `cell-branch ${selectedPillarIdx === idx ? 'cell-active' : ''}`,
                      onClick: () => handleSelect(idx),
                    },
                    h('div', { className: 'han-brush-char', style: { color: pBrTheme.color } }, p.branchHan),
                    h('div', { className: 'viet-name-sub' }, p.branch || '—'),
                    h('div', { className: 'animal-sub' }, p.animal || 'Chưa rõ')
                  );
                })
              ),
              // Tầng 4: Tàng Can (Minh Thể)
              h(
                'tr',
                null,
                h('td', { className: 'row-title' }, '4. Tàng Can'),
                pillars.map((p, idx) =>
                  h(
                    'td',
                    { key: idx, className: selectedPillarIdx === idx ? 'cell-active' : '' },
                    (p.hiddenStems || []).length > 0
                      ? h(
                          'div',
                          { className: 'hidden-stems-flex' },
                          p.hiddenStems.map((hs, hIdx) => {
                            const meta = STEM_META[hs];
                            const elTheme = meta ? (ELEMENT_THEME[meta.element] || {}) : {};
                            return h(
                              'span',
                              {
                                key: hIdx,
                                className: 'hidden-stem-pill',
                                title: meta ? `${meta.title} (${meta.element} ${meta.polarity})` : hs,
                              },
                              meta?.han
                                ? h(
                                    'span',
                                    {
                                      className: 'hidden-stem-han',
                                      style: { color: elTheme.color || 'var(--copper-gold)' },
                                    },
                                    meta.han
                                  )
                                : null,
                              h('span', { className: 'hidden-stem-name' }, hs)
                            );
                          })
                        )
                      : '—'
                  )
                )
              ),
              // Tầng 5: Thập Thần Tàng Can
              h(
                'tr',
                null,
                h('td', { className: 'row-title' }, '5. Thập Thần Tàng'),
                pillars.map((p, idx) =>
                  h(
                    'td',
                    { key: idx, className: selectedPillarIdx === idx ? 'cell-active' : '' },
                    (p.hiddenRelations || []).length > 0
                      ? p.hiddenRelations.map((rel, rIdx) =>
                          h('div', { key: rIdx, className: 'hidden-relation-line' }, rel)
                        )
                      : '—'
                  )
                )
              ),
              // Tầng 6: Vòng Trường Sinh
              h(
                'tr',
                null,
                h('td', { className: 'row-title' }, '6. Vòng Trường Sinh'),
                pillars.map((p, idx) =>
                  h(
                    'td',
                    { key: idx, className: selectedPillarIdx === idx ? 'cell-active' : '' },
                    p.lifeStage
                      ? h(
                          'div',
                          { className: 'stage-box' },
                          h('span', { className: 'stage-han' }, p.lifeStage.han),
                          h('strong', null, p.lifeStage.name)
                        )
                      : '—'
                  )
                )
              ),
              // Tầng 7: Nạp Âm Lục Thập Hoa Giáp
              h(
                'tr',
                null,
                h('td', { className: 'row-title' }, '7. Nạp Âm 60 Hoa Giáp'),
                pillars.map((p, idx) =>
                  h(
                    'td',
                    { key: idx, className: selectedPillarIdx === idx ? 'cell-active' : '' },
                    h('div', { className: 'nayin-badge' }, p.naYin || '—')
                  )
                )
              )
            )
          )
        ),

        // Cầu Mạch Khí Hình-Xung-Hợp-Hại
        h(
          'div',
          { className: 'interaction-beam-panel' },
          h('h4', { className: 'beam-title' }, 'Mạch Khí Tương Tác Địa Chi (Xung · Hợp · Hình · Hại)'),
          (chart.interactions || []).length > 0
            ? h(
                'div',
                { className: 'interaction-chips-row' },
                chart.interactions.map((int, iIdx) =>
                  h(
                    'button',
                    {
                      key: iIdx,
                      type: 'button',
                      className: `interaction-chip ${int.nature === 'conflict' ? 'chip-conflict' : 'chip-harmony'} ${hoveredInteraction === int ? 'is-hovered' : ''}`,
                      onMouseEnter: () => setHoveredInteraction(int),
                      onMouseLeave: () => setHoveredInteraction(null),
                    },
                    h('span', { className: 'chip-type' }, int.type),
                    h('strong', null, int.name || int.badge),
                    h('small', null, `(${int.pillarText || (int.pillarLabels ? 'Trụ ' + int.pillarLabels.join(' – Trụ ') : int.pillars.join(' – '))})`)
                  )
                )
              )
            : h('p', { className: 'no-conflict-msg' }, 'Bốn chi thuần hòa, không gặp xung phá trực diện.')
        )
      ),

      // ================= CỘT PHẢI: LỜI GIẢI ĐỜI THƯỜNG =================
      h(
        'div',
        { className: 'split-column split-column-guide' },
        h(
          'div',
          { className: 'column-header-bar' },
          h('span', { className: 'col-tag beginner-tag' }, 'DÀNH CHO NGƯỜI ĐỌC · CÁCH ĐỌC TỪNG TRỤ'),
          h('span', { className: 'col-hint' }, `Đang soi: Trụ ${curPillar.label}`)
        ),

        // Hàng nút chọn nhanh Trụ cho người đọc
        h(
          'div',
          { className: 'quick-switch-tabs' },
          pillars.map((p, idx) =>
            h(
              'button',
              {
                key: idx,
                type: 'button',
                className: `switch-tab-btn ${selectedPillarIdx === idx ? 'is-active' : ''}`,
                onClick: () => handleSelect(idx),
              },
              `Trụ ${p.label}: ${p.name || ''}${p.isDayMaster ? ' ★' : ''}`
            )
          )
        ),

        // Thẻ Giải Thích Trụ Đang Chọn
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
              h('span', null, beginnerPillarInfo.theme)
            ),
            h('span', { className: 'guide-period-pill' }, beginnerPillarInfo.period)
          ),
          h('h3', { className: 'guide-headline' }, `Cách đọc Trụ ${curPillar.label} (${curPillar.name || 'chưa xác định'})`),
          h('p', { className: 'guide-meaning-body' }, beginnerPillarInfo.meaning),
          h(
            'div',
            { className: 'guide-prompt-quote' },
            h(InfoIcon, { React, size: 15, color: 'var(--gold)' }),
            h('span', null, beginnerPillarInfo.question)
          ),

          // Lưới 4 Chiều Đời Thường (Sự nghiệp, Tình cảm, Thế mạnh, Điểm mù - Không dùng emoji)
          beginnerPillarInfo.domains &&
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
                  'Sự Nghiệp & Tiền Tài'
                ),
                h('p', { className: 'domain-card-desc' }, beginnerPillarInfo.domains.career)
              ),
              h(
                'div',
                { className: 'domain-card' },
                h(
                  'div',
                  { className: 'domain-card-head' },
                  h('span', { style: { fontFamily: 'var(--font-han-brush)', color: 'var(--cinnabar-glow)', marginRight: '4px', fontSize: '13px' } }, '姻緣'),
                  'Tình Cảm & Gia Đạo'
                ),
                h('p', { className: 'domain-card-desc' }, beginnerPillarInfo.domains.relationships)
              ),
              h(
                'div',
                { className: 'domain-card' },
                h(
                  'div',
                  { className: 'domain-card-head' },
                  h('span', { style: { fontFamily: 'var(--font-han-brush)', color: 'var(--cinnabar-glow)', marginRight: '4px', fontSize: '13px' } }, '天賦'),
                  'Thế Mạnh Tự Nhiên'
                ),
                h('p', { className: 'domain-card-desc' }, beginnerPillarInfo.domains.strength)
              ),
              h(
                'div',
                { className: 'domain-card' },
                h(
                  'div',
                  { className: 'domain-card-head' },
                  h('span', { style: { fontFamily: 'var(--font-han-brush)', color: 'var(--cinnabar-glow)', marginRight: '4px', fontSize: '13px' } }, '慎行'),
                  'Điểm Mù Cần Thận Trọng'
                ),
                h('p', { className: 'domain-card-desc' }, beginnerPillarInfo.domains.blindspot)
              ),
              beginnerPillarInfo.domains.dailyTip &&
                h(
                  'div',
                  { className: 'pillar-daily-tip' },
                  h(CheckCircleIcon, { React, size: 14, color: 'var(--copper-gold)' }),
                  h('span', null, beginnerPillarInfo.domains.dailyTip)
                )
            )
        ),

        // Giải mã Can Chi & Nạp Âm của Trụ đang chọn
        h(
          'div',
          { className: 'guide-card-secondary' },
          h('h4', { className: 'card-sec-title' }, `Chất Liệu Năng Lượng Cụ Thể (Trụ ${curPillar.label} · ${curPillar.name})`),
          h(
            'div',
            { className: 'guide-traits-grid' },
            h(
              'div',
              { className: 'trait-box' },
              h('span', { className: 'trait-label' }, 'Thiên Can'),
              h('strong', { style: { color: curPillar.stem ? stemTheme.color : '#8c7d74' } }, curPillar.stem ? `${curPillar.stem} (${stemTheme.han})` : 'Chưa xác định (Khuyết giờ)'),
              h('p', null, curPillar.stem ? (curPillar.isDayMaster ? 'Can này là Nhật chủ, điểm tham chiếu để tính các quan hệ còn lại.' : `Quan hệ với Nhật chủ: ${curPillar.stemRelation || 'chưa xác định'}.`) : 'Cần có dữ liệu giờ sinh để tính phần này; hệ thống không tự điền thay thế.')
            ),
            h(
              'div',
              { className: 'trait-box' },
              h('span', { className: 'trait-label' }, 'Địa Chi'),
              h('strong', { style: { color: curPillar.branch ? branchTheme.color : '#8c7d74' } }, curPillar.branch ? `${curPillar.branch} (${curPillar.animal})` : 'Chưa xác định'),
              h('p', null, curPillar.branch ? 'Chi này được dùng để tra tàng can, tương tác Địa Chi và Vòng Trường Sinh.' : 'Chưa đủ dữ liệu để xác định Địa Chi của trụ này.')
            ),
            h(
              'div',
              { className: 'trait-box' },
              h('span', { className: 'trait-label' }, 'Nạp Âm Bản Mệnh'),
              h('strong', null, curPillar.naYin),
              h('p', null, 'Tên phân loại truyền thống của cặp Can Chi; không phải mô tả khoa học về khí chất.')
            ),
            h(
              'div',
              { className: 'trait-box' },
              h('span', { className: 'trait-label' }, 'Vòng Sinh Khí (Trường Sinh)'),
              h('strong', null, curPillar.lifeStage?.name || '—'),
              h('p', null, curPillar.lifeStage ? 'Tên giai đoạn trong vòng 12 Trường Sinh, được tra từ Nhật chủ và Địa Chi.' : 'Chưa đủ dữ liệu để tra vòng Trường Sinh.')
            )
          )
        ),

        // Lời khuyên ứng xử cho người mới
        h(
          'div',
          { className: 'guide-card-action' },
          h(CheckCircleIcon, { React, size: 16, color: 'var(--gold)' }),
          h(
            'div',
            { className: 'guide-action-text' },
            h('strong', null, 'Điều cần nhớ khi đọc:'),
            h('p', null, 'Mỗi ô cho biết dữ kiện hoặc tên quan hệ được tính. Hãy mở cơ sở và giới hạn nếu cần kiểm tra quy ước; không biến một ô thành kết luận về toàn bộ cuộc đời.')
          )
        )
      )
    )
  );
}
