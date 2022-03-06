 var first =  function(array, n) {
    if (array == null) 
        return void 0;
    if (n == null) 
        return array[0];
      if (n < 0)
        return [];
      return array.slice(0, n);
     };
    
     console.log(first([4, 6, 2, -2]));
     console.log(first([],3));
     console.log(first([4, 6, 2, -2],3));
     console.log(first([4, 6, 2, -2],6));
     console.log(first([4, 6, 2, -2],-3));
     console.log(first([23, 5123, 21523467, 2345643, 643265, 75234, 65432], 6));