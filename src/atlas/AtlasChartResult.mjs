// src/atlas/AtlasChartResult.mjs
// Bộ Điều Phối Đại Bản Đồ Bát Tự 5 Maps (Map-First Occult Divination Architecture)

import { enrichBaziChart } from './bazi-engine-ext.mjs';
import { BaziMatrixMap } from './BaziMatrixMap.mjs';
import { CelestialWheel } from './CelestialWheel.mjs';
import { FiveElementsRadar } from './FiveElementsRadar.mjs';
import { TenGodsProfileMap } from './TenGodsProfileMap.mjs';
import { LuckTimeline } from './LuckTimeline.mjs';

export function AtlasChartResult({
  React,
  chart,
  signedIn,
  onSaved,
  onExit,
  SummaryEditor,
  summarySchema,
  baseNotes = [],
}) {
  const h = React.createElement;
  const enriched = React.useMemo(() => enrichBaziChart(chart), [chart]);

  const [activePillar, setActivePillar] = React.useState(2);
  const [editingNote, setEditingNote] = React.useState(false);
  const [draftNote, setDraftNote] = React.useState(undefined);
  const [selectedNoteIds, setSelectedNoteIds] = React.useState([]);
  const [quickReflection, setQuickReflection] = React.useState('');

  const currentCycle = (enriched.timeline?.cycles || []).find(c => c.isCurrent) || enriched.timeline?.cycles?.[2];

  // Lời phán tổng kết mệnh cục (1 tiêu đề + 1 đoạn văn cô đọng theo đúng quy ước)
  const conclusionParagraph = React.useMemo(() => {
    const dm = `${enriched.dayStem} (${enriched.dayElement} — ${enriched.dayMasterMeta?.title || ''})`;
    const ys = enriched.yongShen?.yongShen?.element || 'Thủy';
    const xs = enriched.yongShen?.xiShen?.element || 'Kim';
    const strength = enriched.yongShen?.strengthLabel || 'Trung Hòa';
    const cycText = currentCycle
      ? `Hiện tại mệnh chủ đang hành vận ${currentCycle.name} (${currentCycle.startYear}–${currentCycle.endYear}, chủ tinh ${currentCycle.tenGod}, vòng ${currentCycle.stage?.name}), thời thế khuyên nên ${currentCycle.guidance?.action?.toLowerCase() || 'giữ tâm chính định'}`
      : 'Vận trình khuyên lấy sự tĩnh tại làm gốc';
    return `Mệnh cục lấy Nhật chủ ${dm} làm tâm điểm, thế cục thuộc diện ${strength}; chân mệnh lấy hành ${ys} làm Dụng Thần cứu cánh và hành ${xs} làm Hỷ Thần tương trợ. ${cycText}, kết hợp thuận theo dòng khí tương sinh của bản mệnh để chuyển hóa thử thách thành cơ duyên bền vững.`;
  }, [enriched, currentCycle]);

  // Xuất file TXT đầy đủ 5 bản đồ + lời kết
  function handleDownloadTxt() {
    const pillarLines = enriched.pillars
      .map(
        p =>
          `• Trụ ${p.label} (${p.palaceTitle}): ${p.name} (${p.stemHan}${p.branchHan})\n` +
          `  - Thiên can: ${p.stem || '—'} (${p.stemElement}) · Thập thần: ${p.stemRelation}\n` +
          `  - Địa chi: ${p.branch || '—'} (${p.branchElement}) · Linh thú: ${p.animal}\n` +
          `  - Tàng can: ${p.hiddenStems?.join(', ') || 'Chưa xác định'} (${p.hiddenRelations?.join(', ') || ''})\n` +
          `  - Nạp âm: ${p.naYin} · Vòng Trường Sinh: ${p.lifeStage?.name || '—'} (${p.lifeStage?.score || 0}%)\n` +
          `  - Không vong: ${p.kongWang?.join(', ') || '—'}`
      )
      .join('\n\n');

    const starLines = (enriched.shenSha || [])
      .map(s => `• ${s.name} (${s.han}): ${s.present ? 'Nhập mệnh' : `Chiếu cung ${s.primaryBranch}`} — ${s.desc}`)
      .join('\n');

    const cycleLines = (enriched.timeline?.cycles || [])
      .map(
        c =>
          `• Đại vận ${c.index} (${c.startYear}–${c.endYear}): ${c.name} (${c.tenGod} · ${c.stage?.name})${c.isCurrent ? ' [ĐƯƠNG VẬN]' : ''}\n` +
          `  - Quan sát: ${c.guidance?.observe}\n` +
          `  - Thận trọng: ${c.guidance?.caution}\n` +
          `  - Hành động: ${c.guidance?.action}`
      )
      .join('\n');

    const txtContent = [
      '====================================================================',
      '        MỆNH QUÁN — ĐẠI BẢN ĐỒ BÁT TỰ CHIÊM NGHIỆM (5 MAPS)',
      '====================================================================',
      '',
      '[01] BÀN THỜ TỨ TRỤ 7 TẦNG',
      pillarLines,
      '',
      '[02] LA KINH THIÊN BÀN & CỬU DIỆU THẦN SÁT',
      starLines,
      '',
      '[03] TRẬN ĐỒ NGŨ HÀNH & PHÁP QUYẾT DỤNG THẦN',
      `• Trạng thái Nhật Chủ: ${enriched.yongShen?.strengthLabel}`,
      `• Dụng Thần: Hành ${enriched.yongShen?.yongShen?.element} — ${enriched.yongShen?.yongShen?.reason}`,
      `• Hỷ Thần: Hành ${enriched.yongShen?.xiShen?.element} — ${enriched.yongShen?.xiShen?.reason}`,
      `• Kỵ Thần: Hành ${enriched.yongShen?.jiShen?.element} — ${enriched.yongShen?.jiShen?.reason}`,
      '',
      '[04] VẬN TRÌNH 8 ĐẠI VẬN & HƯỚNG DẪN HÀNH SỰ',
      cycleLines,
      '',
      '[05] LỜI PHÁN TỔNG KẾT MỆNH CỤC',
      conclusionParagraph,
      '',
      '[06] CƠ SỞ LỊCH PHÁP & GIỚI HẠN',
      ...(enriched.limits || []),
    ].join('\n');

    const url = URL.createObjectURL(new Blob([txtContent], { type: 'text/plain;charset=utf-8' }));
    const a = document.createElement('a');
    a.href = url;
    a.download = 'menh-quan-dai-ban-do-bat-tu.txt';
    a.click();
    URL.revokeObjectURL(url);
  }

  function handleOpenEditorWithNote(customText) {
    if (customText) setQuickReflection(customText);
    setEditingNote(true);
  }

  if (editingNote && SummaryEditor && summarySchema) {
    const reflectionText =
      quickReflection ||
      baseNotes
        .filter(n => selectedNoteIds.includes(n.id))
        .map(n => `${n.title}: ${n.text}`)
        .join('\n\n') ||
      conclusionParagraph;

    return h(SummaryEditor, {
      signedIn,
      onSaved,
      onDraftChange: setDraftNote,
      exitLabel: 'Trở lại Đại Bản Đồ Bát Tự',
      onExit: () => setEditingNote(false),
      initial:
        draftNote ||
        summarySchema.parse({
          kind: 'bazi_note',
          topic: 'self',
          title: `Chiêm nghiệm Bát Tự · Nhật chủ ${enriched.dayStem} ${enriched.dayElement}`,
          reflection: reflectionText,
          takeaway: '',
          actionId: 'notice',
          action: '',
          days: 7,
          status: 'not_tried',
          usefulness: 'unrated',
          note: '',
        }),
    });
  }

  const jumpLinks = [
    { href: '#map-bazi-matrix', label: '01 · Ma Trận 7 Tầng' },
    { href: '#map-celestial-wheel', label: '02 · La Kinh Thiên Bàn' },
    { href: '#map-five-elements-radar', label: '03 · Trận Đồ Ngũ Hành' },
    { href: '#map-ten-gods-profile', label: '04 · Thập Thần & Dụng Thần' },
    { href: '#map-luck-timeline', label: '05 · Sóng Đại Vận & Lưu Niên' },
    { href: '#map-conclusion-decree', label: '06 · Lời Phán Tổng Kết' },
  ];

  return h(
    'div',
    { className: 'chart-result atlas-master-container' },
    // Thanh điều hướng nhanh 5 Đại Bản Đồ (Sticky Navigation)
    h(
      'nav',
      { className: 'atlas-sticky-jumpbar', 'aria-label': 'Điều hướng nhanh 5 Đại Bản Đồ' },
      jumpLinks.map(link =>
        h(
          'a',
          {
            key: link.href,
            href: link.href,
            className: 'atlas-jump-pill',
          },
          link.label
        )
      )
    ),

    // BẢN ĐỒ 1: MA TRẬN BÁT TỰ 7 TẦNG
    h(BaziMatrixMap, {
      React,
      chart: enriched,
      activePillar,
      onSelectPillar: setActivePillar,
    }),

    // BẢN ĐỒ 2 & 3: LA KINH THIÊN BÀN & TRẬN ĐỒ NGŨ HÀNH (Song hành trên màn hình lớn >= 1100px)
    h(
      'div',
      { className: 'atlas-dual-map-grid' },
      h(CelestialWheel, { React, chart: enriched }),
      h(FiveElementsRadar, { React, chart: enriched })
    ),

    // BẢN ĐỒ 4: HỒ SƠ THẬP THẦN & PHÁP QUYẾT DỤNG THẦN
    h(TenGodsProfileMap, { React, chart: enriched }),

    // BẢN ĐỒ 5: SÓNG SINH KHÍ ĐẠI VẬN & BẢNG LƯU NIÊN 10 NĂM
    h(LuckTimeline, {
      React,
      chart: enriched,
      onQuickNote: handleOpenEditorWithNote,
    }),

    // PHẦN 6: LỜI PHÁN TỔNG KẾT MỆNH CỤC & HÀNH ĐỘNG
    h(
      'section',
      {
        id: 'map-conclusion-decree',
        className: 'atlas-card atlas-conclusion-card',
        'aria-label': 'Lời phán tổng kết mệnh cục',
      },
      h('span', { className: 'atlas-map-kicker' }, 'ẤN CHỨNG MỆNH BÀN · TỔNG KẾT CHIÊM NGHIỆM'),
      h('h2', { className: 'atlas-card-title' }, 'Lời Phán Tổng Kết Mệnh Cục'),
      h('p', { className: 'conclusion-single-paragraph' }, conclusionParagraph),

      // Căn cứ lịch pháp & giới hạn (Thu gọn tinh tế)
      h(
        'details',
        { className: 'atlas-basis-details' },
        h('summary', null, '📜 Xem Cơ Sở Lịch Pháp, Múi Giờ IANA & Giới Hạn Luận Giải'),
        h(
          'div',
          { className: 'basis-details-body' },
          h(
            'p',
            null,
            `Dữ liệu múi giờ: IANA ${enriched.timezoneVersion || '2026a'} · Quy ước: ${enriched.convention || 'civil-midnight-sect2'} · Nguồn: ${enriched.sourceId || 'CAL-01'}.`
          ),
          h(
            'ul',
            null,
            (enriched.limits || []).map((lim, i) => h('li', { key: i }, lim))
          )
        )
      ),

      // Thanh nút hành động cuối bản đồ
      h(
        'div',
        { className: 'atlas-action-bar' },
        h(
          'button',
          {
            type: 'button',
            className: 'atlas-btn-primary',
            onClick: () => handleOpenEditorWithNote(''),
          },
          '✍️ Ghi Chú Vào Sổ Chiêm Nghiệm'
        ),
        h(
          'button',
          {
            type: 'button',
            className: 'atlas-btn-secondary',
            onClick: handleDownloadTxt,
          },
          '⬇ Tải Trọn Bộ Đại Bản Đồ (.TXT)'
        ),
        onExit &&
          h(
            'button',
            {
              type: 'button',
              className: 'atlas-btn-ghost',
              onClick: onExit,
            },
            '↺ Khởi Lập Lá Số Khác'
          )
      )
    )
  );
}
