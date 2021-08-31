import { Button, notification } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";

const openNotification = (msg) => {
    notification.open({
        message: "Error",
        description: msg,
        icon: <ExclamationCircleOutlined style={{ color: "#FF9494" }} />,
    });
};
export default openNotification;
