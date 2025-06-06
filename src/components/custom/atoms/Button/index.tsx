import { ReactNode } from "react";
import { MouseEventHandler } from "react";
import { Button as BaseButton } from "../../../ui/button";

type ButtonVariant = "secondary" | "destructive" | "outline" | "ghost" | "link";
type ButtonType = "button" | "submit" | "reset";

interface ButtonProps {
  id: string;
  type?: ButtonType;
  disabled?: boolean;
  variant?: ButtonVariant;
  customClass?: string;
  dataTestId: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
}

const Button = (props: ButtonProps) => {
  const {
    id,
    type,
    disabled,
    variant,
    customClass,
    dataTestId,
    onClick,
    children,
  } = props;

  const getDataTestId = () => dataTestId || (variant ? `${variant}-${id}` : id);

  return (
    <BaseButton
      id={id}
      type={type}
      {...(variant && { variant })}
      disabled={disabled ?? false}
      className={customClass ? customClass : ""}
      data-testid={getDataTestId()}
      {...(onClick && { onClick })}
    >
      {children}
    </BaseButton>
  );
};

export default Button;
