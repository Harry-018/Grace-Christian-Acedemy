import { Chart } from "chart.js/auto";
import { Line } from "react-chartjs-2";

function LineChart({ title, chartLabel, options, dataValue, colors }) {
  const labels = chartLabel; // ['Male', 'Female']
  const dataValues = dataValue; // [5, 5]

  return (
    <div className="flex h-full w-full flex-col justify-between rounded-2xl bg-neutral-100 p-5 font-[Poppins] inset-shadow-med">
      <span className="text-sm">{title}</span>
      <div className="mx-auto h-full w-full">
        <Line
          className="hover:cursor-pointer"
          options={options}
          data={{
            labels: labels,
            datasets: [
              {
                label: "Number of Students",
                data: dataValues,
                borderRadius: 10,
                tension: 0.4,
                borderColor: "#606f49",
                backgroundColor: colors.slice(0, labels.length),
                offset: 5,
              },
            ],
          }}
        />
      </div>
    </div>
  );
}

export default LineChart;
