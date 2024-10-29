import DataTable from "@/Components/DataTable";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";
import { Add, Delete, Edit } from "@mui/icons-material";
import { Avatar, Button, IconButton, Tooltip } from "@mui/material";
import AddStudent from "./AddStudent";
import { useState } from "react";
const StudentIndex = ({ auth, students }) => {
    function handleDelete(id) {
        router.delete(`/exam/${id}`);
    }

    const examColumn = [
        {
            accessorKey: "avatar",
            header: "Avatar",
            size: 100,
            Cell: ({ row }) => <Avatar />,
        },
        {
            accessorKey: "full_name",
            header: "Full Name ",
            grow: true,
        },
        {
            accessorKey: "gender",
            header: "Gender",
            size: 100,
        },
        {
            accessorKey: "grade",
            header: "Grade",
            size: 100,
        },
        {
            accessorKey: "actions",
            header: "Actions",
            size: 100,
            Cell: ({ row }) => (
                <div className="">
                    <Tooltip title="Edit Exam" placement="top">
                        <IconButton
                            onClick={() =>
                                router.get(`/exam/${row.original.id}`)
                            }
                        >
                            <Edit fontSize="small" />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Delete Exam" placement="top">
                        <IconButton
                            onClick={() => handleDelete(row.original.id)}
                        >
                            <Delete fontSize="small" />
                        </IconButton>
                    </Tooltip>
                </div>
            ),
            size: 150,
        },
    ];
    const [showAddStudent, setShowAddStudent] = useState(false);
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Students" />
            <AddStudent show={showAddStudent} onClose={setShowAddStudent} />
            <div className="p-5 flex flex-col gap-5">
                <div className="p-10 bg-white flex border rounded shadow-lg flex-col gap-10">
                    <div className="flex justify-between items-center text-lg w-full ">
                        <p className="font-space text-gray-800">Students</p>
                        <Button
                            variant="contained"
                            onClick={() => setShowAddStudent(true)}
                        >
                            <Add fontSize="medium" />
                            Add Student
                        </Button>
                    </div>
                    <div className="">
                        <DataTable data={students} columns={examColumn} />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default StudentIndex;
