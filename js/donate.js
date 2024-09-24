

// add money in the main section

// noakhali part

document.getElementById('donate-btn-noakhali').addEventListener('click', function(){
    
    const valueNoakhali = getInputFieldValueById('donate-noakhali');
    if (valueNoakhali <= 0 || isNaN(valueNoakhali)){
        alert ('invalid input');
        return;
    }

    const donateNoakhali = parseFloat(valueNoakhali);
    const balanceNoakhali = getTextFieldValueById('balance-noakhali');
    const myCurrentBalance = getTextFieldValueById('my-current-balance');

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

   const historyItem = document.createElement('div');
   historyItem.className = 'bg-white border-2 rounded-md mx-auto p-5 mb-5 mr-20 ml-20';
   historyItem.innerHTML = `

   <p class = "text-xl text-black">${donateNoakhali} Taka is Donated for famine-2024 at Noakhali, Bangladesh</p>
   <p class = "text-xl text-black">Date: ${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString()} GMT +0600 (Bangladesh Standard Time)</p>
   `;
   const historyContainer = document.getElementById('history-list');
   historyContainer.insertBefore(historyItem, historyContainer.firstChild)
})

// feni part

document.getElementById('donate-btn-feni').addEventListener('click', function(){
    const valueFeni = getInputFieldValueById('donate-feni');
    if (valueFeni <= 0 || isNaN(valueFeni)){
        alert ('invalid input');
        return;
    }

    const donateFeni = parseFloat(valueFeni);
    const balanceFeni = getTextFieldValueById('balance-feni');
    const myCurrentBalance = getTextFieldValueById('my-current-balance');

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


   const historyItem = document.createElement('div');
   historyItem.className = 'bg-white border-2 rounded-md mx-auto p-5 mb-5 mr-20 ml-20';
   historyItem.innerHTML = `

   <p class = "text-xl text-black">${donateFeni} Taka is Donated for famine-2024 at Feni, Bangladesh</p>
   <p class = "text-xl text-black">Date: ${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString()} GMT +0600 (Bangladesh Standard Time)</p>
   `;
   const historyContainer = document.getElementById('history-list');
   historyContainer.insertBefore(historyItem, historyContainer.firstChild)
})

// quota part 

document.getElementById('donate-btn-qouta').addEventListener('click', function(){
    const valueQouta = getInputFieldValueById('donate-qouta');
    if (valueQouta <= 0 || isNaN(valueQouta)){
        alert ('invalid input');
        return;
    }

    const donateQouta = parseFloat(valueQouta);
    const balanceQouta = getTextFieldValueById('balance-qouta');
    const myCurrentBalance = getTextFieldValueById('my-current-balance');

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

   const historyItem = document.createElement('div');
   historyItem.className = 'bg-white border-2 rounded-md mx-auto p-5 mb-5 mr-20 ml-20';
   historyItem.innerHTML = `

   <p class = "text-xl text-black">${donateQouta} Taka is Donated for famine-2024 for the Heroes, Bangladesh</p>
   <p class = "text-xl text-black">Date: ${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString()} GMT +0600 (Bangladesh Standard Time)</p>
   `;
   const historyContainer = document.getElementById('history-list');
   historyContainer.insertBefore(historyItem, historyContainer.firstChild)
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
    document.getElementById('main').classList.add('hidden');
    document.getElementById('history-list').classList.remove('hidden');

});

donationTab.addEventListener('click', function(){
    donationTab.classList.add(
        "bg-[rgba(180,244,97,1)]",
        "hover:bg-lime-400" ,
        "transition"
    );

    historyTab.classList.remove(
      "bg-[rgba(180,244,97,1)]",
      "hover:bg-lime-400",
      "transition"  
    );
    document.getElementById('main').classList.remove('hidden');
    document.getElementById('history-list').classList.add('hidden');
});