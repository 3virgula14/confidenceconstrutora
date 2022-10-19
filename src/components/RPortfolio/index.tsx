import { component$,  } from '@builder.io/qwik';
import { RPortfolioProps } from '../../../types';
import R from '../R';
import RDescs from './RDescs';
import RImgGlry from './RImgGlry';


    
export default component$((props: RPortfolioProps) => {
    
    return(
      <R>
        <RImgGlry q:slot='landing' sessions={props.sessions} />
        <RDescs q:slot='content' story={props.story}/>
      </R>
      )

})