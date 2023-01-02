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
  
    const [sub_total,setSub_total]=useState(0)
    const [id,setItemid]= useState('');
    const user =JSON.parse(window.localStorage.getItem("userData")) 
    let data,post;
    const [products,setProducts]= useState()
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

        // setSub_total(0);
    }
    
    const Cancel_order_btn=()=>{
        setHistoryModal(false);
        setCancel(true);

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
             
                setProducts(req_item.items)
            }
        }
  
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
                               {products.Jeans.qty!=0?<div className="each-item"><span>Jeans</span><span>{products.Jeans.methods}</span><span>{products.Jeans.denomination} =</span><span>{products.Jeans.item_price}</span></div>:<></>}
                               {products.Trousers.qty!=0?<div className="each-item"><span>Trousers</span><span>{products.Trousers.methods}</span><span>{products.Trousers.denomination} =</span><span>{products.Trousers.item_price}</span></div>:<></>}
                               {products.Tshirts.qty!=0?<div className="each-item"><span>Tshirts</span><span>{products.Tshirts.methods}</span><span>{products.Tshirts.denomination} =</span><span>{products.Tshirts.item_price}</span></div>:<></>}
                               {products.Joggers.qty!=0?<div className="each-item"><span>Joggers</span><span>{products.Joggers.methods}</span><span>{products.Joggers.denomination} =</span><span>{products.Joggers.item_price}</span></div>:<></>}
                               {products.Boxers.qty!=0?<div className="each-item"><span>Boxers</span><span>{products.Boxers.methods}</span><span>{products.Boxers.denomination} =</span><span>{products.Boxers.item_price}</span></div>:<></>}
                               {products.Others.qty!=0?<div className="each-item"><span>Others</span><span>{products.Others.methods}</span><span>{products.Others.denomination} =</span><span>{products.Others.item_price}</span></div>:<></>}
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
