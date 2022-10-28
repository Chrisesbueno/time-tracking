const data = import('./data.json', {assert: {type: 'json'}});
const titles = document.querySelectorAll('.title')
const buttons = document.querySelectorAll('.buttons')

buttons.forEach(button => {
    button.addEventListener('click', () => {
        dataFunc(button.innerHTML);
    })
});

function dataFunc(button) {
    data.then(res => 
        res.default.forEach(element => {
            let type = element.title;
            let time = element.timeframes;
            if (button == 'Daily') {
                timeFunc(type, time.daily, 'Daily');
            }
            if (button == 'Weekly') {
                timeFunc(type, time.weekly, 'Weekly');
            }
            if (button == 'Monthly') {
                timeFunc(type, time.monthly, 'Monthly');
            }
        })
    )  
}

function timeFunc(type, time, text) {
    titles.forEach(title => {
        if (title.innerHTML == type) {
            let hours = title.parentElement.nextElementSibling.children[0];
            let lastHours = title.parentElement.nextElementSibling.children[1];
            hours.innerHTML = `${time.current}hrs`;
            lastHours.innerHTML = `Last ${text} - ${time.previous}hrs`;
        }
    });
}