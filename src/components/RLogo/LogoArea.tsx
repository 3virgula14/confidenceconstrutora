import { component$, JSXNode } from "@builder.io/qwik";

export default component$(():JSXNode<any>=>{
    
    return (
    <div id="img" class="activated">
        <img onClick$={(e)=> {
            const parentNode = ((e.target as HTMLElement).parentNode as any)
            const contains = parentNode.classList.contains("activated");
            parentNode.classList[`${contains? "remove": "add"}`]("activated");
            
        }} src={"/favicon.png"} />
        <ul>
            <li>Site em construção</li>
        </ul>
    </div>)
})