import React, { useState } from 'react'
import { AppBar, Toolbar, Container, IconButton } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import MailIcon from '@mui/icons-material/Mail';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

export default function FrontPageFarmer() {

  const [size,setSize]=useState(false);
  const big=()=>{ setSize(true);  }
  const small=()=>{ setSize(false);  }
  
  const [size1,setSize1]=useState(false);
  const big1=()=>{ setSize1(true);  }
  const small1=()=>{ setSize1(false);  }
  
  const [size2,setSize2]=useState(false);
  const big2=()=>{ setSize2(true);  }
  const small2=()=>{ setSize2(false);  }

  const [shadow,setShadow]=useState(false);
  const bigshad=()=>{ setShadow(true);  }
  const smallshad=()=>{ setShadow(false);  }
  
  const [navshad,setNavshad]=useState(false);
  const bignavshad=()=>{ setNavshad(true);  }
  const smallnavshad=()=>{ setNavshad(false);  }
  
  const [Butshad,setButshad]=useState(false);
  const bigbutshad=()=>{ setButshad(true);  }
  const smallbutshad=()=>{ setButshad(false);  }

  const butsty1={
    backgroundColor: Butshad?'#162938':'#28a745',color: '#FFFFFF',borderRadius: '5px',border: 'none',marginLeft:'50px',
    cursor: 'pointer',width:'200px',height:'50px',fontSize:'16px', boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'
  }

  // const txtsty={
  //   textShadow: shadow?'2px 2px 4px rgba(0, 0, 0, 0.5)':'none',
  //   transition: 'text-shadow 0.1s ease-in-out'
  // }

  const parasty={
    fontSize:size?'22px':'16px',transition: 'font-size 0.4s ease-in-out',marginLeft:'50px',cursor:'pointer',
  }
  
  const parasty1={
    textAlign:'center',fontSize:size1?'45px':'30px',transition: 'font-size 0.4s ease-in-out',cursor:'pointer',
  }

  const headsty={
    textShadow: shadow?'1px 1px 2px rgba(0, 0, 0, 0.7)':'none',marginLeft:'50px',paddingTop:'20px',
    transition: 'text-shadow 0.1s ease-in-out',cursor:'pointer',
  }

  const divsty={
    fontFamily:"sans-serif",
    marginTop:'-10px'
  }

  const headersty={
    color: '#162938',display:'flex',justifyContent:'space-between',backgroundColor: '#28a745'
  }

  const listy={
    display:'flex',gap:'50px',listStyleType: 'none',marginRight:'50px',marginTop:'30px'
  }

  const butsty2={
    border:'none',cursor:'pointer',backgroundColor:'rgba(0,0,0,0)',
    color: navshad?'#162938':'black',
  }

  const headsty2={
    color:'#28a745',fontSize:size2?'45px':'35px',transition:'font-size 0.4s ease-in-out',paddingTop:'50px',cursor:'pointer',
  }

  const div1sty={
    width:'1000px',height:'450px',marginLeft:'100px',borderRadius:'20px',backgroundColor:'rgba(240, 240, 240, 1)',
    paddingTop:'25px'
  }
  
  const div2sty={
    textAlign:'center',fontFamily:'sans-serif',width:'1000px',height:'400px',
    marginLeft:'300px',marginTop:'50px',borderRadius:'20px',backgroundColor:'rgba(240, 240, 240, 1)',marginBottom:'5 0px'
  }

  return (
    <div style={divsty}>
      
      <header style={headersty}>
        <div>
          <h1 style={{marginLeft:'50px'}}>SAMPLE TYPE</h1>
        </div>
        <div>
          <ul style={listy}>
            <button style={butsty2} onMouseEnter={bignavshad} onMouseLeave={smallnavshad}><li style={{fontSize:'20px'}}>Home</li></button>
            <button style={butsty2} onMouseEnter={bignavshad} onMouseLeave={smallnavshad}><li style={{fontSize:'20px'}}>About</li></button>
            <button style={butsty2} onMouseEnter={bignavshad} onMouseLeave={smallnavshad}><li style={{fontSize:'20px'}}>Services</li></button>
            <button style={butsty2} onMouseEnter={bignavshad} onMouseLeave={smallnavshad}><li style={{fontSize:'20px'}}>Contact</li></button>
          </ul>
        </div>
      </header>
     
        <div>
            <h2 style={parasty1} onMouseEnter={big1} onMouseLeave={small1}>Let's Raise <g style={{color:'#28a745'}}>Sample</g> Together</h2>
        </div>
        <div style={{display:'flex'}}>
            <div style={div1sty}>
                <h1 style={headsty} onMouseEnter={bigshad} onMouseLeave={smallshad}>Empower your cause with Something where<br></br> every <g style={{color:'#28a745'}}>Something creates</g> a ripple effect of <g style={{color:'#28a745'}}>positive changes</g>...</h1><br></br>
                <br></br><div style={parasty} onMouseEnter={big} onMouseLeave={small}>
                  <p>Don' Worry you are in right place...</p><hr></hr>
                  <p>With 0% platform fee,you can raise your Sample</p><br></br>
                </div><br></br>
                <button style={butsty1} onMouseEnter={bigbutshad} onMouseLeave={smallbutshad}>Start Raising Sample</button>
            </div>
            <img src='https://static.vecteezy.com/system/resources/previews/018/742/183/non_2x/3d-minimal-front-blank-pie-chart-icon-business-analysis-marketing-data-analysis-pie-chart-template-for-inserting-information-3d-illustration-free-png.png' alt='' width="600px" height="500px"></img>
        </div>
        <div style={div2sty}>
          <h1 style={headsty2} onMouseEnter={big2} onMouseLeave={small2}>Reason of Something</h1><br></br>
          <p style={{color:'#162938',fontSize:'25px'}}>We're reaching out to you for support in our Something campaign.<br></br>
             Your contribution will directly fuel our mission <g style={{color:'#28a745'}}>Something</g>.<br></br>
              With your help, we can make a real impact and bring  <br></br><g style={{color:'#28a745'}}>positive change to something</g>.
              Join us on this journey by Something today.<br></br> Your support is crucial, and every contribution gets us closer to our goal.<br></br>
               Together,  let's make a difference and create a <g style={{color:'#28a745'}}>better tomorrow</g></p>
        </div>
        <footer>
            <AppBar position="static" style={{ backgroundColor: '#28a745' }}>
              <Container>
                <Toolbar>
                  <IconButton color="inherit" href="/">
                    <HomeIcon />
                  </IconButton>
                  <IconButton color="inherit" href="/about">
                    <InfoIcon />
                  </IconButton>
                  <IconButton color="inherit" href="/contact">
                    <MailIcon />
                  </IconButton>
                  <div style={{ flexGrow: 1 }}></div>
                  <p style={{marginRight:'10px'}}>Follow us on </p>
                  <IconButton color="inherit" href="https://www.facebook.com/">
                    <FacebookIcon />
                  </IconButton>
                  <IconButton color="inherit" href="https://www.linkedin.com/">
                    <LinkedInIcon />
                  </IconButton>
                  <IconButton color="inherit" href="https://twitter.com/">
                    <TwitterIcon />
                  </IconButton>
                </Toolbar>
              </Container>
            </AppBar>
        </footer>
        
    </div>
  )
}
