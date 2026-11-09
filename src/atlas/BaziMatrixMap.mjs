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
import { ELEMENT_THEME, PILLAR_ROLES_BEGINNER } from './bazi-engine-ext.mjs';

export function BaziMatrixMap({ React, chart, activePillar, onSelectPillar }) {
  const h = React.createElement;
  const [selectedPillarIdx, setSelectedPillarIdx] = React.useState(activePillar ?? 2);
  const [hoveredInteraction, setHoveredInteraction] = React.useState(null);

  const pillars = chart.pillars || [];
  const curPillar = pillars[selectedPillarIdx] || pillars[2] || pillars[0] || {
    label: 'Ngày',
    name: 'Bản Mệnh',
    stem: 'Nhâm',
    branch: 'Tý',
    stemHan: '壬',
    branchHan: '子',
    stemElement: 'Thủy',
    branchElement: 'Thủy',
  };
  const activeInteraction = hoveredInteraction || chart.interactions?.[0] || null;
  const highlightedCols = activeInteraction ? activeInteraction.pillars : [];

  const beginnerPillarInfo = PILLAR_ROLES_BEGINNER[selectedPillarIdx] || PILLAR_ROLES_BEGINNER[2] || {
    label: 'Trụ Ngày',
    theme: 'Bản Thể & Hôn Nhân',
    period: 'Tuổi 33 – 48 (Trung Niên)',
    meaning: 'Căn nguyên sinh mệnh, ý thức tự chủ và thế giới nội tâm sâu kín nhất.',
    realLifeImpact: 'Quyết định cách bạn tương tác với bạn đời, tri kỷ và nội lực vượt qua biến cố.',
    watchOut: 'Dành không gian riêng cho bản thân, học cách cân bằng giữa việc yêu thương người khác và trân trọng giá trị chính mình.',
  };
  const stemTheme = ELEMENT_THEME[curPillar?.stemElement] || ELEMENT_THEME['Thủy'];
  const branchTheme = ELEMENT_THEME[curPillar?.branchElement] || ELEMENT_THEME['Thủy'];

  function handleSelect(idx) {
    setSelectedPillarIdx(idx);
    if (onSelectPillar) onSelectPillar(idx);
  }

  function renderElementBadge(el) {
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
        'Bốn trụ Năm · Tháng · Ngày · Giờ là 4 cột trụ chống trời của sinh mệnh. Bấm vào từng trụ ở bản đồ bên trái để xem lời giải đời thường chi tiết ở cột bên phải.'
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
                      className: `pillar-col-header ${selectedPillarIdx === idx ? 'is-selected-col' : ''} ${highlightedCols.includes(p.label) ? 'is-beaming-col' : ''}`,
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
                  const pStemTheme = ELEMENT_THEME[p.stemElement] || stemTheme;
                  return h(
                    'td',
                    {
                      key: idx,
                      className: `cell-stem ${selectedPillarIdx === idx ? 'cell-active' : ''}`,
                      onClick: () => handleSelect(idx),
                    },
                    h('div', { className: 'han-brush-char', style: { color: pStemTheme.color } }, p.stemHan),
                    h('div', { className: 'viet-name-sub' }, p.stem),
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
                  const pBrTheme = ELEMENT_THEME[p.branchElement] || branchTheme;
                  return h(
                    'td',
                    {
                      key: idx,
                      className: `cell-branch ${selectedPillarIdx === idx ? 'cell-active' : ''}`,
                      onClick: () => handleSelect(idx),
                    },
                    h('div', { className: 'han-brush-char', style: { color: pBrTheme.color } }, p.branchHan),
                    h('div', { className: 'viet-name-sub' }, p.branch),
                    h('div', { className: 'animal-sub' }, p.animal)
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
                          p.hiddenStems.map((hs, hIdx) =>
                            h('span', { key: hIdx, className: 'hidden-stem-pill' }, hs)
                          )
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
                    h('strong', null, int.name),
                    h('small', null, `(${int.pillars.join(' – ')})`)
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
          h('span', { className: 'col-tag beginner-tag' }, 'DÀNH CHO NGƯỜI MỚI · LỜI GIẢI ĐỜI THƯỜNG'),
          h('span', { className: 'col-hint' }, `Đang soi: Trụ ${curPillar.label}`)
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
          h('h3', { className: 'guide-headline' }, `Ý nghĩa của Trụ ${curPillar.label} (${curPillar.name}) trong đời bạn`),
          h('p', { className: 'guide-meaning-body' }, beginnerPillarInfo.meaning),
          h(
            'div',
            { className: 'guide-prompt-quote' },
            h(InfoIcon, { React, size: 15, color: 'var(--gold)' }),
            h('span', null, beginnerPillarInfo.question)
          )
        ),

        // Giải mã Can Chi & Nạp Âm của Trụ đang chọn
        h(
          'div',
          { className: 'guide-card-secondary' },
          h('h4', { className: 'card-sec-title' }, `Chất Liệu Năng Lượng Trụ ${curPillar.label}`),
          h(
            'div',
            { className: 'guide-traits-grid' },
            h(
              'div',
              { className: 'trait-box' },
              h('span', { className: 'trait-label' }, 'Thiên Can'),
              h('strong', { style: { color: stemTheme.color } }, `${curPillar.stem} (${stemTheme.han})`),
              h('p', null, curPillar.isDayMaster ? 'Chính là bạn: trung tâm của toàn bộ lá số.' : `Thể hiện quan hệ ${curPillar.stemRelation || 'ngoại cảnh'} đối với bạn.`)
            ),
            h(
              'div',
              { className: 'trait-box' },
              h('span', { className: 'trait-label' }, 'Địa Chi'),
              h('strong', { style: { color: branchTheme.color } }, `${curPillar.branch} (${curPillar.animal})`),
              h('p', null, `Nền tảng thực tế, môi trường sống và sức bật ngầm.`)
            ),
            h(
              'div',
              { className: 'trait-box' },
              h('span', { className: 'trait-label' }, 'Nạp Âm Bản Mệnh'),
              h('strong', null, curPillar.naYin),
              h('p', null, 'Hình tượng khí chất ẩn tàng của cả can chi hợp lại.')
            ),
            h(
              'div',
              { className: 'trait-box' },
              h('span', { className: 'trait-label' }, 'Vòng Sinh Khí (Trường Sinh)'),
              h('strong', null, curPillar.lifeStage?.name || '—'),
              h('p', null, curPillar.lifeStage?.omen || 'Khí thế bình hòa.')
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
            h('strong', null, 'Lời khuyên chiêm nghiệm:'),
            h('p', null, curPillar.isDayMaster
              ? 'Trụ Ngày là chính bản thân bạn. Hãy sống đúng với tính cách nguyên bản, đừng cố gắng trở thành một ai khác.'
              : `Quan sát xem những sự kiện trong giai đoạn ${beginnerPillarInfo.period} có phản ánh đúng khí thế của ${curPillar.name} hay không.`)
          )
        )
      )
    )
  );
}
