// Constants
const API_BASE_URL = 'http://localhost:5000/api/accounts';
const STORAGE_KEY = 'savedAccount';

let state = Object.freeze({ account: null });

const routes = {
  '/login': { templateId: 'login' },
  '/dashboard': { templateId: 'dashboard', init: refresh }
};

// Routing Functions
function updateRoute() {
  const path = window.location.pathname;
  const route = routes[path] || routes['/login'];

  const template = document.getElementById(route.templateId);
  if (!template) return console.error(`Template not found: ${route.templateId}`);

  document.getElementById('app').innerHTML = '';
  document.getElementById('app').appendChild(template.content.cloneNode(true));

  if (typeof route.init === 'function') route.init();
}

function navigate(path) {
  window.history.pushState({}, path, path);
  updateRoute();
}

window.addEventListener('DOMContentLoaded', updateRoute);
window.onpopstate = updateRoute;

//  Functions interacting with the server
async function sendRequest(url, options = {}) {
  try {
    const response = await fetch(url, options);
    return await response.json();
  } catch (error) {
    return { error: error.message || 'Unknown error' };
  }
}

function updateElement(id, content) {
  const element = document.getElementById(id);
  element.textContent = '';
  element.append(content);
}

function updateState(property, newData) {
  state = Object.freeze({ ...state, [property]: newData });
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.account));
}

// Initialization
function init() {
  const savedAccount = localStorage.getItem(STORAGE_KEY);
  if (savedAccount) updateState('account', JSON.parse(savedAccount));
  updateRoute();
}

init();

// Authentication Functions
async function register() {
  const formData = new FormData(document.getElementById('registerForm'));
  const result = await createAccount(JSON.stringify(Object.fromEntries(formData)));

  if (result.error) return updateElement('reg-error', result.error);
  
  updateState('account', result);
  navigate('/dashboard');
}

async function createAccount(account) {
  return sendRequest(`${API_BASE_URL}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: account
  });
}

async function login() {
  const user = document.getElementById('loginForm').user.value;
  const data = await getAccount(user);

  if (data.error) return updateElement('loginError', data.error);
  
  updateState('account', data);
  navigate('/dashboard');
}

async function getAccount(user) {
  return sendRequest(`${API_BASE_URL}/${encodeURIComponent(user)}`);
}

// Dashboard Update Functions
function updateDashboard() {
  if (!state.account) return navigate('/login');

  fetchTransactions();
}

function createTransactionRow(transaction) {
  const tr = document.createElement('tr');
  tr.innerHTML = `
    <td>${transaction.date}</td>
    <td>${transaction.object}</td>
    <td>${transaction.amount.toFixed(2)}</td>
  `;
  return tr;
}

async function fetchTransactions() {
  if (!state.account) return navigate('/login');

  const data = await getAccount(state.account.user);
  if (data.error) return;

  updateState('account', data);
  updateDashboardUI(data);
}

function updateDashboardUI(account) {
  updateElement('description', account.description);
  updateElement('balance', `${account.balance.toFixed(2)}`);
  updateElement('currency', account.currency);
  
  const transactionsTable = document.querySelector('tbody');
  transactionsTable.innerHTML = '';

  if (!account.transactions || account.transactions.length === 0) return;

  account.transactions.forEach(transaction => {
    transactionsTable.appendChild(createTransactionRow(transaction));
  });
}

// Dialog Box execution
const dialog = document.getElementById('transactionDialog');
document.getElementById('cancelButton').onclick = () => dialog.close();

document.getElementById('transactionForm').onsubmit = (event) => {
  event.preventDefault();
  console.log('Transaction:', {
    date: event.target.transactionDate.value,
    object: event.target.transactionObject.value,
    amount: event.target.transactionAmount.value
  });
  event.target.reset();
  dialog.close();
};
