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

// donation button tab
document.getElementById('donation-tab').addEventListener('click', function(){
    const main = document.getElementById('main');
    main.classList.remove('hidden');
})


// add money in the main section
document.getElementById('donate-btn-noakhali').addEventListener('click', function(){
    const donateNoakhali = parseFloat(document.getElementById('donate-noakhali').value);
    const balanceNoakhali = parseFloat(document.getElementById('balance-noakhali').innerText);
   const newBalanceNoakhali = donateNoakhali + balanceNoakhali;
   document.getElementById('balance-noakhali').innerText = newBalanceNoakhali;
   if(donateNoakhali <= 0 || isNaN(donateNoakhali) || newBalanceNoakhali < donateNoakhali){
    alert('invalid input');
    return;
   }
})


// history button tab 
const historyTab = document.getElementById('history-tab');
const donationTab = document.getElementById('donation-tab');
historyTab.addEventListener('click', function(){
    historyTab.classList.add(
        "bg-[rgba(180,244,97,1)]",
        "hover:bg-lime-400" ,
        "transition"
    );

    donationTab.classList.remove(
      "bg-[rgba(180,244,97,1)]",
      "hover:bg-lime-400",
      "transition"  
    );
})