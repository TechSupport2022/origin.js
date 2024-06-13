// app/api/posts/[id]/route.js
import { NextRequest } from 'next/server';
import connectToDatabase from '../../../../lib/mongoose';
import Post from '../../../../models/Post';

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
   await connectToDatabase();
   const { id } = params;
   try {
      const post = await Post.findById(id);
      if (!post) {
         return new Response(JSON.stringify({ success: false }), { status: 404 });
      }
      return new Response(JSON.stringify({ success: true, data: post }), { status: 200 });
   } catch (error) {
      return new Response(JSON.stringify({ success: false }), { status: 400 });
   }
}

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
   await connectToDatabase();
   const { id } = params;
   const body = await req.json();
   try {
      const post = await Post.findByIdAndUpdate(id, body, { new: true, runValidators: true });
      if (!post) {
         return new Response(JSON.stringify({ success: false }), { status: 404 });
      }
      return new Response(JSON.stringify({ success: true, data: post }), { status: 200 });
   } catch (error) {
      return new Response(JSON.stringify({ success: false }), { status: 400 });
   }
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
   await connectToDatabase();
   const { id } = params;
   try {
      const deletedPost = await Post.deleteOne({ _id: id });
      if (!deletedPost) {
         return new Response(JSON.stringify({ success: false }), { status: 404 });
      }
      return new Response(JSON.stringify({ success: true, data: {} }), { status: 200 });
   } catch (error) {
      return new Response(JSON.stringify({ success: false }), { status: 400 });
   }
}
