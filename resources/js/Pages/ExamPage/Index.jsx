import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Link } from "@inertiajs/react";
import { Button } from "@mui/material";

const Index = ({ auth, exams }) => {
    return (
        <AuthenticatedLayout user={auth.user}>
            <div className="w-full p-5 flex gap-5 justify-around flex-wrap">
                {exams.map((exam) => (
                    <div
                        key={exam.id}
                        className="w-60 shadow-md bg-gray-800 text-white p-5 rounded-md flex flex-col items-center gap-10 justify-between"
                    >
                        {/* <p>{exam.description}</p> */}
                        <h1 className="text-center text-lg">{exam.title}</h1>
                        <Link href={route(`take-exam.index`, { id: exam.id , title:exam.title})}>
                            <Button variant="contained" color="warning">
                                Take Exam
                            </Button>
                        </Link>
                    </div>
                ))}
            </div>
        </AuthenticatedLayout>
    );
};

export default Index;
