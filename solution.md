# Sub Topic 1

## Assignment
 
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body style="background-color: rgb(187, 195, 197);font-style: italic;font-weight: bolder;">
    <div style="display: grid;grid-template-rows: 370px 90px 130px 80px 40px ;">
        <div style="display: flex;flex-direction: row;height: 360px;gap: 150px;">
            <div>
                <img src="pic1.jpg" style="width: 100%;height: 80%;margin-right:40px;margin-top: 20px;margin-left: 40px;">
            </div>
            <div>
                <h1>Rohit Reddy Anumolu</h1>
                <h2>B.tech CSE</h2>
                <p><b style="font-size: 18px;">Address:</b> Flat No 303, Venkata Sai Residency, NCL North Colony, Kompally, Telangana</p>
                <p><b style="font-size: 18px;">Phone No:</b> 6309946999</p>
                <p><b style="font-size: 18px;">Email No:</b> <a href="mailto:5668.rohit@gmail.com"> 5668.rohit@gmail.com</a></p>
                <div style="display: flex;flex-direction: row;gap: 40px;padding-top: 10px;">
                    <p><a href="https://www.linkedin.com/in/rohit-reddy-anumolu-37ba33323/overlay/about-this-profile/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3B%2FQLPtFC1TyKalYiEVQgYug%3D%3D">
                        <img style="height: 50px;" src="https://logospng.org/download/linkedin/logo-linkedin-icon-1536.png"></a></p>
                    <p><a href="https://x.com/AnumoluRohit"><img style="height: 50px;" src="https://th.bing.com/th?id=ODLS.ec2992dc-5c78-440a-970e-3ce5e3e7b0cb&w=32&h=32&qlt=90&pcl=fffffa&o=6&pid=1.2"></a></p>
                    <p><a href="https://www.instagram.com/its_rohit1911_/"><img style="height: 50px;" src="https://th.bing.com/th?id=ODLS.7e9375d5-26a4-4702-bb17-c140827dc762&w=32&h=32&qlt=90&pcl=fffffc&o=6&pid=1.2"></a></p>
                    <p><a href="https://github.com/A-Rohit-Reddy"><img style="height: 50px;" src="https://th.bing.com/th?id=ODLS.b2099a11-ca12-45ce-bede-5df940e38a48&w=32&h=32&qlt=90&pcl=fffffc&o=6&pid=1.2"></a></p>
                </div>
            </div>
            
        </div>
        <div style="display: grid;grid-template-columns: 100px 1fr;">
            <div>
                <h3>Profile: </h3>
            </div>
            <div>
                <a> Hello, myself Rohit Reddy Anumolu. I am currently pursuing my Btech in Amrita Vishwa Vidyapeetham in Amritapuri, Kerala.
                    I have done my schooling in Hyderabad. I come from Hyderabad. I have a genuine interest in the field of coding, with my favourite subject being maths since my childhood.
                    I have a pretty good command over python and c, and currently learning java. I am also working on my web development skills and aim to attain perfection in them.</a>
            </div>
        </div>
        <div style="display: grid;grid-template-columns: 100px 1fr;">
            <div style="display: block;">
                <h3>Skills: </h3>
            </div>
            <div>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>PYTHON</li>
                    <li>JAVA</li>
                    <li>JAVASCRIPT</li>
                    <li>C</li>
    
                </ul>
            </div>
        </div>
        
        <div style="display: grid;grid-template-columns: 100px 1fr;">
            <div>
                <h3>Education:  </h3>
            </div>
            <div>
                <p>SCHOOLING: PALLAVI MODEL SCHOOL, BOWENPALLY, HYDERABAD, TELANGANA<br>
                INTERMEDIATE: MODULUS, MIYAPUR, HYDERABAD, TELANGANA<br>
                B.TECH: AMRITA VISHWA VIDYAPEETHAM, AMRITAPURI, KERALA</p>
            </div>
        </div>
        <div style="display: grid;grid-template-columns: 100px 1fr;">
            <div>
                <h3>Hobbies: </h3>
            </div>
            <div>
                <p>Playing Cricket, Piano, Chess, Watching tv, Listening to songs.</p>
            </div>
        </div>
        
      
    </div>

</body>
</html>
```

## Challenge

 There are some obselete and depracated tags. Depracated tags are those which are no longer recommended for use, mainly because they have been replaced by newer modern alternatives. While some browsers still support them, they might soon stop working and hence, they should be replaced as and when required. I have seen that marquee tag is one such tag, which has been recommended against using. The marquee tag causes the text to scroll either horizontally or vertically. While I found the marquee tag to be quite useful and helpful, it is recommended for no use because of the fact that the tag is of less use in real time applications and might be distacting. However, I found the tag interesting and the fact that it has attributed which enable it to slide or scroll, and then decide the direction of the scrolling along with its speed, makes it quite impressive. While there are no particular alternatives for marquee tag as such, we can use the CSS animations or javascript libraries like jQuery to perform the same functions.

# Sub Topic 2

## Assignment

 I have restyled the terrarium using flexbox, which includes flexibility and makes the code look relatively easier. Also using flexbox helps to arrange the elements in rows and columns, which can be later styled further, making our output be more satisfactory. The various attributes related to flex were interesting to use, along with attributes like justify-content and align-self, which I particularly used to center stage items, to make it more appealing. I further looked upon the features and difference of using flexbox, grid and bootstrap. While using grid lead to lot of difficulties in arranging things, flex was relatively much much easier to use and improved scalability.I also learnt about the position attributes which further made things easier.

![terrarium](terrarium-solution/snaps/terrarium-assignment.png)

## Challenge

For adding a bubble shine to the container, I was confused as from where to start styling, but later figured it out that I had to create a separate element which I should style using attributes like background colour, border, etc... Bubble shine gave the container a much needed boost,as it added some touch of realness. It made the container look as if something was getting reflected which was appealing.

```css
.jar-glossy-long{
	background: rgb(213, 252, 250);
	width: 3%;
	height: 20%;
	position: absolute;
	bottom: 20%;
	margin-left: 5%;
	border-radius: 3rem;
}

.jar-glossy-short{
	background: rgb(213, 252, 250);
	width: 3%;
	height: 5%;
	position: absolute;
	top: 51%;
	margin-left: 5%;
	border-radius: 3rem;
}
```

# Sub Topic 3

## Assignment

## Challenge

```javascript
document.querySelectorAll('.plant').forEach(image => {
    image.addEventListener('dblclick', function() {

      this.style.zIndex = 100;
  
      document.querySelectorAll('.plant').forEach(otherImage => {
        if (otherImage !== this) {
          otherImage.style.zIndex = 2;
        }
      });
    });
});
```

