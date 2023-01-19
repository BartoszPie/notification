const notRead = document.querySelectorAll(`.notRead`);
const readAll = document.querySelector(`.read`);
const number = document.querySelector(`.number`);

function readHandler(e) {

    if(e.currentTarget.matches(`.notRead`)) {
            if (e.currentTarget.classList.contains(`notRead`)) {
                e.currentTarget.classList.remove(`notRead`);
                e.currentTarget.querySelector(`.notificationCircle`).remove();
            }
    }
}

function readAllHandler() {
        for (let i = 0; i < notRead.length; i++) {
            const read = notRead[i];

            if (read.classList.contains(`notRead`)) {
                read.classList.remove(`notRead`);
                document.querySelector(`.notificationCircle`).remove();
                number.innerText = `0`;
            }
        }
}

function numberHandler() {
    const circles = document.querySelectorAll(`.notificationCircle`);
    number.innerText = `${circles.length}`;
    console.log(circles)
}

readAll.addEventListener(`click`, readAllHandler);
notRead.forEach(notification => notification.addEventListener(`click`, readHandler));

notRead.forEach(s => s.addEventListener(`click`, numberHandler));
