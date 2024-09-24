// document.getElementById('donate-btn-noakhali').addEventListener('click', function (event) {
//     event.preventDefault

//     const donationNoakhali = getInputFieldValueById('donation-noakhali');
//     if(donationNoakhali === parseFloat){
//         const balanceNoakhali = getTextFieldValueById('balance-noakhali');
//         const newBalanceNoakhali = balanceNoakhali + donationNoakhali;
//         document.getElementById('balance-noakhali').innerText = newBalanceNoakhali;
        // alert('Failed to donate the money');
//     }
//     else{
//         alert('Failed to donate the money');
//         // const balanceNoakhali = getTextFieldValueById('balance-noakhali');
//         // const newBalanceNoakhali = balanceNoakhali + donationNoakhali;
//         // document.getElementById('balance-noakhali').innerText = newBalanceNoakhali;
//     }
// })

document.getElementById('donation-tab').addEventListener('click', function(){
    const main = document.getElementById('main');
    main.classList.remove('hidden');
})

// document.getElementById('donate-btn-noakhali').addEventListener('click', function(){
//     const donateNoakhali = document.getElementById('donate-input-noakhali');
// })