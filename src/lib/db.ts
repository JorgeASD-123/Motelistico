import { sql } from "@vercel/postgres";

export async function ensureSchema() {
  await sql`CREATE TABLE IF NOT EXISTS rooms (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    description TEXT,
    price_clp INTEGER NOT NULL DEFAULT 0,
    image_url TEXT
  )`;
}
