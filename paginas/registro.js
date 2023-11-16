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

/* document.getElementById("registroForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let usuario = document.getElementById("usuario").value;
    let password = document.getElementById("password").value;

    fetch('https://dev-4hmgxj32spzlzp4y.us.auth0.com/api/v2/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            client_id: 'tu-client-id',
            email: usuario,
            password: password,
            connection: 'Username-Password-Authentication',
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data._id) {
            // Almacena el usuario y la contraseña en localStorage.
            localStorage.setItem(usuario, password);
            alert("Usuario registrado con éxito");
            document.getElementById("registroForm").reset();
        } else {
            alert("Error al registrar usuario. Por favor, inténtalo de nuevo.");
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert("Error al conectar con el servidor. Por favor, inténtalo de nuevo.");
    });
});
 */