/**
 * src/atlas/AtlasChartResult.mjs
 * BỘ ĐIỀU PHỐI ĐẠI MỆNH BÀN & 5 ĐỒ BẢN BÁT TỰ
 * Khung điều phối chuẩn mực cho trải nghiệm kết hợp:
 * - Đầu trang: Đại Mệnh Bàn Tổng Hợp (Grand Master Atlas)
 * - Tiếp theo: 5 Chương Bản Đồ Đôi (Trái: Chuyên sâu / Phải: Đời thường)
 * - Cuối cùng: Tổng Kết Mệnh Cục & Ghi Chép Sổ Chiêm Nghiệm
 */

import { enrichBaziChart } from './bazi-engine-ext.mjs';
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
  InfoIcon,
  AlertCircleIcon,
  ShieldIcon,
  CompassIcon,
} from './icons.mjs';

// Lớp hạt tàn hương vàng kim & đốm lửa chu sa trôi lơ lửng huyền ảo (tối đa 8 desktop / 4 mobile, không chớp)
function AmbientRitualField({ React }) {
  const h = React.createElement;
  const embers = [
    { x: '8%', duration: '28s', delay: '0s', size: 3, opacity: 0.65, color: '#e88b78' },
    { x: '20%', duration: '34s', delay: '4s', size: 2, opacity: 0.5, color: '#c4a365' },
    { x: '35%', duration: '30s', delay: '10s', size: 3.5, opacity: 0.7, color: '#bf4b45' },
    { x: '48%', duration: '38s', delay: '2s', size: 2, opacity: 0.45, color: '#d69a88' },
    { x: '62%', duration: '29s', delay: '7s', size: 3, opacity: 0.65, color: '#e88b78' },
    { x: '75%', duration: '36s', delay: '1s', size: 2.5, opacity: 0.5, color: '#c4a365' },
    { x: '88%', duration: '32s', delay: '12s', size: 3, opacity: 0.7, color: '#bf4b45' },
    { x: '94%', duration: '40s', delay: '6s', size: 2, opacity: 0.4, color: '#d69a88' },
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
          '--ember-drift-x': idx % 2 === 0 ? '30px' : '-30px',
        },
      })
    )
  );
}

function AtlasGlossary({ React }) {
  const h = React.createElement;
  const terms = [
    ['Nhật chủ', 'Thiên can của trụ Ngày; dùng làm mốc kỹ thuật để tính các quan hệ còn lại, không phải nhãn cố định về con người.'],
    ['Tàng can', 'Các thiên can được tra trong một Địa chi theo bảng quy tắc; đây là lớp dữ kiện phụ của mỗi trụ.'],
    ['Thập thần', 'Tên gọi truyền thống cho quan hệ giữa một thiên can và Nhật chủ; số lần xuất hiện không phải điểm tốt xấu.'],
    ['Nạp âm', 'Tên phân loại truyền thống của một cặp Can–Chi; không phải mô tả khoa học về tính cách.'],
    ['Đại vận', 'Các chặng thời gian dài được bộ tính cung cấp; nếu thiếu dữ liệu, hệ thống không tự dựng mốc thay thế.'],
  ];
  return h(
    'section',
    { className: 'atlas-glossary', 'aria-labelledby': 'atlas-glossary-title' },
    h(
      'div',
      { className: 'atlas-glossary-heading' },
      h('h3', { id: 'atlas-glossary-title' }, 'Thuật ngữ cần biết'),
      h('span', { className: 'atlas-glossary-hint' }, 'Mở dấu ? để xem giải thích ngắn')
    ),
    h(
      'div',
      { className: 'atlas-glossary-list' },
      terms.map(([term, explanation]) =>
        h(
          'details',
          { className: 'atlas-glossary-item', key: term },
          h('summary', null, h('span', { className: 'atlas-term-mark', 'aria-hidden': 'true' }, '?'), h('span', null, term)),
          h('p', null, explanation)
        )
      )
    )
  );
}

function HumanReadingSection({ React, reading, onExploreMaps }) {
  const h = React.createElement;
  if (!reading) return null;

  const {
    title,
    isPartialTime,
    partialTimeNotice,
    inherentNature,
    circumstanceVulnerabilities,
    loveAndRelationships,
    groundingAdvice,
  } = reading;

  return h(
    'section',
    {
      id: 'atlas-human-reading',
      className: 'atlas-chapter-section ritual-mist-card atlas-human-reading-wrap',
      tabIndex: -1,
      'aria-labelledby': 'atlas-human-reading-title',
    },
    // Tiêu đề chương
    h(
      'header',
      { className: 'chapter-header' },
      h(
        'div',
        { className: 'chapter-badge' },
        h(SparklesIcon, { React, size: 14, color: 'var(--gold)' }),
        h('span', null, 'BẢN ĐỌC CHIÊM NGHIỆM CON NGƯỜI')
      ),
      h('h2', { id: 'atlas-human-reading-title', className: 'chapter-title' }, title || 'Chiêm Nghiệm Bản Ngã & Ranh Giới Cuộc Đời'),
      h(
        'p',
        { className: 'chapter-desc' },
        'Bát tự không phải bản án định sẵn số phận, mà là tấm gương soi chiếu hạt giống bẩm sinh và điểm yếu tâm lý của bạn. Thành bại thực tế nằm ở cách bạn đối diện với ngoại cảnh, chọn bạn đồng hành và thiết lập ranh giới sống.'
      )
    ),

    // Cảnh báo khuyết giờ sinh nếu có
    isPartialTime && partialTimeNotice &&
      h(
        'div',
        { className: 'human-partial-notice' },
        h(InfoIcon, { React, size: 16, color: 'var(--copper-gold)' }),
        h('span', null, partialTimeNotice)
      ),

    // Lưới 4 Câu Hỏi Đời Sống Cốt Lõi (2 cột trên desktop, 1 cột trên mobile)
    h(
      'div',
      { className: 'human-reading-grid' },

      // CÂU HỎI 1: Bản ngã bẩm sinh
      inherentNature &&
        h(
          'article',
          { className: 'human-question-card card-nature' },
          h(
            'div',
            { className: 'human-card-header' },
            h('span', { className: 'human-card-badge badge-nature' }, inherentNature.badge || '01 · BẢN NGÃ BẨM SINH'),
            h('h3', { className: 'human-card-title' }, inherentNature.title)
          ),
          h('div', { className: 'human-card-tagline' }, inherentNature.headline),
          h('p', { className: 'human-card-body' }, inherentNature.narrative),
          h(
            'div',
            { className: 'human-card-points' },
            h('h4', { className: 'human-points-title' }, 'Ba Hạt Giống Cốt Cách Bẩm Sinh:'),
            (inherentNature.coreGifts || []).map((gift, gIdx) =>
              h(
                'div',
                { key: gIdx, className: 'human-point-item' },
                h(CheckCircleIcon, { React, size: 14, color: 'var(--copper-gold)' }),
                h(
                  'div',
                  { className: 'human-point-content' },
                  h('strong', null, gift.title + ': '),
                  h('span', null, gift.desc)
                )
              )
            )
          )
        ),

      // CÂU HỎI 2: Điểm mù & Cạm bẫy ngoại cảnh
      circumstanceVulnerabilities &&
        h(
          'article',
          { className: 'human-question-card card-traps' },
          h(
            'div',
            { className: 'human-card-header' },
            h('span', { className: 'human-card-badge badge-traps' }, circumstanceVulnerabilities.badge || '02 · CẠM BẪY NGOẠI CẢNH'),
            h('h3', { className: 'human-card-title' }, circumstanceVulnerabilities.title)
          ),
          h('div', { className: 'human-card-tagline' }, circumstanceVulnerabilities.headline),
          h(
            'div',
            { className: 'human-philosophy-quote' },
            h('em', null, `"${circumstanceVulnerabilities.philosophyQuote}"`)
          ),
          h('p', { className: 'human-card-body' }, circumstanceVulnerabilities.narrative),
          h(
            'div',
            { className: 'human-card-points' },
            h('h4', { className: 'human-points-title' }, 'Ba Cạm Bẫy Cần Tỉnh Táo Nhận Diện:'),
            (circumstanceVulnerabilities.trapsToAvoid || []).map((trap, tIdx) =>
              h(
                'div',
                { key: tIdx, className: 'human-point-item' },
                h(AlertCircleIcon, { React, size: 14, color: 'var(--cinnabar-rose)' }),
                h(
                  'div',
                  { className: 'human-point-content' },
                  h('strong', null, trap.title + ': '),
                  h('span', null, trap.desc)
                )
              )
            )
          )
        ),

      // CÂU HỎI 3: Tình duyên & Phối ngẫu
      loveAndRelationships &&
        h(
          'article',
          { className: 'human-question-card card-love' },
          h(
            'div',
            { className: 'human-card-header' },
            h('span', { className: 'human-card-badge badge-love' }, loveAndRelationships.badge || '03 · TÌNH DUYÊN & PHỐI NGẪU'),
            h('h3', { className: 'human-card-title' }, loveAndRelationships.title)
          ),
          h('div', { className: 'human-card-tagline' }, loveAndRelationships.headline),
          h('p', { className: 'human-card-body' }, loveAndRelationships.narrative),
          h(
            'div',
            { className: 'human-card-points' },
            h('h4', { className: 'human-points-title' }, 'Cung Phu Thê & Điểm Tựa Gắn Kết:'),
            (loveAndRelationships.harmonyPoints || []).map((point, pIdx) =>
              h(
                'div',
                { key: pIdx, className: 'human-point-item' },
                h(CompassIcon, { React, size: 14, color: 'var(--gold)' }),
                h(
                  'div',
                  { className: 'human-point-content' },
                  h('strong', null, point.title + ': '),
                  h('span', null, point.desc)
                )
              )
            )
          )
        ),

      // CÂU HỎI 4: Lời khuyên định tâm & Ranh giới
      groundingAdvice &&
        h(
          'article',
          { className: 'human-question-card card-advice' },
          h(
            'div',
            { className: 'human-card-header' },
            h('span', { className: 'human-card-badge badge-advice' }, groundingAdvice.badge || '04 · RANH GIỚI & ĐỊNH TÂM'),
            h('h3', { className: 'human-card-title' }, groundingAdvice.title)
          ),
          h('div', { className: 'human-card-tagline' }, groundingAdvice.headline),
          h('p', { className: 'human-card-body' }, groundingAdvice.narrative),
          h(
            'div',
            { className: 'human-card-points' },
            h('h4', { className: 'human-points-title' }, 'Ba Chiếc Neo Định Tâm Cuộc Đời:'),
            (groundingAdvice.boundaryPrinciples || []).map((rule, rIdx) =>
              h(
                'div',
                { key: rIdx, className: 'human-point-item' },
                h(ShieldIcon, { React, size: 14, color: 'var(--copper-gold)' }),
                h(
                  'div',
                  { className: 'human-point-content' },
                  h('strong', null, rule.title + ': '),
                  h('span', null, rule.desc)
                )
              )
            )
          )
        )
    ),

    // Nút cầu nối mượt mà xuống 5 Đồ bản
    h(
      'div',
      { className: 'human-reading-bridge-wrap' },
      h(
        'button',
        {
          type: 'button',
          className: 'explore-maps-bridge-btn',
          onClick: onExploreMaps,
        },
        h('span', null, 'Khám phá 5 Đồ Bản Chi Tiết để kiểm chứng cơ sở tính toán cổ pháp'),
        h('span', { className: 'bridge-btn-arrow' }, '↓')
      )
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
    (enriched.timeline?.cycles || []).find((c) => c.isCurrent) || null;

  // Kết luận chỉ tóm tắt dữ kiện đang hiển thị; không bổ sung Dụng thần hoặc dự báo.
  const conclusionParagraph = React.useMemo(() => {
    const dm = `${enriched.dayStem} (${enriched.dayElement})`;
    const dominant = Object.entries(enriched.weightedCounts || {}).sort((a, b) => b[1] - a[1])[0];
    const dominantText = dominant
      ? `Trong phép đếm đang công bố, hành ${dominant[0]} có tỷ trọng cao nhất (${Number(dominant[1]).toFixed(1)} điểm)`
      : 'Phân bố Ngũ hành chưa đủ dữ liệu để tóm tắt';
    const timelineUnavailable = enriched.timeline?.available === false;
    const cycText = currentCycle
      ? `Năm hiện tại nằm trong chặng ${currentCycle.name} (${currentCycle.startYear}–${currentCycle.endYear}); chủ đề truyền thống của Can chặng so với Nhật chủ là ${currentCycle.tenGod}`
      : timelineUnavailable
        ? 'Chưa có dữ liệu Đại vận từ bộ tính chính nên chưa thể xác định chặng hiện tại'
        : 'Dữ liệu Đại vận hiện có không chứa chặng trùng với năm hiện tại';
    return `Trọng tâm của bản đồ là Nhật chủ ${dm}. ${dominantText}. ${cycText}. Đây là bản tóm tắt cấu trúc Bát tự để tự đối chiếu; nó không xác định tính cách, sức khỏe, tài chính hay sự kiện tương lai của bạn.`;
  }, [enriched, currentCycle]);

  if (enriched.dataAvailable === false) {
    return h(
      'div',
      { className: 'atlas-chart-result-container' },
      h(
        'section',
        { className: 'atlas-chapter-section ritual-mist-card', role: 'alert' },
        h('div', { className: 'chapter-badge' }, 'KHÔNG THỂ LẬP BẢN ĐỒ'),
        h('h2', { className: 'chapter-title' }, 'Dữ liệu tính chưa đầy đủ'),
        h('p', { className: 'chapter-desc' }, enriched.dataError || 'Bộ tính chính chưa trả về dữ kiện cần thiết. Mệnh Quán không dựng lá số mẫu thay thế.'),
        h(
          'button',
          { type: 'button', className: 'button outline', onClick: onExit },
          'Quay lại sửa thông tin sinh'
        )
      )
    );
  }

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
      .map((s) => `• ${s.name} (${s.han || '—'}): vị trí ${s.branch || s.primaryBranch || 'chưa xác định'}${s.palace ? ` · ${s.palace}` : ''}. Tên gọi theo quy tắc truyền thống; không phải dự báo sự kiện.`)
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
      '[BẢN MỆNH NHẬT CHỦ]: ' + enriched.dayStem + ' (' + enriched.dayElement + ') — ' + (enriched.beginnerGuide?.archetype?.archetype || ''),
      '[Ý NGHĨA]: ' + (enriched.beginnerGuide?.archetype?.personality || ''),
      '',
      '[00] BẢN ĐỌC CHIÊM NGHIỆM CON NGƯỜI (4 CÂU HỎI ĐỜI SỐNG CỐT LÕI)',
      '1. BẢN NGÃ BẨM SINH & CỐT CÁCH THỰC SỰ: ' + (enriched.humanReading?.inherentNature?.headline || ''),
      '   - Khí chất: ' + (enriched.humanReading?.inherentNature?.narrative || ''),
      (enriched.humanReading?.inherentNature?.coreGifts || []).map((g) => `   • ${g.title}: ${g.desc}`).join('\n'),
      '',
      '2. ĐIỂM MÙ & CẠM BẪY DỄ VẤP TRƯỚC NGOẠI CẢNH:',
      '   - Triết lý cảnh giác: ' + (enriched.humanReading?.circumstanceVulnerabilities?.philosophyQuote || ''),
      '   - Phân tích: ' + (enriched.humanReading?.circumstanceVulnerabilities?.narrative || ''),
      (enriched.humanReading?.circumstanceVulnerabilities?.trapsToAvoid || []).map((t) => `   • ${t.title}: ${t.desc}`).join('\n'),
      '',
      '3. TÌNH DUYÊN & DUYÊN NỢ CỦA BẠN:',
      '   - Cung Phu Thê: ' + (enriched.humanReading?.loveAndRelationships?.headline || ''),
      '   - Xu hướng cảm xúc: ' + (enriched.humanReading?.loveAndRelationships?.narrative || ''),
      (enriched.humanReading?.loveAndRelationships?.harmonyPoints || []).map((p) => `   • ${p.title}: ${p.desc}`).join('\n'),
      '',
      '4. LỜI KHUYÊN ĐỊNH TÂM & THIẾT LẬP RANH GIỚI:',
      '   - Định hướng Dụng Thần: ' + (enriched.humanReading?.groundingAdvice?.headline || ''),
      '   - Lời khuyên: ' + (enriched.humanReading?.groundingAdvice?.narrative || ''),
      (enriched.humanReading?.groundingAdvice?.boundaryPrinciples || []).map((b) => `   • ${b.title}: ${b.desc}`).join('\n'),
      '',
      '[01] TỨ TRỤ NGUYÊN CỤC 7 TẦNG',
      pillarLines,
      '',
      '[02] LA KINH TINH BÀN 24 SƠN & THẦN SÁT',
      starLines,
      '',
      '[03] NGŨ HÀNH SINH KHẮC & NGUYÊN KHÍ',
      `• Phân bố ngũ khí: Mộc: ${enriched.weightedCounts?.Mộc?.toFixed(1)} | Hỏa: ${enriched.weightedCounts?.Hỏa?.toFixed(1)} | Thổ: ${enriched.weightedCounts?.Thổ?.toFixed(1)} | Kim: ${enriched.weightedCounts?.Kim?.toFixed(1)} | Thủy: ${enriched.weightedCounts?.Thủy?.toFixed(1)}`,
      '• Giới hạn: phép đếm này không dùng để chẩn đoán sức khỏe, tính cách hoặc xác định Dụng thần.',
      '',
      '[04] QUAN HỆ THẬP THẦN',
      (enriched.tenGodList || [])
        .map((g) => `• ${g.name} (${g.group}): ${g.desc} [${g.count > 0 ? `Xuất hiện ${g.count.toFixed(1)} lần` : 'Khuyết'}]`)
        .join('\n'),
      '',
      '[05] ĐẠI VẬN 80 NĂM & LƯU NIÊN',
      cycleLines || 'Chưa đủ dữ liệu để lập Đại vận. Mệnh Quán không tự dựng mốc thay thế.',
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
          title: 'Ghi chú sau buổi xem Bát tự',
          reflection: selectedTexts || 'Điều tôi muốn ghi lại sau buổi xem.',
          takeaway: '',
          actionId: 'notice',
          action: currentCycle?.guidance?.action || 'Ghi lại một điều thực tế bạn muốn tự đối chiếu.',
          days: 7,
          status: 'not_tried',
          usefulness: 'unrated',
          note: '',
        }),
    });
  }

  const [activeSection, setActiveSection] = React.useState('atlas-human-reading');

  const scrollTo = (id) => {
    setActiveSection(id);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const navItems = [
    ['atlas-human-reading', 'Bản đọc'],
    ['atlas-overview', '5 Đồ bản'],
    ['atlas-summary', 'Tổng quan'],
    ['atlas-details', 'Chi tiết'],
    ['atlas-conclusion', 'Kết luận'],
  ];

  return h(
    'div',
    { className: 'atlas-chart-result-container' },

    // Lớp hiệu ứng tàn hương & huyền khí lơ lửng toàn màn hình (8 desktop / 4 mobile)
    h(AmbientRitualField, { React }),

    // Thanh điều hướng 5 giai đoạn chuẩn mực
    h(
      'nav',
      { className: 'atlas-reading-order', 'aria-label': 'Nội dung bản Bát tự' },
      navItems.map(([id, label]) =>
        h(
          'button',
          {
            type: 'button',
            key: id,
            className: activeSection === id ? 'is-active-nav' : '',
            'aria-current': activeSection === id ? 'true' : undefined,
            onClick: () => scrollTo(id),
          },
          label
        )
      )
    ),

    // =========================================================================
    // GIAI ĐOẠN 1: BẢN ĐỌC CHIÊM NGHIỆM CON NGƯỜI (4 CÂU HỎI ĐỜI SỐNG CỐT LÕI)
    // =========================================================================
    h(HumanReadingSection, {
      React,
      reading: enriched.humanReading,
      onExploreMaps: () => scrollTo('atlas-overview'),
    }),

    // =========================================================================
    // GIAI ĐOẠN 2: ĐỦ 5 BẢN ĐỒ BÁT TỰ NGUYÊN CỤC (Cân xứng, rộng rãi, toàn chiều rộng)
    // =========================================================================
    h(
      'section',
      {
        id: 'atlas-overview',
        className: 'atlas-maps-section',
        tabIndex: -1,
        'aria-label': 'Năm bản đồ Bát tự cổ pháp',
      },
      h(
        'div',
        { className: 'atlas-maps-container' },

        // 01. Tứ trụ huyền bàn 7 tầng (Full width)
        h(BaziMatrixMap, {
          React,
          chart: enriched,
          activePillar,
          onSelectPillar: setActivePillar,
        }),

        // 02. Thiên bàn 12 cung & thần sát (Full width độc lập)
        h(CelestialWheel, {
          React,
          chart: enriched,
        }),

        // 03. Cân bằng ngũ hành sinh khắc (Full width độc lập)
        h(FiveElementsRadar, {
          React,
          chart: enriched,
        }),

        // 04. 5 Trục Thập thần & cách cục (Full width)
        h(TenGodsProfileMap, {
          React,
          chart: enriched,
        }),

        // 05. Biên niên Đại vận 80 năm & lưu niên (Full width)
        h(LuckTimeline, {
          React,
          chart: enriched,
        })
      )
    ),

    // =========================================================================
    // GIAI ĐOẠN 3: TỔNG QUAN (Nhìn nhanh cấu trúc lá số)
    // =========================================================================
    h(
      'section',
      {
        id: 'atlas-summary',
        className: 'atlas-summary-block ritual-mist-card',
        tabIndex: -1,
        'aria-labelledby': 'atlas-summary-title',
      },
      h('span', { className: 'chapter-badge' }, '03 · TỔNG QUAN'),
      h('h2', { id: 'atlas-summary-title', className: 'chapter-title' }, 'Nhìn nhanh cấu trúc lá số'),
      h(
        'ul',
        { className: 'atlas-summary-bullets' },
        h(
          'li',
          null,
          h('strong', null, 'Tứ trụ: '),
          `${enriched.pillars.filter((p) => p.stem).length}/4 trụ đã xác định. Nhật chủ ${enriched.dayStem} (${enriched.dayElement}).`
        ),
        h(
          'li',
          null,
          h('strong', null, 'Thiên bàn: '),
          `${(enriched.shenSha || []).length} vị trí thần sát theo bảng quy tắc truyền thống.`
        ),
        h(
          'li',
          null,
          h('strong', null, 'Ngũ hành: '),
          Object.keys(enriched.weightedCounts || {}).length
            ? `Phép đếm cho thấy hành ${Object.entries(enriched.weightedCounts).sort((a, b) => b[1] - a[1])[0]?.[0]} có tỷ trọng cao nhất.`
            : 'Chưa đủ dữ liệu để biểu diễn phân bố.'
        ),
        h(
          'li',
          null,
          h('strong', null, 'Thập thần: '),
          `${(enriched.tenGodList || []).length} quan hệ được ghi nhận trong các trụ đủ dữ liệu.`
        ),
        h(
          'li',
          null,
          h('strong', null, 'Đại vận: '),
          enriched.timeline?.available
            ? `${(enriched.timeline.cycles || []).length} chặng trong dòng thời gian hiện có.`
            : 'Chưa đủ dữ liệu từ bộ tính chính để lập Đại vận.'
        )
      ),
      (enriched.limits || []).length > 0 &&
        h(
          'details',
          { open: true, className: 'atlas-limits-card' },
          h('summary', null, 'Phần chưa xác định & giới hạn tính toán'),
          enriched.limits.map((l, i) => h('p', { key: i }, l))
        )
    ),

    // =========================================================================
    // GIAI ĐOẠN 3: CHI TIẾT (Giải thích & Thuật ngữ)
    // =========================================================================
    h(
      'section',
      {
        id: 'atlas-details',
        className: 'atlas-explanations ritual-mist-card',
        tabIndex: -1,
        'aria-labelledby': 'atlas-details-title',
      },
      h('div', { className: 'atlas-phase-heading' },
        h('span', { className: 'chapter-badge' }, '04 · CHI TIẾT'),
        h('h2', { id: 'atlas-details-title', className: 'chapter-title' }, 'Giải thích chi tiết & thuật ngữ')
      ),

      // Thuật ngữ cần biết với nút ? mở giải nghĩa
      h(AtlasGlossary, { React }),

      // Nguồn thu gọn
      h(
        'details',
        { className: 'atlas-collapsible-sources', id: 'atlas-sources' },
        h('summary', null, 'Cơ sở tính toán, nguồn tham chiếu & giới hạn'),
        h('p', null, 'Trụ năm đổi tại Lập Xuân. Trụ tháng đổi theo tiết khí. Ngày đổi lúc 00:00 theo giờ địa phương. Các mốc tiết khí được quy đổi theo UTC+8 cố định.'),
        h(
          'div',
          { className: 'source-row' },
          h('p', null, 'Dữ liệu múi giờ lịch sử: IANA tzdb. Quy ước tính toán: Thư viện EightChar & Hong Kong Observatory.')
        ),
        h(
          'div',
          { className: 'external-sources' },
          h('a', { href: 'https://6tail.cn/calendar/lunar.bazi.html', target: '_blank', rel: 'noreferrer' }, 'Quy tắc thư viện EightChar ↗'),
          h('a', { href: 'https://www.hko.gov.hk/en/gts/time/conversion.htm', target: '_blank', rel: 'noreferrer' }, 'Đối chứng lịch Hong Kong Observatory ↗'),
          h('a', { href: 'https://www.iana.org/time-zones/theory', target: '_blank', rel: 'noreferrer' }, 'Giới hạn dữ liệu múi giờ lịch sử ↗')
        )
      )
    ),

    // =========================================================================
    // GIAI ĐOẠN 4: MỘT ĐOẠN KẾT LUẬN & THANH HÀNH ĐỘNG TẢI/LƯU
    // =========================================================================
    h(
      'footer',
      {
        id: 'atlas-conclusion',
        className: 'atlas-conclusion-box ritual-mist-card',
        tabIndex: -1,
        'aria-labelledby': 'atlas-conclusion-title',
      },
      h(
        'div',
        { className: 'conclusion-header-row' },
        h(ScrollTextIcon, { React, size: 18, color: 'var(--gold)' }),
        h('h3', { id: 'atlas-conclusion-title' }, '5. Kết luận'),
        h('span', { className: 'conclusion-tag' }, 'TÓM TẮT TRỌNG TÂM')
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
