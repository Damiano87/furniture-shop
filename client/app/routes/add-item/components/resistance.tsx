import { useState, useEffect } from "react";
import { MainInputsProps } from "~/utils/types";

// type ResistanceType = {
//   list: string[];
//   desc: string;
// };

const Resistance = ({ label, input }: MainInputsProps) => {
  const [resistList, setResistList] = useState<string[]>([]);
  const [value, setValue] = useState("");
  const [desc, setDesc] = useState("");
  const [descDisplay, setDescDisplay] = useState("");

  // Obserwuj zmiany w resistList
  useEffect(() => {
    console.log(resistList);
    console.log(desc);
  }, [resistList]);

  // add item
  const addItem = () => {
    // Użyj funkcji aktualizującej stan, która gwarantuje dostęp do najnowszej wartości
    setResistList((prevList) => {
      // Upewnij się, że dodajesz niepustą wartość
      const newList = value.trim() ? [...prevList, value.trim()] : prevList;
      return newList;
    });
    setDescDisplay(desc);
  };

  return (
    <section className="border-t-[5px] border-black mt-14">
      <h2 className="text-2xl font-bold mt-3 mb-8">Odporność</h2>

      <div className="flex items-start justify-between max-w-[70rem]">
        <div className="space-y-3 w-full">
          {/* value */}
          <div>
            <label htmlFor="value" className={`${label}`}>
              odporność na:
            </label>
            <input
              type="text"
              id="value"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              className={`${input}`}
            />
          </div>
          {/* description */}
          <div>
            <label htmlFor="description" className={`${label}`}>
              opis
            </label>
            <textarea
              id="description"
              rows={5}
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              className={`textarea textarea-bordered border-2 border-black w-full max-w-[40rem] focus:outline-none focus:border-amber-500`}
            />
          </div>

          <button
            type="button"
            className="capitalize bg-white text-black px-4 py-1 border-2 border-black hover:scale-105 duration-300"
            onClick={addItem}
          >
            add
          </button>
        </div>

        {/* resistList */}
        <div className="space-y-5 max-w-[10rem]">
          <ul className="list-disc">
            {resistList.map((item, index) => {
              if (item === "") return null;
              return (
                <li key={index} className="font-semibold">
                  <span className="capitalize">{item}</span>
                </li>
              );
            })}
          </ul>
          <p className="text-wrap">{descDisplay}</p>
        </div>
      </div>
    </section>
  );
};
export default Resistance;
