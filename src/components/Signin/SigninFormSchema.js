import * as Yup from "yup";

// Form validation schema
const SigninFormSchema = Yup.object().shape({
  email: Yup.string()
    .required("Please enter your email.")
    .email("Please enter a valid email."),
  password: Yup.string()
    .required("Please enter your password.")
    .min(6, "Password length should be at least 6 characters.")
    .max(50, "Password must be within 60 characters."),
});

export default SigninFormSchema;
