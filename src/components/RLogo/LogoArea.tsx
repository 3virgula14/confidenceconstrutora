import { component$ } from "@builder.io/qwik";

export default component$(()=>{
    return (<div id="img" class="activated">
        <ul>
            <li>Site em construção</li>
        </ul>
    <img onClick$={(e)=> {
        const parentNode = ((e.target as HTMLElement).parentNode as any)
        const contains = parentNode.classList.contains("activated");
        parentNode.classList[`${contains? "remove": "add"}`]("activated");
        
    }} src={"/favicon.png"} />
</div>)
})