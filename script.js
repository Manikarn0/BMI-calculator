let form = document.querySelector ('form');
form.addEventListener('submit', function(e){
    e.preventDefault();
    let height = document.querySelector('#meters').value;
    const weight = document.querySelector('#kilograms').value;
    const bmi = document.querySelector('#bmi');
    const message = document.querySelector('#message');
    const feet = document.querySelector('#feet').value;
    const inches = document.querySelector('#inches').value;

    if (height==='' || height<0 || isNaN(height)){
        if (feet==='' || feet<0 || isNaN(feet)) {
            bmi.innerHTML = 'Please enter a valid number';
        }else{
            const meters = feet*0.3048 + inches*0.0254;
            const bmiValue = (weight / (meters * meters)).toFixed(2);
            bmi.innerHTML = bmiValue;
            if (bmiValue < 18.5){   
                message.innerHTML = 'You are Underweight weight';
            }else if(bmiValue < 25){
                message.innerHTML = 'You are Normal weight';
            }else if(bmiValue < 30){
                message.innerHTML = 'You are Overweight weight';
            }
        }

    }else if(weight==='' || weight<0 || isNaN(weight)){
        bmi.innerHTML = 'Please enter a valid number';

    } 
    else {
        const bmiValue = (weight / (height * height)).toFixed(2);
        bmi.innerHTML = bmiValue;
    if (bmiValue < 18.5){   
            message.innerHTML = 'You are Underweight weight';
        }else if(bmiValue < 25){
            message.innerHTML = 'You are Normal weight';
        }else if(bmiValue < 30){
            message.innerHTML = 'You are Overweight weight';
        }
    } 
})
