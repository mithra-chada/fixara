"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Briefcase, Award, DollarSign } from "lucide-react";

import SubNav from "@/components/ui/SubNav";
import BlurIn from "@/components/ui/BlurIn";
import WordPullUp from "@/components/ui/WordPullUp";
import FadeText from "@/components/ui/FadeText";

type ApplicationInput = {
  fullName: string;
  mobile: string;
  skill: string;
  experience: string;
};

export default function ForProfessionals() {
  const [isSuccess, setIsSuccess] = useState(false);
  const { 
    register, 
    handleSubmit, 
    formState: { errors }, 
    reset 
  } = useForm<ApplicationInput>();

  const onSubmit = (data: ApplicationInput) => {
    console.log("Application submitted:", data);
    setIsSuccess(true);
    reset();
  };

  const benefits = [
    {
      title: "Get Matched to Real Jobs",
      desc: "No cold-calling factory owners. Fixara sends you job requests that match your skill set and preferred location.",
      icon: Briefcase,
    },
    {
      title: "Build Your Reputation",
      desc: "Every completed job earns you a verified rating from the MSME client. A strong profile means more jobs and better rates.",
      icon: Award,
    },
    {
      title: "Transparent Earnings",
      desc: "See the job value before you accept. No hidden cuts, no surprise deductions. Earnings settled within 24 hours of job completion.",
      icon: DollarSign,
    },
  ];

  const handleApplyClick = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById("apply-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-full bg-canvas select-none">
      <SubNav 
        pageName="For Professionals" 
        ctaText="Apply Now" 
        ctaHref="#apply-form" 
      />

      {/* SECTION 1: HERO (With Glass Container Wrapper) */}
      <section className="w-full bg-[#FBFBFD] py-20 flex justify-center border-b border-hairline">
        <div className="w-full max-w-[1440px] px-6 flex flex-col items-center">
          
          <div 
            className="w-full max-w-[720px] p-12 flex flex-col items-center text-center shadow-[0_4px_24px_rgba(0,0,0,0.06)] border-white/50"
            style={{
              background: "rgba(255,255,255,0.65)",
              backdropFilter: "blur(20px) saturate(180%)",
              borderWidth: "1px",
              borderRadius: "24px",
            }}
          >
            <span className="glass-blue px-3.5 py-1.5 text-[12px] font-display font-semibold text-primary tracking-[0.5px] uppercase mb-4 inline-block">
              For Technicians
            </span>

            <h2 className="text-[28px] xs:text-[34px] sm:text-[40px] md:text-[56px] font-display font-semibold text-ink leading-[1.07] tracking-hero mb-6 w-full">
              <BlurIn text="Your skills. Real jobs. Steady income." />
            </h2>

            <div className="text-[17px] md:text-[20px] font-body font-normal leading-relaxed text-ink-80 mb-8 w-full">
              <WordPullUp text="Fixara connects verified industrial technicians with MSME manufacturers who need your exact expertise. No cold calls. No middlemen. Just matched work." />
            </div>

            <a
              href="#apply-form"
              onClick={handleApplyClick}
              className="bg-primary hover:bg-primary-focus active:scale-95 transition-transform duration-100 ease-out text-[17px] text-canvas font-body font-normal px-[28px] py-[14px] rounded-pill inline-block min-w-[200px]"
            >
              Apply as a Technician
            </a>
          </div>

        </div>
      </section>

      {/* SECTION 2: BENEFITS (Parchment Flat Background) */}
      <section 
        className="w-full bg-[#F5F5F7] py-20 flex justify-center border-b border-hairline"
      >
        <div className="w-full max-w-[1440px] px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <div 
                  key={benefit.title} 
                  style={{
                    background: 'rgba(255,255,255,0.60)',
                    backdropFilter: 'blur(24px) saturate(190%) brightness(1.03)',
                    WebkitBackdropFilter: 'blur(24px) saturate(190%) brightness(1.03)',
                    border: '1px solid rgba(255,255,255,0.75)',
                    borderRadius: '18px',
                    padding: '32px',
                    boxShadow: `
                      0 1px 2px rgba(0,0,0,0.04),
                      0 4px 16px rgba(0,0,0,0.07),
                      0 12px 32px rgba(0,0,0,0.05),
                      inset 0 1px 0 rgba(255,255,255,0.95),
                      inset 0 -1px 0 rgba(0,0,0,0.03)
                    `,
                  }}
                  className="flex flex-col transition-all duration-300 hover:scale-[1.01] hover:border-primary/20"
                >
                  <div className="text-primary mb-4 shrink-0">
                    <Icon size={32} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-[17px] font-body font-semibold text-ink mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-[17px] font-body font-normal leading-[1.47] text-ink-80">
                    {benefit.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 3: ONBOARDING STEPS (Dark Tile Flat Background) */}
      <section 
        className="w-full bg-[#1C1C1E] py-20 flex justify-center text-canvas"
      >
        <div className="w-full max-w-[1440px] px-6">
          
          <div className="mb-12">
            <FadeText 
              text="Up and running in 48 hours."
              className="text-[40px] font-display font-semibold text-canvas leading-[1.10] tracking-normal" 
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Step 1 */}
            <div 
              className="flex flex-col justify-between min-h-[220px] transition-all duration-300 hover:border-white/20"
              style={{
                background: 'rgba(255,255,255,0.07)',
                backdropFilter: 'blur(28px) saturate(180%)',
                WebkitBackdropFilter: 'blur(28px) saturate(180%)',
                border: '1px solid rgba(255,255,255,0.13)',
                borderRadius: '18px',
                padding: '28px',
                boxShadow: `
                  0 4px 16px rgba(0,0,0,0.30),
                  0 16px 40px rgba(0,0,0,0.20),
                  inset 0 1px 0 rgba(255,255,255,0.10),
                  inset 0 -1px 0 rgba(0,0,0,0.15)
                `,
              }}
            >
              <div>
                <span 
                  className="mb-4 inline-block"
                  style={{
                    background: "rgba(0,102,204,0.15)",
                    border: "1px solid rgba(0,102,204,0.30)",
                    borderRadius: "9999px",
                    padding: "4px 14px",
                    color: "#2997FF",
                    fontSize: "12px",
                    fontWeight: "600"
                  }}
                >
                  01
                </span>
                <h3 className="text-[17px] font-body font-semibold text-canvas mb-2">
                  Apply Online
                </h3>
                <p className="text-[17px] font-body font-normal leading-[1.47] text-muted-body">
                  Fill in your skill areas, machine expertise, and upload your ID. Takes under 10 minutes.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div 
              className="flex flex-col justify-between min-h-[220px] transition-all duration-300 hover:border-white/20"
              style={{
                background: 'rgba(255,255,255,0.07)',
                backdropFilter: 'blur(28px) saturate(180%)',
                WebkitBackdropFilter: 'blur(28px) saturate(180%)',
                border: '1px solid rgba(255,255,255,0.13)',
                borderRadius: '18px',
                padding: '28px',
                boxShadow: `
                  0 4px 16px rgba(0,0,0,0.30),
                  0 16px 40px rgba(0,0,0,0.20),
                  inset 0 1px 0 rgba(255,255,255,0.10),
                  inset 0 -1px 0 rgba(0,0,0,0.15)
                `,
              }}
            >
              <div>
                <span 
                  className="mb-4 inline-block"
                  style={{
                    background: "rgba(0,102,204,0.15)",
                    border: "1px solid rgba(0,102,204,0.30)",
                    borderRadius: "9999px",
                    padding: "4px 14px",
                    color: "#2997FF",
                    fontSize: "12px",
                    fontWeight: "600"
                  }}
                >
                  02
                </span>
                <h3 className="text-[17px] font-body font-semibold text-canvas mb-2">
                  Skill Verification
                </h3>
                <p className="text-[17px] font-body font-normal leading-[1.47] text-muted-body">
                  Our team reviews your application and may conduct a short remote or in-person skills check.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div 
              className="flex flex-col justify-between min-h-[220px] transition-all duration-300 hover:border-white/20"
              style={{
                background: 'rgba(255,255,255,0.07)',
                backdropFilter: 'blur(28px) saturate(180%)',
                WebkitBackdropFilter: 'blur(28px) saturate(180%)',
                border: '1px solid rgba(255,255,255,0.13)',
                borderRadius: '18px',
                padding: '28px',
                boxShadow: `
                  0 4px 16px rgba(0,0,0,0.30),
                  0 16px 40px rgba(0,0,0,0.20),
                  inset 0 1px 0 rgba(255,255,255,0.10),
                  inset 0 -1px 0 rgba(0,0,0,0.15)
                `,
              }}
            >
              <div>
                <span 
                  className="mb-4 inline-block"
                  style={{
                    background: "rgba(0,102,204,0.15)",
                    border: "1px solid rgba(0,102,204,0.30)",
                    borderRadius: "9999px",
                    padding: "4px 14px",
                    color: "#2997FF",
                    fontSize: "12px",
                    fontWeight: "600"
                  }}
                >
                  03
                </span>
                <h3 className="text-[17px] font-body font-semibold text-canvas mb-2">
                  Start Getting Jobs
                </h3>
                <p className="text-[17px] font-body font-normal leading-[1.47] text-muted-body">
                  Once verified, your profile goes live and job matches start arriving on your app.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 4: APPLICATION FORM (With Heavy Light-Glass Panel container & Frosted Inputs) */}
      <section id="apply-form" className="w-full bg-[#FBFBFD] py-20 flex justify-center scroll-mt-24">
        <div className="w-full max-w-[1440px] px-6 flex justify-center">
          
          <div 
            className="w-full max-w-[640px] flex flex-col items-center border-white/50"
            style={{
              background: "rgba(255,255,255,0.80)",
              backdropFilter: "blur(24px) saturate(180%)",
              borderWidth: "1px",
              borderRadius: "24px",
              padding: "48px",
              boxShadow: "0 4px 32px rgba(0,0,0,0.08)"
            }}
          >
            <div className="w-full text-center mb-8">
              <h3 className="text-[40px] font-display font-semibold text-ink leading-[1.10] tracking-normal mb-4">
                Ready to join?
              </h3>
              <p className="text-[17px] font-body font-normal leading-[1.47] text-ink-80">
                Applications are open for qualified industrial technicians. Fill in the form below and our onboarding team will reach out within 48 hours.
              </p>
            </div>

            {/* Registration Form */}
            {!isSuccess ? (
              <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col space-y-5">
                
                {/* Full Name */}
                <div className="flex flex-col">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full glass-input text-[17px] font-body font-normal text-ink placeholder-ink-48 focus:outline-none"
                    {...register("fullName", { required: "Full name is required" })}
                  />
                  {errors.fullName && (
                    <span className="text-[14px] text-primary font-body font-normal mt-1.5 px-2">
                      {errors.fullName.message}
                    </span>
                  )}
                </div>

                {/* Mobile Number */}
                <div className="flex flex-col">
                  <input
                    type="tel"
                    placeholder="Mobile Number"
                    className="w-full glass-input text-[17px] font-body font-normal text-ink placeholder-ink-48 focus:outline-none"
                    {...register("mobile", { 
                      required: "Mobile number is required",
                      pattern: {
                        value: /^[0-9+() -]{10,15}$/,
                        message: "Invalid mobile number"
                      }
                    })}
                  />
                  {errors.mobile && (
                    <span className="text-[14px] text-primary font-body font-normal mt-1.5 px-2">
                      {errors.mobile.message}
                    </span>
                  )}
                </div>

                {/* Primary Skill / Trade */}
                <div className="flex flex-col">
                  <input
                    type="text"
                    placeholder="Primary Skill / Trade"
                    className="w-full glass-input text-[17px] font-body font-normal text-ink placeholder-ink-48 focus:outline-none"
                    {...register("skill", { required: "Primary skill or trade is required" })}
                  />
                  {errors.skill && (
                    <span className="text-[14px] text-primary font-body font-normal mt-1.5 px-2">
                      {errors.skill.message}
                    </span>
                  )}
                </div>

                {/* Years of Experience */}
                <div className="flex flex-col relative">
                  <select
                    className="w-full glass-input text-[17px] font-body font-normal text-ink focus:outline-none appearance-none pr-10"
                    defaultValue=""
                    {...register("experience", { required: "Please select your experience" })}
                  >
                    <option value="" disabled className="text-ink-48">Years of Experience</option>
                    <option value="0-2">0–2 years</option>
                    <option value="3-5">3–5 years</option>
                    <option value="6-10">6–10 years</option>
                    <option value="10+">10+ years</option>
                  </select>
                  {/* custom dropdown indicator */}
                  <div className="absolute top-1/2 right-4 -translate-y-1/2 pointer-events-none text-ink-48">
                    ▼
                  </div>
                  {errors.experience && (
                    <span className="text-[14px] text-primary font-body font-normal mt-1.5 px-2">
                      {errors.experience.message}
                    </span>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary-focus active:scale-95 transition-transform duration-100 ease-out text-canvas text-[17px] font-body font-normal py-[14px] rounded-pill text-center mt-2"
                >
                  Submit Application
                </button>

              </form>
            ) : (
              <div className="w-full py-12 flex flex-col items-center justify-center bg-primary/10 border border-primary/20 rounded-card px-6 text-center">
                <h4 className="text-[21px] font-display font-semibold text-primary mb-2">
                  Application Submitted!
                </h4>
                <p className="text-[17px] font-body font-normal text-primary/80">
                  Thank you for applying. Our onboarding team will review your details and reach out within 48 hours.
                </p>
                <button 
                  onClick={() => setIsSuccess(false)}
                  className="mt-6 text-[17px] font-body font-semibold text-primary underline focus:outline-none"
                >
                  Submit another application
                </button>
              </div>
            )}
          </div>

        </div>
      </section>

    </div>
  );
}
