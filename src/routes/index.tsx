import { component$, Resource, useContextProvider, useResource$, useStore } from '@builder.io/qwik';
import {  NavigationContext } from '~/components/L';
import RLogo from '~/components/RLogo';
import RPortfolio from '~/components/RPortfolio';
import {  RPortfolioProps } from '../../types';

import "../components/img-galery.css";
import "./content.css"

export default component$(() => {
  
  const state = useStore({
    dataIndex: "1",
    dataIndexAttribute: "title",
    dataType: "portfolio"
  })

  useContextProvider(NavigationContext, state);
  
  const data = useResource$(getData);

  return (
    <div id="whole">
      <Resource
        value={data}
        onPending={() => <>Loading...</>}
        onRejected={(error) => <>Error: {error.message}</>}
        onResolved={(data) =>{ 
          const derivedData = data;
          const derivedDataKeys = Object.keys(derivedData);
          const indexedData = derivedDataKeys[derivedDataKeys.indexOf(state.dataType as string)]
          const c_data = derivedData[indexedData][parseInt(state.dataIndex)] as RPortfolioProps; //todo: link mockData and dataType together
          console.log(">>>",c_data);
          return (
          <>
            <RLogo 
              location={ state.dataIndex.toString()}
              data={derivedData[indexedData]} 
              dataIndex={state.dataIndex} 
              dataIndexAttribute={state.dataIndexAttribute}>
              <div>
                <a> Quem Somos </a>
                <a> Portfólio </a>
              </div>
            </RLogo>
        
            <RPortfolio 
            sessions={c_data.sessions}
            story={c_data.story}
            titulo={c_data.titulo}
            /></>
        )}}
        />
      
    </div>
  );
});

export async function getData():Promise<string>{
  const resp = await fetch("https://www.construtoraconfidence.com/data.json");
  const json = await resp.json();
  return json;
}