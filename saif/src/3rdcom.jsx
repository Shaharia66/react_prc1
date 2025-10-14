function Practice(){
    const name="asif";
    const userobj={
        name:"saif",
        school:"tala b.dey govt high school.",
        roll:"66",
        university:"SUST",

    }

    let path="https://scontent.fdac138-2.fna.fbcdn.net/v/t39.30808-6/448012726_2257704794576617_3994675455468762680_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEJ4jGNpWYXV8lUSIofiPOA_YepGErF9ln9h6kYSsX2Wf246YtyyAxX4iSa01JIdOSja_YtL2wtKfYUiFic7t0i&_nc_ohc=pHlOppSWIvwQ7kNvwHqkjbJ&_nc_oc=AdmhA-i7DDDWJhqVlQz-un-NII9K86CtE5PhzYlXmDOiNAwRiFy8slZ35LmL9sDqF9k&_nc_zt=23&_nc_ht=scontent.fdac138-2.fna&_nc_gid=9S9AfDHlo2LOTypz-KPZow&oh=00_AfcZP8R5i2PQZkf1qzx6OznAnNYLfDqHHvYI86hD8X-ZYA&oe=68F400C8";
    let userarr=['sam','petter','rshim','karim']
    let a=10;
    let b=30;
    let c=5;
    function fruit(){
        return "Apple";
    }
    function sum(p,q,op){
        if(op=="+"){
            return p+q;
        }else if(op=="-"){
            return p-q;
        }else{
            return p*q;
        }
    }

    return(
        <>
        <h1>{name}</h1>
        <h2>{a+b+c}</h2>
        {fruit()}
        <h4>{sum(32,23,"-")}</h4>
        <h3>{sum(32,56)}</h3>
        <h1>{userobj.school}</h1>
        <input type="text" value={name} id={userobj.roll}/>
        <img src={path} />

        </>
    )
}
export default Practice;
