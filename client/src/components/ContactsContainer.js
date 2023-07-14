import { useEffect } from "react";
import Wrapper from "../assets/wrappers/ContactsContainer";
import { useAppContext } from "../context/appContext";
import { Loading, AddContactForm, Contact } from "../components";
import ContactPageBtnContainer from "./ContactPageBtnContainer";

const ContactsContainer = () => {
  const {
    showAddContactForm,
    isLoading,
    totalContacts,
    getContacts,
    contacts,
    contactPage,
    searchName,
    searchCompany,
    contactSort,
    numOfContactPages,
  } = useAppContext();

  useEffect(() => {
    getContacts();
    // eslint-disable-next-line
  }, [contactPage, searchName, searchCompany, contactSort]);

  if (isLoading) {
    return <Loading center />;
  }

  return (
    <Wrapper>
      <div className="contacts-header">
        <h5>
          {totalContacts} contact{totalContacts > 1 && "s"} found
        </h5>
        <button className="btn add-job-btn" onClick={showAddContactForm}>
          + New Contact
        </button>
      </div>
      <AddContactForm />
      <div className="contacts">
        {contacts.map((contact) => {
          return <Contact key={contact._id} {...contact} />;
        })}
      </div>
      {numOfContactPages > 1 && <ContactPageBtnContainer />}
    </Wrapper>
  );
};
export default ContactsContainer;
