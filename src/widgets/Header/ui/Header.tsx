import { IonBackButton, IonButtons, IonHeader, IonTitle, IonToolbar } from "@ionic/react";
import { arrowBackOutline } from "ionicons/icons";

import { ROUTES } from "../../../shared/const/Routes";

export const Header = ({ title }: { title: string }) => {
    return (
        <IonHeader>
            <IonToolbar>
                {title === "Tasks" && (
                    <IonButtons slot="start">
                        <IonBackButton defaultHref={ROUTES.HOME} text="" icon={arrowBackOutline} />
                    </IonButtons>
                )}
                <IonTitle> {title}</IonTitle>
            </IonToolbar>
        </IonHeader>
    );
};
