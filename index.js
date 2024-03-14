const category = document.querySelector('.category')
const content = document.querySelector('.category_content')


category.addEventListener('click', function (e) {
  const {tagName, dataset} = e.target
  if (tagName === 'A') {
    this.querySelector('.active').classList.remove('active')
    e.target.parentNode.classList.add('active')
    // console.log(dataset);

    if (dataset.id === '0') {
      change(0)
    } else if (dataset.id === '1') {
      change(1)
      // console.log(content.querySelector('#qes1'));
    } else if (dataset.id === '2') {
      change(2)
      // console.log(content.querySelector('#qes1'));
    } else if (dataset.id === '3') {
      change(3)
      // console.log(content.querySelector('#qes1'));
    } else if (dataset.id === '4') {
      change(4)
      // console.log(content.querySelector('#qes1'));
    } else if (dataset.id === '5') {
      change(5)
      // console.log(content.querySelector('#qes1'));
    } else if (dataset.id === '6') {
      change(6)
      // console.log(content.querySelector('#qes1'));
    } else if (dataset.id === '7') {
      change(7)
      // console.log(content.querySelector('#qes1'));
    } else if (dataset.id === '8') {
      change(8)
      // console.log(content.querySelector('#qes1'));
    }
  }
})

function change(num) {
  content.querySelector('.show').classList.add('close')
  content.querySelector('.show').classList.remove('show')
  content.querySelector(`#qes${num}`).classList.remove('close')
  content.querySelector(`#qes${num}`).classList.add('show')
}