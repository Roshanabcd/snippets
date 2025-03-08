// import Image from "next/image";
import { Button } from "../components/ui/button";
import Link from "next/link";
import { prisma } from "@/lib/prisma";

export default async function Home() {
  const snippets = await prisma.snippet.findMany();
  return (
    <>
      <h1 className="text-3xl font-bold">Home</h1>
      <div className="flex items-center justify-between">
       <h1>Snippets</h1>
      <Link rel="stylesheet" href="/snippets/new" > <Button className="bg-black text-white flex items-center justify-between "  >New</Button></Link>  {/* //work front and back */}
        </div>
        {
          snippets.map((snippets)=>(
            <div key={snippets.id} className="flex items-center justify-between m-4 bg-gray-200 p-4 rounded">
            <h1>{snippets.title}</h1>
            <Link href={`/snippets/${snippets.id}`}><Button className="bg-black text-white flex justify-between   "  >View</Button></Link>
            </div>
          ))
        }
    </>
  );
}
