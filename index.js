const h2 = document.querySelector('#mood');
const happyButton = document.querySelector('#happyButton');
const sadButton = document.querySelector('#sadButton');
const angryButton = document.querySelector('#angryButton');
const confusedButton = document.querySelector('#confusedButton');

happyButton.addEventListener('click', () => {
    store.dispatch({ type: 'happy' });
    // console.log(store.getState());
    h2.innerText = 'ʘ‿ʘ';
});

sadButton.addEventListener('click', () => {
    store.dispatch({ type: 'sad' });
    // console.log(store.getState());
    h2.innerText = '╥﹏╥';
});

angryButton.addEventListener('click', () => {
    store.dispatch({ type: 'angry' });
    // console.log(store.getState());
    h2.innerText = '(ノಠ痊ಠ)ノ彡┻━┻';
});

confusedButton.addEventListener('click', () => {
    store.dispatch({ type: 'confused' });
    // console.log(store.getState());
    h2.innerText = '(・・；)';
});