import { useState } from "react";
import cnBind from "classnames/bind";

import type { IButton } from "./Button.type";

import styles from "./style.module.scss";

const cx = cnBind.bind(styles);

export const Button = ({
    className,
    children,
    type,
    handleClick,
    fill = "clear",
    disabled = false,
    forwardedRef,
}: IButton): JSX.Element => {
    const [isAnimate, setIsAnimate] = useState<boolean>(false);

    const handleMouseDown = () => {
        setIsAnimate(true);
        setTimeout(() => setIsAnimate(false), 600);
    };

    return (
        <button
            ref={forwardedRef}
            className={cx(`button`, `${isAnimate ? "animate" : ""}`, fill, className || "")}
            disabled={disabled}
            type={type ? "submit" : "button"}
            onClick={handleClick}
            onMouseDown={handleMouseDown}
        >
            {children}
        </button>
    );
};
