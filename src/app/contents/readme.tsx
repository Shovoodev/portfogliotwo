import React from "react";

const Readme = () => {
  return (
    <div className="  flex flex-col text-white p-2">
      <section className="space-y-2">
        <h1 className="text-pink-500 text-2xl md:text-4xl font-bold">
          Lets Build Something Great Together
        </h1>
        <p className="text-sm md:text-base text-white/90 max-w-3xl">
          With over 7 years of experience in full-stack development, I help
          businesses, startups, and individuals build scalable, high-performance
          web applications, automate workflows, and optimize cloud
          infrastructure.
        </p>
      </section>
      <section className="space-y-4">
        <h2 className="text-pink-500 text-xl md:text-2xl font-bold">
          What I Offer
        </h2>
        <ul className="space-y-4">
          {[
            {
              title: "Web & SaaS Development",
              desc: "From idea to production, using modern frameworks and best practices.",
            },
            {
              title: "Automation & Workflow Optimization",
              desc: "Save time and reduce errors with smart automation.",
            },
            {
              title: "Cloud & Serverless Architecture",
              desc: "Scalable, efficient, and cost-effective solutions.",
            },
            {
              title: "Performance & Security Audits",
              desc: "Make your applications faster, more secure, and reliable.",
            },
            {
              title: "Consulting & Mentoring",
              desc: "Get expert guidance on technology decisions, architecture, and best practices.",
            },
          ].map((item, idx) => (
            <li key={idx}>
              <p className="font-semibold text-white">• {item.title}</p>
              <p className="text-white/80 text-sm">{item.desc}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-pink-500 text-xl md:text-2xl font-bold">
          Why Work With Me?
        </h2>
        <ul className="list-disc pl-5 space-y-2 text-white/90 text-sm md:text-base">
          <li>
            Over a decade of hands-on experience across frontend, backend,
            DevOps, and automation.
          </li>
          <li>
            Deep understanding of security, performance, and privacy best
            practices.
          </li>
          <li>
            Passionate about open source, self-hosting, and cloud technologies.
          </li>
          <li>
            Focused on scalable and maintainable solutions tailored to your
            needs.
          </li>
        </ul>
        <hr className="border-white/20 my-4" />
        <p className="text-red-500 text-center text-lg md:text-xl font-semibold">
          If you are looking for a developer, consultant, or technical
          strategist — lets talk!
        </p>
      </section>
    </div>
  );
};

export default Readme;
