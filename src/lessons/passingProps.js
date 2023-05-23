const img_url = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStImZ_BSBPCeBGe6RIonkMw_D5sHB8xg0hVVDtoOE&s'


function Avatar({person, size= 200}) {
    return (
        <img
            className="avatar"
            src={img_url}
            alt={person.name}
            width={size}
            height={size}
        />
    );
}

// // use destructuring
// function AvatarDestruction(props) {
//     let person = props.person;
//     let size = props.size;
//
//     return (
//         <img
//             className="avatar"
//             src={img_url}
//             alt={person.name}
//             width={size}
//             height={size}
//         />
//     );
// }

// repetitive code
function Profile(props) {
    return (
        <div className="card">
            <Avatar {...props} />
        </div>
    )
}


// passing JSX as children
function Card({children}) {
    return (
        <div>
            {children}
        </div>
    );
}

function Clock({color, time}) {
    return (
        <h1 style={{color: color}}>
            {time}
        </h1>
    );
}

export function ExportAvatar() {
    return (
       <Card>
           <Profile
               person={{name: 'TruongNV', imageId: '1'}}
           />
           <Clock/>
       </Card>
    );
}