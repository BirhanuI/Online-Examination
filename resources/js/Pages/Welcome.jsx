import { Link, Head } from "@inertiajs/react";
import { useForm } from "@inertiajs/react";
import { Button, TextField } from "@mui/material";
import frontPic from "./../assets/takexam.svg";
import frontbg from "./../assets/exam.jpg";
import Checkbox from "@/Components/Checkbox";
import { useEffect } from "react";
export default function Welcome() {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember:false
    });
    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);
    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("login"));
    };
    return (
        <>
            <Head title="" />
            <div className="bg-blue-400 h-screen flex">
                <img
                    src={frontbg}
                    alt=""
                    className="absolute top-0 bottom-0 left-0 right-0 w-full h-full"
                />
                <div className="flex items-center backdrop-blur-sm rounded h-full relative w-2/3">
                    <div className="bg-white opacity-80 top-0 left-0 right-0 bottom-0 absolute -z-10"></div>
                    <div className="w-full flex flex-col pl-20">
                        <div className="font-space flex flex-col gap-5">
                            <h2 className="mt-10 text-5xl font-bold">Login</h2>
                            <h1 className="text-cente text-xl font-sans">
                                Welcome to Online Examination System
                            </h1>
                        </div>
                        <form
                            onSubmit={handleSubmit}
                            className="flex flex-col gap-5 mt-10 w-2/3"
                        >
                            <TextField
                                type="email"
                                label="Email"
                                variant="outlined"
                                value={data.email}
                                onChange={(e) =>
                                    setData("email", e.target.value)
                                }
                                error={errors.email}
                                helperText={errors.email}
                            />
                            <TextField
                                type="password"
                                label="Password"
                                variant="outlined"
                                value={data.password}
                                onChange={(e) =>
                                    setData("password", e.target.value)
                                }
                                error={errors.password}
                                helperText={errors.password}
                            />
                            <div className="block mt-4">
                                <label className="flex items-center">
                                    <Checkbox
                                        name="remember"
                                        checked={data.remember}
                                        onChange={(e) =>
                                            setData(
                                                "remember",
                                                e.target.checked
                                            )
                                        }
                                    />
                                    <span className="ms-2 text-sm text-gray-600">
                                        Remember me
                                    </span>
                                </label>
                            </div>
                            <Button
                                type="submit"
                                variant="contained"
                                size="large"
                                disabled={processing}
                            >
                                Login
                            </Button>
                        </form>
                    </div>
                    {/* <div className="w-full">
                        <img src={frontPic} alt="" />
                    </div> */}
                </div>
                <div className="w-full"></div>
            </div>
        </>
    );
}
