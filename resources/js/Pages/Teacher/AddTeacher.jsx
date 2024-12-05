import AddSubject from "@/Components/addSubject";
import Modal from "@/Components/Modal";
import { useForm } from "@inertiajs/react";
import { Add } from "@mui/icons-material";
import {
    Button,
    FormControl,
    FormControlLabel,
    FormHelperText,
    FormLabel,
    InputLabel,
    MenuItem,
    Radio,
    RadioGroup,
    Select,
    TextField,
} from "@mui/material";
import {
    DatePicker,
    LocalizationProvider,
    TimePicker,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const AddTeacher = ({ show, onClose, teacher, subject }) => {
    const [showSubjectModal, setShowSubjectModal] = useState(false);
    const { data, setData, errors, reset, setError, post, put, clearErrors } =
        useForm({
            first_name: teacher ? teacher.first_name : "",
            last_name: teacher ? teacher.last_name : "",
            email: teacher ? teacher.email : "",
            phone: teacher ? teacher.phone : "",
            address: teacher ? teacher.address : "",
            city: teacher ? teacher.city : "",
            state: teacher ? teacher.state : "",
            gender: teacher ? teacher.gender : "female",
            date_of_birth: teacher
                ? dayjs(teacher.date_of_birth).format("YYYY-MM-DD")
                : dayjs().format("YYYY-MM-DD"),
            grade_section: teacher
                ? teacher.grade_section
                : [{ grade_id: "", section_id: "", subject_id: "" }],
        });
    useEffect(() => {
        if (teacher) {
            setData({
                first_name: teacher.first_name,
                last_name: teacher.last_name,
                email: teacher.user ? teacher.user.email : "",
                phone: teacher.phone,
                address: teacher.address,
                city: teacher.city,
                state: teacher.state,
                gender: teacher.gender,
                date_of_birth: dayjs(teacher.date_of_birth).format(
                    "YYYY-MM-DD"
                ),
                grade_section: teacher.grade_section,
            });
        } else reset();
    }, [teacher]);
    function handleSubmit(e) {
        e.preventDefault();
        if (teacher) {
            put(route("teacher.update", teacher.id), {
                onSuccess: () => {
                    reset();
                    toast.success("Student updated successfully");
                    onclose(false);
                },
            });
        } else {
            post(route("teacher.store"), {
                onSuccess: () => {
                    reset();
                    toast.success("Student added successfully");
                    onclose(false);
                },
            });
        }
        // console.log();
    }
    const handleGradeSectionChange = (index, field, value) => {
        clearErrors();
        const updatedGradeSection = [...data.grade_section];
        updatedGradeSection[index][field] = value;
        setData({
            ...data,
            grade_section: updatedGradeSection,
        });
    };
    function handleAddGradeSection() {
        setData("grade_section", [
            ...data.grade_section,
            {
                grade_id: "",
                section_id: "",
                subject_id: "",
            },
        ]);
    }
    // if (teacher) return <div className="">nothing</div>;
    return (
        <Modal show={show} onClose={onClose}>
            <AddSubject show={showSubjectModal} onClose={setShowSubjectModal} />
            <h2 className="p-5 pb-0 text-center text-2xl font-bold">
                Add Teacher
            </h2>
            <form
                onSubmit={handleSubmit}
                className="p-10 flex flex-col gap-5 pt-5 overflow-y-auto max-h-[500px]"
            >
                <div className="w-full flex gap-5">
                    <TextField
                        fullWidth
                        label="First Name"
                        value={data.first_name}
                        onChange={(e) => setData("first_name", e.target.value)}
                        error={errors.first_name}
                        helperText={errors.first_name}
                    />
                    <TextField
                        fullWidth
                        label="Last Name"
                        value={data.last_name}
                        onChange={(e) => setData("last_name", e.target.value)}
                        error={errors.last_name}
                        helperText={errors.last_name}
                    />
                </div>
                <TextField
                    fullWidth
                    label="Email"
                    value={data.email}
                    onChange={(e) => setData("email", e.target.value)}
                    error={errors.email}
                    helperText={errors.email}
                />
                <TextField
                    fullWidth
                    label="Phone"
                    placeholder="optional"
                    value={data.phone}
                    onChange={(e) => setData("phone", e.target.value)}
                    error={errors.phone}
                    helperText={errors.phone}
                />
                <div className="flex gap-5">
                    <FormControl fullWidth>
                        <div className="flex gap-5 items-center border p-[7px] rounded-md border-gray-300">
                            <FormLabel id="demo-radio-buttons-group-label">
                                Gender
                            </FormLabel>
                            <RadioGroup
                                value={data.gender}
                                name="radio-buttons-group"
                            >
                                <div className="">
                                    <FormControlLabel
                                        value="female"
                                        control={<Radio />}
                                        label="Female"
                                        onChange={(e) =>
                                            setData("gender", e.target.value)
                                        }
                                    />
                                    <FormControlLabel
                                        value="male"
                                        control={<Radio />}
                                        label="Male"
                                        onChange={(e) =>
                                            setData("gender", e.target.value)
                                        }
                                    />
                                </div>
                            </RadioGroup>
                        </div>
                    </FormControl>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                            className="w-full"
                            label="Date of Birth"
                            value={dayjs(data.date_of_birth)}
                            onChange={(date) =>
                                setData(
                                    "date_of_birth",
                                    dayjs(date).format("YYYY-MM-DD")
                                )
                            }
                        />
                    </LocalizationProvider>
                </div>
                <TextField
                    fullWidth
                    label="Address"
                    value={data.address}
                    onChange={(e) => setData("address", e.target.value)}
                    error={errors.address}
                    helperText={errors.address}
                />
                <div className="flex gap-5">
                    <TextField
                        fullWidth
                        label="City"
                        value={data.city}
                        onChange={(e) => setData("city", e.target.value)}
                        error={errors.city}
                        helperText={errors.city}
                    />
                    <TextField
                        fullWidth
                        label="State"
                        value={data.state}
                        onChange={(e) => setData("state", e.target.value)}
                        error={errors.state}
                        helperText={errors.state}
                    />
                </div>
                <div className="border p-3 rounded border-gray-300">
                    <div className="flex justify-between items-end">
                        <p className="capitalize text-sm mb-2 text-blue-500">
                            add multiple section by separating with comma
                        </p>
                        <Button onClick={handleAddGradeSection} variant="outlined" size="small" className="flex items-end">
                            <Add />
                            add
                        </Button>
                    </div>
                    <div className="flex flex-col gap-3 mt-3">
                        {data.grade_section.map((item, index) => (
                            <div className="flex gap-5 w-full">
                                <TextField
                                    fullWidth
                                    label="Grade"
                                    // placeholder="optional"
                                    type="number"
                                    value={item.grade_id}
                                    size="small"
                                    onChange={(e) =>
                                        handleGradeSectionChange(
                                            index,
                                            "grade_id",
                                            e.target.value
                                        )
                                    }
                                    error={errors[
                                        `grade_section.${index}.grade_id`
                                    ]}
                                    helperText={errors[
                                        `grade_section.${index}.grade_id`
                                    ]}
                                />
                                <TextField
                                    fullWidth
                                    label="Section"
                                    size="small"
                                    // placeholder="optional"
                                    value={item.section_id}
                                    onChange={(e) =>
                                        handleGradeSectionChange(
                                            index,
                                            "section_id",
                                            e.target.value
                                        )
                                    }
                                    error={errors[
                                        `grade_section.${index}.section_id`
                                    ]}
                                    helperText={errors[
                                        `grade_section.${index}.section_id`
                                    ]}
                                />
                                <FormControl
                                    fullWidth
                                    error={errors[
                                        `grade_section.${index}.subject_id`
                                    ]}
                                    size="small"
                                >
                                    <InputLabel>Subject</InputLabel>
                                    <Select
                                        value={item.subject_id}
                                        label="Subject"
                                        onChange={(e) =>
                                            handleGradeSectionChange(
                                                index,
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
                                    {errors[
                                        `grade_section.${index}.subject_id`
                                    ]}
                                    </FormHelperText>
                                </FormControl>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex gap-5 justify-end">
                    <Button
                        variant="contained"
                        color="error"
                        onClick={() => reset()}
                    >
                        cancel
                    </Button>
                    <Button type="submit" variant="contained">
                        {teacher ? "update" : "submit"}
                    </Button>
                </div>
            </form>
        </Modal>
    );
};

export default AddTeacher;
