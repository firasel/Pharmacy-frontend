import { useState } from "react";
import { useRecoilState } from "recoil";
import { addCartState } from "../../../../atoms/cartAtom";
import Loading from "../../../../SharedComponents/Loading/Loading";
import SelectedMedicineRow from "./SelectedMedicineRow";

const SelectedMedicine = () => {
  // State for loading show
  const [loading, setLoading] = useState(false);
  // Medicine cart state
  const [addCart, setAddCart] = useRecoilState(addCartState);

  return (
    <div className="py-2">
      {addCart?.length ? (
        <div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 justify-between gap-0 md:gap-2 font-[Lato] px-2 py-2 border-b-[1px] border-gray-300 bg-gray-300 transition-all duration-200  text-sm md:text-base font-semibold">
            <div className="py-[1px] md:py-2">Name</div>
            <div className="py-[1px] md:py-2">Dosage</div>
            <div className="py-[1px] md:py-2">Strength</div>
            <div className="py-[1px] md:py-2">Unit Cost</div>
            <div className="py-[1px] md:py-2">Qty Of Box</div>
            <div className="py-[1px] md:py-2">Qty Of Packet</div>
            <div className="py-[1px] md:py-2">Quantity</div>
            <div className="py-[1px] md:py-2">Total</div>
          </div>
          {addCart?.map((data, index) => (
            <SelectedMedicineRow key={index} data={data} />
          ))}
          <div className="flex gap-2 justify-end my-4">
            <button className="py-2 px-5 font-semibold font-[Lato] bg-gray-200 rounded-md">
              Prev
            </button>
            <button
              // onClick={handleSubmit}
              className="py-2 px-5 font-semibold font-[Lato] bg-gray-200 rounded-md"
            >
              {loading ? (
                <Loading
                  containerStyle={"py-[1px]"}
                  dotStyle={"!bg-[#37c3e9] "}
                />
              ) : (
                "Next"
              )}
            </button>
          </div>
        </div>
      ) : (
        <h1 className="my-5 text-xl text-center">No medicines were selected</h1>
      )}
    </div>
  );
};

export default SelectedMedicine;
