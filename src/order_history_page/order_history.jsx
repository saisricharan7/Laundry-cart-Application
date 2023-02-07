import React from "react";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import homelogo from './images/home-logo.png';
import more2 from './images/more2.png';
import list2 from './images/list2.png';
import view from './images/view.png';
import Homeheader from "../Header/home_header";
import './order_history.css';
import axios from 'axios';
import alert_img from './images/cancel_img.PNG';

const History=()=>{
    const navigate = useNavigate();
    
    const[history,setHistory]= useState([]);
    const token =  localStorage.getItem("token");
    const [cancel_popup,setCancel]= useState(false);
    const [historymodal, setHistoryModal] = useState(false);
  
    const [sub_total,setSub_total]=useState(0)
    const [id,setItemid]= useState('');
    const user =JSON.parse(window.localStorage.getItem("userData")) 
    console.log(user)
    let data;
    const [products,setProducts]= useState()
    let headers = { "Authorization": token };
    const Cancel_order_btn=()=>{
        setHistoryModal(false);
        setCancel(true);

    }
  
    const HandleCancelOrder=async ()=>{
        console.log(id)
       setCancel(false)
       await axios.patch(`https://laundry-be-pwp5.onrender.com/api_order/cancel/${id}`,null,{headers})
       await axios.post(`https://laundry-be-pwp5.onrender.com/api_order/get_orders/${user.email}`, null, { headers }).then( (res)=>{data=res.data})
       setHistory(data.post)
       
    }
    const Historyclose=()=>{
        setHistoryModal(false);

        // setSub_total(0);
    }
    
   
    const HandleHistorySummary=async (key)=>{
        setHistoryModal(true)
        setItemid(key);
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

    useEffect(()=>{
        if(!token){
            navigate("/login")
            }
        const getdata=async ()=>{
        try {
            
           await axios.post(`https://laundry-be-pwp5.onrender.com/api_order/get_orders/${user.email}`, null, { headers }).then( (res)=>{data=res.data})
            setHistory(data.post)

          } catch (error) {
            console.log(error);
          }         
        }
        getdata()
    },[])
    // 
   
    return (
        <>
         <Homeheader/>
         <div className="history-body">
            <div className="history-sidebar">
                <div><img src={homelogo}></img></div>
                <div ><img src={more2} onClick={()=>{navigate("/home")}}></img></div>
                <div style={{"backgroundColor":"white"}}><img src={list2}></img></div>
            </div>
            <div className="history-table-div">
                <div className='create-search-history'>
                    <strong>Orders</strong>
                    <button className='create-history'  onClick={()=>{navigate("/home")}}>Create</button>
                    {/* <span className='search-history'>Search</span> */}
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
                            <div className="modal-header">Summary <button className="close-modal" onClick={()=>{Historyclose()}}>X</button></div>
                            <div className="historyModal_storeDetails">
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
                            <div className="historyOrder_boby">
                                <h5>order details</h5>
                               {products.shirts.qty!==0?<div className="historyOrder_div"><span>Shirts</span><span>{products.shirts.methods}</span><span>{products.shirts.denomination} =</span><span>{products.shirts.item_price}</span></div>:<></>}
                               {products.Jeans.qty!==0?<div className="historyOrder_div"><span>Jeans</span><span>{products.Jeans.methods}</span><span>{products.Jeans.denomination} =</span><span>{products.Jeans.item_price}</span></div>:<></>}
                               {products.Trousers.qty!==0?<div className="historyOrder_div"><span>Trousers</span><span>{products.Trousers.methods}</span><span>{products.Trousers.denomination} =</span><span>{products.Trousers.item_price}</span></div>:<></>}
                               {products.Tshirts.qty!==0?<div className="historyOrder_div"><span>Tshirts</span><span>{products.Tshirts.methods}</span><span>{products.Tshirts.denomination} =</span><span>{products.Tshirts.item_price}</span></div>:<></>}
                               {products.Joggers.qty!==0?<div className="historyOrder_div"><span>Joggers</span><span>{products.Joggers.methods}</span><span>{products.Joggers.denomination} =</span><span>{products.Joggers.item_price}</span></div>:<></>}
                               {products.Boxers.qty!==0?<div className="historyOrder_div"><span>Boxers</span><span>{products.Boxers.methods}</span><span>{products.Boxers.denomination} =</span><span>{products.Boxers.item_price}</span></div>:<></>}
                               {products.Others.qty!==0?<div className="historyOrder_div"><span>Others</span><span>{products.Others.methods}</span><span>{products.Others.denomination} =</span><span>{products.Others.item_price}</span></div>:<></>}
                            </div>
                            <div className="historyTotal_div">
                               <div className="historyTotal_div1"><span>Sub Total :</span><span className="historySub_total"><b>{sub_total}</b></span></div>

                               <div className="historyTotal_div1"><span>Pick up charges :</span><span className="historyPickup_div"><b>90</b></span></div>

                               <div className="historyTotal_blue"><span>Total :</span><span className="historySub_total"><b>{parseInt(sub_total)+90}</b></span></div>
                            </div>
                            <div className="historyAddress_div">
                                <h5>Address</h5>
                                <div className="historySquare_div">
                                    <h3>Home</h3>
                                    <span>{user.main_Address} {user.district} {user.state} {user.pincode} {user.phone}</span>
                                </div>
                            </div>
                            <button className="history_cancel_btn" onClick={()=>{Cancel_order_btn()}}>cancel order</button>
                            </div>
                        </div>
                    </div>)}
            {cancel_popup &&(<div className="modal">
                        <div className="overlay">
                        <div className="historyPopup-content">
                        <div className="historyAlert_div">
                            <p className="history_alert_color">Alert</p><button className="historysideclose_btn" onClick={()=>setCancel(false)}>X</button>
                        </div>  
                        <div className="historyAlert_msgDiv">
                            <img className="historyIMG" src={alert_img}></img>
                            <p>Are you sure want to cancel the order</p>
                        </div>
                            <button className="historyProceed_btnDiv" onClick={HandleCancelOrder}>Proceed</button>
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
