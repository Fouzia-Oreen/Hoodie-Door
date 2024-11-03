import { useState } from "react"
import { Link } from "react-router-dom"
import CommonForm from "../../components/common/Form"
import { loginFormControls} from "../../config"

const initialState = {
  email : "",
  password : ""
}

const AuthLogin = () => {
  
    const [formData, setFormData] = useState(initialState)
    function onSubmit() {
      
    }
  return (
    <div className="font-MyFont mx-auto w-full max-w-md space-y-6">
      <div className="text-center">
      <h1 className="text-3xl font-bold tracking-tight">Sign in to your account</h1>
      <p className="mt-2">Don&apos;t have an account
        <Link className="font-medium ml-2 text-primary hover:underline" to="/auth/register">
        Register
        </Link>
      </p>
    </div>
    <CommonForm 
      formControls={loginFormControls}
      buttonText={'SignIn'}
      formData={formData}
      setFormdata={setFormData}
      onSubmit={onSubmit}
    />
    </div>
  )
}

export default AuthLogin
