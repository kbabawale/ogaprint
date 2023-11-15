import { CSSProperties, InputHTMLAttributes, useMemo } from "react";
import { UtilFunction } from "../util/functions";
import { SelectControlOptions } from "../util/model";

type AppProps<T> = {
  options: SelectControlOptions<T>[];
  error?: boolean;
  disabled?: boolean;
  errorMessage?: string;
  customStyles?: CSSProperties;
  value?: T;
  extraTypeAttributes?: InputHTMLAttributes<unknown>[];
  onChange?: (event: React.KeyboardEvent<HTMLSelectElement>) => void;
};

const Input = ({
  error,
  options,
  errorMessage,
  disabled,
  customStyles,
  extraTypeAttributes,
  onChange,
  value = "",
}: AppProps<string | number>) => {
  const extraAttributes = useMemo(
    () => UtilFunction.flattenArrayToObj(extraTypeAttributes),
    [extraTypeAttributes]
  );
  return (
    <div className="flex flex-col justify-start">
      <select
        className={`w-full mt-2 px-3 py-2.5 rounded-lg border border-c-gray-200 ${
          error ? "border-c-red border" : ""
        } ${disabled ? "cursor-not-allowed" : ""}`}
        disabled={disabled}
        defaultValue={value}
        {...extraAttributes}
        onChange={onChange}
        style={customStyles}
      >
        <option value="">Select One:</option>
        {options &&
          options.length > 0 &&
          options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
      </select>
      {error && errorMessage && (
        <span className="mt-1 text-sm text-red-500">{errorMessage}</span>
      )}
    </div>
  );
};

export default Input;
