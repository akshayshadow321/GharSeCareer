import { useState } from "react"
import { Link } from "react-router-dom"
import { toast, ToastContainer } from "react-toastify"
export default function AccountBubble() {

    const [email, setEmail] = useState(localStorage.getItem('email'))
    const [bubbleEmail, setBubbleEmail] = useState(email.charAt(0).toUpperCase())

    const logOut = () => {
        toast.loading('Logging out...')
        localStorage.removeItem("email")
        localStorage.removeItem("id")
        setTimeout(() => {
            window.location.reload();
        },1500)
    }
    return <>

            <div className="btn-group dropstart">
                <button type="button" className="flex w-[50px] h-[50px] rounded-full bg-yellow-200 justify-center items-center font-extrabold text-xl dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    {bubbleEmail}
                </button>
                <ul className="dropdown-menu">
                    <li>
                        <button className="btn w-full text-start" onClick={logOut}>Logout</button>
                    </li>
                </ul>
            </div>
            <ToastContainer />
    </>
}