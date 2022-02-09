const calendarBox = document.querySelector('.calendarBox')
const weekBox = document.querySelector('.weekBox')
const backBtn = document.querySelector('.back')
const forwardBtn = document.querySelector('.forward')
const monthTxt = document.querySelector('.monthText')

// create the days of the week textboxes
const dayName = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
for (const day of dayName) {
  const dayBox = document.createElement('div')
  dayBox.classList.add('dayBox')

  dayBox.textContent = day
  weekBox.appendChild(dayBox)
}

const createDateSquare = (index) => {
  const dateSquare = document.createElement('div')
  dateSquare.classList.add('dateSquare')

  const date = document.createElement('p')
  date.classList.add('date')
  date.textContent = index

  const addButton = document.createElement('button')
  addButton.classList.add('addButton')

  const buttonImg = document.createElement('img')
  buttonImg.src = './Images/add.svg'
  buttonImg.classList.add('addButtonImg')

  addButton.appendChild(buttonImg)

  dateSquare.appendChild(date)
  dateSquare.appendChild(addButton)

  calendarBox.appendChild(dateSquare)

  addButton.addEventListener('click', (e) => {
    const targetBox = e.currentTarget.parentNode

    const weight = window.prompt('Please enter your weight today', '')
    const weightP = document.createElement('p')
    weightP.textContent = weight
    weightP.classList.add('weightText')
    targetBox.appendChild(weightP)
    targetBox.removeChild(e.currentTarget)
  })
}

const createBlankDateSquare = () => {
  const dateSquare = document.createElement('div')
  dateSquare.classList.add('dateSquare')
  calendarBox.appendChild(dateSquare)
}

// create 35 date squares

let monthIndex = 0

const monthNames = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September',
  'October', 'November', 'December']

const dayNumbers = ['31', '28', '31', '30', '31', '30', '31', '31', '30', '31', '30', '31']

const yearArray = []

for (let i = 0; i < monthNames.length; i++) {
  const monthArray = {
    name: monthNames[i],
    days: [],
    startDay: 0
  }
  for (let x = 0; x < dayNumbers[i]; x++) {
    if (x === 0) {
      monthArray.startDay = new Date(2022, i, x + 1).getDay()
    }
    monthArray.days[x] = x + 1
  }
  yearArray.push(monthArray)
}

backBtn.addEventListener('click', () => {
  if (!(monthIndex <= 0)) {
    monthIndex--

    clearCalendar()
    drawCalendar(yearArray[monthIndex].startDay)
  }
})

forwardBtn.addEventListener('click', () => {
  if (!(monthIndex >= 11)) {
    monthIndex++

    clearCalendar()
    drawCalendar(yearArray[monthIndex].startDay)
  }
})

function drawCalendar(startDate) {
  monthTxt.textContent = yearArray[monthIndex].name

  for (let i = 1; i <= 35; i++) {
    if ((i <= startDate) || ((i - startDate) > yearArray[monthIndex].days.at(-1))) {
      createBlankDateSquare()
    } else {
      createDateSquare(i - startDate)
    }
  }
}

function clearCalendar() {
  while (calendarBox.firstChild) {
    calendarBox.removeChild(calendarBox.firstChild)
  }
}

drawCalendar(yearArray[monthIndex].startDay)
