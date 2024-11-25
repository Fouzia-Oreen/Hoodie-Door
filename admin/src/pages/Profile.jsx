import { useState } from 'react';
import profile from '../assets/avatar.png';
 import axios from 'axios';
 import { backendUrl } from '../App';

const Profile = () => {
  const [image, setImage] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState(Number);
  const [profession, setProfession] = useState('');
  const [bio, setBio] = useState('');

  const onSubmitHandler = async (e) => {
    e.preventDefault()
    try {
      const formData = new FormData()
      formData.append("image", image)
      formData.append("name", name)
      formData.append("email", email)
      formData.append("date", date)
      formData.append("profession", profession)
      formData.append("bio", bio)

      const response = await axios.post(backendUrl+"/api/product/profile", formData)
      console.log(response)

    } catch (error) {
      console.log(error)
    }
 }

  return (

    <form className="flex flex-col w-full gap-4 " onSubmit={onSubmitHandler}>
      {/* profile - image */}
      <label className=' w-full' htmlFor='profile'>
        <img src={!image ? profile : URL.createObjectURL(image)}  alt="profile" className='rounded-full border-4 border-primary-dark outline-none max-w-[300px] h-[300px] object-contain'/>
        <input onChange={(e) => setImage(e.target.files[0])}  type="file" id="profile" hidden/>
      </label>
      {/* name */}
      <div className='w-full'>
        <p className="pl-2 mb-1">Name</p>
        <input 
        type="text" 
        value = {name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name" 
        className="px-3 py-2 placeholder:text-text-light placeholder:opacity-65 w-full max-w-[500px] "/>
      </div>
      {/* email */}
      <div className='w-full'>
        <p className="pl-2 mb-1">Email</p>
        <input 
        type="email" 
        placeholder="Enter your email" 
        value = {email}
        onChange={(e) => setEmail(e.target.value)}
        className="px-3 py-2 placeholder:text-text-light placeholder:opacity-65 w-full max-w-[500px] "/>
      </div>
      {/* Date - Of - Birth */}
      <div className='w-full'>
        <p className="pl-2 mb-1">Date-Of-Birth</p>
        <input 
        type="date" 
        value = {date}
        onChange={(e) => setDate(e.target.value)}
        placeholder="Enter your DOB" 
        className="px-3 py-2 placeholder:text-text-light placeholder:opacity-65   w-full max-w-[500px] "/>
      </div>
      {/* Proffession */}
      <div className='w-full'>
        <p className="pl-2 mb-1">Profession</p>
        <input 
        type="text" 
        value = {profession}
        onChange={(e) => setProfession(e.target.value)}
        placeholder="Enter your profession" 
        className="px-3 py-2 placeholder:text-text-light placeholder:opacity-65 w-full max-w-[500px] "/>
      </div>
      {/* Bio */}
      <div className='w-full'>
        <p className="pl-2 mb-1">Bio</p>
        <textarea 
        type="text" 
        value = {bio}
        onChange={(e) => setBio(e.target.value)}
        placeholder="Enter your bio" 
        className="px-3 py-2 placeholder:text-text-light placeholder:opacity-65 w-full max-w-[500px] "/>
      </div>
      <button className='py-2 px-4 mt-4 bg-dark text-white rounded-sm w-fit'>Save</button>
    </form>
  )
}

export default Profile
