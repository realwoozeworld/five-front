import React from 'react';
import EventManager from "../../../EventManager";
import Button from '../uikit/Button';
import Title from '../uikit/Title'
import authImageBg from '../img/auth.png'
import regImageBg from '../img/reg.png'
import IconVolumeOn from '../img/volume_on.svg'
import IconVolumeOff from '../img/volume_off.svg'
import music from '../img/music.mp3'

class Authorization extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showAuto: true,
            acceptRules: false,
            isMusicPlay: true,
            login: '',
            password: '',
            mailReg: '',
            loginReg: '',
            passwordReg: '',
            passwordRegCheck: '',
            pagePlayer: '',
            audioUrl: '',
            defaultLogin: '',
            modalrules: false,
        }
    };

    componentDidCatch(error, errorInfo) {
        mp.trigger('client:ui:debug', 'Authorization.jsx', error, errorInfo); // eslint-disable-line
    }

    handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            if (this.state.showAuto) this.clickLogin();
            else this.clickReg();
        }
    }

    componentDidMount() {
        document.addEventListener("keydown", this.handleKeyPress);

        EventManager.addHandler('authMain:2', value => {
            if (value.type === 'login') {
                this.setState({defaultLogin: value.login})

            } else return;
        })

        this.audio = new Audio(music)
        this.audio.load()
    }


    componentWillUnmount() {
        document.removeEventListener("keydown", this.handleKeyPress);
        EventManager.removeHandler('authMain:2');
    }

    handleChange(value) {
        this.setState({ showAuto: value });
    };

    valueLogin(event) {
        this.setState({ login: event.target.value.replace(/[^a-zA-Z0-9]+/g, '') })
    };

    valuePassword(event) {
        this.setState({ password: event.target.value.replace(/[^a-zA-Z0-9]+/g, '') })
    };

    valueMailReg(event) {
        this.setState({ mailReg: event.target.value })
    };

    valueLoginReg(event) {
        this.setState({ loginReg: event.target.value.replace(/[^a-zA-Z0-9]+/g, '') })
    };

    valuePasswordReg(event) {
        this.setState({ passwordReg: event.target.value.replace(/[^a-zA-Z0-9]+/g, '') })
    };

    valuePasswordRegCheck(event) {
        this.setState({ passwordRegCheck: event.target.value.replace(/[^a-zA-Z0-9]+/g, '') })
    };



    clickLogin() {
        try {
            if (!this.state.login)
            {
                mp.trigger('client:user:auth:login', // eslint-disable-line
                    this.state.defaultLogin, this.state.password);
            }
            else {
                mp.trigger('client:user:auth:login', // eslint-disable-line
                    this.state.login, this.state.password);
            }
        } catch (e) {
            console.log(e);
        }
    };

    clickReg() {
        try {
            mp.trigger('client:user:auth:register', // eslint-disable-line
                this.state.mailReg, this.state.loginReg,
                this.state.passwordReg, this.state.passwordRegCheck,
                this.state.acceptRules);
        } catch (e) {
            console.log(e);
        }
    };

    musicChangeState = () => {
        this.setState((value) => (
            {isMusicPlay: !value.isMusicPlay}
        ))
        if (this.state.isMusicPlay) {
            this.audio.play()
        } else {
            this.audio.pause()
        }
    }

    acceptRules = () => {
        this.setState({
            acceptRules: !this.state.acceptRules
        });
    };
    clickCheckRules() {
        this.setState({
            modalrules: true,
        });
    }
    closeRules() {
        this.setState({
            modalrules: false,
        });
    }
    render() {
        return (
            <React.Fragment>
                <div className="grid grid-cols-1 sm:grid-cols-2">
                   <div>
                        <form style={{width: "512px" , 
                                      height: "735px" ,
                                      background: "black" ,
                                      padding:"10px" , 
                                      position:"absolute" , 
                                      borderRadius:"8px" ,
                                      justifyContent:"center",
                                      alignItems:"center" , 
                                      marginLeft:"700px" ,
                                      marginTop:"150px"
        
                                       }}>
                            <img className="logo" alt="" src="/logo.svg" style={{marginLeft:"40px" , marginTop:"48px"}} />
                            <h1 style={{height: "24px"  , 
                                        weight: "188px" , 
                                        color: "white" , 
                                        fontWeight: "700" , 
                                        fontStyle:"normal" , 
                                        fontSize: "30px" , 
                                        marginLeft:" 45px" , 
                                        textTransform:"uppercase" , 
                                        fontFamily:"Noto Sans Georgian"}}>რეგისტრაცია</h1>
                            <h2 style={{color: "white" , 
                                        width:"320px" ,
                                        fontSize:"10px" , 
                                        fontStyle:" normal" , 
                                        fontWeight:"400" , 
                                        marginLeft:"45px" ,
                                        lineHeight:"normal" ,
                                        fontFamily:"Noto Sans Georgian"}}>შეიყვანე პირადი ინფორმაცია და დაიწყე თამაში</h2>
                            <div>
                                <label style={{width:"fixed 400px" , margin:"auto" , color:"#8A8A8A" , height:"80px"}}><img className='user' alt='' src='/user.svg' style={{position:"absolute" , alignSelf:"flex-start" , marginLeft:"60px" , marginTop:"27px"}}></img></label>
                                <input type="username" id="username" placeholder="ექაუნთი" style={{width: "380px", fontWeight:"bold" ,fontFamily:"Noto Sans Georgian" , outlineColor:"white" , color:"white", textAlign:"center"}}></input>
                            </div>
                            <div>
                                <label style={{width:"fixed 400px" , margin:"auto" , color:"#8A8A8A" , height:"80px"}}><img className='sms' alt='' src='/sms.svg' style={{position:"absolute" , alignSelf:"flex-start" , marginLeft:"60px" , marginTop:"27px" }}></img></label>
                                <input type="email" id="email" placeholder="ელ.ფოსტა" style={{width: "380px", fontWeight:"bold" , fontFamily:"Noto Sans Georgian" , outlineColor:"white" , color:"white" ,textAlign:"center"}}></input>
                            </div>
                            <div>
                                <label style={{width:"fixed 400px" , margin:"auto" , color:"#8A8A8A" , height:"80px"}}><img className='lock' alt='' src='/lock.svg' style={{position:"absolute" , alignSelf:"flex-start" , marginLeft:"60px" , marginTop:"24px"}}></img></label>
                                <input type="password" id="password" placeholder="პაროლი" style={{width: "380px", fontWeight:"bold" , fontFamily:"Noto Sans Georgian" , outlineColor:"white" , color:"white" , textAlign:"center"}}></input>
                            </div>
                            <div>
                                <label style={{width:"fixed 400px" , margin:"auto" , color:"#8A8A8A" , height:"80px"}}><img className='lock' alt='' src='/lock.svg' style={{position:"absolute" , alignSelf:"flex-start" , marginLeft:"60px" , marginTop:"25px"}}></img></label>
                                <input type="password" id="password" placeholder="გაიმეორე პაროლი" style={{width: "380px", fontWeight:"bold" ,fontFamily:"Noto Sans Georgian" , outlineColor:"white" , color:"white" , textAlign:"center"}}></input>
                            </div>
                            <div className='authorization'>
                                <button style={{height:"80px" , 
                                                width:"430px" , 
                                                padding:"24px" , 
                                                justifyContent:"center" , 
                                                margin:"auto" , 
                                                fontWeight:"510" , 
                                                fontSize:" 16px" , 
                                                fontFamily:"Noto Sans Georgian"}}>რეგისტრაცია<img className="image" src="/vuesaxlinearlogin.svg" alt=''/></button>
                                <p style={{color:"white" , 
                                           width:"360px" , 
                                           height:"22px" , 
                                           justifyContent:"fixed" , 
                                           marginLeft:"70px" , 
                                           fontSize:"16px" , 
                                           position:"absolute" , 
                                           fontFamily:"Noto Sans Georgian" , 
                                           fontWeight:"400"}}>თქვენ უკვე ხართ რეგისტრირებული? <a href="login/src/components/Login.jsx" style={{color:"#DBFF00" , border:"24px" , fontSize:"16px" , position:"flex" , fontFamily:"Noto Sans Georgian" }}>Login</a></p>
                            </div>    
                        </form>
                    </div>
                </div>
            </React.Fragment>
        )   
    }

export default Authorization;
