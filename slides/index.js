// const menu = document.querySelector('.menu');
// const button = document.querySelector('.hover');
// const button = document.querySelector('.test');
// const tooltip = document.getElementById('tooltip');
// console.log('script!')
// button.addEventListener('mouseover', function() {
//     console.log('HOVER');
//     menu.style.display = 'block'
//     //menu.setAttribute("style", "display: block;")
// });

// button.addEventListener('mouseout', function() {
//     console.log('HOVER OFF');
//     menu.style.display = 'none'
// });


//1
// document.addEventListener('keydown', (event) => {
//     if (event.key === 'Escape') {
//         const tooltip = document.getElementById('tooltip');
//         if (tooltip.style.display === 'none') {
//             tooltip.style.display = 'block'; // or any other display value
//         } else {
//             tooltip.style.display = 'none';
//         }
//     }
// });


//2

// button.addEventListener('focus', () => {
//     tooltip.classList.add('tooltip-visible');
//   });

//   button.addEventListener('blur', () => {
//     tooltip.classList.remove('tooltip-visible');
//   });

//   document.addEventListener('keydown', (event) => {
//     if (event.key === 'Escape') {
//         console.log('escapee')
//       tooltip.classList.remove('tooltip-visible');
//       button.blur();
//     }
//   });




// 4
// button.addEventListener('focus', () => {
//     console.log('focus')
//     tooltip.style.visibility = 'visible';
//     tooltip.style.opacity = '1';
//   });

//   button.addEventListener('blur', () => {
//     tooltip.style.visibility = 'hidden';
//     tooltip.style.opacity = '0';
//   });

//   document.addEventListener('keydown', (event) => {
//     if (event.key === 'Escape') {
//       tooltip.style.visibility = 'hidden';
//       tooltip.style.opacity = '0';
//       button.blur();
//     }
//   });


// tooltip pattern

// var parent = document.getElementById('parent');

// parent.onmouseover = function() {
//     document.getElementById('popup').style.display = 'block';
// }

// parent.onmouseout = function() {
//     document.getElementById('popup').style.display = 'none';
// }

// parent.onfocus = function() {
//     document.getElementById('popup').style.display = 'block';
// }

// parent.onblur = function() {
//     document.getElementById('popup').style.display = 'none';
// }

// // hide when ESC is pressed

// document.addEventListener('keydown', (e) => {
//   if (e.key === 'Escape')
//        document.getElementById('popup').style.display = 'none';
// });
const parent = document.getElementById('parent');
const popup = document.getElementById('popup');

parent.addEventListener('mouseover', () => {
    popup.style.display = 'block';
});

parent.addEventListener('mouseout', () => {
    popup.style.display = 'none';
});

parent.addEventListener('focus', () => {
    popup.style.display = 'block';
});

parent.addEventListener('blur', () => {
    popup.style.display = 'none';
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        popup.style.display = 'none';
    }
});
