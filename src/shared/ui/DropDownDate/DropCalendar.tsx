import { useEffect, useRef, useState } from "react";
import { IonDatetime, IonIcon } from "@ionic/react";
import cnBind from "classnames/bind";
import { calendarOutline } from "ionicons/icons";

import AD from "../../assets/icons/ArrowDown.svg";
import { Button } from "../Button/Button";

import styles from "./style.module.scss";

const cx = cnBind.bind(styles);

export const DropCalendar = ({ title }: { title: string }): JSX.Element => {
    const [isDrop, setIsDrop] = useState<boolean>(false);
    const btnRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        if (btnRef && btnRef.current) {
            btnRef.current.style.transform = isDrop ? "rotate(180deg)" : "rotate(0deg)";
        }
    }, [isDrop]);

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
                {isDrop && <IonDatetime className={cx("dropDate__calendar")} />}
            </div>
        </div>
    );
};
