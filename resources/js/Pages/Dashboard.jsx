import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { Person, Quiz } from "@mui/icons-material";
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Legend,
} from "recharts";

export default function Dashboard({ auth }) {
    const cardData = [
        {
            icon: <Person fontSize="inherit" color="primary" />,
            title: "Total Students",
        },
        {
            icon: <Quiz fontSize="inherit" color="secondary" />,
            title: "Total Exam",
        },
        {
            icon: <Quiz fontSize="inherit" color="warning" />,
            title: "Upcoming Exam",
        },
    ];
    const data = [
        {
            name: "Page A",
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: "Page B",
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: "Page C",
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: "Page D",
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: "Page E",
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: "Page F",
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: "Page G",
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
    ];
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Dashboard" />

            <div className="p-5 flex flex-col gap-5">
                <div className="flex gap-5">
                    {cardData.map((data) => (
                        <div className="bg-white p-5 w-full rounded-md">
                            <div className="flex p-5 border rounded items-center gap-5 w-full justify-center">
                                <div className="text-7xl">{data.icon}</div>
                                <div className="">
                                    <div className="text-xl">{data.title}</div>
                                    <div className="text-2xl">169</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="bg-white flex justify-center p-10 flex-col items-center">
                    <div className="">
                        <h2 className="text-3xl">Exam Result</h2>
                    </div>
                    <AreaChart
                        width={750}
                        height={400}
                        data={data}
                        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                    >
                        <defs>
                            <linearGradient
                                id="colorUv"
                                x1="0"
                                y1="0"
                                x2="0"
                                y2="1"
                            >
                                <stop
                                    offset="5%"
                                    stopColor="#8204d8"
                                    stopOpacity={0.8}
                                />
                                <stop
                                    offset="95%"
                                    stopColor="#8884d8"
                                    stopOpacity={0}
                                />
                            </linearGradient>
                            <linearGradient
                                id="colorPv"
                                x1="0"
                                y1="0"
                                x2="0"
                                y2="1"
                            >
                                <stop
                                    offset="5%"
                                    stopColor="#82ca9d"
                                    stopOpacity={0.8}
                                />
                                <stop
                                    offset="95%"
                                    stopColor="#82ca9d"
                                    stopOpacity={0}
                                />
                            </linearGradient>
                        </defs>
                        <XAxis dataKey="name" />
                        <YAxis />
                        <CartesianGrid strokeDasharray="3 3" />
                        <Legend verticalAlign="top" height={36} />
                        <Tooltip />
                        <Area
                            type="monotone"
                            dataKey="uv"
                            stroke="#8884d8"
                            fillOpacity={1}
                            fill="url(#colorUv)"
                        />
                        <Area
                            type="monotone"
                            dataKey="pv"
                            stroke="#82ca9d"
                            fillOpacity={1}
                            fill="url(#colorPv)"
                        />
                    </AreaChart>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
