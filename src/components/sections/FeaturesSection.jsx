import { features } from "../../data/landingData";

export default function FeaturesSection() {
  return (
    // <section className="border-t border-stone-200 pt-16 pb-20">
    //   <p className="text-xs font-medium tracking-widest text-stone-400 uppercase mb-4 text-center">
    //     Why us?
    //   </p>
    //   <h2 className="font-serif font-light text-4xl text-ink text-center mb-12 leading-snug">
    //     Everything you need to <em className="italic text-amber">grow.</em>
    //   </h2>

    //   <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    //     {features.map((f) => (
    //       <div
    //         key={f.title}
    //         className="bg-white border border-stone-200 rounded-3xl p-7 hover:border-stone-300 hover:shadow-[0_4px_24px_rgba(26,23,20,0.06)] transition-all duration-150"
    //       >
    //         <div className="w-10 h-10 bg-cream border border-stone-200 rounded-xl flex items-center justify-center text-lg text-stone-400 mb-5">
    //           {f.icon}
    //         </div>
    //         <h3 className="text-base font-medium text-ink mb-2.5">{f.title}</h3>
    //         <p className="text-sm text-stone-600 leading-relaxed">{f.desc}</p>
    //       </div>
    //     ))}
    //   </div>
    // </section>

    <section className="border-t border-[#E2DDD8] pt-10 pb-14 px-4 sm:pt-12 sm:pb-16 md:pt-16 md:pb-20">
      <p className="text-[11px] font-medium tracking-[0.18em] text-[#B09070] uppercase mb-4 text-center">
        Why us?
      </p>
      <h2 className="font-['Fraunces',serif] font-light text-[26px] sm:text-[30px] md:text-[36px] text-[#1A1714] text-center mb-8 md:mb-12 leading-[1.2]">
        Everything you need to <em className="italic text-[#E8B86D]">grow.</em>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {features.map((f) => (
          <div
            key={f.title}
            className="bg-white border border-[#E2DDD8] rounded-2xl p-5 md:p-6"
          >
            <div className="w-10 h-10 bg-[#F7F4EF] border border-[#E2DDD8] rounded-[10px] flex items-center justify-center text-[18px] mb-5 text-[#B09070]">
              {f.icon}
            </div>
            <h3 className="text-[16px] font-medium text-[#1A1714] mb-2.5">
              {f.title}
            </h3>
            <p className="text-[14px] text-[#7A736C] leading-[1.65]">
              {f.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
