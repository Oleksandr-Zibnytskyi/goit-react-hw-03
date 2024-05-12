import css from './ContactList.module.css'
import Contact from "../Contact/Contact"

function ContactList({ contacts, onDelete }) {
    return (
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            <Contact contact={contact} onDelete={onDelete} />
          </li>
        ))}
      </ul>
    );
  }
  
  export default ContactList;