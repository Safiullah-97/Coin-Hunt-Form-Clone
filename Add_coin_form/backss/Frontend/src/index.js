
import React,{useState,useEffect} from 'react';
import './style.css'
import axios  from 'axios';
import  ReactDOM  from 'react-dom';
import { Button } from 'antd';
import 'antd/dist/antd.css';


function CreateNote(){
        const [input, setInput ]= useState({
            Name:"",
            Description:"",
            Symbol:"",
            Logo:"",
            Market_Cap:"",
            Launch_Date:"",
            Binance_Smart_Chain:"",
            Ethereum:"",
            Solana:"",
            Polygon:"",
            Website:"",
            Telegram:"",
            Twitter:"",
            Additional_Information:"",  })

function handleChange(event){
//    console.log(event.target);
    const{name, value}=event.target;
    setInput(prevInput => {
        return{
            ...prevInput,
            [name] :value } })}

function handleClick(event){
    event.preventDefault();
    const postData={
        Name: input.Name,
        Description: input.Description,
        Symbol: input.Symbol,
        Logo: input.Logo,
        Market_Cap: input.Market_Cap,
        Launch_Date: input.Launch_Date,
        Binance_Smart_Chain: input.Binance_Smart_Chain,
        Ethereum: input.Ethereum,
        Solana: input.Solana,
        Polygon: input.Polygon,
        Website: input.Website,
        Telegram: input.Telegram,
        Twitter: input.Twitter,
        Additional_Information: input.Additional_Information,
    };
    

    // axios.post('http://localhost:3000/Add/Login', postData)
    // .then((response)=>
    // {console.log(response)}
    // )
}
   // const [Name, setName]=useState('');
        // const [Description, setDescription]= useState('');
        // const [Symbol, setSymbol]= useState('');
return <div className='Container'>
        

<h1 style={{fontSize:'26px',marginLeft:'17ch',paddingTop:'3ch'}}> <b>Coin listing request</b></h1>
    <form className="Main" >
        
        <div style={{paddingLeft:'10ch'}}>
        <div style={{paddingTop:'4ch'}}>
           <label style={{fontSize:'26px'}}>Coin informations</label> <br/><br/>
            <label> Name </label> <label style={{fontSize:'12px',color:'red', paddingLeft:'15px' }}> Required</label><br/>
        <input placeholder="EX: Bitcoin" style={{width:'40ch',height:'4ch' , border:"3px solid #ccc", borderRadius:'4px'}} className="form-group" onChange={handleChange} name="Name" value={input.Name} className="form-control">
        </input>
        </div><br/>

        <div>
        <label> Symbol </label><br/>
        <input placeholder="EX: BTC" style={{width:'40ch',height:'4ch', border:"3px solid #ccc", borderRadius:'4px'}} className="form-group" onChange={handleChange} name="Symbol" value={input.Symbol} className="form-control"></input><br/><br/>
       </div>

        <div >
        <label> Description </label><br/>
        <textarea placeholder="EX: Bitcoin is world fastest Growing Desentralized Coin"
         style={{width:'40ch',height:'10ch' , border:"3px solid #ccc", borderRadius:'4px'}} onChange={handleChange} name="Description" value={input.Description} className="form-control"></textarea><br/><br/>
        </div>


        <div>
        <label> Logo </label><br/>
    <input placeholder="EX: Bitcoin/Logo/jpg" style={{width:'40ch',height:'4ch', border:"3px solid #ccc", borderRadius:'4px'}} className="form-group" onChange={handleChange} name="Logo" value={input.Logo} className="form-control"></input><br/><br/>
        </div> 


        <div>
        <label> Market Cap </label><br/>
        <input placeholder="EX: 250000" style={{width:'40ch',height:'4ch', border:"3px solid #ccc", borderRadius:'4px'}} className="form-group" onChange={handleChange} name="Market_Cap" value={input.Market_Cap} className="form-control"></input><br/><br/>
        </div>

        <div >
        <label> Launch Date </label><label style={{fontSize:'12px',color:'red',paddingLeft:'15px'}}> Required</label><br/>
        <input  style={{width:'40ch',height:'4ch', border:"3px solid #ccc", borderRadius:'4px'}} type="date" className="form-group" onChange={handleChange} name="Launch_Date" value={input.Launch_Date} className="form-control"></input><br/><br/>
        </div>
        </div>
<div style={{paddingLeft:'60ch', marginTop:'-74ch'}}>
    <label style={{fontSize:'26px'}}>Coin contracts </label>
        <div >
        <label> Binance Smart Chain </label>
       <br/>
        
            <img style={{width:'3.6ch',marginTop:'-4.px' ,marginLeft:'0px', border:"3px solid #ccc" ,borderRight:'none'}}src="https://www.worldcryptoindex.com/wp-content/uploads/2018/01/binance-coin-logo.png"></img>

        <input placeholder="EX: 000 X 00000" 
        style={{marginLeft:'-2px',paddingLeft:'10px',marginTop:'13px',width:'40ch',height:'4ch', border:"3px solid #ccc", borderRadius:'4px',borderLeft:'none'}} className="form-group" onChange={handleChange} name="Binance_Smart_Chain" value={input.Binance_Smart_Chain} className="form-control"></input>
        <br/><br/>    </div>  

        <div>
        <label> Ethereum </label><br/>
        <img style={ {width:'3.6ch',marginTop:'-4.9px' ,marginLeft:'0px', border:"3px solid #ccc" ,borderRight:'none'}} src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/v1476103033/xfu7exy5y6rkscsm1kns.png"></img>
        <input placeholder="EX: 000 X 00000" style={{marginLeft:'-2px',paddingLeft:'10px',marginTop:'13px',width:'40ch',height:'4ch', border:"3px solid #ccc", borderRadius:'4px',borderLeft:'none'}} className="form-group" onChange={handleChange} name="Ethereum" value={input.Ethereum} className="form-control"></input><br/><br/>
        </div>

        <div>
        <label> Solana </label><br/>
        <img style={{width:'3.9ch',marginTop:'-4.9px',height:'30px' ,marginLeft:'0px', border:"3px solid #ccc" ,borderRight:'none'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSunIhUvL83iGZbs4UAExq_qChqGlJTlH9IB45nYgAc_jTI4Mug-l-AWodcw5MhgY37GO8&usqp=CAU"></img>
        <input placeholder="EX: XXXXXXXX" style={ { marginLeft:'-2px',paddingLeft:'10px',marginTop:'13px',width:'40ch',height:'4ch', border:"3px solid #ccc", borderRadius:'4px',borderLeft:'none'}} className="form-group" onChange={handleChange} name="Solana" value={input.Solana} className="form-control"></input><br/><br/>
        </div>

        <div >
        <label> Polygon </label><br/>
        <img style={{width:'3.8ch' ,marginLeft:'0px',marginTop:'-3px', border:"3px solid #ccc"}} src="https://cdn.iconscout.com/icon/free/png-256/polygon-token-4086724-3379854.png"></img>
        <input placeholder="EX: 000 X 0000" style={{ marginLeft:'-1px',paddingLeft:'10px',marginTop:'13px',width:'40ch',height:'4ch', border:"3px solid #ccc", borderRadius:'4px',borderLeft:'none'}} className="form-group" onChange={handleChange} name="Polygon" value={input.Polygon} className="form-control"></input><br/><br/>
        </div>
<label style={{fontSize:'26px'}}> Coin Links </label>
        <div >
        <label> Website </label><br/>
        <img style={{width:'3.9ch',height:'32px' ,marginTop:'-4.9px' ,marginLeft:'0px', border:"3px solid #ccc" ,borderRight:'none'}} src="https://cdn-icons-png.flaticon.com/128/93/93618.png"></img>
        <input placeholder="EX: WWW.YourWebsite.com" style={{marginLeft:'-1px',paddingLeft:'10px',marginTop:'13px',width:'40ch',height:'4ch', border:"3px solid #ccc", borderRadius:'4px',borderLeft:'none'}} className="form-group" onChange={handleChange} name="Website" value={input.Website} className="form-control"></input><br/><br/>
        </div>

        <div >
        <label> Telegram </label><br/>
        <img style={{width:'3.9ch',height:'30px' ,marginTop:'-4.9px' ,marginLeft:'0px', border:"3px solid #ccc" ,borderRight:'none'}}
         src="data:image/jpeg;base64,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">
         </img>
        <input placeholder="EX: WWW.Telegram.com/Safi/user/work" style={{marginLeft:'-1px',paddingLeft:'10px',marginTop:'13px',width:'40ch',height:'4ch', border:"3px solid #ccc", borderRadius:'4px',borderLeft:'none'}} className="form-group" onChange={handleChange} name="Telegram" value={input.Telegram} className="form-control"></input><br/><br/>
        </div>

        <div >
        <label> Twitter </label><br/>
        <img style={{width:'3.9ch',height:'30px' ,marginLeft:'0px',marginTop:'-4.9px', border:"3px solid #ccc"}}
         src="data:image/png;base64,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">
            </img>
        <input placeholder="EX: WWW.Twitter.com/user/pk" 
        style={{ marginLeft:'-2px',paddingLeft:'10px',marginTop:'20px',width:'40ch',height:'4ch', border:"3px solid #ccc", borderRadius:'4px',borderLeft:'none'}}
         className="form-group" onChange={handleChange} name="Twitter" value={input.Twitter} className="form-control"></input><br/><br/>
        </div>
          
       
       
        <div >
        <label style={{fontSize:'26px'}}>Additional Informations </label>
        <textarea placeholder="Just need your feedback. Thank you for Visiting" style={{width:'40ch',height:'10ch', border:"3px solid #ccc", borderRadius:'4px'}} onChange={handleChange} name="Additional_Information" value={input.Additional_Information} className="form-control"></textarea><br/><br/>
        </div>
</div>

    {/* <button  onClick={handleClick} className="btn btn-lg btn-info">ADD NOTE</button> */}
    <Button onClick={handleClick} type='primary' style={{marginLeft:"30ch",backgroundColor:'#07c661', width:'12ch', height:'4ch',borderColor:'green',borderRadius:'20px', fontSize:'18px'}}> Submit </Button>
    <br/><br/>
    </form>

</div>


 }



 ReactDOM.render(<CreateNote/>, document.querySelector('#root'))
