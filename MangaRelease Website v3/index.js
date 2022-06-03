function handleSubmit () {
    const name = document.getElementById('name').value;

    // to set into local storage
    /* localStorage.setItem("NAME", name);
    localStorage.setItem("SURNAME", surname); */
    
    sessionStorage.setItem("NAME", name);


    return;

function setCookie(cname,) {
    let expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
  }