import cnBind from "classnames/bind";

import { TabsRouting } from "../../features/TabsRouting/ui/TabsRouting";

import styles from "./style.module.scss";

const cx = cnBind.bind(styles);

export const Footer = () => {
    return (
        <footer className={cx("footer", "footer-md")}>
            <div className={cx("footer-container", "container")}>
                <TabsRouting />
            </div>
        </footer>
    );
};
