import { IRunner } from "../../classes";
import { Action, AlgorithmParams, ResultData, AppState } from "../../types/interface.d";
import { ChartsManager } from "../ChartsManager";
import { FormAckley } from "../FormAckley";
import { Container, Spinner } from "./styles";

interface IContentContainerProps {
  dispatch: React.Dispatch<Action>;
  appState: string;
  algorithmParams: AlgorithmParams,
  resultData: ResultData
}

export function ContentContainer(props: IContentContainerProps) {

    /*
    *   Este es el contenedor de las distintas fases de la aplicacion
    *   
    *   Manejar mediante props el paso/contenido requerido (Datos, carga, muestra...)
    */

    const runnerParams: IRunner = {
      dimensions: props.algorithmParams.dimensions,
      numberOfGenerations: props.algorithmParams.iterations,
      populationSize: props.algorithmParams.population,
      method: props.algorithmParams.survivalSelection,
      elitismPercentage: props.algorithmParams.survivalSelectionBias,
      tournamentPercentage: props.algorithmParams.survivalSelectionBias,
    }

    return (
      <Container>
        {props.appState == AppState.APP_STATE_FORM_VALUE &&
          <FormAckley dispatch={props.dispatch} algorithmParams={props.algorithmParams}/>
        }
        {props.appState == AppState.APP_STATE_LOADING_VALUE &&
          <Spinner />
        }
        {props.appState == AppState.APP_STATE_DATA_VALUE &&
          <ChartsManager runs={3} params={runnerParams} />
        }
      </Container>
    );
  }