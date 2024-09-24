// donation button tab
// document.getElementById('donation-tab').addEventListener('click', function(){
//     const main = document.getElementById('main');
//     main.classList.remove('hidden');
// })

// add money in the main section

// noakhali part

document.getElementById('donate-btn-noakhali').addEventListener('click', function(){
    const valueNoakhali = document.getElementById('donate-noakhali').value;
    if (valueNoakhali <= 0 || isNaN(valueNoakhali)){
        alert ('invalid input');
        return;
    }

    const donateNoakhali = parseFloat(valueNoakhali);
    const balanceNoakhali = parseFloat(document.getElementById('balance-noakhali').innerText);
    const myCurrentBalance = parseFloat(document.getElementById('my-current-balance').innerText);

   const newBalanceNoakhali = donateNoakhali + balanceNoakhali;

   const newCurrentBalance = myCurrentBalance - donateNoakhali;

   if(newCurrentBalance<0){
    alert('balance cant be negative');
    return;
   }
   if( newBalanceNoakhali < donateNoakhali){
    alert('invalid input');
    return;
   }
   else {
    my_modal_4.showModal()
   }
   

   document.getElementById('balance-noakhali').innerText = newBalanceNoakhali;
   document.getElementById('my-current-balance').innerText = newCurrentBalance;
})

// feni part

document.getElementById('donate-btn-feni').addEventListener('click', function(){
    const valueFeni = document.getElementById('donate-feni').value;
    if (valueFeni <= 0 || isNaN(valueFeni)){
        alert ('invalid input');
        return;
    }

    const donateFeni = parseFloat(valueFeni);
    const balanceFeni = parseFloat(document.getElementById('balance-feni').innerText);
    const myCurrentBalance = parseFloat(document.getElementById('my-current-balance').innerText);

   const newBalanceFeni = donateFeni + balanceFeni;

   const newCurrentBalance = myCurrentBalance - donateFeni;
   
   if(newCurrentBalance<0){
    alert('balance cant be negative');
    return;
   }
   if( newBalanceFeni < donateFeni){
    alert('invalid input');
    return;
   }
   else {
    my_modal_6.showModal()
   }

   document.getElementById('balance-feni').innerText = newBalanceFeni;
   document.getElementById('my-current-balance').innerText = newCurrentBalance;
})

// quota part 

document.getElementById('donate-btn-qouta').addEventListener('click', function(){
    const valueQouta = document.getElementById('donate-qouta').value;
    if (valueQouta <= 0 || isNaN(valueQouta)){
        alert ('invalid input');
        return;
    }

    const donateQouta = parseFloat(valueQouta);
    const balanceQouta = parseFloat(document.getElementById('balance-qouta').innerText);
    const myCurrentBalance = parseFloat(document.getElementById('my-current-balance').innerText);

   const newBalanceQouta = donateQouta + balanceQouta;

   const newCurrentBalance = myCurrentBalance - donateQouta;
   
   if(newCurrentBalance<0){
    alert('balance cant be negative');
    return;
   }
   if( newBalanceQouta < donateQouta){
    alert('invalid input');
    return;
   }
   else {
    my_modal_5.showModal()
   }

   document.getElementById('balance-qouta').innerText = newBalanceQouta;
   document.getElementById('my-current-balance').innerText = newCurrentBalance;
})


// document.getElementById('donate-btn-qouta').addEventListener('click', function(){
//     const valueQuota = document.getElementById('donate-qouta').value;
//     if (valueQouta <= 0 || isNaN(valueQouta)){
//         alert ('invalid input');
//         return;
//     }

//     const donateQouta = parseFloat(valueQouta);
//     const balanceQouta = parseFloat(document.getElementById('balance-qouta').innerText);
//     const myCurrentBalance = parseFloat(document.getElementById('my-current-balance').innerText);

//    const newBalanceQouta = donateQouta + balanceQouta;

//    const newCurrentBalance = myCurrentBalance - donateQouta;
   
//    if(newCurrentBalance<0){
//     alert('balance cant be negative');
//     return;
//    }
//    if( newBalanceQouta < donateQouta){
//     alert('invalid input');
//     return;
//    }
//    else {
//     my_modal_5.showModal()
//    }


//    document.getElementById('balance-qouta').innerText = newBalanceQouta;
//    document.getElementById('my-current-balance').innerText = newCurrentBalance;
// })


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
    document.getElementById('main').classList.add('hidden');
});