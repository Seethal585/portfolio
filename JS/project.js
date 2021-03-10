const colmar = document.querySelector('#colmar')
console.log(colmar)
colmar.addEventListener('mouseenter',() =>
{
    console.log('mouse enter')
    colmar.src = "images/colmar2.jpg"
})
colmar.addEventListener('mouseleave', () => {
    colmar.src = 'images/colmar-image.jpg';
});