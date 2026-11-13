import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const renderedFiles = [
  'src/atlas/AtlasChartResult.mjs',
  'src/atlas/BaziMatrixMap.mjs',
  'src/atlas/CelestialWheel.mjs',
  'src/atlas/FiveElementsRadar.mjs',
  'src/atlas/TenGodsProfileMap.mjs',
  'src/atlas/LuckTimeline.mjs',
];

test('giao diện không còn phát hành lời khuyên y khoa hoặc Dụng thần chắc chắn', async () => {
  const source = (await Promise.all(renderedFiles.map((file) => readFile(file, 'utf8')))).join('\n');

  assert.doesNotMatch(source, /bồi dưỡng thận|gan đào thải|dưỡng tim mạch|dưỡng phổi/i);
  assert.doesNotMatch(source, /Chìa Khóa Cải Mệnh|Chiếu Chỉ Dụng Thần Định Mệnh|Dụng Thần cốt lõi/i);
});

test('lớp Đại vận không còn khóa năm 2026 hoặc danh sách 2022–2031', async () => {
  const source = await readFile('src/atlas/bazi-engine-ext.mjs', 'utf8');

  assert.doesNotMatch(source, /const currentYear = 2026/);
  assert.doesNotMatch(source, /for \(let yr = 2022; yr <= 2031/);
  assert.doesNotMatch(source, /gán chu kỳ 3 là hiện tại/i);
});

test('không dựng năm sinh giả và không gọi dữ kiện là nhãn tính cách', async () => {
  const engine = await readFile('src/atlas/bazi-engine-ext.mjs', 'utf8');
  const result = await readFile('src/atlas/AtlasChartResult.mjs', 'utf8');
  assert.doesNotMatch(engine, /let birthYear\s*=\s*1995/);
  assert.match(engine, /Dữ kiện Nhật chủ/);
  assert.match(result, /Chưa có dữ liệu Đại vận từ bộ tính chính/);
});

test('editorial pages và monetization config tuân thủ nội dung an toàn và không dùng node:* phía trình duyệt', async () => {
  const { LIBRARY_ARTICLES, renderEditorialPage } = await import('../src/atlas/editorial-pages.mjs');
  const configSource = await readFile('src/atlas/monetization-config.mjs', 'utf8');
  const sessionSource = await readFile('src/atlas/monetag-session.mjs', 'utf8');
  const bannerSource = await readFile('src/atlas/AdSlotBanner.mjs', 'utf8');
  const editorialSource = await readFile('src/atlas/editorial-pages.mjs', 'utf8');
  const articlesSource = await readFile('src/atlas/library-articles.mjs', 'utf8');

  assert.doesNotMatch(configSource, /from\s+['"]node:|import\s+['"]node:/);
  assert.doesNotMatch(sessionSource, /from\s+['"]node:|import\s+['"]node:/);
  assert.doesNotMatch(bannerSource, /from\s+['"]node:|import\s+['"]node:/);

  const forbiddenMedical = /bồi dưỡng thận|gan đào thải|dưỡng tim mạch|dưỡng phổi/i;
  const forbiddenDeterministic = /Chìa Khóa Cải Mệnh|Chiếu Chỉ Dụng Thần Định Mệnh|Dụng Thần cốt lõi/i;

  for (const raw of [configSource, bannerSource, editorialSource, articlesSource]) {
    assert.doesNotMatch(raw, forbiddenMedical);
    assert.doesNotMatch(raw, forbiddenDeterministic);
  }

  for (const route of ['/quyen-rieng-tu', '/dieu-khoan', '/lien-he', '/thu-vien']) {
    const html = renderEditorialPage(route, 'https://darkmagic.onrender.com');
    assert.doesNotMatch(html, forbiddenMedical);
    assert.doesNotMatch(html, forbiddenDeterministic);
  }

  for (const article of LIBRARY_ARTICLES) {
    const html = renderEditorialPage(`/thu-vien/${article.slug}`, 'https://darkmagic.onrender.com');
    assert.doesNotMatch(html, forbiddenMedical);
    assert.doesNotMatch(html, forbiddenDeterministic);
  }
});
