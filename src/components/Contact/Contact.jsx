import { FaPhoneAlt } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import css from "./Contact.module.css";

function Contact({ contact: { id, name, number }, onDelete }) {
  return (
    <div className={css.container}>
      <p>
        <IoPerson /> {name}
      </p>
      <p>
        <FaPhoneAlt /> {number}
      </p>
      <button className={css.btn} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
}

export default Contact;
