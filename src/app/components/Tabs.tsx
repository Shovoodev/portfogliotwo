"use client";
import { useState } from "react";
import CodePage from "../contents/codePage";
import Projects from "../contents/projects";
import Readme from "../contents/readme";

export default function Tabs() {
  const [activeTab, setActiveTab] = useState("about.ts");

  return (
    <div className="">
      <div className="flex space-x-4 mb-2 p-1 border rounded-tr-xl">
        <button
          onClick={() => setActiveTab("about.ts")}
          className={
            activeTab === "about.ts"
              ? " border-b-2 border-red-500 font-bold ml-3"
              : "text-white border pt-1 pr-3 pl-3"
          }
        >
          about.ts
        </button>
        <button
          onClick={() => setActiveTab("projects.md")}
          className={
            activeTab === "projects.md"
              ? " border-b-2 border-red-500 font-bold ml-3"
              : "text-white border pt-1 pr-3 pl-3"
          }
        >
          projects.md
        </button>
        <button
          onClick={() => setActiveTab("README.md")}
          className={
            activeTab === "README.md"
              ? " border-b-2 border-red-500 font-bold ml-3"
              : "text-white border pt-1 pr-3 pl-3"
          }
        >
          README.md
        </button>
      </div>

      <div>
        {activeTab === "about.ts" && (
          <div>
            <CodePage />{" "}
          </div>
        )}
        {activeTab === "projects.md" && (
          <div>
            {" "}
            <Projects />{" "}
          </div>
        )}
        {activeTab === "README.md" && (
          <div>
            <Readme />
          </div>
        )}
      </div>
    </div>
  );
}
