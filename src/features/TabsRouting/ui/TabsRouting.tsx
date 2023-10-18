import { useCallback } from "react";
import { useLocation } from "react-router";
import { IonIcon } from "@ionic/react";
import cnBind from "classnames/bind";
import { add } from "ionicons/icons";

import { ROUTES } from "../../../shared/const/Routes";
import { isOpen } from "../../../shared/lib/module/reducers/generalReducer";
import { useHookDispatch } from "../../../shared/lib/module/store/configStore";
import { Button } from "../../../shared/ui/Button/Button";
import { Tabs } from "../../../shared/ui/Tabs/Tabs";
import { TabsRoutes } from "../../const/variebles";

import styles from "./style.module.scss";

const cx = cnBind.bind(styles);
export const TabsRouting = () => {
    const dispatch = useHookDispatch();
    const url = useLocation();
    const handleIsOpenModal = useCallback(() => {
        if (url.pathname === ROUTES.HOME || url.pathname === ROUTES.TASKS) {
            dispatch(isOpen());
        }
    }, [dispatch, url.pathname]);

    return (
        <div className={cx("controlling")}>
            <Tabs tabsRoutes={TabsRoutes} />
            <div className={cx("controlling__modal")}>
                <Button className={cx("controlling__button")} handleClick={handleIsOpenModal}>
                    <IonIcon className={cx("controlling__icon")} icon={add} size="large" />
                </Button>
            </div>
        </div>
    );
};
