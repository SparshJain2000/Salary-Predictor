import React from "react";
import { Line } from "@ant-design/charts";
import { Empty } from "antd";
import { Spin, Space } from "antd";
const LineGraph = ({ data, loading, x, y }) => {
    var config = {
        data: data,
        xField: x,
        yField: y,
        annotations: [
            {
                type: "regionFilter",
                start: ["min", "median"],
                end: ["max", "0"],
                color: "#F4664A",
            },
            {
                type: "text",
                position: ["min", "median"],
                content: "Median salary",
                offsetY: -4,
                style: { textBaseline: "bottom" },
            },
            {
                type: "line",
                start: ["min", "median"],
                end: ["max", "median"],
                style: {
                    stroke: "#F4664A",
                    lineDash: [2, 2],
                },
            },
        ],
        meta: {
            employment: { alias: x },
            value: { alias: "Salary", formatter: (v) => `$${v}K` },
        },
        state: {
            active: {
                style: {
                    shadowBlur: 4,
                    stroke: "#000",
                    fill: "red",
                },
            },
        },
        interactions: [{ type: "marker-active" }],
    };
    return loading ? (
        <div className='center py-5'>
            <Space size='middle'>
                <Spin size='large' />
            </Space>
        </div>
    ) : data.length ? (
        <div className='py-5'>
            <Line {...config} />
        </div>
    ) : (
        <Empty />
    );
};

export default LineGraph;
