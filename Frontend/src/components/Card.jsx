import React from "react";

function Card({ item }) {
  const titleFormatted = item.title.slice(0, 20);
  const percentageDrop = (
    ((item.price_strikethrough - item.price) / item.price_strikethrough) *
    100
  ).toFixed(0);

  return (
    <>
      <a
        href={`https://www.amazon.in/${item.url}`}
        className=" flex flex-row rounded-2xl overflow-hidden bg-white shadow-xl font-smg"
        target="_blank"
        rel="noreferrer"
      >
        <div className="w-5/12 h-36 overflow-hidden flex flex-row items-center justify-center">
          <img src={item.url_image} className="" alt={item.title} />
        </div>
        <div className="w-5/12 px-2 py-2">
          <p className="font-bold text-base md:text-lg">{titleFormatted}...</p>
          <p className="font-bold">Price drop from</p>
          <p>
            <span className="">{item.price_strikethrough} Rs</span> to{" "}
            <span className="">{item.price} Rs</span>
          </p>
          <p className="font-bold">
            Rating:<span className="font-normal"> {item.rating} ⭐</span>
          </p>
        </div>
        <div className="w-2/12 flex flex-row items-start justify-center pt-4">
          <div className="bg-red-600 rounded-full p-3 text-white font-bold">
            {percentageDrop}%
          </div>
        </div>
      </a>
    </>
  );
}

export default Card;
