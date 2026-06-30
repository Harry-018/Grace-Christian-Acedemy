import { React, useState } from "react";
import { useLoaderData } from "react-router-dom";
import AcademicProgramSelector from "../../Components/AcademicProgramSelector";

import { EditIcon, PlusCircle, MinusCircle } from "lucide-react";

const Home = () => {
  const {
    bannerData,
    academicCardData,
    mission_visionData,
    reasonsData,
    childActivityData,
  } = useLoaderData();

  const [programData, setProgramData] = useState(
    academicCardData?.[0]?.program || "",
  );

  const selectProgram = academicCardData.find(
    (program) => program.program === programData,
  );

  return (
    <div className="">
      <div className="flex flex-col gap-10 sm:grid sm:grid-cols-2">
        {/* Banner */}
        <div className="flex flex-col gap-y-10 rounded-2xl bg-bone p-5 inset-shadow-med">
          <div className="flex items-center justify-between text-sm">
            <h1 className="font-[PoppinsBold] text-swamp-green md:text-base lg:text-lg">
              Banner
            </h1>
            <button className="flex cursor-pointer items-center text-xs text-ashlight active:scale-95 md:text-sm lg:text-base">
              <EditIcon className="h-5" /> Edit
            </button>
          </div>

          {bannerData.map((banner) => {
            return (
              <div className="flex w-full flex-col gap-5">
                <span className="flex flex-col gap-5 sm:flex-row">
                  {/* admission status */}
                  <span className="flex min-w-30 flex-col gap-y-3 text-xs">
                    <h3>Admission Status:</h3>
                    <span className="opacity-75">
                      {banner.admission_status}
                    </span>
                  </span>
                  {/* school year */}
                  <span className="flex min-w-20 flex-col gap-y-3 text-xs">
                    <h3>School Year:</h3>
                    <span className="max-w-20 rounded-md border border-swamp-green p-2 opacity-75">
                      {banner.school_year}
                    </span>
                  </span>
                </span>

                {/* title */}
                <span className="flex flex-col gap-y-3 text-xs">
                  <h3>Title:</h3>
                  <span className="rounded-md border border-swamp-green p-2 opacity-75">
                    {banner.banner_title}
                  </span>
                </span>
                {/* quote */}
                <span className="flex flex-col gap-y-3 text-xs">
                  <h3>Quote:</h3>
                  <span className="rounded-md border border-swamp-green p-2 opacity-75">
                    {banner.banner_quote}
                  </span>
                </span>
              </div>
            );
          })}
        </div>

        {/* Academic Programs */}
        <div className="flex flex-col gap-y-10 overflow-hidden rounded-2xl bg-bone p-5 inset-shadow-med">
          <div className="flex flex-wrap justify-between gap-y-3 text-sm">
            <h1 className="font-[PoppinsBold] text-swamp-green md:text-base lg:text-lg">
              Academic Programs
            </h1>

            <span className="flex gap-3 lg:gap-5">
              <button className="flex cursor-pointer items-center text-xs text-ashlight active:scale-95 md:text-sm lg:text-base">
                <EditIcon className="h-5" /> Edit
              </button>
              <button className="flex cursor-pointer items-center text-xs text-swamp-green active:scale-95 md:text-sm lg:text-base">
                <PlusCircle className="h-5" /> Add
              </button>
              <button className="flex cursor-pointer items-center text-xs text-reject active:scale-95 md:text-sm lg:text-base">
                <MinusCircle className="h-5" /> Remove
              </button>
            </span>
          </div>

          <div className="flex flex-col gap-y-5">
            <AcademicProgramSelector
              programData={academicCardData}
              selectedProgram={programData}
              onSelectProgram={setProgramData}
            />

            {selectProgram ? (
              <div className="flex flex-col gap-5">
                <div className="flex gap-5">
                  <div className="flex flex-col gap-y-3">
                    <h3 className="text-xs">Program:</h3>
                    <div className="w-25 rounded-lg border border-swamp-green p-3 text-xs opacity-75">
                      {selectProgram.program}
                    </div>
                  </div>
                  <div className="flex flex-col gap-y-3">
                    <h3 className="text-xs">Age Limit:</h3>
                    <div className="w-25 rounded-lg border border-swamp-green p-3 text-xs opacity-75">
                      {selectProgram.ages}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-y-3">
                  <h3 className="text-xs">Description:</h3>
                  <div className="rounded-lg border border-swamp-green p-3 text-xs opacity-75">
                    {selectProgram.description}
                  </div>
                </div>
              </div>
            ) : (
              <div className="There's no data for that program">no</div>
            )}
          </div>
        </div>

        {/* Mission Vision */}
        <div className="flex flex-col">
          <div className="flex flex-col gap-y-5">
            {mission_visionData.map((missvis) => {
              return (
                <div className="flex flex-col gap-y-10 rounded-2xl bg-bone p-5 inset-shadow-med">
                  <div className="flex items-center justify-between text-sm">
                    <h1 className="font-[PoppinsBold] text-swamp-green md:text-base lg:text-lg">
                      {missvis.type}
                    </h1>
                    <button className="flex cursor-pointer items-center text-xs text-ashlight active:scale-95 md:text-sm lg:text-base">
                      <EditIcon className="h-5" /> Edit
                    </button>
                  </div>

                  <div className="flex flex-col gap-y-5">
                    <div className="flex flex-col gap-y-3">
                      <h3 className="text-xs">Title:</h3>
                      <div className="rounded-lg border border-swamp-green p-3 text-xs opacity-75">
                        {missvis.title}
                      </div>
                    </div>
                    <div className="flex flex-col gap-y-3">
                      <h3 className="text-xs">Description:</h3>
                      <div className="rounded-lg border border-swamp-green p-3 text-xs opacity-75">
                        {missvis.description}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* video + why parents choose us */}
        <div className="flex flex-col gap-y-10 rounded-2xl bg-bone p-5 inset-shadow-med">
          <div className="flex flex-wrap justify-between gap-y-3 text-sm">
            <h1 className="font-[PoppinsBold] text-swamp-green md:text-base lg:text-lg">
              Why Parents Choose Us
            </h1>

            <span className="no-scrollbar flex gap-3 overflow-y-auto lg:gap-5">
              <button className="flex cursor-pointer items-center text-xs text-ashlight active:scale-95 md:text-sm lg:text-base">
                <EditIcon className="h-5" /> Edit
              </button>
              <button className="flex cursor-pointer items-center text-xs text-swamp-green active:scale-95 md:text-sm lg:text-base">
                <PlusCircle className="h-5" /> Add
              </button>
              <button className="flex cursor-pointer items-center text-xs text-reject active:scale-95 md:text-sm lg:text-base">
                <MinusCircle className="h-5" /> Remove
              </button>
            </span>
          </div>

          <div className="flex flex-col gap-y-3">
            {reasonsData.map((reasons, index) => {
              return (
                <h3
                  key={index}
                  className="rounded-lg border border-swamp-green p-2 text-xs opacity-75"
                >
                  {reasons.reasons}
                </h3>
              );
            })}
          </div>
        </div>

        {/* children activities */}
        <div className="col-span-2 flex flex-col gap-y-5 rounded-2xl bg-bone p-5 inset-shadow-med">
          <div className="flex flex-wrap justify-between gap-y-3 text-sm">
            <h1 className="font-[PoppinsBold] text-swamp-green md:text-base lg:text-lg">
              Children Activities
            </h1>

            <span className="no-scrollbar flex gap-3 overflow-y-auto lg:gap-5">
              <button className="flex cursor-pointer items-center text-xs text-ashlight active:scale-95 md:text-sm lg:text-base">
                <EditIcon className="h-5" /> Edit
              </button>
              <button className="flex cursor-pointer items-center text-xs text-swamp-green active:scale-95 md:text-sm lg:text-base">
                <PlusCircle className="h-5" /> Add
              </button>
              <button className="flex cursor-pointer items-center text-xs text-reject active:scale-95 md:text-sm lg:text-base">
                <MinusCircle className="h-5" /> Remove
              </button>
            </span>
          </div>
          <div className="no-scrollbar flex snap-x snap-mandatory gap-5 overflow-y-auto">
            {childActivityData.map((childActData, index) => {
              return (
                <div
                  key={index}
                  className="flex min-w-65 snap-center flex-col gap-y-3 rounded-lg border border-swamp-green p-3 opacity-75"
                >
                  <span className="flex flex-col gap-y-3">
                    <h3 className="text-xs">Title:</h3>
                    <h3 className="rounded-lg border border-swamp-green p-2 text-xs">
                      {childActData.activity_title}
                    </h3>
                  </span>
                  <span className="flex flex-col gap-y-3">
                    <h3 className="text-xs">Description:</h3>
                    <h3 className="rounded-lg border border-swamp-green p-2 text-xs">
                      {childActData.activity_description}
                    </h3>
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
