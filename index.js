// calculate

const display = document.getElementById("display")

function toCalculate(input)
{
    display.value += input;
    
}

function toEqual()
{
    display.value = eval(display.value)
}

function toClear()
{
    display.value = ""
}