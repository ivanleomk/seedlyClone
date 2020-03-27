export default (state = {}, action) => {
 switch (action.type) {
  case 'RECENT_ACTION':
   return {
    result: action.payload
   }
  default:
   return state
 }
}