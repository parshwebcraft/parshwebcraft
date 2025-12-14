export default function MaintenancePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#050810] text-slate-200 px-6">
      <div className="max-w-md text-center">
        <div className="text-4xl mb-4">🛠️</div>

        <h1 className="text-2xl font-semibold mb-3">
          We’re under maintenance
        </h1>

        <p className="text-slate-400 mb-6">
          We’re making some improvements to the site.
          Please check back in a little while.
        </p>

        <div className="text-sm text-slate-500">
          Thank you for your patience 🙏
        </div>
      </div>
    </div>
  );
}
