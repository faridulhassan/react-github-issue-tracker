import React, { createRef, useEffect, useState } from "react";

/*Styles*/
import styles from "./Toast.module.css";

const Toast: React.FC<{ show?: boolean; message: string }> = ({
  show = false,
  message,
}): JSX.Element => {
  const ref = createRef<HTMLDivElement>();
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    setIsActive(show);
    setTimeout(() => {
      setIsActive(false);
    }, 6000);
  }, [show]);
  return (
    <div
      ref={ref}
      className={`${styles["toast"]} ${isActive ? styles["show"] : ""}`}
    >
      {message}
    </div>
  );
};
export default Toast;
