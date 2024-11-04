import Modal from "@/Components/Modal";
import { useForm } from "@inertiajs/react";
import { Button, TextField } from "@mui/material";
import { toast } from "react-toastify";

const AddSubject = ({ show, onClose }) => {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
    });

    function handleSubmit(e) {
        e.preventDefault();
        post(route("subject.store"), {
            onSuccess: () => {
                toast.success("Subject added successfully");
                onClose(false);
                reset();
            },
        });
    }
    return (
        <Modal show={show} onClose={onClose}>
            <form
                onSubmit={handleSubmit}
                className="p-10 pt-5 flex flex-col gap-5"
            >
                <p className="text-center text-2xl">Add Subject</p>

                <div className="flex gap-5 w-full">
                    <TextField
                        label="Subject Name"
                        value={data.name}
                        onChange={(e) => setData("name", e.target.value)}
                        error={errors.name}
                        helperText={errors.name}
                        fullWidth
                    />
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

export default AddSubject;
