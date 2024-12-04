import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Button,
    Collapse,
    FormControl,
    FormHelperText,
    InputLabel,
    MenuItem,
    Radio,
    Select,
    TextField,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { toast } from "react-toastify";
import { Add, ArrowDropDown, Remove } from "@mui/icons-material";
import React, { useState, useMemo, useCallback } from "react";
import AddSubject from "@/Components/addSubject";
import { MathJax, MathJaxContext } from "better-react-mathjax";
import MathEditor from "@/Components/MathEditor";

const CreateExam = ({ auth, exam, subject }) => {
    const VisuallyHiddenInput = styled("input")({
        clip: "rect(0 0 0 0)",
        clipPath: "inset(50%)",
        height: 1,
        overflow: "hidden",
        position: "absolute",
        bottom: 0,
        left: 0,
        whiteSpace: "nowrap",
        width: 1,
    });
    const config = {
        loader: { load: ["input/asciimath", "output/chtml"] },
        tex: {
            inlineMath: [
                ["$", "$"],
                ["\\(", "\\)"],
            ],
            displayMath: [
                ["$$", "$$"],
                ["\\[", "\\]"],
            ],
            processEscapes: true,
        },
    };
    const ExamForm = useForm({
        title: exam ? exam.title : "",
        description: exam ? exam.description : "",
        start_date: exam ? exam.start_date : "",
        end_date: exam ? exam.end_date : "",
        duration: exam ? exam.duration : "",
        subject_id: exam ? exam.subject_id : "",
        grade: exam ? exam.grade : "",
        questions: exam
            ? exam.questions
            : [
                  {
                      question: "",
                      image: null,
                      option1: "",
                      option2: "",
                      option3: "",
                      option4: "",
                      answer: "option1",
                      description: "",
                  },
              ],
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        if (exam) {
            ExamForm.put(`/exam/${exam.id}`, {
                onSuccess: () => {
                    toast.success("Exam updated successfully");
                },
            });
        } else {
            ExamForm.post("/exam", {
                onSuccess: () => {
                    toast.success("Exam created successfully");
                    resetForm();
                },
            });
        }
    };
    function handleAddQuestion() {
        ExamForm.setData("questions", [
            ...ExamForm.data.questions,
            {
                question: "",
                option1: "",
                option2: "",
                option3: "",
                option4: "",
                answer: "option1",
                description: "",
            },
        ]);
    }
    const resetForm = () => {
        ExamForm.setData({
            title: "",
            description: "",
            start_date: "",
            end_date: "",
            duration: "",
            subject_id: "",
            grade: "",
            questions: [
                {
                    question: "",
                    option1: "",
                    option2: "",
                    option3: "",
                    option4: "",
                    answer: "option1",
                    description: "",
                },
            ],
        });
    };
    function handleRemoveQuestion(index) {
        if (ExamForm.data.questions.length === 1) return null;
        const newQuestions = [...ExamForm.data.questions];
        newQuestions.splice(index, 1);
        console.log(newQuestions);
        ExamForm.setData("questions", newQuestions);
    }
    const handleQuestionChange = (index, field, value) => {
        ExamForm.clearErrors();
        const updatedQuestions = [...ExamForm.data.questions];
        updatedQuestions[index][field] = value;
        ExamForm.setData({
            ...ExamForm.data,
            questions: updatedQuestions,
        });
    };
    const [expanded, setExpanded] = useState(0);
    const [showSubjectModal, setShowSubjectModal] = useState(false);
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Add Exam" />
            <AddSubject show={showSubjectModal} onClose={setShowSubjectModal} />
            <div className="w-full p-5">
                <div className=" rounded-md gap-5">
                    <form
                        onSubmit={handleSubmit}
                        className="flex flex-col gap-5 w-full"
                    >
                        <div className="flex w-full gap-5">
                            <div className="w-[30%] flex flex-col gap-5 bg-white p-5 py-10 rounded-md shadow-md">
                                <p className="font-space text-lg font-">
                                    Exam Details
                                </p>
                                <TextField
                                    label="Grade"
                                    fullWidth
                                    type="number"
                                    error={ExamForm.errors.grade}
                                    helperText={ExamForm.errors.grade}
                                    value={ExamForm.data.grade}
                                    onChange={(e) =>
                                        ExamForm.setData(
                                            "grade",
                                            e.target.value
                                        )
                                    }
                                />
                                <FormControl
                                    fullWidth
                                    error={ExamForm.errors.subject_id}
                                >
                                    <InputLabel>Subject</InputLabel>
                                    <Select
                                        value={ExamForm.data.subject_id}
                                        label="Subject"
                                        onChange={(e) =>
                                            ExamForm.setData(
                                                "subject_id",
                                                e.target.value
                                            )
                                        }
                                    >
                                        <MenuItem
                                            value=""
                                            onClick={() =>
                                                setShowSubjectModal(true)
                                            }
                                        >
                                            <div className="text-gray-400">
                                                <Add /> add Subject
                                            </div>
                                        </MenuItem>
                                        {subject.map((subject) => (
                                            <MenuItem
                                                key={subject.id}
                                                value={subject.id}
                                            >
                                                {subject.name}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                    <FormHelperText>
                                        {ExamForm.errors.subject_id}
                                    </FormHelperText>
                                </FormControl>
                                <TextField
                                    label="Title"
                                    id="outlined-basic"
                                    variant="outlined"
                                    error={ExamForm.errors.title}
                                    helperText={ExamForm.errors.title}
                                    fullWidth
                                    sx={{ outline: "none" }}
                                    value={ExamForm.data.title}
                                    onChange={(e) =>
                                        ExamForm.setData(
                                            "title",
                                            e.target.value
                                        )
                                    }
                                />
                                <TextField
                                    label="Duration(minutes)"
                                    id="outlined-basic"
                                    variant="outlined"
                                    error={ExamForm.errors.duration}
                                    helperText={ExamForm.errors.duration}
                                    fullWidth
                                    value={ExamForm.data.duration}
                                    onChange={(e) =>
                                        ExamForm.setData(
                                            "duration",
                                            e.target.value
                                        )
                                    }
                                />
                                <TextField
                                    label="Description"
                                    id="outlined-basic"
                                    variant="outlined"
                                    error={ExamForm.errors.description}
                                    helperText={ExamForm.errors.description}
                                    fullWidth
                                    value={ExamForm.data.description}
                                    onChange={(e) =>
                                        ExamForm.setData(
                                            "description",
                                            e.target.value
                                        )
                                    }
                                />
                            </div>
                            <div className="w-[70%] bg-white rounded-md shadow-md p-5 py-10">
                                <div className="flex justify-between items-center cursor-pointer">
                                    <p className="font-space text-lg font-semibold">
                                        Questions
                                    </p>
                                    <Button
                                        onClick={handleAddQuestion}
                                        variant="contained"
                                    >
                                        <Add />
                                        Add Question
                                    </Button>
                                </div>
                                <div className="mt-5 flex flex-col gap-1">
                                    {ExamForm.data.questions.map(
                                        (question, index) => (
                                            <div
                                                className="flex gap-1"
                                                key={index}
                                            >
                                                <Accordion
                                                    expanded={
                                                        expanded === index
                                                    }
                                                    onChange={() =>
                                                        setExpanded(
                                                            expanded === index
                                                                ? -1
                                                                : index
                                                        )
                                                    }
                                                    className="w-full rounded-md"
                                                >
                                                    <AccordionSummary
                                                        expandIcon={
                                                            <ArrowDropDown />
                                                        }
                                                    >
                                                        Question #{index + 1}
                                                    </AccordionSummary>
                                                    <AccordionDetails>
                                                        <div className="">
                                                            <MathJaxContext
                                                                config={config}
                                                            >
                                                                <MathEditor
                                                                    onChange={(
                                                                        equations
                                                                    ) =>
                                                                        handleQuestionChange(
                                                                            index,
                                                                            "question",
                                                                            equations
                                                                        )
                                                                    }
                                                                />
                                                            </MathJaxContext>
                                                            <div className="py-5">
                                                                <Button
                                                                    component="label"
                                                                    variant="contained"
                                                                    tabIndex={
                                                                        -1
                                                                    }
                                                                    color={
                                                                        ExamForm
                                                                            .data
                                                                            .questions[
                                                                            index
                                                                        ].image
                                                                            ? "success"
                                                                            : "info"
                                                                    }
                                                                    startIcon={
                                                                        <CloudUploadIcon />
                                                                    }
                                                                    fullWidth
                                                                >
                                                                    Upload Image
                                                                    <VisuallyHiddenInput
                                                                        type="file"
                                                                        onChange={(
                                                                            event
                                                                        ) =>
                                                                            handleQuestionChange(
                                                                                index,
                                                                                "image",
                                                                                event
                                                                                    .target
                                                                                    .files[0]
                                                                            )
                                                                        }
                                                                        accept="image/*"
                                                                    />
                                                                </Button>
                                                                <div className="flex py-5 justify-between">
                                                                    <div className="flex ">
                                                                        <Radio
                                                                            value={
                                                                                "option1"
                                                                            }
                                                                            checked={
                                                                                question.answer ===
                                                                                "option1"
                                                                            }
                                                                            onChange={(
                                                                                e
                                                                            ) =>
                                                                                handleQuestionChange(
                                                                                    index,
                                                                                    "answer",
                                                                                    e
                                                                                        .target
                                                                                        .value
                                                                                )
                                                                            }
                                                                        />
                                                                        <TextField
                                                                            label="option A"
                                                                            error={
                                                                                ExamForm
                                                                                    .errors[
                                                                                    `questions.${index}.option1`
                                                                                ]
                                                                            }
                                                                            helperText={
                                                                                ExamForm
                                                                                    .errors[
                                                                                    `questions.${index}.option1`
                                                                                ]
                                                                            }
                                                                            onChange={(
                                                                                e
                                                                            ) =>
                                                                                handleQuestionChange(
                                                                                    index,
                                                                                    "option1",
                                                                                    e
                                                                                        .target
                                                                                        .value
                                                                                )
                                                                            }
                                                                            value={
                                                                                question.option1
                                                                            }
                                                                        />
                                                                    </div>
                                                                    <div className="flex ">
                                                                        <Radio
                                                                            value={
                                                                                "option2"
                                                                            }
                                                                            checked={
                                                                                question.answer ===
                                                                                "option2"
                                                                            }
                                                                            onChange={(
                                                                                e
                                                                            ) =>
                                                                                handleQuestionChange(
                                                                                    index,
                                                                                    "answer",
                                                                                    e
                                                                                        .target
                                                                                        .value
                                                                                )
                                                                            }
                                                                        />
                                                                        <TextField
                                                                            label="option B"
                                                                            error={
                                                                                ExamForm
                                                                                    .errors[
                                                                                    `questions.${index}.option2`
                                                                                ]
                                                                            }
                                                                            helperText={
                                                                                ExamForm
                                                                                    .errors[
                                                                                    `questions.${index}.option2`
                                                                                ]
                                                                            }
                                                                            onChange={(
                                                                                e
                                                                            ) =>
                                                                                handleQuestionChange(
                                                                                    index,
                                                                                    "option2",
                                                                                    e
                                                                                        .target
                                                                                        .value
                                                                                )
                                                                            }
                                                                            value={
                                                                                question.option2
                                                                            }
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="flex py-5 justify-between">
                                                                    <div className="flex ">
                                                                        <Radio
                                                                            value={
                                                                                "option3"
                                                                            }
                                                                            checked={
                                                                                question.answer ===
                                                                                "option3"
                                                                            }
                                                                            onChange={(
                                                                                e
                                                                            ) =>
                                                                                handleQuestionChange(
                                                                                    index,
                                                                                    "answer",
                                                                                    e
                                                                                        .target
                                                                                        .value
                                                                                )
                                                                            }
                                                                        />
                                                                        <TextField
                                                                            label="option C"
                                                                            placeholder="optional"
                                                                            error={
                                                                                ExamForm
                                                                                    .errors[
                                                                                    `questions.${index}.option3`
                                                                                ]
                                                                            }
                                                                            helperText={
                                                                                ExamForm
                                                                                    .errors[
                                                                                    `questions.${index}.option3`
                                                                                ]
                                                                            }
                                                                            onChange={(
                                                                                e
                                                                            ) =>
                                                                                handleQuestionChange(
                                                                                    index,
                                                                                    "option3",
                                                                                    e
                                                                                        .target
                                                                                        .value
                                                                                )
                                                                            }
                                                                            value={
                                                                                question.option3
                                                                            }
                                                                        />
                                                                    </div>
                                                                    <div className="flex ">
                                                                        <Radio
                                                                            value={
                                                                                "option4"
                                                                            }
                                                                            checked={
                                                                                question.answer ===
                                                                                "option4"
                                                                            }
                                                                            onChange={(
                                                                                e
                                                                            ) =>
                                                                                handleQuestionChange(
                                                                                    index,
                                                                                    "answer",
                                                                                    e
                                                                                        .target
                                                                                        .value
                                                                                )
                                                                            }
                                                                        />
                                                                        <TextField
                                                                            label="option D"
                                                                            placeholder="optional"
                                                                            error={
                                                                                ExamForm
                                                                                    .errors[
                                                                                    `questions.${index}.option4`
                                                                                ]
                                                                            }
                                                                            helperText={
                                                                                ExamForm
                                                                                    .errors[
                                                                                    `questions.${index}.option4`
                                                                                ]
                                                                            }
                                                                            onChange={(
                                                                                e
                                                                            ) =>
                                                                                handleQuestionChange(
                                                                                    index,
                                                                                    "option4",
                                                                                    e
                                                                                        .target
                                                                                        .value
                                                                                )
                                                                            }
                                                                            value={
                                                                                question.option4
                                                                            }
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </AccordionDetails>
                                                </Accordion>{" "}
                                                <div
                                                    className="w-10 flex justify-center items-center bg-red-400 rounded-md cursor-pointer"
                                                    onClick={() =>
                                                        handleRemoveQuestion(
                                                            index
                                                        )
                                                    }
                                                >
                                                    <Remove />
                                                </div>
                                            </div>
                                        )
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="flex w-full">
                            <Button
                                fullWidth
                                variant="contained"
                                type="submit"
                                disabled={ExamForm.processing}
                            >
                                {exam ? "update" : "submit"}
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default CreateExam;
