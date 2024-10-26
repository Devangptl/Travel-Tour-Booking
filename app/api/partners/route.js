export async function GET(req) {
  try {
    // Fetch data from Strapi API
    const response = await fetch('http://localhost:1337/api/partners?populate=*');
    const data = await response.json();

    // Return JSON response
    return new Response(JSON.stringify(data.data), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to fetch data' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}