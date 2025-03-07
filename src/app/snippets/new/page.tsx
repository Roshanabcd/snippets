import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";

const SnippetsPage = function () {
  async function createSnippets(FormData: FormData) {
    "use server";
    const title = FormData.get("title") as string;
    const code = FormData.get("code") as string;

    // Validate that title and code are not null or empty
    if (!title || !code) {
      throw new Error("Title and code are required");
    }

    const snippet = await prisma.snippet.create({
      data: {
        title: title,
        code: code,
      },
    });

    console.log("Snippet created:", snippet);

    redirect("/");
  }

  return (
    <div>
      <form action={createSnippets}>
        <div>
          <Label>Title</Label>
          <Input type="text" name="title" id="title" required />
        </div>
        <div>
          <Label>Code</Label>
          <Textarea name="code" id="code" required />
          <Button
            type="submit"
            className="bg-black text-white flex items-center justify-between mt-4"
          >
            New
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SnippetsPage;