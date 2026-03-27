const reasons = [
  {
    stat: "5★",
    label: "Checkatrade Rating",
    description: "Consistently top-rated by verified customers on Checkatrade.",
  },
  {
    stat: "10+",
    label: "Years Experience",
    description: "Over a decade of professional plumbing and heating expertise.",
  },
  {
    stat: "24/7",
    label: "Emergency Response",
    description: "Round-the-clock availability for urgent plumbing emergencies.",
  },
  {
    stat: "100%",
    label: "Fully Insured",
    description: "Fully insured and Gas Safe registered for your complete peace of mind.",
  },
];

const reviews = [
  {
    name: "Sarah M.",
    review: "Adem came out same day to fix our burst pipe. Incredibly professional and tidy. Would highly recommend!",
    stars: 5,
  },
  {
    name: "James T.",
    review: "Had a new boiler fitted — competitive price, quality work, and cleaned up perfectly afterwards. Brilliant service.",
    stars: 5,
  },
  {
    name: "Linda K.",
    review: "Reliable, friendly and knowledgeable. Fixed our heating issue quickly. Will definitely use again.",
    stars: 5,
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function WhyUs() {
  return (
    <section id="why-us" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Stats */}
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-widest">Why Choose Us</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900">Built on Trust &amp; Quality</h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {reasons.map((r, i) => (
            <div key={i} className="text-center p-6 rounded-2xl bg-blue-50">
              <div className="text-4xl font-extrabold text-blue-600 mb-1">{r.stat}</div>
              <div className="font-semibold text-gray-900 mb-2">{r.label}</div>
              <p className="text-gray-500 text-sm">{r.description}</p>
            </div>
          ))}
        </div>

        {/* Reviews */}
        <div className="text-center mb-10">
          <h3 className="text-2xl font-bold text-gray-900">What Our Customers Say</h3>
          <p className="text-gray-500 mt-2">Real reviews from verified Checkatrade customers</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <div key={i} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <Stars count={r.stars} />
              <p className="mt-3 text-gray-700 text-sm leading-relaxed italic">&ldquo;{r.review}&rdquo;</p>
              <div className="mt-4 font-semibold text-gray-900 text-sm">{r.name}</div>
              <div className="text-xs text-gray-400">Verified Checkatrade Customer</div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="https://www.checkatrade.com/trades/ademplumbingandheating"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:underline text-sm"
          >
            View all reviews on Checkatrade
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
