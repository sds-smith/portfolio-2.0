import { useState, useContext, Fragment, ChangeEventHandler, FormEventHandler } from 'react'
import { ResponsiveContext } from '../../contexts/responsive-context';
import './contact.styles.scss'

type Data = {
    "form-name": string; 
    "first-name": string;
    "last-name": string;
    "email": string;
    "message": string;
}

const encode = (data: Data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key as keyof Data]))
        .join("&");
}

type HandleChange = ChangeEventHandler<HTMLInputElement> & 
                    ChangeEventHandler<HTMLTextAreaElement>


function Contact() {
    const {isMobile} = useContext(ResponsiveContext)

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [formSubmitted, setFormSubmitted] = useState(false)
    const [thankyou, setThankyou] = useState('')
    const [submitted] = useState('Your form has been submitted.')
   
    const handleSubmit: FormEventHandler = (e) => {
        e.preventDefault();
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encode({ 
                        "form-name": "contact", 
                        "first-name": firstName,
                        "last-name": lastName,
                        "email": email,
                        "message": message
                     })
        })
        .then(() => {
            setThankyou(`Thank you, ${firstName}.`)
            setFormSubmitted(true)
            setFirstName('')
            setLastName('')
            setEmail('')
            setMessage('')
            window.setTimeout(() => {setFormSubmitted(false)}, 3000)
        })
          .catch(error => alert(error));
    };

    const handleChange: HandleChange = (e) => {
        switch(e.target.name) {
            case 'first-name' : 
                setFirstName(e.target.value)
                return
            case 'last-name' : 
                setLastName(e.target.value)
                return
            case 'email' : 
                setEmail(e.target.value)
                console.log(email)
                return
            case 'message' : 
                setMessage(e.target.value)
                return
            default : 
                return
        }
    }


    const contactFormInputs = [
        {
            type : 'text',
            placeholder : 'Your First Name',
            name : 'first-name',
            value : firstName,
        },
        {
            type : 'text',
            placeholder : 'Your Last Name',
            name : 'last-name',
            value : lastName,
        },
        {
            type : 'email',
            placeholder : 'Your Email Address',
            name : 'email',
            value : email,
        }
    ]

    return (
        <div className='ContactContainer' >
            <form className={isMobile ? 'form FormMobile' : 'form'} onSubmit={handleSubmit} >
                <h2>contact</h2>
                {contactFormInputs.map(inputElement => (
                    <input 
                        type='text' 
                        placeholder={inputElement.placeholder} 
                        name={inputElement.name} 
                        value={inputElement.value} 
                        className='input'
                        required 
                        onChange={handleChange}
                    />
                ))}
                <textarea 
                    placeholder='Share Your Thoughts' 
                    name='message' 
                    value={message} 
                    className='input'
                    required 
                    onChange={handleChange}
                />
                <button type='submit' style={{color: 'rgb(217, 213, 169)'}} >SUBMIT</button>
            </form> 
            <div className='title'>
                { formSubmitted &&
                    <Fragment>
                        <h3 className='success' id='thankyou'>{thankyou}</h3>
                        <h3 className='success' id='submitted'>{submitted}</h3>
                    </Fragment>
                }
            </div>
        </div>
    );
  }
  
  export default Contact;
