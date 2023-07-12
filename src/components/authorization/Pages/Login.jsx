/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

import './Login.css'




export default function Login() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2'>
        <div> 
            <form style={{width: "510px" , 
                          height: "580px" ,
                          background: "black" ,
                          padding: "10px" , 
                          margin: "auto", 
                          position: "flex" , 
                          borderRadius: "8px" , 
                          marginTop: "200px"}}>
                <img className="logo" alt="" src="/logo2.svg" style={{marginLeft:"40px" , marginTop:"48px"}} />
                <h2 style={{height: "24px"  , 
                            weight: "188px" , 
                            color: "white" , 
                            fontWeight: "700" , 
                            fontStyle:"normal" , 
                            fontSize: "30px" , 
                            marginLeft:" 40px" , 
                            textTransform:"uppercase"}}>ავტორიზაცია</h2>
                <h3 style={{color: "white" , 
                            fontSize:"10px" , 
                            fontStyle:" normal" , 
                            fontWeight:"400" , 
                            marginLeft:"40px" ,
                            lineHeight:"normal"}}>შეიყვანე პირადი ინფორმაცია და დაიწყე თამაში</h3>
                <div>
                    <label style={{width:"400px" , 
                                   margin:"auto" , 
                                   color:"#8A8A8A" , 
                                   height:"70px" }} /><img className='sms' alt='' src='/user.svg' style={{position:"absolute" , 
                                                                                                         alignSelf:"flex-start" , 
                                                                                                         marginLeft:"60px" , 
                                                                                                         marginTop:"24px"}} />
                    <input type='username' id="username" placeholder='ექაუნთი' style={{fontWeight:"bold" ,
                                                                                       fontFamily:"Noto Sans Georgian" , 
                                                                                       textAlign:"center" ,
                                                                                       outlineColor:"white" , 
                                                                                       color:"white" }} />
                </div>
                <div>
                    <label style={{width:"400px" ,
                                   margin:"auto" , 
                                   color:"#8A8A8A" , 
                                   height:"70px"}} /><img className='lock' alt='' src='/lock.svg' style={{position:"absolute" , 
                                                                                                        alignSelf:"flex-start" , 
                                                                                                        marginLeft:"60px" , 
                                                                                                        marginTop:"23px"}} />
                    <input type='password' id="password" placeholder='პაროლი' style={{fontWeight:"bold" ,
                                                                                       fontFamily:"Noto Sans Georgian" , 
                                                                                       textAlign:"center" ,
                                                                                       outlineColor:"white" , 
                                                                                       color:"white"}}  />
                </div>
                <div>
                    <label><img className="arrow" alt='' src='/arrow-down.svg' style={{position:"absolute" , 
                                                                                       marginLeft:"44px" , 
                                                                                       marginTop:"5px"}}/></label>
                    <input type="checkbox" id="checkbox" style={{position:"absolute" , 
                                                                 alignSelf:"flex-start" ,  
                                                                 marginLeft:"-140px" , 
                                                                 marginTop:"3px" , 
                                                                 backgroundColor:"#DBFF00" , 
                                                                 borderRadius:" 4px" , 
                                                                 padding:"2px" , 
                                                                 gap:"10px" }}/>
                                                                          
                    <p style={{color:"grey" , 
                               marginLeft:"70px" ,
                               fontSize:"12px"}}>დამიმახსოვრე 
                     <a style={{color:"grey" , 
                                textAlign:"right" , 
                                marginLeft:"100px" , 
                                fontSize:"12px"}}>დაგავიწყდა პაროლი?<a href=""style={{color:"#DBFF00" ,textAlign:"right" ,}} >  აღადგინე</a></a></p>

                </div>
                <div className='authorization'>
                    <button style={{height:"80px" , 
                                    width:"428px" , 
                                    padding:"24px" , 
                                    justifyContent:"center" , 
                                    margin:"auto" , 
                                    fontWeight:"510" , 
                                    fontSize:" 16px" , }}>ავტორიზაცია<img className="image" src="/vuesaxlinearlogin.svg" alt=''/></button>
                    <p style={{color:"white" , 
                               width:"339px" , 
                               height:"22px" , 
                               justifyContent:"center" , 
                               marginLeft:"80px" , 
                               fontSize:"16px"}}>არ ხარ დარეგისტრირებული?<a href="registration/src/components/Registration.jsx" style={{color:"#DBFF00" , 
                                                                                                                                          border:"24px" , 
                                                                                                                                          fontSize:"16px" , 
                                                                                                                                          marginLeft:"4px" ,  
                                                                                                                                          position:"fixed" }}>Registartion</a></p>
                </div>           
            </form>
        </div>   
    </div>
  )
}
