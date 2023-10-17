import { calendarOutline, documentTextOutline, homeOutline, peopleOutline } from "ionicons/icons";

import { ROUTES } from "../../shared/const/Routes";

export const TabsRoutes: { icon: string; href?: string; tab?: string }[] = [
    { icon: homeOutline, href: ROUTES.HOME, tab: "home" },
    { icon: calendarOutline, href: ROUTES.CALENDAR, tab: "calendar" },
    { icon: "" },
    { icon: documentTextOutline, href: ROUTES.TASKS, tab: "tasks" },
    { icon: peopleOutline, href: ROUTES.PEOPLE, tab: "people" },
];
