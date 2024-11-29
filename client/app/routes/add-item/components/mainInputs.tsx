import { type MainInputsProps } from "~/utils/types";

const MainInputs = ({ label, input }: MainInputsProps) => {
  return (
    <section className="space-y-3">
      {/* name */}
      <div>
        <label htmlFor="name" className={`${label}`}>
          name
        </label>
        <input type="text" id="name" className={`${input}`} />
      </div>
      {/* price */}
      <div>
        <label htmlFor="price" className={`${label}`}>
          price
        </label>
        <input type="number" id="price" className={`${input}`} />
      </div>
      {/* category */}
      <div>
        <label htmlFor="category" className={`${label}`}>
          category
        </label>
        <input type="text" id="category" className={`${input}`} />
      </div>
      {/* likes */}
      <div>
        <label htmlFor="likes" className={`${label}`}>
          likes
        </label>
        <input type="number" id="likes" className={`${input}`} />
      </div>
      {/* title */}
      <div>
        <label htmlFor="title" className={`${label}`}>
          title
        </label>
        <input type="text" id="title" className={`${input}`} />
      </div>
      {/* description */}
      <div>
        <label htmlFor="description" className={`${label}`}>
          description
        </label>
        <textarea
          id="description"
          rows={5}
          className="textarea textarea-bordered border-2 border-black w-full focus:outline-none focus:border-amber-500 max-w-[40rem]"
        />
      </div>
      {/* inStore */}
      <div className="flex items-start gap-4">
        <label htmlFor="inStore" className={`${label}`}>
          In store?
        </label>
        <input
          type="checkbox"
          id="inStore"
          defaultChecked
          className="checkbox checkbox-accent accent-amber-500 ring-1 ring-black checkbox-md"
        />
      </div>
    </section>
  );
};
export default MainInputs;
