import Panel from "../Components/SidePanel.jsx";
import ClassCard from "../Components/Classes/ClassCard.jsx";
import CreateButton from "../Components/Buttons/GreenButton.jsx";

function Classes() {
  return (
    <div className="flex h-screen w-full bg-egg font-[Poppins]">
      <Panel />
      <div className="mx-5 flex h-full w-full flex-col gap-y-5 p-5">
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
  );
}

export default Classes;
