
function writeCards(Array,surprise) {
    const newArray=[];
  for (let i = 0; i < Array.length; i++) {
    newArray.push(`Thank you, ${Array[i]}, for the wonderful ${surprise} gift!`);
  }
  return newArray;
}
function countDown(number)
{
    while(number>=0)
    {
        console.log(number)
        number--;
    }
}

writeCards(["Guadalupe","Ollie","Aki"], "surprise");
countDown(4)