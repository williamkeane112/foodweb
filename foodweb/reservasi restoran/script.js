function but() {
  alert("Selamat! Reservasi telah berhasil dilakukan!");



  

  let a1 = document.getElementById("nama").value;
  let a2 = document.getElementById("no_hp").value;
  let a3 = document.getElementById("tgg").value;
  let a4 = document.getElementById("jumlah").value;


  document.getElementById("h1").innerHTML = "NAMA =" + a1;
  document.getElementById("h2").innerHTML = "NO HP =" + a2;
  document.getElementById("h3").innerHTML = "TANGGAL RESERVASI =" + a3;
  document.getElementById("h4").innerHTML = "JUMLAH ORANG =" + a4;

  if(document.getElementById("waktu1").checked){
    let a5 =document.getElementById("waktu1").value;
    document.getElementById("h5").innerHTML ="WAKTU =" + a5;
}

  if(document.getElementById("waktu3").checked){
    let a7 =document.getElementById("waktu3").value;
    document.getElementById("h5").innerHTML ="WAKTU =" + a7;
}
  if(document.getElementById("waktu2").checked){
    let a6 =document.getElementById("waktu2").value;
    document.getElementById("h5").innerHTML ="WAKTU =" + a6;
}


}
