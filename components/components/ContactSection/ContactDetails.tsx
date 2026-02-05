import "./ContactSection.scss";
import AppConstants from "@/constant/AppConstants";

const ContactDetails = () => {
  return (
    <>
      <div className="headerSection">
        <div className="headerText">{AppConstants.CONTACT_HEADER}</div>
        <div className="subHeaderText">{AppConstants.CONTACT_SUBHEADER}</div>
      </div>
      <div className="bodySection">
        <div className="contactDetailInstance">
          <div className="contactIcon">
            <i className="pi pi-phone" />
          </div>
          <div className="contactInfo">{AppConstants.CONTACT_PHONE}</div>
        </div>
        <div className="contactDetailInstance">
          <div className="contactIcon">
            <i className="pi pi-envelope" />
          </div>
          <div className="contactInfo">{AppConstants.CONTACT_EMAIL}</div>
        </div>
        <div className="contactDetailInstance">
          <div className="contactIcon">
            <i className="pi pi-map-marker" />
          </div>
          <div className="contactInfo">{AppConstants.CONTACT_LOCATION}</div>
        </div>
      </div>
      <div className="footerSection">
        <div className="iconLinkButton">
          <a
            className="contactIcon"
            href={AppConstants.CONTACT_LINKEDIN}
            target="_blank"
            rel="noreferrer"
          >
            <i className="pi pi-linkedin" />
          </a>
        </div>
        <div className="iconLinkButton">
          <a
            className="contactIcon"
            href={AppConstants.CONTACT_GITHUB}
            target="_blank"
            rel="noreferrer"
          >
            <i className="pi pi-github" />
          </a>
        </div>
      </div>
    </>
  );
};

export default ContactDetails;
