function where(collection, source) {
  var arr = [];
  function objCompare(obj1,obj2) {
      obj1Prop = Object.getOwnPropertyNames(obj1);
      obj2Prop = Object.getOwnPropertyNames(obj2);
      var result = false,len,k=0;
      //compare the two object,only consider the first one has more propeties than the second one
      if(obj1Prop.length>=obj2Prop.length) {

          len = obj2Prop.length;
          for(var i=0;i<len;i++) {
            for(var j=0;j<obj1Prop.length;j++) {
                
                if(obj1Prop[j] == obj2Prop[i]) {
                    if(obj1[obj1Prop[j]] == obj2[obj2Prop[i]]) {
                    k++;
                }
              }
            }  
            
         }
         if(k==obj2Prop.length) {
             result = true;
         }
         return result;
         
      }

            
           
      
  }
  
  var objCommon;  
  // What's in a name?
  for(var i=0;i<collection.length;i++) {
      obj = collection[i];
      if(objCompare(obj,source)) {
          objCommon = obj;
          arr.push(objCommon);
      }
  }
  return arr;
}
