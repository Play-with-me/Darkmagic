/**
 * Centralized monetization and editorial companion configuration for Mệnh Quán.
 * Pure browser-safe ESM (no node:* imports) so both server.mjs and AdSlotBanner.mjs can share it.
 *
 * Modes:
 * - 'library': Show editorial reading cards linking to /thu-vien/* (recommended pre-AdSense default)
 * - 'affiliate': Show curated cultural/self-reflection book & journal recommendations (opt-in)
 * - 'adsense': Render Google AdSense display/in-article units when approved & configured
 * - 'off': Hide all monetization & companion banners cleanly
 */
export const MONETIZATION_CONFIG = {
  mode: 'library',
  adsense: {
    enabled: true,
    publisherId: 'ca-pub-1866418681419466',
    adsTxtSellerId: 'f08c47fec0942fa0',
    slots: {
      betweenReadingAndMaps: '',
      beforeConclusion: '',
    },
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
      badge: 'Gợi ý đọc thêm',
      title: 'Sách dẫn nhập Bát Tự & Triết lý Âm Dương Ngũ Hành',
      description:
        'Tổng hợp ấn phẩm văn hóa Á Đông chọn lọc giúp bạn tự đối chiếu các khái niệm cổ điển một cách bài bản.',
      ctaLabel: 'Khám phá kệ sách',
      href: '/thu-vien',
      rel: 'nofollow sponsored noopener noreferrer',
    },
    beforeConclusion: {
      badge: 'Ấn phẩm đồng hành',
      title: 'Sổ tay ghi chép chiêm nghiệm theo mùa & chu kỳ cá nhân',
      description:
        'Phiên bản giấy mỹ thuật tối giản để lưu lại các cột mốc tự quan sát của bản thân qua từng năm.',
      ctaLabel: 'Xem tại Thư viện',
      href: '/thu-vien',
      rel: 'nofollow sponsored noopener noreferrer',
    },
  },
};
