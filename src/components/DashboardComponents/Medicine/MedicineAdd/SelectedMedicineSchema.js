import * as Yup from "yup";
import MedicineFormSchema from "./MedicineFormSchema";

// Form validation schema
const SelectedMedicineSchema = Yup.array().of(MedicineFormSchema);

export default SelectedMedicineSchema;
