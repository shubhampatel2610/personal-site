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
  const rootClasses = "flex flex-col gap-5 animate-[fadeSlideUp_0.5s_ease_both]";
  const headerClasses = "flex flex-col gap-3";
  const titleClasses = "font-display text-2xl md:text-3xl font-semibold text-[var(--site-text)] tracking-tight";
  const subtitleClasses = "text-[var(--text-muted)] text-sm md:text-base leading-relaxed";
  const dividerClasses = "w-full h-px bg-[var(--border-subtle)]";
  const itemGroupClasses = "group flex items-center gap-4";
  const iconBoxClasses = "flex items-center justify-center w-10 h-10 shrink-0 rounded-md bg-[var(--surface-1)] border border-[var(--border-visible)] group-hover:border-[var(--accent)]/40 group-hover:bg-[var(--accent-soft)] transition-all duration-200";
  const iconClasses = "text-[var(--accent)] text-sm";
  const itemTextClasses = "text-[var(--text-muted)] text-sm group-hover:text-[var(--site-text)] transition-colors duration-200";
  const socialGroupClasses = "flex items-center gap-3";
  const socialButtonClasses = "flex items-center justify-center w-full h-10 rounded-md bg-[var(--surface-1)] border border-[var(--border-visible)] hover:border-[var(--accent)]/40 hover:bg-[var(--accent-soft)] text-[var(--text-muted)] hover:text-[var(--site-text)] transition-all duration-200";

  return (
    <div className={rootClasses}>
      <div className={headerClasses}>
        <h3 className={titleClasses}>{AppConstants.CONTACT_HEADER}</h3>
        <p className={subtitleClasses}>{AppConstants.CONTACT_SUBHEADER}</p>
      </div>

      <div className={dividerClasses} />

      <div className="flex flex-col gap-4">
        {contactItems.map((item) => (
          <div key={item.icon} className={itemGroupClasses}>
            <div className={iconBoxClasses}>
              <i className={`pi ${item.icon} ${iconClasses}`} />
            </div>
            <span className={itemTextClasses}>{item.value}</span>
          </div>
        ))}
      </div>

      <div className={dividerClasses} />

      <div className={socialGroupClasses}>
        {socialLinks.map((social) => (
          <a key={social.icon} href={social.href} target="_blank" rel="noreferrer" aria-label={social.label} className={socialButtonClasses}>
            <i className={`pi ${social.icon} text-sm`} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default ContactDetails;
