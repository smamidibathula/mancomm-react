import React from 'react';
import Chart, {
  CommonSeriesSettings,
  Series,
  ArgumentAxis,
  ValueAxis,
  Label,
  Export,
  Legend,
  Tooltip,
} from 'devextreme-react/chart';
import { atheleteData } from '../../../data.js';

const aggregateData = atheleteData.reduce((acc, entry) => {
    const year = entry.Year;
    const sex = entry.Sex;
    
    if (!acc[year]) {
      acc[year] = { male: 0, female: 0 };
    }
    
    if (sex === 'M') {
      acc[year].male++;
    } else if (sex === 'F') {
      acc[year].female++;
    }
    return acc;
  }, {});

  const seriesData = Object.keys(aggregateData).map(year => ({
    year,
    male: aggregateData[year].male,
    female: aggregateData[year].female
  }));

  console.log(seriesData);

function MaleFemale() {
  return (
    <div style={{ width: '100%', maxWidth:'100%', height:'400px' }}>

    <Chart
      id="chart"
      dataSource={seriesData}
      palette="Violet"
      title="Number of Males vs Females Over the Years"
      reactiveWidth={false} // Disable reactive width
      reactiveHeight={false}
      style={{ maxWidth: '500px',width:'100%' }}
    >
      <Tooltip enabled={true}></Tooltip>
      <CommonSeriesSettings
        argumentField="year"
        type="bar"
        minBarSize={2}
      />
      <Series
        valueField="male"
        name="Male"
      />
      <Series
        valueField="female"
       name="Female"
      />

      <ArgumentAxis>
        <Label format="Year" />
      </ArgumentAxis>
      <ValueAxis title="Number of Atheletes" />

      <Export enabled={true} />
      <Legend
        verticalAlignment="bottom"
        horizontalAlignment="center"
      />
    </Chart>
    </div>
  );
}

export default MaleFemale;
