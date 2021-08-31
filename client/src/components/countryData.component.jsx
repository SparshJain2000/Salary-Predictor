import React, { useState, useEffect } from "react";
import BarGraph from "../components/barGraph.component";
import openNotification from "./popup.component";
import axios from "axios";
const CountryData = () => {
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
            const err = e?.response?.data?.error;
            openNotification(err);
        }
        setloading(false);
    };
    useEffect(() => {
        fetchData();
    }, []);
    return (
        <div>
            <div className='p-1rem'>
                <BarGraph data={data} loading={loading} x='country' y='value' />
            </div>
        </div>
    );
};

export default CountryData;
