//let x = prompt("Please enter your number.");
let x = 103
let y = x
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
