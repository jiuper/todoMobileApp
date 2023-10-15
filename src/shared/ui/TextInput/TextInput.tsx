import { IonInput, IonItem } from "@ionic/react";

import type { ITextInputType } from "./TextInput.type";

export const TextInput = ({
    placeholder,
    label = " ",
    labelPlacement,
    onBlur = () => {},
    type = "text",
    value,
    fill = "outline",
    onChange,
    name,
    required,
    multiple,
}: ITextInputType) => {
    return (
        <IonItem>
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
                style={{ "--padding-start": "16px" }}
            />
        </IonItem>
    );
};
