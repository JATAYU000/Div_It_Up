# 4-Bank-Project

## 1-template-route

### Assignment

The routes object defines available routes in the application which establishes a connection between the url and your templates.Currently our routes declaration contains only the template ID to use. Modify your routes object to include a title for your template and later, we will include our command which gives a title to the document depending on which template is opened. After this, we can observe a change in document title as and when a template is opened. 

```javascript
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
```
Now add this code in your updateRoute function to update the title of the browser and print the message in the console everytime a template is opened. 

For example, The message 'Dashboard is shown' in the console every time the dashboard page is opened.

```javascript
document.title = route.title;
console.log(`${route.title} is shown`);
```
### Challenge

I just had to repeat and apply whatever I had learnt till now. First, I added the following code to my html file just below the dashboard template to create another template called credits.

```html
    <template id="credits">
        <header>
            <h1>Bank App</h1>
            <a href="/dashboard" onclick="onLinkClick(event)">Back</a><br>
            <a href="/login" onclick="onLinkClick(event)">Logout</a>
        </header>
    </template>
```
After creating the template, my next step was to add the template to my routes object, which established a connection between my url and credits template. I also added a link in the header element of my dashboard template to navigate between the templates.

```html
<a href="/credits" onclick="onLinkClick(event)">Credits</a>
```
 
