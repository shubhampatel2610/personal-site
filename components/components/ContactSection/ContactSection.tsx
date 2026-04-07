// ContactSection.tsx
import ContactDetails from "./ContactDetails";
import ContactForm from "./ContactForm";

const ContactSection = () => {
  return (
    <section className="relative w-full py-10 bg-[#0a0a0a] overflow-hidden">

      {/* Grid texture */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:72px_72px] pointer-events-none" />

      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#3B82F6]/[0.04] rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto p-3 md:px-6">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-10 md:mb-16 gap-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#3B82F6]/20 bg-[#3B82F6]/5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] animate-pulse" />
            <span className="text-[#3B82F6] text-xs font-medium tracking-widest uppercase">
              Contact
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Get In Touch
          </h2>
          <div className="w-12 h-[2px] bg-gradient-to-r from-transparent via-[#3B82F6]/60 to-transparent rounded-full" />
        </div>

        {/* ✅ PrimeReact grid — exactly as original */}
        <div className="grid">
          <div className="col-12 md:col-6 py-2 px-2">
            <ContactDetails />
          </div>
          <div className="col-12 md:col-6 py-2 px-2">
            <ContactForm />
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;