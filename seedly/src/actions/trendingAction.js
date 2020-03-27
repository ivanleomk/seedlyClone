export const simpleAction = () => dispatch => {
 dispatch({
  type: 'TRENDING_ACTION',
  payload: 'result_of_simple_action'
 })
}
