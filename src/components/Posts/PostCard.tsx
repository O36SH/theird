import React from 'react';
import { Post } from '../../types';
import { HeartIcon, ChatBubbleLeftIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartIconSolid } from '@heroicons/react/24/solid';

interface PostCardProps {
  post: Post;
  onLike: (id: number) => void;
  onComment: (id: number) => void;
}

const PostCard: React.FC<PostCardProps> = ({ post, onLike, onComment }) => {
  return (
    <div className="bg-white rounded-lg shadow p-4 mb-4">
      {/* Header */}
      <div className="flex items-center mb-4">
        <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
          {post.author.avatar ? (
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-500">
              {post.author.name[0]}
            </div>
          )}
        </div>
        <div className="mr-3">
          <h3 className="font-semibold">{post.author.name}</h3>
          <span className="text-sm text-gray-500">{post.time}</span>
        </div>
      </div>

      {/* Content */}
      <p className="text-gray-800 mb-4 whitespace-pre-wrap">{post.content}</p>

      {/* Images */}
      {post.images && post.images.length > 0 && (
        <div className={`grid gap-2 mb-4 ${
          post.images.length === 1 ? 'grid-cols-1' :
          post.images.length === 2 ? 'grid-cols-2' :
          'grid-cols-2'
        }`}>
          {post.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`صورة ${index + 1}`}
              className={`w-full rounded-lg object-cover ${
                post.images!.length === 1 ? 'max-h-96' : 'h-40'
              }`}
            />
          ))}
        </div>
      )}

      {/* Actions */}
      <div className="flex items-center space-x-6">
        <button
          onClick={() => onLike(post.id)}
          className={`flex items-center space-x-2 ${
            post.isLiked ? 'text-red-500' : 'text-gray-500 hover:text-red-500'
          }`}
        >
          {post.isLiked ? (
            <HeartIconSolid className="w-6 h-6" />
          ) : (
            <HeartIcon className="w-6 h-6" />
          )}
          <span>{post.likes}</span>
        </button>

        <button
          onClick={() => onComment(post.id)}
          className="flex items-center space-x-2 text-gray-500 hover:text-blue-500"
        >
          <ChatBubbleLeftIcon className="w-6 h-6" />
          <span>{post.comments}</span>
        </button>
      </div>
    </div>
  );
};

export default PostCard;