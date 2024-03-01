export const UPDATE_ACTIVE_BUTTON = 'UPDATE_ACTIVE_BUTTON_SUBMENU';
export const UPDATE_ACTION_CONFIG_BUTTON = 'UPDATE_ACTION_CONFIG_BUTTON';

export const updateActiveButton = (buttonName) => ({
    type: UPDATE_ACTIVE_BUTTON,
    payload: buttonName
  });
  
  export const updateActionConfigButton = (buttonName) => ({
  type: UPDATE_ACTION_CONFIG_BUTTON,
  payload: buttonName
});