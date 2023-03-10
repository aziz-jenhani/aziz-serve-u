import Logo from "../../assets/logo.PNG";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import * as yup from "yup";
import { TextField } from "./TextField";
import 'react-toastify/dist/ReactToastify.css'; // import first
import { toast } from "react-toastify";

const Login = () => {
  /*const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");*/
  const initialValue = {
    restaurantName: '',
    phoneNumber: '',
    email: '',
    password: '',
  }


  const validate = yup.object({

    email: yup.string()
      .email("please enter valid email")
      .required("Required"),
    password: yup.string()
      .required("Required"),
      
  });
  const navigate = useNavigate();
  const gotoSignUpPage = () => navigate("/sign-up");

  function handleSubmit(values,actions) {
    
    
    fetch("http://localhost:3001/api/web/auth/sign-in/",{
      method:"POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
     },
      body:JSON.stringify(values)})
      .then((res) => {
        return res.json();
    }).then((resp) => {
        console.log(resp)
        if (Object.keys(resp).length === 0) {
            toast.error('Login failed, invalid credentials');
        }else {
          if (resp.password === values.password) {
              toast.success('Success');
              sessionStorage.setItem('email',values.email);
              navigate('/')
            }else{
              toast.error('Please Enter valid credentials');
          }
      }
        
    }).catch((err) => {
        toast.error('Login Failed due to :' + err.message);
    });
     /*
      
      let inputobj={"username": values.email,
      "password": values.password};
      fetch("http://localhost:8000/users",{
          method:'POST',
          headers:{'content-type':'application/json'},
          body:JSON.stringify(inputobj)
      }).then((res) => {
          return res.json();
      }).then((resp) => {
          console.log(resp)
          if (Object.keys(resp).length === 0) {
              toast.error('Login failed, invalid credentials');
          }else{
               toast.success('Success');
               sessionStorage.setItem('email',values.email);
               sessionStorage.setItem('jwttoken',resp.jwtToken);

          }
          
      }).catch((err) => {
          toast.error('Login Failed due to :' + err.message);
      });
     */
  
  }
  return (
    <div className="flex mt-2 mx-2 h-[97vh] lg:space-x-10 space-x-3 bg-[#F8F8F8] flex-wrap">
      <div className=" h-full ">
        <img src={Logo} alt="" className="rounded-xl h-full  w-full" />
      </div>
      <div className="flex justify-center  flex-col space-y-6 xl:w-1/2 ">
        <div className=" md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8 w-full">

            <h1 className="font-roboto font-bold text-3xl text-black/80 ">Welcome to Serve U,<br /> Sign In To Continue</h1>
            <h1 className="font-roboto  text-md text-black ">Don't have an account? <span onClick={() => gotoSignUpPage()} className=" cursor-pointer font-roboto text-md font-semibold underline ">
              Create an account</span><br />It takes less than a minute </h1>
            <Formik
              initialValues={initialValue}
              validationSchema={validate}
              onSubmit={(values, actions) => handleSubmit(values, actions)}
            >
              {({ isSubmitting }) => (
              <Form className="space-y-4 md:space-y-6 w-full" >

                <TextField label="Email" name="email" type="email" placeholder="name@company.com" />
                <TextField label="Password" name="password" type="password" placeholder="••••••••••••••" />
                <button type="submit" className="w-36 text-white bg-[#6C63FF] hover:bg-[#6f68f8] focus:ring-4 focus:outline-none focus:ring-primary-300 font-semibold rounded-lg text-md px-5 py-2.5 text-center ">Sign in</button>

              </Form>)}
            </Formik>
          </div>
        </div>
      </div>

    </div>
  )
}
export default Login;
