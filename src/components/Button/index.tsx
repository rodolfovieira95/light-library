import React from "react";

import { RootButton } from "./style";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "link";
  size?: "xs" | "sm" | "md" | "lg";
  children?: React.ReactNode;
  bgColor?: string;
  textColor?: string;
  borderColor?: string;
  fullWidth?: boolean;
  onClick?: () => void;
}

export const Button = ({ children, ...props }: ButtonProps) => {
  const widthProp = props.fullWidth ? { width: "100%" } : {};

  return (
    <RootButton
      {...props}
      style={{
        backgroundColor: props.bgColor,
        color: props.textColor,
        borderColor: props.borderColor,
        ...widthProp,
      }}
    >
      {children}
    </RootButton>
  );
};
