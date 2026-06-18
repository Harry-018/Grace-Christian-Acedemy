function SearchBar({ value, onChange, InputType, InputId, InputPlaceholder }) {
  return (
    <>
      <input
        type={InputType}
        id={InputId}
        className="h-10 w-full rounded-md border border-gray-400 bg-neutral-50 p-2 text-xs [box-shadow:none] focus:[box-shadow:none] focus:outline-1 focus:outline-offset-0 focus:outline-[#5ca766]"
        placeholder={InputPlaceholder}
        value={value}
        onChange={onChange}
      />
    </>
  );
}

export default SearchBar;
