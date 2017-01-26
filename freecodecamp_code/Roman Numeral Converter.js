function convert(num) {

    if(num<=0) {
        console.log("can not be negative or zero");
    }

    if(/\d*\.\d*/.test(num)) {
        console.log("can not be float");
    }
    var number;
    function belongTo1(number) {
                
        switch(number){
            case 1:
            number = "I";
            break;
            case 2:
            number = "II";
            break;
            case 3:
            number = "III";
            break;
            case 4:
            number = "IV";
            break;
            case 5:
            number = "V";
            break;
            case 6:
            number = "VI";
            break;
            case 7:
            number = "VII";
            break;
            case 8:
            number = "VIII";
            break;
            case 9:
            number = "IX";
            break;
            default:
            number = "";
         }
       
       return number;
    }

    function belongTo2(number) {
                
        switch(number){
            case 1:
            number = "X";
            break;
            case 2:
            number = "XX";
            break;
            case 3:
            number = "XXX";
            break;
            case 4:
            number = "XL";
            break;
            case 5:
            number = "L";
            break;
            case 6:
            number = "LX";
            break;
            case 7:
            number = "LXX";
            break;
            case 8:
            number = "LXXX";
            break;
            case 9:
            number = "XC";
            break;
            default:
            number = "";
         }
       
       return number;
    }

    function belongTo3(number) {
                
        switch(number){
            case 1:
            number = "C";
            break;
            case 2:
            number = "CC";
            break;
            case 3:
            number = "CCC";
            break;
            case 4:
            number = "CD";
            break;
            case 5:
            number = "D";
            break;
            case 6:
            number = "DC";
            break;
            case 7:
            number = "DCC";
            break;
            case 8:
            number = "DCCC";
            break;
            case 9:
            number = "CM";
            break;
            default:
            number = "";
         }
       
       return number;
    }

    function belongTo4(number) {
                
        switch(number){
            case 1:
            number = "M";
            break;
            case 2:
            number = "MM";
            break;
            case 3:
            number = "MMM";
            break;
            case 4:
            number = "MMMM";
            break;
            case 5:
            number = "MMMMM";
            break;
            case 6:
            number = "MMMMMM";
            break;
            case 7:
            number = "MMMMMMM";
            break;
            case 8:
            number = "MMMMMMMM";
            break;
            case 9:
            number = "MMMMMMMMM";
            break;
            default:
            number = "";
         }
       
       return number;
    }

    if(num>=1&&num<=9) {
        number = num;
        num = belongTo1(number);
    }

    if(num>=10&&num<=99) {        
        number = num%10;
        num = belongTo2(Math.floor(num/10))+belongTo1(number);
      
    }

    if(num>=100&&num<=999) {
        number = num%10;
        num = belongTo3(Math.floor(num/100))+belongTo2(Math.floor(num/10)%10)+belongTo1(number);
    }

    if(num>=1000&&num<=9999) {
        number = num%10;
        num = belongTo4(Math.floor(num/1000))+belongTo3(Math.floor(num/100)%10)+belongTo2(Math.floor(num/10)%10)+belongTo1(number);
    } 

    if(num>=10000) {
        console.log("too large");
    }
 return num;
}
