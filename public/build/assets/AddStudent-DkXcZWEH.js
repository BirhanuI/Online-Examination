import{W as v,r as j,j as a}from"./app-4AVB-xW9.js";import{M as b}from"./Modal-BAhfICXY.js";import{d as i}from"./dayjs.min-CJzdtE6_.js";import{B as m}from"./react-toastify.esm-DiskrPYb.js";import{T as s,F as _,b as y}from"./TextField-1d2FlS23.js";import{R as C}from"./RadioGroup-EZyR4YAf.js";import{F as d}from"./FormControlLabel-D0br0OI6.js";import{R as c}from"./Radio-C1H0JqQE.js";import{L as Y,A as D,D as N}from"./AdapterDayjs-EswokJYi.js";import{B as h}from"./Button-DHHNnPFa.js";import"./transition-UbmxnPUr.js";import"./ButtonBase-CKr4Mqe7.js";import"./useFormControl-VebDDcz3.js";import"./Typography-BpfBIk1Y.js";import"./SwitchBase-S_xZmFuQ.js";import"./index-pPMBbdvQ.js";const I=({show:f,onClose:p,student:e})=>{const{data:t,setData:o,errors:l,reset:n,setError:M,post:x,put:u}=v({first_name:e?e.first_name:"",last_name:e?e.last_name:"",email:e?e.email:"",phone:e?e.phone:"",address:e?e.address:"",grade:e?e.grade:"",section:e?e.section:"",city:e?e.city:"",state:e?e.state:"",gender:e?e.gender:"female",date_of_birth:e?i(e.date_of_birth).format("YYYY-MM-DD"):i().format("YYYY-MM-DD")});j.useEffect(()=>{e?o({first_name:e.first_name,last_name:e.last_name,email:e.user?e.user.email:"",phone:e.phone,address:e.address,section:e.section,grade:e.grade,city:e.city,state:e.state,gender:e.gender,date_of_birth:i(e.date_of_birth).format("YYYY-MM-DD")}):n()},[e]);function g(r){r.preventDefault(),e?u(route("student.update",e.id),{onSuccess:()=>{n(),m.success("Student updated successfully"),onclose(!1)}}):x(route("student.store"),{onSuccess:()=>{n(),m.success("Student added successfully"),onclose(!1)}})}return a.jsxs(b,{show:f,onClose:p,children:[a.jsx("h2",{className:"p-5 pb-0 text-center text-2xl font-bold",children:"Add Student"}),a.jsxs("form",{onSubmit:g,className:"p-10 flex flex-col gap-5 pt-5 overflow-y-auto max-h-[500px]",children:[a.jsxs("div",{className:"w-full flex gap-5",children:[a.jsx(s,{fullWidth:!0,label:"First Name",value:t.first_name,onChange:r=>o("first_name",r.target.value),error:l.first_name,helperText:l.first_name}),a.jsx(s,{fullWidth:!0,label:"Last Name",value:t.last_name,onChange:r=>o("last_name",r.target.value),error:l.last_name,helperText:l.last_name})]}),a.jsx(s,{fullWidth:!0,label:"Email",value:t.email,onChange:r=>o("email",r.target.value),error:l.email,helperText:l.email}),a.jsx(s,{fullWidth:!0,label:"Phone",placeholder:"optional",value:t.phone,onChange:r=>o("phone",r.target.value),error:l.phone,helperText:l.phone}),a.jsxs("div",{className:"flex gap-5",children:[a.jsx(s,{fullWidth:!0,label:"Grade",type:"number",value:t.grade,onChange:r=>o("grade",r.target.value),error:l.grade,helperText:l.grade}),a.jsx(s,{fullWidth:!0,label:"Section",value:t.section,onChange:r=>o("section",r.target.value),error:l.section,helperText:l.section})]}),a.jsxs("div",{className:"flex gap-5",children:[a.jsx(_,{fullWidth:!0,children:a.jsxs("div",{className:"flex gap-5 items-center border p-[7px] rounded-md border-gray-300",children:[a.jsx(y,{id:"demo-radio-buttons-group-label",children:"Gender"}),a.jsx(C,{value:t.gender,name:"radio-buttons-group",children:a.jsxs("div",{className:"",children:[a.jsx(d,{value:"female",control:a.jsx(c,{}),label:"Female",onChange:r=>o("gender",r.target.value)}),a.jsx(d,{value:"male",control:a.jsx(c,{}),label:"Male",onChange:r=>o("gender",r.target.value)})]})})]})}),a.jsx(Y,{dateAdapter:D,children:a.jsx(N,{className:"w-full",label:"Date of Birth",value:i(t.date_of_birth),onChange:r=>o("date_of_birth",i(r).format("YYYY-MM-DD"))})})]}),a.jsx(s,{fullWidth:!0,label:"Address",value:t.address,onChange:r=>o("address",r.target.value),error:l.address,helperText:l.address}),a.jsxs("div",{className:"flex gap-5",children:[a.jsx(s,{fullWidth:!0,label:"City",value:t.city,onChange:r=>o("city",r.target.value),error:l.city,helperText:l.city}),a.jsx(s,{fullWidth:!0,label:"State",value:t.state,onChange:r=>o("state",r.target.value),error:l.state,helperText:l.state})]}),a.jsxs("div",{className:"flex gap-5 justify-end",children:[a.jsx(h,{variant:"contained",color:"error",onClick:()=>n(),children:"cancel"}),a.jsx(h,{type:"submit",variant:"contained",children:e?"update":"submit"})]})]})]})};export{I as default};