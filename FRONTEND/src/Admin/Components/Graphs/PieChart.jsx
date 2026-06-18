import { Chart } from "chart.js/auto";
import { Pie } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";

Chart.register(ChartDataLabels);

function PieChart({ title, chartLabel, options, dataValue, colors }) {
  const labels = chartLabel; // ['Male', 'Female']
  const dataValues = dataValue; // [5, 5]

  return (
    <div className="flex h-[20vh] w-[80vw] flex-col justify-between rounded-2xl bg-neutral-100 p-5 font-[Poppins] inset-shadow-med lg:h-full lg:w-full">
      <span className="text-xs 4k:text-lg">{title}</span>
      <div className="mx-auto flex h-[70%] w-full">
        <Pie
          className="hover:cursor-pointer"
          options={options}
          data={{
            labels: labels,
            datasets: [
              {
                label: "Number of Students",
                data: dataValues,
                borderRadius: 0,
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

export default PieChart;
