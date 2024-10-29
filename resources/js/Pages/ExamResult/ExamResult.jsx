import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Link } from "@inertiajs/react";
import { Button } from "@mui/material";
import dayjs from "dayjs";

const ExamResult = ({ auth, exams }) => {
    return (
        <AuthenticatedLayout user={auth.user}>
            <div className="w-full p-5 flex gap-5 justify-around flex-wrap">
                {exams.map((exam) => (
                    <div
                        key={exam.id}
                        className="w-72 pb-5 shadow-md bg-gray-800 text-white  rounded-md flex flex-col items-center gap-5 justify-between"
                    >
                        {/* <p>{exam.description}</p> */}
                        <h1 className="w-full text-center text-lg font-bold font-space bg-orange-500 p-2 ">{exam.title}</h1>
                        <div className="flex w-full flex-col p-5">
                            <p className="">Date: {dayjs(exam.created_at).format(' MMMM D, YYYY')}</p>
                            <p className="">Time: {dayjs(exam.created_at).format('h:mm A')}</p>
                            <p className="">Duration: {exam.duration} min</p>
                            <p className=""></p>
                        </div>
                        <Link href={route(`take-exam.index`, { id: exam.id , title:exam.title})}>
                            <Button variant="contained" color="warning">
                                View Result
                            </Button>
                        </Link>
                    </div>
                ))}
            </div>
        </AuthenticatedLayout>
    );
};

export default ExamResult;