# Frontend Mentor - Article preview component solution

This is a solution to the [Article preview component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/article-preview-component-dYBN_pYFT). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents
- [The challenge](#the-challenge)
- [Links](#links)
- [Built with](#built-with)
- [What I learned](#what-i-learned)
- [Author](#author)

## The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See the social media share links when they click the share icon

## Links

- Solution URL: [https://dbidmead.github.io/article-preview](https://dbidmead.github.io/article-preview)

## Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS pseudoelement ::before
- Flexbox
- Javascript DOM manipulation

## What I learned

### centering of divs

```html
<body>
  <div></div>
<body>
```

```css
body {
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
}
```

"align-items: center" does the vertical centering (must define a height) and "justify-content: center" does the horizontal centering.

### toggling of a modal using javascript

```html
<button></button>
<div id='modal'></div>
```

```css
#modal {
  display: none;
}
```

```js
const button = document.querySelector('button');
const modal = document.querySelector('#modal');

let modalActive = false;

function handleButton() {

    if(!modalActive) {
        modal.setAttribute('style', 'display: flex')
    } else if(modalActive) {
        modal.setAttribute('style', 'display: none')
    } else return
    modalActive = !modalActive
    button.addEventListener('click', handleButton)
}

button.addEventListener('click', handleButton)
```
this sets off a chain reaction where clicking on the button calls a function that toggles the modal's CSS display property, toggles the value of the modalActive boolean, and finally adds the event listener calling its parent function to the button again. This callback ensures the button is sensitive to a subsequent click

### crop a div's contents by setting the parent div to overflow: hidden

```html
<div id='container'>
  <img src='/'>
</div>
```

```css
.container {
  border-radius: 100%;
  overflow: hidden;
}
```

This will cause any CHILD divs (such as the image in this example) to be cropped based on the PARENT'S shape/borders (such as the circular container div in this example)

### make a child div change color whenever its parent's div is hovered over

```html
<button>
  <svg></svg>
</button>
```

```css
button:hover svg {
  background-color: red;
}
```
This means that when any part of the button is under hover, the svg will turn orange regardless of whether the cursor is touching it

### speech bubble shape

```css
#rectangular-div::before {
    /* specify no content and no dimensions so border path starts in the middle */
    content: "";
    width: 0;
    height: 0;

    /* allow for positioning of the pseudoelement on an edge of the rectangle */
    position: absolute;
    bottom: -17px;
    right: 45%;

    /* define triangle dimensions via border width and color via one of the border colors (usually top) */
    border-left: 15px solid transparent;
    border-right: 15px solid transparent;
    border-top: 18px solid var(--rectangular-div-color);
    border-bottom: 0 solid transparent;
}
```

Set the triangle's width and height to 0 and content to an empty string. Thus, the border starts at one point. Make a triangle by adjusting the left/top/right/bottom border thicknesses, making sure all are transparent exept for one border (whose color will fill the triangle)

### make buttons follow url links

```html
<button onclick="window.location.href = 'https://github.com/dbidmead">GitHub</button>
```

use the short javascript command in the onclick property of the button tag


## Author

- GitHub - [@dbidmead](https://github.com/dbidmead)
- Frontend Mentor - [@dbidmead](https://www.frontendmentor.io/profile/dbidmead)