
 // api.ts

import { IPost } from './interfaces';

const API_URL = '/api/posts/[]'; // Replace with your actual API URL

export const fetchPostById = async (postId: string): Promise<IPost | null> => {
  try {
    const response = await fetch(`${API_URL}/${postId}`);
    if (!response.ok) {
      throw new Error('Failed to fetch post');
    }
    const postData: IPost = await response.json();
    return postData;
  } catch (error) {
    console.error('Error fetching post:', error);
    return null;
  }
};
