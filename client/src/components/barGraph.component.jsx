import React from "react";
import { Column, Pie } from "@ant-design/charts";
import { Empty } from "antd";
import { Spin, Space } from "antd";
const BarGraph = ({ data, loading, x, y }) => {
    var config = {
        data: data,
        xField: x,
        yField: y,
        xAxis: {
            label: {
                autoHide: true,
                autoRotate: false,
            },
        },
        meta: {
            country: { alias: x },
            value: { alias: "Salary", formatter: (v) => `$${v}K` },
        },
        scrollbar: { type: "horizontal" },
    };
    return loading ? (
        <div className='center py-5'>
            <Space size='middle'>
                <Spin size='large' />
            </Space>
        </div>
    ) : data.length ? (
        <div className='py-5'>
            <Column {...config} />
        </div>
    ) : (
        <Empty />
    );
};

export default BarGraph;
