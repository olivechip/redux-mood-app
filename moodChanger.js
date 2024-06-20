const initialMood = { mood: 'happy'};

const moodReducer = (state=initialMood, action) => {
    switch(action.type){
        case 'happy':
            // console.log('happy');
            return {...state, mood:'happy'};
        case 'sad':
            // console.log('sad');
            return {...state, mood:'sad'};
        case 'angry':
            // console.log('angry');
            return {...state, mood:'angry'};
        case 'confused':
            // console.log('confused');
            return {...state, mood:'confused'};
        default:
            // console.log('default');
            return state;
    }
}

const store = Redux.createStore(moodReducer);