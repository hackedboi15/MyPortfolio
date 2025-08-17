export const API_BASE = 'http://localhost:8080/api';

export async function fetchProjects() {
  const res = await fetch(`${API_BASE}/projects`);
  if (!res.ok) throw new Error('Failed to load projects');
  return res.json();
}

export async function sendContact(body: { name: string; email: string; message: string }) {
  const res = await fetch(`${API_BASE}/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  });
  if (!res.ok && res.status !== 202) throw new Error('Failed to send contact');
}
