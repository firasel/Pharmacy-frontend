import * as Yup from "yup";

// Regular expression
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

// Form validation schema
const CustomerFormSchema = Yup.object().shape({
  name: Yup.string().trim().required("Please enter the customer name."),
  address: Yup.string().trim("Please enter the customer address."),
  note: Yup.string().trim("Please enter valid note."),
  phone: Yup.string()
    .required("Please enter a phone number.")
    .matches(phoneRegExp, "Please enter a valid phone number.")
    .min(10, "Please enter a valid phone number.")
    .max(13, "Please enter a valid phone number."),
});

export default CustomerFormSchema;
