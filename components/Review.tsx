"use client"

import MarkdownPreview from '@uiw/react-markdown-preview';


const Review = ({
    review,
  }: {
    review: string;
  }) => {
    return (<div className="h-full w-6/12 relative">
        <MarkdownPreview source={review} style={{ fontSize: 20, height: "100vh" }} />
    </div>)
}

export default Review