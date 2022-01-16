import { Container } from "@mui/material";

interface IContentContainerProps {
  dispatch: React.Dispatch<Action>;
  appState: string;
}

export function ContentContainer(props: IContentContainerProps) {

    /*
    *   Este es el contenedor de las distintas fases de la aplicacion
    *   
    *   Manejar mediante props el paso/contenido requerido (Datos, carga, muestra...)
    */

    return (
      <Container className="content-container" maxWidth="lg">
        {props.appState == AppState.APP_STATE_FORM_VALUE
          //LLamar a FormContent
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