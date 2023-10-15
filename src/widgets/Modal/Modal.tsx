import React, { useRef } from "react";
import { IonButton, IonButtons, IonContent, IonHeader, IonModal, IonTitle, IonToolbar } from "@ionic/react";

export const Modal = ({ children, isOpen, title }: { children: React.ReactNode; isOpen: boolean; title: string }) => {
    const modal = useRef<HTMLIonModalElement>(null);

    return (
        <IonModal ref={modal} trigger="open-modal">
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonButton onClick={() => modal.current?.dismiss()}>Cancel</IonButton>
                    </IonButtons>
                    <IonTitle>{title}</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">{children}</IonContent>
        </IonModal>
    );
};
