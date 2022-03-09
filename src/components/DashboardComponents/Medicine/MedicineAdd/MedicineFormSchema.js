import * as Yup from "yup";

// Form validation schema
const MedicineFormSchema = Yup.object().shape({
  name: Yup.string().trim().required("Please enter a medicine name."),
  genericName: Yup.string().trim().required("Please enter a generic name."),
  dosage: Yup.string().trim().required("Please enter a medicine type."),
  strength: Yup.string().trim().required("Please enter a medicine strength."),
  manufacturer: Yup.string()
    .trim()
    .required("Please enter a manufacturer name"),
  qtyOfPacket: Yup.number("Please enter a number.")
    .typeError("Please enter a number.")
    .min(1, "Minimum number of packets in one box is 1.")
    .required("Please enter the number of packets in a box."),
  qtyOfMedicine: Yup.number("Please enter a number.")
    .typeError("Please enter a number.")
    .min(1, "Minimum number of medicine in one packet is 1.")
    .required("Please enter the number of medicines in a packet."),
  medicineShelf: Yup.string()
    .trim()
    .required("Please enter a medicine shelf name."),
});

export default MedicineFormSchema;
