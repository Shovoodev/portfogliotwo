import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { monokai } from "react-syntax-highlighter/dist/esm/styles/hljs";

const CodePage = () => {
  const codeString = `interface Developer {
    name: string;
    skills: string[];
    interests: string[];
};

interface TechStack {
    devOps: string[];
    backend: string[];
   frontend: string[];
};

type ContactType = 'github' | 'twitter' | 'linkedIn' | 'email';

const techStack: TechStack = {
    devOps: [
        'GitLab',
        'GitHub',
        'Docker',
    ],
    frontend: [
        'React',
        'React native',
        'JavaScript',
        'TypeScript',
        'TailwindCSS',
        'SCSS',
    ],
    backend: [
        'Node.js',
        'Express',
        'PostgreSQL',
        'MySQL',
    ]
};

// Developer profile
const me: Developer = {
    name: 'Toukir Islam Shovo',
    skills: [
        ...techStack.devOps,
        ...techStack.backend,
        ...techStack.frontend
    ],
    interests: [
        'Open Source',
        'Performance',
        'Self-Hosting',
        'Networking',
    ]
};

// Contact function
const contact = (type: ContactType): string => {
    switch (type) {
        case 'github':
            return 'https://github.com/Shovoodev';
        case 'x':
            return 'https://x.com/shovodevv';
        case 'linkedIn':
            return 'https://www.linkedin.com/in/toukir-islam-shovo-5b2576168/';
        case 'email':
            return 'Shovoodev@gmail.com';
    }
};`;
  return (
    <div className=" p-1 bg-black sm: w-full">
      <div className="overflow-x-auto overflow-y-scroll h-[690px] rounded-2xl">
        <SyntaxHighlighter
          language="javascript"
          style={monokai}
          customStyle={{
            minWidth: "fit-content",
            margin: 0,
            padding: "1rem",
          }}
          showLineNumbers={true}
          // useInlineStyles={false}
        >
          {codeString}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default CodePage;
