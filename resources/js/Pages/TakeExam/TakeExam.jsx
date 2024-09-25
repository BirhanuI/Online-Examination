import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button, Checkbox, FormControlLabel, IconButton } from "@mui/material";
import { useState } from "react";
import { useRef } from "react";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { router } from "@inertiajs/react";

const TakeExam = ({ auth, exam, questions }) => {
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
            { onSuccess: () => {}, }
        );
    }
    return (
        <AuthenticatedLayout user={auth.user}>
            <div className="w-full flex gap-5 p-5 ">
                <div className="w-3/4 p-5  shadow-md rounded-md bg-white">
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
                                    <div className="p-5 py-10 font-space">
                                        {index + 1}) {question.question}
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
                                                                    question.id
                                                                ] === "option1"
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
                                                                    question.id
                                                                ] === "option2"
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
                                                                    question.id
                                                                ] === "option3"
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
                                                                    question.id
                                                                ] === "option4"
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
                        {questions.length - 1 == currentQuestionIndex ? (
                            <Button variant="contained" onClick={handleSubmit}>
                                Submit
                            </Button>
                        ) : (
                            <IconButton onClick={next}>
                                <ArrowForwardIos />
                            </IconButton>
                        )}
                    </div>
                </div>
                <div className="w-1/4 p-10 shadow-md rounded-md bg-white">
                    <div className="flex ">
                        {questions.map((question, index) => (
                            <div
                                onClick={() => sliderRef.slickGoTo(index)}
                                className={`cursor-pointer w-9 h-9 ${
                                    answer[question.id] ? "bg-green-500" : ""
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
        </AuthenticatedLayout>
    );
};

export default TakeExam;
