export function resolve(specifier, context, nextResolve) {
  if (specifier === 'cloudflare:workers') {
    return {
      format: 'module',
      shortCircuit: true,
      url: 'data:text/javascript,export const env = { ACCEPT_NEW_READINGS: "true" };',
    };
  }
  return nextResolve(specifier, context);
}
