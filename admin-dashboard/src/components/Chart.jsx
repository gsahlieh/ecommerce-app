import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Chart = ({height, title, data, dataKey, grid}) => {

    return (
        <div className='h-full m-3 p-2'>
            <h1 className='text-xl font-bold m-4'>{title}</h1>
            <ResponsiveContainer height="100%" className='h-full'>
                <LineChart width={500} height={300} data={data} margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5}}>
                    {grid && <CartesianGrid strokeDasharray="3 3" />}
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" width={2} dataKey={dataKey} stroke="#000000" />
                </LineChart>
            </ResponsiveContainer>
        </div>
  )
}

export default Chart