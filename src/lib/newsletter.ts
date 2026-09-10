const NEWSLETTER_ENDPOINT =
  'https://script.google.com/macros/s/AKfycbx5J49lT6vKKlsuaHA7QpR_eqPYg_QMhOr-BIG81DLOTMYoCg_xZzVTjKZwSI_vARkMSA/exec';

// Sent as text/plain so the browser skips a CORS preflight; Apps Script still parses it as JSON.
export async function submitNewsletterEmail(email: string, faction?: string): Promise<void> {
  const response = await fetch(NEWSLETTER_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'text/plain;charset=utf-8' },
    body: JSON.stringify({ email, faction }),
  });

  if (!response.ok) {
    throw new Error(`Newsletter signup failed with status ${response.status}`);
  }

  const data = await response.json();
  if (data.status !== 'success') {
    throw new Error(data.message ?? 'Newsletter signup failed');
  }
}
