import EditSnippetForm from "@/components/ui/EditSnippetForm"
import { prisma } from "@/lib/prisma"

const EditSnippetPage = async ({params}:{params:Promise<{id:string}>}) => {
    const id = parseInt((await params).id);
    const snippet = await prisma.snippet.findUnique({
        where:{
            id,
        }
    })
    return (
        <div>
            <EditSnippetForm />
        </div>
    )
}

export default EditSnippetPage