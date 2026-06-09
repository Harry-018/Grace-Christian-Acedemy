function FilterButton({ label, OnCLick }) {
  return (
    <button
      className="flex h-10 max-w-25 min-w-10 cursor-pointer items-center justify-center rounded-md bg-neutral-100 px-2 text-xs text-neutral-700 transition-all hover:bg-neutral-100/80 focus:bg-neutral-100/80 active:scale-95"
      onClick={OnCLick}
    >
      {label}
    </button>
  );
}

export default FilterButton;
