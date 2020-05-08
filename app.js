(function() {

     let row = 1
     let column = 1
     let color = `black`
     const mainCont = document.querySelector(`.main-container`)
     const controls = document.querySelector(`.controls`)
     const btn = document.createElement(`button`)
     btn.textContent = `Clear`
     btn.classList.add(`main-btn`)

     render()

     function render() {
          for (let i = 0; i < 15394; i++) {
               let div = document.createElement(`div`)

               div.addEventListener(`mouseover`, () => {
                    div.style.backgroundColor = html5colorpicker.value
               })

               div.classList.add(`grid`)
               div.style.backgroundColor = `white`
               div.style.gridRow = row
               div.style.gridColumn = column
               column += 1
               mainCont.appendChild(div)
                    if (column == 180) {
                         row += 1
                         column = 1
                    }
          }

          controls.appendChild(btn)
          btn.addEventListener(`click`, reset)

          function reset() {
               let temp = document.querySelectorAll(`.grid`)
               temp.forEach(e => {
                    e.style.backgroundColor = `white`
               })
          }
     }

})()