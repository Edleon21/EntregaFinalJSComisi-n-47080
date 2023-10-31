document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let usuario = document.getElementById("usuario").value;
    let password = document.getElementById("password").value;

    // Comprueba si el usuario existe en localStorage y si la contraseña coincide.
    if (localStorage.getItem(usuario) === password) {
        alert("Inicio de sesión exitoso");
    } else {
        alert("Usuario o contraseña incorrectos");
    }
    document.getElementById("loginForm").reset();
    location.href = "../index.html"
});


