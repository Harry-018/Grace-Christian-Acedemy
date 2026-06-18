function DashboardCard({ label, value, Icon }) {
  return (
    <div className="flex h-[15vh] min-h-25 w-full flex-col justify-between rounded-xl bg-neutral-100 p-4 font-[Poppins] text-neutral-800 inset-shadow-med lg:w-1/5">
      {/** */}
      <span className="w-full text-xs text-neutral-900">{label}</span>
      <span className="flex w-full items-center justify-between gap-y-2">
        <span className="flex w-full text-2xl">{value}</span>
        <span className="flex w-full justify-end text-lime-green">{Icon}</span>
      </span>
    </div>
  );
}

export default DashboardCard;
