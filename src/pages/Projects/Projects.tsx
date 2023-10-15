import React from "react";
import { IonContent, IonPage } from "@ionic/react";

import { Form } from "../../features/Form/Form";
import { Layout } from "../../widgets/Layout/ui/Layout";
import { Modal } from "../../widgets/Modal/Modal";

export const Projects = () => {
    return (
        <IonPage>
            <Layout>
                <IonContent className="ion-padding">
                    asasd
                    <Modal isOpen={false} title="Add Project">
                        <Form />
                    </Modal>
                </IonContent>
            </Layout>
        </IonPage>
    );
};
