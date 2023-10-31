import { useCallback, useEffect, useRef, useState } from "react";
import type { DatetimeChangeEventDetail } from "@ionic/react";
import { IonDatetime, IonIcon } from "@ionic/react";
import cnBind from "classnames/bind";
import { calendarOutline } from "ionicons/icons";

import AD from "../../assets/icons/ArrowDown.svg";
import { Button } from "../Button/Button";

import type { IDropDownDateType } from "./DropDownDate.type";

import styles from "./style.module.scss";

const cx = cnBind.bind(styles);

export const DropCalendar = ({ title, value, handleChange, type }: IDropDownDateType): JSX.Element => {
    const [isDrop, setIsDrop] = useState<boolean>(false);
    const btnRef = useRef<HTMLButtonElement>(null);
    const calendarRef = useRef<HTMLIonDatetimeElement>(null);

    const clickOut = useCallback((e: MouseEvent) => {
        if (
            btnRef.current &&
            !btnRef.current.contains(e.target as Node) &&
            calendarRef.current &&
            !calendarRef.current.contains(e.target as Node)
        ) {
            setIsDrop(false);
        }
    }, []);

    useEffect(() => {
        if (btnRef && btnRef.current) {
            btnRef.current.style.transform = isDrop ? "rotate(180deg)" : "rotate(0deg)";
        }

        document.addEventListener("click", clickOut);

        return () => document.removeEventListener("click", clickOut);
    }, [clickOut, isDrop]);

    const onIonChange = (e: CustomEvent<DatetimeChangeEventDetail>) => {
        if (typeof e.detail.value === "string") {
            handleChange(e.detail.value, type);
        }
    };

    return (
        <div className={cx("dropDate")}>
            <div className={cx("dropDate__container")}>
                <div className={cx("dropDate__info")}>
                    <IonIcon size="large" icon={calendarOutline} />
                    <span>{title}</span>
                </div>
                <Button forwardedRef={btnRef} className={cx("dropDate__drop")} handleClick={() => setIsDrop(!isDrop)}>
                    <IonIcon icon={AD} size="large" />
                </Button>
                {isDrop && <IonDatetime ref={calendarRef} value={value} onIonChange={onIonChange} />}
            </div>
        </div>
    );
};
