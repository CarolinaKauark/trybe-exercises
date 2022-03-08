const angA = 50;
const angB = -50;
const angC = 50;

if(angA < 0 || angB < 0 || angC < 0){
    console.log("Pelo menos um dos ângulos é inválido")
}else{
    if(angA+angB+angC === 180){
        console.log(true);
    }else{
        console.log(false);
    }
}