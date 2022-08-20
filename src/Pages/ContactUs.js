
import "./ContactUs.css";

const ContactUs = () => {
   async function contactFromHandler(e) {
        e.preventDefault();
        const contactDetails = {
            name: e.target[0].value,
            email: e.target[1].value,
            phone: e.target[2].value
        }

        const response = await fetch('https://shubh-s-ecommerce-default-rtdb.firebaseio.com/ecommerce/contact.json', {
            method: 'POST',
            body: JSON.stringify(contactDetails),
        })
        const data = await response.json()
    console.log(data);
        
    }
  return (
   <form className="contact-form" onSubmit={contactFromHandler}>
    <h1>Please Fill Your Details👇</h1>
    <div>
        <label htmlFor="name">Name</label><br/>
        <input type='text' id='name' name placeholder="Enter Your Name"/>
    </div>
    <div>
        <label htmlFor="email">Email</label><br/>
        <input type='email' id='email' placeholder="Enter Your Email"/>
    </div>
    <div>
        <label htmlFor="phone">Phone</label><br/>
        <input type='number' id='phone' placeholder="Enter Your Phone Number"/>
    </div>
    <button type='submit'>Submit</button>
   </form>
  );
};
export default ContactUs;
