import { IonInput, IonTextarea } from "@ionic/react";
import cnBind from "classnames/bind";

import { DropDown } from "../../../shared/ui/DropDown/DropDown";
import { DropDownDate } from "../../../shared/ui/DropDownDate/DropDownDate";

import styles from "./style.module.scss";

const cx = cnBind.bind(styles);
export const Form = () => {
    return (
        <div className={cx("form")}>
            <DropDown options={[]} />
            <IonInput value="" label="Project Name" maxlength={25} labelPlacement="floating" required />
            <IonTextarea label="Description" maxlength={150} labelPlacement="floating" />
            <DropDownDate />
        </div>
    );
};
