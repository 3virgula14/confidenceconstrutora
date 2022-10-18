import { component$, useContextProvider, useResource$, useStore } from '@builder.io/qwik';
import {  NavigationContext } from '~/components/L';
import RLogo from '~/components/RLogo';
import RPortfolio from '~/components/RPortfolio';

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
  
  console.log(data);
  const derivedData = JSON.parse(JSON.stringify(data))
  const derivedDataKeys = Object.keys(derivedData);
  const indexedData = derivedDataKeys[derivedDataKeys.indexOf(state.dataType as string)]
  const c_data = derivedData[indexedData][parseInt(state.dataIndex)]; //todo: link mockData and dataType together
  return (
    <div id="whole">
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
      {c_data!=undefined?
  
      <RPortfolio 
      descs={c_data.descs}
      photos={c_data.photos}
      title={c_data.title}
      />
      : <div style={{height:"400px"}}></div>}
    </div>
  );
});

export async function getData():Promise<string>{
  const resp = await fetch("data.json");
  const json = await resp.json();
  console.log("getData", json)
  return json;
}