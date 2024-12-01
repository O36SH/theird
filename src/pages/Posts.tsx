import React, { useState } from 'react';
import CreatePost from '../components/Posts/CreatePost';
import PostCard from '../components/Posts/PostCard';
import type { Post } from '../types';

const Posts: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([
    {
      id: 1,
      author: {
        id: 1,
        name: 'أحمد محمد',
        avatar: undefined,
      },
      content: 'مرحباً بالجميع في مجتمعنا الجديد! 👋',
      likes: 15,
      comments: 5,
      time: 'منذ ساعة',
      isLiked: false,
    },
    {
      id: 2,
      author: {
        id: 2,
        name: 'سارة أحمد',
        avatar: undefined,
      },
      content: 'شاركوا تجاربكم معنا في قسم التقنية 💻',
      images: [
        'https://images.unsplash.com/photo-1517694712202-14dd9538aa97',
      ],
      likes: 23,
      comments: 8,
      time: 'منذ ساعتين',
      isLiked: true,
    },
  ]);

  const handleCreatePost = (content: string, images: File[]) => {
    // In a real app, you would upload the images to a server
    // and get back the URLs. Here we're creating temporary URLs
    const imageUrls = images.map(image => URL.createObjectURL(image));

    const newPost: Post = {
      id: Date.now(),
      author: {
        id: 123, // Current user ID
        name: 'المستخدم الحالي',
      },
      content,
      images: imageUrls.length > 0 ? imageUrls : undefined,
      likes: 0,
      comments: 0,
      time: 'الآن',
      isLiked: false,
    };

    setPosts([newPost, ...posts]);
  };

  const handleLike = (postId: number) => {
    setPosts(posts.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          likes: post.isLiked ? post.likes - 1 : post.likes + 1,
          isLiked: !post.isLiked,
        };
      }
      return post;
    }));
  };

  const handleComment = (postId: number) => {
    // Handle comment functionality
    console.log('Comment on post:', postId);
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">المنشورات</h1>
      
      <CreatePost onSubmit={handleCreatePost} />
      
      <div className="space-y-4">
        {posts.map((post) => (
          <PostCard
            key={post.id}
            post={post}
            onLike={handleLike}
            onComment={handleComment}
          />
        ))}
      </div>
    </div>
  );
};

export default Posts;