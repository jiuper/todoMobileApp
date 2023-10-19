import { Redirect } from "react-router";
import { Route } from "react-router-dom";

import { ROUTES } from "../shared/const/Routes";
import { Layout } from "../widgets/Layout/ui/Layout";

import { Calendar } from "./Calendar/Calendar";
import { Home } from "./Home/Home";
import { People } from "./People/People";
import { Tasks } from "./Tasks/Tasks";

export const Routing = () => {
    return (
        <Layout>
            <Redirect exact from="/" to={ROUTES.HOME} />
            <Route path={ROUTES.HOME} component={Home} />
            <Route path={ROUTES.CALENDAR} component={Calendar} />
            <Route path={ROUTES.TASKS} component={Tasks} />
            <Route path={ROUTES.PEOPLE} component={People} />
        </Layout>
    );
};
