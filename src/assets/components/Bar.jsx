/* eslint-disable no-unused-vars */
import React from "react";
import { Bar } from "react-chartjs-2";

const App = () => {
  return (
    <div>
      <Bar
        data={{
          labels: ["red", "blue", "green", "grey", "orange", "pink"],
          datasets: [
            {
              label: "#no of votes",
              data: [2, 17, 10, 6, 3, 11],
            },
          ],
        }}
        width={600}
        height={300}
        options={{
          maintainAspectRatio: false,
        }}
      />
    </div>
  );
};

export default App;
