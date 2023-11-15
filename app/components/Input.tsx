import { CSSProperties, InputHTMLAttributes, useMemo } from "react";
import { UtilFunction } from "../util/functions";

type AppProps = {
  placeholder?: string;
  type?: string;
  error?: boolean;
  disabled?: boolean;
  extraClass?: string;
  errorMessage?: string;
  customStyles?: CSSProperties;
  value?: string;
  onKeyDown?: (event: React.KeyboardEvent<HTMLDivElement>) => void;
  extraTypeAttributes?: InputHTMLAttributes<unknown>[];
  onChange?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
};

const Input = ({
  error,
  errorMessage,
  placeholder,
  disabled,
  extraClass,
  customStyles,
  extraTypeAttributes,
  onKeyDown,
  onChange,
  type = "text",
  value = "",
}: AppProps) => {
  const extraAttributes = useMemo(
    () => UtilFunction.flattenArrayToObj(extraTypeAttributes),
    [extraTypeAttributes]
  );
  return (
    <div className="flex flex-col justify-start">
      <input
        className={`${
          extraClass ? extraClass : ""
        } mt-2 px-3 py-2 rounded-lg w-full border border-c-gray-200 ${
          error ? "border-c-red border" : ""
        }`}
        disabled={disabled}
        type={type}
        placeholder={placeholder}
        defaultValue={value}
        {...extraAttributes}
        onKeyDown={onKeyDown}
        onInput={onChange}
        style={customStyles}
      />
      {error && errorMessage && (
        <span className="mt-1 text-sm text-red-500">{errorMessage}</span>
      )}
    </div>
  );
};

export default Input;
