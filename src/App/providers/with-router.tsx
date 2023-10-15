import { Suspense } from "react";
import { Provider } from "react-redux";
import { IonApp, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";

import { setupStore } from "../../shared/lib/module/store";

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

const store = setupStore();
setupIonicReact({ mode: "md" });

export const withRouter = (component: () => JSX.Element) => (
    <Provider store={store}>
        <IonApp>
            <IonReactRouter>
                <Suspense fallback="Loader...">{component()}</Suspense>
            </IonReactRouter>
        </IonApp>
    </Provider>
);
