import React from "react";
import { useState,useEffect } from "react";
import homelogo from './images/home-logo.png';
import more from './images/more.png';
import list from './images/list.png';
import view from './images/view.png';
import Homeheader from "../Header/home_header";
import './order_history.css';
import axios from 'axios'

const History=()=>{
    const[history,setHistory]= useState([]);
    const token =  localStorage.getItem("token");
    const [cancel_popup,setCancel]= useState(false);
    const [historymodal, setHistoryModal] = useState(false);
    const [shirt, setShirt] = useState({qty:0,
                                    methods:"",
                                    denomination:"",
                                    item_price:0});
    const [jeans, setJeans] = useState({qty:0,
        methods:"",
        denomination:"",
        item_price:0});
    const [trousers, setTrousers] = useState({qty:0,
        methods:"",
        denomination:"",
        item_price:0});
    const [t_shirt, setT_shirt] = useState({qty:0,
        methods:"",
        denomination:"",
        item_price:0});
    const [boxers, setBoxers] = useState({qty:0,
        methods:"",
        denomination:"",
        item_price:0});
    const [others, setOthers] = useState({qty:0,
        methods:"",
        denomination:"",
        item_price:0});
    const [joggers,setJoggers]= useState({qty:0,
        methods:"",
        denomination:"",
        item_price:0});
    const [sub_total,setSub_total]=useState(0)
    const [id,setItemid]= useState('');
    const user =JSON.parse(window.localStorage.getItem("userData")) 
    let data,post;
    let products=[];
    let headers = { "Authorization": token };
  
    const HandleCancelOrder=async ()=>{
        console.log(id)
       setCancel(false)
       await axios.patch(`/api_order/cancel/${id}`,null,{headers})
       await axios.post("/api_order/get_orders", null, { headers }).then( (res)=>{data=res.data})
       setHistory(data.post)
       
    }
    const Historyclose=()=>{
        setHistoryModal(false);
        setBoxers(null);
        setJeans(null);
        setJoggers(null);
        setShirt(null);
        setOthers(null);
        setT_shirt(null);
        setTrousers(null);
        // setSub_total(0);
    }
    
    const Cancel_order_btn=()=>{
        setHistoryModal(false);
        setCancel(true);
        setHistoryModal(false);
        setBoxers(null);
        setJeans(null);
        setJoggers(null);
        setShirt(null);
        setOthers(null);
        setT_shirt(null);
        setTrousers(null);
        // setSub_total(0);
    }
    const HandleHistorySummary=async (key)=>{
        setHistoryModal(true)
        let req_item
        for(let i=0;i<history.length;i++){
            const eachItem= history[i]
            if(eachItem._id===key){
                req_item=eachItem
                console.log(req_item)
                setSub_total(req_item.price)
                products=req_item.items
            }
        }
        console.log(products.shirts.qty)
        //  for(let each in products){
        //         if(each==="shirts"){
        //             setShirt(...shirt,products.each)
        //             console.log(products.each)
        //             console.log(shirt)
        //             // setSub_total(sub_total+parseInt(products[each].item_price))
        //             // console.log(sub_total)
        //         }
        //         else if(each==="Jeans"){
        //             setJeans(...jeans,products[each])
        //             // setSub_total(sub_total+parseInt(products[each].item_price))
        //         }
        //         else if(each==="Trousers"){
        //             setTrousers(...trousers,products[each])
        //             // setSub_total(sub_total+parseInt(products[each].item_price))
        //         }
        //         else if(each==="Boxers"){
        //             setBoxers(...boxers,products[each])
        //             // setSub_total(sub_total+parseInt(products[each].item_price))
        //         }
        //         else if(each=="Tshirts"){
        //             setT_shirt(...t_shirt,products[each])
        //             // setSub_total(sub_total+parseInt(products[each].item_price))
        //         }
        //         else if(each==="Joggers"){
        //             setJoggers(...joggers,products[each])
        //             // setSub_total(sub_total+parseInt(products[each].item_price))
        //         }
        //         else{
        //             setOthers(...others,products[each])
        //             // setSub_total(sub_total+parseInt(products[each].item_price))
        //         }
        //     }
    }

    useEffect(async ()=>{
        try {
            await axios.post(`/api_order/get_orders/${user.email}`, null, { headers }).then( (res)=>{data=res.data})
            post = data.post
            console.log(post)
            console.log(user.email);
            setHistory(data.post)

          } catch (error) {
            console.log(error);
          }
    },[])
    // 
   
    return (
        <>
         <Homeheader/>
         <div className="history-body">
            <div className="history-sidebar">
                <div><img src={homelogo}></img></div>
                <div style={{"backgroundColor":"white"}}><img src={more}></img></div>
                <div><img src={list}></img></div>
            </div>
            <div className="history-table-div">
                <div className='create-search-history'>
                    <span className='create-history'>Create</span>
                    <span className='search-history'>Search</span>
                </div>
                <table>
                    <thead className="history-thead">
                        <th>order id</th>
                        <th>order Date & Time</th>
                        <th>Store Location</th>
                        <th>city</th>
                        <th>Store Phone</th>
                        <th>Total Items</th>
                        <th>Price</th>
                        <th>Status</th>
                        <th> </th>
                        <th>View</th>

                    </thead>
                    <tbody>
                        {history.map((Rdata,{key=Rdata._id})=>{
                            return(
                                <tr key={key}>
                                    <td>{Rdata.order_id}</td>
                                    <td>{Rdata.date_time}</td>
                                    <td>{Rdata.store_location}</td>
                                    <td>{Rdata.city}</td>
                                    <td>{Rdata.store_phone}</td>
                                    <td>{Rdata.total_items}</td>
                                    <td>{Rdata.price}</td>
                                    <td>{Rdata.status}</td>
                                    <td>{Rdata.status==="Ready to pickup"?<span className="cancel-order" onClick={()=>{setCancel(true);setItemid(key)}}>Cancel order</span>:" "}</td>
                                    <td><img style={{"width":"20px","height":"25px"}} onClick={()=>HandleHistorySummary(key)} src={view}></img></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
            {historymodal &&(<div className="modal">
                        <div className="overlay">
                        <div className="modal-content">
                            <div className="modal-header">Summary <span className="close-modal" onClick={()=>{Historyclose()}}>X</span></div>
                            <div className="modal-body">
                                <p style={{"color":"#3B3737"}}>orders</p>
                               {products.shirts.qty>0?<div><span>Shirts</span><span>{products.shirts.methods}</span><span>{products.shirts.denomination} =</span><span>{products.shirts.item_price}</span></div>:<></>}
                               {/* {products.jeans.qty!=0?<div className="each-item"><span>Jeans</span><span>{jeans.methods}</span><span>{jeans.denomination} =</span><span>{jeans.item_price}</span></div>:<></>}
                               {products.trousers.qty!=0?<div className="each-item"><span>Trousers</span><span>{trousers.methods}</span><span>{trousers.denomination} =</span><span>{trousers.item_price}</span></div>:<></>}
                               {products.t_shirt.qty!=0?<div className="each-item"><span>Tshirts</span><span>{t_shirt.methods}</span><span>{t_shirt.denomination} =</span><span>{t_shirt.item_price}</span></div>:<></>}
                               {products.joggers.qty!=0?<div className="each-item"><span>Joggers</span><span>{joggers.methods}</span><span>{joggers.denomination} =</span><span>{joggers.item_price}</span></div>:<></>}
                               {products.boxers.qty!=0?<div className="each-item"><span>Boxers</span><span>{boxers.methods}</span><span>{boxers.denomination} =</span><span>{boxers.item_price}</span></div>:<></>}
                               {products.others.qty!=0?<div className="each-item"><span>Others</span><span>{others.methods}</span><span>{others.denomination} =</span><span>{others.item_price}</span></div>:<></>} */}
                               <div>Sub Total :{sub_total}</div>
                               <div>Pick up charges : 90</div>
                               <div>Total : {parseInt(sub_total)+90}</div>
                            </div>
                            
                            <button onClick={()=>{Cancel_order_btn()}}>cancel order</button>
                            </div>
                        </div>
                    </div>)}
            {cancel_popup &&(<div className="modal">
                        <div className="overlay">
                        <div className="popup-content">
                            <h1>hello popup</h1>
                            <p>popup content</p>
                            <button onClick={HandleCancelOrder}>cancel</button>
                            </div>
                        </div>
                        </div>)}
         </div>

         <footer className='footer-history' >
                        2022 © Laundry
                        </footer>
        </>
    )
}

export default History
