import DataTable from "@/Components/DataTable";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import { Add, Delete, Edit, ViewList } from "@mui/icons-material";
import { Button, Icon, IconButton, Tooltip, Typography } from "@mui/material";
import CreateExam from "./CreateExam";
import { useState } from "react";
const Index = ({ auth, exams }) => {
    const [showCreateExamModule, setShowCreateExamModule] = useState(false);
    const examColumn = [
        {
            accessorKey: "title",
            header: "Exam Title",
            size: 150,
            grow: true,
        },
        {
            accessorKey: "description",
            header: "Exam Description",
            minSize: 150,
            grow: true,
        },
        {
            accessorKey: "duration",
            header: "Duration",
            size: 100,
        },
        {
            accessorKey: "subject_id",
            header: "Subject",
            size: 100,
        },
        {
            accessorKey: "actions",
            header: "Actions",
            size: 100,
            Cell: () => (
                <div className="">
                    <Link>
                        <Tooltip title="View Question" placement="top">
                            <IconButton>
                                <ViewList fontSize="medium" />
                            </IconButton>
                        </Tooltip>
                    </Link>
                    <Tooltip title="Edit Exam" placement="top">
                        <IconButton>
                            <Edit fontSize="small" />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Delete Exam" placement="top">
                        <IconButton>
                            <Delete fontSize="small" />
                        </IconButton>
                    </Tooltip>
                </div>
            ),
            size: 150,
        },
    ];
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Dashboard" />
            <CreateExam
                show={showCreateExamModule}
                onClose={setShowCreateExamModule}
            />
            <div className="p-5 flex flex-col gap-5">
                <div className="p-10 bg-white flex border rounded shadow-lg flex-col gap-10">
                    <div className="flex justify-between items-center text-lg w-full ">
                        <p className="font-space text-gray-800">
                            Previous Exams
                        </p>
                        <Button onClick={() => setShowCreateExamModule(true)}>
                            <span className="flex items-start">
                                <Add fontSize="medium" />
                                Create Exam
                            </span>
                        </Button>
                    </div>
                    <div className="">
                        <DataTable data={exams} columns={examColumn} />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Index;
