import Logo from "../../assets/logo.PNG";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import * as yup from "yup";
import { TextField } from "./TextField";

const Signup2 = () => {
    const initialValue = {
        email: '',
        password: '',
        name: '',
        phoneNumber: '',

    }
   
    
    const validate = yup.object({
        name: yup.string()
            .max(50, "Must be 50 characters or less")
            .required("Required"),
        phoneNumber: yup.string()
            .matches(/^[0-9]{8,8}$/, "Invalid phone number")
            .required("Required"),
        email: yup.string()
            .email("Invalid email address")
            .required("Required"),
        password: yup.string()
            .required("Required")
            .matches(
                /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[~!@#$%^&*_\-+=`|()\{\}\[\]:;"'<>,.?/]).{8,}$/,
                "Password must contain at least 8 characters, including at least one uppercase character, one lowercase character, one digit, and one special character"
            ),
    });

    
    const navigate = useNavigate();
    const gotoSignUpPage = () => navigate("/");

    const handleSubmit = (values,actions) => {
        
        const regobj = {
            
            email: values.email,
            password: values.password, 
            name: values.name,
            phoneNumber: values.phoneNumber,
             }
            console.log(typeof(regobj))
            fetch("http://localhost:3001/api/web/auth/sign-up", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Access-Control-Allow-Origin": "*",
             },
             body: JSON.stringify(regobj),
             })
            .then((res) => res.json())
            .then((data) => {
                console.log(data, "userRegister");
                actions.resetForm();

            });
            actions.setSubmitting(false);
    }


    return (
        <div className="flex justify-between mt-2 mx-2  xl:space-x-10 space-x-3 bg-[#F8F8F8] flex-wrap-reverse">

            <div className="flex justify-center  flex-col md:w-[50%] w-full   ">
                <div className=" md:mt-0 w-full xl:p-0  ">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">

                        <h1 className="font-roboto font-bold text-3xl text-black/80 xl:w-[632px] md:w-[532px]  ">Welcome to our restaurant management platform!</h1>
                        <h1 className="font-roboto  text-md text-black/60 xl:w-[632px] lg:w-[532px] ">With our service, you can streamline your operations and provide a seamless experience for your customers. </h1>
                        <h1 className="font-roboto  text-md text-black  xl:w-[632px] md:w-[532px]">Already have an account? <span onClick={() => gotoSignUpPage()} className=" cursor-pointer font-roboto text-md font-semibold underline ">
                            Click here</span> </h1>
                        <Formik
                        initialValues={initialValue}
                        validationSchema={validate}
                        onSubmit={(values, actions) => handleSubmit(values, actions)}

                       
                        >
                             {({ isSubmitting }) => (
                            <Form className="space-y-2 md:space-y-6 w-full" >

                                <TextField label="Restaurant name" name="name" type="text"  placeholder="Planet food, Cheesy food, Restaurant Le Mediterranee ..."/>
                                <TextField label="Phone number" name="phoneNumber" type="text" placeholder="+216 55 675 123"/>
                                <TextField label="Email" name="email" type="email" placeholder="jhon.doe@gmail.com"/>
                                <TextField label="Password" name="password" type="password" placeholder="••••••••••••••"/>
                                
                                <button type="submit" disabled={isSubmitting} className="w-36 text-white bg-[#6C63FF] hover:bg-[#6f68f8] focus:ring-4 focus:outline-none focus:ring-primary-300 font-semibold rounded-lg text-md px-5 py-2.5 text-center ">Sign in</button>

                            </Form>
                             )}
                        </Formik>
                    </div>
                </div>
            </div>
            <div className=" sm:h-[98vh]  ">
                <img src={Logo} alt="" className="rounded-xl h-full xl:w-full md:w-[447px]  w-full" />
            </div>
        </div>
    )
}
export default Signup2;
