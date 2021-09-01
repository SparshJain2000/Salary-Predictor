import React from "react";
import { Spin, Space } from "antd";

const Loader = () => {
    return (
        <div className='full-loader center '>
            {/* <Space size='middle'> */}
            <Spin size='large' />
            {/* </Space> */}
        </div>
    );
};

export default Loader;
