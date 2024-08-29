import * as React from "react";
import Modal from "@/Components/Modal";
import { useForm } from "@inertiajs/react";
import { Close } from "@mui/icons-material";
import {
    Button,
    FormControl,
    FormHelperText,
    IconButton,
    InputLabel,
    MenuItem,
    Select,
    TextField,
} from "@mui/material";
import { toast } from "react-toastify";

const CreateExam = ({show, onClose }) => {
    const ExamForm = useForm({
        title: "",
        description: "",
        start_date: "",
        end_date: "",
        duration: "",
        subject_id: "",
        grade: "",
    });
    const subject = [
        { name: "Biology", id: "1" },
        { name: "Chemistry", id: "2" },
        { name: "Physics", id: "3" },
    ];
    const handleSubmit = (e) => {
        e.preventDefault();
        ExamForm.post('/exam',{
            onSuccess:()=>{
                toast.success("Exam created successfully");
                onClose(false);
            }
        });
    };
    return (
        <div className="relative">
            <Modal show={show} >
                <div className="flex w-full justify-between bg-stone-100 sticky top-0">
                    <p className="font-space text-gray-800 m-3">Create Exam</p>
                    <IconButton className="text-red-500" onClick={()=>onClose(false)}>
                        <Close fontSize="medium" />
                    </IconButton>
                </div>
                <div className="p-10 overflow-y-auto">
                    <form
                        onSubmit={handleSubmit}
                        className="flex flex-col gap-5"
                    >
                        <FormControl fullWidth error={ExamForm.errors.subject_id}>
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
                                {subject.map((subject) => (
                                    <MenuItem
                                        key={subject.id}
                                        value={subject.id}
                                    >
                                        {subject.name}
                                    </MenuItem>
                                ))}
                            </Select>
                            <FormHelperText>{ExamForm.errors.subject_id}</FormHelperText>
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
                                ExamForm.setData("title", e.target.value)
                            }
                        />
                        <TextField
                            label="Duration(minutes)"
                            id="outlined-basic"
                            variant="outlined"
                            error={ExamForm.errors.duration}
                            helperText={ExamForm.errors.duration}
                            fullWidth
                            sx={{ outline: "none" }}
                            value={ExamForm.data.duration}
                            onChange={(e) =>
                                ExamForm.setData("duration", e.target.value)
                            }
                        />
                        <TextField
                            label="Description"
                            id="outlined-basic"
                            variant="outlined"
                            error={ExamForm.errors.description}
                            helperText={ExamForm.errors.description}
                            fullWidth
                            sx={{ outline: "none" }}
                            value={ExamForm.data.description}
                            onChange={(e) =>
                                ExamForm.setData("description", e.target.value)
                            }
                        />
                        {/* <TextField
                            label="Grade"
                            id="outlined-basic"
                            variant="outlined"
                            error={ExamForm.errors.title}
                            helperText={ExamForm.errors.title}
                            fullWidth
                            sx={{ outline: "none" }}
                            value={ExamForm.data.title}
                            onChange={(e) =>
                                ExamForm.setData("title", e.target.value)
                            }
                        /> */}
                        <div className="flex justify-end">
                            <Button variant="contained" type="submit" disabled={ExamForm.processing}>
                                Submit
                            </Button>
                        </div>
                    </form>
                </div>
            </Modal>
        </div>
    );
};

export default CreateExam;
