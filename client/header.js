import './header.css';
import { name } from './hooks/token.js';

export function header(element){

    
    const myname=name()
    element.innerHTML=`
 

<header>
<div class="inner">
    <div class="logo"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/123024/wwf-logo.png"></div>
    <div class="burger"></div>
    <nav>
        <a class="active" href="#">Home</a>
        <a href="/">About Us</a>
        <a href="#">Our Work</a>
        <a href="#">Get Involved</a>
    </nav>
    <a href="#" class="donate-link">Donate</a>

    
</div>

<div>
   <li href="#" class="donate-link header-aforce"><a href="#">${(myname && myname.username ? myname.username : '' )}</a></li>
    <div class="sub-menu">
   <a class="forcemya" href="#">About Us</a>
   <a class="forcemya" href="#">Our Work</a>
   <a class="forcemya" href="#">Get Involved</a>
   </div>
</div>

</header>

    `

  const header_aforce=document.querySelector('.header-aforce');
  const sub_menu=document.querySelector('.sub-menu')
  header_aforce.addEventListener('click',()=>{

    
    sub_menu.classList.toggle("d-block")
  })



}

