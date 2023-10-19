import cnBind from "classnames/bind";

import styles from "./style.module.scss";

const cx = cnBind.bind(styles);
export const GeneralPageLayout = ({ children }: { children: React.ReactNode }) => {
    return <div className={cx("page")}>{children}</div>;
};
