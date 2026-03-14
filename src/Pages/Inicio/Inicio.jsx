import './Inicio.css'
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
    ResponsiveContainer
} from "recharts";

function Inicio() {

    const data = [
        { ano: 2000, casos: 120000 },
        { ano: 2004, casos: 150000 },
        { ano: 2008, casos: 180000 },
        { ano: 2012, casos: 210000 },
        { ano: 2016, casos: 250000 },
        { ano: 2020, casos: 290000 },
        { ano: 2024, casos: 320000 }
    ];

    return (
        <section className="grafico_section">




                <ResponsiveContainer width="100%" height={320} >
                    <LineChart data={data} margin={{ top: 20, right: 20, left: 0, bottom: 0 }} >

                        <CartesianGrid strokeDasharray="4 4" stroke="#c5c4f3"/>

                        <XAxis
                            dataKey="ano"
                            tick={{ fill: "#543782", fontSize: 13 }}
                        />

                        <YAxis
                            tick={{ fill: "#543782", fontSize: 13 }}
                        />

                        <Tooltip
                            contentStyle={{
                                borderRadius: "10px",
                                border: "none",
                                boxShadow: "0 4px 12px rgba(0,0,0,0.15)"
                            }}
                        />

                        <Line
                            type="monotone"
                            dataKey="casos"
                            stroke="#543782"
                            strokeWidth={4}
                            dot={{ r: 5 }}
                            activeDot={{ r: 7 }}
                        />

                    </LineChart>
                </ResponsiveContainer>



        </section>
    )
}

export default Inicio