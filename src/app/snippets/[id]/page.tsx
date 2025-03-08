import prisma from "@/lib/prisma";
import Link from "next/link";
import { Button } from "../../../components/ui/button";
// import {deleteSnippet} from "@/action";
import * as actions from "@/action";
import { notFound } from "next/navigation";
const SnippetDetailspage =async ({params}:{params:Promise<{id:string}>}) => {
    const id = parseInt((await params).id);
    await new Promise((resolve) => setTimeout(resolve, 1000)); 

    const snippet = await prisma.snippet.findUnique({
        where:{
            id,
        }
    });
    if(!snippet){
        return notFound()
    }
    // const deleteSniippetAction = deleteSnippet.bind(null, snippet.id)
    const deleteSniippetAction = actions.deleteSnippet.bind(null, snippet.id)
    return(
    <div >
        <h1 className="text-3xl font-bold">Snippet Details</h1>
        <div className="flex items-center justify-between">
        <p className="text-2xl font-bold">{snippet?.title}</p>
        <div className="flex gap-2">
      <Link href={`/snippets/${snippet?.id}/edit`}>
        <Button className="bg-black text-white flex justify-between   "  >Edit</Button>
      </Link>
      <form action={deleteSniippetAction}>
        <Button className="bg-black text-white flex justify-between   "  >Delete</Button>
      </form>
      </div>  
</div>
    <pre className="rounded bg-gray-200 p-4 mt-5">{snippet?.code}</pre>
    
    </div>)}

export default SnippetDetailspage