import Modal from "@/Components/Modal";
import { useForm } from "@inertiajs/react";
import { Button } from "@mui/material";
import {
    DatePicker,
    LocalizationProvider,
    TimePicker,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { toast } from "react-toastify";

const ScheduleExam = ({ examId, show, onClose }) => {
    const { data, setData, post, processing, reset } = useForm({
        date: dayjs().format("YYYY-MM-DD"),
        time: dayjs().format("YYYY-MM-DD HH:mm:ss"),
    });

    function handleSubmit(e) {
        e.preventDefault();
        post(route("exam.set-schedule", examId), {
            onSuccess: () => {
                toast.success("Exam scheduled successfully");
                onClose(false);
            },
        });
    }
    return (
        <Modal show={show} onClose={onClose}>
            <form onSubmit={handleSubmit} className="p-10 flex flex-col gap-5">
                <p className="">Set Exam Date and Time</p>
                <div className="flex gap-5">
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                            className="w-full"
                            label="Exam Date"
                            value={dayjs(data.date)}
                            onChange={(date) =>
                                setData(
                                    "date",
                                    dayjs(date).format("YYYY-MM-DD")
                                )
                            }
                        />
                    </LocalizationProvider>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <TimePicker
                            label="Pick Time"
                            value={dayjs(data.time)}
                            onChange={(time) =>
                                setData(
                                    "time",
                                    dayjs(time).format("YYYY-MM-DD HH:mm:ss")
                                )
                            }
                        />
                    </LocalizationProvider>
                </div>
                <div className="flex gap-5 justify-end">
                    <Button
                        onClick={() => reset()}
                        variant="contained"
                        color="error"
                    >
                        cancel
                    </Button>
                    <Button
                        variant="contained"
                        type="submit"
                        disabled={processing}
                    >
                        Submit
                    </Button>
                </div>
            </form>
        </Modal>
    );
};

export default ScheduleExam;
