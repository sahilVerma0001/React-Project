import { useState } from 'react';
import Button from './Button'
import './ContactForm.css'
export default function ContactForm() {
    // let [names, setNames] = useState("sahil");
    // let [emails, setEmails] = useState("sahil@455gmail.com");
    // let [texts, setTexts] = useState("it's good");
    let [clicks, setClicks] = useState({
        names: "sahil",
        emails: "sahil@455gmail.com",
        texts: "it's good",
    })

    let handleSubmit = (event) =>{
        event.preventDefault();
        setClicks( (prevVal) =>{
           return {...prevVal , names: event.target[0].value};
        });
        setClicks( (prevVal) => {
            return {...prevVal , emails: event.target[1].value};
        });
        setClicks( (prevVal) =>{
            return {...prevVal , texts: event.target[2].value};
        });
    }

    return (
        <section className='sectionheader'>
            <div className='contact_form'>
                <div className='top_btn'>
                    <Button text="VIA SUPPORT CALL" icon={true}></Button>
                    <Button text="VIA CALL" icon={false}></Button>
                </div>
                <div className='btn_outline'>
                    <Button text="VIA EMAIL FORM" icon={true} isoutline={true}></Button>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className='form_controler'>
                        <label htmlFor="name">Name</label>
                        <input type="text" id='name' name='name'/>
                    </div>
                    <div className='form_controler'>
                        <label htmlFor="email">E-Mail</label>
                        <input type="email" id='email' name='email'/>
                    </div>
                    <div className='form_controler'>
                        <label htmlFor="text">TEXT</label>
                        <textarea name="text" id="text" rows={7}></textarea>                        
                    </div>
                    <div className='btn_outline'
                        style={{
                            display: "flex",
                            justifyContent: "end",
                        }}
                    >
                        <Button text="SUBMIT"></Button>
                    </div>
                    <div>
                        {clicks.names + " " + clicks.emails + " "+ clicks.texts}
                    </div>
                </form>
            </div>
            <div className='contact_image'>
                <img src="/images/Service 24_7.svg" alt="24_7image" />
            </div>
        </section>
    )
}