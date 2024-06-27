import React, {useState} from 'react'
import ChartComponent from '../ChartComponent'
import TimeframeSelector from '../TimeframeSelector'

const Home: React.FC = () => {
  const [timeframe, setTimeframe] = useState('daily')

  const handleTimeframeChange = (newTimeframe: string) => {
    setTimeframe(newTimeframe)
    // Update chart data based on the new timeframe
    // For simplicity, we're not implementing data filtering in this example
  }

  return (
    <div className="homeContainer">
      <h1>React Chart App</h1>
      <TimeframeSelector onTimeframeChange={handleTimeframeChange} />
      <ChartComponent />
    </div>
  )
}

export default Home
