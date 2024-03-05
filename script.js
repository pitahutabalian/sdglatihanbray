// // alert("hallo")
// let name = [];
// console.log(typeof nama);

// const phi = 3.14;
// console.log(phi);

// let ipk = 4.0;

// console.log(ipk);
// let isSuccess = true;
// console.log(isSuccess);

// let fakultas = ["Fakultas Ilmu Komputer", "Fakultas Hukum", "Fakultas Teknik"];
// console.log(fakultas[1]);
// const hukum = fakultas[1];
// console.log(hukum);

// const [fakul1, fakul2, fakul3] = fakultas;
// console.log(fakul3);
// fakultas.push("Fakultas Kedokteran");
// console.log(fakultas);
// fakultas.pop();
// console.log(fakultas);
// fakultas.shift();
// console.log(fakultas);
// fakultas.unshift(2);
// fakultas.unshift(true);
// console.log(fakultas);


// let results = 18 < 2;
// console.log(results);
// let namaDepan = "Pita"
// let namaBelakang = " Hutabalian"
// let fullName = namaDepan + namaBelakang
// console.log(fullName)


// let male = ["Budi","Ujang","Joko", "Dedi"];
// let female = ["Lili", "Ririn", "Susi", "Siti"];
// let students = [...male,...female];
// console.log(students);

// let orang = {
//     "nama":"Pita",
//     "Kelas":4,
//     "NPM":2210631170142
// }
// console.log(orang.nama)
// console.log(orang["kelas"])

// let Nilai;
// Nilai = "100"
// Nilai = +Nilai
// console.log(typeof(Nilai))
// if(Nilai === 100) {
//     console.log("Sempurna")
// }

// let Nomor = [1,2,3,4,5]
// for(let i of Nomor) {
//     console.log(i)
// }

// const nama = Nomor.forEach.Each()
// console.log(nama)

// function nama(){
//     console.log("Hallo World")
// }
// nama()

// const hallo = () =>{
//     console.log("Hallo World")
// }
// hallo()

// const urutan = (...nomor) =>{
//     console.log(...nomor)
// }
// urutan(1,2,3,4,5,6,7,8)

function average(...index){
    let sum = index.legth
    let result = 0
    for(const i of index) {
        result += i
    }
    return result/sum
};


console.log("rata ratanya adalah 5 " + average(2,3,4,5,6,7,8))

const Iyah = () => "Iyahhh dongg"
const penambahan = (number1,number2)=>{
    return number1 + number2
}
const pengurangan = (number1,number2)=>number1-number2
let result = penambahan(10,20) 
let result2 = pengurangan(15,5)
console.log(result2)
console.log(result)