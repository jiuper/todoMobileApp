import { useLocation } from "react-router";

import { Header } from "../../Header/ui/Header";

export const Layout = ({ children }: { children: React.ReactNode }) => {
    const url = useLocation();

    return (
        <div className="wrapper">
            <Header title={url.pathname === "/" ? "Project" : "Tasks"} />
            {children}
        </div>
    );
};
