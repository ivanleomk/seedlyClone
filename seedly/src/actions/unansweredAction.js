export const unansweredAction = () => dispatch => {
 dispatch({
  type: 'UNANSWERED_ACTION',
  payload: 'result_of_simple_action'
 })
}