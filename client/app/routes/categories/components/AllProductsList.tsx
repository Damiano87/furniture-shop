// import { resetQuantity } from "@/lib/features/cartSlice";
// import { resetImgIndex } from "@/lib/features/singleProductSlice";
// import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router";
import { formatToPLN } from "~/utils/functions";
import data from "../../../data";

const CategoriesButtons = () => {
  //   const allProducts = useSelector((state) => state.products.allProducts);
  //   const dispatch = useDispatch();

  console.log(data);
  return (
    <div className="my-36">
      <p className="font-bold">{data?.length} products</p>
      <div className=" md:w-full grid md:grid-cols-2 lg:grid-cols-[1fr,1fr,1fr,1fr] gap-7 justify-items-center border-t-[1px] border-black pt-14 mt-2 mx-auto">
        {data?.map((product) => {
          const { id, name, price, category, inStore, likes, images } = product;
          return (
            <Link
              //   onClick={() => {
              //     dispatch(resetImgIndex());
              //     dispatch(resetQuantity());
              //   }}
              to={`/categories/${id}`}
              key={id}
              className="relative w-full hover:border-black duration-500 cursor-pointer border-4 px-6 py-4"
            >
              <div className="relative h-[20rem] max-w-[20rem] mx-auto mb-6">
                <img
                  src={images[0]}
                  sizes="(max-width: 768px) 100vw"
                  className="object-contain w-full h-full"
                  alt={name}
                />
              </div>
              <div>
                <h3 className="capitalize">{name}</h3>
                <p className="font-semibold">{formatToPLN(price)}</p>
              </div>
              {inStore ? (
                <div className="absolute top-0 left-0 bg-yellow-600 rounded-br-lg px-2 py-1">
                  <h4 className="text-white">w magazynie</h4>
                </div>
              ) : null}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default CategoriesButtons;
