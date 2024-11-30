import Details from "./components/details";
import Dimensions from "./components/dimensions";
import Features from "./components/features";
import MainInputs from "./components/mainInputs";
import Offer from "./components/offer";
import Resistance from "./components/resistance";

const AddItemPage = () => {
  const label = "font-semibold capitalize block mb-1";
  const input =
    "input input-bordered border-2 border-black w-full focus:outline-none focus:border-amber-500 max-w-[20rem]";

  return (
    <main className="pt-44">
      <div className="max-w-7xl mx-auto px-5">
        <h1 className="text-4xl font-bold mb-8">Add Item</h1>

        {/* main inputs */}
        <MainInputs label={label} input={input} />
        {/* details */}
        <Details label={label} input={input} />
        {/* features */}
        <Features label={label} input={input} />
        {/* demensions */}
        <Dimensions label={label} input={input} />
        {/* offer */}
        <Offer label={label} input={input} />
        {/* resistance */}
        <Resistance label={label} input={input} />
      </div>
    </main>
  );
};
export default AddItemPage;
