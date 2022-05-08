import { AppState } from "../../types/interface.d";
import { Container, Label } from "./styles";

interface IHeaderProps {
  appState: string;
}

export function Header(props: IHeaderProps) {
    
    /*
    * Usar props para conocer en que parte de la aplicacion esta
    * y adaptar el contenido del encabezado. Manejar con un reducer central en el main y pasar props
    */
    return (
      <Container className="header-text">
         <Label>
            Evolutive Algorithms - Ackley Function:
          </Label>
          {props.appState === AppState.APP_STATE_FORM_VALUE &&
            <Label>Parameters Form</Label>
          }
          {props.appState === AppState.APP_STATE_LOADING_VALUE &&
            <Label>Execution</Label>
          }
          {props.appState === AppState.APP_STATE_DATA_VALUE &&
            <Label>Execution Results</Label>
          }
      </Container>
    );
  }