function Item({name, isPacked}) {
    // // use ? and :
    // return (
    //     <li className="item">
    //         {isPacked
    //             ? (<del>{name + ' ✔'}</del>)
    //             : name
    //         }
    //     </li>
    // );

    // use &&
    return (
        <li className="item">
            {isPacked ? (<del>{name}</del>) : name} {isPacked && '✔'}
        </li>
    );
}

export function PackingList() {
    return (
        <section>
            <h1>TruongNV's Packing List</h1>
            <ul>
                <Item
                    isPacked={true}
                    name="Space suit"
                />
                <Item
                    isPacked={true}
                    name="monitor"
                />
                <Item
                    isPacked={false}
                    name="coffee bag"
                />
            </ul>
        </section>
    );
}