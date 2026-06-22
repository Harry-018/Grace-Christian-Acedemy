import Logo from "../../public/assets/logowbg.png";
import { NavLink } from "react-router-dom";
import { useState } from "react";

import {
  LayoutDashboard,
  FileUser,
  User,
  MonitorCog,
  BadgeQuestionMark,
  LogOut,
  UserPen,
  GraduationCap,
  FileInput,
  ClipboardClock,
  MenuIcon,
  X,
} from "lucide-react";

function SidePanel() {
  const [sideBar, setSideBar] = useState(false);

  console.log(sideBar);

  return (
    <div>
      {/** For mobile to tablet */}
      <div className="flex h-[8vh] min-h-[8vh] w-full flex-col gap-y-5 bg-neutral-100 p-5 font-[Poppins] text-neutral-700 inset-shadow-small lg:hidden">
        <div className="flex items-center gap-x-5">
          <MenuIcon
            onClick={() => {
              setSideBar(!sideBar);
            }}
          />
          <span className="text-sm">Admin Panel</span>
        </div>
        <div></div>
        {sideBar && (
          <div className="fixed top-0 left-0 z-50 h-screen w-screen bg-neutral-800/20">
            <div className="flex h-full w-[60vw] flex-col gap-y-5 bg-neutral-100 p-5 sm:w-[40vw]">
              <X
                className="min-h-10"
                onClick={() => {
                  setSideBar(!sideBar);
                }}
              />
              <div className="flex flex-col gap-y-2">
                <NavLink
                  to="/Dashboard"
                  className={({ isActive }) =>
                    `${
                      isActive
                        ? "flex items-center bg-swamp-green bg-linear-to-tr p-2 text-neutral-50 inset-shadow-small"
                        : "view-transition flex items-center p-2 transition-all duration-200 hover:scale-95 hover:bg-lime-dark/70 hover:text-white"
                    } h-10 w-full rounded-md text-xs`
                  }
                >
                  <span className="flex items-center gap-x-3">
                    <LayoutDashboard className="h-5" />
                    Dashboard
                  </span>
                </NavLink>
                <NavLink
                  to="/Applications"
                  className={({ isActive }) =>
                    `${
                      isActive
                        ? "flex items-center bg-swamp-green bg-linear-to-tr p-2 text-neutral-50 inset-shadow-small"
                        : "flex items-center p-2 transition-all duration-200 hover:scale-95 hover:bg-lime-dark/70 hover:text-white"
                    } h-10 w-full rounded-md text-xs`
                  }
                >
                  <span className="flex items-center gap-x-3">
                    <FileUser className="h-5" />
                    Applications
                  </span>
                </NavLink>
                <NavLink
                  to="/Submissions"
                  className={({ isActive }) =>
                    `${
                      isActive
                        ? "flex items-center bg-swamp-green bg-linear-to-tr p-2 text-neutral-50 inset-shadow-small"
                        : "flex items-center p-2 transition-all duration-200 hover:scale-95 hover:bg-lime-dark/70 hover:text-white"
                    } h-10 w-full rounded-md text-xs`
                  }
                >
                  <span className="flex items-center gap-x-3">
                    <FileInput className="h-5" />
                    Submissions
                  </span>
                </NavLink>

                <NavLink
                  to="/Students"
                  className={({ isActive }) =>
                    `${
                      isActive
                        ? "flex items-center bg-swamp-green bg-linear-to-tr p-2 text-neutral-50 inset-shadow-small"
                        : "flex items-center p-2 transition-all duration-200 hover:scale-95 hover:bg-lime-dark/70 hover:text-white"
                    } h-10 w-full rounded-md text-xs`
                  }
                >
                  <span className="flex items-center gap-x-3">
                    <User className="h-5" />
                    Students
                  </span>
                </NavLink>

                <NavLink
                  to="/Teachers"
                  className={({ isActive }) =>
                    `${
                      isActive
                        ? "flex items-center bg-swamp-green bg-linear-to-tr p-2 text-neutral-50 inset-shadow-small"
                        : "flex items-center p-2 transition-all duration-200 hover:scale-95 hover:bg-lime-dark/70 hover:text-white"
                    } h-10 w-full rounded-md text-xs`
                  }
                >
                  <span className="flex items-center gap-x-3">
                    <UserPen className="h-5" />
                    Teachers
                  </span>
                </NavLink>
                <NavLink
                  to="/Classes"
                  className={({ isActive }) =>
                    `${
                      isActive
                        ? "flex items-center bg-swamp-green bg-linear-to-tr p-2 text-neutral-50 inset-shadow-small"
                        : "flex items-center p-2 transition-all duration-200 hover:scale-95 hover:bg-lime-dark/70 hover:text-white"
                    } h-10 w-full rounded-md text-xs`
                  }
                >
                  <span className="flex items-center gap-x-3">
                    <GraduationCap className="h-5" />
                    Classes
                  </span>
                </NavLink>
                <NavLink
                  to="/WebManagement"
                  className={({ isActive }) =>
                    `${
                      isActive
                        ? "flex items-center bg-swamp-green bg-linear-to-tr p-2 text-neutral-50 inset-shadow-small"
                        : "flex items-center p-2 transition-all duration-200 hover:scale-95 hover:bg-lime-dark/70 hover:text-white"
                    } h-10 w-full rounded-md text-xs`
                  }
                >
                  <span className="flex items-center gap-x-3">
                    <MonitorCog className="h-5" />
                    Website Management
                  </span>
                </NavLink>
              </div>

              <div className="flex h-full flex-col justify-end gap-y-3 rounded-2xl text-sm">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `${
                      isActive
                        ? "flex items-center bg-lime-green p-2 text-neutral-50 inset-shadow-small"
                        : "flex items-center p-2 transition-all duration-200 hover:scale-95 hover:bg-lime-dark/70 hover:text-white"
                    } h-10 w-full rounded-md text-xs`
                  }
                >
                  <span className="flex items-center gap-x-3">
                    <BadgeQuestionMark className="h-5" />
                    Help
                  </span>
                </NavLink>

                <NavLink
                  to="/Logs"
                  className={({ isActive }) =>
                    `${
                      isActive
                        ? "flex items-center bg-swamp-green bg-linear-to-tr p-2 text-neutral-50 inset-shadow-small"
                        : "flex items-center p-2 transition-all duration-200 hover:scale-95 hover:bg-lime-dark/70 hover:text-white"
                    } h-10 w-full rounded-md text-xs`
                  }
                >
                  <span className="flex items-center gap-x-3">
                    <ClipboardClock className="h-5" />
                    Logs
                  </span>
                </NavLink>

                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `${
                      isActive
                        ? "flex items-center bg-lime-green p-2 text-neutral-50 inset-shadow-small"
                        : "flex items-center p-2 transition-all duration-200 hover:scale-95 hover:bg-lime-dark/70 hover:text-white"
                    } h-10 w-full rounded-md text-xs`
                  }
                >
                  <span className="flex items-center gap-x-3">
                    <LogOut className="h-5" />
                    Logout
                  </span>
                </NavLink>
              </div>
            </div>
          </div>
        )}
      </div>

      {/** For laptop and above */}
      <div className="hidden h-screen gap-y-5 p-5 font-[Poppins] text-neutral-700 lg:flex lg:w-[30vw] lg:flex-col xl:w-[17vw]">
        <div className="flex min-h-20 w-full items-center justify-center gap-x-3 rounded-2xl bg-neutral-100 px-3 font-[PoppinsBold] text-sm inset-shadow-small">
          <img src={Logo} alt="" className="h-10 rounded-[50%]" />
          <span>Grade Chirstian Academy</span>
        </div>

        <div className="inset-shadow-l flex h-full flex-col justify-between rounded-2xl bg-neutral-100 p-5 text-sm inset-shadow-lar sm:min-w-20">
          <div className="flex h-full flex-col gap-y-3 rounded-2xl text-sm">
            <NavLink
              to="/Dashboard"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "flex items-center bg-swamp-green bg-linear-to-tr p-2 text-neutral-50 inset-shadow-small"
                    : "view-transition flex items-center p-2 transition-all duration-200 hover:scale-95 hover:bg-lime-dark/70 hover:text-white"
                } h-10 w-full rounded-md text-xs`
              }
            >
              <span className="flex items-center gap-x-3">
                <LayoutDashboard className="h-5" />
                Dashboard
              </span>
            </NavLink>

            <NavLink
              to="/Applications"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "flex items-center bg-swamp-green bg-linear-to-tr p-2 text-neutral-50 inset-shadow-small"
                    : "flex items-center p-2 transition-all duration-200 hover:scale-95 hover:bg-lime-dark/70 hover:text-white"
                } h-10 w-full rounded-md text-xs`
              }
            >
              <span className="flex items-center gap-x-3">
                <FileUser className="h-5" />
                Applications
              </span>
            </NavLink>

            <NavLink
              to="/Submissions"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "flex items-center bg-swamp-green bg-linear-to-tr p-2 text-neutral-50 inset-shadow-small"
                    : "flex items-center p-2 transition-all duration-200 hover:scale-95 hover:bg-lime-dark/70 hover:text-white"
                } h-10 w-full rounded-md text-xs`
              }
            >
              <span className="flex items-center gap-x-3">
                <FileInput className="h-5" />
                Submissions
              </span>
            </NavLink>

            <NavLink
              to="/Students"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "flex items-center bg-swamp-green bg-linear-to-tr p-2 text-neutral-50 inset-shadow-small"
                    : "flex items-center p-2 transition-all duration-200 hover:scale-95 hover:bg-lime-dark/70 hover:text-white"
                } h-10 w-full rounded-md text-xs`
              }
            >
              <span className="flex items-center gap-x-3">
                <User className="h-5" />
                Students
              </span>
            </NavLink>

            <NavLink
              to="/Teachers"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "flex items-center bg-swamp-green bg-linear-to-tr p-2 text-neutral-50 inset-shadow-small"
                    : "flex items-center p-2 transition-all duration-200 hover:scale-95 hover:bg-lime-dark/70 hover:text-white"
                } h-10 w-full rounded-md text-xs`
              }
            >
              <span className="flex items-center gap-x-3">
                <UserPen className="h-5" />
                Teachers
              </span>
            </NavLink>

            <NavLink
              to="/Classes"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "flex items-center bg-swamp-green bg-linear-to-tr p-2 text-neutral-50 inset-shadow-small"
                    : "flex items-center p-2 transition-all duration-200 hover:scale-95 hover:bg-lime-dark/70 hover:text-white"
                } h-10 w-full rounded-md text-xs`
              }
            >
              <span className="flex items-center gap-x-3">
                <GraduationCap className="h-5" />
                Classes
              </span>
            </NavLink>

            <NavLink
              to="/WebManagement"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "flex items-center bg-swamp-green bg-linear-to-tr p-2 text-neutral-50 inset-shadow-small"
                    : "flex items-center p-2 transition-all duration-200 hover:scale-95 hover:bg-lime-dark/70 hover:text-white"
                } h-10 w-full rounded-md text-xs`
              }
            >
              <span className="flex items-center gap-x-3">
                <MonitorCog className="h-5" />
                Website Management
              </span>
            </NavLink>
          </div>

          <div className="flex h-full flex-col justify-end gap-y-3 rounded-2xl text-sm">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "flex items-center bg-lime-green p-2 text-neutral-50 inset-shadow-small"
                    : "flex items-center p-2 transition-all duration-200 hover:scale-95 hover:bg-lime-dark/70 hover:text-white"
                } h-10 w-full rounded-md text-xs`
              }
            >
              <span className="flex items-center gap-x-3">
                <BadgeQuestionMark className="h-5" />
                Help
              </span>
            </NavLink>

            <NavLink
              to="/Logs"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "flex items-center bg-swamp-green bg-linear-to-tr p-2 text-neutral-50 inset-shadow-small"
                    : "flex items-center p-2 transition-all duration-200 hover:scale-95 hover:bg-lime-dark/70 hover:text-white"
                } h-10 w-full rounded-md text-xs`
              }
            >
              <span className="flex items-center gap-x-3">
                <ClipboardClock className="h-5" />
                Logs
              </span>
            </NavLink>

            <NavLink
              to="/"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "flex items-center bg-lime-green p-2 text-neutral-50 inset-shadow-small"
                    : "flex items-center p-2 transition-all duration-200 hover:scale-95 hover:bg-lime-dark/70 hover:text-white"
                } h-10 w-full rounded-md text-xs`
              }
            >
              <span className="flex items-center gap-x-3">
                <LogOut className="h-5" />
                Logout
              </span>
            </NavLink>
          </div>
        </div>
      </div>
    </div>

    // <div className="z-0 h-15 w-full bg-neutral-100">
    //   <div className="flex h-full items-center px-5 inset-shadow-small">
    //     <MenuIcon
    //       onClick={() => {
    //         setSideBar(!sideBar);
    //       }}
    //     />
    //   </div>
    // {sideBar && (
    //   <div className="fixed top-0 z-10 h-screen w-screen bg-neutral-800/20">
    //     <div className="h-full w-[60vw] bg-neutral-100 p-5 inset-shadow-small">
    //       <MenuIcon
    //         onClick={() => {
    //           setSideBar(!sideBar);
    //         }}
    //       />

    //     </div>
    //   </div>
    // )}
    // </div>

    // <div className="flex min-h-20 w-full items-center justify-center gap-x-3 rounded-2xl bg-neutral-100 px-3 font-[PoppinsBold] text-sm inset-shadow-small">
    //     <img src={Logo} alt="" className="h-10 rounded-[50%]" />
    //     <span>Grade Chirstian Academy</span>
    //   </div>

    //   <div className="inset-shadow-l flex h-full flex-col justify-between rounded-2xl bg-neutral-100 p-5 text-sm inset-shadow-lar sm:min-w-20">
    //     <div className="flex h-full flex-col gap-y-3 rounded-2xl text-sm">
    // <NavLink
    //   to="/Dashboard"
    //   className={({ isActive }) =>
    //     `${
    //       isActive
    //         ? "flex items-center bg-linear-to-tr bg-swamp-green p-2 text-neutral-50 inset-shadow-small"
    //         : "view-transition flex items-center p-2 transition-all duration-200 hover:scale-95 hover:bg-lime-dark/70 hover:text-white"
    //     } h-10 w-full rounded-md text-xs`
    //   }
    // >
    //   <span className="flex items-center gap-x-3">
    //     <LayoutDashboard className="h-5" />
    //     Dashboard
    //   </span>
    // </NavLink>

    // <NavLink
    //   to="/Applications"
    //   className={({ isActive }) =>
    //     `${
    //       isActive
    //         ? "flex items-center bg-linear-to-tr bg-swamp-green p-2 text-neutral-50 inset-shadow-small"
    //         : "flex items-center p-2 transition-all duration-200 hover:scale-95 hover:bg-lime-dark/70 hover:text-white"
    //     } h-10 w-full rounded-md text-xs`
    //   }
    // >
    //   <span className="flex items-center gap-x-3">
    //     <FileUser className="h-5" />
    //     Applications
    //   </span>
    // </NavLink>

    //   <NavLink
    //     to="/Submissions"
    //     className={({ isActive }) =>
    //       `${
    //         isActive
    //           ? "flex items-center bg-linear-to-tr bg-swamp-green p-2 text-neutral-50 inset-shadow-small"
    //           : "flex items-center p-2 transition-all duration-200 hover:scale-95 hover:bg-lime-dark/70 hover:text-white"
    //       } h-10 w-full rounded-md text-xs`
    //     }
    //   >
    //     <span className="flex items-center gap-x-3">
    //       <FileInput className="h-5" />
    //       Submissions
    //     </span>
    //   </NavLink>

    //   <NavLink
    //     to="/Students"
    //     className={({ isActive }) =>
    //       `${
    //         isActive
    //           ? "flex items-center bg-linear-to-tr bg-swamp-green p-2 text-neutral-50 inset-shadow-small"
    //           : "flex items-center p-2 transition-all duration-200 hover:scale-95 hover:bg-lime-dark/70 hover:text-white"
    //       } h-10 w-full rounded-md text-xs`
    //     }
    //   >
    //     <span className="flex items-center gap-x-3">
    //       <User className="h-5" />
    //       Students
    //     </span>
    //   </NavLink>

    //   <NavLink
    //     to="/Teachers"
    //     className={({ isActive }) =>
    //       `${
    //         isActive
    //           ? "flex items-center bg-linear-to-tr bg-swamp-green p-2 text-neutral-50 inset-shadow-small"
    //           : "flex items-center p-2 transition-all duration-200 hover:scale-95 hover:bg-lime-dark/70 hover:text-white"
    //       } h-10 w-full rounded-md text-xs`
    //     }
    //   >
    //     <span className="flex items-center gap-x-3">
    //       <UserPen className="h-5" />
    //       Teachers
    //     </span>
    //   </NavLink>
    //   <NavLink
    //     to="/Classes"
    //     className={({ isActive }) =>
    //       `${
    //         isActive
    //           ? "flex items-center bg-linear-to-tr bg-swamp-green p-2 text-neutral-50 inset-shadow-small"
    //           : "flex items-center p-2 transition-all duration-200 hover:scale-95 hover:bg-lime-dark/70 hover:text-white"
    //       } h-10 w-full rounded-md text-xs`
    //     }
    //   >
    //     <span className="flex items-center gap-x-3">
    //       <GraduationCap className="h-5" />
    //       Classes
    //     </span>
    //   </NavLink>
    //   <NavLink
    //     to="/WebManagement"
    //     className={({ isActive }) =>
    //       `${
    //         isActive
    //           ? "flex items-center bg-linear-to-tr bg-swamp-green p-2 text-neutral-50 inset-shadow-small"
    //           : "flex items-center p-2 transition-all duration-200 hover:scale-95 hover:bg-lime-dark/70 hover:text-white"
    //       } h-10 w-full rounded-md text-xs`
    //     }
    //   >
    //     <span className="flex items-center gap-x-3">
    //       <MonitorCog className="h-5" />
    //       Website Management
    //     </span>
    //   </NavLink>
    // </div>

    // <div className="flex h-full flex-col justify-end gap-y-3 rounded-2xl text-sm">
    //   <NavLink
    //     to="/"
    //     className={({ isActive }) =>
    //       `${
    //         isActive
    //           ? "flex items-center bg-lime-green p-2 text-neutral-50 inset-shadow-small"
    //           : "flex items-center p-2 transition-all duration-200 hover:scale-95 hover:bg-lime-dark/70 hover:text-white"
    //       } h-10 w-full rounded-md text-xs`
    //     }
    //   >
    //     <span className="flex items-center gap-x-3">
    //       <BadgeQuestionMark className="h-5" />
    //       Help
    //     </span>
    //   </NavLink>

    //   <NavLink
    //     to="/Logs"
    //     className={({ isActive }) =>
    //       `${
    //         isActive
    //           ? "flex items-center bg-linear-to-tr bg-swamp-green p-2 text-neutral-50 inset-shadow-small"
    //           : "flex items-center p-2 transition-all duration-200 hover:scale-95 hover:bg-lime-dark/70 hover:text-white"
    //       } h-10 w-full rounded-md text-xs`
    //     }
    //   >
    //     <span className="flex items-center gap-x-3">
    //       <ClipboardClock className="h-5" />
    //       Logs
    //     </span>
    //   </NavLink>

    //   <NavLink
    //     to="/"
    //     className={({ isActive }) =>
    //       `${
    //         isActive
    //           ? "flex items-center bg-lime-green p-2 text-neutral-50 inset-shadow-small"
    //           : "flex items-center p-2 transition-all duration-200 hover:scale-95 hover:bg-lime-dark/70 hover:text-white"
    //       } h-10 w-full rounded-md text-xs`
    //     }
    //   >
    //     <span className="flex items-center gap-x-3">
    //       <LogOut className="h-5" />
    //       Logout
    //     </span>
    //   </NavLink>
    //     </div>
    //   </div>
  );
}

export default SidePanel;
