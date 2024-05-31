import { Link } from 'react-router-dom'
import '../../../styles/login.css'
import { useRef, useState } from 'react'

export default function Login() {
    const login = useRef();
    const [form, setForm] = useState({
        email : "",
        password: ""
    }) 
    function handelChange(e) {
        setForm({...form,[e.target.name]:e.target.value})
    }
    function handelForm() {
            login.current.addEventListener('click', function () {
            localStorage.setItem('auth',"تسجيل الخروج");
            window.location.href = '/Training';
        }
        )
    }
    return <div className='opacity'>
        <div className="login">
        <div style={{height:"600px"}} className='pop-login'>
            <form>
            <h1>تسجيل الدخول</h1>
            <div className='input-form'>
                <label htmlFor='email'>الايميل ورقم الهاتف</label>
                <input type='email' id='' name='email' value={form.email} onChange={handelChange}/>
            </div>
            <div className='input-form'>
                <label htmlFor='pass' className='pass'>كلمة المرور</label>
                <input type='password' id='pass' name='password' form={form.password} onChange={handelChange}/>
            </div>
            <Link to=""> <button onClick={handelForm} ref={login}>تسجيل الدخول</button> </Link>
        
        <div className='section-acount'>
            <Link to="" href='#'>نسيت كلمة المرور</Link>
            <div >
                <span  >ليس لديك حساب ؟</span>
                <Link to="/Training/register" 
                className='pass'>إنشاء حساب</Link>
            </div>
        </div>
        <div className='social-login'>
           <div>
                <img src={require('../../../assets/images/logo googleg 48dp.png')} alt="logo"/>
                <span>Google</span>
           </div>
           <div>
                <img src={require('../../../assets/images/Apple Logo.png')} alt="logo"/>
                <span>Apple</span>
           </div>
           <div>
                <img src={require('../../../assets/images/Facebook Logo.png')} alt="logo"/>
                <span>Facebook</span>
           </div>
        </div>
            </form>
        </div>
    </div>
    </div>
}