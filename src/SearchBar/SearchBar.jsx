import css from "./SearchBar.module.css";
import { Formik, Form, Field } from "formik";
import toast, { Toaster } from 'react-hot-toast';



export default function SearchBar({ onSearch }) {
   const notifyEmptyQuery = () => toast.error('Please enter a search query.');
  return (
    <header className={css.form}>
        <Toaster />

    <Formik
      initialValues={{query: ""}}
        onSubmit={(values, actions) => {
          if (values.query.trim() === "") {
            notifyEmptyQuery();
          } else {
            onSearch(values.query);
          }
          actions.resetForm();
        }}        
    >
        <Form>
        <Field
          type="text"
          name="query"
          className={css.input}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button className={css.btn} type="submit">
          Search
        </button>
      </Form>
      </Formik>
      </header>
      
  );
}
