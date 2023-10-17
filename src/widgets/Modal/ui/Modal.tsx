import { useEffect } from "react";
import cnBind from "classnames/bind";

import { isOpen } from "../../../shared/lib/module/reducers/generalReducer";
import { useHookDispatch, useHookSelector } from "../../../shared/lib/module/store/configStore";
import { Header } from "../../Header/ui/Header";

import type { ModalProps } from "./modal.type";

import styles from "./style.module.scss";

const cx = cnBind.bind(styles);

export const Modal = ({ children, className, containerClassName }: ModalProps) => {
    const dispatch = useHookDispatch();
    const isOpenModal = useHookSelector((state) => state.general.isOpenModal);
    const handleIsCloseModal = () => dispatch(isOpen());
    useEffect(() => {
        document.body.style.overflow = isOpenModal ? "hidden" : "auto";
    }, [isOpenModal]);

    if (!isOpenModal) {
        return null;
    }

    return (
        <div className={cx("modal")}>
            <div className={cx("backdrop")} onClick={handleIsCloseModal} />
            <div className={cx("container", containerClassName, { fullscreen: true })}>
                <Header back isOpen isClose={handleIsCloseModal} />
                <div className={cx("content", className)}>{children}</div>
            </div>
        </div>
    );
};
