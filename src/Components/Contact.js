import Button from "@material-ui/core/Button";
export let Contact=()=>{

    return (
     
    <div className="container bg-warning mt-5 p-5 border border-secondary border-5  d-flex justify-content-center" >
    
      <form className="form-group w-50">
      <h2>Contact Us</h2>
    <label >Enter Name</label>
    <input type="text" className="form-control border border-dark" id="name" name="name" placeholder="Your name.."/>

   
    <label >Email Id</label>
    <input type="text" className="form-control border border-dark" id="email" name="email" placeholder="Your Email Id"/>

    <label >Country</label>
    <select id="country" className="form-control border border-dark" name="country">
      <option value="australia">India</option>
      <option value="canada">Canada</option>
      <option value="usa">USA</option>
    </select>

    <label >Subject</label>
    <input type="text" className="form-control border border-dark" id="lname" name="lastname" placeholder="Your Subject.."/>

    <Button color="primary" variant="contained">Submit</Button>
    </form>
</div>
        
    );
} 