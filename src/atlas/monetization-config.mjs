/**
 * Centralized monetization, simple banner, AdSense & Monetag configuration for Mệnh Quán.
 * Pure browser-safe ESM (no node:* imports) so server.mjs, editorial-pages.mjs, AdSlotBanner.mjs,
 * and monetag-session.mjs share a single source of truth.
 *
 * Modes:
 * - 'library': Show editorial reading cards linking to /thu-vien/*
 * - 'affiliate': Show clean static simple banners (sponsored/partner/reading companions)
 * - 'adsense': Render Google AdSense display/in-article units when approved & configured
 * - 'off': Hide all companion banners cleanly
 */
export const ATLAS_ASSET_VERSION = 'atlas20';

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
    oncePerSession: true,
    sessionStorageKey: 'mq_monetag_session_loaded',
    headScripts: [
      { src: 'https://nap5k.com/tag.min.js', zone: '12250663', title: 'Loud tag (In-Page Push)' },
    ],
    cspHosts:
      'https://monetag.com https://*.monetag.com https://nap5k.com https://*.nap5k.com https://my.rtmark.net https://*.rtmark.net https://jhnwr.com https://*.jhnwr.com https://quge5.com https://*.quge5.com https://alwingulla.com https://*.alwingulla.com https://*.highperformanceformat.com',
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

function getValidMonetagScripts(config = MONETIZATION_CONFIG) {
  const monetag = config?.monetag || {};
  if (!monetag.enabled || !Array.isArray(monetag.headScripts)) {
    return [];
  }
  return monetag.headScripts.filter((item) => item && item.src);
}

/**
 * Determine whether Monetag ad scripts should load in the current browser session.
 * Keeps ownership <meta> active across all pages while capping ad script loads to 1 per session.
 */
export function shouldLoadMonetagInSession(storage, config = MONETIZATION_CONFIG) {
  const validScripts = getValidMonetagScripts(config);
  if (validScripts.length === 0) {
    return false;
  }
  const monetag = config?.monetag || {};
  if (monetag.oncePerSession === false) {
    return true;
  }
  const key = monetag.sessionStorageKey || 'mq_monetag_session_loaded';
  try {
    if (!storage || typeof storage.getItem !== 'function') {
      return false;
    }
    return storage.getItem(key) !== '1';
  } catch {
    return false;
  }
}

export function markMonetagSessionLoaded(storage, config = MONETIZATION_CONFIG) {
  const key = config?.monetag?.sessionStorageKey || 'mq_monetag_session_loaded';
  try {
    if (storage && typeof storage.setItem === 'function') {
      storage.setItem(key, '1');
      return true;
    }
  } catch {
    // Ignore storage quota or strict privacy mode errors cleanly.
  }
  return false;
}

function escapeJsSingle(value) {
  return String(value ?? '')
    .replaceAll('\\', '\\\\')
    .replaceAll("'", "\\'")
    .replaceAll('<', '')
    .replaceAll('>', '');
}

/**
 * Build shared AdSense & Monetag <head> tags cleanly without Node dependencies.
 */
export function buildHeadMonetizationTags(
  config = MONETIZATION_CONFIG,
  assetVer = ATLAS_ASSET_VERSION
) {
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

  const validScripts = getValidMonetagScripts(config);
  const storageKey = escapeJsSingle(monetag.sessionStorageKey || 'mq_monetag_session_loaded');
  let scripts = '';
  if (validScripts.length > 0) {
    if (monetag.oncePerSession !== false) {
      scripts = validScripts
        .map((item) => {
          const zoneAssign = item.zone ? `s.dataset.zone='${escapeJsSingle(item.zone)}';` : '';
          const cfAssign = item.cfasync === false ? `s.setAttribute('data-cfasync','false');` : '';
          return `<script>(function(){if(window.__mqMonetagSessionBooted)return;window.__mqMonetagSessionBooted=true;try{if(sessionStorage.getItem('${storageKey}')==='1')return;sessionStorage.setItem('${storageKey}','1');}catch(e){}var s=document.createElement('script');${zoneAssign}s.src='${escapeJsSingle(item.src)}';s.async=true;${cfAssign}(document.head||document.documentElement||document.body).appendChild(s);})();</script>`;
        })
        .join('\n  ');
    } else {
      scripts = validScripts
        .map((item) => {
          const zoneAttr = item.zone ? ` data-zone="${escapeAttr(item.zone)}"` : '';
          const cfAttr = item.cfasync === false ? ' data-cfasync="false"' : '';
          return `<script src="${escapeAttr(item.src)}"${zoneAttr} async${cfAttr}></script>`;
        })
        .join('\n  ');
    }
  }

  const combined = [adsenseTag, monetagMetaTag, scripts].filter(Boolean).join('\n  ');
  return {
    adsenseTag,
    monetagMetaTag,
    monetagScriptsHtml: scripts,
    combinedHeadHtml: combined ? `\n  ${combined}` : '',
    assetVer,
  };
}
