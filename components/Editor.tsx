"use client"

import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { useState } from 'react';

const Editor = ({
    onGenerateReview,
  }: {
    onGenerateReview(code: string): void;
  }) => {

    const [code, setCode] = useState("");


    return (<div className="h-full w-6/12 relative">
        <button
        onClick={onGenerateReview}
        className="w-max absolute bottom-3 right-3 z-50 bg-green-500 p-2 rounded hover:bg-green-700 active:translate-y-1 disabled:opacity-75  disabled:pointer-events-none disabled:cursor-not-allowed"
      >
        Generate Review
      </button>
        <CodeMirror minHeight='100vh'  value={code}
        onChange={setCode} theme={'dark'} extensions={[javascript({ jsx: true })]} 
            style={{
                fontSize: "20px"
            }}
        />
    </div>)
}

export default Editor