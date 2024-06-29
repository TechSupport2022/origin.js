// app/api/posts/route.js
import nextCors from 'next-cors';
import connectToDatabase from '../../../lib/mongoose';
import Post from '../../../models/Post';
import cors from '../../../lib/middleware'

connectToDatabase();

export async function GET(req: any) {
   const { searchParams } = new URL(req.url);
   const page = parseInt(searchParams.get('page') || '1');
   const limit = parseInt(searchParams.get('limit') || '5');
   const skip = (page - 1) * limit;



   try {
      const posts = await Post.find({}).skip(skip).limit(limit);
      const totalPosts = await Post.countDocuments();
      const response = new Response(JSON.stringify({
         success: true, data: posts, totalPages: Math.ceil(totalPosts / limit),
         currentPage: page,
      }), { status: 200 });      
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
