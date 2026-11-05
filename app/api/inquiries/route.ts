import { NextResponse } from "next/server";
import { z } from "zod";
import { appendFile, mkdir } from "node:fs/promises";
import path from "node:path";

const schema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(254),
  phone: z.string().trim().min(6).max(30),
  country: z.string().trim().min(2).max(100),
  type: z.string().trim().min(2).max(100),
  contactMethod: z.string().optional(),
  description: z.string().trim().min(10).max(5000),
});

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }
  const parsed = schema.safeParse(body);
  if (!parsed.success) return NextResponse.json({ error: "Invalid inquiry", fields: parsed.error.flatten().fieldErrors }, { status: 400 });
  const reference = `VIP-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).slice(2, 6).toUpperCase()}`;
  const dataDir = path.join(process.cwd(), ".data");
  await mkdir(dataDir, { recursive: true });
  await appendFile(path.join(dataDir, "inquiries.jsonl"), `${JSON.stringify({ reference, createdAt: new Date().toISOString(), ...parsed.data })}\n`);
  return NextResponse.json({ reference });
}
