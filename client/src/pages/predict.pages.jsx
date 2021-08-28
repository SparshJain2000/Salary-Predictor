import React from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import {
    Form,
    Input,
    Button,
    Checkbox,
    Space,
    Select,
    Row,
    Col,
    InputNumber,
} from "antd";
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
                name='basic'
                labelCol={{ span: 23 }}
                wrapperCol={{ span: 23 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}>
                {/* <Space direction='vertical' size={"small"}> */}
                <Row>
                    {/* <Space direction='vertical' size={"small"}> */}

                    <Col xs={24} md={12} lg={8} className='px-5'>
                        <Form.Item
                            label='Country'
                            name='country'
                            rules={[required]}
                            hasFeedback>
                            <Select>
                                <Select.Option value='demo'>Demo</Select.Option>
                                <Select.Option value='demo1'>
                                    Demo1
                                </Select.Option>
                                <Select.Option value='demo2'>
                                    Demo2
                                </Select.Option>
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
                                <Select.Option value='demo'>Demo</Select.Option>
                                <Select.Option value='demo1'>
                                    Demo1
                                </Select.Option>
                                <Select.Option value='demo2'>
                                    Demo2
                                </Select.Option>
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
                                <Select.Option value='demo'>Demo</Select.Option>
                                <Select.Option value='demo1'>
                                    Demo1
                                </Select.Option>
                                <Select.Option value='demo2'>
                                    Demo2
                                </Select.Option>
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
                                <Select.Option value='demo'>Demo</Select.Option>
                                <Select.Option value='demo1'>
                                    Demo1
                                </Select.Option>
                                <Select.Option value='demo2'>
                                    Demo2
                                </Select.Option>
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
                {/* </Space> */}
            </Form>
        </Layout>
    );
};

export default Predict;
