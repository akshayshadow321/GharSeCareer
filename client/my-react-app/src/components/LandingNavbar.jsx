import AccountBubble from './AccountBubble';
import LoginButton from './LoginButton';
import SigninButton from './SignInButton';
import { Link } from 'react-router-dom';


export default function LandingNavbar() {
    return (
        <>
            <nav className="navbar flex flex-row h-[20%] items-center" style={{ backgroundImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))' }}>
                <div className="container-fluid flex items-center justify-between">
                    <Link to='/'>
                        <div className="navbar-brand flex items-center">
                            <h2 className='text-white text-2xl ms-4'>GharSeCareer</h2>
                        </div>
                    </Link>

                    <div className='flex justify-between w-[600px] items-center'>
                        <div className="w-full" >
                            <ul className="navbar-nav text-white flex flex-row w-full justify-evenly">
                                <li className="nav-item">
                                    <Link to='courses'><h1 className="nav-link text-white hover:scale-105 transition-all">Courses</h1></Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='products'><h1 className="nav-link text-white hover:scale-105 transition-all">Jobs</h1></Link>
                                </li>
                            </ul>
                        </div>
                        {
                            localStorage.getItem("username") ?
                                (
                                    <AccountBubble />
                                )
                                :
                                (
                                    <div className="flex flex-col gap-2">
                                        <LoginButton bg='bg-yellow-300' />
                                        <SigninButton bg='bg-yellow-300' />
                                    </div>
                                )
                        }
                    </div>
                </div>
            </nav>
        </>
    );
}
