import { useNavigate } from "react-router-dom";
import "./index.css";
export default function Home(){
    const navigate = useNavigate()
        function goToCustomer(){
            navigate('/create')
        }
        return(
            <>
            <h2>hello</h2>
            <button onClick={goToCustomer} className="btn">create</button>
            </>
        )
}