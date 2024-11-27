// Format the price above to PLN using the locale, style, and currency.
export const formatToPLN = (price: number) => {
  return new Intl.NumberFormat("en-PL", {
    style: "currency",
    currency: "PLN",
  }).format(price);
};
