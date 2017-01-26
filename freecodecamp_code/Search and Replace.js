function myReplace(str,before,after) {
        var reg = new RegExp(""+before);
        if(/[A-Z]/.test(before[0])) {
            after = after[0].toUpperCase()+after.slice(1);
        }
        str = str.replace(reg,after);
        return str;
    }
