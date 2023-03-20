
export  function token(){

    const token=JSON.parse(localStorage.getItem('auth'))
    return token;

}

export function name(){

    const name =JSON.parse(localStorage.getItem('name'))
    return name;

}
 


