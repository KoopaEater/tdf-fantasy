import { db } from '$lib/server/db/db';
import { users } from '$lib/server/db/schema';

export async function GET() {
    const all = db.select().from(users).all();
    return new Response(JSON.stringify(all));
}

export async function POST({ request }) {
    const { name } = await request.json();
    db.insert(users).values({ name }).run();
    return new Response('ok');
}
