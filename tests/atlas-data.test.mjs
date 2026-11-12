import test from 'node:test';
import assert from 'node:assert/strict';

import { buildLuckTimeline, enrichBaziChart } from '../src/atlas/bazi-engine-ext.mjs';

const pillars = [
  { stem: 'Canh', branch: 'Thìn' },
  { stem: 'Tân', branch: 'Tỵ' },
  { stem: 'Quý', branch: 'Dậu' },
  { stem: 'Mậu', branch: 'Ngọ' },
];

test('không dựng Đại vận khi bộ tính chính không cung cấp dữ liệu', () => {
  const result = buildLuckTimeline('Quý', pillars, [], 2026);

  assert.deepEqual(result.cycles, []);
  assert.deepEqual(result.annuals, []);
  assert.equal(result.available, false);
});

test('dùng đúng chặng và lưu niên do bộ tính chính cung cấp', () => {
  const source = [
    {
      index: 6,
      startAge: 54,
      endAge: 63,
      startYear: 2054,
      ganZhi: 'Đinh Hợi',
      elements: ['Hỏa', 'Thủy'],
      relationWithDay: 'Thiên tài',
      liuNian: [
        { year: 2054, age: 54, ganZhi: 'Giáp Tuất', elements: ['Mộc', 'Thổ'], relationWithDay: 'Thương quan', isCurrent: false },
        { year: 2055, age: 55, ganZhi: 'Ất Hợi', elements: ['Mộc', 'Thủy'], relationWithDay: 'Thực thần', isCurrent: false },
      ],
    },
  ];

  const result = buildLuckTimeline('Quý', pillars, source, 2026);

  assert.equal(result.available, true);
  assert.equal(result.cycles[0].startYear, 2054);
  assert.equal(result.cycles[0].endYear, 2063);
  assert.equal(result.cycles[0].isCurrent, false);
  assert.deepEqual(result.cycles[0].annuals.map((item) => item.year), [2054, 2055]);
  assert.deepEqual(result.annuals.map((item) => item.year), [2054, 2055]);
});

test('chỉ đánh dấu hiện tại khi năm đang xét thực sự thuộc chặng', () => {
  const source = [
    {
      index: 1,
      startAge: 4,
      endAge: 13,
      startYear: 2020,
      ganZhi: 'Giáp Tý',
      elements: ['Mộc', 'Thủy'],
      relationWithDay: 'Thương quan',
      liuNian: [
        { year: 2026, age: 10, ganZhi: 'Bính Ngọ', elements: ['Hỏa', 'Hỏa'], relationWithDay: 'Chính tài', isCurrent: true },
      ],
    },
  ];

  const result = buildLuckTimeline('Quý', pillars, source, 2026);

  assert.equal(result.cycles[0].isCurrent, true);
  assert.equal(result.cycles[0].annuals[0].isCurrent, true);
});

test('không dựng Tứ trụ mẫu khi đầu vào tính toán bị thiếu', () => {
  const result = enrichBaziChart({});

  assert.equal(result.dataAvailable, false);
  assert.deepEqual(result.pillars, []);
  assert.match(result.dataError, /không dựng lá số mẫu/i);
});

test('thuật toán con người cá nhân hóa sinh lời giải riêng biệt theo Tứ trụ cụ thể', () => {
  const chartPersonA = enrichBaziChart({
    pillars: [
      { stem: 'Giáp', branch: 'Tý' },
      { stem: 'Bính', branch: 'Dần' },
      { stem: 'Nhâm', branch: 'Thân' },
      { stem: 'Canh', branch: 'Tuất' },
    ],
  });

  const chartPersonB = enrichBaziChart({
    pillars: [
      { stem: 'Mậu', branch: 'Thìn' },
      { stem: 'Kỷ', branch: 'Mùi' },
      { stem: 'Nhâm', branch: 'Tý' },
      { stem: 'Tân', branch: 'Hợi' },
    ],
  });

  assert.equal(chartPersonA.dataAvailable, true);
  assert.equal(chartPersonB.dataAvailable, true);
  assert.ok(chartPersonA.personalProfile);
  assert.ok(chartPersonB.personalProfile);

  // Cùng là Nhật chủ Nhâm Thủy nhưng khác tháng (Dần vs Mùi) và khác ngày (Thân vs Tý)
  assert.notEqual(chartPersonA.personalProfile.title, chartPersonB.personalProfile.title);
  assert.notEqual(chartPersonA.personalProfile.coreEssence.detail, chartPersonB.personalProfile.coreEssence.detail);
  assert.notEqual(chartPersonA.personalProfile.workingStyle.detail, chartPersonB.personalProfile.workingStyle.detail);
  assert.notEqual(chartPersonA.personalProfile.blindSpotsAndRemedy.advice, chartPersonB.personalProfile.blindSpotsAndRemedy.advice);

  // Từng trụ có dynamicInsight riêng biệt 4 chiều
  assert.ok(chartPersonA.pillars[0].dynamicInsight?.domains?.career);
  assert.ok(chartPersonA.pillars[1].dynamicInsight?.domains?.strength);
});

test('Bản đọc chiêm nghiệm con người trả lời đủ 4 câu hỏi đời sống và mang tính cá nhân hóa', () => {
  const chartPersonA = enrichBaziChart({
    pillars: [
      { stem: 'Giáp', branch: 'Tý' },
      { stem: 'Bính', branch: 'Dần' },
      { stem: 'Nhâm', branch: 'Thân' },
      { stem: 'Canh', branch: 'Tuất' },
    ],
  });

  const chartPersonB = enrichBaziChart({
    pillars: [
      { stem: 'Canh', branch: 'Thìn' },
      { stem: 'Kỷ', branch: 'Tỵ' },
      { stem: 'Bính', branch: 'Ngọ' },
      { stem: 'Đinh', branch: 'Dậu' },
    ],
  });

  assert.ok(chartPersonA.humanReading);
  assert.ok(chartPersonB.humanReading);

  const readA = chartPersonA.humanReading;
  const readB = chartPersonB.humanReading;

  // 1. Kiểm tra cấu trúc đủ 4 câu hỏi đời sống cốt lõi
  assert.ok(readA.inherentNature);
  assert.ok(readA.circumstanceVulnerabilities);
  assert.ok(readA.loveAndRelationships);
  assert.ok(readA.groundingAdvice);

  assert.equal(readA.inherentNature.title, '01 · BẢN NGÃ BẨM SINH & CỐT CÁCH THỰC SỰ');
  assert.equal(readA.circumstanceVulnerabilities.title, '02 · ĐIỂM MÙ & CẠM BẪY DỄ VẤP TRƯỚC NGOẠI CẢNH');
  assert.equal(readA.loveAndRelationships.title, '03 · TÌNH DUYÊN & DUYÊN NỢ CỦA BẠN');
  assert.equal(readA.groundingAdvice.title, '04 · LỜI KHUYÊN ĐỊNH TÂM & THIẾT LẬP RANH GIỚI');

  // 2. Tính cá nhân hóa (không dùng 1 câu cho tất cả mọi người)
  assert.notEqual(readA.inherentNature.headline, readB.inherentNature.headline);
  assert.notEqual(readA.inherentNature.narrative, readB.inherentNature.narrative);
  assert.notEqual(readA.circumstanceVulnerabilities.narrative, readB.circumstanceVulnerabilities.narrative);
  assert.notEqual(readA.loveAndRelationships.headline, readB.loveAndRelationships.headline);
  assert.notEqual(readA.groundingAdvice.headline, readB.groundingAdvice.headline);

  // 3. Triết lý chỉ tay & ngoại cảnh: Không phán đoán số phận tuyệt đối, cảnh báo cạm bẫy thực tế
  assert.match(readA.circumstanceVulnerabilities.philosophyQuote, /kết giao bạn xấu|chỉ tay hay Bát tự/i);
  assert.ok(readA.circumstanceVulnerabilities.trapsToAvoid.length >= 3);
  assert.ok(readA.groundingAdvice.boundaryPrinciples.length >= 3);
});

test('Bản đọc chiêm nghiệm xử lý chuẩn xác trường hợp khuyết giờ sinh', () => {
  const chartPartial = enrichBaziChart({
    pillars: [
      { stem: 'Ất', branch: 'Hợi' },
      { stem: 'Đinh', branch: 'Hợi' },
      { stem: 'Tân', branch: 'Tỵ' },
      { stem: '', branch: '' },
    ],
  });

  assert.ok(chartPartial.humanReading);
  assert.equal(chartPartial.humanReading.isPartialTime, true);
  assert.ok(chartPartial.humanReading.partialTimeNotice);
  assert.match(chartPartial.humanReading.partialTimeNotice, /75% cấu trúc căn bản/i);
});
