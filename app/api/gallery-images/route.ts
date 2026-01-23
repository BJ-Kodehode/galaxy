import { promises as fs } from 'fs';
import path from 'path';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const galleryDir = path.join(process.cwd(), 'public', 'Gallery');
  let files: string[] = [];
  try {
    files = await fs.readdir(galleryDir);
    files = files.filter(f => /\.(jpg|jpeg|png|gif|webp)$/i.test(f));
  } catch (e) {
    return NextResponse.json(
      { error: 'Could not read gallery folder' },
      { status: 500 }
    );
  }
  return NextResponse.json(
    { images: files },
    { status: 200, headers: { 'Content-Type': 'application/json' } }
  );
}
