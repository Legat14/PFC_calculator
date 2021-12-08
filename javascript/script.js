'use strict';

// Getting elements

const elementGenderSlider = document.getElementById('gender_slider'),
  elementPhysicalActivitySlider = document.getElementById('physical_activity_slider'),
  elementGoalSlider = document.getElementById('goal_slider'),
  elementAgeNumber = document.getElementById('age_number'),
  elementWeightNumber = document.getElementById('weight_number'),
  elementHeightNumber = document.getElementById('height_number'),
  elementCaloriesResult = document.getElementById('calories_result'),
  elementProteinsResult = document.getElementById('proteins_result'),
  elementFatResult = document.getElementById('fat_result'),
  elementCarbohydratesResult = document.getElementById('carbohydrates_result'),
  elementGenderValue = document.getElementById('gender_value'),
  elementPhylicalActivityValue = document.getElementById('physical_activity_value'),
  elementGoalValue = document.getElementById('goal_value');

// Getting buttons

const buttonAgePlus = document.getElementById('button_age+'),
  buttonAgeMinus = document.getElementById('button_age-'),
  buttonWeightPlus = document.getElementById('button_weight+'),
  buttonWeightMinus = document.getElementById('button_weight-'),
  buttonHeightPlus = document.getElementById('button_height+'),
  buttonHeightMinus = document.getElementById('button_height-');

// declarate vars

let calories,
  proteins,
  fat,
  carbohydrates,
  gender,
  physicalActivity,
  goal,
  age,
  weight,
  height;

function getInputedValues() {
  gender = elementGenderSlider.value;
  physicalActivity = elementPhysicalActivitySlider.value;
  goal = elementGoalSlider.value;
  age = elementAgeNumber.value;
  weight = elementWeightNumber.value;
  height = elementHeightNumber.value;
}

getInputedValues();

// Result calculation

function calculateCalories() {
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

function calculateProteins() {
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

function calculateFat() {
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

function calculateCarbohydrates() {
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

// Buttons functions

function increaseAge() {
  age++;
  elementAgeNumber.value = age;
  refreshAllElementValues();
}

function decreaseAge() {
  age--;
  elementAgeNumber.value = age;
  refreshAllElementValues();
}

function increaseWeight() {
  weight++;
  elementWeightNumber.value = weight;
  refreshAllElementValues();
}

function decreaseWeight() {
  weight--;
  elementWeightNumber.value = weight;
  refreshAllElementValues();
}

function increaseHeight() {
  height++;
  elementHeightNumber.value = height;
  refreshAllElementValues();
}

function decreaseHeight() {
  height--;
  elementHeightNumber.value = height;
  refreshAllElementValues();
}

// Slider values

function changeGenderValue() {
  if (gender == 0) {
    elementGenderValue.innerHTML = 'Male';
  } else {
    elementGenderValue.innerHTML = 'Female';
  }
}

function changePhysicalActivityValue() {
  if (physicalActivity == 0) {
    elementPhylicalActivityValue.innerHTML = 'None';
  } else {
    if (physicalActivity == 1) {
      elementPhylicalActivityValue.innerHTML = 'Low';
    } else {
      if (physicalActivity == 2) {
        elementPhylicalActivityValue.innerHTML = 'Average';
      } else {
        if (physicalActivity == 3) {
          elementPhylicalActivityValue.innerHTML = 'High';
        } else {
          elementPhylicalActivityValue.innerHTML = 'Very high';
        }
      }
    }
  }
}

function changeGoalValue() {
  if (goal == 0) {
    elementGoalValue.innerHTML = 'Lose weight fast';
  } else {
    if (goal == 1) {
      elementGoalValue.innerHTML = 'Lose weight slowly';
    } else {
      if (goal == 2) {
        elementGoalValue.innerHTML = 'Keep shape';
      } else {
        if (goal == 3) {
          elementGoalValue.innerHTML = 'Gain mass slowly';
        } else {
          elementGoalValue.innerHTML = 'Gain mass fast';
        }
      }
    }
  }
}

// Main functions

function calculateAllElementValues() {
  calculateCalories();
  calculateProteins();
  calculateFat();
  calculateCarbohydrates();
  changePhysicalActivityValue();
  changeGoalValue();
}

function outputAllElementValues() {
  elementCaloriesResult.innerHTML = calories;
  elementProteinsResult.innerHTML = proteins;
  elementFatResult.innerHTML = fat;
  elementCarbohydratesResult.innerHTML = carbohydrates;
}

function refreshAllElementValues() {
  getInputedValues();
  calculateAllElementValues();
  outputAllElementValues();
  changeGenderValue();
}

refreshAllElementValues();

// Event listeners

document.addEventListener('input', refreshAllElementValues);
buttonAgePlus.addEventListener('click', increaseAge);
buttonAgeMinus.addEventListener('click', decreaseAge);
buttonWeightPlus.addEventListener('click', increaseWeight);
buttonWeightMinus.addEventListener('click', decreaseWeight);
buttonHeightPlus.addEventListener('click', increaseHeight);
buttonHeightMinus.addEventListener('click', decreaseHeight);