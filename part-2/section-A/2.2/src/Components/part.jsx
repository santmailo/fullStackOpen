
const Part = ({ parts }) => {
    const total = parts.reduce((sum,part) => sum+part.exercises,0);
    return (
        <div>
            {parts.map(part => <p key={part.id}>{part.name} {part.exercises}</p>)}
            <p>Total of {total} excercises</p>
        </div>
    )
}

export default Part;