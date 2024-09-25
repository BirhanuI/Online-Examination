import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Link } from "@inertiajs/react";
import { Button } from "@mui/material";

const ExamResult = ({ auth, exams }) => {
    return (
        <AuthenticatedLayout user={auth.user}>
            <div className="w-full p-5 flex gap-5 justify-around flex-wrap">
                Result
                {exams.map((exam) => (
                    <div className="">{exam.id}</div>
                ))}
            </div>
        </AuthenticatedLayout>
    );
};

export default ExamResult;