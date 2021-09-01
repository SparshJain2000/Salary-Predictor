import { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SideBar from "./components/sidebar.component.jsx";
import { Layout } from "antd";
import Predict from "./pages/predict.pages";
import Overview from "./pages/overview.pages";
import Loader from "./components/loader.component";

function App() {
    const [loading, setloading] = useState(false);

    return (
        <BrowserRouter>
            {loading && <Loader />}
            <Layout>
                <SideBar />
                <Layout.Content>
                    <Switch>
                        <Route
                            path='/'
                            exact
                            render={(props) => (
                                <Predict {...props} setloading={setloading} />
                            )}
                        />
                        <Route path='/overview' exact component={Overview} />
                    </Switch>
                </Layout.Content>
            </Layout>
        </BrowserRouter>
    );
}

export default App;
