import React, { useState } from "react";
import { Layout } from "antd";
import "../styles/predict.scss";
import { Form, Button, Select, Row, Col, InputNumber } from "antd";
import data from "../assets/data.json";
import axios from "axios";
const required = {
    required: true,
    message: "Please provide input!",
};

const Predict = () => {
    const [salary, setsalary] = useState(null);
    const onFinish = async (values) => {
        console.log("Success:", values);
        let { data } = await axios.post(
            "http://localhost:5000/api/predict",
            values,
        );
        console.log(data);
        setsalary(Number(data.salary / 100).toFixed(2));
    };

    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };
    return (
        <Layout className='site-layout'>
            <Form
                className='form'
                name='basic'
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}>
                <h2 className='text-align-center'>Salary Predictor</h2>

                <Row>
                    <Col xs={24} md={12} className='px-5'>
                        <Form.Item
                            label='Country'
                            name='country'
                            rules={[required]}
                            hasFeedback>
                            <Select>
                                {data.country.map((val) => (
                                    <Select.Option value={val}>
                                        {val}
                                    </Select.Option>
                                ))}
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={12} className='px-5'>
                        <Form.Item
                            label='Degree'
                            name='degree'
                            rules={[required]}
                            hasFeedback>
                            <Select>
                                {data.degree.map((val) => (
                                    <Select.Option value={val}>
                                        {val}
                                    </Select.Option>
                                ))}
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={12} className='px-5'>
                        <Form.Item
                            label='Employment'
                            name='employment'
                            rules={[required]}
                            hasFeedback>
                            <Select>
                                {data.employment.map((val) => (
                                    <Select.Option value={val}>
                                        {val}
                                    </Select.Option>
                                ))}
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={12} className='px-5'>
                        <Form.Item
                            label='Under Graduate Major'
                            name='ug'
                            rules={[required]}
                            hasFeedback>
                            <Select>
                                {data.ug.map((val) => (
                                    <Select.Option value={val}>
                                        {val}
                                    </Select.Option>
                                ))}
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={12} className='px-5'>
                        <Form.Item
                            name='experience'
                            label='Experience'
                            rules={[
                                {
                                    type: "number",
                                    message:
                                        "The input is not valid experience!",
                                },
                                required,
                            ]}>
                            <InputNumber
                                style={{ width: "100%" }}
                                type='number'
                            />
                        </Form.Item>
                    </Col>
                </Row>
                <Row style={{ justifyContent: "center" }}>
                    <Form.Item>
                        <Button type='primary' htmlType='submit'>
                            Submit
                        </Button>
                    </Form.Item>
                </Row>
            </Form>
            {salary && (
                <h2 className='text-align-center'>
                    Expected salary 💰: ${salary}K
                </h2>
            )}
        </Layout>
    );
};

export default Predict;
