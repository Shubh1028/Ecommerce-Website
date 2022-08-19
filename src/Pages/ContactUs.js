
import "./ContactUs.css";

const ContactUs = () => {
  return (
   <form className="contact-form">
    <div>
        <label htmlFor="name">Name</label><br/>
        <input type='text' id='name' placeholder="Enter Your Name"/>
    </div>
    <div>
        <label htmlFor="email">Email</label><br/>
        <input type='email' id='email' placeholder="Enter Your Email"/>
    </div>
    <div>
        <label htmlFor="email">Phone</label><br/>
        <input type='number' id='phone' placeholder="Enter Your Email"/>
    </div>
    <button>Submit</button>
   </form>
  );
};
export default ContactUs;
