'use strict';

// Getting elements and values

const elementGenderSlider = document.getElementById('gender_slider');
const elementPhysicalActivitySlider = document.getElementById('physical_activity_slider');
const elementGoalSlider = document.getElementById('goal_slider');
const elementAgeNumber = document.getElementById('age_number');
const elementWeightNumber = document.getElementById('weight_number');
const elementHeightNumber = document.getElementById('height_number');

let gender = elementGenderSlider.value;
let physicalActivity = elementPhysicalActivitySlider.value;
let goal = elementGoalSlider.value;
let age = elementAgeNumber.value;
let weight = elementWeightNumber.value;
let height = elementHeightNumber.value;

// declarate vars

let calories,
proteins,
fat,
carbohydrates

// Result calculation

function calculateCalories(gender, physicalActivity, goal, age, weight, height) { // формула не закончена - нужно учесть физ. активность и цель
  let genderCoefficient;
  if (gender == 0) {
    genderCoefficient = 5;
  } else {
    genderCoefficient = -161;
  }
  let physicalActivityCoefficient;
  if (physicalActivity == 0) {
    physicalActivityCoefficient = 1.2;
  } else {
    if (physicalActivity == 1) {
      physicalActivityCoefficient = 1.375;
    } else {
      if (physicalActivity == 2) {
        physicalActivityCoefficient = 1.55;
      } else {
        if (physicalActivity == 3) {
          physicalActivityCoefficient = 1.725;
        } else {
          physicalActivityCoefficient = 1.9;
        }
      }
    }
  }

  let goalCoefficient;
  if (goal == 0) {
    goalCoefficient = 0.75;
  } else {
    if (goal == 1) {
      goalCoefficient = 0.875;
    } else {
      if (goal == 2) {
        goalCoefficient = 1;
      } else {
        if (goal == 3) {
          goalCoefficient = 1.125;
        } else {
          goalCoefficient = 1.25;
        }
      }
    }
  }

  calories = Math.round((10 * weight + 6.25 * height - 5 * age + genderCoefficient) * physicalActivityCoefficient * goalCoefficient);
  return calories;
}

function calculateProteins(gender, goal, calories) {
  let proteinsParts,
    totalParts;
  if (goal == 0 || goal == 1) {
    proteinsParts = 5;
    totalParts = 8;
  } else {
    if (goal == 2) {
      proteinsParts = 4;
      totalParts = 10;
    } else {
      if (goal == 3) {
        proteinsParts = 2;
        totalParts = 9;
      } else {
        if (gender == 0) {
          proteinsParts = 3;
          totalParts = 10;
        } else {
          proteinsParts = 2.2;
          totalParts = 8.7;
        }
      }
    }
  }
proteins = Math.round((calories / totalParts) * proteinsParts / 4);
return proteins;
}

function calculateFat(gender, goal, calories) {
  let fatParts,
    totalParts;
  if (goal == 0 || goal == 1) {
    fatParts = 1;
    totalParts = 8;
  } else {
    if (goal == 2) {
      fatParts = 2;
      totalParts = 10;
    } else {
      if (goal == 3) {
        fatParts = 2;
        totalParts = 9;
      } else {
        if (gender == 0) {
          fatParts = 2;
          totalParts = 10;
        } else {
          fatParts = 2;
          totalParts = 8.7;
        }
      }
    }
  }
fat = Math.round((calories / totalParts) * fatParts / 9);
return fat;
}

function calculateCarbohydrates(gender, goal, calories) {
  let carbohydratesParts,
    totalParts;
  if (goal == 0 || goal == 1) {
    carbohydratesParts = 2;
    totalParts = 8;
  } else {
    if (goal == 2) {
      carbohydratesParts = 4;
      totalParts = 10;
    } else {
      if (goal == 3) {
        carbohydratesParts = 5;
        totalParts = 9;
      } else {
        if (gender == 0) {
          carbohydratesParts = 5;
          totalParts = 10;
        } else {
          carbohydratesParts = 4.5;
          totalParts = 8.7;
        }
      }
    }
  }
carbohydrates = Math.round((calories / totalParts) * carbohydratesParts / 4);
return carbohydrates;
}

  calculateCalories(gender, physicalActivity, goal, age, weight, height);
  calculateProteins(gender, goal, calories);
  calculateFat(gender, goal, calories);
  calculateCarbohydrates(gender, goal, calories);

  // Checking vars

  console.log(elementGenderSlider, '-', gender);
  console.log(elementPhysicalActivitySlider, '-', physicalActivity);
  console.log(elementGoalSlider, '-', goal);
  console.log(elementAgeNumber, '-', age);
  console.log(elementWeightNumber, '-', weight);
  console.log(elementHeightNumber, '-', height);
  console.log(calories + ' Kсal');
  console.log(proteins + ' gr');
  console.log(fat + ' gr');
  console.log(carbohydrates + ' gr');