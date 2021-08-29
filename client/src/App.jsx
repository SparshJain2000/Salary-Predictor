import { BrowserRouter, Route, Switch } from "react-router-dom";
import SideBar from "./components/sidebar.component.jsx";
import { Layout } from "antd";
import Predict from "./pages/predict.pages";
import Overview from "./pages/overview.pages";
function App() {
    return (
        <BrowserRouter>
            <Layout>
                <SideBar />
                <main>
                    <Switch>
                        <Route path='/' exact component={Predict} />
                        <Route path='/overview' exact component={Overview} />
                    </Switch>
                </main>
            </Layout>
        </BrowserRouter>
    );
}

export default App;
