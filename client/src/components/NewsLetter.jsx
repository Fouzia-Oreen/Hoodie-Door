const NewsLetter = () => {
    const handleFormSubmit = (e) => {
        e.preventDefault()
    }
  return (
    <div className='text-center mb-12 bg-accent py-4 px-2'>
      <p className='text-2xl font-medium'>Subscribe now & get 20% off</p>
      <p className="text-primary my-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim distinctio incidunt?</p>
      <form onSubmit={handleFormSubmit} className='w-full sm:w-1/2 flex items-center mx-auto gap-2'>
        <input className='w-full smLflex-1 outline-none border-[1px] border-dark  p-3 placeholder:text-text-light placeholder:text-opacity-65' type='email' placeholder='Enter your email' />
        <button type='submit' className="btn">Subscribe</button>
      </form>
    </div>
  )
}

export default NewsLetter
