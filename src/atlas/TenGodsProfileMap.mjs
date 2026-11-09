// src/atlas/TenGodsProfileMap.mjs
// Bản Đồ 4: Tinh Đồ Thập Thần & Pháp Quyết Định Dụng Thần / Hỷ Thần / Kỵ Thần

import { ELEMENT_THEME } from './bazi-engine-ext.mjs';

export function TenGodsProfileMap({ React, chart }) {
  const h = React.createElement;
  const tenGodList = chart.tenGodList || [];
  const defaultGod = tenGodList.find(g => g.count > 0) || tenGodList[0];
  const [selectedGodName, setSelectedGodName] = React.useState(defaultGod?.name || 'Tỷ kiên');

  const activeGod = tenGodList.find(g => g.name === selectedGodName) || defaultGod;
  const ys = chart.yongShen || {};
  const maxCount = Math.max(...tenGodList.map(g => g.count), 2);

  function renderDecreeCard(item, badgeClass, iconSymbol) {
    if (!item) return null;
    const theme = ELEMENT_THEME[item.element] || ELEMENT_THEME['Thủy'];
    return h(
      'article',
      {
        className: `yongshen-decree-card ${badgeClass}`,
        style: { '--decree-color': theme.color, '--decree-glow': theme.glow },
      },
      h(
        'div',
        { className: 'decree-card-top' },
        h('span', { className: 'decree-han-orb' }, theme.han),
        h(
          'div',
          null,
          h('small', { className: 'decree-role-kicker' }, `${iconSymbol} ${item.role}`),
          h('h3', { className: 'decree-element-name' }, `Hành ${item.element} (${theme.guardian})`)
        )
      ),
      h('p', { className: 'decree-reason-text' }, item.reason)
    );
  }

  return h(
    'section',
    {
      id: 'map-ten-gods-profile',
      className: 'atlas-card atlas-tengods-section',
      'aria-label': 'Bản đồ 4: Hồ Sơ Thập Thần & Pháp Quyết Dụng Thần',
    },
    h(
      'div',
      { className: 'atlas-card-header' },
      h(
        'div',
        { className: 'atlas-card-title-group' },
        h('span', { className: 'atlas-map-kicker' }, 'ĐẠI BẢN ĐỒ 04 · THẬP THẦN & CHÂN MỆNH DỤNG THẦN (十神心性)'),
        h('h2', { className: 'atlas-card-title' }, 'Pháp Quyết Dụng Thần & Bản Đồ Thập Thần'),
        h(
          'p',
          { className: 'atlas-card-subtitle' },
          'Cân đong khí lực Nhật Chủ giữa Nguyệt Lệnh và Tứ Trụ để định ra Dụng Thần (cứu cánh), Hỷ Thần (phù trợ) và giải mã 10 mối tương quan Thập Thần.'
        )
      ),
      h(
        'div',
        { className: 'strength-meter-pill' },
        h('small', null, 'CƯỜNG NHƯỢC BẢN MỆNH'),
        h('strong', null, ys.strengthLabel || 'Trung Hòa'),
        h('span', null, `Nội lực Nhật Chủ: ${ys.selfScore ?? 50}%`)
      )
    ),

    // 3 Lệnh Bài Dụng Thần / Hỷ Thần / Kỵ Thần
    h(
      'div',
      { className: 'yongshen-trinity-grid' },
      renderDecreeCard(ys.yongShen, 'decree-yong', '★ CHÂN MỆNH'),
      renderDecreeCard(ys.xiShen, 'decree-xi', '✦ PHÙ TRỢ'),
      renderDecreeCard(ys.jiShen, 'decree-ji', '⚠ TIẾT CHẾ')
    ),

    // Lưới 10 Thập Thần tương tác
    h(
      'div',
      { className: 'tengods-interactive-grid' },
      tenGodList.map(god => {
        const isSel = activeGod && activeGod.name === god.name;
        const isPresent = god.count > 0;
        const pct = Math.min(100, Math.round((god.count / maxCount) * 100));

        return h(
          'button',
          {
            key: god.name,
            type: 'button',
            onClick: () => setSelectedGodName(god.name),
            className: `tengod-profile-card ${isSel ? 'is-selected' : ''} ${isPresent ? 'is-present' : 'is-absent'}`,
          },
          h(
            'div',
            { className: 'tg-card-top' },
            h('strong', { className: 'tg-name' }, god.name),
            h(
              'span',
              { className: `tg-presence-badge ${isPresent ? 'present' : 'absent'}` },
              isPresent ? `${god.count.toFixed(1)} khí vị` : 'Ẩn tàng'
            )
          ),
          h('small', { className: 'tg-group-name' }, god.group),
          h(
            'div',
            { className: 'tg-mini-bar' },
            h('div', { className: 'tg-mini-fill', style: { width: `${isPresent ? Math.max(18, pct) : 4}%` } })
          )
        );
      })
    ),

    // Hộp Luận Giải Chi Tiết Thập Thần Đang Chọn
    activeGod &&
      h(
        'div',
        { className: 'tengod-detail-oracle' },
        h(
          'div',
          { className: 'tg-oracle-head' },
          h('h3', null, `📜 Luận Giải Thập Thần: ${activeGod.name} — ${activeGod.group}`),
          h(
            'span',
            { className: 'tg-location-tag' },
            activeGod.locations?.length > 0
              ? `Vị trí hiển lộ: ${activeGod.locations.join(' · ')}`
              : 'Chưa lộ trực tiếp trên Tứ Trụ (Sẽ ứng kỳ khi gặp Đại Vận / Lưu Niên)'
          )
        ),
        h('p', { className: 'tg-oracle-desc' }, activeGod.desc)
      )
  );
}
