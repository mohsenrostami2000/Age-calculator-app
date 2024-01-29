// select items 

const days = document.getElementById('days');
const months = document.getElementById('months');
const years = document.getElementById('years');
const inputs = document.querySelectorAll("input");
const labels = document.querySelectorAll('label');
const header = document.querySelectorAll('h6');
const btn = document.querySelector('.btn');

window.addEventListener('DOMContentLoaded', ()=>{
checkValidation();
click();
})

function checkValidation(){
    // add blur event to inputs 
for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('blur', () => {
        const currentYear = new Date().getFullYear();
        
        if (inputs[i].value !== "") {
                hideError();

                if (inputs[i].id === 'year') {
                    
                    if (inputs[i].value < currentYear) {
                        
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
                                labels[0].innerText = "Must be a valid date";

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
            const regXStart = (/^[1-9]/);
                if (!regXStart.test(inputs[i].value)) {
                    inputs[i].value = inputs[i].value.replace(/0+/, "");
                }
                inputs[i].style.border = " 1px solid var(--Light-grey)";
                labels[i].style.display = "none";
                header[i].style.color = "var(--label-black)";
            };
            
            function showError() {
                inputs[i].value = "";
                inputs[i].style.border = " 1px solid var(--Light-red)";
                labels[i].style.display = "block";
                header[i].style.color = "var(--Light-red)";

            };
        
            
    })

}
}

function click(){
    // add event to btn
btn.addEventListener('click', () => {
    let day = document.getElementById('day');
    let month = document.getElementById('month');
    let year = document.getElementById('year');
    // define birthday ---------------------------------------
    const birthDay = `${month.value},${day.value},${year.value}`;
    
    let d1 = day.value;
    let m1 = month.value;
    let y1 = year.value;
    // define today's date -----------------------
    let today = new Date();
    
    let d2 = today.getDate();
    let m2 = today.getMonth() + 1;
    let y2 = today.getFullYear();
    // calculate age -----------------------
    let d3, m3, y3;

    y3 = y2 -y1;

    if(m2 > m1){
        m3 = m2 - m1
    }else{
        y3--;
        m3 = 12 + m2 - m1;
    }

    if(d2 > d1){
        d3 = d2 - d1;
    }else{
        m3--;
        d3 = getDaysInMonth(y1, m1) + d2 - d1;
    }
    
    function getDaysInMonth(year, month){
        return new Date(year, month, 0).getDate();
    }

    // show age ----------------------
    if(day.value, month.value, year.value === ""){
        alert('plese fill all inputs');
        year.style.border = "2px solid var(--Light-red)"
        month.style.border = "2px solid var(--Light-red)"
        day.style.border = "2px solid var(--Light-red)" 
        
    }else{
        years.innerText = y3;
        months.innerText = m3;
        days.innerText = d3;

        if(month.value == 4 && day.value == 31){
            
            years.innerText = `--`;
            months.innerText = `--`;
            days.innerText = `--`;
            
        } 
    }     
});
}
