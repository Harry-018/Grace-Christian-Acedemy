function InputFull({ InputType, InputId, InputPlaceholder }) {
  return (
    <>
      <input
        type={InputType}
        id={InputId}
        className="h-8 w-full rounded-md border border-gray-400 bg-neutral-50 p-2 text-2xs [box-shadow:none] outline-offset-0 focus:[box-shadow:none] focus:outline-1 focus:outline-lime-green lg:h-10 lg:pl-10 lg:text-xs"
        placeholder={InputPlaceholder}
      />
    </>
  );
}

export default InputFull;
