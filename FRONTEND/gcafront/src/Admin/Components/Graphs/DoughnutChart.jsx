import { Chart } from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";

function DoughnutChart({ title, chartLabel, options, dataValue, colors }) {
  const labels = chartLabel; // ['Male', 'Female']
  const dataValues = dataValue; // [5, 5]

  return (
    <div className="flex h-full w-[32%] flex-col justify-between rounded-2xl bg-neutral-100 p-5 font-[Poppins] inset-shadow-med">
      <span className="top-0 text-sm">{title}</span>
      <div className="mx-auto flex h-[80%] w-full">
        <Doughnut
          className="hover:cursor-pointer"
          options={options}
          data={{
            labels: labels,
            datasets: [
              {
                label: "Number of Students",
                data: dataValues,
                borderRadius: 5,
                borderColor: "transparent",
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

export default DoughnutChart;
