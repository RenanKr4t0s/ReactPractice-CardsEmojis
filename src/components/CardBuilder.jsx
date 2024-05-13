import Card from "./Card"


function CardBuilder(props){
    const result = props.array.map(object=>{
        return(
            <Card
                name={object.name}
                emoji={object.emoji}
                meaning = {object.meaning}
                key = {object.id}
            />
        )
    })
    return (
        <dl className="dictionary">
            {result}
        </dl>
    )
}
export default CardBuilder