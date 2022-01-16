import * as Actions from "./mainComponentActions"

export function mainReducer(state: MainState, action: Action): MainState {
  switch (action.type) {
    case Actions.ACTION_CHANGE_TO_FORM_VIEW:
      return {
        ...state,
        appState: AppState.APP_STATE_FORM_VALUE
      };
    case Actions.ACTION_CHANGE_TO_DATA_VIEW:
      return {
        ...state,
        appState: AppState.APP_STATE_DATA_VALUE
      };
    default:
      throw new Error();
  }
}