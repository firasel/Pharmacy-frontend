import * as Yup from "yup";

// Form validation schema
const StockFormSchema = Yup.object().shape({
  stock: Yup.number("Please enter a number.")
    .typeError("Please enter a number.")
    .min(1, "Minimum number of stock is 1.")
    .required("Please enter the stock number."),
  expireDate: Yup.date("Please select a expire date.").required(
    "Please select a expire date."
  ),
  buyingPrice: Yup.number("Please enter a price.")
    .typeError("Please enter a number.")
    .min(1, "Minimum price is 1.")
    .required("Please enter buying price."),
  sellingPrice: Yup.number("Please enter a price.")
    .typeError("Please enter a number.")
    .min(1, "Minimum price is 1.")
    .required("Please enter selling price."),
});

export default StockFormSchema;
