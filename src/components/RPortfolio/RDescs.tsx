import { component$, JSXChildren, } from '@builder.io/qwik';
import md from 'markdown-it';
import { PortfolioImgGlryPhoto } from '../../../types';
import "./RDescs.css"

export interface RDescsProps {
    story: {
        twitterlike: string,
        "2paraph": string,
    },
    sessions: Array<PortfolioImgGlryPhoto>
}

export default component$((props: RDescsProps) => {
    if(!props.story)
        return <></>
    return(
        <>
            <section>
                <p dangerouslySetInnerHTML={md().render(props.story.twitterlike)}>
                </p>
            </section>
            <section>
                <p dangerouslySetInnerHTML={md().render(props.story["2paraph"])}>
                </p>
            </section>
            <section>
                {props.sessions.map((session:PortfolioImgGlryPhoto)=>{
                    return(
                        <p dangerouslySetInnerHTML={md().render(session.mdsession)}>
                        </p>
                    )
                }) as Array<JSXChildren>}
            </section>
        </>)
})