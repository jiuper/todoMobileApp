import React from "react";
import { Redirect } from "react-router";
import { Route } from "react-router-dom";
import { IonFab, IonFabButton, IonIcon, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from "@ionic/react";
import cnBind from "classnames/bind";
import { add, calendarOutline, documentTextOutline, homeOutline, peopleOutline } from "ionicons/icons";

import { Projects } from "../../../pages/Projects/Projects";
import { Tasks } from "../../../pages/Tasks/Tasks";
import { ROUTES } from "../../../shared/const/Routes";

import styles from "./TabsRouting.module.scss";

const cx = cnBind.bind(styles);
export const TabsRouting = () => {
    const IonListFabBtn: { icon: string; href?: string }[] = [
        { icon: homeOutline, href: ROUTES.HOME },
        { icon: calendarOutline },
        { icon: documentTextOutline, href: ROUTES.TASKS },
        { icon: peopleOutline },
    ];

    return (
        <>
            <IonTabs>
                <IonRouterOutlet>
                    <Redirect exact from="/" to={ROUTES.HOME} />
                    <Route path={ROUTES.HOME}>
                        <Projects />
                    </Route>
                    <Route path={ROUTES.TASKS}>
                        <Tasks />
                    </Route>
                </IonRouterOutlet>
                <IonTabBar className={cx("tabs")} slot="bottom">
                    {IonListFabBtn.map((btn, i) => (
                        <IonTabButton layout="icon-start" tab={`tab${i + 1}`} key={btn.icon} href={btn.href}>
                            <IonIcon icon={btn.icon} />
                        </IonTabButton>
                    ))}
                </IonTabBar>
            </IonTabs>
            <IonFab className={cx("tab-action")} vertical="bottom" horizontal="center" slot="fixed">
                <IonFabButton id="open-modal" className={cx("tab")}>
                    <IonIcon icon={add} />
                </IonFabButton>
            </IonFab>
        </>
    );
};
