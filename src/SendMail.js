import React from 'react'
import './sendMail.css'
import CloseIcon from '@material-ui/icons/Close';
import { Button } from '@material-ui/core';
// import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import { closeSendMessage } from './features/mailSlice';
import { db } from './firebase';
import firebase from "firebase"
import { useForm } from 'react-hook-form';

function SendMail() {
   const {register , handleSubmit,watch, errors} = useForm();
    const dispatch = useDispatch();


const onSubmit = (formData) => {
db.collection('myemails').add({
 to: formData.to,
    subject: formData.subject,
    message: formData.message,
    timestamp: firebase.firestore.FieldValue.serverTimestamp(), 
})
dispatch(closeSendMessage());
    }

    
    
    return (
        <div className="sendMail">
            <div className="sendMail__header">

                <h3>New Message</h3>
                < CloseIcon onClick={()=> dispatch(closeSendMessage())}  className="sendMail__close" />
            </div>

           
            <form onSubmit={handleSubmit(onSubmit)}>

                <input name="to" type="email" placeholder="To"  ref={register({ required:true })}></input>
                {errors.to && <p className="sendMail__error">To is required</p>}

             
                

                <input name="subject" placeholder="subject" type="text"  ref={register({required:true})}></input>
                {errors.subject && <p className="sendMail__error">Subject is required</p>}



                <input name="message" placeholder="Message ..." type="text"   className="sendMail__message"  ref={register({required:true})}></input>
                {errors.message && <p className="sendMail__error">Message is required</p>}
               
                <div className="sendMail__options">

                   
                    
                    <Button className="sendMail__send"
                    variant="contained"
                    color="primary"
                    type="submit"
                    
                    
                    
                    >Send</Button>
                </div>
            </form>
            
        </div>
    )
}

export default SendMail
