import Panel from "../Components/SidePanel.jsx";
import SearchBar from "../Components/Inputs/SearchBar.jsx";
import TeacherTable from "../Components/Table.jsx";
import { Trash, Edit } from "lucide-react";
import CreateButton from "../Components/Buttons/GreenButton.jsx";
import { useEffect, useState } from "react";

import {
  getTeachers,
  addTeacher,
  modifyTeacher,
  removeTeacher,
} from "../services/teacherService.jsx";

import { createColumnHelper } from "@tanstack/react-table";
import React from "react";

const columnHelper = createColumnHelper();

const initialTeacherState = {
  teacher_id: "",
  t_firstname: "",
  t_lastname: "",
  t_middlename: "",
  t_gender: "",
  t_role: "",
};

function Teachers() {
  // useState for rendering table data
  const [teachers, setTeachers] = useState([]);

  // conditional rendering for modals
  const [addModal, setAddModal] = useState(false);
  const [modifyModal, setModifyModal] = useState(false);

  //filter state for search
  const [search, setSearch] = useState("");

  // Form input state
  const [teacher, setTeacher] = useState(initialTeacherState);

  // function to open Modify modal
  const handleEditClick = (rowData) => {
    setTeacher({
      teacher_id: rowData.teacher_id || "",
      t_firstname: rowData.t_firstname || "",
      t_lastname: rowData.t_lastname || "",
      t_middlename: rowData.t_middlename || "",
      t_gender: rowData.t_gender || "",
      t_role: rowData.t_role || "",
    });
    setModifyModal(true);
  };

  //close modal and reset inputs
  const handleCloseModal = () => {
    setAddModal(false);
    setModifyModal(false);
    setTeacher(initialTeacherState);
  };

  const Teachercolumns = [
    columnHelper.accessor("teacher_id", {
      header: "Teacher Id ",
    }),
    columnHelper.accessor("t_firstname", {
      header: "First Name ",
    }),
    columnHelper.accessor("t_middlename", {
      header: "Last Name ",
    }),

    columnHelper.accessor("t_gender", {
      header: "Gender ",
    }),
    columnHelper.accessor("t_role", {
      header: "Role ",
    }),

    columnHelper.display({
      header: "Action ",
      cell: (props) => {
        const rowData = props.row.original;
        const userId = rowData.teacher_id;

        return (
          <div className="flex items-center justify-start gap-3">
            {/* FIXED: Pass rowData into the click handler */}
            <button
              onClick={() => handleEditClick(rowData)}
              className="flex h-8 w-8 items-center justify-center gap-x-1 rounded-sm text-sm text-swamp-green duration-150 hover:cursor-pointer focus:bg-swamp-green focus:text-white active:scale-90"
            >
              <Edit />
            </button>
            <button
              onClick={() => handleDelete(userId)}
              className="flex h-8 w-8 items-center justify-center gap-x-1 rounded-sm text-sm text-reject duration-150 hover:cursor-pointer focus:bg-reject focus:text-white active:scale-90"
            >
              <Trash />
            </button>
          </div>
        );
      },
    }),
  ];

  // useEffect for getting data from database
  useEffect(() => {
    loadTeachers();
  }, []);

  // useEffect for refreshing data from database
  const loadTeachers = async () => {
    try {
      const data = await getTeachers();
      setTeachers(data || []);
    } catch (error) {
      console.error("Error loading teachers:", error);
    }
  };

  // function for handling submitted teachers
  const handleAdd = async () => {
    try {
      await addTeacher(teacher);
      alert("TEACHER ADDED!");
      handleCloseModal();
      loadTeachers();
    } catch (error) {
      console.error(error);
    }
  };

  // function for handling modified teachers
  const handleModify = async () => {
    try {
      await modifyTeacher(teacher);
      alert("TEACHER UPDATED!");
      handleCloseModal();
      loadTeachers();
    } catch (error) {
      console.error(error);
    }
  };

  ///function for handling delete
  const handleDelete = async (teacher_id) => {
    if (window.confirm("Are you sure you want to delete this teacher?")) {
      try {
        await removeTeacher(teacher_id);
        alert("TEACHER DELETED!");
        loadTeachers();
      } catch (error) {
        console.error(error);
      }
    }
  };

  // for handling data on inputs
  const handleChange = (e) => {
    setTeacher({
      ...teacher,
      [e.target.name]: e.target.value,
    });
  };

  const filteredTeachers = teachers.filter((teacher) => {
    const query = search.toLowerCase();

    return (
      teacher.teacher_id?.toLowerCase().includes(query) ||
      teacher.t_firstname?.toLowerCase().includes(query) ||
      teacher.t_lastname?.toLowerCase().includes(query) ||
      teacher.t_role?.toLowerCase().includes(query)
    );
  });

  return (
    <div className="flex h-screen w-full bg-egg font-[Poppins]">
      <Panel />
      <div className="mx-5 flex h-full w-full flex-col gap-y-5 p-5">
        <div className="flex h-15 w-375 items-center justify-between rounded-lg bg-neutral-100 pr-2 pl-5 inset-shadow-small">
          <span className="text-sm">Teachers</span>
          <span className="flex w-75 gap-x-2">
            <SearchBar
              InputType={"search"}
              InputId={"searchbar"}
              InputPlaceholder={"Search ID, Name, Role "}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <span className="h-10 w-20">
              <CreateButton onClick={() => setAddModal(true)} label={"Add"} />
            </span>
          </span>
        </div>
        <div className="h-195 w-375 rounded-xl bg-neutral-100">
          <TeacherTable columns={Teachercolumns} data={filteredTeachers} />
        </div>
      </div>
      {/* ADD MODAL */}
      {addModal && (
        <div className="fixed z-50 flex h-full w-full items-center justify-center bg-neutral-800/60">
          <div className="flex max-h-150 min-h-120 w-80 flex-col items-center justify-between rounded-lg bg-neutral-100 p-5 inset-shadow-small">
            <span className="flex items-center text-sm">Add Teacher Info</span>
            <span className="flex w-full flex-col gap-y-2">
              <input
                type="text"
                name="teacher_id"
                value={teacher.teacher_id}
                onChange={handleChange}
                placeholder="Teacher ID"
                className="h-10 w-full rounded-lg border border-swamp-green bg-neutral-50 p-2 text-xs outline-offset-0 focus:outline-1 focus:outline-lime-green"
              />
              <input
                type="text"
                name="t_firstname"
                value={teacher.t_firstname}
                onChange={handleChange}
                placeholder="First Name"
                className="h-10 w-full rounded-lg border border-swamp-green bg-neutral-50 p-2 text-xs outline-offset-0 focus:outline-1 focus:outline-lime-green"
              />
              <input
                type="text"
                name="t_lastname"
                value={teacher.t_lastname}
                onChange={handleChange}
                placeholder="Last Name"
                className="h-10 w-full rounded-lg border border-swamp-green bg-neutral-50 p-2 text-xs outline-offset-0 focus:outline-1 focus:outline-lime-green"
              />
              <input
                type="text"
                name="t_middlename"
                value={teacher.t_middlename}
                onChange={handleChange}
                placeholder="Middle Name"
                className="h-10 w-full rounded-lg border border-swamp-green bg-neutral-50 p-2 text-xs outline-offset-0 focus:outline-1 focus:outline-lime-green"
              />
              <input
                type="text"
                name="t_gender"
                value={teacher.t_gender}
                onChange={handleChange}
                placeholder="Gender"
                className="h-10 w-full rounded-lg border border-swamp-green bg-neutral-50 p-2 text-xs outline-offset-0 focus:outline-1 focus:outline-lime-green"
              />
              <input
                type="text"
                name="t_role"
                value={teacher.t_role}
                onChange={handleChange}
                placeholder="Role"
                className="h-10 w-full rounded-lg border border-swamp-green bg-neutral-50 p-2 text-xs outline-offset-0 focus:outline-1 focus:outline-lime-green"
              />
            </span>

            <span className="flex w-full flex-col gap-y-2">
              <button
                onClick={handleAdd}
                className="h-10 w-full cursor-pointer rounded-lg bg-swamp-green text-xs text-neutral-50"
              >
                Add Teacher
              </button>
              <button
                onClick={handleCloseModal}
                className="h-10 w-full cursor-pointer rounded-lg border border-neutral-400 text-xs text-neutral-800"
              >
                Close
              </button>
            </span>
          </div>
        </div>
      )}

      {/* MODIFY MODAL */}
      {modifyModal && (
        <div className="fixed z-50 flex h-full w-full items-center justify-center bg-neutral-800/60">
          <div className="flex max-h-150 min-h-120 w-80 flex-col items-center justify-between rounded-lg bg-neutral-100 p-5 inset-shadow-small">
            <span className="flex items-center text-sm">
              Modify Teacher Info
            </span>
            <span className="flex w-full flex-col gap-y-2">
              <input
                type="text"
                name="teacher_id"
                value={teacher.teacher_id}
                disabled
                onChange={handleChange}
                placeholder="Teacher ID"
                className="h-10 w-full cursor-not-allowed rounded-lg border border-neutral-300 bg-neutral-200 p-2 text-xs text-neutral-500 outline-none"
              />
              <input
                type="text"
                name="t_firstname"
                value={teacher.t_firstname}
                onChange={handleChange}
                placeholder="First Name"
                className="h-10 w-full rounded-lg border border-swamp-green bg-neutral-50 p-2 text-xs outline-offset-0 focus:outline-1 focus:outline-lime-green"
              />
              <input
                type="text"
                name="t_lastname"
                value={teacher.t_lastname}
                onChange={handleChange}
                placeholder="Last Name"
                className="h-10 w-full rounded-lg border border-swamp-green bg-neutral-50 p-2 text-xs outline-offset-0 focus:outline-1 focus:outline-lime-green"
              />
              <input
                type="text"
                name="t_middlename"
                value={teacher.t_middlename}
                onChange={handleChange}
                placeholder="Middle Name"
                className="h-10 w-full rounded-lg border border-swamp-green bg-neutral-50 p-2 text-xs outline-offset-0 focus:outline-1 focus:outline-lime-green"
              />
              <input
                type="text"
                name="t_gender"
                value={teacher.t_gender}
                onChange={handleChange}
                placeholder="Gender"
                className="h-10 w-full rounded-lg border border-swamp-green bg-neutral-50 p-2 text-xs outline-offset-0 focus:outline-1 focus:outline-lime-green"
              />
              <input
                type="text"
                name="t_role"
                value={teacher.t_role}
                onChange={handleChange}
                placeholder="Role"
                className="h-10 w-full rounded-lg border border-swamp-green bg-neutral-50 p-2 text-xs outline-offset-0 focus:outline-1 focus:outline-lime-green"
              />
            </span>

            <span className="flex w-full flex-col gap-y-2">
              <button
                onClick={handleModify}
                className="h-10 w-full cursor-pointer rounded-lg bg-swamp-green text-xs text-neutral-50"
              >
                Modify Teacher
              </button>
              <button
                onClick={handleCloseModal}
                className="h-10 w-full cursor-pointer rounded-lg border border-neutral-400 text-xs text-neutral-800"
              >
                Close
              </button>
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
export default Teachers;
