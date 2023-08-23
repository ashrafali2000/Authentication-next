export default function Profile ({name}) {
    return (<div>
        <div style={{
            display:"flex",
            justifyContent:"center",
            alignItems:"center"
        }}>
            <h1>{name} Profile Page</h1>
            <img style={{borderRadius:"50%", width:150,height:150}} src= "https://media2.giphy.com/media/mD4JnP3TyUSmwkFwpo/200w.webp?cid=ecf05e47kht97k4htkajjcdmdw772ax0iagecbydm2xglrjg&ep=v1_gifs_search&rid=200w.webp&ct=g"></img>
        </div>
    </div>)
}