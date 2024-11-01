'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { posts } from './data/posts';

const POSTS_PER_PAGE = 9;

export default function HomePage() {
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const selectedPosts = posts.slice(startIndex, startIndex + POSTS_PER_PAGE);

  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);

  return (
    <div className="container mx-auto py-10">
      <h2 className="text-4xl font-bold text-center mb-10">Witaj na My Blog</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {selectedPosts.map((post) => (
          <div key={post.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <Link href={`/posts/${post.id}`} className="text-2xl font-semibold text-blue-600 hover:underline">
              {post.title}
            </Link>
            <p className="text-gray-700 mt-4">
              {post.content.substring(0, 60)}...
            </p>
            <Link href={`/posts/${post.id}`} className="text-blue-500 mt-4 block hover:underline">
              Czytaj więcej 
            </Link>
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-center space-x-4">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
        >
          Poprzednia
        </button>
        <span className="font-semibold">{currentPage} z {totalPages}</span>
        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
        >
          Następna
        </button>
      </div>
    </div>
  );
}
