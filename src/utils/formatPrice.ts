export default function (value: number) {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2,
    currencyDisplay: "narrowSymbol",
  }).format(value);
}
