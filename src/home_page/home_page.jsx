import React from "react";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import homelogo from './images/home-logo.png';
import more from './images/more.png';
import list from './images/list.png';
import washWhite from './images/wash-white.png'
import washBlue from './images/wash-blue.jpg'
import ironWhite from './images/iron-white.png'
import ironBlue from './images/iron-blue.jpg'
import towelWhite from './images/towel-white.png'
import towelBlue from './images/towel-blue.png'
import bleachWhite from './images/bleach-white.png'
import bleachBlue from './images/bleach-blue.jpg'
import Shirt from './images/shirts.jpg'
import tshirt from './images/tshirts.jpg'
import Trouser from './images/trousers.jpg'
import Jeans from './images/jeans.jpg'
import Boxers from './images/boxers.jpg'
import Joggers from './images/joggers.jpg'
import Others from './images/others.jpg'
import Homeheader from "../Header/home_header";
import "./home_page.css";

const Home_page=()=>{
    const navigate = useNavigate();
    const [modal, setModal] = useState(false);
    const [popup,setPop]= useState(false);
    const token = localStorage.getItem("token");
    const [shirt, setShirt] = useState({
        quantity:0,
        wash:null,
        iron:null,
        dry:null,
        bleach:null,
    });
    const shirtTotal = shirt.wash+shirt.iron+shirt.dry+shirt.bleach;
    const shirtGrandTotal = shirtTotal*shirt.quantity;

    const [t_shirt, setT_shirt] = useState({
        quantity:0,
        wash:null,
        iron:null,
        dry:null,
        bleach:null
    });
    const t_shirtTotal = t_shirt.wash+t_shirt.iron+t_shirt.dry+t_shirt.bleach;
    const t_shirtGrandTotal = t_shirtTotal*t_shirt.quantity;

    const [trouser, setTrouser] = useState({
        quantity:0,
        wash:null,
        iron:null,
        dry:null,
        bleach:null
    });
    const trouserTotal = trouser.wash+trouser.iron+trouser.dry+trouser.bleach;
    const trouserGrandTotal = trouserTotal*trouser.quantity;

    const [jeans, setJeans] = useState({
        quantity:0,
        wash:null,
        iron:null,
        dry:null,
        bleach:null
    });
    const jeansTotal = jeans.wash+jeans.iron+jeans.dry+jeans.bleach;
    const jeansGrandTotal = jeansTotal*jeans.quantity;

    const [boxers, setBoxers] = useState({
        quantity:0,
        wash:null,
        iron:null,
        dry:null,
        bleach:null
    });
    const boxersTotal = boxers.wash+boxers.iron+boxers.dry+boxers.bleach;
    const boxersGrandTotal = boxersTotal*boxers.quantity;

    const [joggers, setJoggers] = useState({
        quantity:0,
        wash:null,
        iron:null,
        dry:null,
        bleach:null
    });
    const joggersTotal = joggers.wash+joggers.iron+joggers.dry+joggers.bleach;
    const joggersGrandTotal = joggersTotal*joggers.quantity;

    const [others, setOthers] = useState({
        quantity:0,
        wash:null,
        iron:null,
        dry:null,
        bleach:null
    });
    const othersTotal = others.wash+others.iron+others.dry+others.bleach;
    const othersGrandTotal = othersTotal*others.quantity;
    // const [bleach, setBleach] = useState(false);    
    const [quantity, setQuantity] = useState(0);
    console.log(shirt)

    // const toggle = () => {
    //     if(quantity>0) {
    //         let temp = shirt.wash+shirt.iron+shirt.dry
    //         setShirt({...shirt,total:temp})
    //     }
    // }
    console.log(shirt.total)
    // handle whether user is authorized or not if not navigate to sigin page
    useEffect(()=>{
        if(!token){
            navigate("/login")
        }
        console.log(token)
    },[])

  
    return(
        <>
        <Homeheader/>

           
        <div className="home-body">
            <div className="home-sidebar">
                <div><img src={homelogo}></img></div>
                <div style={{"backgroundColor":"white"}}><img src={more}></img></div>
                <div><img src={list}></img></div>
            </div>
            <div className="table-div">
            <div className='create-search'>
                <span className='create'>Create</span>
                <span className='search'>Search</span>
            </div>
            <table>
                <thead className='head'>
                    {/* <ul className='headUl'> */}
                        <th className='headLi'>Product type</th>
                        <th className='headLi'>Quantity</th>
                        <th className='headLi-3'>Wash Type</th>
                        <th className='headLi'>Price</th>
                    {/* </ul> */}
                </thead>
                <tbody>
                    <tr className='container-home'>
                        <td className="tab-col-1"><img className='image' src={Shirt} alt=''></img><span className='span'>Shirt</span><span className='span1'>Lorem Ipsum is simply dummy text of the</span></td>
                        <td className="tab-col-2"><input  className='inputfield' type={'number'} min={0} value={shirt.quantity} onChange={(e)=>setShirt({...shirt,quantity:e.target.value})} /></td>

                        <td className="tab-col-3">{shirt.wash !== null ?<img className='washType' src={washBlue} alt="" onClick={()=>setShirt({...shirt,wash:null})}/>:
                        <img className='washType' src={washWhite} alt="" onClick={()=>setShirt({...shirt,wash:20})}/>}

                       {shirt.iron !== null ?<img className='washType' src={ironBlue} alt="" onClick={()=>setShirt({...shirt,iron:null})}/>:
                        <img className='washType' src={ironWhite} alt="" onClick={()=>setShirt({...shirt,iron:30})}/>}

                       {shirt.dry !== null ?<img className='washType' src={towelBlue} alt="" onClick={()=>setShirt({...shirt,dry:null})}/>:
                        <img className='washType' src={towelWhite} alt="" onClick={()=>setShirt({...shirt,dry:10})}/>}

                        {shirt.bleach !== null ?<img className='washType' src={bleachBlue} alt="" onClick={()=>{setShirt({...shirt,bleach:null})}}/>:
                        <img className='washType' src={bleachWhite} alt="" onClick={()=>setShirt({...shirt,bleach:25})}/>}</td>

                       <td className="tab-col-4">{shirt.quantity <= 0?<span className='price' >--</span>:<>
                        <span className='price' >{shirt.quantity}x{shirtTotal}=<span className="grandtotal-cro">{shirtGrandTotal}</span></span>
                        <button className='reset' onClick={()=>setShirt({...shirt,quantity:0,wash:null,iron:null,dry:null,bleach:null})}>Reset</button></>}</td> 
                    </tr>
                    <tr className='container-home'>
                        <td className="tab-col-1"><img className='image' src={tshirt} alt=''></img><span className='span'>T-shirts</span><span className='span1'>Lorem Ipsum is simply dummy text of the</span></td>
                        <td className="tab-col-2"><input className='inputfield' type={'number'} min={0} value={t_shirt.quantity} onChange={(e)=>setT_shirt({...t_shirt,quantity:e.target.value})}/></td>
                        <td className="tab-col-3">{t_shirt.wash !== null ?<img className='washType' src={washBlue} alt="" onClick={()=>setT_shirt({...t_shirt,wash:null})}/>:
                            <img className='washType' src={washWhite} alt="" onClick={()=>setT_shirt({...t_shirt,wash:20})}/>}

                        {t_shirt.iron !== null ?<img className='washType' src={ironBlue} alt="" onClick={()=>setT_shirt({...t_shirt,iron:null})}/>:
                        <img className='washType' src={ironWhite} alt="" onClick={()=>setT_shirt({...t_shirt,iron:30})}/>}
                        
                        
                        {t_shirt.dry !== null ?<img className='washType' src={towelBlue} alt="" onClick={()=>setT_shirt({...t_shirt,dry:null})}/>:
                        <img className='washType' src={towelWhite} alt="" onClick={()=>setT_shirt({...t_shirt,dry:10})}/>}
                       
                        {t_shirt.bleach !== null ?<img className='washType' src={bleachBlue} alt="" onClick={()=>setT_shirt({...t_shirt,bleach:null})}/>:
                        <img className='washType' src={bleachWhite} alt="" onClick={()=>setT_shirt({...t_shirt,bleach:25})}/>}
                        </td>
                        <td className="tab-col-4">
                        {t_shirt.quantity <= 0?<span className='price' >--</span>:
                       <>
                       <span className='price' >{t_shirt.quantity}x{t_shirtTotal}=<span className="grandtotal-cro">{t_shirtGrandTotal}</span></span>
                       <button className='reset' onClick={()=>setT_shirt({...t_shirt,quantity:0,wash:null,iron:null,dry:null,bleach:null})}>Reset</button></>}
                        </td>
                    </tr>
                    <tr className='container-home'>
                        <td className="tab-col-1"><img className='image' src={Trouser} alt=''></img><span className='span'>Trouser</span><span className='span1'>Lorem Ipsum is simply dummy text of the</span></td>
                        <td className="tab-col-2"><input className='inputfield' type={'number'} min={0} value={trouser.quantity}   onChange={(e)=>setTrouser({...trouser,quantity:e.target.value})} /></td>

                        <td className="tab-col-3">{trouser.wash !== null ?<img className='washType' src={washBlue} alt="" onClick={()=>setTrouser({...trouser,wash:null})}/>:
                        <img className='washType' src={washWhite} alt="" onClick={()=>setTrouser({...trouser,wash:20})}/>}
                        
                        {trouser.iron !== null ?<img className='washType' src={ironBlue} alt="" onClick={()=>setTrouser({...trouser,iron:null})}/>:
                        <img className='washType' src={ironWhite} alt="" onClick={()=>setTrouser({...trouser,iron:30})}/>}
                      
                        {trouser.dry !== null ?<img className='washType' src={towelBlue} alt="" onClick={()=>setTrouser({...trouser,dry:null})}/>:
                        <img className='washType' src={towelWhite} alt="" onClick={()=>setTrouser({...trouser,dry:10})}/>}
                        
                        {trouser.bleach !== null ?<img className='washType' src={bleachBlue} alt="" onClick={()=>setTrouser({...trouser,bleach:null})}/>:
                        <img className='washType' src={bleachWhite} alt="" onClick={()=>setTrouser({...trouser,bleach:25})}/>}
                        </td>
                        <td className="tab-col-4">
                        {trouser.quantity <= 0?<span className='price' >--</span>:
                        <>
                        <span className='price' >{trouser.quantity}x{trouserTotal}=<span className="grandtotal-cro">{trouserGrandTotal}</span></span>
                        <button className='reset' onClick={()=>setTrouser({...trouser,quantity:0,wash:null,iron:null,dry:null,bleach:null})}>Reset</button></>}
                        </td>
                    </tr>
                    <tr className='container-home'>
                        <td className="tab-col-1"><img className='image' src={Jeans} alt=''></img><span className='span'>Jeans....</span><span className='span1'>Lorem Ipsum is simply dummy text of the</span></td>
                        <td className="tab-col-2"><input className='inputfield' type={'number'} min={0}  value={jeans.quantity} onChange={(e)=>setJeans({...jeans,quantity:e.target.value})} /></td>

                        <td className="tab-col-3">{jeans.wash !== null ?<img className='washType' src={washBlue} alt="" onClick={()=>setJeans({...jeans,wash:null})}/>:
                        <img className='washType' src={washWhite} alt="" onClick={()=>setJeans({...jeans,wash:20})}/>}
                        
                        {jeans.iron !== null ?<img className='washType' src={ironBlue} alt="" onClick={()=>setJeans({...jeans,iron:null})}/>:
                        <img className='washType' src={ironWhite} alt="" onClick={()=>setJeans({...jeans,iron:30})}/>}
                      
                        {jeans.dry !== null ?<img className='washType' src={towelBlue} alt="" onClick={()=>setJeans({...jeans,dry:null})}/>:
                        <img className='washType' src={towelWhite} alt="" onClick={()=>setJeans({...jeans,dry:10})}/>}
                       
                        {jeans.bleach !== null ?<img className='washType' src={bleachBlue} alt="" onClick={()=>setJeans({...jeans,bleach:null})}/>:
                        <img className='washType' src={bleachWhite} alt="" onClick={()=>setJeans({...jeans,bleach:25})}/>}
                        </td>
                        <td className="tab-col-4">
                        {jeans.quantity <= 0?<span className='price' >--</span>:
                        <>
                        <span className='price' >{jeans.quantity}x{jeansTotal}=<span className="grandtotal-cro">{jeansGrandTotal}</span></span>
                        <button className='reset' onClick={()=>setJeans({...jeans,quantity:0,wash:null,iron:null,dry:null,bleach:null})}>Reset</button></>}
                        </td>
                    </tr>
                    <tr className='container-home'>
                        <td className="tab-col-1"><img className='image' src={Boxers} alt=''></img><span className='span'>Boxers.</span><span className='span1'>Lorem Ipsum is simply dummy text of the</span></td>
                        <td className="tab-col-2"><input className='inputfield' type={'number'} min={0} value={boxers.quantity}  onChange={(e)=>setBoxers({...boxers,quantity:e.target.value})} /></td>

                        <td className="tab-col-3">{boxers.wash !== null ?<img className='washType' src={washBlue} alt="" onClick={()=>setBoxers({...boxers,wash:null})}/>:
                        <img className='washType' src={washWhite} alt="" onClick={()=>setBoxers({...boxers,wash:20})}/>}

                        {boxers.iron !== null ?<img className='washType' src={ironBlue} alt="" onClick={()=>setBoxers({...boxers,iron:null})}/>:
                        <img className='washType' src={ironWhite} alt="" onClick={()=>setBoxers({...boxers,iron:30})}/>}

                        {boxers.dry !== null ?<img className='washType' src={towelBlue} alt="" onClick={()=>setBoxers({...boxers,dry:null})}/>:
                        <img className='washType' src={towelWhite} alt="" onClick={()=>setBoxers({...boxers,dry:10})}/>}

                        {boxers.bleach !== null ?<img className='washType' src={bleachBlue} alt="" onClick={()=>setBoxers({...boxers,bleach:null})}/>:
                        <img className='washType' src={bleachWhite} alt="" onClick={()=>setBoxers({...boxers,bleach:25})}/>}
                        </td>
                        <td className="tab-col-4">{boxers.quantity <= 0?<span className='price' >--</span>:
                        <>
                        <span className='price' >{boxers.quantity}x{boxersTotal}=<span className="grandtotal-cro">{boxersGrandTotal}</span></span>
                        <button className='reset' onClick={()=>setBoxers({...boxers,quantity:0,wash:null,iron:null,dry:null,bleach:null})}>Reset</button></>}</td>
                    </tr>
                    <tr className='container-home'>
                        <td className="tab-col-1"><img className='image' src={Joggers} alt=''></img><span className='span'>Joggers</span><span className='span1'>Lorem Ipsum is simply dummy text of the</span></td>
                        <td className="tab-col-2"><input className='inputfield' type={'number'} min={0} value={joggers.quantity}  onChange={(e)=>setJoggers({...joggers,quantity:e.target.value})}/></td>

                        <td className="tab-col-3">{joggers.wash !== null ?<img className='washType' src={washBlue} alt="" onClick={()=>setJoggers({...joggers,wash:null})}/>:
                        <img className='washType' src={washWhite} alt="" onClick={()=>setJoggers({...joggers,wash:20})}/>}

                        {joggers.iron !== null ?<img className='washType' src={ironBlue} alt="" onClick={()=>setJoggers({...joggers,iron:null})}/>:
                        <img className='washType' src={ironWhite} alt="" onClick={()=>setJoggers({...joggers,iron:30})}/>}

                        {joggers.dry !== null ?<img className='washType' src={towelBlue} alt="" onClick={()=>setJoggers({...joggers,dry:null})}/>:
                        <img className='washType' src={towelWhite} alt="" onClick={()=>setJoggers({...joggers,dry:10})}/>}

                        {joggers.bleach !== null ?<img className='washType' src={bleachBlue} alt="" onClick={()=>setJoggers({...joggers,bleach:null})}/>:
                        <img className='washType' src={bleachWhite} alt="" onClick={()=>setJoggers({...joggers,bleach:25})}/>}</td>

                        <td className="tab-col-4">{joggers.quantity <= 0?<span className='price' >--</span>:
                        <>
                        <span className='price' >{joggers.quantity}x{joggersTotal}=<span className="grandtotal-cro">{joggersGrandTotal}</span></span>
                        <button className='reset' onClick={()=>setJoggers({...joggers,quantity:0,wash:null,iron:null,dry:null,bleach:null})}>Reset</button></>}</td>
                    </tr>
                    <tr className='container-home'>
                    <td className="tab-col-1"><img className='image' src={Others} alt=''></img><span className='span'>Others..</span><span className='span1'>Lorem Ipsum is simply dummy text of the</span></td>
                    <td className="tab-col-2"><input className='inputfield' type={'number'} min={0} value={others.quantity}  onChange={(e)=>setOthers({...others,quantity:e.target.value})} /></td>

                        <td className="tab-col-3">{others.wash !== null ?<img className='washType' src={washBlue} alt="" onClick={()=>setOthers({...others,wash:null})}/>:
                        <img className='washType' src={washWhite} alt="" onClick={()=>setOthers({...others,wash:20})}/>}

                        {others.iron !== null ?<img className='washType' src={ironBlue} alt="" onClick={()=>setOthers({...others,iron:null})}/>:
                        <img className='washType' src={ironWhite} alt="" onClick={()=>setOthers({...others,iron:30})}/>}

                        {others.dry !== null ?<img className='washType' src={towelBlue} alt="" onClick={()=>setOthers({...others,dry:null})}/>:
                        <img className='washType' src={towelWhite} alt="" onClick={()=>setOthers({...others,dry:10})}/>}

                        {others.bleach !== null ?<img className='washType' src={bleachBlue} alt="" onClick={()=>setOthers({...others,bleach:null})}/>:
                        <img className='washType' src={bleachWhite} alt="" onClick={()=>setOthers({...others,bleach:25})}/>}</td>

                        <td className="tab-col-4">{others.quantity <= 0?<span className='price' >--</span>:
                        <>
                        <span className='price' >{others.quantity}x{othersTotal}=<span className="grandtotal-cro">{othersGrandTotal}</span></span>
                        <button className='reset' onClick={()=>setOthers({...others,quantity:0,wash:null,iron:null,dry:null,bleach:null})}>Reset</button></>}</td>
                    </tr>
                  </tbody>
                 </table>
                    <div >
                    <button className="cancel-proceed" onClick={()=>setModal(true)}>Proceed</button><button className="cancel-proceed" onClick={()=> window.location.reload()}>Cancel</button>
                    </div>
                    {modal &&(<div className="modal">
                        <div className="overlay">
                        <div className="modal-content">
                            <h1>hello modal</h1>
                            <p>modal content</p>
                            <button className="close-modal" onClick={()=>{setModal(false)}}>x</button>
                            <button onClick={()=>{setPop(true);setModal(false)}}>confirm</button>
                            </div>
                        </div>
                    </div>)}
                    {popup &&(<div className="modal">
                        <div className="overlay">
                        <div className="popup-content">
                            <h1>hello popup</h1>
                            <p>popup content</p>
                            <button  onClick={()=>{setPop(false)}}>Go to orders</button>
                            </div>
                        </div>
                        </div>)}
                    </div>
                </div>
     
                        <footer className='footer-home' >
                        2022 © Laundry
                        </footer>
                
            
       
        </>
    )
}

export default Home_page;