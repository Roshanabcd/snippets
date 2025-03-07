import prisma from "@/lib/prisma";
import Link from "next/link";
import { Button } from "../../../components/ui/button";
const SnippetDetailspage =async ({params}:{params:Promise<{id:string}>}) => {
    const id = parseInt((await params).id);

    const snippet = await prisma.snippet.findUnique({
        where:{
            id,
        }
    });
    if(!snippet){
        return <div>Snippet not found</div>
    }
    return(
    <div >
        <h1 className="text-3xl font-bold">Snippet Details</h1>
        <div className="flex items-center justify-between">
        <p className="text-2xl font-bold">{snippet?.title}</p>
        <div className="flex gap-2">
      <Link href={`/snippets/${snippet?.id}/edit`}>
        <Button className="bg-black text-white flex justify-between   "  >Edit</Button>
      </Link>
        <Button className="bg-black text-white flex justify-between   "  >Delete</Button>
      </div>  
</div>
    <pre className="rounded bg-gray-200 p-4 mt-5">{snippet?.code}</pre>
    
    </div>)}

export default SnippetDetailspage