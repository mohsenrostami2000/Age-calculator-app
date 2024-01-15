// select items 

const days = document.getElementById('days');
const months = document.getElementById('months');
const years = document.getElementById('years');
const inputs = document.querySelectorAll("input");
const labels = document.querySelectorAll('label');
const header = document.querySelectorAll('h6');
const btn = document.querySelector('.btn');

// add event to btn -----------------------------

btn.addEventListener('click', () => {
    
    let currentDate = new Date().getFullYear()
    
    for (let i = 0; i < inputs.length; i++){
        
        if (inputs[i].value !== "") {
            hideError();

            if (inputs[i].id === 'year') {
                
                if (inputs[i].value < currentDate) {
                   
                    hideError();
                    if (inputs[i].value < 10) {
                        inputs[i].value = `000${inputs[i].value}`;
                    } else if (inputs[i].value < 100) {
                        inputs[i].value = `00${inputs[i].value}`;
                    } else if (inputs[i].value < 1000) {
                        inputs[i].value = `0${inputs[i].value}`;
                    }
                    if(inputs[i].value <= 0) {
                        showError();
                        labels[i].innerText = 'must be positive'
                    }

                    if (inputs[1].value == 4) {
                        if (inputs[0].value == 31) {
                            labels[0].style.display = "block"
                            inputs[0].style.border = " 1px solid var(--Light-red)";
                            inputs[1].style.border = " 1px solid var(--Light-red)";
                            inputs[2].style.border = " 1px solid var(--Light-red)";
                            header[0].style.color = " var(--Light-red)";
                            header[1].style.color = " var(--Light-red)";
                            header[2].style.color = " var(--Light-red)";
                            labels[0].innerText = "Must be a valid date"
                        }
                    } 


                } else {
                
                    showError();
                    labels[i].innerText = "Must be in the past"
                }
            } 
            
            if (inputs[i].id === 'month') {
                
                if (inputs[i].value > 0 && inputs[i].value <= 12) {
                    
                    hideError();

                    if (inputs[i].value < 10) {
                        inputs[i].value = `0${inputs[i].value}`;
                    }
   
                } else {
                    
                    showError();
                    labels[i].innerText = "Must be a valid month"
                }
            }

            if (inputs[i].id === "day") {
               
                if (inputs[i].value > 0 && inputs[i].value <= 31) {
                    
                    hideError();
                    if (inputs[i].value < 10) {
                        inputs[i].value = `0${inputs[i].value}`;
                    }
                } else {
                    
                    showError();
                    labels[i].innerText = "Must be a valid day"
                }
            }  
            
        } else {

            showError();
            
        }

        // ============= functions ================
        function hideError() {
            inputs[i].style.border = " 1px solid var(--Light-grey)";
            labels[i].style.display = "none";
            header[i].style.color = "var(--label-black)";
        };
        
        function showError() {
            inputs[i].style.border = " 1px solid var(--Light-red)";
            labels[i].style.display = "block";
            header[i].style.color = "var(--Light-red)";
        };
    } 
    
});

