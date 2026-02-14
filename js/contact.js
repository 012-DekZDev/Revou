const form = document.getElementById("contactForm");

form.addEventListener("submit", function(event){
    event.preventDefault(); // supaya tidak reload

    alert("Pesan sudah terkirim!");

    form.reset(); // kosongkan form setelah submit
});