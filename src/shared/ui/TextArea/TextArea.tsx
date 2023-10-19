import cnBind from "classnames/bind";

import type { ITextArea } from "./TextArea.type";

import styles from "./style.module.scss";

const cx = cnBind.bind(styles);
export const TextArea = ({
    handleChange,
    name,
    className,
    error,
    value,
    isBlur,
    maxLength,
    disabled,
    placeholder,
}: ITextArea) => {
    return (
        <textarea
            value={value}
            onChange={handleChange}
            maxLength={maxLength}
            disabled={disabled}
            className={cx("textarea", className, error && "error")}
            name={name}
            placeholder={placeholder}
            onBlur={isBlur}
        />
    );
};
