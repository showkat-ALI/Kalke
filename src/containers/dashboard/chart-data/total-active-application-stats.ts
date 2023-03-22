// export const activeApplicationchartData: {
//     height: number;

//     type: any;
//     options: {
//         legend:{
//             show:boolean
//         }
//         chart: {
//             id: string;
//             stacked: boolean;
//             toolbar: {
//                 show: boolean;
//             };
//             zoom: {
//                 enabled: boolean;
//             };
//         };

//         responsive: {
//             breakpoint: number;
//             // options: {
//             //     legend: {
//             //         position: string;
//             //         offsetX: number;
//             //         offsetY: number;
//             //     };
//             // };
//         }[];
//         plotOptions: {
//             bar: {
//                 horizontal: boolean;
//                 columnWidth: string;
//             };
//         };
//         colors:any;
//         xaxis: {
//             type: any;
//             categories: string[];
//         };
//         // legend: {
//         //     show: boolean;
//         //     fontSize: string;
//         //     fontFamily: string;
//         //     position: any;
//         //     offsetX: number;
//         //     labels: {
//         //         useSeriesColors: boolean;
//         //     };
//         //     markers: {
//         //         width: number;
//         //         height: number;
//         //         radius: number;
//         //     };
//         //     itemMargin: {
//         //         horizontal: number;
//         //         vertical: number;
//         //     };
//         // };
//         fill: {
//             type: string;
//         };
//         dataLabels: {
//             enabled: boolean;
//         };
//         grid: {
//             show: boolean;
//         };
        
//     },
//     series: {
//         name: string;
//         data: number[];
//     }[]

    
// } = {
//     height: 270,

//     type: 'bar-chart',
//     options: {
//         chart: {
//             id: 'bar-chart',
//             stacked: true,
//             toolbar: {
//                 show: false
//             },
//             zoom: {
//                 enabled: true
//             }
//         },
//         legend:{
// show:false
//         },
//         responsive: [
//             {
//                 breakpoint: 480,
//                 // options: {
//                 //     legend: {
//                 //         position: 'bottom',
//                 //         offsetX: -10,
//                 //         offsetY: 0
//                 //     }
//                 // }
//             }
//         ],
//         plotOptions: {
//             bar: {
//                 horizontal: false,
//                 columnWidth: '50%'
//             }
//         },
//         colors:["#E91E63",'#546E7A','#E91E63'],
//         xaxis: {
//             type: 'category',
//             categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
//         },
//         // legend: {
//         //     show: false,
//         //     fontSize: '14px',
//         //     fontFamily: `'Roboto', sans-serif`,
//         //     position: 'bottom',
//         //     offsetX: 20,
//         //     labels: {
//         //         useSeriesColors: false
//         //     },
//         //     markers: {
//         //         width: 16,
//         //         height: 16,
//         //         radius: 5
//         //     },
//         //     itemMargin: {
//         //         horizontal: 15,
//         //         vertical: 8
//         //     }
//         // },
//         fill: {
//             type: 'solid'
//         },
//         dataLabels: {
//             enabled: false
//         },
//         grid: {
//             show: true
//         }
//     },
//     series: [
//         {
//             name: 'Application',
//             data: [35, 125, 35, 35, 35, 80, 35, 20, 35, 45, 15, 75]
//         },
//         {
//             name: 'Rejected',
//             data: [35, 15, 15, 35, 65, 40, 80, 25, 15, 85, 25, 75]
//         },
//         {
//             name: 'Shortlisted',
//             data: [35, 350, 35, 35, 20, 105, 100, 10, 65, 45, 30, 10]
//         },
//         // {
//         //     name: 'Maintenance',
//         //     data: [0, 0, 75, 0, 0, 115, 0, 0, 0, 0, 150, 0]
//         // }
//     ]
// };
 export const activeApplicationchartData: {
    name: string;
    uv: number;
    pv: number;
    amt: number;
}[]
 =[
    {
    name: 'Jan',
    uv: 1555,
    pv: 1445,
    amt: 3300,
  },
  {
    name: 'Feb',
    uv: 345,
    pv: 2366,
    amt: 2356,
  },
  {
    name: 'Mar',
    uv: 1225,
    pv: 489,
    amt: 900,
  },
  {
    name: 'Apr',
    uv: 2345,
    pv: 328,
    amt: 1248,
  },
  {
    name: 'May',
    uv: 800,
    pv: 721,
    amt: 3000,
  },
  {
    name: 'Jun',
    uv: 1856,
    pv: 2478,
    amt: 2745,
  },
  {
    name: 'Jul',
    uv: 2134,
    pv: 865,
    amt: 2690,
  },
    {
    name: 'Aug',
    uv: 2357,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Sep',
    uv: 2890,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Oct',
    uv: 2000,
    pv: 2145,
    amt: 2290,
  },
  {
    name: 'Nov',
    uv: 2780,
    pv: 543,
    amt: 2000,
  },
  {
    name: 'Dec',
    uv: 1890,
    pv: 344,
    amt: 2181,
  },
  
]
