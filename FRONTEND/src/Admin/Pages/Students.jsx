import Panel from "../Components/SidePanel.jsx";
import SearchBar from "../Components/Inputs/SearchBar.jsx";
import EnrolledTable from "../Components/Table.jsx";
import { Trash, Edit } from "lucide-react";
import AddButton from "../Components/Buttons/GreenButton.jsx";
import { useEffect, useState } from "react";

import {
  getStudents,
  addStudent,
  modifyStudent,
  removeStudent,
} from "../../services/studentService.jsx";

import { createColumnHelper } from "@tanstack/react-table";
import React from "react";

const columnHelper = createColumnHelper();

const initialStudentState = {
  student_id: "",
  s_firstname: "",
  s_lastname: "",
  s_middlename: "",
  s_gender: "",
  s_age: "",
  s_guardian: "",
  s_guardianemail: "",
};

function Students() {
  // useState for rendering table data
  const [students, setStudents] = useState([]);

  // conditional rendering for modals

  const [modifyModal, setModifyModal] = useState(false);

  //filter state for search
  const [search, setSearch] = useState("");

  // Form input state
  const [student, setStudent] = useState(initialStudentState);

  // function to open Modify modal
  const handleEditClick = (rowData) => {
    setStudent({
      student_id: rowData.student_id || "",
      s_firstname: rowData.s_firstname || "",
      s_lastname: rowData.s_lastname || "",
      s_middlename: rowData.s_middlename || "",
      s_gender: rowData.s_gender || "",
      s_age: rowData.s_age || "",
      s_guardian: rowData.s_guardian || "",
      s_guardianemail: rowData.s_guardianemail || "",
    });
    setModifyModal(true);
  };

  //close modals and reset inputs
  const handleCloseModal = () => {
    setModifyModal(false);
    setStudent(initialStudentState);
  };

  // table rows and header
  const Studentcolumns = [
    columnHelper.accessor("student_id", {
      header: "Student ID ",
    }),
    columnHelper.accessor("s_firstname", {
      header: "First Name ",
    }),
    columnHelper.accessor("s_lastname", {
      header: "Last Name ",
    }),
    columnHelper.accessor("s_middlename", {
      header: "Middle Name ",
    }),
    columnHelper.accessor("s_gender", {
      header: "Gender ",
    }),
    columnHelper.accessor("s_age", {
      header: "Age ",
    }),
    columnHelper.display({
      header: "Action ",
      cell: (props) => {
        const rowData = props.row.original;
        const userId = rowData.student_id;

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
              className="flex h-8 w-8 items-center justify-center gap-x-1 rounded-sm text-sm text-reject/80 duration-150 hover:cursor-pointer focus:bg-reject focus:text-white active:scale-90"
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
    loadStudents();
  }, []);

  // function for refreshing data database
  const loadStudents = async () => {
    try {
      const data = await getStudents();
      setStudents(data || []);
    } catch (error) {
      console.error("Error loading students:", error);
    }
  };

  // function for handling submitted student
  const handleAdd = async () => {
    try {
      await addStudent(student);
      alert("STUDENT ADDED!");
      handleCloseModal();
      loadStudents();
    } catch (error) {
      console.error(error);
    }
  };

  // function for handling modified student
  const handleModify = async () => {
    try {
      await modifyStudent(student);
      alert("STUDENT UPDATED!");
      handleCloseModal();
      loadStudents();
    } catch (error) {
      console.error(error);
    }
  };

  ///function for handling delete
  const handleDelete = async (student_id) => {
    if (window.confirm("Are you sure you want to delete this student?")) {
      try {
        await removeStudent(student_id);
        alert("STUDENT DELETED!");
        loadStudents(); // Refresh the table layout data
      } catch (error) {
        console.error(error);
      }
    }
  };

  // for handling data on inputs
  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
  };

  const filteredStudents = students.filter((student) => {
    const query = search.toLowerCase();

    return student.student_id?.toLowerCase().includes(query);
  });

  return (
    <div className="flex h-screen w-full flex-col gap-x-5 overflow-hidden bg-egg font-[Poppins] lg:flex-row">
      <Panel />
      <div className="flex h-full w-full pb-5">
        {/* for mobile to tablet */}
        <div className="flex h-full w-full flex-col gap-y-5 px-[5%] lg:hidden">
          <div className="flex min-h-15 w-full items-center justify-between">
            <span className="text-sm">Students</span>
            <span className="flex w-50 items-center gap-x-2">
              <SearchBar
                InputType={"search"}
                InputId={"searchbar"}
                InputPlaceholder={"Search Student ID"}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </span>
          </div>

          <div className="flex h-full w-full flex-col">
            <span className="h-[95%] w-full">
              <EnrolledTable columns={Studentcolumns} data={filteredStudents} />
            </span>
          </div>
        </div>

        {/* for laptop and above */}
        <div className="hidden h-full max-w-full min-w-[82vw] flex-col gap-y-5 p-5 lg:flex">
          <div className="flex min-h-[8vh] w-full items-center justify-between rounded-lg bg-neutral-100 px-5 inset-shadow-small">
            <span className="text-sm">Students</span>
            <span className="flex w-50 gap-x-2">
              <SearchBar
                InputType={"search"}
                InputId={"searchbar"}
                InputPlaceholder={"Search Student ID"}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </span>
          </div>

          <div className="h-full w-full rounded-xl bg-neutral-100">
            <EnrolledTable columns={Studentcolumns} data={filteredStudents} />
          </div>
        </div>
      </div>

      {/* MODIFY MODAL */}
      {modifyModal && (
        <div className="fixed z-50 flex h-full w-full items-center justify-center bg-neutral-800/60">
          <div className="flex h-130 min-h-100 w-80 flex-col items-center justify-between rounded-lg bg-neutral-100 p-5 inset-shadow-small">
            <span className="flex items-center text-sm">
              Modify Student Info
            </span>
            <span className="flex w-full flex-col gap-y-2">
              <input
                type="text"
                name="student_id"
                value={student.student_id}
                disabled
                placeholder="Student ID"
                className="h-10 w-full cursor-not-allowed rounded-lg border border-neutral-300 bg-neutral-200 p-2 text-xs text-neutral-500 outline-none"
              />
              <input
                type="text"
                name="s_firstname"
                value={student.s_firstname}
                onChange={handleChange}
                placeholder="First Name"
                className="h-10 w-full rounded-lg border border-swamp-green bg-neutral-50 p-2 text-xs outline-offset-0 focus:outline-1 focus:outline-lime-green"
              />
              <input
                type="text"
                name="s_lastname"
                value={student.s_lastname}
                onChange={handleChange}
                placeholder="Last Name"
                className="h-10 w-full rounded-lg border border-swamp-green bg-neutral-50 p-2 text-xs outline-offset-0 focus:outline-1 focus:outline-lime-green"
              />
              <input
                type="text"
                name="s_middlename"
                value={student.s_middlename}
                onChange={handleChange}
                placeholder="Middle Name"
                className="h-10 w-full rounded-lg border border-swamp-green bg-neutral-50 p-2 text-xs outline-offset-0 focus:outline-1 focus:outline-lime-green"
              />
              <span className="flex gap-x-2">
                <input
                  type="text"
                  name="s_gender"
                  value={student.s_gender}
                  onChange={handleChange}
                  placeholder="Gender"
                  className="h-10 w-full rounded-lg border border-swamp-green bg-neutral-50 p-2 text-xs outline-offset-0 focus:outline-1 focus:outline-lime-green"
                />
                <input
                  type="text"
                  name="s_age"
                  value={student.s_age}
                  onChange={handleChange}
                  placeholder="Age"
                  className="h-10 w-full rounded-lg border border-swamp-green bg-neutral-50 p-2 text-xs outline-offset-0 focus:outline-1 focus:outline-lime-green"
                />
              </span>
              <input
                type="text"
                name="s_guardian"
                value={student.s_guardian}
                onChange={handleChange}
                placeholder="Guardian Name"
                className="h-10 w-full rounded-lg border border-swamp-green bg-neutral-50 p-2 text-xs outline-offset-0 focus:outline-1 focus:outline-lime-green"
              />
              <input
                type="text"
                name="s_guardianemail"
                value={student.s_guardianemail}
                onChange={handleChange}
                placeholder="Guardian Email"
                className="h-10 w-full rounded-lg border border-swamp-green bg-neutral-50 p-2 text-xs outline-offset-0 focus:outline-1 focus:outline-lime-green"
              />
            </span>

            <span className="flex w-full flex-col gap-y-2">
              <button
                onClick={handleModify}
                className="h-10 w-full cursor-pointer rounded-lg bg-swamp-green text-xs text-neutral-50"
              >
                Modify Student
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

export default Students;
