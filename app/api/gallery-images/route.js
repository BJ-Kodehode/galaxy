import { promises as fs } from 'fs';
import path from 'path';

export async function GET() {
  const galleryDir = path.join(process.cwd(), 'public', 'Gallery');
  let files = [];
  try {
    files = await fs.readdir(galleryDir);
    files = files.filter(f => /\.(jpg|jpeg|png|gif|webp)$/i.test(f));
  } catch (e) {
    return new Response(JSON.stringify({ error: 'Could not read gallery folder' }), { status: 500 });
  }
  return new Response(JSON.stringify({ images: files }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
