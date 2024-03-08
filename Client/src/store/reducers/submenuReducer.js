const initial_submenu_state = {
    activeButton: "Todos os baralhos",
  };

  export const submenuReducer = (state = initial_submenu_state, action) => {
    switch (action.type) {
      case "UPDATE_ACTIVE_BUTTON_SUBMENU":
        return {
          ...state,
          activeButton: action.payload,
        };
      default:
        return state;
    }
  };
  