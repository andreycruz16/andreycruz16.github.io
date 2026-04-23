import { useEffect, useState } from "react";

const experienceCards = [
  {
    title: "Cognizant - Backend Engineer (Client: Alaska Airlines)",
    body:
      "As part of my role at Cognizant, I modernized mobile backend services for Alaska Airlines by migrating customer and payment flows from on-prem systems to cloud-native microservices. Implemented Auth0 service-to-service authorization and built Sumo Logic dashboards to improve observability and incident response.",
    chips: ["C#", ".NET Web API", "Microsoft Azure"],
  },
  {
    title: "Cognizant - Full-Stack Engineer (Client: Ally Lending)",
    body:
      "At Cognizant, I delivered production features for Ally Lending across React and .NET services, upgraded legacy front-end dependencies, and supported the Ally Lending to Synchrony rebrand with stable API integrations and shared component updates.",
    chips: ["React", "TypeScript", "Azure DevOps"],
  },
  {
    title: "Infor - Mobile Application Engineer",
    body:
      "Built and maintained mobile application features using React and Apache Cordova, improved offline sync and SQLite reliability, and automated multi-platform build pipelines with Jenkins.",
    chips: ["React", "Apache Cordova", "Jenkins"],
  },
];

const skillCards = [
  {
    title: "Backend & Cloud",
    body:
      "C#, .NET Web API, REST APIs, microservices, Azure App Services, API Management, Front Door, Key Vault, and Application Insights.",
  },
  {
    title: "Frontend & Quality",
    body:
      "React, JavaScript, TypeScript, xUnit, NUnit, Cypress, Selenium, and API validation using Postman, Fiddler, and Proxyman.",
  },
  {
    title: "Delivery & Collaboration",
    body:
      "Azure DevOps, CI/CD pipelines, Docker, Git, Agile/Scrum/SAFe ways of working, technical documentation, and cross-team delivery alignment.",
  },
];

function RevealSection({ as: Tag = "section", className = "", children, ...props }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = document.getElementById(props.id);
    if (!element) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [props.id]);

  return (
    <Tag
      className={`reveal ${visible ? "in" : ""} ${className}`.trim()}
      {...props}
    >
      {children}
    </Tag>
  );
}

function SectionHeader({ title, description }) {
  return (
    <div className="mb-4 flex items-end justify-between gap-4 max-md:block">
      <h2 className="font-['Space_Grotesk'] text-[clamp(1.45rem,2.7vw,2rem)] leading-tight font-bold">
        {title}
      </h2>
      <p className="m-0 text-[var(--muted)]">{description}</p>
    </div>
  );
}

function Card({ title, body, chips }) {
  return (
    <article className="rounded-2xl border border-[var(--line)] bg-[var(--card)] p-4 shadow-[var(--shadow)]">
      <h3 className="font-['Space_Grotesk'] text-[1.08rem] font-bold leading-snug">{title}</h3>
      <p className="mt-[0.7rem] text-[var(--muted)]">{body}</p>
      {chips ? (
        <div className="mt-[0.9rem] flex flex-wrap gap-[0.45rem]">
          {chips.map((chip) => (
            <span
              key={chip}
              className="rounded-full border border-[var(--line)] bg-[rgba(255,255,255,0.8)] px-[0.64rem] py-[0.25rem] text-[0.78rem]"
            >
              {chip}
            </span>
          ))}
        </div>
      ) : null}
    </article>
  );
}

export default function App() {
  const year = new Date().getFullYear();

  return (
    <>
      <header className="sticky top-0 z-20 border-b border-[var(--line)] bg-[rgba(243,239,230,0.82)] backdrop-blur-[10px]">
        <div className="wrap flex items-center justify-between py-4 max-[640px]:items-start max-[640px]:flex-col max-[640px]:gap-2">
          <div className="font-['Space_Grotesk'] text-[0.84rem] font-bold uppercase tracking-[0.08em]">
            Mark Andrey
          </div>
          <nav aria-label="Primary" className="flex gap-4">
            <a className="text-[0.9rem] font-bold text-[var(--ink)] no-underline" href="#work">
              Work
            </a>
            <a className="text-[0.9rem] font-bold text-[var(--ink)] no-underline" href="#skills">
              Skills
            </a>
            <a className="text-[0.9rem] font-bold text-[var(--ink)] no-underline" href="#contact">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main className="wrap">
        <RevealSection
          id="top"
          className="max-w-[780px] py-[clamp(3rem,7vw,6rem)] pb-[clamp(2rem,4vw,3rem)]"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-[#efc4a9] bg-[var(--accent-soft)] px-[0.88rem] py-[0.42rem] text-[0.78rem] font-bold uppercase tracking-[0.08em]">
            Software Engineer | 7+ Years
          </span>
          <h1 className="mt-4 font-['Space_Grotesk'] text-[clamp(1.7rem,4.2vw,3.1rem)] leading-[1.03] font-bold">
            Mark Andrey Dela Cruz
          </h1>
          <p className="mt-[1.1rem] max-w-[62ch] text-[clamp(1.05rem,2.1vw,1.3rem)] text-[var(--muted)]">
            Software Engineer with 7+ years building and modernizing cloud APIs and microservices
            using .NET, Azure, and React.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              className="inline-block rounded-full border border-transparent bg-[linear-gradient(105deg,var(--accent),#f76707)] px-[1.05rem] py-[0.74rem] text-[0.92rem] font-bold text-white no-underline shadow-[0_10px_24px_rgba(217,72,15,0.3)] transition-transform duration-200 ease-[ease] hover:-translate-y-[2px]"
              href="#work"
            >
              Explore Experience
            </a>
            <a
              className="inline-block rounded-full border border-[var(--line)] bg-[rgba(255,255,255,0.75)] px-[1.05rem] py-[0.74rem] text-[0.92rem] font-bold text-[var(--ink)] no-underline transition-transform duration-200 ease-[ease] hover:-translate-y-[2px]"
              href="#contact"
            >
              Contact Me
            </a>
          </div>
        </RevealSection>

        <RevealSection id="work" className="mb-[clamp(2rem,5vw,4rem)]">
          <SectionHeader
            title="Relevant Project Experience"
            description="Key delivery highlights from enterprise programs."
          />
          <div className="grid grid-cols-3 gap-4 max-[880px]:grid-cols-2 max-[640px]:grid-cols-1">
            {experienceCards.map((card) => (
              <Card key={card.title} {...card} />
            ))}
          </div>
        </RevealSection>

        <RevealSection id="skills" className="mb-[clamp(2rem,5vw,4rem)]">
          <SectionHeader title="Skills" description="Core engineering strengths and tooling." />
          <div className="grid grid-cols-3 gap-4 max-[880px]:grid-cols-2 max-[640px]:grid-cols-1">
            {skillCards.map((card) => (
              <Card key={card.title} {...card} />
            ))}
          </div>
        </RevealSection>

        <RevealSection
          id="contact"
          className="contact mb-[clamp(2rem,5vw,4rem)] overflow-hidden rounded-[20px] bg-[#0f172a] px-[clamp(1.2rem,4vw,2rem)] py-[clamp(1.2rem,4vw,2rem)] text-slate-50"
        >
          <h2 className="font-['Space_Grotesk'] text-[clamp(1.45rem,2.7vw,2rem)] leading-tight font-bold">
            Let&apos;s build reliable software together.
          </h2>
          <p className="mt-4 text-[#dbe4ef]">
            Email me at{" "}
            <a className="text-[#ffd8bf]" href="mailto:markandreydelacruz@ymail.com">
              markandreydelacruz@ymail.com
            </a>{" "}
            or connect on{" "}
            <a
              className="text-[#ffd8bf]"
              href="https://www.linkedin.com/in/markandreydelacruz/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            .
          </p>
        </RevealSection>
      </main>

      <footer className="px-0 pb-8 pt-4 text-center text-[rgba(15,23,42,0.8)]">
        {year} Mark Andrey. All rights reserved.
      </footer>
    </>
  );
}
