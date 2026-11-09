import { Link,useNavigate } from "react-router-dom";
import { useEffect,useState } from "react";
import axios from "axios";
export default function Customer(){
    const navigate = useNavigate()
        function goToHome(){
            navigate('/')
        }
        const [data,setData] = useState([]);
        const fetchCustomer =()=>{
            axios.get("http://localhost:3000/")
            .then(res=>setData(res.data))
            .catch(res=>console.log(err));
        }
        useEffect(()=>{
            fetchCustomer();
        },[])
        const handleDelete = (Cust_Id) => {
        axios.delete(`http://localhost:8081/Customer/${Cust_Id}`)
        .then(() => {
            setData(prev => prev.filter(item => item.Cust_Id !== Cust_Id));
        })
        .catch(err => console.log(err));
    };
}