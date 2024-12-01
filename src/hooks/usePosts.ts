import { create } from 'zustand';
import type { Post } from '@/types';

interface PostsState {
  posts: Post[];
  addPost: (post: Post) => void;
  likePost: (postId: number) => void;
  unlikePost: (postId: number) => void;
  addComment: (postId: number) => void;
}

export const usePosts = create<PostsState>((set) => ({
  posts: [],
  addPost: (post) =>
    set((state) => ({
      posts: [post, ...state.posts],
    })),
  likePost: (postId) =>
    set((state) => ({
      posts: state.posts.map((post) =>
        post.id === postId
          ? { ...post, likes: post.likes + 1 }
          : post
      ),
    })),
  unlikePost: (postId) =>
    set((state) => ({
      posts: state.posts.map((post) =>
        post.id === postId
          ? { ...post, likes: post.likes - 1 }
          : post
      ),
    })),
  addComment: (postId) =>
    set((state) => ({
      posts: state.posts.map((post) =>
        post.id === postId
          ? { ...post, comments: post.comments + 1 }
          : post
      ),
    })),
}));