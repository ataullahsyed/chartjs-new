/* eslint-disable no-unused-vars */
import React from "react";
import { Bar } from "react-chartjs-2";
import bullet from "./assets/bullet.svg";

const App = () => {
  return (
    <>
      <div className="outer flex flex-col gap-2 h-screen items-center justify-center bg-gray-100">
        <div className="time flex flex-row gap-64">
          <p className="text-xs">Amit Kumar</p>
          <p className="text-xs">11:12 AM</p>
        </div>
        <div className="inner bg-blue-450 rounded shadow-lg flex flex-col gap-1">
          <div className="head flex flex-row bg-blue-350 px-10 py-2">
            <img
              src={bullet}
              alt="Bullet-point icon"
              className="w-5 text-blue-150"
            />
            <div className="space">&nbsp; &nbsp;</div>
            <h1 className="text-blue-150 font-semibold">
              Cycle Count - Dashboard
            </h1>
          </div>
          <div className="body flex flex-col gap-4 bg-blue-450 px-10 m-0">
            <p className="text-gray-600 font-semibold">
              Total Uploaded for Cycle counts
            </p>

            <div className="rol flex flex-row gap-7">
              <div className="one flex flex-row gap-2">
                <div className="bg-blue-400 w-5 rounded-full">&nbsp;</div>
                <p className="text-gray-600 font-semibold text-sm">Completed</p>
              </div>
              <div className="one flex flex-row gap-2">
                <div className="bg-orange-400 w-5 rounded-full">&nbsp;</div>
                <p className="text-gray-600 font-semibold text-sm">Pending</p>
              </div>
            </div>

            <div className="chart1">
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
                width={100}
                height={50}
                options={{
                  maintainAspectRatio: false,
                }}
              />
            </div>

            <div className="rol flex flex-col gap-3">
              <div className="one flex flex-row gap-4">
                <p className="text-gray-600 font-semibold text-sm">
                  Pending for Count
                </p>
                <div className="bg-orange-150 w-20 rounded-md">&nbsp;</div>
              </div>
              <div className="one flex flex-row gap-4">
                <p className="text-gray-600 font-semibold text-sm">
                  Item Counted &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </p>
                <div className="bg-blue-550 w-20 rounded-md">&nbsp;</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
