import { useState } from "react"
import { Link } from "react-router-dom"
import { toast, ToastContainer } from "react-toastify"
export default function AccountBubble() {

    const [username, setUsername] = useState(localStorage.getItem('username'))
    const [bubbleUsername, setBubbleUsername] = useState(username.charAt(0).toUpperCase())

    const logOut = () => {
        toast.loading('Logging out...')
        localStorage.removeItem("username")
        localStorage.removeItem("id")
        setTimeout(() => {
            window.location.reload();
        },1500)
    }
    return <>

            <div className="btn-group dropstart">
                <button type="button" className="flex w-[50px] h-[50px] rounded-full bg-yellow-200 justify-center items-center font-extrabold text-xl dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    {bubbleUsername}
                </button>
                <ul className="dropdown-menu">
                    <li>
                        <button className="btn w-full text-start" onClick={logOut}>Logout</button>
                    </li>
                    <li>
                        <Link to='/userOrders'><button className="btn w-full text-start" >Your Orders</button></Link>
                    </li>
                </ul>
            </div>
            <ToastContainer />
    </>
}