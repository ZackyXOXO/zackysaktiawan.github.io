let text; 
let person = prompt("Masukkan Nama Anda:", "");

if (person == null || person == ""){
    window.location.href= "https://zackyxoxo.github.io/zackysaktiawan.github.io/pages/404.html";
} else {
    text = "Aloowww " + person + " Selamat Datang ";
}
// console.log(text);
document.getElementById("greet").innerHTML = text;