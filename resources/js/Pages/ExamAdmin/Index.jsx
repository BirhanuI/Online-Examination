import DataTable from "@/Components/DataTable";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";
import { Add, Delete, Edit } from "@mui/icons-material";
import { Button, IconButton, Tooltip } from "@mui/material";
import { useState } from "react";
import ScheduleExam from "./ScheduleExam";
import { useEffect } from "react";
import axios from "axios";
const Index = ({ auth, exams }) => {
    useEffect(()=>{
     const fetch = async () => {
         await axios.get('/api/time').then((res)=>{
             console.log(res.data.time);
         });
     }   
     fetch();
    },[]);
    function handleDelete(id) {
        router.delete(`/exam/${id}`);
    }

    const [showScheduleModal, setShowScheduleModal] = useState(false);
    const [examId, setExamId] = useState(null);
    const examColumn = [
        {
            accessorKey: "title",
            header: "Exam Title",
            size: 200,
            grow: true,
        },
        // {
        //     accessorKey: "description",
        //     header: "Exam Description",
        //     minSize: 150,
        //     grow: true,
        // },
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
            accessorKey: "grade",
            header: "Grade",
            size: 100,
        },
        {
            accessorKey: "schedule_date",
            header: "Give Exam",
            size: 100,
            Cell: ({ row }) => (
                <div className="">
                    <Button
                        variant="contained"
                        // disabled={row.original.schedule?true:false}
                        onClick={() => {
                            setExamId(row.original.id);
                            setShowScheduleModal(true);
                        }}
                        color={row.original.schedule?"warning":"primary"}
                    >{row.original.schedule?"reschedule":"Schedule"}
                    </Button>
                </div>
            ),
            size: 150,
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
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Dashboard" />
            <ScheduleExam
                examId={examId}
                show={showScheduleModal}
                onClose={setShowScheduleModal}
            />
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
