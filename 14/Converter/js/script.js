
let inputRub = document.getElementById('rub'),
    inputUsd = document.getElementById('usd');

inputRub.addEventListener('input', () => {
    function shoot() {
        return new  Promise(function (resolve, reject) {
            let request = new XMLHttpRequest();
            window.request = request;
            request.open('GET', 'js/current.json', true);
            request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

            request.onload = function () {
                if (request.readyState === 4 && request.status === 200) {
                    resolve();
                } else {
                    reject();
                }
            };
            request.send();
    })
    }
    shoot()
        .then(()=> {
            let data = JSON.parse(request.response);
            inputUsd.value = inputRub.value / data.usd;
        })
        .catch(()=> inputUsd.value = "Что-то пошло не так!")

});