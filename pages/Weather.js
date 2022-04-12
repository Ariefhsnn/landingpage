import { useEffect, useState } from "react";

import axios from "axios";

// import xml2js from "xml2js";

const Weather = () => {
  const [data, setData] = useState([]);

  useEffect(async () => {
    try {
      let res = await axios.get(
        `https://data.bmkg.go.id/DataMKG/MEWS/DigitalForecast/DigitalForecast-JawaTimur.xml`,
        {
          "Content-Type": "application/xml; charset=utf-8",
        }
      );
      setData(res);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }, []);

  // console.log("data :", data);

  return <div>lorem psum</div>;
};

export default Weather;
