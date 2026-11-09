// src/atlas/BaziMatrixMap.mjs
// Bản Đồ 1: Đại Bàn Ma Trận Tứ Trụ Bát Tự 7 Tầng & Mạng Lưới Từ Trường Tương Tác

import { ELEMENT_THEME } from './bazi-engine-ext.mjs';

export function BaziMatrixMap({ React, chart, activePillar, onSelectPillar }) {
  const h = React.createElement;
  const [hoveredInteraction, setHoveredInteraction] = React.useState(null);
  const [PinnedInteraction, setPinnedInteraction] = React.useState(null);

  const activeInteraction = hoveredInteraction || PinnedInteraction || chart.interactions?.[0] || null;
  const highlightedCols = activeInteraction ? activeInteraction.pillars : [];

  const pillars = chart.pillars || [];
  const selectedPillarObj = pillars[activePillar ?? 2] || pillars[2] || pillars[0];

  function renderElementBadge(el) {
    const theme = ELEMENT_THEME[el] || ELEMENT_THEME['Thủy'];
    return h(
      'span',
      {
        className: 'atlas-el-badge',
        style: {
          '--el-color': theme.color,
          '--el-glow': theme.glow,
        },
      },
      `${theme.han} ${el}`
    );
  }

  return h(
    'section',
    {
      id: 'map-bazi-matrix',
      className: 'atlas-card atlas-matrix-section',
      'aria-label': 'Bản đồ 1: Ma trận Bát Tự 7 tầng',
    },
    // Header
    h(
      'div',
      { className: 'atlas-card-header' },
      h(
        'div',
        { className: 'atlas-card-title-group' },
        h('span', { className: 'atlas-map-kicker' }, 'ĐẠI BẢN ĐỒ 01 · TỨ TRỤ NGUYÊN CỤC (四柱八字)'),
        h('h2', { className: 'atlas-card-title' }, 'Bàn Thờ Mệnh Lý & Ma Trận Tứ Trụ 7 Tầng'),
        h(
          'p',
          { className: 'atlas-card-subtitle' },
          'Bốn trụ Năm · Tháng · Ngày · Giờ khắc họa thiên thời, địa lợi và nguyên thần bản mệnh. Rê chuột vào các quẻ Hình – Xung – Hợp phía dưới để kích hoạt tia từ trường giữa các trụ.'
        )
      ),
      h(
        'div',
        { className: 'atlas-daymaster-seal day-master-aura' },
        h('span', { className: 'seal-han' }, chart.dayMasterMeta?.han || '命'),
        h(
          'div',
          { className: 'seal-meta' },
          h('small', null, 'BẢN MỆNH NHẬT CHỦ'),
          h('strong', null, `${chart.dayStem} (${chart.dayElement})`),
          h('span', null, chart.dayMasterMeta?.title || '')
        )
      )
    ),

    // 7-Layer Matrix Table Wrapper (horizontally scrollable on mobile with sticky row header)
    h(
      'div',
      { className: 'atlas-matrix-scroll-wrap' },
      h(
        'table',
        { className: 'atlas-matrix-table' },
        h(
          'thead',
          null,
          h(
            'tr',
            null,
            h('th', { className: 'matrix-row-label-col' }, 'TẦNG KHÍ / CUNG VỊ'),
            pillars.map((p, idx) => {
              const isFocus = highlightedCols.includes(idx);
              const isSelected = (activePillar ?? 2) === idx;
              return h(
                'th',
                {
                  key: p.label,
                  onClick: () => onSelectPillar && onSelectPillar(idx),
                  className: [
                    'matrix-pillar-head',
                    p.isDayMaster ? 'is-day-master day-master-aura' : '',
                    isFocus ? 'is-interacting-focus' : '',
                    isSelected ? 'is-selected-pillar' : '',
                  ]
                    .filter(Boolean)
                    .join(' '),
                },
                h(
                  'div',
                  { className: 'pillar-head-inner' },
                  h('span', { className: 'pillar-palace-sub' }, p.palaceTitle),
                  h('strong', { className: 'pillar-main-label' }, `TRỤ ${p.label.toUpperCase()}`),
                  p.isDayMaster
                    ? h('span', { className: 'pillar-dm-pill' }, '★ Nguyên Thần')
                    : isFocus
                      ? h('span', { className: 'pillar-beam-pill' }, '⚡ Cảm ứng từ trường')
                      : null
                )
              );
            })
          )
        ),
        h(
          'tbody',
          null,
          // Tầng 1: Chủ Tinh (Thập Thần Thiên Can)
          h(
            'tr',
            null,
            h(
              'th',
              { scope: 'row', className: 'matrix-row-label-col' },
              h('span', { className: 'row-han' }, '01 · 主星'),
              h('strong', null, 'Thập Thần Thiên Can')
            ),
            pillars.map((p, idx) =>
              h(
                'td',
                {
                  key: idx,
                  className: `${p.isDayMaster ? 'is-day-master-cell' : ''} ${highlightedCols.includes(idx) ? 'is-interacting-focus' : ''}`,
                },
                h(
                  'span',
                  { className: `tengod-chip ${p.isDayMaster ? 'tengod-dm' : ''}` },
                  p.isDayMaster ? 'Nhật Chủ (Ta)' : p.stemRelation || 'Chưa xác định'
                )
              )
            )
          ),

          // Tầng 2: Thiên Can
          h(
            'tr',
            { className: 'matrix-row-glyph' },
            h(
              'th',
              { scope: 'row', className: 'matrix-row-label-col' },
              h('span', { className: 'row-han' }, '02 · 天干'),
              h('strong', null, 'Thiên Can Hiển Lộ')
            ),
            pillars.map((p, idx) => {
              const theme = ELEMENT_THEME[p.stemElement] || ELEMENT_THEME['Thủy'];
              return h(
                'td',
                {
                  key: idx,
                  onClick: () => onSelectPillar && onSelectPillar(idx),
                  className: `matrix-glyph-cell ${p.isDayMaster ? 'is-day-master-cell day-master-aura' : ''} ${highlightedCols.includes(idx) ? 'is-interacting-focus' : ''}`,
                },
                h(
                  'div',
                  { className: 'glyph-box', style: { '--glyph-color': theme.color, '--glyph-glow': theme.glow } },
                  h('span', { className: 'glyph-han' }, p.stemHan || '—'),
                  h('strong', { className: 'glyph-viet' }, p.stem || 'Ẩn'),
                  renderElementBadge(p.stemElement)
                )
              );
            })
          ),

          // Tầng 3: Địa Chi
          h(
            'tr',
            { className: 'matrix-row-glyph' },
            h(
              'th',
              { scope: 'row', className: 'matrix-row-label-col' },
              h('span', { className: 'row-han' }, '03 · 地支'),
              h('strong', null, 'Địa Chi Mệnh Cung')
            ),
            pillars.map((p, idx) => {
              const theme = ELEMENT_THEME[p.branchElement] || ELEMENT_THEME['Thổ'];
              return h(
                'td',
                {
                  key: idx,
                  onClick: () => onSelectPillar && onSelectPillar(idx),
                  className: `matrix-glyph-cell ${p.isDayMaster ? 'is-day-master-cell' : ''} ${highlightedCols.includes(idx) ? 'is-interacting-focus' : ''}`,
                },
                h(
                  'div',
                  { className: 'glyph-box branch-glyph-box', style: { '--glyph-color': theme.color, '--glyph-glow': theme.glow } },
                  h('span', { className: 'glyph-han' }, p.branchHan || '—'),
                  h('strong', { className: 'glyph-viet' }, p.branch || 'Ẩn'),
                  renderElementBadge(p.branchElement),
                  h('small', { className: 'glyph-animal' }, p.animal)
                )
              );
            })
          ),

          // Tầng 4: Tàng Can & Thập Thần Ẩn
          h(
            'tr',
            null,
            h(
              'th',
              { scope: 'row', className: 'matrix-row-label-col' },
              h('span', { className: 'row-han' }, '04 · 藏干'),
              h('strong', null, 'Tàng Can Ẩn Khí')
            ),
            pillars.map((p, idx) =>
              h(
                'td',
                {
                  key: idx,
                  className: `${p.isDayMaster ? 'is-day-master-cell' : ''} ${highlightedCols.includes(idx) ? 'is-interacting-focus' : ''}`,
                },
                p.hiddenStems && p.hiddenStems.length > 0
                  ? h(
                      'div',
                      { className: 'hidden-stems-stack' },
                      p.hiddenStems.map((hs, hIdx) =>
                        h(
                          'div',
                          { key: hIdx, className: 'hidden-stem-item' },
                          h('span', { className: 'hs-role' }, hIdx === 0 ? 'Bản khí' : hIdx === 1 ? 'Trung khí' : 'Dư khí'),
                          h('strong', { className: 'hs-name' }, hs),
                          h('em', { className: 'hs-rel' }, p.hiddenRelations?.[hIdx] || '')
                        )
                      )
                    )
                  : h('span', { className: 'muted-cell' }, 'Chưa xác định')
              )
            )
          ),

          // Tầng 5: Nạp Âm Cổ Pháp
          h(
            'tr',
            null,
            h(
              'th',
              { scope: 'row', className: 'matrix-row-label-col' },
              h('span', { className: 'row-han' }, '05 · 納音'),
              h('strong', null, 'Lục Thập Nạp Âm')
            ),
            pillars.map((p, idx) =>
              h(
                'td',
                {
                  key: idx,
                  className: `${p.isDayMaster ? 'is-day-master-cell' : ''} ${highlightedCols.includes(idx) ? 'is-interacting-focus' : ''}`,
                },
                h('span', { className: 'nayin-label' }, p.naYin)
              )
            )
          ),

          // Tầng 6: Vòng Trường Sinh
          h(
            'tr',
            null,
            h(
              'th',
              { scope: 'row', className: 'matrix-row-label-col' },
              h('span', { className: 'row-han' }, '06 · 長生'),
              h('strong', null, 'Vòng Trường Sinh')
            ),
            pillars.map((p, idx) => {
              const st = p.lifeStage;
              return h(
                'td',
                {
                  key: idx,
                  className: `${p.isDayMaster ? 'is-day-master-cell' : ''} ${highlightedCols.includes(idx) ? 'is-interacting-focus' : ''}`,
                },
                st
                  ? h(
                      'div',
                      { className: 'lifestage-cell' },
                      h(
                        'div',
                        { className: 'lifestage-top' },
                        h('strong', null, `${st.name} (${st.han})`),
                        h('span', { className: 'lifestage-score' }, `${st.score}% Khí lực`)
                      ),
                      h(
                        'div',
                        { className: 'lifestage-bar' },
                        h('div', { className: 'lifestage-fill', style: { width: `${st.score}%` } })
                      )
                    )
                  : h('span', { className: 'muted-cell' }, '—')
              );
            })
          ),

          // Tầng 7: Tuần Không & Thần Sát
          h(
            'tr',
            null,
            h(
              'th',
              { scope: 'row', className: 'matrix-row-label-col' },
              h('span', { className: 'row-han' }, '07 · 神煞'),
              h('strong', null, 'Tuần Không & Thần Sát')
            ),
            pillars.map((p, idx) => {
              const pillarStars = (chart.shenSha || []).filter(s =>
                s.matchedPillars.some(mp => mp.index === idx)
              );
              return h(
                'td',
                {
                  key: idx,
                  className: `${p.isDayMaster ? 'is-day-master-cell' : ''} ${highlightedCols.includes(idx) ? 'is-interacting-focus' : ''}`,
                },
                h(
                  'div',
                  { className: 'shensha-cell-stack' },
                  p.kongWang?.length > 0 &&
                    h('span', { className: 'kongwang-tag' }, `Không Vong: ${p.kongWang.join(' · ')}`),
                  pillarStars.length > 0
                    ? pillarStars.map(st =>
                        h(
                          'span',
                          { key: st.id, className: `star-mini-pill star-${st.type}` },
                          `✦ ${st.name}`
                        )
                      )
                    : h('span', { className: 'star-mini-pill star-neutral' }, 'Tinh cung bình hòa')
                )
              );
            })
          )
        )
      )
    ),

    // Mạng Lưới Từ Trường Tương Tác (Interactive Branch Beam Focus)
    h(
      'div',
      { className: 'atlas-beam-panel' },
      h(
        'div',
        { className: 'beam-panel-head' },
        h('span', { className: 'beam-title' }, '⚡ MẠNG LƯỚI TỪ TRƯỜNG HÌNH · XUNG · HỘI · HỢP (Rê chuột hoặc chạm để chiếu tia cảm ứng)'),
        h('span', { className: 'beam-hint' }, 'Cột trụ liên kết sẽ rực sáng đồng bộ trên bàn thờ Tứ Trụ')
      ),
      h(
        'div',
        { className: 'beam-tags-row' },
        (chart.interactions || []).map(inter => {
          const isAct = activeInteraction && activeInteraction.id === inter.id;
          return h(
            'button',
            {
              key: inter.id,
              type: 'button',
              onMouseEnter: () => setHoveredInteraction(inter),
              onMouseLeave: () => setHoveredInteraction(null),
              onClick: () => setPinnedInteraction(inter),
              className: `beam-interaction-btn beam-type-${inter.type} ${isAct ? 'is-active' : ''}`,
            },
            h('span', { className: 'beam-badge' }, inter.badge),
            h('strong', null, inter.pillarNames.join(' ⟷ '))
          );
        })
      ),
      activeInteraction &&
        h(
          'div',
          { className: 'beam-oracle-box' },
          h('strong', null, `✦ Điềm báo Mạch Khí [${activeInteraction.pillarNames.join(' ⟷ ')}]: `),
          h('span', null, activeInteraction.description)
        )
    ),

    // Luận giải chi tiết Trụ đang chọn
    selectedPillarObj &&
      h(
        'div',
        { className: 'atlas-pillar-oracle' },
        h(
          'div',
          { className: 'pillar-oracle-header' },
          h('span', { className: 'oracle-seal' }, selectedPillarObj.stemHan + selectedPillarObj.branchHan),
          h(
            'div',
            null,
            h('h3', null, `Giải Mật Trụ ${selectedPillarObj.label}: ${selectedPillarObj.name} — Cung ${selectedPillarObj.palaceTitle}`),
            h('p', null, `Nạp âm: ${selectedPillarObj.naYin} · Linh thú: ${selectedPillarObj.animal} · Trường sinh: ${selectedPillarObj.lifeStage?.name || '—'}`)
          )
        ),
        h(
          'p',
          { className: 'pillar-oracle-body' },
          selectedPillarObj.lifeStage?.omen || 'Khí mạch lưu chuyển tự nhiên, giữ tâm chính định ắt gặp cát tường.'
        )
      )
  );
}
