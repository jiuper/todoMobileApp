import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { IonApp, IonRouterOutlet, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";

import "@ionic/react/css/core.css";
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

setupIonicReact();
export const withRouter = (component: () => JSX.Element) => (
    <IonApp>
        <IonReactRouter>
            <IonRouterOutlet>
                <BrowserRouter>
                    <Suspense fallback="Loader...">{component()}</Suspense>
                </BrowserRouter>
            </IonRouterOutlet>
        </IonReactRouter>
    </IonApp>
);
