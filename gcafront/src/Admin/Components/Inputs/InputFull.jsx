function InputFull({ InputType, InputId, InputPlaceholder }) {
  return (
    <>
      <input
        type={InputType}
        id={InputId}
        className="h-10 w-full rounded-md border border-gray-400 bg-neutral-50 p-2 pl-10 text-xs [box-shadow:none] outline-offset-0 focus:[box-shadow:none] focus:outline-1 focus:outline-lime-green"
        placeholder={InputPlaceholder}
      />
    </>
  );
}

export default InputFull;
