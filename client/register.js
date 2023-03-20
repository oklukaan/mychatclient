const form = document.querySelector('form');
form.addEventListener('submit', handleSubmit);

async function handleSubmit(event) {
  event.preventDefault();

  const username = document.querySelector('#username').value;
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;

  // burada kayıt işlemini gerçekleştirin
  console.log(`Registered user: ${username}, password: ${password}`);

  const response = await fetch('https://localhost:500/register', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        username:username,
        email:email,
        password:password
    })
})
}