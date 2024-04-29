import React from "react";
import PieChart, {
  Legend,
  Series,
  Tooltip,
  Format,
  Label,
  Connector,
  Export,
} from "devextreme-react/pie-chart";
import { atheleteData } from "../../../data.js";
import { useMediaQuery, useTheme } from "@mui/material";

const aggregateData = atheleteData.reduce((acc, entry) => {
  const team = entry.Team;

  if (!acc[team]) {
    acc[team] = 0;
  }

  acc[team]++;
  return acc;
}, {});

function Teams() {
  const theme = useTheme();
  const seriesData = Object.keys(aggregateData).map((team) => ({
    team,
    count: aggregateData[team],
  }));
  
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const sortedSeriesData = seriesData.sort((a, b) => b.count - a.count);
  const topTen = sortedSeriesData.slice(0, 10);

  console.log(topTen);

  function customizeTooltip() {
    return {
      text: `${arg.valueText} - ${(arg.percent * 100).toFixed(2)}%`,
    };
  }

  return (
    <div style={{ maxWidth: "%", overflowX: "auto" }}>
      <PieChart
        id="pie"
        type="doughnut"
        title={
          { isSmallScreen }
            ? "Top 10"
            : "Top 10 Teams with Highest Atheletes in Olympics"
        }
        palette="Soft Pastel"
        dataSource={topTen}
        style={{ maxWidth: isSmallScreen ? "200px" : "500px" }}
      >
        <Series argumentField="team" valueField="count">
          {isSmallScreen ? null : (
            <Label visible={true}>
              <Connector visible={true} />
            </Label>
          )}
        </Series>
        <Export enabled={true} />
        <Legend
          margin={0}
          horizontalAlignment="left"
          verticalAlignment="bottom"
        />
        <Tooltip enabled={true} customizeTooltip={customizeTooltip}></Tooltip>
      </PieChart>
    </div>
  );
}

export default Teams;
