import css from "./SearchBar.module.css";
import { Formik, Form, Field } from "formik";
// import * as Yup from "yup";
import { ErrorMessage } from "formik";

// const FeedbackSchema = Yup.object().shape({
//   name: Yup.string()
//     .min(3, "Too Short!")
//     .max(50, "Too Long!")
//     .required("Required"),
// });

const initialValues = {
  type: "",
};

export default function SearchBar() {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, actions) => {
        console.log(values);
        actions.resetForm();
      }}
    >
      <header className={css.form}>
        <Form />
        <Field
          type="text"
          name="name"
          className={css.input}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        {/* validationSchema={FeedbackSchema} */}
        <ErrorMessage className={css.error} name="name" component="span" />
        <button className={css.btn} type="submit">
          Search
        </button>
      </header>
    </Formik>
  );
}
