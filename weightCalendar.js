const calendarBox = document.querySelector('.calendarBox')
const weekBox = document.querySelector('.weekBox')

// create the days of the week textboxes
const dayName = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
for (const day of dayName) {
  const dayBox = document.createElement('div')
  dayBox.classList.add('dayBox')

  dayBox.textContent = day
  weekBox.appendChild(dayBox)
}

// create 35 date squares
for (let i = 1; i <= 35; i++) {
  const dateSquare = document.createElement('div')
  dateSquare.classList.add('dateSquare')

  const date = document.createElement('p')
  date.classList.add('date')
  date.textContent = i

  const addButton = document.createElement('button')
  addButton.classList.add('addButton')

  const buttonImg = document.createElement('img')
  buttonImg.src = './Images/add.png'

  addButton.appendChild(buttonImg)

  dateSquare.appendChild(date)
  dateSquare.appendChild(addButton)

  calendarBox.appendChild(dateSquare)
}
