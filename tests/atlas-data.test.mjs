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

test('Master Bazi Engine v2.0 phân tích chính xác Điều Hầu khí hậu, Biểu/Lý, Thế cục và Giao thoa đa trụ', () => {
  // Lá số sinh mùa đông nhiều Thủy (Hàn Thấp), Tý-Ngọ xung ngày-giờ, lộ Canh Sát không gốc mạnh
  const winterChart = enrichBaziChart({
    pillars: [
      { stem: 'Nhâm', branch: 'Tý' },
      { stem: 'Quý', branch: 'Hợi' },
      { stem: 'Giáp', branch: 'Tý' },
      { stem: 'Canh', branch: 'Ngọ' },
    ],
  });

  const reading = winterChart.humanReading;
  assert.equal(reading.engineVersion, 'v2.0-master');

  // 1. Vector Khí Hậu & Điều Hầu ưu tiên Hỏa
  assert.match(reading.climateProfile.climateType, /Hàn/i);
  assert.equal(reading.climateProfile.climatePriority, 'Hỏa');
  assert.match(reading.groundingAdvice.yongShenName, /Điều Hầu Hỏa/i);
  assert.match(reading.groundingAdvice.climateRemedy, /Điều Hầu.*Hỏa/i);

  // 2. Tầng Biểu vs Tầng Lý & Rooting
  assert.ok(reading.dualLayerProfile.surfaceLabel.length > 0);
  assert.ok(reading.dualLayerProfile.innerLabel.length > 0);
  assert.equal(reading.inherentNature.surfaceLabel, reading.dualLayerProfile.surfaceLabel);
  assert.equal(reading.inherentNature.innerLabel, reading.dualLayerProfile.innerLabel);

  // 3. Thế cục giằng xé nội tâm (ít nhất 1 pattern nhận diện được)
  assert.ok(Array.isArray(reading.conflictAnalysis.patterns));
  assert.ok(reading.conflictAnalysis.patterns.length >= 1);
  assert.ok(reading.circumstanceVulnerabilities.conflictPatterns.length >= 1);

  // 4. Ma trận giao thoa Cung Phu Thê đa trụ (Tý - Ngọ Lục Xung ở Trụ Ngày - Giờ)
  assert.ok(reading.relationalMatrix.interferenceSummary.length > 0);
  assert.equal(reading.relationalMatrix.hasInterferenceConflict, true);
  assert.match(reading.relationalMatrix.interferenceSummary, /Lục Xung|Giao thoa/i);

  // 5. Lưỡng khí tranh vượng (lá số cân bằng 2 hành sát nút <= 0.15)
  const tieChart = enrichBaziChart({
    pillars: [
      { stem: 'Giáp', branch: 'Tý' },
      { stem: 'Ất', branch: 'Hợi' },
      { stem: 'Bính', branch: 'Dần' },
      { stem: 'Đinh', branch: 'Mão' },
    ],
  });
  assert.ok(tieChart.humanReading.conflictAnalysis.dominantLabel.length > 0);
  assert.equal(typeof tieChart.humanReading.conflictAnalysis.isTieElement, 'boolean');
});

import { MONETIZATION_CONFIG, buildHeadMonetizationTags } from '../src/atlas/monetization-config.mjs';
import { bootMonetagSession } from '../src/atlas/monetag-session.mjs';
import {
  CONTACT_EMAIL,
  LIBRARY_ARTICLES,
  renderEditorialPage,
  buildRobotsTxt,
  buildSitemapXml,
  buildAdsTxt,
} from '../src/atlas/editorial-pages.mjs';

test('monetization config & ads.txt / robots.txt / sitemap.xml hoạt động nhất quán', () => {
  assert.ok(['library', 'affiliate', 'adsense', 'off'].includes(MONETIZATION_CONFIG.mode));
  assert.ok(MONETIZATION_CONFIG.librarySuggestions.betweenReadingAndMaps.href.startsWith('/thu-vien/'));
  assert.ok(MONETIZATION_CONFIG.librarySuggestions.beforeConclusion.href.startsWith('/thu-vien/'));
  assert.ok(MONETIZATION_CONFIG.affiliateOffers.betweenReadingAndMaps.rel.includes('sponsored'));
  assert.ok(MONETIZATION_CONFIG.affiliateOffers.editorialBanner.rel.includes('sponsored'));
  assert.equal(MONETIZATION_CONFIG.monetag.metaVerificationContent, '17f2098708859e12049841afd66178ac');
  assert.equal(MONETIZATION_CONFIG.monetag.oncePerSession, true);
  assert.equal(MONETIZATION_CONFIG.monetag.headScripts[0].zone, '12250663');
  assert.equal(MONETIZATION_CONFIG.monetag.headScripts[0].src, 'https://nap5k.com/tag.min.js');

  const headTags = buildHeadMonetizationTags(MONETIZATION_CONFIG);
  assert.match(headTags.monetagMetaTag, /<meta name="monetag" content="17f2098708859e12049841afd66178ac"/);
  assert.match(headTags.adsenseTag, /ca-pub-1866418681419466/);
  assert.match(headTags.monetagScriptsHtml, /sessionStorage\.getItem\('mq_monetag_session_loaded'\)/);
  assert.match(headTags.monetagScriptsHtml, /dataset\.zone='12250663'/);
  assert.match(headTags.monetagScriptsHtml, /https:\/\/nap5k\.com\/tag\.min\.js/);

  const zoneConfig = {
    ...MONETIZATION_CONFIG,
    monetag: {
      enabled: true,
      oncePerSession: true,
      sessionStorageKey: 'mq_monetag_session_loaded',
      metaVerificationContent: '17f2098708859e12049841afd66178ac',
      headScripts: [{ src: 'https://quge5.com/88/tag.min.js', zone: '999999', cfasync: false }],
    },
  };
  const withMonetagZone = buildHeadMonetizationTags(zoneConfig);
  assert.match(withMonetagZone.monetagScriptsHtml, /sessionStorage\.getItem\('mq_monetag_session_loaded'\)/);
  assert.match(withMonetagZone.monetagScriptsHtml, /dataset\.zone='999999'/);
  assert.match(withMonetagZone.monetagScriptsHtml, /https:\/\/quge5\.com\/88\/tag\.min\.js/);

  const makeMockStorage = () => {
    const map = new Map();
    return {
      getItem: (k) => (map.has(k) ? map.get(k) : null),
      setItem: (k, v) => map.set(k, String(v)),
    };
  };
  const makeMockDoc = () => {
    const appended = [];
    return {
      appended,
      head: { appendChild: (el) => appended.push(el) },
      createElement: () => ({ attrs: {}, setAttribute(k, v) { this.attrs[k] = v; } }),
    };
  };

  const tabStorage = makeMockStorage();
  const doc1 = makeMockDoc();
  const win1 = {};
  assert.equal(bootMonetagSession({ doc: doc1, win: win1, storage: tabStorage, config: zoneConfig }), true);
  assert.equal(doc1.appended.length, 1);
  assert.equal(doc1.appended[0].attrs['data-zone'], '999999');

  // Điều hướng trang khác hoặc tải lại trong cùng phiên -> bị chặn
  const doc2 = makeMockDoc();
  const win2 = {};
  assert.equal(bootMonetagSession({ doc: doc2, win: win2, storage: tabStorage, config: zoneConfig }), false);
  assert.equal(doc2.appended.length, 0);

  // Phiên mới (tắt mở lại tab mới) -> cho phép tải 1 lần mới
  const freshStorage = makeMockStorage();
  const doc3 = makeMockDoc();
  assert.equal(bootMonetagSession({ doc: doc3, win: {}, storage: freshStorage, config: zoneConfig }), true);
  assert.equal(doc3.appended.length, 1);

  // Trình duyệt chặn sessionStorage -> an toàn, không crash
  assert.equal(bootMonetagSession({ doc: makeMockDoc(), win: {}, storage: null, config: zoneConfig }), false);

  const robots = buildRobotsTxt('https://darkmagic.onrender.com');
  assert.match(robots, /Sitemap:\s*https:\/\/darkmagic\.onrender\.com\/sitemap\.xml/);

  const sitemap = buildSitemapXml('https://darkmagic.onrender.com');
  assert.match(sitemap, /xmlns="http:\/\/www\.sitemaps\.org\/schemas\/sitemap\/0\.9"/);
  assert.match(sitemap, /<loc>https:\/\/darkmagic\.onrender\.com\/quyen-rieng-tu<\/loc>/);
  assert.match(sitemap, /<loc>https:\/\/darkmagic\.onrender\.com\/lien-he<\/loc>/);
  assert.match(sitemap, /<loc>https:\/\/darkmagic\.onrender\.com\/thu-vien\/ngu-hanh-trong-bat-tu<\/loc>/);
  assert.match(sitemap, /<loc>https:\/\/darkmagic\.onrender\.com\/thu-vien\/ghi-chep-so-chiem-nghiem-hieu-qua<\/loc>/);

  const disabledAds = buildAdsTxt({ adsense: { enabled: false, publisherId: '' } });
  assert.match(disabledAds, /^#/);

  const liveAds = buildAdsTxt(MONETIZATION_CONFIG);
  assert.equal(liveAds.trim(), 'google.com, pub-1866418681419466, DIRECT, f08c47fec0942fa0');

  const enabledCaAds = buildAdsTxt({
    adsense: { enabled: true, publisherId: 'ca-pub-1234567890123456', adsTxtSellerId: 'f08c47fec0942fa0' },
  });
  assert.equal(enabledCaAds.trim(), 'google.com, pub-1234567890123456, DIRECT, f08c47fec0942fa0');
});

test('editorial pages trả HTML hợp lệ cho legal pages, /lien-he và đủ 14 bài thư viện', () => {
  assert.equal(LIBRARY_ARTICLES.length, 14);

  for (const route of ['/quyen-rieng-tu', '/dieu-khoan', '/lien-he', '/thu-vien']) {
    const html = renderEditorialPage(route, 'https://darkmagic.onrender.com');
    assert.ok(html && html.includes('<!DOCTYPE html>'), `Missing HTML for ${route}`);
    assert.ok(html.includes('viewport-fit=cover'), `Missing viewport-fit=cover on ${route}`);
    assert.ok(html.includes('ca-pub-1866418681419466'), `Missing AdSense script on ${route}`);
    assert.ok(
      html.includes('17f2098708859e12049841afd66178ac'),
      `Missing Monetag verification meta on ${route}`
    );
  }

  const libraryHtml = renderEditorialPage('/thu-vien', 'https://darkmagic.onrender.com');
  assert.ok(libraryHtml.includes('mq-banner-card'), 'Missing simple banner on /thu-vien');

  for (const legalRoute of ['/quyen-rieng-tu', '/dieu-khoan', '/lien-he']) {
    const html = renderEditorialPage(legalRoute, 'https://darkmagic.onrender.com');
    assert.ok(html.includes(CONTACT_EMAIL), `Missing contact email on ${legalRoute}`);
  }

  for (const article of LIBRARY_ARTICLES) {
    const html = renderEditorialPage(`/thu-vien/${article.slug}`, 'https://darkmagic.onrender.com');
    const escapedTitle = article.title.replaceAll('"', '&quot;');
    assert.ok(html && html.includes(escapedTitle), `Missing title for ${article.slug}`);
    assert.ok(html.includes('application/ld+json'), `Missing JSON-LD on ${article.slug}`);
    assert.ok(article.sections.length >= 3, `Expected >= 3 sections on ${article.slug}`);
  }

  assert.equal(renderEditorialPage('/thu-vien/khong-ton-tai', 'https://darkmagic.onrender.com'), null);
});
