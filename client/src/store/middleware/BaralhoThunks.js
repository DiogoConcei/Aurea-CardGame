import { updateActionConfigButton } from '../actions';

export const updateActionConfigButtonThunk = (buttonName) => {
  return async (dispatch) => {
    console.log("Antes de despachar a ação assíncrona");
    
    await new Promise((resolve) => setTimeout(resolve, 1000));

    dispatch(updateActionConfigButton(buttonName));

    console.log("Após despachar a ação assíncrona");
  };
};
