import { useNavigate } from "react-router-dom";
import Button from "../ui/Button";
import { ArrowRight } from "../ui/Icons";
import { stats } from "../../data/landingData";

export default function HeroSection({ onSignup }) {
  const navigate = useNavigate();

  return (
    // <section>
    //   <p className="text-xs font-medium tracking-widest text-stone-400 uppercase mb-5">
    //     Empower your mentorship journey
    //   </p>

    //   <h1 className="font-serif font-light text-5xl leading-[1.08] text-ink mb-6 max-w-xl">
    //     Your path for excellence starts{" "}
    //     <em className="italic text-amber">here.</em>
    //   </h1>

    //   <p className="text-base leading-relaxed text-stone-700 max-w-lg mb-9">
    //     Build trust, guide talent, and grow your mentor network with a modern
    //     dashboard designed for mentors and mentees.
    //   </p>

    //   <div className="flex gap-3 flex-wrap mb-14">
    //     <Button variant="amber" onClick={() => navigate("/login")}>
    //       Sign in
    //     </Button>
    //     <Button variant="secondary" onClick={onSignup}>
    //       Create account <ArrowRight />
    //     </Button>
    //   </div>

    //   {/* Stat cards */}
    //   <div className="grid grid-cols-2 gap-3">
    //     {stats.map((s) => (
    //       <div
    //         key={s.label}
    //         className="bg-white border border-stone-200 rounded-2xl p-6 hover:border-stone-300 transition-colors duration-150"
    //       >
    //         <p className="text-xs font-medium tracking-widest text-stone-400 uppercase mb-3">
    //           {s.label}
    //         </p>
    //         <p className="font-serif font-light text-4xl text-ink leading-none">
    //           {s.value}
    //         </p>
    //       </div>
    //     ))}
    //   </div>
    // </section>
    <section>
      <p className="text-[11px] font-medium tracking-[0.18em] text-[#B09070] uppercase mb-5">
        Empower your mentorship journey
      </p>

      <h1 className="font-['Fraunces',serif] font-light text-[54px] leading-[1.08] text-[#1A1714] mb-6 max-w-130">
        Your path for excellence starts{" "}
        <em className="italic text-[#E8B86D]">here.</em>
      </h1>

      <p className="text-[16px] leading-[1.75] text-[#6B6560] max-w-120 mb-9">
        Build trust, guide talent, and grow your mentor network with a modern
        dashboard designed for mentors and mentees.
      </p>

      <div className="flex gap-3 flex-wrap mb-14">
        <button
          className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#E8B86D] text-[#1A1714] rounded-full text-[14px] font-medium border-none cursor-pointer transition-[background] duration-150 font-['DM_Sans',sans-serif] hover:bg-[#D4A45A]"
          onClick={() => navigate("/login")}
        >
          Sign in
        </button>
        <button
          className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-[#1A1714] rounded-full text-[14px] font-medium border border-[#E2DDD8] cursor-pointer transition-[border-color,background] duration-150 font-['DM_Sans',sans-serif] hover:border-[#C5BEB8] hover:bg-[#FDFCFB]"
          onClick={() => navigate("/signup")}
        >
          Create account <ArrowRight />
        </button>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-2 gap-3 max-w-2xl">
        {stats.map((s) => (
          <div
            key={s.label}
            className="bg-white border border-[#E2DDD8] rounded-2xl p-6 hover:border-[#C5BEB8] transition-colors duration-150"
          >
            <p className="text-[11px] font-medium tracking-[0.14em] text-[#B09070] uppercase mb-3.5">
              {s.label}
            </p>
            <p className="font-['Fraunces',serif] text-[36px] font-light text-[#1A1714] leading-none">
              {s.value}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
