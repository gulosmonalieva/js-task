/*Интернет-магазин занимается продажей различных сувениров и безделушек. Каждый сувенир весит 75 г, а безделушка – 112 г. Напишите программу, запрашивающую у пользователя количество тех и других покупок, после чего выведите на экран общий вес посылки.*/
let souvenirWeight = 75;
let trinketsWeight = 112;

let souvenir = Number(prompt("how many souvenirs did you buy"));
let trinkets = Number(prompt("how many trinkets did you buy"));

let result = souvenir * souvenirWeight + trinkets * trinketsWeight;
console.log("total weight :" + result + "g");
