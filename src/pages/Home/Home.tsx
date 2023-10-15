import React from "react";
import { IonContent, IonPage } from "@ionic/react";

import { Form } from "../../features/Form/Form";
import { Layout } from "../../widgets/Layout/ui/Layout";
import { Modal } from "../../widgets/Modal/Modal";

export const Home = () => {
    return (
        <IonPage>
            <Layout>
                <IonContent className="ion-padding">Project</IonContent>
                <Modal>
                    <Form />
                </Modal>
            </Layout>
        </IonPage>
    );
};
