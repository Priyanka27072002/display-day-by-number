var day=parseInt(prompt("Enter the day by number"))
switch(day){
    case 0:
        document.write("Sunday")
        break
    case 1:
        document.write("Monday")
        break
    case 2:
        document.write("Tuesday")
        break
    case 3:
        document.write("Wednesday")
        break
    case 4:
        document.write("Thuesday")
        break
    case 5:
        document.write("Friday")
        break
    case 6:
        document.write("Saturday")
        break
    default:
        document.write("Enter the day between 0 to 6")
}