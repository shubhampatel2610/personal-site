// ContactDetails.tsx
import AppConstants from "@/constant/AppConstants";

const contactItems = [
  { icon: "pi-phone", value: AppConstants.CONTACT_PHONE },
  { icon: "pi-envelope", value: AppConstants.CONTACT_EMAIL },
  { icon: "pi-map-marker", value: AppConstants.CONTACT_LOCATION },
];

const socialLinks = [
  { icon: "pi-linkedin", href: AppConstants.CONTACT_LINKEDIN, label: "LinkedIn" },
  { icon: "pi-github", href: AppConstants.CONTACT_GITHUB, label: "GitHub" },
];

const ContactDetails = () => {
  return (
    <div className="flex flex-col gap-5 animate-[fadeSlideUp_0.5s_ease_both]">

      {/* Header */}
      <div className="flex flex-col gap-3">
        <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
          {AppConstants.CONTACT_HEADER}
        </h3>
        <p className="text-[#a1a1aa] text-sm md:text-base leading-relaxed">
          {AppConstants.CONTACT_SUBHEADER}
        </p>
      </div>

      {/* Divider */}
      <div className="w-full h-[1px] bg-gradient-to-r from-white/[0.08]to-transparent" />

      {/* Contact Info Items */}
      <div className="flex flex-col gap-4">
        {contactItems.map((item) => (
          <div
            key={item.icon}
            className="group flex items-center gap-4"
          >
            {/* Icon box */}
            <div className="flex items-center justify-center w-1 h-10 rounded-lg
              bg-[#1a1a1a] border border-white/[0.08]
              group-hover:border-[#3B82F6]/40 group-hover:bg-[#3B82F6]/10
              transition-all duration-200"
            >
              <i className={`pi ${item.icon} text-[#3B82F6] text-sm`} />
            </div>
            {/* Value */}
            <span className="text-[#a1a1aa] text-sm group-hover:text-white transition-colors duration-200">
              {item.value}
            </span>
          </div>
        ))}
      </div>

      {/* Divider */}
      <div className="w-full h-[1px] bg-gradient-to-r from-white/[0.08] to-transparent" />

      {/* Social Links */}
      <div className="flex items-center gap-3">
        {socialLinks.map((social) => (
          <a
            key={social.icon}
            href={social.href}
            target="_blank"
            rel="noreferrer"
            aria-label={social.label}
            className="flex items-center justify-center w-full h-10 rounded-lg bg-[#1a1a1a] border border-white/[0.08] hover:border-[#3B82F6]/40 hover:bg-[#3B82F6]/10 hover:shadow-[0_0_16px_rgba(59,130,246,0.12)] text-[#a1a1aa] hover:text-white transition-all duration-200"
          >
            <i className={`pi ${social.icon} text-sm`} />
          </a>
        ))}
      </div>

    </div >
  );
};

export default ContactDetails;