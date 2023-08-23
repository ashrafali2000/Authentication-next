import Form from "@/components/form";

export default function signUp(){
 
const onSignUp = async(email, password, fullName) => {
   const res = await fetch('/api/auth/signup', {
    method: "POST",
    body: JSON.stringify({email, password, fullName}),
    headers:{
        "Content-Type" : "application/json",
    }
   })
   const data = await res.json();
   if(!res.ok) {
    console.error(data.message);
    return;
   }
   alert("Sign up Successfull")
}

    return(<div>
        <Form onFormSubmit={onSignUp} />
    </div>)
}