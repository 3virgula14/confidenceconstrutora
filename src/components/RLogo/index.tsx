import { component$,
    } from '@builder.io/qwik';
//import { NavigationContext} from '../L';


export interface RLogoProps{
    dataIndex: string,    
    dataIndexAttribute: string,
    data: any,
    location: string,
}

//  interface NavigatorStateStruct {
//     dataIndex: number,
//     dataIndexAttribute: string,
//     dataType: string
//   }

import "./styles.css";

export default  component$((props: RLogoProps) => {   


    //const NavigatorLocalState:NavigatorStateStruct = useContext(NavigationContext) as NavigatorStateStruct;
    const handleHrefLimites = (portifolioIndex:number) => {
        if(portifolioIndex<=0 || portifolioIndex>props.data.length) return "#"
        return `${portifolioIndex}`
    }
    
    return (
        <div id="LogoNavigator">
            <div id="bar">
                
                <div id="nav_links">
                    <a style="color: #9d9d9d;
                        text-decoration: none;" href="/sobre">Quem Somos</a>
                    <a style="color: #9d9d9d;
                        text-decoration: none;"   href="/portfolio">Portfólio</a></div>
                
                <title>{(props.data[parseInt(props.location)-1])["titulo"]}</title>
                <span style={{
                        alignItems: "center",
                        display: "flex",
                        flexDirection: "row",
                        gap: "3px",
                        cursor: "pointer",
                        pointerEvents: "all"}}>

                    <a href={handleHrefLimites(parseInt(props.location)-1)}>
                        <svg style={{transform: "rotate(180deg)"}} class="wh-24" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </a>
                    <span>{parseInt(props.location)}/{props.data.length}</span>
                    
                    <a href={handleHrefLimites(parseInt(props.location)+1)}>
                        <svg class="wh-24" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </a>
                </span>
            </div>
            
            <div id="img" class="activated">
            <img onClick$={(e)=> {
                const parentNode = ((e.target as HTMLElement).parentNode as any)
                const contains = parentNode.classList.contains("activated");
                parentNode.classList[`${contains? "remove": "add"}`]("activated");
                
            }} src={"/favicon.png"} />
            </div>
        </div>
    )
})
