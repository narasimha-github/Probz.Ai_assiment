import React, {useEffect, useState} from 'react'
import ApexCharts from 'react-apexcharts'
import axios from 'axios'
import {saveAs} from 'file-saver'

const ChartComponent = () => {
  const [data, setData] = useState([])
  const [options, setOptions] = useState({})
  const [series, setSeries] = useState([])

  useEffect(() => {
    axios
      .get('/data.json')
      .then(response => {
        const chartData = response.data.map((item: any) => ({
          x: new Date(item.timestamp),
          y: item.value,
        }))

        setSeries([
          {
            name: 'Value',
            data: chartData,
          },
        ])

        setOptions({
          chart: {
            type: 'line',
            zoom: {
              enabled: true,
            },
            events: {
              dataPointSelection: (
                event: any,
                chartContext: any,
                config: any,
              ) => {
                alert(
                  `You clicked on ${
                    config.w.config.series[config.seriesIndex].data[
                      config.dataPointIndex
                    ].x
                  }`,
                )
              },
            },
          },
          xaxis: {
            type: 'datetime',
          },
          tooltip: {
            x: {
              format: 'dd MMM yyyy',
            },
          },
        })
      })
      .catch(error => {
        console.error('Error fetching data: ', error)
      })
  }, [])

  const exportChart = () => {
    const chart = ApexCharts.exec('chart', 'dataURI').then(({imgURI, blob}) => {
      saveAs(blob, 'chart.png')
    })
  }

  return (
    <div>
      <ApexCharts
        id="chart"
        options={options}
        series={series}
        type="line"
        height={350}
      />
      <button onClick={exportChart}>Export Chart</button>
    </div>
  )
}

export default ChartComponent
