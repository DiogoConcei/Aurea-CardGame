const initial_baralho_state = {
    actionConfigButton: "",
  };
  
  
  export const baralhosReducer = (state = initial_baralho_state, action) => {
    switch (action.type) {
      case "UPDATE_ACTION_CONFIG_BUTTON":
        return {
          ...state,
          actionConfigButton: action.payload,
        };
      default:
        return state;
    }
  };
  