//Create a variable which stores the  logged-in user's details, with initial value as none indicating no user is logged in.
//We need a private space to store all the user details who have created their accounts. These details are stored and used to retrieve the account details.

let account = null;
const api = '//localhost:5000/api/accounts/';

//We need to create an array which would hold all the required ids and titles of each template which would help in navigation.

const routes = {
    '/login': { 
        templateId: 'login' ,
        title: 'Login Page'
    },
    '/dashboard': { 
        templateId: 'dashboard',
        title: 'Dashboard',
        init: updateDashboard
    },
    '/credits': {
        templateId: 'credits',
        title: 'credits'
    },
};


//templateId: The ID of the HTML template to load.
//title: The title of the page (used to update document.title).
//init: A function which executes when the route is loaded.

async function register() {
  const registerForm = document.getElementById('registerForm');  //retrieves data from the register form and stores it in this variable.
  const formData = new FormData(registerForm);
  const data = Object.fromEntries(formData);
  const jsonData = JSON.stringify(data);  //Converts data into an object and then converts in the form of JSON string. 
  const result = await createAccount(jsonData);   //stores the registered user details

  if(result.error){
    return updateElement('registerError', result.error);  //displays the error message and does the respective styling.
  }

  console.log('Account created!', result);
  account = result;   // stores it into the variable we created for user details if no error is returned.
  navigate('/dashboard');  //calls the navigate function and navigates to the dashboard page.
}

async function createAccount(account) {
  try {
    const response = await fetch(api , {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },  //sends a POST request to the API to create an account.
      body: account
    });
    return await response.json();   //converts the response to JSON.
  } catch (error) {
    return { error: error.message || 'Unknown error' };  //catch is used to display an error message if any error is generated.
  }
}

async function login() {
  const loginForm = document.getElementById('loginForm'); //retrieves data from the login form and stores it in this variable.
  const user = loginForm.user.value; //the name type is used to get the username to the variable user.
  const data = await getAccount(user);  //calls the getAccount function to fetch the user details on logging in.
  if(data.error){
    return updateElement('loginError',data.error);  //displays an error message when any error is found.
  }

  account = data;  //stores the user details in the account variable.
  navigate('/dashboard');  //navigates to the dashboard page on logging in.
}

// We create a function used to get the user details when already registered in the accounts api using async/await function.

async function getAccount(user) {
  try {
    const response = await fetch(api + encodeURIComponent(user));
    return await response.json();
  } catch (error) {
    return { error: error.message || 'Unknown error' };  //try and catch function to catch any error and display the error if there.
  }
}

//createTransactionRow generates a separate row for each transaction.

function createTransactionRow(transaction) {
  const template = document.getElementById('transaction');   //calls the transaction template.
  const transactionRow = template.content.cloneNode(true);  //clones the transaction template.
  const tr = transactionRow.querySelector('tr');
  tr.children[0].textContent = transaction.date;
  tr.children[1].textContent = transaction.object;
  tr.children[2].textContent = transaction.amount.toFixed(2);  //updates the row with transaction details.
  return transactionRow;  //returns the modified row.
}


function updateRoute() {
    const path = window.location.pathname; //gets the current url path.
    const route = routes[path];  //searches for the given template in the routes array.
    
    if (!route) {
        return navigate('/login');  //if there is no route, then redirects to the login page.(basically used as a default)
      }

    const template = document.getElementById(route.templateId);  //searches for the template in our html file.
    const view = template.content.cloneNode(true);  //clones the template.
    const app = document.getElementById('app');
    document.title = route.title;  //sets the document title according to the template that is currently active.
    app.innerHTML = '';   //sets the title to LOading... if any error in navigating between templates.
    app.appendChild(view);   

    if (typeof route.init === 'function') {
      route.init();   //calls an initialization function if one is defined.
    }
  }


function updateElement(id, textorNode){    //used to change the text of the respective element by specifying the parameters(id and text)
  const element = document.getElementById(id);
  element.textContent = '';
  element.append(textorNode); //We replace the textContent mathod with the append() method as it allows to attach either text or DOM Nodes to a parent element, which is perfect for all our use cases.
}

function navigate(path) {
  window.history.pushState({}, path, path);  //updates the browser history.
  updateRoute();
} //used for navigation purposes.

function updateDashboard() {
  if (!account) {
    return navigate('/login');
  }

  updateElement('description', account.description);
  updateElement('balance', account.balance.toFixed(2));
  updateElement('currency', account.currency);   //updates the given elements content.

  const transactionsRows = document.createDocumentFragment();
  for (const transaction of account.transactions) {
    const transactionRow = createTransactionRow(transaction);
    transactionsRows.appendChild(transactionRow);
  }
  updateElement('transactions', transactionsRows);  //creates and appends the transaction rows.
} 

window.onpopstate = () => updateRoute();  //Ensures navigation works on clicking the back and forward buttons.
updateRoute(); //Loads the correct page when the app starts.