import React from "react";
import cnBind from "classnames/bind";

import { Form } from "../../features/ui/Form/Form";
import { Modal } from "../Modal";

import styles from "./style.module.scss";

const cx = cnBind.bind(styles);
export const GeneralPageLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <div className={cx("page")}>{children}</div>
            <Modal>
                <Form />
            </Modal>
        </>
    );
};
