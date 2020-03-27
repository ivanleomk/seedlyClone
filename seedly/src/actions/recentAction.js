export const recentAction = () => dispatch => {
 dispatch({
  type: 'RECENT_ACTION',
  payload: 'result_of_simple_action'
 })
}