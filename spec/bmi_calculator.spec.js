
// src/js/bmi_calculator.js
function BMICalculator(){

  BMICalculator.prototype.metric_bmi = function(obj) {
    let weight = obj.weight;
    let height = obj.height;
    if (weight > 0 && height > 0) {
      var finalBmi = weight / (height / 100 * height / 100);
      obj.bmiValue =  parseFloat(finalBmi.toFixed(2));// 意思是取小数点后面取两位
     setBMIMessage(obj);
    }
  };

  function setBMIMessage (obj){
    if (obj.bmiValue < 18.5) {
      obj.bmiMessage = "Underweight"
    }
    if (obj.bmiValue > 18.5 && obj.bmiValue < 25) {
      obj.bmiMessage = "Healthy"
    }
    if (obj.bmiValue > 25 && obj.bmiValue < 30) {
      obj.bmiMessage = "Overweight"
    }
    if (obj.bmiValue > 30) {
      obj.bmiMessage = "Obese"
    }
  }
};

const calculateBMI = () => {
  var method = global.methodSelector.options[global.methodSelector.selectedIndex].value
  // finds value for the method
  return new Promise(resolve => {

      let weightFormat = method === 'metric' ? 'weight-in-kgs' : 'weight-in-lbs'
      let heightFormat = method === 'metric' ? 'height-in-cm' : 'height-in-in'

      let w = parseFloat(document.getElementById(weightFormat).value);
      let h = parseFloat(document.getElementById(heightFormat).value);

      let person = new Person({
          weight: w,
          height: h,
      });

      method === 'metric' ? person.calculate_bmi() : person.calculate_imperial_bmi();
      resolve(person);
  })
};