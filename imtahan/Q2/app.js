function swapCase(str) {
    let soz = ''
    for (let herf of str){
if(herf===herf.toUpperCase()){
    soz+= herf.toLowerCase()

}else{
    soz+=herf.toUpperCase()
}
    }
    return soz;
}

console.log(swapCase('aBcD'))
console.log(swapCase('jAvaScRIPt'))
console.log(swapCase('jeDAcAdemY'))