import cnBind from "classnames/bind";

import type { ITextInput } from "./TextInput.type";

import styles from "./style.module.scss";

const cx = cnBind.bind(styles);

export const TextInput = ({
    placeholder,
    name,
    className,
    value,
    handleChange,
    disabled,
    isBlur,
    error = "",
    type = "text",
    maxLength,
}: ITextInput) => {
    return (
        <>
            <input
                type={type}
                step={0.1}
                placeholder={placeholder}
                className={cx("field", className, error ? "error" : "")}
                value={value}
                name={name}
                disabled={disabled}
                onBlur={isBlur}
                onChange={handleChange}
                maxLength={maxLength}
            />
            {error ? <span className={cx("input-error")}>{error}</span> : ""}
        </>
    );
};
