function DashboardCard({ label, value, Icon }) {
  return (
    <div className="flex h-full w-full flex-col justify-between rounded-xl bg-neutral-100 p-4 font-[Poppins] text-neutral-800 inset-shadow-med">
      {/** */}
      <span className="w-full text-neutral-900 sm:text-sm md:text-base">
        {label}
      </span>
      <span className="flex w-full items-center justify-between gap-y-2">
        <span className="flex w-full text-4xl">{value}</span>
        <span className="flex w-full justify-end text-lime-green">{Icon}</span>
      </span>
    </div>
  );
}

export default DashboardCard;
