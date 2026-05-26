import { useNavigate } from "react-router-dom";
import Button from "../ui/Button";
import { ArrowRight } from "../ui/Icons";
import { metrics } from "../../data/landingData";

export default function DashboardPreview() {
  const navigate = useNavigate();

  return (
    // <div className="preview-panel">
    //   <div className="relative z-10">
    //     {/* Header card */}
    //     <div
    //       className="rounded-2xl p-5 mb-5"
    //       style={{
    //         background: "rgba(247,244,239,0.06)",
    //         border: "1px solid rgba(247,244,239,0.1)",
    //       }}
    //     >
    //       <p className="text-xs font-medium tracking-widest text-amber uppercase mb-2">
    //         Dashboard preview
    //       </p>
    //       <h2 className="font-serif font-light text-2xl text-cream leading-snug">
    //         At-risk student spotlight
    //       </h2>
    //     </div>

    //     {/* Metric rows */}
    //     {metrics.map((m) => (
    //       <div
    //         key={m.label}
    //         className="rounded-xl px-5 py-4 mb-2.5 flex items-center justify-between"
    //         style={{
    //           background: "rgba(247,244,239,0.04)",
    //           border: "1px solid rgba(247,244,239,0.08)",
    //         }}
    //       >
    //         <div>
    //           <p
    //             className="text-xs mb-1"
    //             style={{ color: "rgba(247,244,239,0.45)" }}
    //           >
    //             {m.label}
    //           </p>
    //           <p className="text-xs" style={{ color: "rgba(232,184,109,0.7)" }}>
    //             {m.sub}
    //           </p>
    //         </div>
    //         <p className="font-serif font-light text-2xl text-cream">
    //           {m.value}
    //         </p>
    //       </div>
    //     ))}

    //     <Button
    //       variant="amber"
    //       className="w-full justify-center mt-5 rounded-xl!"
    //       onClick={() => navigate("/login")}
    //     >
    //       View full dashboard <ArrowRight />
    //     </Button>
    //   </div>
    // </div>

    <section className="bg-[#1A1714] rounded-[28px] p-9 relative overflow-hidden before:content-[''] before:absolute before:top-20 before:right-20 before:w-65 before:h-65 before:rounded-full before:border before:border-[rgba(247,244,239,0.07)] before:pointer-events-none after:content-[''] after:absolute after:bottom-15 after:left-15 after:w-50 after:h-50 after:rounded-full after:border after:border-[rgba(247,244,239,0.05)] after:pointer-events-none">
      <div className="relative z-10">
        {/* Header card */}
        <div className="bg-[rgba(247,244,239,0.06)] border border-[rgba(247,244,239,0.1)] rounded-2xl px-6 py-5 mb-5">
          <p className="text-[11px] font-medium tracking-[0.14em] text-[#E8B86D] uppercase mb-2">
            Dashboard preview
          </p>
          <h2 className="font-['Fraunces',serif] font-light text-[22px] text-[#F7F4EF] leading-[1.3]">
            At-risk student spotlight
          </h2>
        </div>

        {/* Metric rows */}
        {metrics.map((m) => (
          <div
            key={m.label}
            className="bg-[rgba(247,244,239,0.04)] border border-[rgba(247,244,239,0.08)] rounded-[14px] px-5 py-4 mb-2.5 flex items-center justify-between"
          >
            <div>
              <p className="text-[12px] text-[rgba(247,244,239,0.45)] mb-1">
                {m.label}
              </p>
              <p className="text-[11px] text-[rgba(232,184,109,0.7)]">
                {m.sub}
              </p>
            </div>
            <p className="font-['Fraunces',serif] text-[26px] font-light text-[#F7F4EF]">
              {m.value}
            </p>
          </div>
        ))}

        {/* Button */}
        <button
          className="w-full justify-center mt-5 inline-flex items-center gap-2 px-7 py-3.25 bg-[#E8B86D] text-[#1A1714] rounded-xl text-[14px] font-medium border-none cursor-pointer transition-[background] duration-150 font-['DM_Sans',sans-serif] hover:bg-[#DDA85A]"
          onClick={() => navigate("/login")}
        >
          View full dashboard <ArrowRight />
        </button>
      </div>
    </section>
  );
}
