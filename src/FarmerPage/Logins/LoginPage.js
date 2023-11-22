import React ,{useState} from 'react'
export default function LoginPage() {
  
  const divsty={
    textAlign:'left',paddingTop:'70px',marginLeft:'50px'
  }

  const boxsty={
    width: "300px", height: "40px",border:'none',color:'black',backgroundColor:'lightgrey',
    borderRadius:'10px'
  }

  const butsty={
    width: "100px", height: "35px", border:'none',marginTop:'10px',borderRadius:'10px',
    backgroundColor:'#28a745',color:'white'    
  }

  const signupsty={
      display:'flex',gap:'20px',marginTop:'20px'
  }


  const mainsty={
    height:'400px',marginLeft:'600px',borderRadius:'20px',width:'400px',marginTop:'150px',
    backgroundColor:'lightgrey'
  }

  const bodysty={
    backgorundImage:'url("https://tse1.mm.bing.net/th?id=OIP.-djxPsTkoyKhyR7ORX0T-wHaEK&pid=Api&P=0&h=180")'
  }

  return (
    <div style={bodysty}>
    <div style={mainsty}>
      <form style={divsty}>
        <input type='text' placeholder='Username' style={boxsty}></input><br></br><br></br>
        <input type='password' placeholder='Password' style={boxsty}></input><br></br><br></br>
        <button style={butsty}>Login</button><br></br><br></br>
        <a href='#' style={{color:'#28a745'}}>Forgot Password?</a>
        <div style={signupsty}>
            <p style={{color:'#28a745'}}>Don't Have Account?</p>
            <button style={butsty}>Sign Up</button>
        </div>
      </form>
    </div>
    </div>
  )
}
