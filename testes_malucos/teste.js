sum = 0;
lista = [20,8,32,40,35,11,43,11,32,-16];
index = 0;
while( lista[index] >= 0){
    sum+=lista[index];
    if(sum >= 100){
        sum = 0;
    }
    index++;
}
console.log(sum)