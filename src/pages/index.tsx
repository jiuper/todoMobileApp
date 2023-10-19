import { Redirect } from "react-router";
import { Route } from "react-router-dom";

import { ROUTES } from "../shared/const/Routes";

import { Calendar } from "./Calendar/Calendar";
import { Home } from "./Home/Home";
import { People } from "./People/People";
import { Tasks } from "./Tasks/Tasks";

export const Routing = () => {
    return (
        <>
            <Redirect exact from="/" to={ROUTES.HOME} />
            <Route path={ROUTES.HOME} render={() => <Home />} exact />
            <Route path={ROUTES.CALENDAR} render={() => <Calendar />} exact />
            <Route path={ROUTES.TASKS} render={() => <Tasks />} exact />
            <Route path={ROUTES.PEOPLE} render={() => <People />} exact />
        </>
    );
};
