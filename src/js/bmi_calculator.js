// src/js/bmi_calculator.js

function BMICalculator(){
  BMICalculator.prototype.metric_bmi = function(obj) {
    let weigh = obj.weigh;
    let heigh = obj.heigh;
    if(weight> 0 && height >0) {
    var finalBMI =weigt / (height / 100 * height /100);
    obj.bmiValue=parseFloat(finalBMI.toFixed(2));
      
      }
    };
  };
  
if (typeof module !=='undefined' && module.exports){
module.exports=BMICalculator;
}

BMICalculator.prototype.imperial_bmi = function(obj) {
  let weight = obj.weight;
  let height = obj.height;
  if (weight > 0 && height > 0) {
    let finalBmi = weight / (height * height) * 703;
        obj.bmiValue = parseFloat(finalBmi.toFixed(2));
        setBMIMessage(obj);
  }
};
