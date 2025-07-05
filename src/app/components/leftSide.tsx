import React from "react";
import Image from "next/image";
import { Github, Linkedin, Mail, MapPinned, Twitter } from "lucide-react";
import Link from "next/link";

const LeftSide = () => {
  return (
    <aside className="md:h-[90vh] w-full md:w-[30%] h-[90vh]lg:w-[50%] border-1 border-white  rounded-l-2xl md:rounded-l-2xl flex flex-col justify-between">
      <div className="flex flex-col">
        <div className="flex p-8">
          <Image
            className="border-2 rounded-sm border-red-500"
            src="/avatar.png"
            width={80}
            height={80}
            alt="Picture of the author"
          />
          <div className="ml-2">
            <h1 className="text-lg font-semibold">Toukir islam Shovo</h1>
            <strong className="block text-red-500">Full stack developer</strong>
            <p className="text-sm text-gray-400 flex gap-2">
              <MapPinned /> Torino , Italy
            </p>
          </div>
        </div>
        <div className="p-4 text-sm">
          Passionate web developer focused on creating clean, efficient, and
          scalable web applications with a modern tech stack. Specialized in
          Angular, TypeScript, and Supabase, delivering responsive and intuitive
          user interfaces. Even my name includes dev.
        </div>
      </div>

      <div className="p-4 space-y-4">
        <div className="border h-24 w-full p-2 rounded-2xl">
          <strong className="block">npx connect</strong>
          <p className="text-xs">Initializing...</p>
          <p className="text-xs">Ready to connect...</p>
          <p className="text-xs">Waiting for contact request...</p>
        </div>
        <div className="flex justify-evenly text-sm text-white gap-3 ">
          <Link href={"https://x.com/shovodevv"} target="blank">
            <Twitter
              size={32}
              className=" border p-2 rounded hover:p-1 hover:text-red-600"
            />
          </Link>
          <Link
            target="blank"
            href={"https://www.linkedin.com/in/toukir-islam-shovo-5b2576168/"}
          >
            <Linkedin
              size={32}
              className="  border p-2 rounded hover:p-1 hover:text-red-600"
            />
          </Link>
          <Link href={"https://github.com/Shovoodev"} target="blank">
            <Github
              size={32}
              className="  border p-2 rounded hover:p-1 hover:text-red-600"
            />
          </Link>
          <Link href={"www.gmail.com/shovoodev@gmail.com"} target="blank">
            <Mail
              size={32}
              className="  border p-2 rounded hover:p-1 hover:text-red-600"
            />
          </Link>
        </div>
      </div>
    </aside>
  );
};

export default LeftSide;
