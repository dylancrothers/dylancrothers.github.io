function handleSubmit(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;
    const formMessage = document.getElementById('form-message');
    
    formMessage.innerHTML = `Thank you, ${name}! Your message has been received: "${message}"`;
}

document.getElementById("toggleDarkMode").addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
  });
  