import * as Yup from "yup";

// Defined the Schemas for the Validations to the user input from the form throught the appliction
const FlashCardSchema = Yup.object().shape({
  groupid: Yup.string(),
  groupname: Yup.string()
    .max(20, "Must be less than 20 characters")
    .required("Required"),
  groupdescription: Yup.string().max(300, "Must be less than 300 characters"),
  groupimg: Yup.mixed(),

  cards: Yup.array().of(
    Yup.object().shape({
      cardid: Yup.string(),
      cardname: Yup.string()
        .max(20, "Must be less than 20 characters")
        .required("Required"),
      carddescription: Yup.string()
        .max(300, "Must be less than 300 characters")
        .required("Required"),
    })
  ),
  createdOn: Yup.date().default(() => new Date()),
});

export default FlashCardSchema;
