import Modal from "@/Components/Modal";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Link } from "@inertiajs/react";
import { Button } from "@mui/material";
import dayjs from "dayjs";
import { useState } from "react";

const Index = ({ auth, exams }) => {
    const [selectedExam, setSelectedExam] = useState(null);
    return (
        <AuthenticatedLayout user={auth.user}>
            {exams.length === 0 ? (
                <div className="flex justify-center items-center h-full p-20">
                    <h1 className="text-3xl font-bold font-space">
                        No Exams Available!
                    </h1>
                </div>
            ) : (
                <div className="w-full p-5 flex gap-5 justify-around flex-wrap">
                    {exams.map((exam) => (
                        <div
                            key={exam.id}
                            className="w-72 pb-5 shadow-md bg-gray-800 text-white  rounded-md flex flex-col items-center gap-5 justify-between"
                        >
                            {/* <p>{exam.description}</p> */}
                            <h1 className="w-full text-center text-lg font-bold font-space bg-orange-500 p-2 ">
                                {exam.title}
                            </h1>
                            <div className="flex w-full flex-col p-5">
                                <p className="">
                                    Date:{" "}
                                    {dayjs(exam.schedule.date).format(
                                        "dddd, MMMM D, YYYY"
                                    )}
                                </p>
                                <p className="">
                                    Time:{" "}
                                    {dayjs(exam.schedule.date).subtract(3, "h").format("h:mm A")}
                                </p>
                                <p className="">
                                    Duration: {exam.duration} min
                                </p>
                                <p>
                                    Remaining:{" "}
                                    {/* {dayjs.duration(dayjs().diff(exam.schedule.date)).minutes()} */}
                                </p>
                            </div>
                            <Button
                                variant="contained"
                                color="warning"
                                onClick={() => setSelectedExam(exam)}
                            >
                                take exam
                            </Button>
                        </div>
                    ))}
                </div>
            )}
            {selectedExam && (
                <Modal
                    show={selectedExam ? true : false}
                    onClose={() => setSelectedExam(null)}
                >
                    <div className="p-5 flex flex-col gap-10 ml-10">
                        <h2 className="text-3xl text-center">
                            Exam Instruction
                        </h2>
                        <div className="flex gap-10 items-start">
                            <h3 className="text-xl w-28 text-end">General</h3>
                            <ul className="list-disc w-full">
                                <li>
                                    Duration: {selectedExam?.duration} minutes
                                </li>
                                <li>
                                    Total Questions:{" "}
                                    {selectedExam?.questions_count}
                                </li>
                                <li>
                                    Please read all instructions carefully.
                                </li>
                                <li>Ensure stable internet connection.</li>
                                <li>Keep ID card ready.</li>
                            </ul>
                        </div>
                        <div className="flex gap-10 items-start">
                            <h3 className="text-xl w-28 text-end">Technical</h3>
                            <ul className="list-disc w-full">
                                <li>Use a desktop/laptop computer.</li>
                                <li>
                                    Disable browser notifications and pop-ups.
                                </li>
                                <li>Close all other applications.</li>
                                <li>Clear browser cache and cookies.</li>
                            </ul>
                        </div>
                        <div className="flex gap-10 items-start">
                            <h3 className="text-xl w-28 text-end">Rules</h3>
                            <ul className="list-disc w-full">
                                <li>No tab switching allowed during exam.</li>
                                <li>Do not refresh the page.</li>
                                <li>Timer cannot be paused.</li>
                                <li>
                                    Submit before time expires. If time expires
                                    before submission, exam will be
                                    automatically submitted.
                                </li>
                            </ul>
                        </div>
                        <div className="flex justify-end">
                            <Button
                                variant="contained"
                                disabled={
                                    selectedExam?.schedule?.is_active == 0
                                        ? true
                                        : false
                                }
                            >
                                <Link
                                    href={route(`take-exam.index`, {
                                        id: selectedExam.id,
                                        title: selectedExam.title,
                                    })}
                                >
                                    go to exam
                                </Link>
                            </Button>
                        </div>
                    </div>
                </Modal>
            )}
        </AuthenticatedLayout>
    );
};

export default Index;
