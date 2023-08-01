/*
Buatlah sebuah program dari akar pangkat 2 dari x dengan x harus bilangan genap, dengan kondisi sebagai berikut :
- Jika user input angka kurang dari 0 , user get error message "Tidak bisa input bilangan negatif" 
- Jika user input angka ganjil, user get error message "Tidak bisa input bilangan ganjil"
*/
const prompt = require('prompt-sync')({sigint: true});

console.log("PROGRAM MENCARI AKAR KUADRAT")
const num = parseInt(prompt('Silahkan masukan sebuah angka: '));

if(parseInt(num) == num){
    if(num%2===0){
        result = Math.sqrt(num);
        console.log('akar pangkat 2 dari ',num, 'adalah ',result);
    }else if(num<0){
        console.log("Tidak bisa input bilangan negatif");
    }else{
        console.log("Tidak bisa input bilangan ganjil");
    }
}else{
    console.log("Tidak bisa input bukan angka");
}