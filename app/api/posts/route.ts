// app/api/posts/route.js
import connectToDatabase from '../../../lib/mongoose';
import Post from '../../../models/Post';

export async function GET(req: any) {
  await connectToDatabase();
  try {
    const posts = await Post.find({});
    console.log("This is posts from db: " + posts)
    return new Response(JSON.stringify({ success: true, data: posts }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ success: false }), { status: 400 });
  }
}

export async function POST(req: any) {
  await connectToDatabase();
  const body = await req.json();
  try {
    const post = await Post.create(body);
    return new Response(JSON.stringify({ success: true, data: post }), { status: 201 });
  } catch (error) {
    return new Response(JSON.stringify({ success: false }), { status: 400 });
  }
}
