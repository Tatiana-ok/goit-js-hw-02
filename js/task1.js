const getItemsString = function(array) {
    'use strict';
    // Write code under this line
    for (let i = 0; i < array.length; i += 1) {
      let result = '';
      result = `${array.length + 1} - ${array[i]}\n`;
    }
  };
  
  console.log(getItemsString(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']));