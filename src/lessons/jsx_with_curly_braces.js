const person = {
    name: 'TruongNV',
    theme: {
        backgroundColor: 'black',
        color: 'pink'
    }
};

export function TodoList() {
    return (
        <div style={person.theme}>
            <h1>{person.name}'s Todo</h1>
            <img
                className="avatar"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStImZ_BSBPCeBGe6RIonkMw_D5sHB8xg0hVVDtoOE&s"
                alt={person.name}
            />
            <ul>
                <li>Learn React</li>
                <li>Learn English</li>
            </ul>
        </div>
    )
}