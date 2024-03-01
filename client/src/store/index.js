import { createStore, combineReducers } from "redux";

const initial_submenu_state = {
  activeButton: "Todos os baralhos",
};

const initial_baralho_state = {
  actionConfigButton: "",
};

const submenuReducer = (state = initial_submenu_state, action) => {
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

const baralhosReducer = (state = initial_baralho_state, action) => {
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

const rootReducer = combineReducers({
  submenu: submenuReducer,
  baralhos: baralhosReducer,
});

const store = createStore(rootReducer);

export default store;
