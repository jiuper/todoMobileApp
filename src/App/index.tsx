import { Routing } from "../pages";

import { withRouter } from "./providers";

import "./index.css";

const App = () => {
    return withRouter(() => <Routing />);
};

export default App;
