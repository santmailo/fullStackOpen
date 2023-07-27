const PersonForm = ({addPersons, addNewName, addNewNumber}) => {
    return (
        <form onSubmit={addPersons}>
        <div>
          name: <input onChange={addNewName}/>
        </div>
        <div>
          number: <input onChange={addNewNumber}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    )
}

export default PersonForm;