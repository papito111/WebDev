"use client"
import React from "react";
import { useParams } from "next/navigation";
import {posts} from "../../data/posts";
import CommentSection from "@/app/components/CommentSection";
export default function PostPage() {

    const {id} = useParams();

    const post = posts.find((p) => p.id === id);
    if (!post) {

        return <p className="font bold text-4xl">Nie znaleziono danego postu</p>
    }

    return (
        <div className="container mx-auto py-2">
            <div className="bg-white rounded-lg shadow-md p-8">
            <h1 className="text-4xl font-bold text-center">{post.title}</h1>
            <h2 className="text-lg py-2">{post.content}</h2>
            </div>
            <CommentSection />
        </div>
    );
}