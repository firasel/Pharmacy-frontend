import * as Yup from "yup";

// Form validation schema
const StockFormSchema = Yup.object().shape({
  buyingPrice: Yup.number("Please enter a price.")
    .typeError("Please enter a number.")
    .min(1, "Minimum price is 1.")
    .required("Please enter buying price."),
  sellingPrice: Yup.number("Please enter a price.")
    .typeError("Please enter a number.")
    .min(1, "Minimum price is 1.")
    .required("Please enter selling price."),
  expireDate: Yup.date("Please Select a Expire Date.")
    .typeError("Please Select a Valid Date.")
    .required("Please Select a Expire Date."),
  stock: Yup.number("Please enter a stock number.")
    .typeError("Please enter a stock number.")
    .min(1, "Minimum stock is 1.")
    .required("Please enter the medicine stock."),
});

// Form validation schema
const AddNewStockSchema = Yup.object().shape({
  stock: Yup.number("Please enter a stock number.")
    .typeError("Please enter a stock number.")
    .min(1, "Minimum stock is 1.")
    .required("Please enter the medicine stock."),
});

export { StockFormSchema, AddNewStockSchema };

