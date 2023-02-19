import "./Register.scss"

function Login() {
    return ( 
        <div className='formContainer'>
        <div className='formWrapper'>
            <span className='logo'>Chatto</span>
            <span className='title'>Sign in</span>
            <form>
                <input type='email' placeholder='Enter your email...'/>
                <input type='text' placeholder='Username'/>
                <input type='password' placeholder='Password'/>
                <button>Sign up</button>
            </form>
        </div>
        <div className='account'>
            <span>You don't have an account? Register</span>
        </div>
    </div>
     );
}

export default Login;