function Subfile({card, name, text}) {



    return(
        <div className="Card">
            <div className="card-body">
                <p>{card}</p>
                <div className='Foto'>
                    <img src="" alt='foto1'/></div>
                    <p>{name}</p>
                    <p>{text}</p>
            </div>
        </div>
    )
}
export default Subfile;