import { component$, useContext,
    } from '@builder.io/qwik';
import { NavigationContext} from '../L';
import LogoArea from './LogoArea';


export interface RLogoProps{
    dataIndex: number,    
    dataIndexAttribute: string,
    data: any,
    location: string,
}

 interface NavigatorStateStruct {
    dataIndex: number,
    dataIndexAttribute: string,
    dataType: string
  }

import "./styles.css";

export default  component$((props: RLogoProps) => {   


    const NavigatorLocalState:NavigatorStateStruct = useContext(NavigationContext) as NavigatorStateStruct;

    return (
        <div id="LogoNavigator">
            <div id="bar">
                
                <title>{(props.data[parseInt(props.location)-1])["titulo"]}</title>
                <span style={{
                        alignItems: "center",
                        flexDirection: "row",
                        gap: "3px",
                        display: "flex",
                        cursor: "pointer",
                        pointerEvents: "all"}}>

                    <span onClick$={() => {
                            console.log("NavigatorLocalState.dataIndex", NavigatorLocalState.dataIndex)
                            if(NavigatorLocalState.dataIndex>1)
                                NavigatorLocalState.dataIndex = (NavigatorLocalState.dataIndex - 1)
                            else
                                NavigatorLocalState.dataIndex = props.data.length
                        }
                    }>
                        <svg style={{transform: "rotate(180deg)"}} class="wh-24" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </span>
                    <span>{parseInt(props.location)}/{props.data.length}</span>
                    
                    <span onClick$={() => {
                            if(NavigatorLocalState.dataIndex<props.data.length)
                                NavigatorLocalState.dataIndex = (NavigatorLocalState.dataIndex + 1)
                            else
                                NavigatorLocalState.dataIndex = 1
                        }
                    }>
                        <svg class="wh-24" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </span>
                </span>
            </div>
            
            <LogoArea/>
        </div>
    )
})
