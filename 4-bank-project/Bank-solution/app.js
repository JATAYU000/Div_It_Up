const baseURL = '//localhost:5001'; // Base URL for API requests

const routes = {
  '/login': { templateId: 'login', title : 'login Page'}, // Route for login page
  '/dashboard': { templateId: 'dashboard', title : 'dashboard Page', init: refresh }, // Route for dashboard
  '/page3' : { templateId: "page3" , title : 'login Page' } // Route for page3
};

function updateState(property, newData) {
  state = Object.freeze({
    ...state,
    [property]: newData
  });
  localStorage.setItem(storageKey, JSON.stringify(state.account));
}

const storageKey = 'savedAccount';

let state = Object.freeze({
  account: null
}); // Stores the logged-in user account

function updateElement(id, textOrNode) {
  const element = document.getElementById(id);
  element.textContent = ''; // Removes all children
  element.append(textOrNode); // Updates element with new content
}

async function login() {
  const loginForm = document.getElementById('loginForm');
  const user = loginForm.user.value; // Get user input from login form
  const data = await getAccount(user); // Fetch account data

  if (data.error) {
    return updateElement('loginError', data.error); // Display error message
  } else {
    updateElement('loginError', ' '); // Clear error message
  }

  updateState('account', data); // Store account data
  navigate('/dashboard'); // Redirect to dashboard
}

async function getAccount(user) {
  try {
    const response = await fetch(`${baseURL}/api/accounts/` + encodeURIComponent(user)); // Fetch account details
    return await response.json(); // Parse response JSON
  } catch (error) {
    return { error: error.message || 'Unknown error' }; // Handle errors
  }
}

async function createAccount(account) {
  try {
    const response = await fetch(`${baseURL}/api/accounts/`, {
      method: 'POST', // HTTP POST request
      headers: { 'Content-Type': 'application/json' },
      body: account // Send account data as JSON
    });
    return await response.json(); // Parse response JSON
  } catch (error) {
    return { error: error.message || 'Unknown error' }; // Handle errors
  }
}


async function putAccount(id, date, object, amount) {
  let transaction = { id, date, object, amount: parseFloat(amount) };
  try {
    const response = await fetch(`${baseURL}/api/accounts/${state.account.user}/transactions`, {
      method: 'POST',  // Change to PUT for updating existing data
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(transaction)  // Send updated account data
    });

    const responseData = await response.json();
    console.log("Server Response:", responseData);
    refresh();
    return responseData;
    

  } catch (error) {
    console.error("Error updating account:", error);
  }

  

  const updatedTransactions = [...state.account.transactions, transaction];
  
  updateState('account', {
    ...state.account,
    transactions: updatedTransactions
  });

}



async function register() {
  const registerForm = document.getElementById('registerForm');
  const formData = new FormData(registerForm); // Get form data
  const jsonData = JSON.stringify(Object.fromEntries(formData)); // Convert form data to JSON
  const result = await createAccount(jsonData); // Send data to create account
  console.log(result);

  if (result.error) {
    document.getElementById('regesterError').innerHTML = `An error occurred , ${result.error}`; // Display error message
  } else {
    document.getElementById('regesterError').innerHTML = " "; // Clear error message
  }

  updateState('account', result); // Store account data
  navigate('/dashboard'); // Redirect to dashboard
}

function addTransaction() {
  let dateElement = document.getElementById('Date');
  let objectElement = document.getElementById('Object');
  let amountElement = document.getElementById('Amount');

  let date = dateElement.value.trim(); // Get input values
  let object = objectElement.value.trim();
  let amount = amountElement.value.trim();

  let nu = state.account.transactions.length > 0 ? parseInt(state.account.transactions.length) + 1 : 1; // Generate new transaction ID

  let sn = nu.toString();

  putAccount(sn, date, object, amount); // Add transaction
  finalbalance();
  
  
  // Clear inputs after adding
  dateElement.value = "";
  objectElement.value= "";
  amountElement.value = "";
  updateDashboard(); // Update dashboard
}

function updateDashboard() {
  
  if (!state.account) {
    return logout(); // Redirect if no account
  }

  if (!state.account.transactions || state.account.transactions.length === 0 || !state.account) {
    updateElement('nothing','No transactions available'); // Show message if no transactions 
  } else {
    updateElement('nothing',''); // Clear message
  }
  
  
  const transactionsRows = document.createDocumentFragment(); // Create document fragment
  
  state.account.transactions.forEach((transaction, index) => {
    const transactionRow = createTransactionRow(transaction);
    const tr = transactionRow.querySelector("tr");

    if (index % 2 === 0) {
      tr.style.backgroundColor = "#e3f6f5";
    } else {
      tr.style.backgroundColor = "#bbe4e9";
    }

    transactionsRows.appendChild(transactionRow);
  });

  

  updateElement('transactions', transactionsRows); // Update transaction list
  updateElement('DashboardDescription', state.account.description);
  updateElement('balance', state.account.balance.toFixed(2)); // Update balance
  updateElement('currency', state.account.currency); // Update currency
}

function createTransactionRow(transaction) {
  const template = document.getElementById('tableTransaction');
  const transactionRow = template.content.cloneNode(true);
  const tr = transactionRow.querySelector('tr');  
  tr.children[0].textContent = transaction.date;
  tr.children[1].textContent = transaction.object;
  tr.children[2].textContent = transaction.amount.toFixed(2);
  return transactionRow;
}

function navigate(path) {
  window.history.pushState({}, '', path); // Change URL without reloading
  updateRoute(); 
}

function updateRoute() {
  const path = window.location.pathname;
  const route = routes[path];

  if (!route) {
    return navigate('/dashboard'); // Redirect if route not found
  }

  document.title = route.title; // Update document title
 
  
  
  const template = document.getElementById(route.templateId);
  const view = template.content.cloneNode(true);
  const app = document.getElementById('app');
  app.innerHTML = ''; // Clear previous content
  app.appendChild(view); // Load new content
  
  if(path === '/dashboard'){
    updateDashboard(); // Update dashboard if on dashboard page
  }
}


function finalbalance() {
  const amount = document.getElementById('Amount').value;
  let balance = state.account.balance;
  document.getElementById('balance').innerHTML = balance + amount ;
}



async function refresh() {
  await updateAccountData();
  updateDashboard();
}




async function updateAccountData() {
  const account = state.account;
  if (!account) {
    return logout();
  }

  const data = await getAccount(account.user);
  if (data.error) {
    return logout();
  }

  updateState('account', data);
}





function logout() {
  updateState('account', null);
  navigate('/login');
}


function init() {
  const savedAccount = localStorage.getItem(storageKey);
  if (savedAccount) {
    updateState('account', JSON.parse(savedAccount));
  }

  // Our previous initialization code
  window.onpopstate = () => updateRoute();
  updateRoute();
}

init();



function onLinkClick(event) {
  event.preventDefault(); // Prevent default link behavior
  const newPath = new URL(event.target.href).pathname;
  navigate(newPath); // Navigate to new path
}

updateRoute(); // Initialize route
window.onpopstate = updateRoute; // Handle back/forward navigation
