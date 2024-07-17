import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

const Index = ({ auth }) => {
    return (
        <AuthenticatedLayout user={auth.user}>
            <div className="w-full p-5">

                <div className="p-20 bg-red-400"></div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Index;
