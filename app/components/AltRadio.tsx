import React from "react";

type Props = {
  title: string;
  price: number;
  name: string;
  value: string;
};

function AltRadio({ price, title, name, value }: Props) {
  return (
    <label
      htmlFor={title}
      className="flex items-center justify-between border border-black/20 rounded-md w-full px-3 py-2 mb-3"
    >
      <span className="font-bold text-sm text-black font-source">{title}</span>
      <div className="flex items-center">
        <span className="font-normal text-sm pe-5">N{price} per unit</span>
        <input
          name={name}
          className="border border-c-gray-200 bg-transparent"
          id={title}
          type="radio"
          value={value}
        />
      </div>
    </label>
  );
}

export default AltRadio;
