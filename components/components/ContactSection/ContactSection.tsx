// ContactSection.tsx
import AppConstants from "@/constant/AppConstants";
import ContactDetails from "./ContactDetails";
import ContactForm from "./ContactForm";
import SectionHeader from "@/components/common/SectionHeader/SectionHeader";

const ContactSection = () => {
  const sectionClasses = "relative w-full py-16 md:py-24 bg-[var(--site-bg)] overflow-hidden";
  const containerClasses = "relative z-10 max-w-6xl mx-auto p-3 md:px-6";
  const gridClasses = "grid grid-cols-1 md:grid-cols-2 gap-6";

  return (
    <section className={sectionClasses}>
      <div className={containerClasses}>
        <SectionHeader index="05" label="Contact" title={AppConstants.CONTACT_SECTION_TITLE} />

        <div className={gridClasses}>
          <ContactDetails />
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
