import { CSSProperties, InputHTMLAttributes, useMemo } from "react";
import { UtilFunction } from "../util/functions";

type AppProps = {
  placeholder?: string;
  error?: boolean;
  disabled?: boolean;
  extraClass?: string;
  extraMessage?: string;
  errorMessage?: string;
  customStyles?: CSSProperties;
  value?: string;
  onKeyDown?: (event: React.KeyboardEvent<HTMLDivElement>) => void;
  extraTypeAttributes?: InputHTMLAttributes<unknown>[];
  onChange?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
};

const Textarea = ({
  error,
  errorMessage,
  placeholder,
  disabled,
  extraMessage,
  extraClass,
  customStyles,
  extraTypeAttributes,
  onKeyDown,
  onChange,
  value = "",
}: AppProps) => {
  const extraAttributes = useMemo(
    () => UtilFunction.flattenArrayToObj(extraTypeAttributes),
    [extraTypeAttributes]
  );
  return (
    <div className="flex flex-col justify-start">
      <textarea
        className={`${
          extraClass && extraClass
        } mt-2 px-3 py-2 rounded-lg border border-c-gray-200 ${
          error ? "border-c-red border" : ""
        }`}
        disabled={disabled}
        placeholder={placeholder}
        defaultValue={value}
        {...extraAttributes}
        onKeyDown={onKeyDown}
        onInput={onChange}
        style={customStyles}
      ></textarea>
      {error && errorMessage && (
        <span className="mt-1 text-sm text-red-500">{errorMessage}</span>
      )}
      {extraMessage && (
        <span className="mt-2 text-xs text-c-gray-600 font-light">
          {extraMessage}
        </span>
      )}
    </div>
  );
};

export default Textarea;
