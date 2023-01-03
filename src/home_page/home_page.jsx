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
import moment from "moment";
import blueTick from './images/Blue_tick.PNG'

const Home_page=()=>{
    const current= new Date();
    const up_date=`${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()} ${current.getHours()}:${current.getMinutes()}`
    const navigate = useNavigate();
    const [modal, setModal] = useState(false);
    const [popup,setPop]= useState(false);
    const token = localStorage.getItem("token");
    const userData = JSON.parse(localStorage.getItem("userData"));
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
    // const [quantity, setQuantity] = useState(0);
    // console.log(shirt)

    // const toggle = () => {
    //     if(quantity>0) {
    //         let temp = shirt.wash+shirt.iron+shirt.dry
    //         setShirt({...shirt,total:temp})
    //     }
    // }
    // console.log(shirt.total)
    // handle whether user is authorized or not if not navigate to sigin page
    useEffect(()=>{
        if(!token){
            navigate("/login")
        }
        console.log(token, userData )
    },[])

    function handleProceed(){
        setModal(true);
        //..........................
        let shirtMethods = "";
        if(shirt.quantity>0){
            if(shirt.wash!==null){
                shirtMethods = "washing "
            }
            if(shirt.iron!==null){
                shirtMethods= shirtMethods+"ironing "
            }
            if(shirt.dry!==null){
                shirtMethods= shirtMethods+"drying ";
            }
            if(shirt.bleach!==null){
                shirtMethods= shirtMethods+"bleaching ";
            }
        }
            const shirts = {
                qty:shirt.quantity,
                methods:shirtMethods,
                denomination:`${shirt.quantity}x${shirtTotal}`,
                item_price:shirtGrandTotal
            }
            //........................
        let tshirtmethods = "";
            if(t_shirt.quantity>0){
                if(t_shirt.wash!==null){
                    tshirtmethods = "washing ";
                }
                if(t_shirt.iron!==null){
                    tshirtmethods= tshirtmethods+"ironing ";
                }
                if(t_shirt.dry!==null){
                    tshirtmethods= tshirtmethods+"drying ";
                }
                if(t_shirt.bleach!==null){
                    tshirtmethods= tshirtmethods+"bleaching ";
                }
            }
                const Tshirts = {
                    qty:t_shirt.quantity,
                    methods:tshirtmethods,
                    denomination:`${t_shirt.quantity}x${t_shirtTotal}`,
                    item_price:t_shirtGrandTotal
                }
                //...........................
        let trousermethods = "";
                if(trouser.quantity>0){
                    if(trouser.wash!==null){
                        trousermethods = "washing ";
                    }
                    if(trouser.iron!==null){
                        trousermethods= trousermethods+"ironing ";
                    }
                    if(trouser.dry!==null){
                        trousermethods= trousermethods+"drying ";
                    }
                    if(trouser.bleach!==null){
                        trousermethods= trousermethods+"bleaching ";
                    }
                }
                    const Trousers = {
                        qty:trouser.quantity,
                        methods:trousermethods,
                        denomination:`${trouser.quantity}x${trouserTotal}`,
                        item_price:trouserGrandTotal
                    }
                    //.................................
        let jeansmethods = "";
                if(jeans.quantity>0){
                    if(jeans.wash!==null){
                        jeansmethods = "washing ";
                    }
                    if(jeans.iron!==null){
                        jeansmethods= jeansmethods+"ironing ";
                    }
                    if(jeans.dry!==null){
                        jeansmethods= jeansmethods+"drying ";
                    }
                    if(jeans.bleach!==null){
                        jeansmethods= jeansmethods+"bleaching ";
                    }
                }
                    const Jeans = {
                        qty:jeans.quantity,
                        methods:jeansmethods,
                        denomination:`${jeans.quantity}x${jeansTotal}`,
                        item_price:jeansGrandTotal
                    }
                    //..............................
        let boxermethods = "";
                if(boxers.quantity>0){
                    if(boxers.wash!==null){
                        boxermethods = "washing ";
                    }
                    if(boxers.iron!==null){
                        boxermethods= boxermethods+"ironing ";
                    }
                    if(boxers.dry!==null){
                        boxermethods= boxermethods+"drying ";
                    }
                    if(boxers.bleach!==null){
                        boxermethods= boxermethods+"bleaching ";
                    }
                }
                    const Boxers = {
                        qty:boxers.quantity,
                        methods:boxermethods,
                        denomination:`${boxers.quantity}x${boxersTotal}`,
                        item_price:boxersGrandTotal
                    }
                    //.................................
        let joggermethods = "";
                if(joggers.quantity>0){
                    if(joggers.wash!==null){
                        joggermethods = "washing ";
                    }
                    if(joggers.iron!==null){
                        joggermethods= joggermethods+"ironing ";
                    }
                    if(joggers.dry!==null){
                        joggermethods= joggermethods+"drying ";
                    }
                    if(joggers.bleach!==null){
                        joggermethods= joggermethods+"bleaching ";
                    }
                }
                    const Joggers = {
                        qty:joggers.quantity,
                        methods:joggermethods,
                        denomination:`${joggers.quantity}x${joggersTotal}`,
                        item_price:joggersGrandTotal
                    }
                    //..................................
        let othermethods = "";
                if(others.quantity>0){
                    if(others.wash!==null){
                        othermethods = "washing ";
                    }
                    if(others.iron!==null){
                        othermethods= othermethods+"ironing ";
                    }
                    if(others.dry!==null){
                        othermethods= othermethods+"drying ";
                    }
                    if(others.bleach!==null){
                        othermethods= othermethods+"bleaching ";
                    }
                }
                    const Others = {
                        qty:others.quantity,
                        methods:othermethods,
                        denomination:`${others.quantity}x${othersTotal}`,
                        item_price:othersGrandTotal
                    }
            //..............//...............//..................//................
       
        const item = Object.create({shirts,Tshirts,Trousers,Jeans,Boxers,Joggers,Others})
        // console.log(item);
        setFinalData({...finalData,items:item,total_items:totalItem,price:totalprice,user:userData.email});
    }
    const id = Math.floor(Math.random() * 10000)
    const time = moment().format("D MMM YYYY, h:mm");
    const totalItem = parseInt(shirt.quantity)+parseInt(t_shirt.quantity)+parseInt(trouser.quantity)+parseInt(jeans.quantity)+parseInt(boxers.quantity)+parseInt(joggers.quantity)+parseInt(others.quantity);
    const totalprice = parseInt(shirtGrandTotal)+parseInt(t_shirtGrandTotal)+parseInt(trouserGrandTotal)+parseInt(jeansGrandTotal)+parseInt(boxersGrandTotal)+parseInt(joggersGrandTotal)+parseInt(othersGrandTotal);
    // console.log(totalprice);
    const [finalData, setFinalData] = useState({
        user:"user",
        order_id:`OR${id}`,
        date_time:time,
        store_location:"jp Nagar",
        city:"bangalore",
        store_phone:9999999999,
        total_items:null,
        price:null,
        status:"Ready to pickup",
        items:null,
    })

    function sendingOrder(){
        setPop(true);setModal(false);
    fetch(`/api_order/create`, {
        method: "POST",
        body: JSON.stringify({
            user:finalData.user,
            order_id:finalData.order_id,
            date_time:finalData.date_time,
            store_location:finalData.store_location,
            city:finalData.city,
            store_phone:finalData.store_phone,
            total_items:finalData.total_items,
            price:finalData.price,
            status:finalData.status,
            items:{
                shirts:{
                    qty:finalData.items.shirts.qty,
                    methods:finalData.items.shirts.methods,
                    denomination:finalData.items.shirts.denomination,
                    item_price:finalData.items.shirts.item_price
                },
                Tshirts:{
                    qty:finalData.items.Tshirts.qty,
                    methods:finalData.items.Tshirts.methods,
                    denomination:finalData.items.Tshirts.denomination,
                    item_price:finalData.items.Tshirts.item_price
                },
                Trousers:{
                    qty:finalData.items.Trousers.qty,
                    methods:finalData.items.Trousers.methods,
                    denomination:finalData.items.Trousers.denomination,
                    item_price:finalData.items.Trousers.item_price
                },
                Jeans:{
                    qty:finalData.items.Jeans.qty,
                    methods:finalData.items.Jeans.methods,
                    denomination:finalData.items.Jeans.denomination,
                    item_price:finalData.items.Jeans.item_price
                },
                Boxers:{
                    qty:finalData.items.Boxers.qty,
                    methods:finalData.items.Boxers.methods,
                    denomination:finalData.items.Boxers.denomination,
                    item_price:finalData.items.Boxers.item_price
                },
                Joggers:{
                    qty:finalData.items.Joggers.qty,
                    methods:finalData.items.Joggers.methods,
                    denomination:finalData.items.Joggers.denomination,
                    item_price:finalData.items.Joggers.item_price
                },
                Others:{
                    qty:finalData.items.Others.qty,
                    methods:finalData.items.Others.methods,
                    denomination:finalData.items.Others.denomination,
                    item_price:finalData.items.Others.item_price
                },
            }
        }),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        })
        .catch((e) => {
          alert(e.message);
        });
    }
    function Handle_go_to_orders(){
        setPop(false);
        navigate("/history");
    }

    console.log(finalData.items)

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
                    <button className="cancel-proceed" onClick={handleProceed}>Proceed</button><button className="cancel-proceed" onClick={()=> window.location.reload()}>Cancel</button>
                    </div>
                    {modal &&(<div className="modal">
                        <div className="overlay">
                        <div className="modal-content">
                            <div className="summary-div">
                            <p>Summary</p>
                            <button className="close-modal" onClick={()=>{setModal(false)}}>x</button>
                            </div>
                            <div className="modal_storeDetails">
                                <div>
                                    <h5>Store Location</h5>
                                    <p>jp Nagar</p>
                                </div>
                                <div>
                                    <h5>Store Address</h5>
                                    <p>Near Phone booth, 10th road,</p>
                                </div>
                                <div>
                                    <h5>Phone</h5>
                                    <p>91 0123456789</p>
                                </div>
                            </div>
                            <div className="order_div">
                                <h5>order details</h5>
                                {shirt.quantity!=0?<div className="order_details"><span>Shirts</span><span><i>{finalData.items.shirts.methods}</i></span><span>{finalData.items.shirts.denomination}=</span><span>{shirtGrandTotal}</span></div>:<></>}

                                {t_shirt.quantity!=0?<div className="order_details"><span>Tshirts</span><span><i>{finalData.items.Tshirts.methods}</i></span><span>{finalData.items.Tshirts.denomination}=</span><span>{t_shirtGrandTotal}</span></div>:<></>}

                                {trouser.quantity!=0?<div className="order_details"><span>Trousers</span><span><i>{finalData.items.Trousers.methods}</i></span><span>{finalData.items.Trousers.denomination}=</span><span>{trouserGrandTotal}</span></div>:<></>}

                                {jeans.quantity!=0?<div className="order_details"><span>Jeans</span><span><i>{finalData.items.Jeans.methods}</i></span><span>{finalData.items.Jeans.denomination}=</span><span>{jeansGrandTotal}</span></div>:<></>}

                                {boxers.quantity!=0?<div className="order_details"><span>Boxers</span><span><i>{finalData.items.Boxers.methods}</i></span><span>{finalData.items.Boxers.denomination}=</span><span>{boxersGrandTotal}</span></div>:<></>}

                                {joggers.quantity!=0?<div className="order_details"><span>Joggers</span><span><i>{finalData.items.Joggers.methods}</i></span><span>{finalData.items.Joggers.denomination}=</span><span>{joggersGrandTotal}</span></div>:<></>}

                                {others.quantity!=0?<div className="order_details"><span>Others</span><span><i>{finalData.items.Others.methods}</i></span><span>{finalData.items.Others.denomination}=</span><span>{othersGrandTotal}</span></div>:<></>}
                            </div>
                            <div className="total_div">
                                <div className="total_div1"><span>Sub total:</span><span className="sub_total"><b>{finalData.price}</b></span></div>

                                <div className="total_div1"><span>Pickup Charges:</span><span className="pickup_div"><b>90</b></span></div>
                                
                                <div className="total_blue"><span>Total:</span><span className="sub_total">Rs.{finalData.price+90}</span></div>
                            </div>
                            <div className="address_div">
                                <h5>Address</h5>
                                <div className="square_box">
                                    <h3>Home</h3>
                                    <span>{userData.main_Address} {userData.district} {userData.state} {userData.pincode} {userData.phone}</span>
                                </div>
                            </div>
                            <button className="confirm_btn" onClick={sendingOrder}>confirm</button>
                            </div>
                        </div>
                    </div>)}
                    {popup &&(<div className="modal">
                        <div className="overlay">
                        <div className="popup-content">
                            <img className="bluetick" src={blueTick}/>
                            <h1>Your order is successfully.</h1>
                            <p>You can track the delivery in the "Orders" section.</p>
                            <button className="order_route_btn"  onClick={Handle_go_to_orders}>Go to orders</button>
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