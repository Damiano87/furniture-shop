"use client";

import { resetQuantity } from "@/lib/features/cartSlice";
import { resetImgIndex } from "@/lib/features/singleProductSlice";

import Image from "next/image";
import Link from "next/link";

import { useSelector, useDispatch } from "react-redux";

// Format the price above to USD using the locale, style, and currency.
let PLN = new Intl.NumberFormat("en-PL", {
  style: "currency",
  currency: "PLN",
});

const PopularProducts = () => {
  const popularProducts = useSelector(
    (state) => state.products.popularProducts
  ); // redux state
  const dispatch = useDispatch();

  return (
    <section id="popularne" className="w-[90vw] lg:w-full mx-auto mt-28">
      <h1 className="text-[1.5rem] font-semibold tracking-wider mb-4">
        Popularne produkty
      </h1>
      <div className=" md:w-full grid md:grid-cols-2 lg:grid-cols-[1fr,1fr,1fr,1fr] gap-7 justify-items-center mx-auto">
        {[...popularProducts]
          .sort((a, b) => b.likes - a.likes)
          .slice(0, 8)
          .map((product) => {
            const { id, name, price, category, inStore, likes, images } =
              product;
            return (
              <Link
                onClick={() => {
                  dispatch(resetImgIndex());
                  dispatch(resetQuantity());
                }}
                href={`/categories/${id}`}
                key={id}
                className="relative w-full hover:border-black duration-500 cursor-pointer border-4 px-6 py-4"
              >
                <div className="relative h-[20rem] mb-6">
                  <Image
                    src={images[0].src}
                    fill
                    sizes="(max-width: 768px) 100vw"
                    className="object-contain"
                    alt={name}
                  />
                </div>
                <div>
                  <h3 className="capitalize">{name}</h3>
                  <p className="font-semibold">{PLN.format(price)}</p>
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
    </section>
  );
};

export default PopularProducts;
