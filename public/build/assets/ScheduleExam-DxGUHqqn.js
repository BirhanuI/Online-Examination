import{W as u,j as e}from"./app-BE_ftY7I.js";import{M as j}from"./Modal-Bo302pwa.js";import{d as a}from"./dayjs.min-CI19Kjof.js";import{B as Y}from"./react-toastify.esm-DYKIMQR3.js";import{L as m,A as o,D as h}from"./AdapterDayjs-93uad9qf.js";import{T as D}from"./TimePicker-D9MwFZSd.js";import{B as l}from"./Button-3_2yXzKM.js";import"./transition-BYUTmVw0.js";import"./ButtonBase-C_KfJBYb.js";import"./Typography-CD0cKoJZ.js";import"./useFormControl-FpExAydh.js";import"./index-kqRPtLtj.js";import"./TextField-B081BYrq.js";import"./MenuItem-DM10XuWs.js";import"./dividerClasses-CAnNBZIR.js";const L=({examId:c,show:d,onClose:s})=>{const{data:r,setData:i,post:n,processing:p,reset:f}=u({date:a().format("YYYY-MM-DD"),time:a().format("YYYY-MM-DD HH:mm:ss")});function x(t){t.preventDefault(),n(route("exam.set-schedule",c),{onSuccess:()=>{Y.success("Exam scheduled successfully"),s(!1)}})}return e.jsx(j,{show:d,onClose:s,children:e.jsxs("form",{onSubmit:x,className:"p-10 flex flex-col gap-5",children:[e.jsx("p",{className:"",children:"Set Exam Date and Time"}),e.jsxs("div",{className:"flex gap-5",children:[e.jsx(m,{dateAdapter:o,children:e.jsx(h,{className:"w-full",label:"Exam Date",value:a(r.date),onChange:t=>i("date",a(t).format("YYYY-MM-DD"))})}),e.jsx(m,{dateAdapter:o,children:e.jsx(D,{label:"Pick Time",value:a(r.time),onChange:t=>i("time",a(t).format("YYYY-MM-DD HH:mm:ss"))})})]}),e.jsxs("div",{className:"flex gap-5 justify-end",children:[e.jsx(l,{onClick:()=>f(),variant:"contained",color:"error",children:"cancel"}),e.jsx(l,{variant:"contained",type:"submit",disabled:p,children:"Submit"})]})]})})};export{L as default};