import React from "react";
import "./apply.css"
import { useState } from "react";
const TCS = () =>{
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [mobilenumber, setMobilenumber] = useState('');
  const [email, setEmail] = useState('');
  const [tenmark, setTenmark] = useState('');
  const [twelthmark, setTwelthmark] = useState('');
  const [ug, setUg] = useState('');
  const [cgpa, setCgpa] = useState('');
  const [clgname, setClgname] = useState('');
  const [district, setDistrict] = useState('');
  const [state, setState] = useState('');
  const [nation, setNation] = useState('');
  const handleSubmit = (e)=>{
    e.preventDefault();
    if (setFirstname === " " || setLastname === " " || setMobilenumber === " " || setEmail === " " || setTenmark === " " || setTwelthmark === " " || setUg === " " || setCgpa === " " || setClgname === " " || setDistrict === " " || setState === " " || setNation === " ")
      {
      alert("Enter all details")
    }
    else
    {
      alert("Successfully appiled")
    }
  };
    return(
        <div className="Form">
         <h2>Fill The Details</h2>
        <form onSubmit={handleSubmit}>
        <img
                  src="https://tse1.mm.bing.net/th?id=OIP.aMoVSpiXHkBRvQqeHwYfxgAAAA&pid=Api&P=0&h=220"
                  alt="img"
                /><br></br><br></br>
          <p2>Firstl Name </p2>
          <input type="firstname" placeholder="" value={firstname}onChange={(e)=>setFirstname(e.target.value)}/> &nbsp;&nbsp;&nbsp;&nbsp;
          <p2>last Name </p2>
          <input type="lastname" placeholder="" value={lastname}onChange={(e)=>setLastname(e.target.value)} /><br></br><br></br>
          <p2>Mobile No. &nbsp;&nbsp;</p2>
          <input type="mobilenumber" placeholder="" value={mobilenumber}onChange={(e)=>setMobilenumber(e.target.value)} />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <p2>Email - ID  &nbsp;&nbsp; </p2>&nbsp;
          <input type="email" placeholder=" " value={email}onChange={(e)=>setEmail(e.target.value)} /><br></br><br></br>
          <p2>&nbsp;10th Mark &nbsp;&nbsp; </p2> &nbsp;
          <input type="tenmark" maxLength="3" id="number" placeholder="" value={tenmark}onChange={(e)=>setTenmark(e.target.value)}/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <p2>12th Mark &nbsp;</p2>
          <input type="twelthmark" maxLength="4"placeholder="" value={twelthmark}onChange={(e)=>setTwelthmark(e.target.value)}/>
          <br></br><br></br>
          <p2>UG Degree &nbsp;&nbsp;&nbsp; </p2>
          <input type="ug"placeholder="" value={ug}onChange={(e)=>setUg(e.target.value)}/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <p2>CGPA &nbsp;&nbsp;&nbsp;</p2>
          <input type="cgpa"placeholder="" value={cgpa}onChange={(e)=>setCgpa(e.target.value)}/><br></br><br></br>
          <p2>CollegeName &nbsp;&nbsp; </p2>
          <input type="clgname"placeholder="" value={clgname}onChange={(e)=>setClgname(e.target.value)}/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <p2>District &nbsp;&nbsp;</p2>
          <input type="district"placeholder="" value={district}onChange={(e)=>setDistrict(e.target.value)}/><br></br><br></br>
          <p2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;State &nbsp;&nbsp;&nbsp;&nbsp; </p2>
          <input type="state"placeholder="" value={state}onChange={(e)=>setState(e.target.value)}/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <p2>Nationality &nbsp;&nbsp;</p2>
          <input type="nation"placeholder="" value={nation}onChange={(e)=>setNation(e.target.value)}/><br></br><br></br>
          <button>Apply</button><br></br>
        </form>
        </div>

    );
}

export default TCS;