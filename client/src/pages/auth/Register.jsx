import { useState } from "react"
import { Link } from "react-router-dom"
import CommonForm from "../../components/common/Form"
import { registerFormControls } from "../../config"

const initialState = {
  userName : "",
  email : "",
  password : ""
}

const AuthRegister = () => {
  const [formData, setFormData] = useState(initialState)
  function onSubmit() {
    
  }
  return (
    <div className="font-MyFont mx-auto w-full max-w-md space-y-6">
      <div className="text-center">
      <h1 className="text-3xl font-bold tracking-tight">Create new account</h1>
      <p className="mt-2">Already have an account
        <Link className="font-medium ml-2 text-primary hover:underline" to="/auth/login">
        Login
        </Link>
      </p>
    </div>
    <CommonForm 
      formControls={registerFormControls}
      buttonText={'SignUp'}
      formData={formData}
      setFormdata={setFormData}
      onSubmit={onSubmit}
    />
    </div>
  )
}

export default AuthRegister
