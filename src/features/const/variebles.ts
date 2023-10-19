import { calendarOutline, documentTextOutline, homeOutline, peopleOutline } from "ionicons/icons";

import { ROUTES } from "../../shared/const/Routes";
import type { TabsRouteTypes } from "../../shared/ui/Tabs/tabs.type";

export const TabsRoutes: TabsRouteTypes[] = [
    { icon: homeOutline, href: ROUTES.HOME, tab: "home" },
    { icon: calendarOutline, href: ROUTES.CALENDAR, tab: "calendar" },
    { icon: "" },
    { icon: documentTextOutline, href: ROUTES.TASKS, tab: "tasks" },
    { icon: peopleOutline, href: ROUTES.PEOPLE, tab: "people" },
];
