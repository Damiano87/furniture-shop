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

const Trendy = () => {
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();

  return (
    <section className="w-[90vw] mt-28 mx-auto lg:w-full">
      <h1 className="text-[1.5rem] font-semibold tracking-wider mb-4">
        Trendy
      </h1>
      <div className="carousel carousel-center space-x-3 w-full">
        {products.slice(5, 12).map((product) => {
          const { id, name, price, inStore, images } = product;
          return (
            <Link
              onClick={() => {
                dispatch(resetImgIndex());
                dispatch(resetQuantity());
              }}
              href={`/categories/${id}`}
              key={id}
              className="carousel-item"
            >
              <div className="relative w-[250px] hover:border-black duration-500 cursor-pointer border-4 px-6 py-4">
                <div className="relative h-[15rem]  mx-auto mb-6">
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
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Trendy;
