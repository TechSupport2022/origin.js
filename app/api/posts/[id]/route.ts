// app/api/posts/[id]/route.js
import { NextRequest, NextResponse } from 'next/server';
import connectToDatabase from '../../../../lib/mongoose';
import Post from '../../../../models/Post';
import nextCors from 'next-cors';
import cors from '@/lib/middleware';
import { calculateReadingTime, highlightContent } from '@/lib/utils';

connectToDatabase();


export async function GET(req: NextRequest, { params }: { params: { id: string } }) {

   const { id } = params;

   try {
      const post = await Post.findById(id);
      if (!post) {
         const response = new Response(JSON.stringify({ success: false, message: 'Post not found' }), { status: 404 });
         response.headers.set('Access-Control-Allow-Origin', '*');
         response.headers.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
         response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
         return response;
      }
      const readingTime = calculateReadingTime(post.content);
      const highlightedContent = highlightContent(post.content);

      const response = new Response(JSON.stringify({ success: true, data: { ...post.toObject(), readingTime, } }), { status: 200 });
      response.headers.set('Access-Control-Allow-Origin', '*');
      response.headers.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
      response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
      return response;
   } catch (error: any) {
      const response = new Response(JSON.stringify({ success: false, error: error.message }), { status: 500 });
      response.headers.set('Access-Control-Allow-Origin', '*');
      response.headers.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
      response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
      return response;
   }
}

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {

   const { id } = params;
   const body = await req.json();
   try {
      console.log("this is the PUT Body: ",body);
      const updatedPost = await Post.findByIdAndUpdate(id, body, { new: true });
      if (!updatedPost) {
         const response = new Response(JSON.stringify({ success: false, message: 'Post not found' }), { status: 404 });
         response.headers.set('Access-Control-Allow-Origin', '*');
         response.headers.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
         response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
         return response;
      }
      const response = new Response(JSON.stringify({ success: true, data: updatedPost }), { status: 200 });
      response.headers.set('Access-Control-Allow-Origin', '*');
      response.headers.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
      response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
      return response;
   } catch (error: any) {
      const response = new Response(JSON.stringify({ success: false, error: error.message }), { status: 500 });
      response.headers.set('Access-Control-Allow-Origin', '*');
      response.headers.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
      response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
      return response;
   }
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {

   const { id } = params;
   try {
      const deletedPost = await Post.findByIdAndDelete(id);
      if (!deletedPost) {
         const response = new Response(JSON.stringify({ success: false, message: 'Post not found' }), { status: 404 });
         response.headers.set('Access-Control-Allow-Origin', '*');
         response.headers.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
         response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
         return response;
      }
      const response = new Response(JSON.stringify({ success: true, message: 'Post deleted successfully' }), { status: 200 });
      response.headers.set('Access-Control-Allow-Origin', '*');
      response.headers.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
      response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
      return response;
   } catch (error: any) {
      const response = new Response(JSON.stringify({ success: false, error: error.message }), { status: 500 });
      response.headers.set('Access-Control-Allow-Origin', '*');
      response.headers.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
      response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
      return response;
   }
}
