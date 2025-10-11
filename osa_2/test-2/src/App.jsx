import './App.css'
import Subfile from "./Subfile.jsx";
import './index.css'
import Profile from './Profile.jsx'
import ProfileFoto1 from './assets/Nice.jpeg'
function App() {
 //   function Profile({Pfoto,PfotoAlt, Pname, Ptext}) {

    console.log('App loaded!');
    return(
        <>
        <p>Hello world</p>
            <div>
                <div>
                    <Profile Pfoto={ProfileFoto1} PfotoAlt={'Avatar'} Pname={'Name'} Ptext={'Info'} Who={'Developer'} ProgLang0={'Html'} ProgLang1={'Css'} ProgLang2={'JavaScript'} ProgLang3={'None'} ProgLang4={'None'} ProgLang5={'None'} />
                </div>
                <div className="App">
                    <Subfile card={'Card1'} name={'Name1'} text={'UIAUIA'}/>
                    <Subfile card={'Card1'} name={'Name1'} text={'UIAUIA'}/>
                    <Subfile card={'Card1'} name={'Name1'} text={'UIAUIA'}/>
                    <Subfile card={'Card1'} name={'Name1'} text={'UIAUIA'}/>
                    <Subfile card={'MAxim'} name={'Kapula'} text={'aaaa'}/>
                </div>
            </div>
            <div>
                <div>
                    <Profile Pfoto={ProfileFoto1} PfotoAlt={'Avatar'} Pname={'Name'} Ptext={'Info'} Who={'Developer'} ProgLang0={'Html'} ProgLang1={'Css'} ProgLang2={'JavaScript'} ProgLang3={'None'} ProgLang4={'None'} ProgLang5={'None'} />
                </div>
                <div className="App">
                    <Subfile card={'Card1'} name={'Name1'} text={'UIAUIA'}/>
                    <Subfile card={'Card1'} name={'Name1'} text={'UIAUIA'}/>
                    <Subfile card={'Card1'} name={'Name1'} text={'UIAUIA'}/>
                    <Subfile card={'Card1'} name={'Name1'} text={'UIAUIA'}/>
                    <Subfile card={'MAxim'} name={'Kapula'} text={'aaaa'}/>
                </div>
            </div>
            <div>
                <div>
                    <Profile Pfoto={ProfileFoto1} PfotoAlt={'Avatar'} Pname={'Name'} Ptext={'Info'} Who={'Developer'} ProgLang0={'Html'} ProgLang1={'Css'} ProgLang2={'JavaScript'} ProgLang3={'None'} ProgLang4={'None'} ProgLang5={'None'} />
                </div>
                <div className="App">
                    <Subfile card={'Card1'} name={'Name1'} text={'UIAUIA'}/>
                    <Subfile card={'Card1'} name={'Name1'} text={'UIAUIA'}/>
                    <Subfile card={'Card1'} name={'Name1'} text={'UIAUIA'}/>
                    <Subfile card={'Card1'} name={'Name1'} text={'UIAUIA'}/>
                    <Subfile card={'MAxim'} name={'Kapula'} text={'aaaa'}/>
                </div>
            </div>
        </>
    )
}

export default App