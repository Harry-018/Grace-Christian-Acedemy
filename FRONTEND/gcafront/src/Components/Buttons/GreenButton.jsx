function GreenButton({ label, onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex h-full w-full cursor-pointer items-center justify-center rounded-md bg-swamp-green text-xs text-neutral-50 inset-shadow-small transition-all hover:bg-swamp-green/80 active:scale-95"
    >
      {label}
    </button>
  );
}

export default GreenButton;
