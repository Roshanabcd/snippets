"use client";
import { Editor } from "@monaco-editor/react";
import { useState } from "react";
import type { Snippet } from "@prisma/client";
import { Button } from "./button";
import {saveSnippet} from "@/action"
export default function EditSnippetForm({ snippet }: { snippet: Snippet }) {
    const [code, setCode] = useState(snippet.code || "");
    const saveSniippetAction = saveSnippet.bind(null, snippet.id, code)

    return (
        <div>
            <form className="flex  gap-4 justify-between items-center mb-4" action={saveSniippetAction}>
                <h1 className="text-3xl font-bold"> Your Code Editore</h1>
                <Button type="submit" className="bg-black text-white flex items-center justify-between  " >Save</Button>
            </form>
            <Editor className="rounded"
                height="40vh"
                language="javascript"
                theme="vs-dark"
                defaultValue={code}
                onChange={(value) => setCode(value || "")
                    
                    }
            />
        </div>
    );
}