import { component$, } from '@builder.io/qwik';
import {PortfolioImgGlryPhoto} from '../../../types'

export interface RImgProps {
    index: number,
    d: PortfolioImgGlryPhoto
}

export default component$((props: RImgProps) => {
    const {d, index} = props
    console.log(d)
    return (
        <div 
          className={`item `} 
          id={`img-galery-item#${index}`}
          style="height: 300px">
          <img 
            onClick$={(e:MouseEvent) => {
              if(e.target){
                let test:boolean = false;
                const parentElement = (e.target as HTMLDivElement).parentElement;
                if(parentElement){
                  test = parentElement.classList.contains("actived")
                  parentElement.classList[`${!test ? "add": "remove"}`]("actived") 
                  if(!test) {
                    const imgGlr = document.querySelector("#img-galery")
                    if(imgGlr!=null)
                      imgGlr.scrollTop = 0
                  }
                }
              }
            }}
          src={d.foto} alt={d.shortstory} />
          <span style={{pointerEvents: 'none'}}>
            <caption>
              {d.shortstory}
            </caption>
            {d.tailstory}
          </span>
        </div>
        )

});