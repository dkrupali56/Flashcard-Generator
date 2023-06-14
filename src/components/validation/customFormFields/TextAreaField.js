import { useField } from "formik";

const TextAreaField = ({ label, ...props }) => {
  // this is the custom text area component created for usages in the form component
  const [field, meta] = useField(props);

  return (
    <>
      <label>{label}</label>
      <textarea
        {...field}
        {...props}
        className={meta.touched && meta.error ? "input-error" : ""}
      />
      {meta.touched && meta.error && <div className="error">{meta.error}</div>}
    </>
  );
};
export default TextAreaField;
