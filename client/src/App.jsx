import { BrowserRouter, Route, Switch } from "react-router-dom";
import SideBar from "./components/sidebar.component.jsx";
import { Layout, Content } from "antd";
import Predict from "./pages/predict.pages";
import Overview from "./pages/overview.pages";
function App() {
    return (
        <BrowserRouter>
            <Layout>
                <SideBar />
                <Layout.Content>
                    <Switch>
                        <Route path='/' exact component={Predict} />
                        <Route path='/overview' exact component={Overview} />
                    </Switch>
                </Layout.Content>
            </Layout>
        </BrowserRouter>
    );
}

export default App;
