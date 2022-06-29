import { RiAddCircleFill } from "react-icons/ri";

const SellAdd = () => {
  return (
    <>
      <div className="mt-3 md:mt-0">
        <div className="mb-1 px-2 sm:px-0 md:mb-4 flex justify-between">
          <h4 className="text-xl">Sell</h4>
          <div className="flex gap-3 pr-2 md:pr-0">
            <button
            //   onClick={() => setModalOpen(!modalOpen)}
              className="h-fit md:h-auto py-2 px-2 bg-gray-200/70 hover:bg-gray-200 transition-all duration-300 rounded relative"
              title="Add New Customer"
            >
              <RiAddCircleFill className="text-2xl md:text-3xl" />
            </button>
            {/* {!btnDisable && (
              <button
                onClick={() => {
                  setTableFormat(!tableFormat);
                }}
                className={`h-fit md:h-auto py-2 px-2 bg-gray-200/70 hover:bg-gray-200 transition-all duration-300 rounded relative`}
                title={tableFormat ? "Table Layout" : "Grid Layout"}
                disabled={btnDisable}
              >
                {tableFormat ? (
                  <RiTableFill className="text-2xl md:text-3xl" />
                ) : (
                  <RiLayoutGridFill className="text-2xl md:text-3xl" />
                )}
              </button>
            )} */}
          </div>
        </div>
      </div>
    </>
  );
};

export default SellAdd;
