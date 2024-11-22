import Modal from "@/Components/Modal";
import { useForm } from "@inertiajs/react";
import {
    Button,
    FormControl,
    FormControlLabel,
    FormLabel,
    Radio,
    RadioGroup,
    TextField,
} from "@mui/material";
import {
    DatePicker,
    LocalizationProvider,
    TimePicker,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { useEffect } from "react";
import { toast } from "react-toastify";

const AddStudent = ({ show, onClose, student }) => {
    const { data, setData, errors, reset, setError, post, put } = useForm({
        first_name: student ? student.first_name : "",
        last_name: student ? student.last_name : "",
        email: student ? student.email : "",
        phone: student ? student.phone : "",
        address: student ? student.address : "",
        grade: student ? student.grade : "",
        section: student ? student.section : "",
        city: student ? student.city : "",
        state: student ? student.state : "",
        gender: student ? student.gender : "female",
        date_of_birth: student
            ? dayjs(student.date_of_birth).format("YYYY-MM-DD")
            : dayjs().format("YYYY-MM-DD"),
    });
    useEffect(() => {
        if (student) {
            setData({
                first_name: student.first_name,
                last_name: student.last_name,
                email: student.user ? student.user.email : "",
                phone: student.phone,
                address: student.address,
                section: student.section,
                grade: student.grade,
                city: student.city,
                state: student.state,
                gender: student.gender,
                date_of_birth: dayjs(student.date_of_birth).format(
                    "YYYY-MM-DD"
                ),
            });
        } else reset();
    }, [student]);
    function handleSubmit(e) {
        e.preventDefault();
        if (student) {
            put(route("student.update", student.id), {
                onSuccess: () => {
                    reset();
                    toast.success("Student updated successfully");
                    onclose(false);
                },
            });
        } else {
            post(route("student.store"), {
                onSuccess: () => {
                    reset();
                    toast.success("Student added successfully");
                    onclose(false);
                },
            });
        }
        // console.log();
    }
    // if (student) return <div className="">nothing</div>;
    return (
        <Modal show={show} onClose={onClose}>
            <h2 className="p-5 pb-0 text-center text-2xl font-bold">
                Add Student
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
                    <TextField
                        fullWidth
                        label="Grade"
                        // placeholder="optional"
                        type="number"
                        value={data.grade}
                        onChange={(e) => setData("grade", e.target.value)}
                        error={errors.grade}
                        helperText={errors.grade}
                    />
                    <TextField
                        fullWidth
                        label="Section"
                        // placeholder="optional"
                        value={data.section}
                        onChange={(e) => setData("section", e.target.value)}
                        error={errors.section}
                        helperText={errors.section}
                    />
                </div>
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
                <div className="flex gap-5 justify-end">
                    <Button
                        variant="contained"
                        color="error"
                        onClick={() => reset()}
                    >
                        cancel
                    </Button>
                    <Button type="submit" variant="contained">
                        {student ? "update" : "submit"}
                    </Button>
                </div>
            </form>
        </Modal>
    );
};

export default AddStudent;
