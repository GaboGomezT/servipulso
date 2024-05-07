'use client'
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts'

// Define the type for the data array elements
interface ChartData {
  mes: string // Month in Spanish
  satisfaccion: number // Service satisfaction value
}

// Sample data for the chart
const data: ChartData[] = [
  { mes: 'Enero', satisfaccion: 60 },
  { mes: 'Febrero', satisfaccion: 65 },
  { mes: 'Marzo', satisfaccion: 70 },
  { mes: 'Abril', satisfaccion: 78 },
  { mes: 'Mayo', satisfaccion: 82 },
  { mes: 'Junio', satisfaccion: 85 }
]

const AnimatedLineChart: React.FC = () => {
  return (
    <div className="w-full h-80 bg-white p-4 shadow-xl rounded-lg border-2 border-black">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 20,
            bottom: 0
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="mes" />
          <YAxis
            label={{ angle: -90, position: 'insideCenter' }}
          />
          <Tooltip
            formatter={(value: number) => [
              `${value}%`,
              'Satisfacción'
            ]}
          />
          <Legend
            formatter={() => 'Satisfacción del servicio'}
          />
          <Area
            type="monotone"
            dataKey="satisfaccion"
            stroke="#34D399"
            fill="#34D399"
            activeDot={{ r: 8 }}
            animationDuration={2000}
            name="Satisfacción del servicio"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}
export default AnimatedLineChart
