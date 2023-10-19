import { IonIcon } from "@ionic/react";
import cnBind from "classnames/bind";
import { calendarOutline } from "ionicons/icons";

import AD from "../../assets/icons/ArrowDown.svg";
import { Button } from "../Button/Button";

import type { IDropDownDateType } from "./DropDownDate.type";

import styles from "./style.module.scss";

const cx = cnBind.bind(styles);

export const DropDownDate = ({ value, title, handleChange }: IDropDownDateType) => {
    return (
        <div className={cx("dropdowndate")}>
            <div className={cx("dropdowndate__container")}>
                <input className={cx("btn-date")} type="date" onChange={handleChange} />
                <div className={cx("dropdowndate__content")}>
                    <div className="dropdowndate__icon">
                        <IonIcon icon={calendarOutline} />
                    </div>
                    <div className="dropdowndate__item">
                        <div className={cx("dropdown__option-caption")}>{title}</div>
                        {value && <span>{new Date(value).toUTCString().slice(4, 16)}</span>}
                    </div>
                </div>
                <div className={cx("dropdowndate__btn")}>
                    <Button className={cx("btn-action")} handleClick={() => {}}>
                        <IonIcon icon={AD} size="large" />
                    </Button>
                </div>
            </div>
        </div>
    );
};
