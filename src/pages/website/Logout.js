import { Link } from 'react-router-dom'
import '../../styles/logout.css'
export default function Logout () {
    return (
        <div className="logout">
            <div className="logout-pop">
                <div className='pop-info'>
                    <p>هل أنت متأكد من تسجيل الخروج ؟</p>
                    <Link ><button className='ok'
                    onClick={
                        ()=> {
                            window.localStorage.setItem('auth', "تسجيل الدخول")
                            window.location.pathname = '/Training'
                        }
                    }
                    >تأكيد</button></Link>
                    <Link ><button className='cancel'
                    onClick={
                        ()=> {
                            window.location.pathname = '/Training'
                        }
                    }
                    >تراجع</button></Link>
                </div>
            </div>
        </div>

    )
} 