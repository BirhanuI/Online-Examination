import DataTable from "@/Components/DataTable";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";
import { Add, Delete, Edit } from "@mui/icons-material";
import { Avatar, Button, IconButton, Tooltip } from "@mui/material";
import { useState } from "react";
import AddTeacher from "./AddTeacher";
const Index = ({ auth, teachers,subject }) => {
    function handleDelete(id) {
        if (confirm(`Are you sure you want to delete student ${teachers.find((s) => s.id === id).full_name}?`)) {
            router.delete(`/student/${id}`);
        }
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
                            onClick={() => {
                                setStudent(row.original);
                                setShowAddStudent(true);
                            }}
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
    const [student, setStudent] = useState(null);
    const [showAddStudent, setShowAddStudent] = useState(false);
    
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Teachers" />
            <AddTeacher
                student={student}
                show={showAddStudent}
                subject={subject}
                onClose={setShowAddStudent}
            />
            <div className="p-5 flex flex-col gap-5">
                <div className="p-10 bg-white flex border rounded shadow-lg flex-col gap-10">
                    <div className="flex justify-between items-center text-lg w-full ">
                        <p className="font-space text-gray-800">Teachers</p>
                        <Button
                            variant="contained"
                            onClick={() => {
                                setStudent(null);
                                setShowAddStudent(true);
                            }}
                        >
                            <Add fontSize="medium" />
                            Add Teacher
                        </Button>
                    </div>
                    <div className="">
                        <DataTable data={teachers} columns={examColumn} />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Index;
