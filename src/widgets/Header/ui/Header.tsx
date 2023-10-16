import { IonHeader, IonTitle, IonToolbar } from "@ionic/react";

export const Header = ({ title }: { title: string }) => {
    return (
        <IonHeader className="ion-no-border">
            <IonToolbar>
                <IonTitle> {title}</IonTitle>
            </IonToolbar>
        </IonHeader>
    );
};
