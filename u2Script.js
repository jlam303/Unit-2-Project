let x = prompt("Please enter your number.");
x = Number(x)























































































//Program takes numbers 1, 2, 3, and 4, and uses these values and counters to properly form a hexidecimal.
let number1 = Math.floor(x/16);
let number2 = x%16;
let number3 = Math.floor(number1/16);
let number4 = number1%16;
let counter = 0;
//Converting the numbers into letters to fit base 16 inefficiently
while(number2 > 9)
{
    number2--;
    counter++;
    if(counter = 1)
    {
        number2 = "f";
    }
    else if(counter = 2)
    {
        number2 = "e";
    }
    else if(counter = 3)
    {
        number2 = "d";
    }
    else if(counter = 4)
    {
        number2 = "c";
    }
    else if(counter = 5)
    {
        number2 = "b";
    }
    else if(counter = 6)
    {
        number2 = "a";
    }
}
while(number4 > 9)
{
    number4--;
    counter++;
    if(counter = 1)
    {
        number4 = "f";
    }
    else if(counter = 2)
    {
        number4 = "e";
    }
    else if(counter = 3)
    {
        number4 = "d";
    }
    else if(counter = 4)
    {
        number4 = "c";
    }
    else if(counter = 5)
    {
        number4 = "b";
    }
    else if(counter = 6)
    {
        number4 = "a";
    }
}
//This outputs the hexidecimal version
console.log(`The hexadecimal of ${x} is ${number4}${number2}`)