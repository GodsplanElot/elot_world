import React from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({name:"", email:"", message:""});
const handleChange = (e) => {
  setFormData({...formData, [e.target.name]: e.target.value});
};
const handleSubmit = (e) => {
  e.preventDefault();
  // Handle form submission logic here
  console.log(formData);
}
  return (
    <section className="relative flex items-center c-space section-spacing">        
    <div className="flex flex-col items-center justify -center max-w-md p-5 mx-auto border border-white/10 rounded-2xl bg-primary" >
    <div className='flex flex-col items-start w-full gap-5 mb-10' >
        <h2 className="text-heading" >Let's Talk</h2>
        <p className="font-normal text-neutral-400 ">Whether you're looking to build a new website, improve your existing platfrom, or bring a unique project to life, i'm here to help</p>
    </div>
    <form className="w-full" onSubmit={handleSubmit} >
        <div className="mb-5">
          <label htmlFor="name" className="feild-label">Full Name</label>
          <input id="name" name="name" type="text" className="field-input field-input-focus"
          placeholder="Your Full Name"
          autoComplete="name"
          value={formData.name}
          onChange={handleChange}
          required
          /> 
        </div>
        <div className="mb-5">
          <label htmlFor="email" className="feild-label">Email</label>
          <input id="email" name="email" type="text" className="field-input field-input-focus"
          placeholder="Your Email Address"
          autoComplete="email"
          value={formData.email}
          onChange={handleChange}
          required
          /> 
        </div>
        <div className="mb-5">
          <label htmlFor="message" className="feild-label">Message</label>
          <textarea id="message" name="message" type="text" rows="4" className="field-input field-input-focus"
          placeholder="I would like to hear your thoughts..."
          autoComplete="name"
          value={formData.message}
          onChange={handleChange}
          required
          /> 
        </div>
        <button type="submit" className=" w-full px-6 py-3 mt-2 font-medium text-white rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:via-purple-500 hover:to-blue-500 hover-animation" >Send</button>
    </form>
    </div>
    </section>
  )
}

export default Contact