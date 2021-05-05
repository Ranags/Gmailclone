import { Checkbox } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import './emailList.css'
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import RedoIcon from '@material-ui/icons/Redo';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { IconButton } from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import KeyboardHideIcon from '@material-ui/icons/KeyboardHide';
import SettingsIcon from '@material-ui/icons/Settings';
import InboxIcon from '@material-ui/icons/Inbox';
import Section from './Section';
import PeopleIcon from '@material-ui/icons/People';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import EmailRow from './EmailRow';
import { db } from './firebase';
import { DesktopAccessDisabled } from '@material-ui/icons';

function Email() {

    const [email,setEmails] = useState([]);
    
    useEffect(()=>{

    db.collection('myemails').orderBy('timestamp','desc').onSnapshot((snapshot)=> setEmails(

        snapshot.docs.map((docs)=> ({

            id:docs.id,
            data:docs.data(),
        })
    )
    ))

    },[])
       



    return (
        <div className="emailList">
            <div className="emailList__seeting">

                <div className="emaiList__seetingLeft">
                    <CheckBoxOutlineBlankIcon />
                    <IconButton>
                        <ArrowDropDownIcon />
                    </IconButton>
                    <IconButton>
                        <RedoIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>


                <div className="emailList__settingRight">

          <IconButton>
              <ChevronLeftIcon/>
              </IconButton>

              <IconButton>
              < ChevronRightIcon/>
              </IconButton>

              <IconButton>
              < KeyboardHideIcon/>
              </IconButton>

              <IconButton>
              <SettingsIcon />
              </IconButton>
                           </div>
                </div>

               <div className="emailList__section">
                
                <Section Icon={InboxIcon} title="primary" color="red"  selected></Section>
                <Section Icon={ PeopleIcon} title="social" color="#1A73E8"></Section>
                <Section Icon={ LocalOfferIcon} title="promotions" color="green"></Section>
                    

                </div>
                <div className="emailList__list">
                    {
                        email.map(({id,data:{to,subject,message,timestamp}}) => (

                            <EmailRow
                            id={id}
                            key={id}
                            title={to}
                            subject={subject}
                            description={message}
                            time={new Date(timestamp?.seconds * 1000).toUTCString()}
                            
                            />

                        ))
                    }
                         
                    
                       <EmailRow 
                    
                    title="Twitch"
                    subject="hey fello streamer !!!"
                    description="This is a test"
                    time="10pm"/>  

                       <EmailRow 
                    
                    title="Twitch"
                    subject="hay fello streamer  !!!"
                    description="This is a test for the email clone"
                    time="10pm" />  


                     <EmailRow 
                    
                    title="Twitch"
                    subject="hay fello streamer  !!!"
                    description="This is a test for the email clone"
                    time="10pm" />  

                    
<EmailRow 
                    
                    title="Twitch"
                    subject="hay fello streamer  !!!"
                    description="This is a test for the email clone"
                    time="10pm" />  






<EmailRow 
                    
                    title="Twitch"
                    subject="hay fello streamer  !!!"
                    description="This is a test for the email clone"
                    time="10pm" />  

                    
                            
                    
                    
                    

                    
                </div>
               

                
           
            
        </div>
    )
}

export default Email

