
const person={
    name : "pranay",
    age : "21",
    address : {
        line1:"baker Street",
        city:"London",
        country : "UK" 
    },
    profiles : ['twiteer','Instagram','faceBook'],
    profilesprint :()=> {
       person.profiles.map(
        (profile)=>{
            console.log(profile)
            return null;
        }
       )
        
    }
}


export default function LearningBaisc(){
    return (
        <div>
            <div>{person.address.city}</div>
            <div>{person.profilesprint()}</div>
        </div>
    )
}