function RedButton({ label, OnCLick }) {
  return (
    <div
      className="flex h-full w-full cursor-pointer items-center justify-center rounded-md bg-reject text-xs text-neutral-50 inset-shadow-small transition-all hover:bg-reject/80 active:scale-95"
      onClick={OnCLick}
    >
      {label}
    </div>
  );
}

export default RedButton;
