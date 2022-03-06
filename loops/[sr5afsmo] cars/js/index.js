var cars = ['Renault', 'Peugeot', 'Mazda', 'Mercedes', 'Yugo', 'Honda']


function showCars() {
    cars.forEach(function(el){
      document.getElementById('result').innerHTML+='<br>' + el;
    })
  }
  
showCars()
