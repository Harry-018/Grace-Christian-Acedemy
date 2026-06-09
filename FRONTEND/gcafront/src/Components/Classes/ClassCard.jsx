function ClassCard({ section }) {
  return (
    <div>
      <button className="min-h-15 min-w-25 cursor-pointer rounded-xl bg-neutral-100 p-5 text-xs text-neutral-800/80 inset-shadow-med transition-all duration-200 focus:scale-105">
        <span>{section}</span>
      </button>
    </div>
  );
}

export default ClassCard;
