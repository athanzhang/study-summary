    function translate(str) {
        //to clarify that this function only supports lower case
        str = str.toLowerCase();
        //define regular expression
        var exp1 = /^[aeiou]/;
        var exp2 = /^([^aeiou]+)([aeiou])/;
        
        if(exp1.test(str[0])) {
            str = str + "way";
        }
        if(exp2.test(str)) {
            len = exp2.exec(str)[1].length;
            str = str.slice(len) + exp2.exec(str)[1] + "ay";
        }
        return str;
    }
