"use client";

import { useState, Suspense, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useSearchParams } from "next/navigation";

import SubNav from "@/components/ui/SubNav";
import BlurIn from "@/components/ui/BlurIn";
import WordPullUp from "@/components/ui/WordPullUp";

type ContactInput = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

function ContactContent() {
  const [isSuccess, setIsSuccess] = useState(false);
  const searchParams = useSearchParams();
  
  const { 
    register, 
    handleSubmit, 
    setValue,
    formState: { errors }, 
    reset 
  } = useForm<ContactInput>();

  useEffect(() => {
    const subjectParam = searchParams.get("subject");
    if (subjectParam) {
      setValue("subject", subjectParam);
    }
  }, [searchParams, setValue]);

  const onSubmit = (data: ContactInput) => {
    console.log("Contact form submitted:", data);
    setIsSuccess(true);
    reset();
  };

  const contactOptions = [
    {
      title: "For MSMEs",
      email: "hello@fixara.in",
      desc: "Join the waitlist or ask about pricing.",
      subjectLine: "MSME Enquiry"
    },
    {
      title: "For Technicians",
      email: "apply@fixara.in",
      desc: "Apply or ask about onboarding.",
      subjectLine: "Technician Application"
    },
    {
      title: "For Partnerships",
      email: "partners@fixara.in",
      desc: "Enterprise, OEM, or investor enquiries.",
      subjectLine: "Partnership Enquiry"
    }
  ];

  return (
    <div className="w-full bg-canvas select-none">
      <SubNav pageName="Contact" showCta={false} />

      {/* SECTION 1: HERO (With Glass Container Wrapper) */}
      <section className="w-full bg-[#FBFBFD] py-20 flex justify-center border-b border-hairline">
        <div className="w-full max-w-[1440px] px-6 flex justify-center">
          
          <div 
            className="w-full max-w-[760px] p-16 flex flex-col items-center text-center shadow-[0_4px_24px_rgba(0,0,0,0.06)] border-white/50"
            style={{
              background: "rgba(255,255,255,0.65)",
              backdropFilter: "blur(20px) saturate(180%)",
              borderWidth: "1px",
              borderRadius: "24px",
            }}
          >
            <h2 className="text-[28px] xs:text-[34px] sm:text-[40px] md:text-[56px] font-display font-semibold text-ink leading-[1.07] tracking-hero mb-6 w-full">
              <BlurIn text="Let's talk." />
            </h2>
            <div className="text-[17px] md:text-[20px] font-body font-normal leading-relaxed text-ink-80 w-full">
              <WordPullUp text="Whether you're an MSME looking to get started, a technician ready to apply, or a partner with a proposal — we'd like to hear from you." />
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 2: CONTACT OPTIONS (Parchment Flat Background) */}
      <section 
        className="w-full bg-[#F5F5F7] py-20 flex justify-center border-b border-hairline"
      >
        <div className="w-full max-w-[1440px] px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactOptions.map((option) => (
              <div 
                key={option.title} 
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
                className="flex flex-col justify-between min-h-[220px] transition-all duration-300 hover:scale-[1.01] hover:border-primary/20 group"
              >
                <div>
                  <span className="text-[14px] font-body font-normal text-ink-48 block mb-3">
                    {option.title}
                  </span>
                  
                  {/* Email address inside glass-blue badge */}
                  <div className="mb-2">
                    <a 
                      href={`mailto:${option.email}`}
                      className="transition-opacity hover:opacity-85 inline-block"
                      style={{
                        background: "rgba(0, 102, 204, 0.08)",
                        border: "1px solid rgba(0, 102, 204, 0.15)",
                        borderRadius: "8px",
                        padding: "4px 10px",
                        fontSize: "13px",
                        color: "#0066CC",
                        fontWeight: "500"
                      }}
                    >
                      {option.email}
                    </a>
                  </div>
                  
                  <p className="text-[14px] font-body font-normal text-ink-48 leading-relaxed mb-6 mt-2">
                    {option.desc}
                  </p>
                </div>
                
                <a
                  href={`mailto:${option.email}?subject=${encodeURIComponent(option.subjectLine)}`}
                  className="text-[17px] font-body font-normal text-primary hover:text-primary-focus inline-flex items-center group-hover:translate-x-1 transition-transform duration-200"
                >
                  Send a message <span className="ml-1">→</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: CONTACT FORM (With Heavy Glass-Form container & Frosted Inputs) */}
      <section className="w-full bg-[#FBFBFD] py-20 flex justify-center">
        <div className="w-full max-w-[1440px] px-6 flex justify-center">
          
          <div className="w-full max-w-[640px] glass-form p-12 flex flex-col items-center border-white/50">
            <div className="w-full text-center mb-8">
              <h3 className="text-[40px] font-display font-semibold text-ink leading-[1.10] tracking-normal mb-4">
                Get in touch
              </h3>
              <p className="text-[17px] font-body font-normal leading-[1.47] text-ink-80">
                Fill in the form below and a member of our team will get back to you within 24 hours.
              </p>
            </div>

            {/* Form */}
            {!isSuccess ? (
              <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col space-y-5">
                
                {/* Name */}
                <div className="flex flex-col">
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full glass-input text-[17px] font-body font-normal text-ink placeholder-ink-48 focus:outline-none"
                    {...register("name", { required: "Name is required" })}
                  />
                  {errors.name && (
                    <span className="text-[14px] text-primary font-body font-normal mt-1.5 px-2">
                      {errors.name.message}
                    </span>
                  )}
                </div>

                {/* Email */}
                <div className="flex flex-col">
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full glass-input text-[17px] font-body font-normal text-ink placeholder-ink-48 focus:outline-none"
                    {...register("email", { 
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address"
                      }
                    })}
                  />
                  {errors.email && (
                    <span className="text-[14px] text-primary font-body font-normal mt-1.5 px-2">
                      {errors.email.message}
                    </span>
                  )}
                </div>

                {/* Subject Dropdown */}
                <div className="flex flex-col relative">
                  <select
                    className="w-full glass-input text-[17px] font-body font-normal text-ink focus:outline-none appearance-none pr-10"
                    defaultValue=""
                    {...register("subject", { required: "Please select a subject" })}
                  >
                    <option value="" disabled>Subject</option>
                    <option value="MSME Enquiry">MSME Enquiry</option>
                    <option value="Technician Application">Technician Application</option>
                    <option value="Partnership Enquiry">Partnership / Investor Enquiry</option>
                    <option value="Other">Other</option>
                  </select>
                  {/* custom dropdown arrow */}
                  <div className="absolute top-1/2 right-4 -translate-y-1/2 pointer-events-none text-ink-48">
                    ▼
                  </div>
                  {errors.subject && (
                    <span className="text-[14px] text-primary font-body font-normal mt-1.5 px-2">
                      {errors.subject.message}
                    </span>
                  )}
                </div>

                {/* Message Textarea */}
                <div className="flex flex-col">
                  <textarea
                    placeholder="Message"
                    className="w-full bg-[#F2F2F7]/85 border border-black/9 text-[17px] font-body font-normal text-ink placeholder-ink-48 focus:outline-none"
                    style={{
                      backdropFilter: "blur(8px)",
                      borderRadius: "18px",
                      height: "140px",
                      padding: "16px 20px",
                      resize: "none"
                    }}
                    {...register("message", { required: "Message is required" })}
                  />
                  {errors.message && (
                    <span className="text-[14px] text-primary font-body font-normal mt-1.5 px-2">
                      {errors.message.message}
                    </span>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary-focus active:scale-95 transition-transform duration-100 ease-out text-canvas text-[17px] font-body font-normal py-[14px] rounded-pill text-center mt-2"
                >
                  Send Message
                </button>

              </form>
            ) : (
              <div className="w-full py-12 flex flex-col items-center justify-center bg-primary/10 border border-primary/20 rounded-card px-6 text-center">
                <h4 className="text-[21px] font-display font-semibold text-primary mb-2">
                  Message Sent!
                </h4>
                <p className="text-[17px] font-body font-normal text-primary/80">
                  Thank you for reaching out. A representative from our team will get back to you shortly.
                </p>
                <button 
                  onClick={() => setIsSuccess(false)}
                  className="mt-6 text-[17px] font-body font-semibold text-primary underline focus:outline-none"
                >
                  Send another message
                </button>
              </div>
            )}
          </div>

        </div>
      </section>

    </div>
  );
}

export default function Contact() {
  return (
    <Suspense fallback={
      <div className="w-full min-h-screen bg-canvas flex items-center justify-center">
        <span className="text-[17px] font-body font-normal text-ink-48">Loading form...</span>
      </div>
    }>
      <ContactContent />
    </Suspense>
  );
}
