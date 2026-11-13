import {
  MONETIZATION_CONFIG,
  shouldLoadMonetagInSession,
  markMonetagSessionLoaded,
} from './monetization-config.mjs';

/**
 * Client-side once-per-session loader for Monetag scripts.
 * Ensures Monetag ad tags execute at most once per browser tab session (sessionStorage),
 * even when the user navigates across /, /thu-vien, /lien-he or reloads pages.
 */
export function bootMonetagSession({
  doc = typeof document !== 'undefined' ? document : null,
  win = typeof window !== 'undefined' ? window : null,
  storage = null,
  config = MONETIZATION_CONFIG,
} = {}) {
  if (!doc || !doc.head || !win) {
    return false;
  }
  if (win.__mqMonetagSessionBooted) {
    return false;
  }

  let activeStorage = storage;
  if (!activeStorage) {
    try {
      activeStorage = win.sessionStorage || null;
    } catch {
      activeStorage = null;
    }
  }

  if (!shouldLoadMonetagInSession(activeStorage, config)) {
    return false;
  }

  const headScripts = Array.isArray(config?.monetag?.headScripts)
    ? config.monetag.headScripts.filter((item) => item && item.src)
    : [];
  if (headScripts.length === 0) {
    return false;
  }

  win.__mqMonetagSessionBooted = true;
  if (config?.monetag?.oncePerSession !== false) {
    markMonetagSessionLoaded(activeStorage, config);
  }

  for (const item of headScripts) {
    const scriptEl = doc.createElement('script');
    scriptEl.src = item.src;
    scriptEl.async = true;
    if (item.zone) {
      scriptEl.setAttribute('data-zone', String(item.zone));
    }
    if (item.cfasync === false) {
      scriptEl.setAttribute('data-cfasync', 'false');
    }
    doc.head.appendChild(scriptEl);
  }

  return true;
}

if (typeof window !== 'undefined' && typeof document !== 'undefined') {
  bootMonetagSession();
}
