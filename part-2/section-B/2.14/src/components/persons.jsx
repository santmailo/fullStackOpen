const Persons = ({ persons, deletePerson}) => {
    return (
        <div>
        {persons.map((person) => (
            <div key={person.id}>
                {person.name} - {person.number}
                <button onClick={() => {
                    window.confirm(`Delete ${person.name}?`) && deletePerson(person.id);
                }}>delete</button>
            </div>
        ))}
        </div>
    );
}

export default Persons;