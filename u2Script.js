let x = prompt("Please enter your number.");
x = Number(x)
y = Number(x)
//This outputs the number as binary
var digit1;
var digit2;
var digit3;
var digit4;
var digit5;
var digit6;
var digit7;
var digit8;
//subtract digits using base 2 numbers
if(x>=128)
{
    x-=128;
    digit1 = 1;
}
else
{
    digit1 = 0
}
if(x>=64)
{
    x-=64;
    digit2 = 1;
}
else
{
    digit2 = 0
}
if(x>=32)
{
    x-=32;
    digit3 = 1;   
}
else
{
    digit3 = 0
}
if(x>=16)
{
    x-=16;
    digit4 = 1;
}
else
{
    digit4 = 0
}
if(x>=8)
{
    x-=8;
    digit5 = 1;
}
else
{
    digit5 = 0
}
if(x>=4)
{
    x-=4;
    digit6 = 1;
}
else
{
    digit6 = 0
}
if(x>=2)
{
    x-=2;
    digit7 = 1;
}
else
{
    digit7 = 0
}
if(x>=1)
{
    x-=1;
    digit8 = 1;
}
else
{
    digit8 = 0
}
//This outputs the binary version
console.log(`The binary of ${y} is ${digit1}${digit2}${digit3}${digit4} ${digit5}${digit6}${digit7}${digit8}`)
//Program takes numbers 1, 2, 3, and 4, and uses these values and counters to properly form a hexidecimal.
let number1 = Math.floor(y/16);
let number2 = y%16;
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
console.log(`The hexadecimal of ${y} is ${number4}${number2}`)
