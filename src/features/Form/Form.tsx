import { IonList } from "@ionic/react";
import cnBind from "classnames/bind";

import { TextInput } from "../../shared/ui/TextInput/TextInput";

import styles from "./Form.module.scss";

const cx = cnBind.bind(styles);
export const Form = () => {
    return (
        <div className={cx("form")}>
            <IonList>
                <TextInput
                    labelPlacement="floating"
                    label="Email"
                    placeholder=""
                    value=""
                    onChange={() => {}}
                    onBlur={() => {}}
                />
            </IonList>
        </div>
    );
};
