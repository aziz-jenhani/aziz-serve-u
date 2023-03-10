import { useEffect, useState } from "react";
import {  Outlet, useNavigate } from "react-router-dom";
import Sidebar from "./global/Sidebar2";
const Home = () => {
    const usenavigate = useNavigate();
    const [customerlist, listupdate] = useState(null);
    const[displayemail,displayemailupdate]=useState('');
    useEffect(() => {
        let email = sessionStorage.getItem('email');
        if (email === '' || email === null) {
            usenavigate('/login');
        }else{
            displayemailupdate(email);
        }

        let jwttoken = sessionStorage.getItem('jwttoken');
        fetch("http://localhost:8000/users", {
            headers: {
                'Authorization': 'bearer ' + jwttoken
            }
        }).then((res) => {
            return res.json();
            
        }).then((resp) => {
            listupdate(resp);
            
        }).catch((err) => {
            console.log(err.messsage)
        });

    }, []);


    
    return (
        <div className="flex w-full h-full bg-[#EDEDED]">
            <Sidebar />
            <Outlet />
        </div>
    );
}

export default Home;