export const UPDATE_ACTION_CONFIG_BUTTON = "UPDATE_ACTION_CONFIG_BUTTON";

export const updateActionConfigButton = (buttonName) => ({
  type: UPDATE_ACTION_CONFIG_BUTTON,
  payload: buttonName,
});
