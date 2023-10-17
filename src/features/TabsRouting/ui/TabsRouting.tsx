import { useCallback } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { IonIcon } from "@ionic/react";
import cnBind from "classnames/bind";
import { add } from "ionicons/icons";

import { ROUTES } from "../../../shared/const/Routes";
import { useActiveClass } from "../../../shared/lib/hooks/useActiveClass";
import { isOpen } from "../../../shared/lib/module/reducers/generalReducer";
import { useHookDispatch } from "../../../shared/lib/module/store/configStore";
import { Button } from "../../../shared/ui/Button/Button";
import { TabsRoutes } from "../../const/variebles";

import styles from "./style.module.scss";

const cx = cnBind.bind(styles);
export const TabsRouting = () => {
    const dispatch = useHookDispatch();
    const url = useLocation();
    const { indexBtn, setIsIndex } = useActiveClass(0);
    const handleIsOpenModal = useCallback(() => {
        if (url.pathname === ROUTES.HOME || url.pathname === ROUTES.TASKS) {
            dispatch(isOpen());
        }
    }, [dispatch, url.pathname]);

    return (
        <div className={cx("controlling")}>
            <div className={cx("controlling-tabs")}>
                {TabsRoutes.map((btn, i) => (
                    <Button className={cx("controlling-tabs__tab-item")} handleClick={() => setIsIndex(i)} key={i}>
                        {btn.href && (
                            <Link
                                className={cx("controlling-tabs__tab-item__link", indexBtn === i && "link__active")}
                                to={btn.href}
                            >
                                <IonIcon icon={btn.icon} size="large" />
                            </Link>
                        )}
                    </Button>
                ))}
            </div>
            <div className={cx("controlling-tab__modal")}>
                <Button className={cx("controlling-tab__modal-btn__added")} handleClick={handleIsOpenModal}>
                    <IonIcon className={cx("icon")} icon={add} size="large" />
                </Button>
            </div>
        </div>
    );
};
