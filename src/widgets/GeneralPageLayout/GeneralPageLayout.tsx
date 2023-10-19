import React from "react";
import cnBind from "classnames/bind";

import { Layout } from "../Layout/ui/Layout";

import styles from "./style.module.scss";

const cx = cnBind.bind(styles);
export const GeneralPageLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <Layout>
            <div className={cx("page")}>{children}</div>
        </Layout>
    );
};
