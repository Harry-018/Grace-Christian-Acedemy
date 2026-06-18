import Panel from "../Components/SidePanel.jsx";
import ClassCard from "../Components/Classes/ClassCard.jsx";
import CreateButton from "../Components/Buttons/GreenButton.jsx";
import SearchBar from "../Components/Inputs/SearchBar.jsx";

function Classes() {
  return (
    <div className="flex h-screen w-full flex-col gap-x-5 overflow-hidden bg-egg font-[Poppins] lg:flex-row">
      <Panel />
      <div className="flex h-full w-full pb-5">
        {/* for mobile to tablet */}
        <div className="flex h-full w-full flex-col gap-y-5 px-5 lg:hidden">
          <div className="flex min-h-15 w-full items-center justify-between">
            <span className="text-sm">Classes</span>
            <span className="flex w-50 gap-x-2">
              <SearchBar
                InputType={""}
                InputId={""}
                InputPlaceholder={"Search Class "}
              />

              <span className="h-10 w-20">
                <CreateButton label={"Create"} />
              </span>
            </span>
          </div>
          <div className="w-full overflow-hidden">
            <div className="flex h-20 items-center gap-x-3 overflow-x-auto overflow-y-hidden px-2 text-neutral-500">
              under construction....
            </div>
          </div>
        </div>

        {/* for laptop and above */}
        <div className="hidden h-full max-w-full min-w-[82vw] flex-col gap-y-5 p-5 lg:flex">
          <div className="flex h-15 w-375 items-center justify-between rounded-lg bg-neutral-100 pr-2 pl-5 inset-shadow-small">
            <span className="text-sm">Classes</span>
            <span className="h-10 w-20">
              <CreateButton label={"Create"} />
            </span>
          </div>
          <div className="w-375 overflow-hidden">
            <div className="flex h-20 items-center gap-x-3 overflow-x-auto overflow-y-hidden px-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Classes;
