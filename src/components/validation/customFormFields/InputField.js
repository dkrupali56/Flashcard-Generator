import { useField } from "formik";

const InputField = ({ label, ...props }) => {
  // this is the custom input field component created for usages in the form component
  const [field, meta] = useField(props);

  return (
    <>
      <label>{label}</label>
      <input
        {...field}
        {...props}
        className={meta.touched && meta.error ? "input-error" : ""}
      />
      {meta.touched && meta.error && <div className="error">{meta.error}</div>}
    </>
  );
};
export default InputField;
