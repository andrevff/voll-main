import { ResponsiveContainer } from "recharts";

export default function Grafico(){
    return(
        <>
            <ResponsiveContainer>
                <BarChart>
                    <XAxis></XAxis>
                    <YAxis></YAxis>
                </BarChart>
            </ResponsiveContainer>
        </>
    )
}