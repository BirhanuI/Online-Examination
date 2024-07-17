import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { Add } from "@mui/icons-material";
const Index = ({ auth }) => {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Dashboard" />

            <div className="p-5 flex flex-col gap-5">
                <div className="p-10 bg-white flex border rounded">
                    <div className="border p-3 rounded-md flex justify-center items-center text-xl  hover:border-orange-400 hover:bg-orange-400 duration-300 hover:text-white cursor-pointer">
                        <Add fontSize="large" />
                        Create Exam
                    </div>
                </div>
                <div className="p-10 bg-white flex border rounded">
                    <div className="border p-3 rounded-md flex justify-center items-center text-xl  hover:border-orange-400 hover:bg-orange-400 duration-300 hover:text-white cursor-pointer">
                        <Add fontSize="large" />
                        Create Exam
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Index;
