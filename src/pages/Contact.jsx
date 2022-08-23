import React,{useState} from "react";
import Pageheader from "../component/Pageheader";
import {ImLocation2} from 'react-icons/im';
import {TbPhonePause} from 'react-icons/tb'
const Contact = () =>{
  const [fullname, setFullName] = useState("");
const inputEvent = (event) => {

    const value = event.target.value;
    const name = event.target.name;

    setFullName((preValue)=>{
        if (name === "fname") {
           return{
               fname: value,
               lname: preValue.lname
           };
        }
    })
}
const formSubmits = (event) => {
    event.preventDefault();
    alert("form Submitted");
}



    return(
    <>
  <Pageheader title="Contact Us" />

<div className="main-content">
<section className="contactPageWrapper">
<div className="container">
<div className="contactInner">
<div className="row">
<div className="col-md-7">
<h2 className="az_heading">Get in touch!</h2>
<p className="az_paragraph">Lorem ipsum dolor sit amet consectetur adipiscing elit. Ut blandit arcu in pretium.</p>
<form onSubmit={formSubmits}>
               






<div className="row">
                <div className="col-md-6 mb-3">
  
  <input type="text" className="form-control" id="userName"
                          value={fullname.fname}
                        placeholder="Name"
                        name="userName"
                        onChange={inputEvent} />
</div>


                <div className="col-md-6 mb-3">
  
  <input type="email" className="form-control" id="userEmail"
                          value={fullname.fname}
                        placeholder="Email"
                        name="userEmail"
                        onChange={inputEvent} />
</div>


<div className="col-md-6 mb-3">
  
  <input type="text" className="form-control" id="userPhone"
                          value={fullname.fname}
                        placeholder="Phone"
                        name="userPhone"
                        onChange={inputEvent} />
</div>


<div className="col-md-6 mb-3">
  <input type="text" className="form-control" id="subject"
                          value={fullname.fname}
                        placeholder="Subject"
                        name="subject"
                        onChange={inputEvent} />
</div>


<div className="col-md-12 mb-3">
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="5" placeholder="Your Message here"></textarea>
</div>


</div>





                   
                    <button type="submit" className="azBtn">Submit</button>
                </form>
                </div>
                <div className="col-md-5">
<h2 className="cont_heading2">Feel free to ask questions or share your comments with us.</h2>
<div className="contactInfo">
<div className="contactIcon" ><ImLocation2 /></div> <h3> Address:</h3>
<p><strong>Amazon Softwares</strong></p>
<p>1109, Kirti Shikhar Building, District Center, Janakpuri (110058)</p>

</div>

<div className="contactInfo bgGrey">
<div className="contactIcon" ><TbPhonePause /></div> <h3> Phone </h3>
<p>Boat House, 2/21 City Road
Hoxton, N1 6NG, UK</p>
</div>
</div>
                </div>
                </div>
                </div>
               
</section>

</div>

    </>
    )
  }
  
  export default Contact;