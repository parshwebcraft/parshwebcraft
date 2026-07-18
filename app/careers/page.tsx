"use client";

import { useState, useEffect } from "react";
import { getSupabaseClient } from "@/lib/supabase/client";
import { formatIST } from "@/lib/formatDate";
import { motion, AnimatePresence } from "framer-motion";
import { Eyebrow } from "@/components/SeoSections";

type Job = {
  id: string;
  job_id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  description: string;
  requirements: string[];
  benefits: string[];
};

type Application = {
  id: string;
  title: string;
  department: string;
  job_code: string;
  status: string;
  created_at: string;
};

export default function CareersPage() {
  const supabase = getSupabaseClient();

  // Job data states
  const [jobs, setJobs] = useState<Job[]>([]);
  const [filteredJobs, setFilteredJobs] = useState<Job[]>([]);
  const [selectedDept, setSelectedDept] = useState("All");
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

  // Authentication states
  const [user, setUser] = useState<any>(null);
  const [authEmail, setAuthEmail] = useState("");
  const [authLoading, setAuthLoading] = useState(false);
  const [authSuccess, setAuthSuccess] = useState(false);

  // Application form states
  const [formOpen, setFormOpen] = useState(false);
  const [candidateName, setCandidateName] = useState("");
  const [candidatePhone, setCandidatePhone] = useState("");
  const [portfolioUrl, setPortfolioUrl] = useState("");
  const [linkedinUrl, setLinkedinUrl] = useState("");
  const [githubUrl, setGithubUrl] = useState("");
  const [coverLetter, setCoverLetter] = useState("");
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [resumeLink, setResumeLink] = useState("");
  const [uploadMode, setUploadMode] = useState<"file" | "link">("file");

  const [formLoading, setFormLoading] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);
  const [formError, setFormError] = useState("");

  // Candidate applications dashboard states
  const [myApplications, setMyApplications] = useState<Application[]>([]);
  const [dashboardLoading, setDashboardLoading] = useState(false);

  // Load jobs and session
  useEffect(() => {
    async function loadJobs() {
      try {
        const res = await fetch("/api/careers/jobs");
        const data = await res.json();
        setJobs(data);
        setFilteredJobs(data);
      } catch (err) {
        console.error("Failed to load jobs", err);
      }
    }
    loadJobs();

    if (supabase) {
      supabase.auth.getSession().then(({ data: { session } }) => {
        setUser(session?.user ?? null);
      });
      const {
        data: { subscription },
      } = supabase.auth.onAuthStateChange((_event, session) => {
        setUser(session?.user ?? null);
      });
      return () => subscription.unsubscribe();
    }
  }, [supabase]);

  // Load applications when user changes
  useEffect(() => {
    if (user) {
      loadMyApplications();
    } else {
      setMyApplications([]);
    }
  }, [user]);

  async function loadMyApplications() {
    setDashboardLoading(true);
    try {
      const res = await fetch("/api/careers/applications");
      const data = await res.json();
      if (Array.isArray(data)) {
        setMyApplications(data);
      }
    } catch (err) {
      console.error("Failed to load applications:", err);
    } finally {
      setDashboardLoading(false);
    }
  }

  // Filter jobs
  useEffect(() => {
    if (selectedDept === "All") {
      setFilteredJobs(jobs);
    } else {
      setFilteredJobs(jobs.filter((j) => j.department === selectedDept));
    }
  }, [selectedDept, jobs]);

  // Magic link login trigger
  async function handleMagicLink(e: React.FormEvent) {
    e.preventDefault();
    if (!authEmail || !supabase) return;
    setAuthLoading(true);
    setFormError("");

    try {
      const { error } = await supabase.auth.signInWithOtp({
        email: authEmail.trim().toLowerCase(),
        options: {
          emailRedirectTo: `${window.location.origin}/careers`,
        },
      });

      if (error) {
        setFormError(error.message);
      } else {
        setAuthSuccess(true);
      }
    } catch (err: any) {
      setFormError(err?.message ?? "An error occurred.");
    } finally {
      setAuthLoading(false);
    }
  }

  // Application submission trigger
  async function handleApply(e: React.FormEvent) {
    e.preventDefault();
    if (!user || !selectedJob) return;

    setFormLoading(true);
    setFormError("");

    let finalResumeUrl = resumeLink.trim();

    // Handle file upload to Supabase Storage if configured
    if (uploadMode === "file" && resumeFile && supabase) {
      try {
        const fileExt = resumeFile.name.split(".").pop();
        const fileName = `${user.id}/${Date.now()}-resume.${fileExt}`;

        // Upload to private bucket "resumes"
        const { data, error: uploadError } = await supabase.storage
          .from("resumes")
          .upload(fileName, resumeFile, {
            cacheControl: "3600",
            upsert: false,
          });

        if (uploadError) {
          throw new Error(
            "Supabase Storage 'resumes' bucket is missing or permissions are blocked. Please use the 'Paste Resume Link' tab below to submit your resume link instead."
          );
        }

        // Get public URL or path reference
        const { data: urlData } = supabase.storage.from("resumes").getPublicUrl(fileName);
        finalResumeUrl = urlData.publicUrl;
      } catch (err: any) {
        setFormError(err?.message ?? "Failed to upload resume.");
        setFormLoading(false);
        return;
      }
    }

    if (!finalResumeUrl) {
      setFormError("Please upload a resume file or paste a sharing link.");
      setFormLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/careers/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          jobId: selectedJob.job_id,
          jobTitle: selectedJob.title,
          name: candidateName,
          phone: candidatePhone,
          portfolioUrl,
          linkedinUrl,
          githubUrl,
          message: coverLetter,
          resumeUrl: finalResumeUrl,
        }),
      });

      const data = await res.json();
      if (data.error) {
        setFormError(data.error);
      } else {
        setFormSuccess(true);
        loadMyApplications();
        // Clear fields
        setCandidateName("");
        setCandidatePhone("");
        setPortfolioUrl("");
        setLinkedinUrl("");
        setGithubUrl("");
        setCoverLetter("");
        setResumeFile(null);
        setResumeLink("");
      }
    } catch (err: any) {
      setFormError("Submission failed. Please check connection and try again.");
    } finally {
      setFormLoading(false);
    }
  }

  async function handleLogout() {
    if (supabase) {
      await supabase.auth.signOut();
      setUser(null);
    }
  }

  const deptList = ["All", "Development", "Design", "Marketing"];

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "new":
        return "bg-blue-500/10 text-blue-300 border-blue-500/20";
      case "reviewing":
        return "bg-amber-500/10 text-amber-300 border-amber-500/20";
      case "interview":
        return "bg-emerald-500/10 text-emerald-300 border-emerald-500/20";
      case "rejected":
        return "bg-red-500/10 text-red-300 border-red-500/20";
      case "hired":
        return "bg-purple-500/10 text-purple-300 border-purple-500/20";
      default:
        return "bg-slate-500/10 text-slate-300 border-slate-500/20";
    }
  };

  return (
    <main className="min-h-screen bg-[#050414] text-white px-6 lg:px-24 pt-28 pb-16">
      {/* 1. HERO SECTION */}
      <section className="text-center max-w-4xl mx-auto mb-16">
        <Eyebrow>Join Our Team</Eyebrow>
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mt-4 tracking-tight">
          Build the Future of Web & Brand Experience
        </h1>
        <p className="text-lg text-slate-300 mt-6 leading-relaxed">
          We don't build slow, bloated template sites. We write cutting-edge Next.js apps, headless
          architectures, custom SaaS products, and run organic digital campaigns. Check out our open roles.
        </p>
      </section>

      {/* 2. AUTHENTICATED CANDIDATE DASHBOARD */}
      {user && (
        <section className="max-w-5xl mx-auto mb-12 bg-white/[0.02] border border-white/10 rounded-2xl p-6 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4">
            <button
              onClick={handleLogout}
              className="text-xs text-slate-400 hover:text-red-400 transition"
            >
              Sign Out
            </button>
          </div>
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
            Candidate Dashboard
          </h2>
          <p className="text-xs text-slate-400 mt-1">Logged in as: {user.email}</p>

          <div className="mt-6 border-t border-white/5 pt-6">
            <h3 className="text-sm font-semibold text-slate-300 mb-4">Your Active Applications</h3>
            {dashboardLoading ? (
              <div className="flex items-center gap-3 text-xs text-slate-400">
                <span className="h-4 w-4 rounded-full border-2 border-[#f3d07a] border-t-transparent animate-spin" />
                Updating application status...
              </div>
            ) : myApplications.length === 0 ? (
              <p className="text-xs text-slate-500 italic">You haven't submitted any applications yet. Select a role below to apply.</p>
            ) : (
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {myApplications.map((app) => (
                  <div
                    key={app.id}
                    className="p-4 rounded-xl bg-black/40 border border-white/5 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex justify-between items-start gap-2">
                        <h4 className="text-sm font-bold text-white leading-tight">{app.title}</h4>
                        <span className="text-[10px] text-slate-500 font-mono">{app.job_code}</span>
                      </div>
                      <p className="text-xs text-slate-400 mt-1">{app.department}</p>
                    </div>

                    <div className="flex justify-between items-center mt-4">
                      <span className={`text-[10px] uppercase font-bold border rounded-full px-2.5 py-0.5 ${getStatusColor(app.status)}`}>
                        {app.status}
                      </span>
                      <span className="text-[10px] text-slate-500">{formatIST(app.created_at)}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* 3. FILTER BAR */}
      <section className="max-w-5xl mx-auto mb-10 flex flex-wrap justify-between items-center gap-4 border-b border-white/10 pb-6">
        <div className="flex gap-2">
          {deptList.map((dept) => (
            <button
              key={dept}
              onClick={() => {
                setSelectedDept(dept);
                setSelectedJob(null);
              }}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold border transition ${
                selectedDept === dept
                  ? "bg-[#f3d07a] border-[#f3d07a] text-black"
                  : "border-white/15 text-slate-300 hover:border-white/30"
              }`}
            >
              {dept}
            </button>
          ))}
        </div>
        <p className="text-xs text-slate-400">
          Showing <span className="font-bold text-[#f3d07a]">{filteredJobs.length}</span> positions
        </p>
      </section>

      {/* 4. JOB LISTINGS GRID */}
      <section className="max-w-5xl mx-auto grid gap-6 md:grid-cols-2">
        <div className="space-y-4">
          {filteredJobs.map((job) => (
            <div
              key={job.id}
              onClick={() => setSelectedJob(job)}
              className={`p-6 rounded-2xl cursor-pointer border transition hover:bg-white/[0.03] ${
                selectedJob?.id === job.id
                  ? "bg-white/[0.04] border-[#f3d07a]/50 shadow-lg shadow-[#f3d07a]/5"
                  : "bg-white/[0.01] border-white/5"
              }`}
            >
              <div className="flex justify-between items-start gap-4">
                <div>
                  <span className="text-[10px] uppercase font-bold text-[#f3d07a] tracking-wider font-mono">
                    {job.department}
                  </span>
                  <h3 className="text-lg font-bold text-white mt-1">{job.title}</h3>
                </div>
                <span className="text-[10px] text-slate-500 font-mono">{job.job_id}</span>
              </div>

              <div className="flex flex-wrap gap-4 mt-4 text-xs text-slate-400">
                <span className="flex items-center gap-1">📍 {job.location}</span>
                <span className="flex items-center gap-1">💼 {job.type}</span>
                <span className="flex items-center gap-1">🎓 {job.experience}</span>
              </div>
            </div>
          ))}
        </div>

        {/* 5. JOB DETAIL & APPLICATION COLUMN */}
        <div className="h-full">
          <AnimatePresence mode="wait">
            {selectedJob ? (
              <motion.div
                key={selectedJob.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="bg-white/[0.02] border border-white/10 rounded-2xl p-6 sticky top-24 shadow-xl"
              >
                <div className="flex justify-between items-start gap-4 border-b border-white/5 pb-4">
                  <div>
                    <span className="text-xs uppercase font-bold text-[#f3d07a] font-mono">
                      {selectedJob.department}
                    </span>
                    <h2 className="text-2xl font-bold text-white mt-1">{selectedJob.title}</h2>
                    <div className="flex gap-4 mt-2 text-xs text-slate-400">
                      <span>📍 {selectedJob.location}</span>
                      <span>💼 {selectedJob.type}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-5 space-y-6 max-h-[40vh] overflow-y-auto pr-2 custom-scrollbar">
                  <div>
                    <h4 className="text-sm font-semibold text-slate-300">About the Role</h4>
                    <p className="text-xs text-slate-400 leading-relaxed mt-2">{selectedJob.description}</p>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-slate-300">Core Requirements</h4>
                    <ul className="list-disc list-inside text-xs text-slate-400 space-y-1.5 mt-2">
                      {selectedJob.requirements.map((req, idx) => (
                        <li key={idx}>{req}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-slate-300">Perks & Benefits</h4>
                    <ul className="list-disc list-inside text-xs text-slate-400 space-y-1.5 mt-2">
                      {selectedJob.benefits.map((benefit, idx) => (
                        <li key={idx}>{benefit}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 border-t border-white/5 pt-6 flex flex-col gap-4">
                  {user ? (
                    <button
                      onClick={() => {
                        setFormOpen(true);
                        setFormSuccess(false);
                        setFormError("");
                      }}
                      className="w-full bg-[#f3d07a] text-black font-semibold py-3 rounded-xl hover:brightness-95 transition text-sm flex items-center justify-center gap-2"
                    >
                      🚀 Apply for This Role
                    </button>
                  ) : (
                    <div className="bg-black/40 border border-white/5 rounded-xl p-4 text-center">
                      <p className="text-xs text-slate-300">Authentication is required to apply.</p>
                      <button
                        onClick={() => {
                          setFormOpen(true);
                          setAuthSuccess(false);
                          setFormError("");
                        }}
                        className="mt-3 inline-flex bg-[#f3d07a] text-black font-semibold px-6 py-2 rounded-lg hover:brightness-95 transition text-xs"
                      >
                        🔑 Sign In to Apply
                      </button>
                    </div>
                  )}
                </div>
              </motion.div>
            ) : (
              <div className="h-full min-h-[300px] border border-dashed border-white/10 rounded-2xl flex flex-col items-center justify-center text-center p-6 text-slate-500 bg-white/[0.005]">
                <svg className="w-12 h-12 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <p className="text-xs">Select a position from the left to view job descriptions, requirements, and to start your application.</p>
              </div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* 6. APPLICATION & AUTH MODAL DIALOG */}
      <AnimatePresence>
        {formOpen && selectedJob && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setFormOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-lg bg-[#0b1220] border border-white/10 rounded-2xl p-6 md:p-8 shadow-2xl overflow-y-auto max-h-[85vh] custom-scrollbar"
            >
              {/* Close Button */}
              <button
                onClick={() => setFormOpen(false)}
                className="absolute top-4 right-4 text-slate-500 hover:text-white transition"
              >
                ✕
              </button>

              {/* A. AUTH LOGIN SCREEN */}
              {!user ? (
                <div>
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    🔑 Verify Candidate Account
                  </h3>
                  <p className="text-xs text-slate-400 mt-2">
                    Enter your email to receive a passwordless **Magic Link**. Signing in allows you to submit applications and track their hiring statuses.
                  </p>

                  {authSuccess ? (
                    <div className="mt-6 rounded-xl bg-emerald-500/10 border border-emerald-500/20 p-5 text-center">
                      <p className="text-sm font-semibold text-emerald-300">📬 Magic Link Dispatched!</p>
                      <p className="text-xs text-slate-400 mt-2">
                        We sent a secure sign-in link to <b>{authEmail}</b>. Please open your inbox and click the link to continue your application.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleMagicLink} className="space-y-4 mt-6">
                      {formError && (
                        <div className="rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 px-4 py-2.5 text-xs text-center">
                          {formError}
                        </div>
                      )}
                      <div>
                        <label className="block text-xs font-medium text-slate-400 mb-1.5">Email Address</label>
                        <input
                          type="email"
                          required
                          value={authEmail}
                          onChange={(e) => setAuthEmail(e.target.value)}
                          placeholder="candidate@example.com"
                          className="w-full rounded-lg bg-black/40 border border-white/10 px-4 py-3 text-xs focus:outline-none focus:border-[#f3d07a]/50 text-white placeholder-slate-600"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={authLoading}
                        className="w-full bg-[#f3d07a] text-black font-semibold py-3 rounded-lg hover:brightness-95 transition text-xs flex items-center justify-center gap-2"
                      >
                        {authLoading ? (
                          <>
                            <span className="h-4 w-4 rounded-full border-2 border-black/30 border-t-black animate-spin" />
                            Sending link…
                          </>
                        ) : (
                          "Send Magic Sign-In Link"
                        )}
                      </button>
                    </form>
                  )}
                </div>
              ) : (
                /* B. APPLICATION FORM SUBMIT SCREEN */
                <div>
                  <h3 className="text-xl font-bold text-white">Apply for {selectedJob.title}</h3>
                  <p className="text-xs text-slate-400 mt-1">Applying as: {user.email}</p>

                  {formSuccess ? (
                    <div className="mt-6 rounded-xl bg-emerald-500/10 border border-emerald-500/20 p-6 text-center">
                      <p className="text-base font-semibold text-emerald-300">🎉 Application Submitted!</p>
                      <p className="text-xs text-slate-400 mt-2">
                        Thank you for applying! An automated receipt has been sent to your email. You can check your application status directly from the Candidate Dashboard above.
                      </p>
                      <button
                        onClick={() => {
                          setFormOpen(false);
                          setFormSuccess(false);
                        }}
                        className="mt-5 bg-[#f3d07a] text-black font-semibold px-6 py-2 rounded-lg text-xs hover:brightness-95"
                      >
                        Close Modal
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleApply} className="space-y-4 mt-6">
                      {formError && (
                        <div className="rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 px-4 py-2.5 text-xs">
                          ⚠️ {formError}
                        </div>
                      )}

                      <div className="grid gap-4 sm:grid-cols-2">
                        <div>
                          <label className="block text-[10px] uppercase font-bold text-slate-400 mb-1.5">Full Name *</label>
                          <input
                            type="text"
                            required
                            value={candidateName}
                            onChange={(e) => setCandidateName(e.target.value)}
                            placeholder="John Doe"
                            className="w-full rounded-lg bg-black/40 border border-white/10 px-3 py-2 text-xs focus:outline-none focus:border-[#f3d07a]/50 text-white placeholder-slate-700"
                          />
                        </div>
                        <div>
                          <label className="block text-[10px] uppercase font-bold text-slate-400 mb-1.5">Phone Number *</label>
                          <input
                            type="tel"
                            required
                            value={candidatePhone}
                            onChange={(e) => setCandidatePhone(e.target.value)}
                            placeholder="+91-XXXXX-XXXXX"
                            className="w-full rounded-lg bg-black/40 border border-white/10 px-3 py-2 text-xs focus:outline-none focus:border-[#f3d07a]/50 text-white placeholder-slate-700"
                          />
                        </div>
                      </div>

                      <div className="grid gap-4 sm:grid-cols-3">
                        <div>
                          <label className="block text-[10px] uppercase font-bold text-slate-400 mb-1.5">Portfolio Link</label>
                          <input
                            type="url"
                            value={portfolioUrl}
                            onChange={(e) => setPortfolioUrl(e.target.value)}
                            placeholder="https://..."
                            className="w-full rounded-lg bg-black/40 border border-white/10 px-3 py-2 text-xs focus:outline-none focus:border-[#f3d07a]/50 text-white placeholder-slate-700"
                          />
                        </div>
                        <div>
                          <label className="block text-[10px] uppercase font-bold text-slate-400 mb-1.5">LinkedIn Profile</label>
                          <input
                            type="url"
                            value={linkedinUrl}
                            onChange={(e) => setLinkedinUrl(e.target.value)}
                            placeholder="https://linkedin.com/in/..."
                            className="w-full rounded-lg bg-black/40 border border-white/10 px-3 py-2 text-xs focus:outline-none focus:border-[#f3d07a]/50 text-white placeholder-slate-700"
                          />
                        </div>
                        <div>
                          <label className="block text-[10px] uppercase font-bold text-slate-400 mb-1.5">GitHub Profile</label>
                          <input
                            type="url"
                            value={githubUrl}
                            onChange={(e) => setGithubUrl(e.target.value)}
                            placeholder="https://github.com/..."
                            className="w-full rounded-lg bg-black/40 border border-white/10 px-3 py-2 text-xs focus:outline-none focus:border-[#f3d07a]/50 text-white placeholder-slate-700"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-[10px] uppercase font-bold text-slate-400 mb-1.5">Cover Letter / Message</label>
                        <textarea
                          rows={3}
                          value={coverLetter}
                          onChange={(e) => setCoverLetter(e.target.value)}
                          placeholder="Tell us why you are a great fit..."
                          className="w-full rounded-lg bg-black/40 border border-white/10 p-3 text-xs focus:outline-none focus:border-[#f3d07a]/50 text-white placeholder-slate-700 resize-none"
                        />
                      </div>

                      {/* RESUME ATTACHMENT tabs */}
                      <div className="border border-white/10 rounded-xl overflow-hidden bg-black/20">
                        <div className="flex border-b border-white/5">
                          <button
                            type="button"
                            onClick={() => setUploadMode("file")}
                            className={`flex-1 py-2 text-xs font-semibold text-center transition ${
                              uploadMode === "file" ? "bg-white/[0.04] text-[#f3d07a]" : "text-slate-400"
                            }`}
                          >
                            📎 Upload PDF File
                          </button>
                          <button
                            type="button"
                            onClick={() => setUploadMode("link")}
                            className={`flex-1 py-2 text-xs font-semibold text-center transition ${
                              uploadMode === "link" ? "bg-white/[0.04] text-[#f3d07a]" : "text-slate-400"
                            }`}
                          >
                            🔗 Paste Resume Link
                          </button>
                        </div>

                        <div className="p-4">
                          {uploadMode === "file" ? (
                            <div>
                              <input
                                type="file"
                                accept=".pdf,.doc,.docx"
                                onChange={(e) => setResumeFile(e.target.files?.[0] ?? null)}
                                className="block w-full text-xs text-slate-400 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-xs file:font-semibold file:bg-[#f3d07a] file:text-black hover:file:opacity-90 file:cursor-pointer"
                              />
                              <p className="text-[10px] text-slate-500 mt-2">Accepted formats: PDF, Word (DOCX). Max size: 5MB.</p>
                            </div>
                          ) : (
                            <div>
                              <input
                                type="url"
                                value={resumeLink}
                                onChange={(e) => setResumeLink(e.target.value)}
                                placeholder="Paste Google Drive, Dropbox, or OneDrive link..."
                                className="w-full rounded-lg bg-black/40 border border-white/10 px-3 py-2 text-xs focus:outline-none focus:border-[#f3d07a]/50 text-white placeholder-slate-700"
                              />
                              <p className="text-[10px] text-slate-500 mt-2">Make sure link sharing settings allow anyone to view.</p>
                            </div>
                          )}
                        </div>
                      </div>

                      <button
                        type="submit"
                        disabled={formLoading}
                        className="w-full bg-[#f3d07a] text-black font-semibold py-3 rounded-lg hover:brightness-95 transition text-xs flex items-center justify-center gap-2 mt-2"
                      >
                        {formLoading ? (
                          <>
                            <span className="h-4 w-4 rounded-full border-2 border-black/30 border-t-black animate-spin" />
                            Submitting your application…
                          </>
                        ) : (
                          "🚀 Submit Candidate Application"
                        )}
                      </button>
                    </form>
                  )}
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </main>
  );
}