import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

const AddQuestion = ({auth}) => {
    
    return ( <AuthenticatedLayout user={auth.user}>
        <div className="m-5 flex flex-col gap-5">
            <div className="p-10 bg-green-200 rounded-md"></div>
        </div>
    </AuthenticatedLayout> );
}
 
export default AddQuestion;