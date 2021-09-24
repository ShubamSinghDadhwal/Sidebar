import React from 'react'
import * as BiIcons from 'react-icons/bi'
import * as AiIcons from 'react-icons/ai'
import * as FaIcons from 'react-icons/fa'
import * as BsIcons from 'react-icons/bs'
import userPic from '../assets/userImage2.jpg'
import advertisePic from '../assets/advertise.jpg'
import trainer1 from '../assets/trainer1.jpg'
import trainer2 from '../assets/trainer2.jpg'

function Sidebar() {
  return (
    <div style={{float:'right', margin:10, padding:10}}>
        <div className="d-flex flex-row bd-highlight mb-3">
          <div className="p-0 bd-highlight" style={{marginRight:20}}>
            <img src={userPic} alt="userPic" height="70"/>
          </div>
          <div style={{marginRight:50}}>
            <h5>Floyd Mills</h5>
            <p style={{lineHeight:1}}>Free account</p>
          </div>
          <div className="p-0 bd-highlight">
            <button type="button" className="btn position-relative" style={{marginRight:20}} >
              <BiIcons.BiBell size={35}/>
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                3+
                <span className="visually-hidden">unread messages</span>
              </span>
            </button>
          </div>
          <div className="p-0 bd-highlight">
          <button type="button" className="btn position-relative" >
            <BiIcons.BiSliderAlt size={30} style={{ fill: '#1E1E1E' }}/>
          </button>
          </div>
        </div>

      <div style={{marginTop:25}}>
        <h5>Health</h5>
        <div className="d-flex flex-row bd-highlight mb-1">
          <div className="p-3 bd-highlight" style={{marginRight:40}}>
            <h2>6:25</h2>
            <FaIcons.FaClock size={30} style={{ fill: '#4C96F6' }}/> Hours <br />
            <AiIcons.AiOutlineLine size={50} style={{ fill: '#4C96F6' }}/>
          </div>
          <div className="p-3 bd-highlight" style={{marginRight:40}}>
            <h2>120</h2>
            <FaIcons.FaHeartbeat size={30} style={{ fill: '#FE6C61' }}/> Rpm <br />
            <AiIcons.AiOutlineLine size={50} style={{ fill: '#FE6C61' }}/>
          </div>
          <div className="p-3 bd-highlight">
            <h2>1.84</h2>
            <FaIcons.FaAppleAlt size={30} style={{ fill: '#6ECE63' }}/> Kcal <br />
            <AiIcons.AiOutlineLine size={50} style={{ fill: '#6ECE63' }}/>
          </div>
        </div>
      </div>

      <div className="card" style={{width: "24rem", background:'#FFFBF0',
        boxShadow: "0 10px 6px -6px #777", marginBottom:30}}>
        <div className="row">
          <div className="col-md-5">
            <img src={advertisePic} height="150" className="rounded-start" alt="advertisePic" />
          </div>
          <div className="col-md-7">
            <div className="card-body">
              <p className="card-text">Sign up for a personal trainer to improve your results</p>
              <a href="#" class="btn btn-warning" style={{color:'#fff'}}>Sign up</a>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h5>Today trainings</h5>
        <div className="card mb-3" style={{width: "24rem", height:'8rem', background:'#4C95FE', borderRadius:7, 
          boxShadow: "0 10px 6px -6px #777", color:'#fff', marginTop:20}}>
          <div className="d-flex flex-row bd-highlight mb-3">
            <div className="p-2 bd-highlight" style={{marginRight:20}}>
              <h3>Box</h3>
              <p style={{lineHeight:0}}>Sports Club</p>
              <span style={{background:'#fff', color:'#000', padding:"5px 15px 5px 15px", borderRadius:5, lineHeight:3}}>
                10:00
              </span>
            </div>
            <div className="p-2 bd-highlight" style={{marginRight:20, marginLeft:27}}>
              <h2>40</h2>
              <p style={{lineHeight:0}}>min</p>
              <p>Warmup</p>
            </div>
            <div className="p-2 bd-highlight">
              <h2>20</h2>
              <p style={{lineHeight:0}}>min</p>
              <p>Stretch</p>
            </div>
            <div className="p-2 bd-highlight">
              <button type="button" className="btn" style={{outline:'none !important', boxShadow:'none'}}>
                <BsIcons.BsThreeDotsVertical size={30} style={{ fill: '#fff' }}/>
              </button>
            </div>
          </div>
        </div>
        <div className="card mb-3" style={{width: "24rem", height:'8rem', background:'#FF7369', borderRadius:7, 
          boxShadow: "0 10px 6px -6px #777", color:'#fff'}}>
          <div className="d-flex flex-row bd-highlight mb-3">
            <div className="p-2 bd-highlight" style={{marginRight:20}}>
              <h2>Crossfit</h2>
              <p style={{lineHeight:0}}>Sports Club</p>
              <span style={{background:'#fff', color:'#000', padding:"5px 15px 5px 15px", borderRadius:5, lineHeight:3}}>
                12:00
              </span>
            </div>
            <div className="p-2 bd-highlight" style={{marginRight:20}}>
              <h2>20</h2>
              <p style={{lineHeight:0}}>min</p>
              <p>Warmup</p>
            </div>
            <div className="p-2 bd-highlight">
              <h2>20</h2>
              <p style={{lineHeight:0}}>min</p>
              <p>Stretch</p>
            </div>
            <div className="p-2 bd-highlight">
              <button type="button" className="btn" style={{outline:'none !important', boxShadow:'none'}}>
                <BsIcons.BsThreeDotsVertical size={30} style={{ fill: '#fff' }}/>
              </button>
            </div>
          </div>
        </div>
        <div style={{display:'flex',justifyContent:'center'}}>
          <button type="button" className="btn" >
            <BsIcons.BsThreeDots size={30} style={{ fill: '#1E1E1E' }}/>
          </button>
        </div>
      </div>

      <div>
        <h5>Your trainers</h5>
        <div className="d-flex flex-row bd-highlight" style={{marginTop:20}}>
          <div className="p-0 bd-highlight" style={{marginRight:10}}>
            <img src={trainer1} alt="trainer1" height="78" style={{marginLeft:7}} />
          </div>
          <div style={{marginRight:50}}>
            <h5>John Kavanagah</h5>
            <p style={{lineHeight:1}}>MMA Coach</p>
          </div>
          <div className="p-2 bd-highlight" style={{marginLeft:33}}>
          <button type="button" className="btn position-relative" >
            <BsIcons.BsChatDots size={30} style={{ fill: '#1E1E1E'}}/>
          </button>
          </div>
        </div>
        <div className="d-flex flex-row bd-highlight" style={{margin:10}} >
          <div className="p-0 bd-highlight" style={{marginRight:10}}>
            <img src={trainer2} alt="trainer2" height="70" />
          </div>
          <div style={{marginRight:95}}>
            <h5>Jacob Jones</h5>
            <p style={{lineHeight:1}}>Boxing Coach</p>
          </div>
          <div className="p-2 bd-highlight" style={{marginLeft:30}}>
          <button type="button" className="btn position-relative" >
            <BsIcons.BsChatDots size={30} style={{ fill: '#1E1E1E'}}/>
          </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
