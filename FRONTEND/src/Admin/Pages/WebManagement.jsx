import Panel from "../Components/SidePanel.jsx";

function WebManagement() {
  return (
    <div className="flex h-screen w-full flex-col gap-x-5 overflow-hidden bg-egg font-[Poppins] lg:flex-row">
      <Panel />
      {/* for mobile to tablet */}
      <div className="no-scrollbar flex h-screen w-full flex-col items-center gap-y-5 overflow-y-auto py-5 lg:hidden">
        <span className="text-neutral-500">under construction...</span>
      </div>
      {/* for laptop and above */}
      <div className="hidden h-screen w-full flex-col items-center p-5 lg:flex">
        <span className="text-neutral-500">under construction...</span>
      </div>
    </div>
  );
}

export default WebManagement;
