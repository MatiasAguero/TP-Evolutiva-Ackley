import { Container } from "@mui/material";

interface IContentContainerProps {
  appState: string;
}

const appStateFormValue = 'variablesForm';
const appStateLoadingValue = 'algorithmLoading';
const appStateDataViewValue = 'dataView';

export function ContentContainer(props: IContentContainerProps) {

    /*
    *   Este es el contenedor de las distintas fases de la aplicacion
    *   
    *   Manejar mediante props el paso/contenido requerido (Datos, carga, muestra...)
    */

    return (
      <Container className="content-container" maxWidth="lg">
        {props.appState == appStateFormValue
          //LLamar a FormContent
        }
        {props.appState == appStateLoadingValue
          //LLamar a LoadingContent
        }
        {props.appState == appStateDataViewValue
          //LLamar a DataView
        }
      </Container>
    );
  }