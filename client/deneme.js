import { NotFound } from "./notFound.js";



export function deneme(element) {


  const style=document.createElement('style');
  document.head.append(style);
  style.innerHTML=`#app{background:linear-gradient(135deg, rgba(36, 46, 77, 0.9), rgb(181 172 168 / 90%))}`

  const html = `
  <div>
    <div class="d-flex justify-content-center align-items-center mt-5">

        <div class="card" style="padding: 2em;
        position: relative;
        background: rgba(0, 0, 0, 0.15);">
          <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li class="nav-item text-center">
              <a class="nav-link active btl" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Login</a>
            </li>
            <li class="nav-item text-center">
              <a class="nav-link btr" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Signup</a>
            </li>
          </ul>
          <div class="tab-content" id="pills-tabContent">
            <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
              
            <form class='login-hey'>
            <div class="flex-row">
              <label class="lf--label m-0" for="username">
                <svg x="0px" y="0px" width="12px" height="13px">
                  <path fill="#B1B7C4" d="M8.9,7.2C9,6.9,9,6.7,9,6.5v-4C9,1.1,7.9,0,6.5,0h-1C4.1,0,3,1.1,3,2.5v4c0,0.2,0,0.4,0.1,0.7 C1.3,7.8,0,9.5,0,11.5V13h12v-1.5C12,9.5,10.7,7.8,8.9,7.2z M4,2.5C4,1.7,4.7,1,5.5,1h1C7.3,1,8,1.7,8,2.5v4c0,0.2,0,0.4-0.1,0.6 l0.1,0L7.9,7.3C7.6,7.8,7.1,8.2,6.5,8.2h-1c-0.6,0-1.1-0.4-1.4-0.9L4.1,7.1l0.1,0C4,6.9,4,6.7,4,6.5V2.5z M11,12H1v-0.5 c0-1.6,1-2.9,2.4-3.4c0.5,0.7,1.2,1.1,2.1,1.1h1c0.8,0,1.6-0.4,2.1-1.1C10,8.5,11,9.9,11,11.5V12z"/>
                </svg>
              </label>
              <input id="email-login"  name="email" class='lf--input' placeholder='email' type='email'>
            </div>
            <div class="flex-row">
              <label class="lf--label m-0" for="password">
                <svg x="0px" y="0px" width="15px" height="5px">
                  <g>
                    <path fill="#B1B7C4" d="M6,2L6,2c0-1.1-1-2-2.1-2H2.1C1,0,0,0.9,0,2.1v0.8C0,4.1,1,5,2.1,5h1.7C5,5,6,4.1,6,2.9V3h5v1h1V3h1v2h1V3h1 V2H6z M5.1,2.9c0,0.7-0.6,1.2-1.3,1.2H2.1c-0.7,0-1.3-0.6-1.3-1.2V2.1c0-0.7,0.6-1.2,1.3-1.2h1.7c0.7,0,1.3,0.6,1.3,1.2V2.9z"/>
                  </g>
                </svg>
              </label>
              <input id="password-login" name="password" class='lf--input' placeholder='Password' type='password'>
            </div>
             <button type="submit" class="lf--submit">Signup</button>
          </form>
            </div>
            <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
            <form class='hey'>
               <div class="flex-row">
              <label class="lf--label m-0" for="username">
                <svg x="0px" y="0px" width="12px" height="13px">
                  <path fill="#B1B7C4" d="M8.9,7.2C9,6.9,9,6.7,9,6.5v-4C9,1.1,7.9,0,6.5,0h-1C4.1,0,3,1.1,3,2.5v4c0,0.2,0,0.4,0.1,0.7 C1.3,7.8,0,9.5,0,11.5V13h12v-1.5C12,9.5,10.7,7.8,8.9,7.2z M4,2.5C4,1.7,4.7,1,5.5,1h1C7.3,1,8,1.7,8,2.5v4c0,0.2,0,0.4-0.1,0.6 l0.1,0L7.9,7.3C7.6,7.8,7.1,8.2,6.5,8.2h-1c-0.6,0-1.1-0.4-1.4-0.9L4.1,7.1l0.1,0C4,6.9,4,6.7,4,6.5V2.5z M11,12H1v-0.5 c0-1.6,1-2.9,2.4-3.4c0.5,0.7,1.2,1.1,2.1,1.1h1c0.8,0,1.6-0.4,2.1-1.1C10,8.5,11,9.9,11,11.5V12z"/>
                </svg>
              </label>
              <input id="username" name="username"  class='lf--input' placeholder='email' type='text'>
            </div>
            <div class="flex-row">
              <label class="lf--label m-0" for="email">
                <svg x="0px" y="0px" width="12px" height="13px">
                  <path fill="#B1B7C4" d="M8.9,7.2C9,6.9,9,6.7,9,6.5v-4C9,1.1,7.9,0,6.5,0h-1C4.1,0,3,1.1,3,2.5v4c0,0.2,0,0.4,0.1,0.7 C1.3,7.8,0,9.5,0,11.5V13h12v-1.5C12,9.5,10.7,7.8,8.9,7.2z M4,2.5C4,1.7,4.7,1,5.5,1h1C7.3,1,8,1.7,8,2.5v4c0,0.2,0,0.4-0.1,0.6 l0.1,0L7.9,7.3C7.6,7.8,7.1,8.2,6.5,8.2h-1c-0.6,0-1.1-0.4-1.4-0.9L4.1,7.1l0.1,0C4,6.9,4,6.7,4,6.5V2.5z M11,12H1v-0.5 c0-1.6,1-2.9,2.4-3.4c0.5,0.7,1.2,1.1,2.1,1.1h1c0.8,0,1.6-0.4,2.1-1.1C10,8.5,11,9.9,11,11.5V12z"/>
                </svg>
              </label>
              <input id="email"  name="email" class='lf--input' placeholder='email' type='email'>
            </div>
            <div class="flex-row">
              <label class="lf--label m-0" for="password">
                <svg x="0px" y="0px" width="15px" height="5px">
                  <g>
                    <path fill="#B1B7C4" d="M6,2L6,2c0-1.1-1-2-2.1-2H2.1C1,0,0,0.9,0,2.1v0.8C0,4.1,1,5,2.1,5h1.7C5,5,6,4.1,6,2.9V3h5v1h1V3h1v2h1V3h1 V2H6z M5.1,2.9c0,0.7-0.6,1.2-1.3,1.2H2.1c-0.7,0-1.3-0.6-1.3-1.2V2.1c0-0.7,0.6-1.2,1.3-1.2h1.7c0.7,0,1.3,0.6,1.3,1.2V2.9z"/>
                  </g>
                </svg>
              </label>
              <input id="password" name="password" class='lf--input' placeholder='Password' type='password'>
            </div>
             <button type="submit" class="lf--submit">Signup</button>
          </form>
            </div>
          </div>
        </div>
      
    </div>
    </div>
  `;


  element.innerHTML = html;

  const form = document.querySelector('form.hey');
  if(form){

    form.addEventListener('submit', handleSubmit);
  
    async function handleSubmit(event) {
      event.preventDefault();
 
  
      const username = document.querySelector('#username').value;
      const email = document.querySelector('#email').value;
      const password = document.querySelector('#password').value;
      console.log(username);
  
      // burada kayıt işlemini gerçekleştirin
      console.log(`Registered user: ${username}, password: ${password}`);
      
      try {

        const response = await fetch('https://server-w6wp.onrender.com/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username:username,
            email:email,
            password:password
          })
        });
        const data=await response.json()
        if(data.status === 'OK'){
          const user =data.user
          const token = data.token;
          console.log(data)
          
          window.location.href='/myaccount'

        }else {
          console.error(data.msg);

          window.location.href='/fegister'
        }
        
        console.log(response.ok)
       
        
      } catch (error) {
        console.log("hata",error)
      }
     
    }
    
  }
 


  const formlogin = document.querySelector('form.login-hey');
  if(formlogin){

    formlogin.addEventListener('submit', handleSubmitLogin);
    console.log(formlogin);
  
    async function handleSubmitLogin(event) {
      event.preventDefault();
 
  
      //const username = document.querySelector('#username-login').value;
      const password = document.querySelector('#password-login').value;
      const email = document.querySelector('#email-login').value;


  
      // burada kayıt işlemini gerçekleştirin
      console.log(`Registered user: ${username}, password: ${password}`);
      
      try {

        const response = await fetch('https://server-w6wp.onrender.com/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email,
            password
          })
        })
        const data=await response.json()
        if(data.status === 'OK'){
          const user =data.user
          const token = data.token;
          console.log(data)
          localStorage.setItem('name', JSON.stringify(user));
          localStorage.setItem('auth', JSON.stringify(token));

          window.location.href='/myaccount'

        }else {
          console.error(data.msg);

          window.location.href='/fegister'
        }
       
        
        
        
        
      } catch (error) {
        console.log("hata",error)
      }
     
    }
    
  }
 
}