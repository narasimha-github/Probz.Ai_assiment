import React from 'react'

interface TimeframeSelectorProps {
  onTimeframeChange: (timeframe: string) => void;
}

const TimeframeSelector: React.FC<TimeframeSelectorProps> = ({
  onTimeframeChange,
}) => (
  <div>
    <button onClick={() => onTimeframeChange('daily')}>Daily</button>
    <button onClick={() => onTimeframeChange('weekly')}>Weekly</button>
    <button onClick={() => onTimeframeChange('monthly')}>Monthly</button>
  </div>
)

export default TimeframeSelector
