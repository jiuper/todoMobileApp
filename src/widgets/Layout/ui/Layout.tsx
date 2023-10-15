import { useLocation } from "react-router";

import { ROUTES } from "../../../shared/const/Routes";
import { Header } from "../../Header/ui/Header";

export const Layout = ({ children }: { children: React.ReactNode }) => {
    const url = useLocation();

    return (
        <div className="wrapper">
            <Header title={url.pathname === ROUTES.HOME ? "Home" : "Tasks"} />
            {children}
        </div>
    );
};
