import React from "react";
import styles from "./styles.css";
import clsx from "classnames";

interface Props {
    text: string;
}

export const MyComponent: React.FC<Props> = ({ text }) => {
  return <div className={clsx(styles.wrapper)}>{text}</div>;
};
