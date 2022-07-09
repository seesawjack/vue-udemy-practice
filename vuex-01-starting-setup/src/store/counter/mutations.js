export default {
    increment(state){
        state.counter = state.counter +3;
    },
    increase(state, payload){
        state.counter = state.counter + payload.value;
    }
}