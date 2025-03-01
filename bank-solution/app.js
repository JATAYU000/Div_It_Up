const routes = {
    '/login': { 
        templateId: 'login' ,
        title: 'Login Page'
    },
    '/dashboard': { 
        templateId: 'dashboard',
        title: 'Dashboard'
    },
    '/credits': {
        templateId: 'credits',
        title: 'credits'
    },
};

function updateRoute() {
    const path = window.location.pathname;
    const route = routes[path];
    
    if (!route) {
        return navigate('/login');
      }

    const template = document.getElementById(route.templateId);
    const view = template.content.cloneNode(true);
    const app = document.getElementById('app');
    document.title = route.title;
    console.log(`${route.title} is shown`);
    app.innerHTML = '';
    app.appendChild(view);
  }


updateRoute('login');

function navigate(path) {
  window.history.pushState({}, path, path);
  updateRoute();
}

function onLinkClick(event) {
    event.preventDefault();
    navigate(event.target.href);
  }

window.onpopstate = () => updateRoute();
updateRoute();