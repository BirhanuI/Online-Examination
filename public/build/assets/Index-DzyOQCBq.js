import{r as t,j as e,Y as u,a as f,b as j,y as i}from"./app-CN7q16mo.js";import{D as g,T as r,E,a as y}from"./DataTable-DTPi_PcN.js";import{A as z}from"./AuthenticatedLayout-CiCN0ePb.js";import S from"./ScheduleExam-CYuakgMl.js";import{A as v}from"./useSlot-DZ1y84iZ.js";import{B as b}from"./Button-CVdFnAHl.js";import{I as o}from"./IconButton-l2uRd08m.js";import"./ButtonBase-CuqmQs8a.js";import"./TextField-DqoJh2cB.js";import"./useFormControl-BD7yWTeC.js";import"./AdapterDayjs-D-8GplSq.js";import"./Typography-EfFZ-76c.js";import"./index-B9QlZMXV.js";import"./dayjs.min-_yjAvwpX.js";import"./FormControlLabel-ZtahNjEO.js";import"./MenuItem-Dvm1UbDa.js";import"./dividerClasses-fTeXa3y0.js";import"./Radio-DbFPVcr2.js";import"./SwitchBase-BdaAChQS.js";import"./Checkbox-B6X4Ju5b.js";import"./TimePicker-DhixDRvM.js";import"./transition-CC_gOjYu.js";import"./react-toastify.esm-AZ9YETI_.js";import"./Modal-11_RrgoX.js";const U=({auth:l,exams:c})=>{t.useEffect(()=>{(async()=>{await j.get("/api/time").then(p=>{console.log(p.data.time)})})()},[]);function m(s){i.delete(`/exam/${s}`)}const[n,a]=t.useState(!1),[d,x]=t.useState(null),h=[{accessorKey:"title",header:"Exam Title",size:200,grow:!0},{accessorKey:"duration",header:"Duration",size:100},{accessorKey:"subject_name",header:"Subject",size:100},{accessorKey:"grade",header:"Grade",size:100},{accessorKey:"schedule_date",header:"Give Exam",size:100,Cell:({row:s})=>e.jsx("div",{className:"",children:e.jsx(b,{variant:"contained",onClick:()=>{x(s.original.id),a(!0)},color:s.original.schedule?"warning":"primary",children:s.original.schedule?"reschedule":"Schedule"})}),size:150},{accessorKey:"actions",header:"Actions",size:100,Cell:({row:s})=>e.jsxs("div",{className:"",children:[e.jsx(r,{title:"Edit Exam",placement:"top",children:e.jsx(o,{onClick:()=>i.get(`/exam/${s.original.id}`),children:e.jsx(E,{fontSize:"small"})})}),e.jsx(r,{title:"Delete Exam",placement:"top",children:e.jsx(o,{onClick:()=>m(s.original.id),children:e.jsx(y,{fontSize:"small"})})})]}),size:150}];return e.jsxs(z,{user:l.user,children:[e.jsx(u,{title:"Dashboard"}),e.jsx(S,{examId:d,show:n,onClose:a}),e.jsx("div",{className:"p-5 flex flex-col gap-5",children:e.jsxs("div",{className:"p-10 bg-white flex border rounded shadow-lg flex-col gap-10",children:[e.jsxs("div",{className:"flex justify-between items-center text-lg w-full ",children:[e.jsx("p",{className:"font-space text-gray-800",children:"Previous Exams"}),e.jsx(f,{href:route("exam.create"),children:e.jsxs("span",{className:"flex items-start",children:[e.jsx(v,{fontSize:"medium"}),"Create Exam"]})})]}),e.jsx("div",{className:"",children:e.jsx(g,{data:c,columns:h})})]})})]})};export{U as default};