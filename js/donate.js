// donation button tab
document.getElementById('donation-tab').addEventListener('click', function(){
    const main = document.getElementById('main');
    main.classList.remove('hidden');
})

// add money in the main section

// noakhali part

document.getElementById('donate-btn-noakhali').addEventListener('click', function(){

    const donateNoakhali = parseFloat(document.getElementById('donate-noakhali').value);
    const balanceNoakhali = parseFloat(document.getElementById('balance-noakhali').innerText);
    const myCurrentBalance = parseFloat(document.getElementById('my-current-balance').innerText);

   const newBalanceNoakhali = donateNoakhali + balanceNoakhali;

   const newCurrentBalance = myCurrentBalance - donateNoakhali;
   
   if(donateNoakhali <= 0 || isNaN(donateNoakhali) || newBalanceNoakhali < donateNoakhali){
    alert('invalid input');
    return;
   }

   document.getElementById('balance-noakhali').innerText = newBalanceNoakhali;
   document.getElementById('my-current-balance').innerText = newCurrentBalance;
})

// feni part

document.getElementById('donate-btn-feni').addEventListener('click', function(event){
     event.preventDefault();

    const donateFeni = parseFloat(document.getElementById('donate-feni').value);
    const balanceFeni = parseFloat(document.getElementById('balance-feni').innerText);
    const myCurrentBalance = parseFloat(document.getElementById('my-current-balance').innerText);

   const newBalanceFeni = donateFeni + balanceFeni;

   const newCurrentBalance = myCurrentBalance - donateFeni;
   
   if(donateFeni <= 0 || isNaN(donateFeni) || newBalanceFeni < donateFeni){
    alert('invalid input');
    return;
   }

   document.getElementById('balance-feni').innerText = newBalanceFeni;
   document.getElementById('my-current-balance').innerText = newCurrentBalance;
})

// quota part 

document.getElementById('donate-btn-qouta').addEventListener('click', function(){

    const donateQouta = parseFloat(document.getElementById('donate-qouta').value);
    const balanceQouta = parseFloat(document.getElementById('balance-qouta').innerText);
    const myCurrentBalance = parseFloat(document.getElementById('my-current-balance').innerText);

   const newBalanceQouta = donateQouta + balanceQouta;

   const newCurrentBalance = myCurrentBalance - donateQouta;
   
   if(donateQouta <= 0 || isNaN(donateQouta) || newBalanceQouta < donateQouta){
    alert('invalid input');
    return;
   }

   document.getElementById('balance-qouta').innerText = newBalanceQouta;
   document.getElementById('my-current-balance').innerText = newCurrentBalance;
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