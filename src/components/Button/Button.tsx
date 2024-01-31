import React, { FC } from "react";

export interface ButtonProps {
    label: string;
}

export const Button: FC<ButtonProps> = props => {
    return <button>{props.label}</button>;
};
