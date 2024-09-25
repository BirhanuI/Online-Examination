import DataTable from "@/Components/DataTable";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";
import { Add, Delete, Edit, } from "@mui/icons-material";
import {IconButton, Tooltip, } from "@mui/material";
import { useState } from "react";
const Index = ({ auth, exams }) => {
    function handleDelete(id){
        router.delete(`/exam/${id}`);
    }

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
            Cell: ({row}) => (
                <div className="">
                    {/* <Link href={route('question.index',{id:row.original.id})}>
                        <Tooltip title="View Question" placement="top">
                            <IconButton>
                                <ViewList fontSize="medium" />
                            </IconButton>
                        </Tooltip>
                    </Link> */}
                    <Tooltip title="Edit Exam" placement="top">
                        <IconButton onClick={() => router.get(`/exam/${row.original.id}`) }>
                            <Edit fontSize="small" />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Delete Exam" placement="top">
                        <IconButton onClick={() => handleDelete(row.original.id)}>
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
            <div className="p-5 flex flex-col gap-5">
                <div className="p-10 bg-white flex border rounded shadow-lg flex-col gap-10">
                    <div className="flex justify-between items-center text-lg w-full ">
                        <p className="font-space text-gray-800">
                            Previous Exams
                        </p>
                        <Link href={route("exam.create")}>
                            <span className="flex items-start">
                                <Add fontSize="medium" />
                                Create Exam
                            </span>
                        </Link>
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
