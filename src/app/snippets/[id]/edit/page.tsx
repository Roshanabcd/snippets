import EditSnippetForm from "@/components/ui/EditSnippetForm"
import { prisma } from "@/lib/prisma"

const EditSnippetPage = async ({params}:{params:Promise<{id:string}>}) => {
    const id = parseInt((await params).id);
    const snippet = await prisma.snippet.findUnique({
        where:{
            id,
        }
    })
    if(!snippet){
        return <div>Snippet not found</div>
    }
    return (
        <div>
            <EditSnippetForm snippet={snippet} />
        </div>
    )
}

export default EditSnippetPage