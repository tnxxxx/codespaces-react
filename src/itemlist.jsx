import React,{useEffect, useState} from "react";

function Item({name,isPacked}){
    return (
        <li>
            {name}{isPacked && '✔'}{!isPacked && '✗'}
        </li>
    )
}

export default function ItemList(){
    const [serch,setSerch] = useState("Type here!");
    useEffect(() => {
        console.log("This companent is Loaded!");
        return () =>{
            alert("Un Load!")
        }
    },[]);
    const items = [{name:"Sunglass",isPacked:true},
        {name:"Sunblock",isPacked:false},
        {name:"Swimming suit",isPacked:true}, 
        {name:"Towel",isPacked:true},
        {name:"Powerbank",isPacked:true},
        ];
    const filterList = items.filter(i => i.name.toLowerCase().includes(serch.toLowerCase()));
    const itemList = filterList.map(i=><Item key={i.name} 
        name={i.name} isPacked={i.isPacked}/>)
    
    return (
        <ui>
            <input type="text" 
                onChange = {e => {setSerch(e.target.value)}}>
            </input>
            <h3>Item result:</h3>
            {itemList}
        </ui>
    )
}


