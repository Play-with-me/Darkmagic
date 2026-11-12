/**
 * Server-rendered AdSense-compliant legal & SEO editorial pages for Mệnh Quán.
 * Uses Huyền Vũ Chu Sa design tokens and responsive mobile-first layout (320px+).
 */
import { MONETIZATION_CONFIG } from './monetization-config.mjs';
import { LIBRARY_ARTICLES } from './library-articles.mjs';

export { LIBRARY_ARTICLES };
export const CONTACT_EMAIL = 'kyuu449977@gmail.com';

function escapeHtml(value) {
  return String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function normalizeBaseUrl(baseUrl) {
  const clean = String(baseUrl || 'https://darkmagic.onrender.com').trim();
  return clean.endsWith('/') ? clean.slice(0, -1) : clean;
}

const SITE_NAV_LINKS = [
  { href: '/', label: 'Lập lá số' },
  { href: '/thu-vien', label: 'Thư viện Bát Tự' },
  { href: '/co-so-luan-giai', label: 'Cơ sở luận giải' },
  { href: '/ve-menh-quan', label: 'Về Mệnh Quán' },
  { href: '/lien-he', label: 'Liên hệ' },
];

const LEGAL_NAV_LINKS = [
  { href: '/quyen-rieng-tu', label: 'Quyền riêng tư' },
  { href: '/dieu-khoan', label: 'Điều khoản sử dụng' },
  { href: '/lien-he', label: 'Liên hệ' },
  { href: '/thu-vien', label: 'Thư viện' },
  { href: '/co-so-luan-giai', label: 'Nguồn tham khảo' },
];

function renderShell({ title, description, canonicalUrl, baseUrl, bodyHtml, activePath, jsonLdHtml = '' }) {
  const safeTitle = escapeHtml(title);
  const safeDesc = escapeHtml(description);
  const safeCanonical = escapeHtml(canonicalUrl);
  const safeBase = escapeHtml(baseUrl);

  const headerLinks = SITE_NAV_LINKS.map((item) => {
    const isActive = activePath === item.href || (item.href === '/thu-vien' && activePath.startsWith('/thu-vien/'));
    return `<a href="${escapeHtml(item.href)}" class="mq-nav-link${isActive ? ' is-active' : ''}">${escapeHtml(item.label)}</a>`;
  }).join('');

  const footerLinks = LEGAL_NAV_LINKS.map(
    (item) => `<a href="${escapeHtml(item.href)}" class="mq-footer-link">${escapeHtml(item.label)}</a>`
  ).join('');

  const adsenseHeadTag =
    MONETIZATION_CONFIG.adsense?.enabled && MONETIZATION_CONFIG.adsense?.publisherId
      ? `\n  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${encodeURIComponent(MONETIZATION_CONFIG.adsense.publisherId)}" crossorigin="anonymous"></script>`
      : '';

  return `<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
  <meta name="theme-color" content="#0b100e" />
  <title>${safeTitle}</title>
  <meta name="description" content="${safeDesc}" />
  <link rel="canonical" href="${safeCanonical}" />
  <meta property="og:title" content="${safeTitle}" />
  <meta property="og:description" content="${safeDesc}" />
  <meta property="og:url" content="${safeCanonical}" />
  <meta property="og:type" content="article" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Ma+Shan+Zheng&family=Noto+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Noto+Serif:ital,wght@0,400;0,600;0,700;1,400&display=swap" rel="stylesheet" />
  <style>
    :root {
      --bg-void: #0b100e;
      --bg-surface: #141b18;
      --bg-card: #18201d;
      --text-primary: #eee3d8;
      --text-secondary: #cbbdb0;
      --text-muted: #d69a88;
      --accent-cinnabar: #772b32;
      --accent-bright: #bf4b45;
      --border-soft: rgba(214, 154, 136, 0.22);
      --border-strong: rgba(191, 75, 69, 0.48);
    }
    *, *::before, *::after { box-sizing: border-box; }
    html, body {
      margin: 0;
      padding: 0;
      background-color: var(--bg-void);
      color: var(--text-primary);
      font-family: "Noto Sans", system-ui, -apple-system, sans-serif;
      line-height: 1.72;
      overflow-x: clip;
      -webkit-text-size-adjust: 100%;
    }
    a { color: inherit; }
    .mq-shell {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      background:
        radial-gradient(circle at top center, rgba(119, 43, 50, 0.22), transparent 48%),
        var(--bg-void);
    }
    .mq-header {
      position: sticky;
      top: 0;
      z-index: 20;
      background: rgba(11, 16, 14, 0.92);
      backdrop-filter: blur(10px);
      border-bottom: 1px solid var(--border-soft);
      padding-top: env(safe-area-inset-top, 0px);
    }
    .mq-header-inner {
      max-width: 960px;
      margin: 0 auto;
      padding: 0.75rem 1rem;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      gap: 0.75rem;
      min-width: 0;
    }
    .mq-brand {
      display: inline-flex;
      align-items: center;
      gap: 0.6rem;
      text-decoration: none;
      font-family: "Noto Serif", serif;
      font-weight: 700;
      font-size: 1.15rem;
      letter-spacing: 0.03em;
      min-height: 44px;
    }
    .mq-brand-seal {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 2rem;
      height: 2rem;
      border-radius: 6px;
      background: var(--accent-cinnabar);
      border: 1px solid var(--border-strong);
      color: #fff5ee;
      font-family: "Ma Shan Zheng", "Noto Serif", serif;
      font-size: 1.1rem;
    }
    .mq-nav {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 0.45rem;
      min-width: 0;
    }
    .mq-nav-link {
      display: inline-flex;
      align-items: center;
      min-height: 44px;
      padding: 0.4rem 0.8rem;
      border-radius: 999px;
      text-decoration: none;
      font-size: 0.9rem;
      color: var(--text-secondary);
      border: 1px solid transparent;
      transition: background-color 180ms ease, border-color 180ms ease, color 180ms ease;
    }
    .mq-nav-link:hover,
    .mq-nav-link.is-active {
      color: var(--text-primary);
      border-color: var(--border-strong);
      background: rgba(119, 43, 50, 0.25);
    }
    .mq-main {
      flex: 1 0 auto;
      width: 100%;
      max-width: 920px;
      margin: 0 auto;
      padding: 1.75rem 1rem 3rem;
      min-width: 0;
    }
    .mq-breadcrumb {
      display: flex;
      flex-wrap: wrap;
      gap: 0.4rem;
      font-size: 0.88rem;
      color: var(--text-muted);
      margin-bottom: 1rem;
    }
    .mq-breadcrumb a {
      color: var(--text-muted);
      text-decoration: none;
    }
    .mq-breadcrumb a:hover {
      text-decoration: underline;
    }
    .mq-hero {
      background: linear-gradient(155deg, rgba(24, 32, 29, 0.96), rgba(16, 22, 19, 0.96));
      border: 1px solid var(--border-soft);
      border-radius: 14px;
      padding: 1.5rem 1.35rem;
      margin-bottom: 1.5rem;
    }
    .mq-badge {
      display: inline-block;
      font-size: 0.78rem;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      color: var(--text-muted);
      border: 1px solid var(--border-soft);
      border-radius: 999px;
      padding: 0.2rem 0.65rem;
      margin-bottom: 0.75rem;
    }
    h1, h2, h3 {
      font-family: "Noto Serif", serif;
      color: var(--text-primary);
      line-height: 1.35;
      margin-top: 0;
    }
    h1 { font-size: clamp(1.45rem, 3vw, 2.05rem); margin-bottom: 0.7rem; }
    h2 { font-size: clamp(1.15rem, 2.2vw, 1.4rem); margin-bottom: 0.6rem; color: #f3e8dd; }
    .mq-lead {
      margin: 0;
      color: var(--text-secondary);
      font-size: 1rem;
    }
    .mq-meta {
      margin-top: 0.85rem;
      font-size: 0.85rem;
      color: var(--text-muted);
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
    }
    .mq-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 1rem;
    }
    .mq-card {
      background: var(--bg-card);
      border: 1px solid var(--border-soft);
      border-radius: 12px;
      padding: 1.2rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 0.9rem;
      min-width: 0;
    }
    .mq-card-title {
      font-size: 1.08rem;
      margin-bottom: 0.45rem;
    }
    .mq-card-desc {
      margin: 0;
      color: var(--text-secondary);
      font-size: 0.94rem;
    }
    .mq-btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-height: 44px;
      padding: 0.55rem 1.05rem;
      border-radius: 999px;
      background: var(--accent-cinnabar);
      border: 1px solid var(--border-strong);
      color: #fff6f0;
      text-decoration: none;
      font-weight: 600;
      font-size: 0.92rem;
      align-self: flex-start;
      transition: transform 160ms ease, background-color 160ms ease;
    }
    .mq-btn:hover {
      background: var(--accent-bright);
      transform: translateY(-1px);
    }
    .mq-btn--ghost {
      background: transparent;
      border-color: var(--border-soft);
      color: var(--text-primary);
    }
    .mq-article {
      background: var(--bg-surface);
      border: 1px solid var(--border-soft);
      border-radius: 14px;
      padding: 1.45rem 1.35rem;
    }
    .mq-article section + section {
      margin-top: 1.5rem;
      padding-top: 1.25rem;
      border-top: 1px solid rgba(214, 154, 136, 0.14);
    }
    .mq-article p {
      margin: 0 0 0.85rem;
      color: var(--text-secondary);
      overflow-wrap: anywhere;
    }
    .mq-article ul {
      margin: 0.4rem 0 0.9rem;
      padding-left: 1.25rem;
      color: var(--text-secondary);
    }
    .mq-article li + li {
      margin-top: 0.4rem;
    }
    .mq-cta-box {
      margin-top: 1.65rem;
      background: linear-gradient(135deg, rgba(119, 43, 50, 0.25), rgba(24, 32, 29, 0.92));
      border: 1px solid var(--border-strong);
      border-radius: 12px;
      padding: 1.25rem;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
    }
    .mq-footer {
      border-top: 1px solid var(--border-soft);
      background: rgba(10, 14, 12, 0.96);
      padding: 1.35rem 1rem calc(1.35rem + env(safe-area-inset-bottom, 0px));
    }
    .mq-footer-inner {
      max-width: 960px;
      margin: 0 auto;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      gap: 0.9rem;
      font-size: 0.86rem;
      color: var(--text-muted);
    }
    .mq-footer-nav {
      display: flex;
      flex-wrap: wrap;
      gap: 0.4rem 0.95rem;
    }
    .mq-footer-link {
      display: inline-flex;
      align-items: center;
      min-height: 44px;
      text-decoration: none;
      color: var(--text-secondary);
    }
    .mq-footer-link:hover {
      color: var(--text-primary);
      text-decoration: underline;
    }
    @media (max-width: 640px) {
      .mq-header-inner { padding: 0.65rem 0.8rem; }
      .mq-nav { width: 100%; justify-content: flex-start; }
      .mq-nav-link { padding: 0.35rem 0.7rem; font-size: 0.86rem; }
      .mq-main { padding: 1.15rem 0.85rem 2.25rem; }
      .mq-hero, .mq-article { padding: 1.15rem 1rem; }
      .mq-grid { grid-template-columns: 1fr; }
    }
  </style>
  <meta name="x-site-base" content="${safeBase}" />${adsenseHeadTag}${jsonLdHtml}
</head>
<body>
  <div class="mq-shell">
    <header class="mq-header">
      <div class="mq-header-inner">
        <a href="/" class="mq-brand">
          <span class="mq-brand-seal" aria-hidden="true">命</span>
          <span>Mệnh Quán</span>
        </a>
        <nav class="mq-nav" aria-label="Điều hướng chính">
          ${headerLinks}
        </nav>
      </div>
    </header>
    <main class="mq-main">
      ${bodyHtml}
    </main>
    <footer class="mq-footer">
      <div class="mq-footer-inner">
        <span>Mệnh Quán — Không gian tra cứu Bát Tự và chiêm nghiệm văn hóa phương Đông</span>
        <nav class="mq-footer-nav" aria-label="Thông tin pháp lý và thư viện">
          ${footerLinks}
        </nav>
      </div>
    </footer>
  </div>
</body>
</html>`;
}

function renderPrivacyPage(baseUrl) {
  const canonicalUrl = `${baseUrl}/quyen-rieng-tu`;
  const bodyHtml = `
    <div class="mq-breadcrumb"><a href="/">Trang chủ</a> <span>/</span> <span>Quyền riêng tư</span></div>
    <section class="mq-hero">
      <span class="mq-badge">Chính sách minh bạch</span>
      <h1>Chính sách Quyền Riêng Tư — Mệnh Quán</h1>
      <p class="mq-lead">Cập nhật lần cuối: 12/11/2026. Mệnh Quán tôn trọng quyền riêng tư và dữ liệu ngày giờ sinh của bạn khi trải nghiệm tra cứu Bát Tự trực tuyến.</p>
    </section>
    <article class="mq-article">
      <section>
        <h2>1. Dữ liệu bạn nhập để lập lá số</h2>
        <p>Khi bạn nhập ngày sinh, giờ sinh, giới tính hoặc tên gọi tùy chọn để xem lá số Bát Tự trên Mệnh Quán, các thông số này chỉ được dùng để tính toán lịch pháp Can Chi, biểu đồ Ngũ Hành, Thập Thần và chu kỳ Đại Vận cho phiên truy cập của bạn.</p>
        <p>Ghi chú cá nhân trong mục Sổ Chiêm Nghiệm được lưu trữ cục bộ ngay trên trình duyệt thiết bị của bạn (LocalStorage) nhằm phục vụ việc tự theo dõi. Bạn có thể xóa bất cứ lúc nào thông qua thao tác xóa dữ liệu trình duyệt.</p>
      </section>
      <section>
        <h2>2. Cookie, nhật ký kỹ thuật và bên thứ ba</h2>
        <p>Hệ thống máy chủ có thể ghi nhận nhật ký kỹ thuật tiêu chuẩn (loại trình duyệt, mã phản hồi HTTP, thời điểm truy cập) nhằm duy trì độ ổn định và ngăn chặn lưu lượng truy cập bất thường.</p>
        <p>Khi nền tảng bật hiển thị quảng cáo từ các đối tác như Google AdSense, các nhà cung cấp bên thứ ba (bao gồm Google) có thể sử dụng cookie hoặc công nghệ định danh tương đương để phân phối quảng cáo phù hợp dựa trên lượt truy cập trang web này hoặc các trang web khác trên Internet.</p>
        <ul>
          <li>Người dùng có thể quản lý hoặc tắt quảng cáo cá nhân hóa thông qua trang Cài đặt quảng cáo của Google (My Ad Center / Ads Settings).</li>
          <li>Bạn cũng có thể cấu hình trình duyệt từ chối hoặc xóa cookie bất cứ lúc nào; các tính năng lập lá số cốt lõi vẫn hoạt động bình thường.</li>
        </ul>
      </section>
      <section>
        <h2>3. Bảo mật và liên hệ</h2>
        <p>Mệnh Quán không bán dữ liệu cá nhân cho bên thứ ba, không yêu cầu cung cấp số căn cước, thông tin ngân hàng hay mật khẩu nhạy cảm để sử dụng chức năng tra cứu.</p>
        <p>Mọi thắc mắc liên quan đến chính sách quyền riêng tư hoặc yêu cầu gỡ bỏ dữ liệu hiển thị, vui lòng gửi email trực tiếp tới <a href="mailto:${CONTACT_EMAIL}">${CONTACT_EMAIL}</a> hoặc xem thêm tại trang <a href="/lien-he">Liên hệ Mệnh Quán</a>.</p>
      </section>
    </article>
  `;
  return renderShell({
    title: 'Chính sách Quyền Riêng Tư | Mệnh Quán',
    description:
      'Chính sách bảo vệ dữ liệu cá nhân, cookie và minh bạch hoạt động quảng cáo trên ứng dụng tra cứu Bát Tự Mệnh Quán.',
    canonicalUrl,
    baseUrl,
    bodyHtml,
    activePath: '/quyen-rieng-tu',
  });
}

function renderTermsPage(baseUrl) {
  const canonicalUrl = `${baseUrl}/dieu-khoan`;
  const bodyHtml = `
    <div class="mq-breadcrumb"><a href="/">Trang chủ</a> <span>/</span> <span>Điều khoản sử dụng</span></div>
    <section class="mq-hero">
      <span class="mq-badge">Quy ước sử dụng</span>
      <h1>Điều Khoản Sử Dụng — Mệnh Quán</h1>
      <p class="mq-lead">Cập nhật lần cuối: 12/11/2026. Vui lòng đọc kỹ phạm vi tham khảo trước khi sử dụng các công cụ và bài viết trên Mệnh Quán.</p>
    </section>
    <article class="mq-article">
      <section>
        <h2>1. Mục đích văn hóa và chiêm nghiệm tự thân</h2>
        <p>Mệnh Quán cung cấp công cụ lập lá số Bát Tự và thư viện bài viết dưới góc độ di sản lịch pháp, triết lý Ngũ Hành phương Đông và chiêm nghiệm tâm lý bản thân. Toàn bộ nội dung mang tính tham khảo, gợi mở góc nhìn và giáo dục văn hóa.</p>
      </section>
      <section>
        <h2>2. Miễn trừ trách nhiệm chuyên môn</h2>
        <p>Các phân tích về Ngũ Hành, Thập Thần, Cách Cục, Đại Vận hay Lưu Niên trên trang web <strong>không phải</strong> là lời khuyên y khoa, chẩn đoán sức khỏe, tư vấn pháp lý hay khuyến nghị đầu tư tài chính. Người dùng hoàn toàn tự chịu trách nhiệm đối với các quyết định trong đời sống, công việc và sức khỏe của mình.</p>
      </section>
      <section>
        <h2>3. Quyền sở hữu trí tuệ và hành vi hợp lệ</h2>
        <ul>
          <li>Giao diện biểu đồ, hệ thống trình bày song ngữ và toàn bộ bài viết biên tập thuộc quyền quản lý nội dung của Mệnh Quán.</li>
          <li>Bạn được phép chia sẻ liên kết bài viết hoặc lưu lá số phục vụ nhu cầu cá nhân phi thương mại khi giữ nguyên nguồn dẫn.</li>
          <li>Nghiêm cấm hành vi khai thác tự động quá tải máy chủ, giả mạo danh nghĩa dịch vụ hoặc sử dụng nội dung trang web vào mục đích gây hiểu nhầm mê tín dị đoan.</li>
        </ul>
      </section>
      <section>
        <h2>4. Cập nhật điều khoản &amp; Liên hệ</h2>
        <p>Mệnh Quán có thể cập nhật điều khoản này định kỳ để phù hợp với tính năng mới và tiêu chuẩn vận hành minh bạch. Tiếp tục sử dụng trang web đồng nghĩa với việc bạn đồng ý với phiên bản mới nhất được đăng tải tại đây.</p>
        <p>Mọi góp ý về nội dung hoặc bản quyền, vui lòng liên hệ qua email <a href="mailto:${CONTACT_EMAIL}">${CONTACT_EMAIL}</a> hoặc trang <a href="/lien-he">Liên hệ</a>.</p>
      </section>
    </article>
  `;
  return renderShell({
    title: 'Điều Khoản Sử Dụng | Mệnh Quán',
    description:
      'Điều khoản sử dụng, phạm vi tham khảo văn hóa và tuyên bố miễn trừ trách nhiệm của hệ thống tra cứu Bát Tự Mệnh Quán.',
    canonicalUrl,
    baseUrl,
    bodyHtml,
    activePath: '/dieu-khoan',
  });
}

function renderContactPage(baseUrl) {
  const canonicalUrl = `${baseUrl}/lien-he`;
  const bodyHtml = `
    <div class="mq-breadcrumb"><a href="/">Trang chủ</a> <span>/</span> <span>Liên hệ</span></div>
    <section class="mq-hero">
      <span class="mq-badge">Kênh phản hồi chính thức</span>
      <h1>Liên Hệ Ban Biên Tập — Mệnh Quán</h1>
      <p class="mq-lead">Mệnh Quán luôn trân trọng mọi góp ý về thuật toán lịch pháp, nội dung Thư viện Bát Tự, trải nghiệm hiển thị trên thiết bị di động hoặc các vấn đề liên quan đến quyền riêng tư.</p>
    </section>
    <article class="mq-article">
      <section>
        <h2>1. Hộp thư tiếp nhận trực tiếp</h2>
        <p>Bạn có thể gửi email trao đổi trực tiếp cho quản trị viên Mệnh Quán tại địa chỉ:</p>
        <p><strong>Email hỗ trợ &amp; bản quyền:</strong> <a href="mailto:${CONTACT_EMAIL}">${CONTACT_EMAIL}</a></p>
        <p>Thời gian phản hồi thông thường từ 24 đến 48 giờ làm việc (giờ Việt Nam, UTC+7).</p>
      </section>
      <section>
        <h2>2. Nội dung tiếp nhận</h2>
        <ul>
          <li>Báo lỗi hiển thị, sai lệch múi giờ lịch sử hoặc đề xuất cải thiện biểu đồ 5 Bản Đồ.</li>
          <li>Đề xuất chủ đề biên tập mới cho chuyên mục <a href="/thu-vien">Thư viện Bát Tự</a>.</li>
          <li>Yêu cầu giải đáp về cookie, chính sách <a href="/quyen-rieng-tu">Quyền riêng tư</a> hoặc <a href="/dieu-khoan">Điều khoản sử dụng</a>.</li>
        </ul>
      </section>
      <section>
        <h2>3. Phạm vi hỗ trợ</h2>
        <p>Mệnh Quán là nền tảng công cụ tra cứu và thư viện tự chiêm nghiệm văn hóa phương Đông hoạt động hoàn toàn trực tuyến. Chúng tôi không nhận xem bói toán cá nhân thu phí, không bán vật phẩm phong thủy và không tư vấn các quyết định y tế hay tài chính.</p>
      </section>
    </article>
  `;
  return renderShell({
    title: 'Liên Hệ & Hỗ Trợ | Mệnh Quán',
    description:
      'Thông tin liên hệ chính thức qua email của ban biên tập và quản trị viên hệ thống tra cứu Bát Tự Mệnh Quán.',
    canonicalUrl,
    baseUrl,
    bodyHtml,
    activePath: '/lien-he',
  });
}

function renderLibraryIndex(baseUrl) {
  const canonicalUrl = `${baseUrl}/thu-vien`;
  const cardsHtml = LIBRARY_ARTICLES.map(
    (article) => `
      <article class="mq-card">
        <div>
          <span class="mq-badge">${escapeHtml(article.category)} · ${escapeHtml(article.readingTime)}</span>
          <h2 class="mq-card-title">${escapeHtml(article.title)}</h2>
          <p class="mq-card-desc">${escapeHtml(article.description)}</p>
        </div>
        <a href="/thu-vien/${escapeHtml(article.slug)}" class="mq-btn">Đọc bài viết</a>
      </article>
    `
  ).join('');

  const bodyHtml = `
    <div class="mq-breadcrumb"><a href="/">Trang chủ</a> <span>/</span> <span>Thư viện Bát Tự</span></div>
    <section class="mq-hero">
      <span class="mq-badge">Kho tri thức gốc · ${LIBRARY_ARTICLES.length} chuyên đề</span>
      <h1>Thư Viện Chiêm Nghiệm &amp; Học Thuật Bát Tự</h1>
      <p class="mq-lead">Tuyển tập ${LIBRARY_ARTICLES.length} bài viết nền tảng giúp bạn hiểu rõ Ngũ Hành, Thập Thần, Cách Cục, Tiết Khí và chu kỳ thời gian bằng ngôn ngữ mạch lạc, điềm tĩnh và thực tế.</p>
    </section>
    <div class="mq-grid">
      ${cardsHtml}
    </div>
    <div class="mq-cta-box">
      <div>
        <h2>Sẵn sàng đối chiếu với lá số của chính bạn?</h2>
        <p class="mq-lead">Nhập ngày giờ sinh dương lịch để xem trọn bộ 5 bản đồ Ngũ Hành, Nhật Chủ và Đại Vận.</p>
      </div>
      <a href="/" class="mq-btn">Lập lá số ngay</a>
    </div>
  `;

  return renderShell({
    title: 'Thư Viện Kiến Thức Bát Tự & Chiêm Nghiệm | Mệnh Quán',
    description:
      'Tuyển tập bài viết giải nghĩa Ngũ Hành, Tứ Trụ, Thập Thần, Cách Cục và chu kỳ Đại Vận dễ hiểu trên Mệnh Quán.',
    canonicalUrl,
    baseUrl,
    bodyHtml,
    activePath: '/thu-vien',
  });
}

function renderLibraryArticle(article, baseUrl) {
  const canonicalUrl = `${baseUrl}/thu-vien/${article.slug}`;
  const sectionsHtml = article.sections
    .map(
      (sec) => `
        <section>
          <h2>${escapeHtml(sec.heading)}</h2>
          ${sec.paragraphs.map((p) => `<p>${escapeHtml(p)}</p>`).join('')}
        </section>
      `
    )
    .join('');

  const related = LIBRARY_ARTICLES.filter((item) => item.slug !== article.slug).slice(0, 2);
  const relatedHtml = related
    .map(
      (item) => `
        <article class="mq-card">
          <div>
            <span class="mq-badge">${escapeHtml(item.category)}</span>
            <h3 class="mq-card-title">${escapeHtml(item.title)}</h3>
            <p class="mq-card-desc">${escapeHtml(item.description)}</p>
          </div>
          <a href="/thu-vien/${escapeHtml(item.slug)}" class="mq-btn mq-btn--ghost">Đọc tiếp</a>
        </article>
      `
    )
    .join('');

  const bodyHtml = `
    <div class="mq-breadcrumb">
      <a href="/">Trang chủ</a> <span>/</span>
      <a href="/thu-vien">Thư viện Bát Tự</a> <span>/</span>
      <span>${escapeHtml(article.category)}</span>
    </div>
    <section class="mq-hero">
      <span class="mq-badge">${escapeHtml(article.category)}</span>
      <h1>${escapeHtml(article.title)}</h1>
      <p class="mq-lead">${escapeHtml(article.description)}</p>
      <div class="mq-meta">
        <span>Thời lượng: ${escapeHtml(article.readingTime)}</span>
        <span>Cập nhật: ${escapeHtml(article.publishedAt)}</span>
      </div>
    </section>
    <article class="mq-article">
      ${sectionsHtml}
    </article>
    <div class="mq-cta-box">
      <div>
        <h2>Đối chiếu trực tiếp trên lá số cá nhân</h2>
        <p class="mq-lead">Quay lại trang lập lá số để quan sát trực quan tỷ lệ Ngũ Hành và các giai đoạn 10 năm.</p>
      </div>
      <a href="/" class="mq-btn">Mở bản đồ Bát Tự</a>
    </div>
    <section style="margin-top: 2rem;">
      <h2>Bài viết liên quan</h2>
      <div class="mq-grid">${relatedHtml}</div>
    </section>
  `;

  const articleSchema = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    datePublished: article.publishedAt,
    dateModified: article.publishedAt,
    author: { '@type': 'Organization', name: 'Mệnh Quán', url: baseUrl },
    publisher: { '@type': 'Organization', name: 'Mệnh Quán', url: baseUrl },
    mainEntityOfPage: canonicalUrl,
  });

  return renderShell({
    title: `${article.title} | Thư viện Mệnh Quán`,
    description: article.description,
    canonicalUrl,
    baseUrl,
    bodyHtml,
    activePath: `/thu-vien/${article.slug}`,
    jsonLdHtml: `\n  <script type="application/ld+json">${articleSchema}</script>`,
  });
}

export function renderEditorialPage(pathname, baseUrl = 'https://darkmagic.onrender.com') {
  const cleanBase = normalizeBaseUrl(baseUrl);
  if (pathname === '/quyen-rieng-tu') {
    return renderPrivacyPage(cleanBase);
  }
  if (pathname === '/dieu-khoan') {
    return renderTermsPage(cleanBase);
  }
  if (pathname === '/lien-he') {
    return renderContactPage(cleanBase);
  }
  if (pathname === '/thu-vien') {
    return renderLibraryIndex(cleanBase);
  }
  if (pathname.startsWith('/thu-vien/')) {
    const slug = pathname.slice('/thu-vien/'.length);
    const article = LIBRARY_ARTICLES.find((item) => item.slug === slug);
    if (article) {
      return renderLibraryArticle(article, cleanBase);
    }
  }
  return null;
}

export function buildRobotsTxt(baseUrl = 'https://darkmagic.onrender.com') {
  const cleanBase = normalizeBaseUrl(baseUrl);
  return [
    'User-agent: *',
    'Allow: /',
    'Disallow: /api/',
    '',
    `Sitemap: ${cleanBase}/sitemap.xml`,
    '',
  ].join('\n');
}

export function buildSitemapXml(baseUrl = 'https://darkmagic.onrender.com') {
  const cleanBase = normalizeBaseUrl(baseUrl);
  const staticUrls = [
    { loc: `${cleanBase}/`, changefreq: 'weekly', priority: '1.0' },
    { loc: `${cleanBase}/thu-vien`, changefreq: 'weekly', priority: '0.9' },
    { loc: `${cleanBase}/ve-menh-quan`, changefreq: 'monthly', priority: '0.7' },
    { loc: `${cleanBase}/co-so-luan-giai`, changefreq: 'monthly', priority: '0.7' },
    { loc: `${cleanBase}/quyen-rieng-tu`, changefreq: 'monthly', priority: '0.5' },
    { loc: `${cleanBase}/dieu-khoan`, changefreq: 'monthly', priority: '0.5' },
    { loc: `${cleanBase}/lien-he`, changefreq: 'monthly', priority: '0.6' },
  ];
  const articleUrls = LIBRARY_ARTICLES.map((article) => ({
    loc: `${cleanBase}/thu-vien/${article.slug}`,
    changefreq: 'monthly',
    priority: '0.8',
    lastmod: article.publishedAt,
  }));

  const entries = [...staticUrls, ...articleUrls]
    .map(
      (entry) => `  <url>
    <loc>${escapeHtml(entry.loc)}</loc>${entry.lastmod ? `\n    <lastmod>${escapeHtml(entry.lastmod)}</lastmod>` : ''}
    <changefreq>${escapeHtml(entry.changefreq)}</changefreq>
    <priority>${escapeHtml(entry.priority)}</priority>
  </url>`
    )
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries}
</urlset>
`;
}

export function buildAdsTxt(config) {
  const adsense = config?.adsense || {};
  const publisherId = String(adsense.publisherId || '').trim().replace(/^ca-/i, '');
  const sellerId = String(adsense.adsTxtSellerId || 'f08c47fec0942fa0').trim();
  if (!adsense.enabled || !publisherId) {
    return '# Google AdSense publisherId is not configured yet.\n';
  }
  return `google.com, ${publisherId}, DIRECT, ${sellerId}\n`;
}
