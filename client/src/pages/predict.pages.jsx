import React from "react";
import { Layout } from "antd";
import "../styles/predict.scss";
import { Form, Button, Select, Row, Col, InputNumber } from "antd";
import data from "../assets/data.json";
const required = {
    required: true,
    message: "Please provide input!",
};

const Predict = () => {
    const onFinish = (values) => {
        console.log("Success:", values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };
    return (
        <Layout className='site-layout'>
            <Form
                className='form'
                name='basic'
                labelCol={{ span: 23 }}
                wrapperCol={{ span: 23 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}>
                <Row>
                    <Col xs={24} md={12} lg={8} className='px-5'>
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
                    <Col xs={24} md={12} lg={8} className='px-5'>
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
                    <Col xs={24} md={12} lg={8} className='px-5'>
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
                    <Col xs={24} md={12} lg={8} className='px-5'>
                        <Form.Item
                            label='UndeGrad Major'
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
                    <Col xs={24} md={12} lg={8} className='px-5'>
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
                <Row>
                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type='primary' htmlType='submit'>
                            Submit
                        </Button>
                    </Form.Item>
                </Row>
            </Form>
        </Layout>
    );
};

export default Predict;
