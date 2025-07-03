import { useState } from 'react'
import './App.css'
import UserPreview from './UserPreview.jsx'

function App() {

  // const [form, setForm] = useState({ name: '', email: '' });

  const [companyname, setcompanyname] = useState('')
  const [companyslogan, setcompanyslogan] = useState('')
  const [name, setname] = useState('')
  const [position, setposition] = useState('')
  const [mobile, setmobile] = useState('')
  const [email, setemail] = useState('')
  const [website, setwebsite] = useState('')
  const [address, setaddress] = useState('')  
  

  const handleChange = (e) => {
    console.log(e);
    if(e.target.name == 'companyname'){
      setcompanyname(e.target.value)
    } else if(e.target.name == 'companyslogan'){
      setcompanyslogan(e.target.value)
    }
    else if(e.target.name == 'name'){
      setname(e.target.value)
    }
    else if(e.target.name == 'position'){
      setposition(e.target.value)
    }
    else if(e.target.name == 'mobile'){
      setmobile(e.target.value)
    }
    else if(e.target.name == 'email'){
      setemail(e.target.value)
    }
    else if(e.target.name == 'website'){
      setwebsite(e.target.value)
    }
    else if(e.target.name == 'address'){
      setaddress(e.target.value)
    }
  };
  return (
    <div>
      <div class="rf">
        <h2 >details</h2>
        <div class="alt"><p>Company Name</p>
          <input type= "text"
            name="companyname"
            value={companyname}
            onChange={handleChange}
            placeholder='company name'
          /></div>

        <div class="alt"><p>Company Slogan</p>
          <input type= "text"
            name="companyslogan"
            value={companyslogan}
            onChange={handleChange}
            placeholder='company slogan'
          /></div>

        <div class="alt"><p> Name</p>
          <input type= "text"
            name="name"
            value={name}
            onChange={handleChange}
            placeholder='enter name'
          /></div>

        <div class="alt"><p> Position</p>
          <input type= "text"
            name="position"
            value={position}
            onChange={handleChange}
            placeholder='enter your position'
          /></div>

        <div class="alt"><p> Mobile</p>
          <input type= "text"
            name="mobile"
            value={mobile}
            onChange={handleChange}
            placeholder='enter mobile'
          /></div>


        <div class="alt"><p> Email</p>
          <input type= "text"
            name="email"
            value={email}
            onChange={handleChange}
            placeholder='enter Email'
          /></div>

        <div class="alt"><p> Website</p>
          <input type= "text"
            name="website"
            value={website}
            onChange={handleChange}
            placeholder='enter website'
          /></div>



        <div class="alt"><p> Address</p>
          <input type= "text"
            name="address"
            value={address}
            onChange={handleChange}
            placeholder='enter address'
          /></div>

      </div>



      <UserPreview companyname={companyname} companyslogan={companyslogan} name={name} position={position} mobile={mobile} email={email} website={website} address={address} />
    </div>

  );
}

export default App






// setForm({ ...form, [e.target.name]: e.target.value });