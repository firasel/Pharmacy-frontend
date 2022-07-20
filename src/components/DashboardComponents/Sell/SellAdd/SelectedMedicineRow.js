import { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useRecoilState } from "recoil";
import { addCartState } from "../../../../atoms/cartAtom";

const SelectedMedicineRow = ({ data }) => {
  const [addCart, setAddCart] = useRecoilState(addCartState);
  const [qtyBox, setQtyBox] = useState(0);
  const [qtyPacket, setQtyPacket] = useState(0);
  const [qty, setQty] = useState(0);

  const handleQty = (e, id, key) => {
    const editData = addCart.map((medicineData) => {
      if (medicineData.medicine_id._id == id) {
        let changedObject = { ...medicineData };
        switch (key) {
          case "QtyBox":
            {
              let value = parseInt(e?.target?.value);
              let totalBoxQty =
                value *
                data?.medicine_id?.qtyOfPacket *
                data?.medicine_id?.qtyOfMedicine;
              let totalPacketQty = qtyPacket * data?.medicine_id?.qtyOfMedicine;
              let totalQty = totalBoxQty + totalPacketQty;
              if (value >= 0 && totalQty <= data?.stock) {
                setQtyBox(value);
                setQty(totalQty);
              }
            }
            break;
          case "QtyPacket":
            {
              let value = parseInt(e?.target?.value);
              let totalBoxQty =
                qtyBox *
                data?.medicine_id?.qtyOfPacket *
                data?.medicine_id?.qtyOfMedicine;
              let totalPacketQty = value * data?.medicine_id?.qtyOfMedicine;
              let totalQty = totalBoxQty + totalPacketQty;
              if (value >= 0 && totalQty <= data?.stock) {
                setQtyPacket(value);
                setQty(totalQty);
              }
            }
            break;
          case "Qty":
            {
              let value = parseInt(e?.target?.value);
              if (value >= 0 && value <= data?.stock) {
                setQty(value);
              }
            }
            break;
        }
        changedObject.quantity = qty;
        return changedObject;
      }
      return medicineData;
    });
    setAddCart(editData);
  };

  // Handle selected medicine item delete
  const handleItemDelete = (id) => {
    const filterData = addCart.filter((data) => data._id !== id);
    setAddCart(filterData);
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 justify-between gap-1 md:gap-2 font-[Lato] px-2 py-2 border-b-[1px] border-gray-300 hover:bg-gray-200 transition-all duration-200 text-sm lg:text-base">
      <div className="py-[4px] lg:py-2">{data?.medicine_id?.name}</div>
      <div className="py-[4px] lg:py-2">{data?.medicine_id?.dosage}</div>
      <div className="py-[4px] lg:py-2">{data?.medicine_id?.strength}</div>
      <div className="py-[4px] lg:py-2">{data?.sellingPrice}</div>
      <div className="py-[4px] lg:py-2">
        <input
          className="py-2 bg-slate-100 w-full px-2 rounded outline-sky-300 text-center"
          type="number"
          min={0}
          value={qtyBox}
          onChange={(e) => handleQty(e, data?.medicine_id?._id, "QtyBox")}
          title="Number of box"
        />
      </div>
      <div className="py-[3px] lg:py-2">
        <input
          className="py-2 bg-slate-100 w-full px-2 rounded outline-sky-300 text-center"
          type="number"
          min={0}
          value={qtyPacket}
          onChange={(e) => handleQty(e, data?.medicine_id?._id, "QtyPacket")}
          title="Number of packet"
        />
      </div>
      <div className="py-[3px] lg:py-2">
        <input
          className="py-2 bg-slate-100 w-full px-2 rounded outline-sky-300 text-center"
          type="number"
          min={0}
          value={qty}
          onChange={(e) => handleQty(e, data?.medicine_id?._id, "Qty")}
          title="Total quantity"
        />
      </div>
      <div className="flex justify-between h-min py-[3px] lg:py-2">
        <div>
          <input
            className="py-2 bg-transparent w-full px-2 outline-none text-center cursor-pointer"
            value={data?.sellingPrice * qty}
            title="Total quantity"
            readOnly
          />
        </div>
        <div
          onClick={() => handleItemDelete(data?._id)}
          className="p-2 bg-red-100 rounded cursor-pointer hover:text-red-600 hover:bg-slate-100 transition-all duration-200"
        >
          <RiDeleteBin6Line size={22} />
        </div>
      </div>
    </div>
  );
};

export default SelectedMedicineRow;
