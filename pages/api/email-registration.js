import path from 'path';
import fs from 'fs';

function buildPath(){
  return path.join(process.cwd(),'data','data.json')
}

function extractData(filepath){
const jsonData = fs.readFileSync(filepath);
 const data = JSON.parse(jsonData);
 return data;
}

export default function handler(req,res){
    const {method} = req;
    //access data
    //extract data(allevents)
    //res 404 if not found
    //extract all events-loop and find eventID
    //add email into emails registered if it doesnt exist
    //check format of the email is ok

    const filepath = buildPath();
    const {events_categories,allEvents} = extractData(filepath);

    if(!allEvents){
        return res.status(404).json({
            status: 404,
            message: 'Events data not found'
        })
    }

    if(method === 'POST'){
        const {email, eventId} = req.body;
        if(!email | !email.includes('@')){
            res.status(422).json({
                message:'Invalid email address'
                
            })
            return;
        }
        const newAllEvents = allEvents.map(e=>{
            if(e.id===eventId){
                if(e.emails_registered.includes(email)){
                    res.status(401).json({
                        message:'This email has already been resgistered'
                    });
                    return e;
                }
                return{
                        ...e,emails_registered:[...e.emails_registered,email]
                    }
            }
            return e;
        });

        fs.writeFileSync(filepath,JSON.stringify({events_categories,allEvents: newAllEvents}))

        res.status(200).json({message:`You have been registered successfully with email: ${email} ${eventId}`})

    }
}