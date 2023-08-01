import { ResponsiveContainer } from "recharts";

export default function Grafico(){
    return(
        <>
            <ResponsiveContainer width= height={350}>
                <BarChart>
                    <XAxis></XAxis>
                    <YAxis></YAxis>
                    <Bar></Bar>
                </BarChart>
            </ResponsiveContainer>
        </>
    )
}