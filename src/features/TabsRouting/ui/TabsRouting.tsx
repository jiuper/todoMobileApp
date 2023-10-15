import { Redirect } from "react-router";
import { Route } from "react-router-dom";
import { IonFab, IonFabButton, IonIcon, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from "@ionic/react";
import cnBind from "classnames/bind";
import { add, calendarOutline, documentTextOutline, homeOutline, peopleOutline } from "ionicons/icons";

import { Home } from "../../../pages/Home/Home";
import { Tasks } from "../../../pages/Tasks/Tasks";
import { ROUTES } from "../../../shared/const/Routes";
import { isOpen } from "../../../shared/lib/module/reducers/generalReducer";
import { useHookDispatch } from "../../../shared/lib/module/store/configStore";

import styles from "./TabsRouting.module.scss";

const cx = cnBind.bind(styles);
export const TabsRouting = () => {
    const dispatch = useHookDispatch();
    const handleIsOpenModal = () => dispatch(isOpen());
    const IonListFabBtn: { icon: string; href?: string; tab?: string }[] = [
        { icon: homeOutline, href: ROUTES.HOME, tab: "home" },
        { icon: calendarOutline },
        { icon: documentTextOutline, href: ROUTES.TASKS, tab: "tasks" },
        { icon: peopleOutline },
    ];

    return (
        <>
            <IonTabs>
                <IonRouterOutlet>
                    <Redirect exact from="/" to={ROUTES.HOME} />
                    <Route path={ROUTES.HOME} render={() => <Home />} exact />
                    <Route path={ROUTES.TASKS} render={() => <Tasks />} exact />
                </IonRouterOutlet>

                <IonTabBar className={cx("tabs")} slot="bottom">
                    {IonListFabBtn.map((btn) => (
                        <IonTabButton
                            style={{ background: "transparent" }}
                            href={btn.href}
                            key={btn.icon}
                            tab={btn.tab}
                        >
                            <IonIcon icon={btn.icon} />
                        </IonTabButton>
                    ))}
                </IonTabBar>
            </IonTabs>
            <IonFab className={cx("tab-action")} vertical="bottom" horizontal="center" slot="fixed">
                <IonFabButton onClick={handleIsOpenModal} className={cx("tab")}>
                    <IonIcon icon={add} />
                </IonFabButton>
            </IonFab>
        </>
    );
};
