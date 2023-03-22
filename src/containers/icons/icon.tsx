import * as React from "react";
import { IconPropsT } from "./types";

const Icon: React.FC<IconPropsT> = (props) => {
  const { children, title, className, height, fill, width, ...otherProps } =
    props;

  return (
    <svg
      style={{ fill: `${fill || "currentcolor"}` }}
      className={`${className} text-black dark:text-white`}
      height={height || "auto"}
      width={width || "auto"}
      {...otherProps}
    >
      {title ? <title>{title}</title> : null}
      {children}
    </svg>
  );
};

export default Icon;
