import "./App.css";
import SideBar from "./components/sidebar.component.jsx";
import { Layout, Menu, Breadcrumb } from "antd";
import Predict from "./pages/predict.pages";
function App() {
    return (
        <div className='App'>
            <Layout>
                <SideBar />
                <Predict />
            </Layout>
        </div>
    );
}

export default App;
