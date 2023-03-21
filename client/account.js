import { header } from "./header.js";
import { token,name } from './hooks/token.js';

export function account(element,hea){

    
    const myname=name()
    const html=`
    <div class="account">
        <h1>Hello this is account page</h1>

         <p>Welcome ${(myname && myname.username ? myname.username : '' )} how are you</p>
         <p>You can try new we works job if you want to more information click</p>
         <form class="update-wpdata">

            <input type="text" name="wpdata" id="wpdata"/>İnput data<br>
            <button type="submit" class="bg-danger">Update</button>
         </form>
    </div>
    `;

    

    console.log(myname)

     element.innerHTML=html;
     header(hea);

     const style=document.createElement("style");

     document.head.append(style);
     style.innerHTML=`
     #app{background-color:#504d4d;}
     body{color:white;}
     `

     const fromUpdate = document.querySelector('.update-wpdata');

     if(fromUpdate){
         fromUpdate.addEventListener('submit', handleSubmitUpdate);
         async function handleSubmitUpdate(event) {
             event.preventDefault();
             const user_id=myname._id;
             const wpdata = document.querySelector('#wpdata').value;
 
             try {
 
                 const response=await fetch('https://server-w6wp.onrender.com/update',{
                     method: 'POST',
                     headers: {
                         'Content-Type': 'application/json',
                     },
                     body:JSON.stringify({
                         user_id,
                         wpdata,
                     })
 
                 });
                 const data =response.json();
                 if(data){
                     console.log('basarili bea');
                 }
                 
             } catch (error) {
                 console.log("hata",error)
             }
         
         }
     }
}