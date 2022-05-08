import { Action, AlgorithmParams, ResultData, AppState } from "../../types/interface.d";
import { FormAckley } from "../FormAckley";
import { Container } from "./styles";

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

    

    return (
      <Container>
        {props.appState == AppState.APP_STATE_FORM_VALUE &&
          <FormAckley dispatch={props.dispatch} algorithmParams={props.algorithmParams}/>
        }
        {props.appState == AppState.APP_STATE_LOADING_VALUE
          //LLamar a LoadingContent
        }
        {props.appState == AppState.APP_STATE_DATA_VALUE
          //LLamar a DataView
        }
      </Container>
    );
  }