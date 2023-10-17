import { IonInput, IonTextarea } from "@ionic/react";
import cnBind from "classnames/bind";

import styles from "./style.module.scss";

const cx = cnBind.bind(styles);
export const Form = () => {
    return (
        <div className={cx("form")}>
            <IonInput value="" label="Project Name" maxlength={25} labelPlacement="floating" required />
            <IonTextarea label="Description" maxlength={150} labelPlacement="floating" />
        </div>
    );
};
