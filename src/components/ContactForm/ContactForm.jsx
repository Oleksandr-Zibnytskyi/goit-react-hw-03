import { Formik } from "formik";
import css from "./ContactForm.module.css";

function ContactForm({ addContact }) {
  
  
  const handleSubmit = () => {};

  return (
    <Formik initialValues={{ name: "", number: "" }}>
      <form className={css.form} onSubmit={handleSubmit}>
        <div>
          <label></label>
        <input type="text" name="text" />

        <button type="submit">Add contact</button>
        
        </div>
      </form>
     
    </Formik>
  );
}

export default ContactForm;


