const Filter = ({ search, searchResult}) => {
    return (
        <div>
            <input type="text" placeholder="Search..." onChange={search}/>
            {searchResult.map((person) => <p key = {person.name}>{person.name} - {person.number}</p>)}
        </div>
    );
}

export default Filter;