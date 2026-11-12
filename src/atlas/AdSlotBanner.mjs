import { MONETIZATION_CONFIG } from './monetization-config.mjs';

/**
 * Reusable slot component for Position 1 (betweenReadingAndMaps) and Position 3 (beforeConclusion).
 * Supports 'library', 'affiliate', 'adsense', and 'off' modes defined in monetization-config.mjs.
 */
export function AdSlotBanner({
  React,
  position = 'betweenReadingAndMaps',
  config = MONETIZATION_CONFIG,
}) {
  const h = React.createElement;
  const pushedRef = React.useRef(false);

  const mode = config?.mode || 'off';
  const adsense = config?.adsense || {};
  const slotId = adsense?.slots?.[position] || '';
  const isAdsenseReady =
    mode === 'adsense' && Boolean(adsense.enabled) && Boolean(adsense.publisherId) && Boolean(slotId);

  React.useEffect(() => {
    if (!isAdsenseReady || pushedRef.current) return;
    if (typeof window === 'undefined') return;
    try {
      pushedRef.current = true;
      window.adsbygoogle = window.adsbygoogle || [];
      window.adsbygoogle.push({});
    } catch {
      // Ignore ad-blocker or duplicate-push failures silently to protect chart rendering.
    }
  }, [isAdsenseReady, position, slotId]);

  if (mode === 'off') {
    return null;
  }

  if (mode === 'adsense') {
    if (!isAdsenseReady) {
      return null;
    }
    const format = position === 'betweenReadingAndMaps' ? 'fluid' : 'auto';
    return h(
      'aside',
      {
        className: `atlas-ad-slot atlas-ad-slot--${position}`,
        'data-slot-position': position,
        'aria-label': 'Quảng cáo được tài trợ',
      },
      h('span', { className: 'atlas-ad-slot__label' }, 'Quảng cáo'),
      h(
        'div',
        { className: 'atlas-ad-slot__frame' },
        h('ins', {
          className: 'adsbygoogle',
          style: { display: 'block', width: '100%' },
          'data-ad-client': adsense.publisherId,
          'data-ad-slot': slotId,
          'data-ad-format': format,
          'data-full-width-responsive': 'true',
          ...(format === 'fluid' ? { 'data-ad-layout': 'in-article' } : {}),
        })
      )
    );
  }

  const cardMap = mode === 'affiliate' ? config?.affiliateOffers : config?.librarySuggestions;
  const item = cardMap?.[position];
  if (!item) {
    return null;
  }

  const isExternal = /^https?:\/\//i.test(item.href);

  return h(
    'aside',
    {
      className: `atlas-companion-card atlas-companion-card--${position}`,
      'data-slot-position': position,
      'data-slot-mode': mode,
      'aria-label': item.badge || 'Gợi ý đọc thêm',
    },
    item.imageUrl
      ? h('img', {
          className: 'atlas-companion-card__thumb',
          src: item.imageUrl,
          alt: item.title || 'Ảnh minh họa gợi ý đồng hành',
          loading: 'lazy',
        })
      : null,
    h(
      'div',
      { className: 'atlas-companion-card__body' },
      h('span', { className: 'atlas-companion-card__badge' }, item.badge),
      h('h3', { className: 'atlas-companion-card__title' }, item.title),
      h('p', { className: 'atlas-companion-card__desc' }, item.description)
    ),
    h(
      'a',
      {
        className: 'atlas-companion-card__cta',
        href: item.href,
        ...(item.rel ? { rel: item.rel } : {}),
        ...(isExternal ? { target: '_blank' } : {}),
      },
      item.ctaLabel
    )
  );
}
