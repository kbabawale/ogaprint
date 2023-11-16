import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { ButtonType } from "../util/enum";
import Loader from "./Loader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type AppProps = {
  label: string;
  type?: "button" | "submit" | "reset";
  theme?: ButtonType;
  style?: any;
  disabled?: boolean;
  loading?: boolean;
  click?: () => void;
  extraclass?: string;
  icon?: IconDefinition;
  iconPosition?: "before" | "after";
};

const Button = ({
  label,
  icon,
  iconPosition = "before",
  click,
  type = "button",
  extraclass,
  theme = ButtonType.PRIMARY,
  disabled = false,
  loading = false,
}: AppProps) => {
  return (
    <>
      {theme === ButtonType.PRIMARY && (
        <button
          onClick={click}
          disabled={disabled}
          className={`btn-primary ${extraclass ? extraclass : ""}`}
          type={type}
        >
          {!loading &&
            (icon ? (
              iconPosition === "before" ? (
                <div>
                  {<FontAwesomeIcon icon={icon} />}
                  <span className={`text-09 ms-2`}>{label}</span>
                </div>
              ) : (
                <div>
                  <span className={`text-09 me-2`}>{label}</span>
                  {<FontAwesomeIcon icon={icon} />}
                </div>
              )
            ) : (
              <span>{label}</span>
            ))}
          {loading && (
            <div className="w-full flex items-center justify-center">
              <Loader width={25} height={25} visible color="#fff" />
            </div>
          )}
        </button>
      )}

      {theme === ButtonType.SECONDARY && (
        <button
          onClick={click}
          disabled={disabled}
          className={`btn-secondary ${extraclass ? extraclass : ""}`}
          type={type}
        >
          {!loading &&
            (icon ? (
              iconPosition === "before" ? (
                <div>
                  {<FontAwesomeIcon icon={icon} />}
                  <span className={`text-09 ms-2`}>{label}</span>
                </div>
              ) : (
                <div>
                  <span className={`text-09 me-2`}>{label}</span>
                  {<FontAwesomeIcon icon={icon} />}
                </div>
              )
            ) : (
              <span>{label}</span>
            ))}
          {loading && (
            <div className="w-full flex items-center justify-center">
              <Loader width={25} height={25} visible color="#fff" />
            </div>
          )}
        </button>
      )}

      {theme === ButtonType.ALTERNATE && (
        <button
          onClick={click}
          disabled={disabled}
          className={`btn-alternate ${extraclass ? extraclass : ""}`}
          type={type}
        >
          {!loading &&
            (icon ? (
              iconPosition === "before" ? (
                <div>
                  {<FontAwesomeIcon icon={icon} />}
                  <span className={`text-09 ms-2`}>{label}</span>
                </div>
              ) : (
                <div>
                  <span className={`text-09 me-2`}>{label}</span>
                  {<FontAwesomeIcon icon={icon} />}
                </div>
              )
            ) : (
              <span>{label}</span>
            ))}
          {loading && (
            <div className="w-full flex items-center justify-center">
              <Loader width={25} height={25} visible color="#fff" />
            </div>
          )}
        </button>
      )}
    </>
  );
};

export default Button;
