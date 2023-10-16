import { useEffect, useMemo, useRef } from "react";
import { useLocation } from "react-router";
import { IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonModal, IonTitle, IonToolbar } from "@ionic/react";
import cnBind from "classnames/bind";

import AL from "../../shared/assets/icons/ArrowLeft.svg";
import { ROUTES } from "../../shared/const/Routes";
import { isOpen } from "../../shared/lib/module/reducers/generalReducer";
import { useHookDispatch, useHookSelector } from "../../shared/lib/module/store/configStore";

import styles from "./style.module.scss";

const cx = cnBind.bind(styles);

export const Modal = ({ children }: { children: React.ReactNode }) => {
    const dispatch = useHookDispatch();
    const isOpenModal = useHookSelector((state) => state.general.isOpenModal);
    const modal = useRef<HTMLIonModalElement>(null);
    const url = useLocation();
    const handleIsCloseModal = () => dispatch(isOpen());
    const title = useMemo(() => (url.pathname === ROUTES.HOME ? "Add Project" : "Add Tasks"), [url.pathname]);
    useEffect(() => {
        document.body.style.overflow = isOpenModal ? "hidden" : "auto";
    }, [isOpenModal]);

    if (!isOpen) {
        return null;
    }

    return (
        <IonModal ref={modal} isOpen={isOpenModal}>
            <IonHeader className={cx("", "ion-no-border")}>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonButton onClick={handleIsCloseModal}>
                            <IonIcon icon={AL} />
                        </IonButton>
                    </IonButtons>
                    <IonTitle slot="secondary">{title}</IonTitle>
                    <IonTitle style={{ opacity: 0 }} slot="primary" />
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">{children}</IonContent>
        </IonModal>
    );
};
