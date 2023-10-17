import { useMemo } from "react";
import { useLocation } from "react-router";
import { IonIcon } from "@ionic/react";
import cnBind from "classnames/bind";
import { arrowBack, notificationsOutline } from "ionicons/icons";

import { ROUTES } from "../../../shared/const/Routes";
import { Button } from "../../../shared/ui/Button/Button";

import styles from "./style.module.scss";

const cx = cnBind.bind(styles);
export const Header = ({
    back = false,
    isOpen = false,
    isClose = () => {},
}: {
    back?: boolean;
    isOpen?: boolean;
    isClose?: () => void;
}) => {
    const url = useLocation();

    const title = useMemo(
        () =>
            Object.entries(ROUTES)
                .map((el) => el[1] === url.pathname && el[0])
                .filter((el) => el)[0],
        [url.pathname],
    );
    const modalTitle = useMemo(() => (url.pathname === ROUTES.HOME ? "Add Project" : "Add Tasks"), [url.pathname]);

    return (
        <header className={cx("header")}>
            <div className={cx("header-container", "container")}>
                <div className={cx("header-toolbar")}>
                    {back && (
                        <Button className={cx("toolbar-back")} handleClick={isClose}>
                            <IonIcon className={cx("icon")} icon={arrowBack} size="large" />
                        </Button>
                    )}
                    <span className={cx("toolbar__title")}>{!isOpen ? title : modalTitle}</span>
                    <Button className={cx("toolbar-notification")} handleClick={() => {}}>
                        <IonIcon className={cx("icon")} icon={notificationsOutline} size="large" />
                    </Button>
                </div>
            </div>
        </header>
    );
};
