// app/api/posts/route.js
import nextCors from 'next-cors';
import connectToDatabase from '../../../lib/mongoose';
import Post from '../../../models/Post';
import cors from '../../../lib/middleware'

connectToDatabase();

export async function GET(req: any) {
   try {
      const posts = await Post.find({});
      const response = new Response(JSON.stringify({ success: true, data: posts }), { status: 200 });
      response.headers.set('Access-Control-Allow-Origin', '*');
      response.headers.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
      response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
      return response;
   } catch (error: any) {
      const response = new Response(JSON.stringify({ success: false, error: error.message }), { status: 400 });
      response.headers.set('Access-Control-Allow-Origin', '*');
      response.headers.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
      response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
      return response;
   }
}


export async function POST(req: any) {
   try {
      const body = await req.json();
      const post = await Post.create(body);
      const response = new Response(JSON.stringify({ success: true, data: post }), { status: 201 });
      response.headers.set('Access-Control-Allow-Origin', '*');
      response.headers.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
      response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
      return response;
   } catch (error: any) {
      const response = new Response(JSON.stringify({ success: false, error: error.message }), { status: 400 });
      response.headers.set('Access-Control-Allow-Origin', '*');
      response.headers.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
      response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
      return response;
   }
}
