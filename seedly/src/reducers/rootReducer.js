import { combineReducers } from 'redux';

var selectedpostReducer = (state={}, action) => {
  let new_state;
  switch (action.type) {
      case 'INITIAL_SETUP':

       return 0;

      case 'RECENT_POST':
      new_state = state.map(e => {
                              if (e.include_in_list === false) {
                                e = { ...e, include_in_list:true };
                              }
                              return e;
                            })
      new_state = new_state.sort(function(a,b) {
                                                return parseInt(b.last_update) - parseInt(a.last_update)
                                            })
      return new_state;

    case 'UNANSWERED_POST':
      new_state = state.map(e => {
                              if (e.answers === 0) {
                                e = { ...e, include_in_list:true };
                              }else{
                                e = {...e, include_in_list: false}
                              }
                              return e;
                            })
      return new_state;

    case 'TRENDING_POST':
        new_state = state.map(e => {
                              if (e.include_in_list === false) {
                                e = { ...e, include_in_list:true };
                              }
                              return e;
                            })
        new_state = new_state.reverse()
        return new_state;

      case 'TAG_POST':
        new_state = state.map(e => {
                              if (e.tags.includes(action.payload.e)) {
                                e = { ...e, include_in_list:true };

                              }else{
                                e = {...e, include_in_list: false}
                              }
                              return e;
                            })
        return new_state;

     default:
      return state;
  }
};


export default combineReducers({
    selected_posts: selectedpostReducer
});