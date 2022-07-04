import { IRunner } from "../../classes";
import { Action, AlgorithmParams, AppState } from "../../types/interface.d";
import { FileDialog } from "../FileDialogue/fileDialogComponent";
import { ACTION_CHANGE_TO_DATA_VIEW, ACTION_CHANGE_TO_FORM_VIEW, ACTION_CHANGE_TO_LOADING_VIEW } from "../mainComponentActions";
import { Button, Container } from "./styles";

interface IFooterProps {
  dispatch: React.Dispatch<Action>;
  appState: string;
  algorithmParams: AlgorithmParams;
}

export const Footer = (props: IFooterProps) => {
    
    /*
    *   Poner botones para arranque de simulacion, vuelta atras y 
    *   funciones varias que se crean convenientes
    */

    const _onSubmitClick = () => {
      props.dispatch({payload: {}, type: ACTION_CHANGE_TO_LOADING_VIEW});

      const runnerParams: IRunner = {
        dimensions: props.algorithmParams.dimensions,
        numberOfGenerations: props.algorithmParams.iterations,
        populationSize: props.algorithmParams.population,
        method: props.algorithmParams.survivalSelection,
        elitismPercentage: props.algorithmParams.survivalSelectionBias,
        tournamentPercentage: props.algorithmParams.survivalSelectionBias,
      }
      const myWorker = new Worker(
        new URL('../../workers/main.worker.ts', import.meta.url)
      );
      myWorker.onmessage = ($event) => {
        if ($event && $event.data) {
          props.dispatch({payload: {}, type: ACTION_CHANGE_TO_DATA_VIEW});
        }
      }
      myWorker.postMessage({ runnerParams });
    }

    const _onBackClick = () => {
      props.dispatch({payload: {}, type: ACTION_CHANGE_TO_FORM_VIEW});
    }

    const _onDownloadConfig = () => {
      var FileSaver = require('file-saver');
      var blob = new Blob([
        `Runs: ${props.algorithmParams.runQuantity}`,
        '\n',
        `Dimensions: ${props.algorithmParams.dimensions}`,
        '\n',
        `Population: ${props.algorithmParams.population}`,
        '\n',
        `SurvivalSelection: ${props.algorithmParams.survivalSelection}`,
        '\n',
        `SurvivalSelectionBias: ${props.algorithmParams.survivalSelectionBias}`,
        '\n',
        `Iterations: ${props.algorithmParams.iterations}`,
      ], {type: "text/plain;charset=utf-8"});
      FileSaver.saveAs(blob, `algorithmParams.cfg`);
    }    

    return (
      <Container>
          {props.appState === AppState.APP_STATE_FORM_VALUE &&
            <FileDialog dispatch={props.dispatch}></FileDialog>
          }
          {props.appState !== AppState.APP_STATE_DATA_VALUE &&
            <Button onClick={_onSubmitClick} disabled={props.appState === AppState.APP_STATE_LOADING_VALUE}> Ejecutar </Button>
          }
          {props.appState === AppState.APP_STATE_DATA_VALUE &&
            <Button onClick={_onBackClick}> Volver </Button>
          }
          {props.appState === AppState.APP_STATE_DATA_VALUE &&
            <Button onClick={_onDownloadConfig}> Guardar Config </Button>
          }
      </Container>
    );
}