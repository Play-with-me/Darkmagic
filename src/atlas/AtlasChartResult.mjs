/**
 * src/atlas/AtlasChartResult.mjs
 * BỘ ĐIỀU PHỐI ĐẠI MỆNH BÀN & 5 ĐỒ BẢN BÁT TỰ
 * Khung điều phối chuẩn mực cho trải nghiệm kết hợp:
 * - Đầu trang: Đại Mệnh Bàn Tổng Hợp (Grand Master Atlas)
 * - Tiếp theo: 5 Chương Bản Đồ Đôi (Trái: Chuyên sâu / Phải: Đời thường)
 * - Cuối cùng: Tổng Kết Mệnh Cục & Ghi Chép Sổ Chiêm Nghiệm
 */

import { enrichBaziChart } from './bazi-engine-ext.mjs';
import { GrandMasterMap } from './GrandMasterMap.mjs';
import { BaziMatrixMap } from './BaziMatrixMap.mjs';
import { CelestialWheel } from './CelestialWheel.mjs';
import { FiveElementsRadar } from './FiveElementsRadar.mjs';
import { TenGodsProfileMap } from './TenGodsProfileMap.mjs';
import { LuckTimeline } from './LuckTimeline.mjs';
import {
  ScrollTextIcon,
  BookOpenIcon,
  SparklesIcon,
  CheckCircleIcon,
  ArrowUpRightIcon,
} from './icons.mjs';

// Lớp hạt tàn hương vàng kim & đốm lửa chu sa trôi lơ lửng huyền ảo
function AmbientRitualField({ React }) {
  const h = React.createElement;
  const embers = [
    { x: '8%', duration: '14s', delay: '0s', size: 3, opacity: 0.65, color: '#e88b78' },
    { x: '20%', duration: '18s', delay: '3s', size: 2, opacity: 0.5, color: '#c4a365' },
    { x: '35%', duration: '16s', delay: '7s', size: 3.5, opacity: 0.7, color: '#bf4b45' },
    { x: '48%', duration: '20s', delay: '2s', size: 2, opacity: 0.45, color: '#d69a88' },
    { x: '62%', duration: '15s', delay: '5s', size: 3, opacity: 0.65, color: '#e88b78' },
    { x: '75%', duration: '19s', delay: '1s', size: 2.5, opacity: 0.5, color: '#c4a365' },
    { x: '88%', duration: '17s', delay: '8s', size: 3, opacity: 0.7, color: '#bf4b45' },
    { x: '94%', duration: '21s', delay: '4s', size: 2, opacity: 0.4, color: '#d69a88' },
  ];

  return h(
    'div',
    { className: 'ambient-ritual-layer', 'aria-hidden': 'true' },
    embers.map((e, idx) =>
      h('div', {
        key: idx,
        className: 'ambient-ember',
        style: {
          left: e.x,
          width: `${e.size}px`,
          height: `${e.size}px`,
          backgroundColor: e.color,
          boxShadow: `0 0 8px ${e.color}`,
          '--ember-duration': e.duration,
          '--ember-delay': e.delay,
          '--ember-opacity': e.opacity,
          '--ember-drift-x': idx % 2 === 0 ? '35px' : '-35px',
        },
      })
    )
  );
}

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

  const currentCycle =
    (enriched.timeline?.cycles || []).find((c) => c.isCurrent) || enriched.timeline?.cycles?.[2];

  // Lời phán tổng kết mệnh cục (cô đọng, ấm áp)
  const conclusionParagraph = React.useMemo(() => {
    const dm = `${enriched.dayStem} (${enriched.dayElement} — ${enriched.dayMasterMeta?.title || ''})`;
    const ys = enriched.yongShen?.yongShen?.element || 'Thủy';
    const xs = enriched.yongShen?.xiShen?.element || 'Kim';
    const strength = enriched.yongShen?.strengthLabel || 'Trung Hòa';
    const cycText = currentCycle
      ? `Hiện tại mệnh chủ đang bước vào giai đoạn ${currentCycle.name} (${currentCycle.startYear}–${currentCycle.endYear}, chủ khí ${currentCycle.tenGod}), thời cơ khuyên nên ${currentCycle.guidance?.action?.toLowerCase() || 'giữ tâm chính định'}`
      : 'Vận trình khuyên lấy sự tĩnh tại làm gốc';
    return `Mệnh cục lấy Nhật chủ ${dm} làm tâm điểm, chân khí thuộc diện ${strength}; lấy hành ${ys} làm Dụng Thần trợ lực và hành ${xs} làm Hỷ Thần đồng hành. ${cycText}. Khi hiểu rõ nhịp điệu tự nhiên của chính mình, bạn sẽ biết lúc nào nên bứt phá tiến thủ, lúc nào nên tĩnh lặng bồi dưỡng nguyên khí.`;
  }, [enriched, currentCycle]);

  // Xuất file TXT đầy đủ 5 bản đồ + Đại Mệnh Bàn
  function handleDownloadTxt() {
    const pillarLines = enriched.pillars
      .map(
        (p) =>
          `• Trụ ${p.label} (${p.palaceTitle}): ${p.name} (${p.stemHan}${p.branchHan})\n` +
          `  - Thiên can: ${p.stem || '—'} (${p.stemElement}) · Thập thần: ${p.stemRelation}\n` +
          `  - Địa chi: ${p.branch || '—'} (${p.branchElement}) · Linh thú: ${p.animal}\n` +
          `  - Tàng can: ${p.hiddenStems?.join(', ') || 'Chưa xác định'} (${p.hiddenRelations?.join(', ') || ''})\n` +
          `  - Nạp âm: ${p.naYin} · Vòng Trường Sinh: ${p.lifeStage?.name || '—'} (${p.lifeStage?.score || 0}%)\n` +
          `  - Không vong: ${p.kongWang?.join(', ') || '—'}`
      )
      .join('\n\n');

    const starLines = (enriched.shenSha || [])
      .map((s) => `• ${s.name} (${s.han}): ${s.present ? 'Nhập mệnh' : `Chiếu cung ${s.primaryBranch}`} — ${s.desc}`)
      .join('\n');

    const cycleLines = (enriched.timeline?.cycles || [])
      .map(
        (c) =>
          `• Đại vận ${c.index} (${c.startYear}–${c.endYear}): ${c.name} (${c.tenGod} · ${c.stage?.name})${c.isCurrent ? ' [ĐƯƠNG VẬN]' : ''}\n` +
          `  - Quan sát: ${c.guidance?.observe}\n` +
          `  - Thận trọng: ${c.guidance?.caution}\n` +
          `  - Hành động: ${c.guidance?.action}`
      )
      .join('\n');

    const txtContent = [
      '====================================================================',
      '      MỆNH QUÁN — ĐẠI BẢN ĐỒ BÁT TỰ CHIÊM NGHIỆM (5 MAPS ATLAS)',
      '====================================================================',
      '',
      `[BẢN MỆNH NHẬT CHỦ]: ${enriched.dayStem} (${enriched.dayElement}) — ${enriched.beginnerGuide?.archetype?.archetype || ''}`,
      `[Ý NGHĨA]: ${enriched.beginnerGuide?.archetype?.personality || ''}`,
      '',
      '[01] TỨ TRỤ NGUYÊN CỤC 7 TẦNG',
      pillarLines,
      '',
      '[02] LA KINH TINH BÀN 24 SƠN & THẦN SÁT',
      starLines,
      '',
      '[03] NGŨ HÀNH SINH KHẮC & NGUYÊN KHÍ',
      `• Thể trạng: ${enriched.yongShen?.isStrong ? 'Thân Vượng' : 'Thân Nhược'}`,
      `• Dụng thần cứu cánh: Hành ${enriched.yongShen?.yongShen?.element}`,
      `• Phân bố ngũ khí: Mộc: ${enriched.weightedCounts?.Mộc?.toFixed(1)} | Hỏa: ${enriched.weightedCounts?.Hỏa?.toFixed(1)} | Thổ: ${enriched.weightedCounts?.Thổ?.toFixed(1)} | Kim: ${enriched.weightedCounts?.Kim?.toFixed(1)} | Thủy: ${enriched.weightedCounts?.Thủy?.toFixed(1)}`,
      '',
      '[04] THẬP THẦN CÁCH CỤC',
      (enriched.tenGodList || [])
        .map((g) => `• ${g.name} (${g.group}): ${g.desc} [${g.count > 0 ? `Xuất hiện ${g.count.toFixed(1)} lần` : 'Khuyết'}]`)
        .join('\n'),
      '',
      '[05] ĐẠI VẬN 80 NĂM & LƯU NIÊN',
      cycleLines,
      '',
      '====================================================================',
      '[TỔNG KẾT MỆNH CỤC]:',
      conclusionParagraph,
      '====================================================================',
    ].join('\n');

    const blob = new Blob([txtContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `menh-quan-dai-ban-do-${enriched.dayStem}-${new Date().toISOString().slice(0, 10)}.txt`;
    link.click();
    URL.revokeObjectURL(url);
  }

  // Chế độ chỉnh sửa ghi chú trong Sổ
  if (editingNote && SummaryEditor && summarySchema) {
    const selectedTexts = baseNotes
      .filter((n) => selectedNoteIds.includes(n.id))
      .map((n) => `${n.title}: ${n.text}`)
      .join('\n\n');

    return h(SummaryEditor, {
      signedIn,
      onSaved,
      onDraftChange: setDraftNote,
      exitLabel: 'Quay lại Bản Đồ Bát Tự',
      onExit: () => setEditingNote(false),
      initial:
        draftNote ||
        summarySchema.parse({
          kind: 'bazi_note',
          topic: 'self',
          title: `Chiêm nghiệm Lá Số ${enriched.dayStem} ${enriched.dayElement}`,
          reflection: selectedTexts || conclusionParagraph,
          takeaway: enriched.beginnerGuide?.archetype?.tagline || '',
          actionId: 'notice',
          action: currentCycle?.guidance?.action || 'Lắng đọng tâm trí, điều hòa nguyên khí.',
          days: 7,
          status: 'not_tried',
          usefulness: 'unrated',
          note: '',
        }),
    });
  }

  return h(
    'div',
    { className: 'atlas-chart-result-container' },

    // Lớp hiệu ứng tàn hương & huyền khí lơ lửng toàn màn hình
    h(AmbientRitualField, { React }),

    // 1. ĐẠI MỆNH BÀN TỔNG HỢP Ở ĐẦU TRANG
    h(GrandMasterMap, {
      React,
      chart: enriched,
      onNavigateChapter: (targetId) => {
        const el = document.getElementById(targetId);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      },
    }),

    // 2. CHƯƠNG I: TỨ TRỤ HUYỀN BÀN (SPLIT-VIEW)
    h(BaziMatrixMap, {
      React,
      chart: enriched,
      activePillar,
      onSelectPillar: setActivePillar,
    }),

    // 3. CHƯƠNG II: LA KINH 24 SƠN & THẦN SÁT (SPLIT-VIEW)
    h(CelestialWheel, {
      React,
      chart: enriched,
    }),

    // 4. CHƯƠNG III: NGŨ HÀNH SINH KHẮC TRẬN (SPLIT-VIEW)
    h(FiveElementsRadar, {
      React,
      chart: enriched,
    }),

    // 5. CHƯƠNG IV: THẬP THẦN & DỤNG THẦN (SPLIT-VIEW)
    h(TenGodsProfileMap, {
      React,
      chart: enriched,
    }),

    // 6. CHƯƠNG V: ĐẠI VẬN 80 NĂM & LƯU NIÊN (SPLIT-VIEW)
    h(LuckTimeline, {
      React,
      chart: enriched,
    }),

    // 7. TỔNG KẾT LÁ SỐ & HÀNH ĐỘNG
    h(
      'footer',
      { className: 'atlas-conclusion-box ritual-mist-card' },
      h(
        'div',
        { className: 'conclusion-header-row' },
        h(ScrollTextIcon, { React, size: 18, color: 'var(--gold)' }),
        h('h3', null, 'Lời Kết Mệnh Cục & Chiêm Nghiệm'),
        h('span', { className: 'conclusion-tag' }, 'TỔNG QUAN ĐỜI NGƯỜI')
      ),
      h('p', { className: 'conclusion-text' }, conclusionParagraph),
      h(
        'div',
        { className: 'conclusion-actions-bar' },
        h(
          'button',
          {
            type: 'button',
            className: 'button gold',
            onClick: handleDownloadTxt,
          },
          h(ScrollTextIcon, { React, size: 16 }),
          h('span', null, 'Tải Trọn Bộ 5 Đại Bản Đồ (.TXT)')
        ),
        h(
          'button',
          {
            type: 'button',
            className: 'button outline',
            onClick: () => setEditingNote(true),
          },
          h(BookOpenIcon, { React, size: 16 }),
          h('span', null, 'Ghi Nhận Vào Sổ Chiêm Nghiệm')
        )
      )
    )
  );
}
