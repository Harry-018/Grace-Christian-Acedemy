import { Chart } from "chart.js/auto";
import { Bar } from "react-chartjs-2";

function BarGraph({ title, chartLabel, options, dataValue, colors }) {
  const labels = chartLabel; // ['Male', 'Female']
  const dataValues = dataValue; // [5, 5]

  return (
    <div className="flex h-[30vh] w-full flex-col justify-between rounded-2xl bg-neutral-100 p-5 font-[Poppins] inset-shadow-med md:w-[45vw] lg:h-full lg:w-full">
      <span className="text-xs 4k:text-lg">{title}</span>
      <div className="mx-auto h-[90%] w-full">
        <Bar
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

export default BarGraph;
