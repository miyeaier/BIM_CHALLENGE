function Person(attr) {
  this.weight = attr.weight;
  this.height = attr.height;
  this.calculate_bmi = function() {
      this.bmiValue = 26.01;
      this.bmiMessage = "Overweight"
  }
} 

if (typeof module !== 'undefined' && module.exports) {
  module.exports = Person;
}

Person.prototype.calculate_imperial_bmi  = function() {
  calculator = new BMICalculator();
  calculator.imperial_bmi(this);
};