(function () {
    'use strict';

    const word = document.querySelector('.js-word');
    const description = document.querySelector('.js-description');
    const createArea = document.querySelector('.create-area');
    const addBtn = document.querySelector('.js-add-btn');

    addBtn.addEventListener('click', addWord);

    function addWord() {
        const p = document.createElement('p');
        p.innerText = word.value;
        createArea.appendChild(p);
        alert('登録しました。');
    }

    var app = new Vue({
        el: '#app',
        data: {
            word: '',
            description: '',
        }
    });
})();


