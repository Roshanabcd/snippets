"use client"
import { Editor } from "@monaco-editor/react"
export default function EditSnippetForm() {
    return <div>
        <Editor height="40vh" defaultValue={"javascript"} language="javascript" theme="vs-dark" value="some code" />
    </div>
}