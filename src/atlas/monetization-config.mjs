/**
 * Centralized monetization, simple banner, AdSense & Monetag configuration for Mệnh Quán.
 * Pure browser-safe ESM (no node:* imports) so server.mjs, editorial-pages.mjs, and AdSlotBanner.mjs share it.
 *
 * Modes:
 * - 'library': Show editorial reading cards linking to /thu-vien/*
 * - 'affiliate': Show clean static simple banners (sponsored/partner/reading companions)
 * - 'adsense': Render Google AdSense display/in-article units when approved & configured
 * - 'off': Hide all companion banners cleanly
 */
export const MONETIZATION_CONFIG = {
  mode: 'affiliate',
  adsense: {
    enabled: true,
    publisherId: 'ca-pub-1866418681419466',
    adsTxtSellerId: 'f08c47fec0942fa0',
    slots: {
      betweenReadingAndMaps: '',
      beforeConclusion: '',
    },
  },
  monetag: {
    enabled: true,
    siteId: '3574571',
    metaVerificationContent: '17f2098708859e12049841afd66178ac',
    swFileContent: '',
    headScripts: [],
    cspHosts:
      'https://*.monetag.com https://quge5.com https://*.quge5.com https://*.alwingulla.com https://*.nap5k.com https://*.highperformanceformat.com',
  },
  librarySuggestions: {
    betweenReadingAndMaps: {
      badge: 'Thư viện Bát Tự',
      title: 'Hiểu sâu Ngũ Hành & Cách Cục trong lá số',
      description:
        'Khám phá ý nghĩa cân bằng ngũ hành và vai trò của Nhật Chủ như một lăng kính chiêm nghiệm nhịp sống.',
      ctaLabel: 'Đọc bài giải nghĩa',
      href: '/thu-vien/ngu-hanh-trong-bat-tu',
    },
    beforeConclusion: {
      badge: 'Sổ tay chiêm nghiệm',
      title: 'Đại Vận 10 năm & Lưu Niên: Đọc chu kỳ như một bản đồ thời tiết',
      description:
        'Tìm hiểu cách nhìn nhận từng giai đoạn cuộc đời một cách điềm tĩnh, chủ động và không phụ thuộc phán quyết cứng nhắc.',
      ctaLabel: 'Xem cẩm nang chu kỳ',
      href: '/thu-vien/dai-van-luu-nien',
    },
  },
  affiliateOffers: {
    betweenReadingAndMaps: {
      badge: 'Gợi ý đồng hành · Tài trợ',
      title: 'Tài liệu & Ấn phẩm nền tảng Bát Tự – Ngũ Hành',
      description:
        'Tổng hợp sách dẫn nhập Âm Dương Ngũ Hành và các bài giải nghĩa thực tế giúp bạn tự đối chiếu lá số bài bản hơn.',
      ctaLabel: 'Khám phá tại Thư viện',
      href: '/thu-vien',
      rel: 'nofollow sponsored noopener noreferrer',
      imageUrl: '',
    },
    beforeConclusion: {
      badge: 'Banner đơn giản · Hợp tác',
      title: 'Sổ tay chiêm nghiệm & Khung đối tác đồng hành',
      description:
        'Vị trí dành cho liên kết Affiliate (Shopee/Tiki/Fahasa), ấn phẩm văn hóa Á Đông hoặc đối tác phù hợp tinh thần Mệnh Quán.',
      ctaLabel: 'Liên hệ đặt banner',
      href: '/lien-he',
      rel: 'nofollow sponsored noopener noreferrer',
      imageUrl: '',
    },
    editorialBanner: {
      badge: 'Gợi ý đồng hành · Tài trợ',
      title: 'Ấn phẩm văn hóa & Hợp tác đặt banner tinh gọn',
      description:
        'Mệnh Quán chỉ tiếp nhận các banner tĩnh gọn, sách tham khảo và dịch vụ phù hợp không gian tự chiêm nghiệm trên máy tính và di động.',
      ctaLabel: 'Trao đổi hợp tác',
      href: '/lien-he',
      rel: 'nofollow sponsored noopener noreferrer',
      imageUrl: '',
    },
  },
};

function escapeAttr(value) {
  return String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;');
}

/**
 * Build shared AdSense & Monetag <head> tags cleanly without Node dependencies.
 */
export function buildHeadMonetizationTags(config = MONETIZATION_CONFIG) {
  const adsense = config?.adsense || {};
  const adsenseTag =
    adsense.enabled && adsense.publisherId
      ? `<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${encodeURIComponent(
          adsense.publisherId
        )}" crossorigin="anonymous"></script>`
      : '';

  const monetag = config?.monetag || {};
  const monetagMetaTag =
    monetag.enabled && monetag.metaVerificationContent
      ? `<meta name="monetag" content="${escapeAttr(monetag.metaVerificationContent)}" />`
      : '';

  const scripts =
    monetag.enabled && Array.isArray(monetag.headScripts)
      ? monetag.headScripts
          .filter((item) => item && item.src)
          .map((item) => {
            const zoneAttr = item.zone ? ` data-zone="${escapeAttr(item.zone)}"` : '';
            const cfAttr = item.cfasync === false ? ' data-cfasync="false"' : '';
            return `<script src="${escapeAttr(item.src)}"${zoneAttr} async${cfAttr}></script>`;
          })
          .join('\n')
      : '';

  const combined = [adsenseTag, monetagMetaTag, scripts].filter(Boolean).join('\n  ');
  return {
    adsenseTag,
    monetagMetaTag,
    monetagScriptsHtml: scripts,
    combinedHeadHtml: combined ? `\n  ${combined}` : '',
  };
}
