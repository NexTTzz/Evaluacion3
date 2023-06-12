function validarFormulario() {
    // Obtener los valores de los campos
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirm_password = document.getElementById("confirm_password").value;
    var address = document.getElementById("address").value;
    var city = document.getElementById("city").value;
    var phone = document.getElementById("phone").value;
    var website = document.getElementById("website").value;
    var hobbies = document.getElementById("hobbies").value;

    // Validar campos obligatorios
    if (email === '' || password === '' || confirm_password === '' || address === '' || city === '' || phone === '' || website === '' || hobbies === '') {
      alert("Todos los campos obligatorios deben ser completados.");
      return false;
    }

    // Validar formato del correo electrónico
    var emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
      alert("Formato de correo electrónico inválido.");
      return false;
    }

    // Validar formato de la URL del sitio web personal
    var websiteRegex = /^(ftp|http|https):\/\/[^ "]+$/;
    if (!websiteRegex.test(website)) {
      alert("Formato de URL del sitio web personal inválido.");
      return false;
    }

    // Validar formato del número de teléfono
    var phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
      alert("Formato de número de teléfono inválido. Debe contener 10 dígitos.");
      return false;
    }

    // Validar la contraseña
    var passwordRegex = /^(?=.*\d)(?=.*[a-zA-Z]).{3,6}$/;
    if (!passwordRegex.test(password)) {
      alert("La contraseña debe tener de 3 a 6 caracteres y al menos un dígito y una letra.");
      return false;
    }

    // Validar que la confirmación coincida con la contraseña
    if (password !== confirm_password) {
      alert("La confirmación de la contraseña no coincide.");
      return false;
    }

    // Validar el número mínimo de aficiones
    var hobbiesList = hobbies.split(",");
    if (hobbiesList.length < 2) {
      alert("Debes ingresar al menos 2 aficiones.");
      return false;
    }

    // Validar que se haya seleccionado una comuna
    var citySelect = document.getElementById("city");
    var selectedCity = citySelect.options[citySelect.selectedIndex].value;
    if (selectedCity === "") {
      alert("Debes seleccionar una comuna.");
      return false;
    }

    // Si todas las validaciones pasan, el formulario es válido
    return true;
  }
