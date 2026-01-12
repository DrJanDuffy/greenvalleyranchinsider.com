export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white flex items-center justify-center">
      <div className="text-center" role="status" aria-live="polite">
        <div 
          className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-[#C5A059] border-t-transparent mb-4"
          aria-hidden="true"
        ></div>
        <p className="text-slate-600">Loading...</p>
        <span className="sr-only">Page is loading, please wait</span>
      </div>
    </div>
  );
}
