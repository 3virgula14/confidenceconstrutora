import { component$, } from '@builder.io/qwik';
import {PortfolioImgGlryPhoto} from '../../../types'
import RImg from './RImg';


interface RImgGlryProps {
  sessions: Array<PortfolioImgGlryPhoto>
} 

export default component$((props: RImgGlryProps) => {
  if(!props.sessions)
    return (<></>)
  return(
    <div id="img-galery">
      {props.sessions.map((d:PortfolioImgGlryPhoto, index:number) => <RImg d={d} index={index}/>)}
    </div>
  )
});