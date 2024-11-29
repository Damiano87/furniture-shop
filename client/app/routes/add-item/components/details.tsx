import { useState } from "react";
import { MainInputsProps } from "~/utils/types";

type Detail = {
  key: string;
  value: string;
};

const Details = ({ label, input }: MainInputsProps) => {
  const [list, setList] = useState<Detail[]>([]);
  const [key, setKey] = useState("");
  const [value, setValue] = useState("");

  // add item
  const addItem = () => {
    setList((prev) => [...prev, { key: key, value: value }]);
    setKey("");
    setValue("");
  };

  return (
    <section className="border-t-2 mt-8">
      <h2 className="text-2xl font-bold mt-3 mb-8">Szczegóły</h2>

      <div className="flex items-start justify-between max-w-[40rem]">
        <div className="space-y-3">
          {/* key */}
          <div>
            <label htmlFor="key" className={`${label}`}>
              klucz
            </label>
            <input
              type="text"
              id="key"
              value={key}
              onChange={(e) => setKey(e.target.value)}
              className={`${input}`}
            />
          </div>
          {/* value */}
          <div>
            <label htmlFor="value" className={`${label}`}>
              wartość
            </label>
            <input
              type="text"
              id="value"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              className={`${input}`}
            />
          </div>

          <button
            type="button"
            className="capitalize bg-amber-500 text-white px-4 py-1 border-2 border-black hover:scale-105 duration-300"
            onClick={addItem}
          >
            add
          </button>
        </div>

        {/* list */}
        <ul>
          {list.map((item, index) => {
            return (
              <li key={index} className="font-semibold">
                <span className="capitalize">{item.key}</span>:{" "}
                <span className="capitalize ml-3">{item.value}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
export default Details;
