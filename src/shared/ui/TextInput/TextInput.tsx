import { IonInput } from "@ionic/react";

import type { ITextInputType } from "./TextInput.type";

import "./style.module.scss";

export const TextInput = ({
    placeholder,
    label = " ",
    labelPlacement,
    onBlur = () => {},
    type = "text",
    value,
    fill,
    onChange,
    name,
    required,
    multiple,
}: ITextInputType) => {
    return (
        <IonInput
            fill={fill}
            type={type}
            value={value}
            label={label}
            labelPlacement={labelPlacement}
            onBlur={onBlur}
            onChange={onChange}
            placeholder={placeholder}
            name={name}
            required={required}
            multiple={multiple}
        />
    );
};
