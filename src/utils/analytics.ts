// ─────────────────────────────────────────────────────────────
// Analytics utility
//
// Thin wrapper around any analytics provider.
// Swap the implementation here without touching any component.
// Currently a no-op — wired at M6 with Vercel Analytics or Umami.
// ─────────────────────────────────────────────────────────────

export type AnalyticsEvent =
  | { name: 'section_view'; properties: { section: string } }
  | { name: 'contact_form_submit'; properties: Record<string, never> }
  | { name: 'resume_download'; properties: Record<string, never> }
  | { name: 'object_interaction'; properties: { object: string } }
  | { name: 'lite_mode_toggle'; properties: { enabled: boolean } };

/**
 * Track a named analytics event.
 * Currently a no-op in development; wired at M6.
 */
export function track(event: AnalyticsEvent): void {
  if (import.meta.env.DEV) {
    // eslint-disable-next-line no-console
    console.warn('[Analytics]', event.name, event.properties);
  }
  // TODO M6: wire to Vercel Analytics or Umami
  // va.track(event.name, event.properties);
}
