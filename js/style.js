let a = 10;
let b = 20;
console.log(a + b);

var num1 = 5;
var num2 = 10;

if (num1>num2) {
    console.log("true");
}else{
    console.log("false");
}


let j = 2
for (let i = 0; i <= 10; i++) {
    if (j > 0) {
        console.log("Ok");
    }
    j = 5-(j*2)
}

let namaPengguna = prompt("Silakan masukkan nama Anda:");
    if (namaPengguna) {
    document.getElementById("sambutan").textContent = "Hi " + namaPengguna + " Welcome To My Website";
    } else {
    document.getElementById("sambutan").textContent = "Hi, selamat datang!";
}

function tampilkanData() {
    let nama = document.getElementById("nama").value;
    let tanggal = document.getElementById("tanggal").value;
    let pesan = document.getElementById("pesan").value;
    let gender = document.querySelector('input[name="gender"]:checked');
    if (nama === "" || tanggal === "" || pesan === "" || !gender) {
    alert("Harap isi semua data!");
    return;
    }
    document.getElementById("output").innerHTML =
    "Nama: " + nama + "<br>" +
    "Tanggal Lahir: " + tanggal + "<br>" +
    "Jenis Kelamin: " + gender.value + "<br>" +
    "Pesan: " + pesan;
}