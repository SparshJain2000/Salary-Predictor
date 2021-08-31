import ExpData from "../components/experienceData.component";
import CountryData from "../components/countryData.component";
import EmpData from "../components/empData.component";
import { Tabs } from "antd";
import DegData from "../components/degData.component";

const { TabPane } = Tabs;

const Overview = () => {
    return (
        <>
            <h2 className='text-align-center'>Mean Salary based on</h2>
            <Tabs defaultActiveKey='1' centered page={3} className='px-5'>
                <TabPane tab='Country' key='1'>
                    <CountryData />
                </TabPane>
                <TabPane tab='Employment' key='2'>
                    <EmpData />
                </TabPane>
                <TabPane tab='Degree' key='3'>
                    <DegData />
                </TabPane>
                <TabPane tab='Experience' key='4'>
                    <ExpData />
                </TabPane>
            </Tabs>
        </>
    );
};

export default Overview;
