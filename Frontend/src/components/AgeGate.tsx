import { useEffect, useMemo, useState } from "react";
import B1GLogo from "@/assets/B1G_Removed.png";
import PurpBg from "@/assets/purpbg.png";

type AgeGateProps = {
  onVerified: () => void;
};

function isValidDateString(input: string): boolean {
  // Native date input returns yyyy-mm-dd
  const matcher = /^(\d{4})-(\d{2})-(\d{2})$/;
  const match = matcher.exec(input.trim());
  if (!match) return false;
  const year = Number(match[1]);
  const month = Number(match[2]);
  const day = Number(match[3]);
  if (year < 1900 || year > new Date().getFullYear()) return false;
  const dt = new Date(year, month - 1, day);
  return (
    dt.getFullYear() === year && dt.getMonth() === month - 1 && dt.getDate() === day
  );
}

function calculateAge(dob: Date): number {
  const today = new Date();
  let age = today.getFullYear() - dob.getFullYear();
  const m = today.getMonth() - dob.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
    age--;
  }
  return age;
}

export default function AgeGate({ onVerified }: AgeGateProps) {
  const [dobInput, setDobInput] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [denied, setDenied] = useState(false);
  const [exiting, setExiting] = useState(false);

  // Prevent page scroll when gate is open
  useEffect(() => {
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, []);

  const maxDate = useMemo(() => new Date().toISOString().slice(0, 10), []);
  const minDate = useMemo(() => "1900-01-01", []);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setDenied(false);

    if (!isValidDateString(dobInput)) {
      setError("Select a valid date of birth");
      return;
    }
    const [yearStr, monthStr, dayStr] = dobInput.split("-");
    const dob = new Date(Number(yearStr), Number(monthStr) - 1, Number(dayStr));
    const age = calculateAge(dob);
    if (age >= 18) {
      // Persist only for this browsing session
      try {
        sessionStorage.setItem("ageVerified", "true");
        localStorage.removeItem("ageVerified");
      } catch {}
      // Play exit animation before proceeding
      setExiting(true);
      window.setTimeout(() => {
        onVerified();
      }, 460);
    } else {
      setDenied(true);
      setError("Sorry, you must be 18 or older to enter.");
    }
  }

  return (
    <div
      className={`fixed left-0 right-0 bottom-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 ${exiting ? "agegate-overlay-exit" : "agegate-overlay-enter"}`}
      style={{ top: "var(--banner-height, 0px)" }}
    >
      <div
        className={`relative w-full max-w-md rounded-2xl border border-white/10 shadow-[0_0_40px_rgba(139,92,246,0.4)] text-white ${exiting ? "agegate-card-exit" : "agegate-card-enter agegate-card-wow agegate-border-pulse"}`}
        style={{
          backgroundImage: `url(${PurpBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="agegate-shine-bar left-[-15%]"></div>
        <div className="agegate-vignette"></div>
        <div className="agegate-orb a"></div>
        <div className="agegate-orb b"></div>
        <div className="px-8 pt-8 text-center">
          <img src={B1GLogo} alt="B1G" className="mx-auto h-20 md:h-28 w-auto select-none agegate-logo-pop" draggable={false} />
          <p className="mt-6 text-sm leading-6 text-white/90">
            Our products are harmful and contain nicotine, which is a highly addictive
            substance. It is not recommended for use by nonsmokers or minors. If you're
            under 18 or it's illegal in your area, do not proceed.
          </p>
          <h2 className="mt-6 text-xl font-semibold">
            Please confirm your age before entering the site.
          </h2>
        </div>
        <form onSubmit={handleSubmit} className="px-8 pb-8 pt-6">
          <label className="sr-only" htmlFor="dob">Date of birth</label>
          <div className="relative">
            <input
              id="dob"
              type="date"
              value={dobInput}
              onChange={(e) => setDobInput(e.target.value)}
              max={maxDate}
              min={minDate}
              required
              className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/60 outline-none ring-0 backdrop-blur-md focus:border-white/40 [&::-webkit-calendar-picker-indicator]:invert"
            />
          </div>
          {error && (
            <p className="mt-2 text-sm text-red-600" role="alert">{error}</p>
          )}
          {denied && (
            <p className="mt-1 text-xs text-red-600">Access denied.</p>
          )}
          <div className="mt-6 flex justify-center">
            <button type="submit" className="agegate-btn px-8 py-3 font-semibold tracking-wide">
              <span className="relative z-10">Submit</span>
              <span className="agegate-btn-shine"></span>
              <span className="agegate-btn-ring"></span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}


