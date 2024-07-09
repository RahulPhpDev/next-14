import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">



      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
        <Link href ="/languages" className="text-lg text-center bg-blue-400 text-white  font-bold rounded-md cursor-pointer btn p-2 border border-collapse"> Find Languages 
      </Link>
      </div>  
    </main>
  );
}
