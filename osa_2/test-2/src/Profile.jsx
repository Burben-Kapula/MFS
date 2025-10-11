


function Profile({Pfoto,PfotoAlt, Pname, Ptext, Who, ProgLang0, ProgLang1, ProgLang2, ProgLang3, ProgLang4, ProgLang5}) {
    return (
        <>
            <div className="Header">
                <div className={'Profile-card'}>
                    <div className={'Profile-foto'}><img src={Pfoto} alt={PfotoAlt}/> <p>{Who}</p></div>
                    <div className={'Profile-name'}><h2>{Pname}</h2></div>
                    <div className={'Profile-text'}>{Ptext}</div>
                </div>
                    <div className={'Profile-description'}>
                        <ul>
                            <li>{ProgLang0}</li>
                            <li>{ProgLang1}</li>
                            <li>{ProgLang2}</li>
                            <li>{ProgLang3}</li>
                            <li>{ProgLang4}</li>
                            <li>{ProgLang5}</li>
                            <p></p>
                        </ul>
                    </div>
            </div>
        </>
    )
}

export default Profile