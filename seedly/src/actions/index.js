import axios from "axios";

export const selectTag = tag => {
  // Return an action
  return {
    type: 'TAG_POST',
    payload: tag
  };
};

export const selectUnanswered = tag => {
  // Return an action
  return {
    type: 'UNANSWERED_POST'
  };
};

export const selectRecent = () => {
  //Return the most recent ones
  return{
    type: 'RECENT_POST'
  };
};

export const selectTrending = () =>{
  return{
    type: 'TRENDING_POST'
  }
}

export const updateAbout = new_description => {
  return{
    type: 'UPDATE_ABOUT',
    payload: new_description
  }
}