'use client';

import React, { useState } from 'react';

type Comment = {
  id: number;
  text: string;
};

export default function CommentSection() {
  const [comments, setComments] = useState<Comment[]>([]);
  const [commentText, setCommentText] = useState('');

  const handleAddComment = () => {
    if (commentText.trim()) {
      setComments([
        ...comments,
        { id: comments.length + 1, text: commentText.trim() },
      ]);
      setCommentText('');
    }
  };

  return (
    <div className="mt-10">
      <h3 className="text-2xl font-semibold mb-4">Komentarze</h3>
      <div className="mb-4">
        <input
          type="text"
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          placeholder="Dodaj komentarz..."
          className="w-full border rounded px-4 py-2 mb-2"
        />
        <button
          onClick={handleAddComment}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Dodaj
        </button>
      </div>
      <ul className="space-y-4">
        {comments.map((comment) => (
          <li key={comment.id} className="bg-gray-300 p-4 rounded">
            id: {comment.id} <br></br> {comment.text}
          </li>
          
        ))}
      </ul>
    </div>
  );
}
