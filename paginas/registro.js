document.getElementById("registroForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let usuario = document.getElementById("usuario").value;
    let password = document.getElementById("password").value;

    // Comprueba si ya existe un usuario con el mismo nombre.
    if (localStorage.getItem(usuario)) {
        alert("El usuario ya existe. Por favor, elige otro nombre de usuario.");
    } else {
        // Almacena el usuario y la contraseña en localStorage.
        localStorage.setItem(usuario, password);
        alert("Usuario registrado con éxito");
        document.getElementById("registroForm").reset();
    }
});
