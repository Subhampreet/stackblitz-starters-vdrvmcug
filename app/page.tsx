"use client"

import Editor from '@/components/Editor';
import Review from '@/components/Review';
import { useState } from 'react';

export default function Home() {
  const [review, setReview] = useState("");

  const handleGenerateReview = (code: string) => {  };


  return (
    <div className='flex h-full w-full items-center justify-center overflow-hidden'>
      <Editor       onGenerateReview={handleGenerateReview}
 />
      <Review review={review} />
    </div>
  );
}
