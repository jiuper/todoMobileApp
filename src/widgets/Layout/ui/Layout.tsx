import { Footer } from "../../Footer/Footer";
import { Header } from "../../Header/ui/Header";

import "./Layout.module.scss";

export const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="wrapper">
            <Header />
            <div className="container">{children}</div>
            <Footer />
        </div>
    );
};
