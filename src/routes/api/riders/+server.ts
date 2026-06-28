import { db } from '$lib/server/db/db';
import { riders } from '$lib/server/db/schema';

export async function GET() {
    const all = db.select().from(riders).all();
    return new Response(JSON.stringify(all));
}

export async function POST({ request }) {
    const { name, role, youth } = await request.json();
    db.insert(riders).values({ name, role, youth }).run();
    return new Response('ok');
}
