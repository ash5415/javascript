// listen for submit

document.getElementById('loan-form').addEventListener('submit',calculateResults);

// calculate results

function calculateResults(e){
    console.log('calculating');
    
    // Ui vars
    const amount=document.getElementById('amount');
    const interest=document.getElementById('interest');
    const years= document.getElementById('years');
    const monthlyPayment=document.getElementById('monthly-payment');
    const totalPayment=document.getElementById('total-payment');
    const totalInterest=document.getElementById('total-interest');

    const principle=parseFloat(amount.value);
    const calculateInterest=parseFloat(interest.value) /100 / 12;
    const calculatePayments=parseFloat(years.value) * 12;

    // compute monthly payment
    const x= Math.pow(1+calculateInterest, calculatePayments);
    const monthly= (principle*x*calculateResults)/(x-1);

    if(isFinite(monthly)){
        monthlyPayment.value=monthly.toFixed(2);
        totalPayment.value=(monthly * calculatePayments).toFixed(2);
        totalInterest.value=((monthly * calculatePayments)-principle.toFixed(2));
    }else{
        console.log('please  check the your numbers');
    }
    e.preventDefault();
}