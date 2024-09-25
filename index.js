
function getDonationFieldValueById(id) {
  const donationAmount = document.getElementById(id).value;
  const donationAmountNumber = parseFloat(donationAmount);
  document.getElementById(id).value = ''
  return donationAmountNumber;
}

//  global variable
// const totalAmount = document.getElementById("balance").innerText;
// const totalAmountNumber = parseFloat(totalAmount)


document.getElementById("donation-btn-first")
  .addEventListener('click', function () {

    const donation = getDonationFieldValueById("donate")
    if (donation >= 0 && !isNaN(donation)) {
      alert(" Valid Donation Amount")
    }
    else {
      alert("Invalid Donation Amount")
      return
    }
    const balance = document.getElementById("first-balance").innerText;
    const totalBalance = parseFloat(balance);
    const remainBalance = totalBalance + donation;
    document.getElementById("first-balance").innerText = remainBalance;


    const totalAmount = document.getElementById("balance").innerText;
    const totalAmountNumber = parseFloat(totalAmount)
    const mainBalance = totalAmountNumber - donation;
    document.getElementById("balance").innerText = mainBalance;

    // Date set

    const donationTitle = document.getElementById('first-donation-title').innerText;
   
   const historyItem = document.createElement('div')
   historyItem.className = 'bg-white p-4 border-2 border-indigo-200 mb-4 gap-2 rounded-md';

   const now = new Date();

   const hours = now.getHours();   // Hours (0-23)
   const minutes = now.getMinutes(); // Minutes (0-59)
   const seconds = now.getSeconds();

   historyItem.innerHTML = `
   <p class="text-base p-6">${donation} taka is ${donationTitle}</p>
   <p class="text-2xl p-6">CurrentTime: ${hours}:${minutes}:${seconds} ${new Date().toLocaleDateString()}</p>
   `;

   const historyContainer = document.getElementById('history-list');
   historyContainer.insertBefore(historyItem, historyContainer.firstChild);

  })




// donation 2nd card

document.getElementById("donation-second-btn")
  .addEventListener("click", function () {

    const donation = getDonationFieldValueById("donate-second");
    if (donation >= 0 && !isNaN(donation)) {
      alert(" Valid Donation Amount")
    }
    else {
      alert("Invalid Donation Amount")
      return
    }
    const balance = document.getElementById("second-balance").innerText;
    const totalBalance = parseFloat(balance);
    const remainBalance = totalBalance + donation;
    document.getElementById("second-balance").innerText = remainBalance;


     const totalAmount = document.getElementById("balance").innerText;
     const totalAmountNumber = parseFloat(totalAmount)
    const mainBalance = totalAmountNumber - donation;
    document.getElementById("balance").innerText = mainBalance;

    // Date set

  const donationTitle = document.getElementById('second-donation-title').innerText;

  const historyItem = document.createElement('div')
   historyItem.className = 'bg-white p-4 border-2 border-indigo-200 mb-4 gap-2 rounded-md';

   const now = new Date();

   const hours = now.getHours();   // Hours (0-23)
   const minutes = now.getMinutes(); // Minutes (0-59)
   const seconds = now.getSeconds();

   historyItem.innerHTML = `
   <p class="text-base p-6">${donation} taka is ${donationTitle}</p>
   <p class="text-2xl p-6">CurrentTime: ${hours}:${minutes}:${seconds} ${new Date().toLocaleDateString()}</p>
   `;

   const historyContainer = document.getElementById('history-list');
   historyContainer.insertBefore(historyItem, historyContainer.firstChild);

  })



// donation card 3

document.getElementById("donation-third-btn")
  .addEventListener("click", function () {

    const donation = getDonationFieldValueById("third-donate");
    if (donation >= 0 && !isNaN(donation)) {
      alert(" Valid Donation Amount")
    }
    else {
      alert("Invalid Donation Amount")
      return
    }
    const balance = document.getElementById("third-balance").innerText;
    const totalBalance = parseFloat(balance);
    const remainBalance = totalBalance + donation;
    document.getElementById("third-balance").innerText = remainBalance;


     const totalAmount = document.getElementById("balance").innerText;
     const totalAmountNumber = parseFloat(totalAmount)
    const mainBalance = totalAmountNumber - donation;
    document.getElementById("balance").innerText = mainBalance;

    // Date set

  const donationTitle = document.getElementById('third-donation-title').innerText;

  const historyItem = document.createElement('div')
   historyItem.className = 'bg-white p-4 border-2 border-indigo-200 mb-4 gap-2 rounded-md';

   const now = new Date();

   const hours = now.getHours();   // Hours (0-23)
   const minutes = now.getMinutes(); // Minutes (0-59)
   const seconds = now.getSeconds();

   historyItem.innerHTML = `
   <p class="text-base p-6">${donation} taka is donete for ${donationTitle}</p>
   <p class="text-2xl p-6">CurrentTime: ${hours}:${minutes}:${seconds} ${new Date().toLocaleDateString()}</p>
   `;

   const historyContainer = document.getElementById('history-list');
   historyContainer.insertBefore(historyItem, historyContainer.firstChild);

  })



// history tab functionality

const historyTab = document.getElementById("history-tab");
const assistantTab = document.getElementById("assistant-tab");
historyTab.addEventListener("click", function () {
  

  historyTab.classList.add(
    'bg-[rgb(180,244,97)]',
    'font-semibold'
    );
  
    assistantTab.classList.remove(
      'bg-[rgb(180,244,97)]',
      'font-semibold'
      );

   document.getElementById('donation-section').classList.add('hidden')   

})










