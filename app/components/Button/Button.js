import React from "react";
import { BUTTON_TYPE } from "../../utils/constants";

export default function Button({
  btnType,
  btnText,
  onClick,
  customClass,
  disabled,
  type,
}) {
  const getBtnType = () => {
    switch (btnType) {
      case BUTTON_TYPE.PRIMARY:
        return "bg-Button-primary rounded-[4px] text-center";
    }
  };
  const handleDisabled = () => {
    switch (disabled) {
      case true:
        return "cursor-not-allowed opacity-40 pointer-events-none";
      case false:
        return "cursor-pointer";
    }
  };

  return (
    <button
      className={`${customClass} ${getBtnType()} ${handleDisabled()}`}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      <span className="text-Text-primary font-medium text-lg">
        {btnText}
      </span>
    </button>
  );
}