import React, { useEffect, useState } from "react";
import axios from "axios";
import BarGraph from "../components/barGraph.component";

const Overview = () => {
    const [data, setdata] = useState([]);
    const [loading, setloading] = useState(false);
    const fetchData = async () => {
        setloading(true);
        try {
            let { data } = await axios.post("http://localhost:5000/api/data", {
                param: "Country",
            });
            const data_json = JSON.parse(data.data);
            let df = [];
            Object.entries(data_json).map((item) =>
                df.push({
                    country: item[0],
                    value: Number((item[1] / 100).toFixed(2)),
                }),
            );
            setdata(df);
        } catch (e) {
            alert(e.message);
        }
        setloading(false);
    };
    useEffect(() => {
        fetchData();
    }, []);
    return (
        <div className='p-1rem'>
            <h2>Mean salary by country</h2>
            <BarGraph data={data} loading={loading} />
        </div>
    );
};

export default Overview;
