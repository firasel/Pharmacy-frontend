import { MdAddShoppingCart } from "react-icons/md";

const MedicineCard = ({ data, handleAddCart }) => {
  const date = new Date(data?.expireDate);

  return (
    <>
      <div className="shadow-lg bg-white rounded-md w-full grid hover:scale-[1.02] transition-all duration-200">
        <div className="px-3 pt-3 pb-2 tracking-wide">
          <h3 className="text-xl font-semibold font-[Lato] text-gray-700">
            {data?.medicine_id?.name}
          </h3>
          <h4 className="text-base font-medium">{data?.medicine_id?.dosage}</h4>
          <h4 className="text-base font-medium">
            Strength: {data?.medicine_id?.strength}
          </h4>
          <h4 className="text-base font-medium">
            Expire Date:
            {` ${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`}
          </h4>
          <h4 className="text-base font-medium">
            Shelf: {data?.medicine_id?.medicineShelf}
          </h4>
          <h4 className="text-base font-medium">Price: {data?.sellingPrice}</h4>
          <h4 className="text-base font-medium">Stock: {data?.stock}</h4>
        </div>
        <div className="h-fit mt-auto flex divide-x-2 hover:divide-x-0 mb-2 mx-2">
          <button
            onClick={() => handleAddCart(data)}
            className="w-full bg-gray-100 hover:bg-gray-200/80 rounded-md hover:text-[#37c3e9] py-2 flex justify-center items-center transition-all duration-300 font-medium"
            title="Add to cart"
          >
            <MdAddShoppingCart className="text-lg" /> Add Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default MedicineCard;
