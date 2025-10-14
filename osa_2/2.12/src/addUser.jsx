function addUser ({num, name}) {
    let add = {num, name}
    if (name !== '') {
        add.push(name)
    }

    if (num !== '') {
        add.push(name)
    }
    return (
        <li>{add}</li>
    )
}
export default addUser