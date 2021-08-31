import React from "react";
import { Pie } from "@ant-design/charts";
import { Empty } from "antd";
import { Spin, Space } from "antd";
const PieGraph = ({ data, loading, x, y }) => {
    var config = {
        appendPadding: 10,
        data: data,
        angleField: y,
        colorField: x,
        radius: 0.75,
        label: {
            type: "spider",
            labelHeight: 28,
            content: "{name}\n{percentage}",
        },
        interactions: [
            { type: "element-selected" },
            { type: "element-active" },
        ],
        meta: {
            employment: { alias: x },
            value: { alias: "Salary", formatter: (v) => `$${v}K` },
        },
    };
    return loading ? (
        <div className='center py-5'>
            <Space size='middle'>
                <Spin size='large' />
            </Space>
        </div>
    ) : data.length ? (
        <div className='py-5'>
            <Pie {...config} />
        </div>
    ) : (
        <Empty />
    );
};

export default PieGraph;
