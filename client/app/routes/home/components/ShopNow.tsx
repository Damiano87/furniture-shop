import Image from "next/image";
import cozyroom2 from "../public/images/other/cozyroom2.jpg";
import Link from "next/link";

const ShopNow = () => {
  return (
    <section className="w-[90vw] lg:w-full mx-auto mt-28">
      <div className="md:flex">
        <div className="bg-slate-200 p-12 flex-1">
          <h1 className="text-[1.7rem] font-semibold">Żyj w harmonii</h1>
          <p className="text-slate-600 my-4 max-w-[30rem]">
            Oferujemy nie tylko wyjątkowe meble, ale również inspiracje do
            stworzenia wnętrza, które doskonale oddaje Twoją wyjątkową wizję
            harmonii. Nasza kolekcja mebli została starannie dobrana, aby
            wprowadzić do Twojego domu równowagę pomiędzy funkcjonalnością a
            estetyką.
          </p>
          <Link
            href={"/categories"}
            className="bg-yellow-600 border border-yellow-600 px-3 py-1 uppercase text-white hover:bg-white hover:text-yellow-600 hover:border-black cursor-pointer duration-300"
          >
            eksploruj
          </Link>
        </div>
        <div className="hidden md:block relative  w-1/2">
          <Image
            src={cozyroom2}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
            alt="cozy room"
          />
        </div>
      </div>
    </section>
  );
};

export default ShopNow;
