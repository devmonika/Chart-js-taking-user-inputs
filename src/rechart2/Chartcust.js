// import React, { useState } from 'react';
// import {Data} from './Data';
// import { BarChart } from "react-chartjs-2";
// const Chartcust = () => {

//     const [chartData, setChartData] = useState({
//         labels: Data.map((data) => data.year), 
//         datasets: [
//           {
//             label: "Users Gained ",
//             data: chartData.map((data) => data.userGain),
//             backgroundColor: [
//               "rgba(75,192,192,1)",
//               "#ecf0f1",
//               "#50AF95",
//               "#f3ba2f",
//               "#2a71d0"
//             ],
//             borderColor: "black",
//             borderWidth: 2
//           }
//         ]
//       });

//     return (
       
//        <div>
//         <BarChart chartData={setChartData}></BarChart>
//        </div>
//     );
// };

// export default Chartcust;