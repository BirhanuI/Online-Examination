import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button, Checkbox, FormControlLabel, IconButton } from "@mui/material";
import { useState } from "react";
import { useRef } from "react";
import {
    Alarm,
    ArrowBackIos,
    ArrowForwardIos,
    Check,
} from "@mui/icons-material";
import { Link, router } from "@inertiajs/react";
import CountDown from "@/Components/CountDown";
import Modal from "@/Components/Modal";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { MathJax, MathJaxContext } from "better-react-mathjax";
const TakeExam = ({ auth, exam, questions }) => {
    // const history = useHistory();
    useEffect(() => {
        window.history.pushState(null, "", window.location.href);
        // window.onpopstate = handlePopState;

        // Warn user on page unload
        const handleBeforeUnload = (e) => {
            e.preventDefault();
            e.returnValue = ""; // Display a warning message
        };

        window.addEventListener("beforeunload", handleBeforeUnload);

        // Cleanup function
        return () => {
            window.onpopstate = null; // Remove the handler
            window.removeEventListener("beforeunload", handleBeforeUnload);
        };
    }, []);
    var sliderRef = useRef(null);
    let next = () => {
        sliderRef.slickNext();
    };
    let previous = () => {
        sliderRef.slickPrev();
    };
    var settings = {
        // dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        afterChange: (index) => setCurrentQuestionIndex(index),
    };
    const [answer, setAnswer] = useState({});
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    function handleAnswerChange(questionId, answer) {
        setAnswer((prev) => ({ ...prev, [questionId]: answer }));
    }
    function handleSubmit() {
        router.post(
            "/examination",
            { answers: answer, exam_id: exam.id },
            {
                onSuccess: () => {
                    toast.success("Exam submitted successfully");
                },
                onError: () => toast.error("Error while submitting exam"),
            }
        );
    }
    function handleTimeExpiry() {
        setShowExpiryModal(true);
        handleSubmit();
    }
    const [showInstructionModal, setShowInstructionModal] = useState(false);
    const [showExpiryModal, setShowExpiryModal] = useState(false);
    const time = exam.start_date || new Date();
    time.setMinutes(time.getMinutes() + Number(exam.duration));
    return (
        <AuthenticatedLayout user={auth.user}>
            <div className="absolute top-0 left-0 right-0 bottom-0 z-10 bg-black opacity-40"></div>
            <div className="relative z-20">
                <TimeExpiryModal show={showExpiryModal} />
                <Modal show={showInstructionModal}>
                    <div className="p-5 overflow-y-auto max-h-96">
                        <p className="text-center p-5 font-bold">
                            Please review your answers carefully. Once you
                            submit, you will not be able to change your
                            responses.
                        </p>
                        <div className="flex flex-col gap-2">
                            {questions.map((question, index) => (
                                <div className="bg-slate-50 p-3 rounded-md cursor-pointer">
                                    <div>
                                        #{index + 1}) {question.question}
                                    </div>
                                    <div className="">
                                        <span>Your answer: </span>
                                        {question[answer[question.id]] || (
                                            <span className="text-red-500">
                                                Not Answerd
                                            </span>
                                        )}
                                    </div>
                                    <div className="flex justify-end">
                                        <Button
                                            size="small"
                                            onClick={() => {
                                                setShowInstructionModal(false);
                                                sliderRef.slickGoTo(index);
                                            }}
                                        >
                                            Go to the question
                                        </Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="flex justify-end mt-10">
                            <Button
                                variant="contained"
                                onClick={handleSubmit}
                                fullWidth
                            >
                                Submit
                            </Button>
                        </div>
                    </div>
                </Modal>
                <div className="w-full flex gap-5 p-5 ">
                    <div className="w-4/6 p-5  shadow-md rounded-md bg-white">
                        <h1 className="font-space text-lg font-semibold">
                            {exam.title}
                        </h1>
                        <div className="flex flex-col w-full">
                            <Slider
                                {...settings}
                                ref={(slider) => {
                                    sliderRef = slider;
                                }}
                            >
                                {questions.map((question, index) => (
                                    <div className="w-full">
                                        <div className="p-5 py-10 font-space flex gap-2">
                                            {index + 1}) {" "}
                                            <MathJaxContext>
                                                <MathJax>
                                                    <p
                                                        dangerouslySetInnerHTML={{
                                                            __html: question.question,
                                                        }}
                                                    ></p>
                                                </MathJax>
                                            </MathJaxContext>
                                        </div>
                                        <div className="flex gap-5 w-full px-10">
                                            <div className="w-full flex flex-col gap-5">
                                                <div className="flex items-center p-2 py-0 border rounded-md w-full">
                                                    <FormControlLabel
                                                        control={
                                                            <Checkbox
                                                                onChange={() =>
                                                                    handleAnswerChange(
                                                                        question.id,
                                                                        "option1"
                                                                    )
                                                                }
                                                                checked={
                                                                    answer[
                                                                        question
                                                                            .id
                                                                    ] ===
                                                                    "option1"
                                                                }
                                                            />
                                                        }
                                                        label={question.option1}
                                                    />
                                                </div>
                                                <div className="flex items-center p-2 py-0 border rounded-md w-full">
                                                    <FormControlLabel
                                                        control={
                                                            <Checkbox
                                                                onChange={() =>
                                                                    handleAnswerChange(
                                                                        question.id,
                                                                        "option2"
                                                                    )
                                                                }
                                                                checked={
                                                                    answer[
                                                                        question
                                                                            .id
                                                                    ] ===
                                                                    "option2"
                                                                }
                                                            />
                                                        }
                                                        label={question.option2}
                                                    />
                                                </div>
                                            </div>
                                            <div className="w-full flex flex-col gap-5">
                                                <div className="flex items-center p-2 py-0 border rounded-md w-full">
                                                    <FormControlLabel
                                                        control={
                                                            <Checkbox
                                                                onChange={() =>
                                                                    handleAnswerChange(
                                                                        question.id,
                                                                        "option3"
                                                                    )
                                                                }
                                                                checked={
                                                                    answer[
                                                                        question
                                                                            .id
                                                                    ] ===
                                                                    "option3"
                                                                }
                                                            />
                                                        }
                                                        label={question.option3}
                                                    />
                                                </div>
                                                <div className="flex items-center p-2 py-0 border rounded-md w-full">
                                                    <FormControlLabel
                                                        control={
                                                            <Checkbox
                                                                onChange={() =>
                                                                    handleAnswerChange(
                                                                        question.id,
                                                                        "option4"
                                                                    )
                                                                }
                                                                checked={
                                                                    answer[
                                                                        question
                                                                            .id
                                                                    ] ===
                                                                    "option4"
                                                                }
                                                            />
                                                        }
                                                        label={question.option4}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                        <div className="flex gap-5 p-10 justify-around items-center">
                            <IconButton onClick={previous}>
                                <ArrowBackIos />
                            </IconButton>

                            <IconButton onClick={next}>
                                <ArrowForwardIos />
                            </IconButton>
                        </div>
                        <div className="flex justify-end pr-10">
                            <Button
                                variant="contained"
                                onClick={() => setShowInstructionModal(true)}
                            >
                                Submit
                            </Button>
                        </div>
                    </div>
                    <div className="w-2/6 p-10 shadow-md rounded-md bg-white flex flex-col gap-5">
                        <div className="">
                            <CountDown
                                expiryTimestamp={time}
                                onExpireFn={handleTimeExpiry}
                            />
                        </div>
                        <div className="flex justify-center flex-col mt-5 items-center">
                            <div className="text-xl">Questions</div>
                            <div className="flex flex-wrap justify-center mt-2">
                                {questions.map((question, index) => (
                                    <div
                                        onClick={() =>
                                            sliderRef.slickGoTo(index)
                                        }
                                        className={`cursor-pointer w-9 h-9 ${
                                            answer[question.id]
                                                ? "bg-green-500"
                                                : ""
                                        } bg-gray-800 text-white font-space border flex justify-center items-center ${
                                            index + 1 === questions.length
                                                ? "rounded-r-md"
                                                : ""
                                        } ${index === 0 ? "rounded-l-md" : ""}`}
                                    >
                                        {index + 1}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default TakeExam;

function TimeExpiryModal({ show }) {
    return (
        <Modal show={show}>
            <div className="p-5">
                <div className="text-3xl font-bold font-space text-center pt-10">
                    Time Expired
                </div>
                <div className="text-xl font-bold p-5 flex justify-center flex-col">
                    <div className="inline-flex justify-center items-center flex-col">
                        <div className="flex items-center justify-center w-40 h-40 text-8xl  border rounded-full border-gren-500">
                            <Alarm className="text--500" fontSize="inherit" />
                        </div>
                        <p className="py-5">
                            Your Answers are automaticly submitted.
                        </p>
                    </div>
                </div>
                <div className="flex justify-end mt-5">
                    <Link href={route("examination.index")}>
                        <Button variant="contained">Go Back</Button>
                    </Link>
                </div>
            </div>
        </Modal>
    );
}
