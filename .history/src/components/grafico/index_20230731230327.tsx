import { ResponsiveContainer } from "recharts";

export default function Grafico(){
    return(
        <>
            <ResponsiveContainer width="100%" height={350}>
                <BarChart layout="vertical" data={dados} margin={{}}>
                    <XAxis></XAxis>
                    <YAxis></YAxis>
                    <Bar></Bar>
                </BarChart>
            </ResponsiveContainer>
        </>
    )
}