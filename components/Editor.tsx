"use client"

import CodeMirror from '@uiw/react-codemirror';

const Editor = () => {
    return (<div className="h-full w-6/12 relative">
        <CodeMirror minHeight='100vh' value='Hello World' onChange={() => {}} theme={'dark'} />
    </div>)
}

export default Editor