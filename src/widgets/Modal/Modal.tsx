import React, { useEffect, useMemo, useRef } from "react";
import { useLocation } from "react-router";
import { IonButton, IonButtons, IonContent, IonHeader, IonModal, IonTitle, IonToolbar } from "@ionic/react";

import { ROUTES } from "../../shared/const/Routes";
import { isOpen } from "../../shared/lib/module/reducers/generalReducer";
import { useHookDispatch, useHookSelector } from "../../shared/lib/module/store/configStore";

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
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonButton onClick={handleIsCloseModal}>Cancel</IonButton>
                    </IonButtons>
                    <IonTitle>{title}</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">{children}</IonContent>
        </IonModal>
    );
};
