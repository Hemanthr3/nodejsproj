import data from '../../data/data.json'

export default function eventFetcher(req,res){
    res.status(200).send(data.allEvents);
}