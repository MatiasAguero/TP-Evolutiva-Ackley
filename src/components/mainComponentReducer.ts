import { MainState, Action, AppState } from "../types/interface.d";
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
    case Actions.ACTION_CHANGE_TO_LOADING_VIEW:
      return {
        ...state,
        appState: AppState.APP_STATE_DATA_VALUE
      };
    case Actions.ACTION_RUNS_SLIDER_CHANGE:
      return {
        ...state,
        algorithmParams: {
          ...state.algorithmParams,
          runQuantity: action.payload,
        }
      };
    case Actions.ACTION_DIMENSIONS_SLIDER_CHANGE:
      return {
        ...state,
        algorithmParams: {
          ...state.algorithmParams,
          dimensions: action.payload,
        }
      };    
    case Actions.ACTION_POPULATION_CHANGE:
        return {
          ...state,
          algorithmParams: {
            ...state.algorithmParams,
            population: action.payload,
          }
        };    
    case Actions.ACTION_SURVIVAL_SELECTION_METHOD_CHANGE:
      return {
        ...state,
        algorithmParams: {
          ...state.algorithmParams,
          survivalSelection: action.payload,
        }
      };    
    case Actions.ACTION_SURVIVAL_SELECTION_BIAS_CHANGE:
      return {
        ...state,
        algorithmParams: {
          ...state.algorithmParams,
          survivalSelectionBias: action.payload,
        }
      };    
    case Actions.ACTION_ITERATIONS_CHANGE:
      return {
        ...state,
        algorithmParams: {
          ...state.algorithmParams,
          iterations: action.payload,
        }
      };    
    default:
      throw new Error();
  }
}