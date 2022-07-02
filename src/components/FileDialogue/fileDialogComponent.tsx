import React, { useEffect } from "react";
import { Action, AlgorithmParams } from "../../types/interface";
import { ACTION_SET_PARAMS_FROM_FILE } from "../mainComponentActions";
import { Button } from "./styles";

interface IFileDialogProps {
    dispatch: React.Dispatch<Action>;
}

export const FileDialog = (props: IFileDialogProps) => {
    
    let fileSelector: any;
        
    const handleFileSelect = (e: any) => {
        e.preventDefault();
        fileSelector.click();
    }
    
    const showFile = (e:any) => {
        e.preventDefault();
        const reader = new FileReader();
        let params: AlgorithmParams = {
            dimensions: 0,
            iterations: 0,
            population: 0,
            runQuantity: 0,
            survivalSelection: '',
            survivalSelectionBias: 0
        };
        reader.onload = (e) => {
          const text = e.target!.result;
          const lines = text?.toString().split(/\r?\n/);
          lines?.forEach((line: string) => {
            const parameterKeyValue = line.split(":");
            switch (parameterKeyValue[0]) {
                case "Runs":
                        params.runQuantity = parseInt(parameterKeyValue[1].trim());
                    break;
                case "Dimensions":
                        params.dimensions = parseInt(parameterKeyValue[1].trim());
                    break;
                case "Population":
                        params.population = parseInt(parameterKeyValue[1].trim());
                    break;
                case "SurvivalSelection":
                        params.survivalSelection = parameterKeyValue[1].trim();
                    break;
                case "SurvivalSelectionBias":
                        params.survivalSelectionBias = parseInt(parameterKeyValue[1].trim());
                    break;
                case "Iterations":
                        params.iterations = parseInt(parameterKeyValue[1].trim());
                    break;
                default:
                    break;
            }
            
          });

          props.dispatch({payload: params, type: ACTION_SET_PARAMS_FROM_FILE});
        };
        
        reader.readAsText(e.target.files[0]);

    };

    const buildFileSelector = () => {
        const fileSelector = document.createElement('input');
        fileSelector.setAttribute('type', 'file');
        fileSelector.addEventListener('change', (e) => {
            showFile(e);
        });
        return fileSelector;
    }

    useEffect(() => {
        fileSelector = buildFileSelector();
    }, []);

    return <Button onClick={handleFileSelect}>Cargar Config</Button> 
  }
