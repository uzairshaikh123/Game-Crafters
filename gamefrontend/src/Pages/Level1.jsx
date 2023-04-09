import React from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../Context/AuthContext'
import { useNavigate } from 'react-router-dom'

const Level1 = () => {


    const [finalarr,setfinalarr] = React.useState([])

        const {number,change,finalplayer} = React.useContext(AuthContext)
      
       const navigate = useNavigate()
       console.log(finalplayer)
      
       let sarr= [0,1,2,3]
      
        const suffle=()=>{
      
        let cIndex = sarr.length
      
        while(cIndex!=0){
      
          let rIndex = Math.floor(Math.random()*cIndex)
          cIndex--
      
          [sarr[cIndex],sarr[rIndex]] = [sarr[rIndex],sarr[cIndex]]
      
        }
         setfinalarr(sarr)
         change([100,60,50,40])
        }
      
          const choose=(i)=>{
           
          if(finalarr[i]==3){
           change([100,80,50,20])
          }else{
           change([100,20,50,80])
          }
      
          }
          console.log(finalarr)
          console.log(number)
    
    
    
       const gofun=()=>{
        navigate("/level2")
       }
    
     
       let img=["https://img.freepik.com/premium-vector/king-head-vector-logo-icon_43623-454.jpg?w=2000",
       "https://st2.depositphotos.com/22551796/43072/i/450/depositphotos_430721198-stock-photo-nizam-mulk-abu-ali-hasan.jpg",
       "https://us.123rf.com/450wm/kritchanut/kritchanut1410/kritchanut141000122/32814149-businessman-icon-with-question-mark-on-the-face-suspect-concept.jpg?ver=6",
       "https://us.123rf.com/450wm/kritchanut/kritchanut1410/kritchanut141000122/32814149-businessman-icon-with-question-mark-on-the-face-suspect-concept.jpg?ver=6"]

    let arr = [
        {
            id:0,
            num:finalarr[0],
            player:finalplayer.player1
        }, {
            id:1,
            num:finalarr[1],
            player:finalplayer.player2

        }, {
            id:2,
            num:finalarr[2],
            player:finalplayer.player3
        }, {
            id:3,
            num:finalarr[3],
            player:finalplayer.player4
        }
    ]

    const handlestart = () => {

    }



    return (
        <div className='bigcont' style={{ overflowX: "hidden"}} >

            <div >
                <div className="navbar" style={{ height: "50px", width: "100%", display: "flex", justifyItems: "center", justifyContent: "center" }}>
                    <h2 style={{ fontSize: "25px" }}>Raja mantri chor sipahi</h2>
                </div>
                <h2 style={{ textAlign: "center", color: "red" }}> <ul style={{color:"red"}}>Level 1</ul>  </h2>
                <h2  style={{ textAlign: "end", color: "green" ,marginRight:"15px"}}>Queen : 90 Points</h2>
                <div style={{ display: "flex",justifyContent: "space-between" ,marginRight:"15px" }}>
                    <div></div>
                    <div className='message' style={{width:"35%",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"}}>
                        <h3 style={{textAlign:"center",width:"90%",margin:"auto"}}>Result</h3>
                        <h4 style={{textAlign:"center",maginTop:"30px"}}>hello</h4>
                    </div>
                    <img width={"120px"} style={{boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"}} src="https://cdn.pixabay.com/photo/2023/02/16/19/41/princess-7794649_960_720.jfif" alt="" />
                </div>
                <div id="cont" style={{ display: "flex", justifyContent: "space-evenly", flexWrap: "wrap", marginTop: "50px" }}>

                    <div className="avatars" style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap", width: "75%" }}>
                        {arr.map((el)=>{
                            return <div key={el.id} className='card' >
                            <img width={"150px"} style={{height:"200px"}} src={img[`${el.num}`]} alt="pic" />
                            <div className='user' onClick={()=>choose(el.id)} >{el.player}</div>

                        </div>
                        })}

                    </div>

                    <div className="leaderboard" style={{ width: "15%", height: "auto", padding: "20px", boxShadow: "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px" }}>
                        <span>ScoreBoard</span>

                        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "15px" }}>
                            <span style={{ fontSize: "20px", textDecoration: "bold" }}> <u>Players</u>  </span>
                            <span style={{ fontSize: "20px", textDecoration: "bold" }}> <u>Score</u> </span>

                        </div>

                        <div style={{ display: "flex", justifyContent: "space-between",marginTop:"20px"}}>
                            <span>Raja</span>
                            <span>{number[0]}</span>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between",marginTop:"20px" }}>
                            <span>Mantri</span>
                            <span>{number[1]}</span>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between",marginTop:"20px" }}>
                            <span>Sipahi</span>
                            <span>{number[2]}</span>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between",marginTop:"20px" }}>
                            <span>Chor</span>
                            <span>{number[3]}</span>
                        </div>


                    </div>




                </div>


            </div>

            <div className='cont' style={{ display: "flex", justifyContent: "space-evenly", flexWrap: "wrap", marginTop: "50px" }} >

                <div className="cont2" style={{}}>

                    <button onClick={suffle} className='button2'>Start</button>
                    <Link to="/level2">
                        <button className="button"><span>Level 2 </span></button>
                    </Link>

                </div>



            </div>



        </div>
    )
}

export default Level1