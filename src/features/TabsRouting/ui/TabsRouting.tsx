import { Redirect } from "react-router";
import { Route } from "react-router-dom";
import { IonFab, IonFabButton, IonIcon, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from "@ionic/react";
import { add, calendarOutline, documentTextOutline, homeOutline, peopleOutline } from "ionicons/icons";

import { Calendar } from "../../../pages/Calendar/Calendar";
import { Home } from "../../../pages/Home/Home";
import { People } from "../../../pages/People/People";
import { Tasks } from "../../../pages/Tasks/Tasks";
import { ROUTES } from "../../../shared/const/Routes";
import { isOpen } from "../../../shared/lib/module/reducers/generalReducer";
import { useHookDispatch } from "../../../shared/lib/module/store/configStore";

import "./TabsRouting.module.scss";

export const TabsRouting = () => {
    const dispatch = useHookDispatch();
    const handleIsOpenModal = () => dispatch(isOpen());
    const IonListFabBtn: { icon: string; href?: string; tab?: string }[] = [
        { icon: homeOutline, href: ROUTES.HOME, tab: "home" },
        { icon: calendarOutline, href: ROUTES.CALENDAR, tab: "calendar" },
        { icon: documentTextOutline, href: ROUTES.TASKS, tab: "tasks" },
        { icon: peopleOutline, href: ROUTES.PEOPLE, tab: "people" },
    ];

    return (
        <>
            <IonTabs>
                <IonRouterOutlet>
                    <Redirect exact from="/" to={ROUTES.HOME} />
                    <Route path={ROUTES.HOME} render={() => <Home />} exact />
                    <Route path={ROUTES.CALENDAR} render={() => <Calendar />} exact />
                    <Route path={ROUTES.TASKS} render={() => <Tasks />} exact />
                    <Route path={ROUTES.PEOPLE} render={() => <People />} exact />
                </IonRouterOutlet>

                <IonTabBar slot="bottom">
                    {IonListFabBtn.map((btn, i) => (
                        <IonTabButton href={btn.href} key={i} tab={btn.tab}>
                            <IonIcon icon={btn.icon} />
                        </IonTabButton>
                    ))}
                </IonTabBar>
            </IonTabs>
            <IonFab vertical="bottom" horizontal="center" slot="fixed">
                <IonFabButton onClick={handleIsOpenModal}>
                    <IonIcon icon={add} />
                </IonFabButton>
            </IonFab>
        </>
    );
};
