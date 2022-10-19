import { component$, } from '@builder.io/qwik';
import md from 'markdown-it';
import "./RDescs.css"

export interface RDescsProps {
    story: {
        twitterlike: string,
        "2paraph": string,
    }
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
        </>)
})