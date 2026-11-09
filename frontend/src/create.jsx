import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "./index.css";


function Create(){
    const[values,setValues] = useState({
        Cust_Id:'',
        Cust_Name:'',
        Cust_Add:'',
        Amount:0
    });
    const navigate = useNavigate();
    const handleSubmit = (e) =>{
        e.preventDefault();
        axios.post('http://localhost:3000/Customer', values)
        .then(
            res=>{
                console.log(res);
                navigate('/create')
            }
        ).catch(err=> console.log(err));
    }
    return(
            <div className='body'>
        <div className='sub-main'>
            < form onSubmit = { handleSubmit } >
            <h2 >Add Customer</h2>
            <div className='mb-2'>
                <label htmlFor="">Id</label>
                <input
                type="text"
                placeholder="Enter Id"
                className="form-control"
                name='id'
                onChange={(e) => setValues({ ...values, Cust_Id: e.target.value })}
                />
            </div>
            <div className='mb-2'>
                <label htmlFor="">Name</label>
                <input
                type="text"
                placeholder="Enter Name"
                className="form-control"
                name='name'
                onChange={(e) => setValues({ ...values, Cust_Name: e.target.value })}
                />
            </div>
            <div className='mb-2'>
                <label htmlFor="">Address</label>
                <input
                type="text"
                placeholder="Enter Address"
                className="form-control"
                name='address'
                onChange={(e) => setValues({ ...values, Cust_Add: e.target.value })}
                />
            </div>
            <div className='mb-2'>
                <label htmlFor="">Amount</label>
                <input
                type="text"
                placeholder="Enter Amount"
                className="form-control"
                name='amount'
                onChange={(e) => setValues({ ...values, Amount: e.target.value })}
                />
            </div>
            <button type="submit" className='submit-btn'>Submit</button>
            </form >
        </div >
        </div >
    );
}
export default Create