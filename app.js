
//first option to link json file (check also <script> tag in html)

// import data from './data.json' assert { type: 'json' };
// console.log(data);
//second option to link json file if showing error add server (check on google fetch data from json file)
// fetch('./data.json')
//     .then((response) => response.json())
//     .then((data) => console.log(data));

const days = document.querySelectorAll('.day')
const moneyLabel = document.querySelectorAll('.label-amount')
const barLevels= document.querySelectorAll('.bar-level')
const notSelected = document.querySelectorAll('.notSelected')

function updateChart() {
    async function fetchData() {
        const url = ('./data.json')
        const response = await fetch(url)
        const datapoints = await response.json()
        return datapoints //has to return this so it can store data
    }
    
    
    fetchData().then(datapoints =>  {
        const days = datapoints.map( function(oneDay) {
            return oneDay.day
        })

        const amount = datapoints.map( (oneDayAmount) => {
            return oneDayAmount.amount
        })

        barLevels.forEach(function(oneBar) { 
            oneBar.addEventListener('click', function(e) {
                e.preventDefault()
                for(let i=0; i < moneyLabel.length; i++) {
                    if(oneBar.id === days[i]) {
                   moneyLabel.forEach(function(one){
                        one.classList.remove('active')
                        one.parentElement.style.backgroundColor = 'hsl(10, 79%, 65%)'
                 
                   })
                    moneyLabel[i].classList.add('active')
                    moneyLabel[i].textContent = `$${amount[i]}`
                    oneBar.style.backgroundColor= '#76B5BC'


                    //another option with unclicking every bar

                    //     let ev = e.target.querySelector('p')
                    //     let el = moneyLabel[i]

                    //    ev.classList.add('active')
                    //    ev.textContent = `$${amount[i]}`
                    // //    oneBar.style.backgroundColor= '#76B5BC'
                    //     if(ev.classList.contains('active')) {
                    //         oneBar.classList.toggle('bar-level-toggle')
                    //         oneBar.addEventListener('click', function(e){
                    //             ev.classList.toggle('active')
                                
                    //         })
                    //     } 

                    } 
                }
            })
        })
    })
}
updateChart()

