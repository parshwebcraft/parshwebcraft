import Link from "next/link";

export const metadata = {
  title: "Careers at ParshWebCraft | Jobs & Internships",
  description:
    "Join ParshWebCraft. Explore job openings, internships, and work on real-world web development and SaaS projects.",
};

const jobs = [
  {
    title: "Frontend Developer (React)",
    type: "Internship",
    location: "Remote / Udaipur",
    status: "Open",
  },
  {
    title: "AWS / Backend Engineer",
    type: "Full-time / Internship",
    location: "Remote / Hybrid",
    status: "Open",
  },
];

const team = [
  {
    name: "Vikesh Mehta",
    role: "Frontend Intern",
    work: "Portfolio Website & UI Improvements",
  },
  {
    name: "Mansi Bisen",
    role: "Social Media Manager",
    work: "Content & Reel Strategy",
  },
  {
    name: "Palak Dwivedi",
    role: "AWS Backend Developer",
    work: "Client Projects Backend AWS Development",
  },
];

export default function CareersPage() {
  return (
    <main className="px-6 lg:px-24 py-20 max-w-6xl mx-auto text-white">
      
      {/* HERO */}
      <section className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold">
          Careers at <span className="text-[#f3d07a]">ParshWebCraft</span>
        </h1>

        <p className="mt-6 text-slate-300">
          Work on real-world projects, build SaaS products, and grow with a
          fast-moving web development team.
        </p>
      </section>

      {/* OPEN POSITIONS */}
      <section className="mt-24">
        <h2 className="text-3xl font-bold text-center">
          Open Positions
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {jobs.map((job, i) => (
            <div
              key={i}
              className="p-6 border border-[#2a2a2a] rounded-xl"
            >
              <h3 className="text-xl font-semibold">{job.title}</h3>

              <p className="text-slate-300 mt-2">
                {job.type} • {job.location}
              </p>

              <span className="inline-block mt-3 text-sm text-green-400">
                {job.status}
              </span>

              <Link
                href="/contact"
                className="block mt-4 text-[#f3d07a] font-medium"
              >
                Apply Now →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* TEAM / INTERNS */}
      <section className="mt-24">
        <h2 className="text-3xl font-bold text-center">
          Our Team & Interns
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {team.map((member, i) => (
            <div
              key={i}
              className="p-6 border border-[#2a2a2a] rounded-xl text-center"
            >
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-[#f3d07a] mt-1">{member.role}</p>
              <p className="text-slate-300 mt-2 text-sm">
                {member.work}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY JOIN */}
      <section className="mt-24">
        <h2 className="text-3xl font-bold text-center">
          Why Join Us?
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-12 text-center">
          <div>
            <h3 className="text-xl font-semibold">Real Projects</h3>
            <p className="text-slate-300 mt-2">
              Work on live client websites and SaaS products.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Fast Growth</h3>
            <p className="text-slate-300 mt-2">
              Learn by building, not just watching tutorials.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Flexible Work</h3>
            <p className="text-slate-300 mt-2">
              Remote-friendly and performance-driven culture.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-24 text-center">
        <h2 className="text-3xl font-bold">
          Want to Work With Us?
        </h2>

        <p className="text-slate-300 mt-4">
          Send your portfolio and let’s build something great together.
        </p>

        <Link
          href="/contact"
          className="inline-block mt-6 px-8 py-3 bg-[#f3d07a] text-black rounded-full font-semibold"
        >
          Apply Now
        </Link>
      </section>

    </main>
  );
}