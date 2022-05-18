import { useEffect, useState } from "react";

export default function ContactForm() {
  const[formData, setFormData]=useState({})

//   const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [terms, setTerms] = useState(false);
  const [validForm, setValidForm] = useState(false);

  //address
  //zip
  //state
  //message

//   const contactFormInfo = {
//     firstName: firstName,
//     lastName: lastName,
//     terms: terms,
//   };

//   useEffect(() => {
//     if (
//       contactFormInfo.firstName &&
//       contactFormInfo.lastName &&
//       contactFormInfo.terms
//     ) {
//       setValidForm(true);
//     }
//   }, [contactFormInfo.firstName, contactFormInfo.lastName, contactFormInfo.terms]);


const setFormObject = (event) => {
    setFormData(event.target.value)
    setFormData({...formData,[event.target.name]: event.target.value})

}

console.log(formData)

  const sendData = (e) => {
    e.preventDefault(); // do not refresh the page

    fetch('url',{
        method:'POST', 
        headers:{
            'Content-Type': 'application/json',

    },
    body: JSON.stringify(formData),
})

    .then (res => res.json())
    .then (data => console.log ('Success:',data))
    .catch(err => console.error(err))
};

  // Everything inside the return has to be JSX
  return (
    <>
      <form method="post">
        <label>
          {" "}
          First Name:
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            // onChange={(event) => setFormData({...formData, firstName:event.target.value} )}
            onChange={setFormObject}
            />
        </label>

        <br></br>
        <label>
          {" "}
          Last Name:
          <input
            type="text"
            name="lastName"
            onChange={setFormObject}/>
          
        </label>
        <br></br>
        <label>
          {" "}
          Address:
          <input type="text" 
          name="address" 
          onChange={setFormObject}
          />
        </label>
        <br></br>
        <label>
          {" "}
          Zip:
          <input type="text"
           name="zip" maxLength={5}  
           onChange={setFormObject}
           />
        </label>
        <br></br>
        <label>
          {" "}
          State:
          <select name=" state"> onChange={(event) => setFormObject(event)}
            <option value=""></option>
            <option value="fl">FL</option>
            <option value="il">IL</option>
            <option value="ny">NY</option>
            <option value="nj">NJ</option>
          </select>
        </label>
        <br />
        <label>
          <input type="date" name="date" />
        </label>

        <br></br>
        <label>
          Terms and conditions
          <input
            type="checkbox"
            onChange={setFormObject}
          />
        </label>
        <input type="file" />
        <br></br>
        <label>
            <label>
                <textarea name="text-area"  cols="30" rows="10"/>
            </label>
            <br />
          <button
            onClick={ e => sendData(e)}
            disabled={!validForm}
          >
            {" "}
            Submit
          </button>
        </label>
      </form>
    </>
  );
}
