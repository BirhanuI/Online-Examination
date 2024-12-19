import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { MathJax, MathJaxContext } from "better-react-mathjax";

const Show = ({ auth, exam, score }) => {
    // let score = 0;
    console.log(score);
    return (
        <AuthenticatedLayout user={auth.user}>
            <div className="flex flex-col gap-5 p-5">
                <div className="bg-white p-10 rounded-md ">
                    <div className="flex justify-center gap-10 text-xl">
                        <p className="">
                            <span className="font-bold">Subject:</span>{" "}
                            {exam.subject_name}
                        </p>
                        <p className="">
                            <span className="font-bold">Title:</span>{" "}
                            {exam.title}
                        </p>
                        {/* <p className="">
                            <span className="font-bold">Score:</span>{" "}
                            {score}/{exam.questions.length}
                        </p> */}
                    </div>
                </div>
                <div className="bg-white p-10 rounded-md flex flex-col gap-5">
                    <h2 className="">Exam Result</h2>
                    <div className="flex flex-col gap-5">
                        {exam.questions.map((exam, index) => (
                            <div
                                key={index}
                                className={`flex flex-col gap-3 p-5 rounded-md ${
                                    exam.answer == exam.responses.answer
                                        ? "bg-green-100"
                                        : "bg-red-100"
                                }`}
                            >
                                <h2>
                                    {index + 1}){" "}
                                    <MathJaxContext>
                                        <MathJax>
                                            <span
                                                dangerouslySetInnerHTML={
                                                    {__html: exam.question}
                                                }
                                            ></span>
                                        </MathJax>
                                    </MathJaxContext>
                                </h2>
                                <div className="flex gap-5 flex-wrap">
                                    <p
                                        className={`${
                                            exam.answer ==
                                                exam.responses.answer &&
                                            exam.responses.answer == "option1"
                                                ? "text-green-900 font-bold"
                                                : ""
                                        } ${
                                            exam.answer !=
                                                exam.responses.answer &&
                                            exam.responses.answer == "option1"
                                                ? "text-red-900 font-bold"
                                                : ""
                                        } ${
                                            exam.answer !=
                                                exam.responses.answer &&
                                            exam.answer == "option1"
                                                ? "text-green-900 font-bold"
                                                : ""
                                        }`}
                                    >
                                        A) {exam.option1}
                                    </p>
                                    <p
                                        className={`${
                                            exam.answer ==
                                                exam.responses.answer &&
                                            exam.responses.answer == "option2"
                                                ? "text-green-900 font-bold"
                                                : ""
                                        } ${
                                            exam.answer !=
                                                exam.responses.answer &&
                                            exam.responses.answer == "option2"
                                                ? "text-red-900 font-bold"
                                                : ""
                                        } ${
                                            exam.answer !=
                                                exam.responses.answer &&
                                            exam.answer == "option2"
                                                ? "text-green-900 font-bold"
                                                : ""
                                        }`}
                                    >
                                        B) {exam.option2}
                                    </p>
                                    <p
                                        className={`${
                                            exam.answer ==
                                                exam.responses.answer &&
                                            exam.responses.answer == "option3"
                                                ? "text-green-900 font-bold"
                                                : ""
                                        } ${
                                            exam.answer !=
                                                exam.responses.answer &&
                                            exam.responses.answer == "option3"
                                                ? "text-red-900 font-bold"
                                                : ""
                                        } ${
                                            exam.answer !=
                                                exam.responses.answer &&
                                            exam.answer == "option3"
                                                ? "text-green-900 font-bold"
                                                : ""
                                        }`}
                                    >
                                        C) {exam.option3}
                                    </p>
                                    <p
                                        className={`${
                                            exam.answer ==
                                                exam.responses.answer &&
                                            exam.responses.answer == "option4"
                                                ? "text-green-900 font-bold"
                                                : ""
                                        } ${
                                            exam.answer !=
                                                exam.responses.answer &&
                                            exam.responses.answer == "option4"
                                                ? "text-red-900 font-bold"
                                                : ""
                                        } ${
                                            exam.answer !=
                                                exam.responses.answer &&
                                            exam.answer == "option4"
                                                ? "text-green-900 font-bold"
                                                : ""
                                        }`}
                                    >
                                        D) {exam.option4}
                                    </p>
                                </div>
                            </div>
                        ))}
                        <div className=""></div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Show;
