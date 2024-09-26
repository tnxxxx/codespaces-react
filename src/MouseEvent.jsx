export default function MouseEvent(){
    return (
        <h1>
            onClick={ e=> alert('onClick')}
             onmouseenter = {e => alert('onmouseenter')}
        </h1>
    )
}