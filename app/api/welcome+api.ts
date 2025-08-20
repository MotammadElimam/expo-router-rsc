const key = process.env.MOTAMAD_KEY;

export async function GET(request: Request) {
    const name = new URL(request.url).searchParams.get('name');

    return Response.json({
        welcome: `Hello ${name}`
    })
}