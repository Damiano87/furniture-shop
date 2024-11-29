import Details from "./components/details";
import MainInputs from "./components/mainInputs";

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
        <Details label={label} input={input} />
      </div>
    </main>
  );
};
export default AddItemPage;
