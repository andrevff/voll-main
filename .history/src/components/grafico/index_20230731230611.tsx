import { ResponsiveContainer } from "recharts";

export default function Grafico(){
    return(
        <>
            <ResponsiveContainer width="100%" height={350}>
                <BarChart layout="vertical" data={dados} margin={{ top: 25, right: 40, left: 40, bottom: 20 }}>
                    <XAxis type="number"></XAxis>
                    <YAxis type="category" dataKey="nome"></YAxis>
                    <Bar dataKey="consultas" fill="#083860" barSize={}></Bar>
                </BarChart>
            </ResponsiveContainer>
        </>
    )
}