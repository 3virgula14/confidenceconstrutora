import { $, component$, } from '@builder.io/qwik';
import {PortfolioImgGlryPhoto} from '../../../types'

export interface RImgProps {
    index: number,
    d: PortfolioImgGlryPhoto
}

export const handler = $((e:MouseEvent) => {
  if(e.target){
    const parentElement = (e.target as HTMLDivElement).parentElement;
    if(parentElement){
      const test = parentElement.classList.contains("actived")||false;
      parentElement.classList[`${!test ? "add": "remove"}`]("actived") 
      if(!test) {
        const imgGlr = document.querySelector("#img-galery")
        if(imgGlr!=null)
          imgGlr.scrollTop = 0
      }
    }
  }
})

export default component$((props: RImgProps) => {
    const {d, index} = props
    console.log("d.foto> ",d.foto.split('.').pop() == "mp4")
    return (
        <div 
          className={`item `} 
          id={`img-galery-item#${index}`}
          style="height: 300px">
          {d.foto.split('.').pop() == "mp4"?
          <video onClick$={handler} muted={true} autoPlay={true} loop={true}>
            <source src={d.foto} type="video/mp4"></source>
          </video>
          : 
          <img 
            onClick$={handler}
          src={d.foto} alt={d.shortstory} />
}
          
          <span style={{pointerEvents: 'none'}}>
            <caption>
              {d.shortstory}
            </caption>
            {d.tailstory}
          </span>
        </div>
        )

});