import { useEffect, useState } from "react";
import Displayprices from "./Displayprices";
import Otherservices from "./Otherservices";
import axios from "axios";
import Promocodes from "./Promocodes";
import useStore from "@/lib/store";
import { useRouter } from "next/router";
import Metaseo from "@/components/Metaseo";
import { toast } from "react-toastify";
import { useSession } from "next-auth/react";
import Offers from "@/pages/offers";

export default function Product(props : any) {
  const{ cart,addToCart,removeFromCart,updateShowLogin,updateLoading} = useStore();
  const { data : session, status } = useSession();
  const router = useRouter();
  const [selectedservices,setSelectedServices] = useState<any>([]);
  const [modelDetails,setModelDetails] = useState<any>({});
  const [services,setServices] = useState<any>([]);
  const [price,setPrice] = useState(0);
  const [discountedprice,setDiscountedPrice] = useState(0);
  const [promocodeapplied,setPromoCodeApplied] = useState(false);
  const [promocodeerror,setPromoCodeError] = useState(false);
  const [displayprices,setDisplayPrices] = useState<any>([]);
  const [showDisplayPrices, setShowDisplayPrices] = useState(false);
  const [showCodes,setShowCodes] = useState(false);
  const [enteredPromoCode,setEnteredPromoCode] = useState("");
  const [appliedPromoCode,setAppliedPromoCode] = useState("");
  const [showOthers,setShowOthers] = useState(false);
  const [selectedOtherIssues,setSelectedOtherIssues] = useState<any>([]);
  const [queryDetails,setQueryDetails] = useState("");
  const [serviceType,setServiceType] = useState("Normal");
  const [faultyCheck,setFaultyCheck] = useState(false);
  const [promoCodeArray,setPromoCodeArray] = useState([]);
  const { uuid } = require('uuidv4');
  const serviceTypeArray = [
    {
      id:1,
      label:"Express Service (₹ 100)",
      value:"Express"
    },
    {
      id:2,
      label:"Normal Service",
      value:"Normal"
    }
 ]

 const getOffers = async() => {
  const offersCall = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/offers/getoffers`)
  .then((response) => {
    if(response.status === 200){
      setPromoCodeArray(response.data.response)
    }
  }).catch((error) => {
     toast.error(error.message ? error.message : "Something unexpected happend please try again later",{
        theme:"colored",
        position:"top-center"
      })
  })
}

  const setInitialServices = (model:any) => {
    let servicesarray= [];
    setModelDetails({
       id:model._id,
       brand :model.brand,
       model :model.modelname,
       modelimagelink : model.modelimagelink
    })
    for(const property in model){
       if(property === 'display'){
          servicesarray.push({id:property,label:'Display',link:'display.webp',time:'30 Minutes',warranty:'6 Months', description: 'If your device Touch/LCD is damaged (Cracked) and has a destroyed image, no image or touch is not responding properly/ Only Half Display works.' });
          let displayContainingObj = JSON.parse(JSON.stringify(model[property]))
          delete displayContainingObj._id;
          let displayArray = [];
          for(const item in displayContainingObj){
             const label = item.replace(/^./, item[0].toUpperCase())
             let displayText
             if(label ==="Local"){
                displayText = 'Local display replacement: Affordable option with basic quality.'
             }else if(label === "Branded"){
                displayText = 'Branded display replacement: Higher quality with brand assurance.'
             }else{
                displayText = 'OLED display replacement: Premium option with superior color and clarity.'
             }
             const displayObj = {id:"display",label:`Display(${label})`,displayLabel:label,price:displayContainingObj[item],displayText:displayText};
             displayArray.push(displayObj);
          }
          setDisplayPrices(displayArray);           
       }else if(property === 'battery'){
          servicesarray.push({id:property,label:'Battery',price:model[property],link:'battery.webp',time: '20 Minutes',warranty: '3 Months',description: 'If your device battery is draining quickly or not charging properly, it might need a battery replacement.' })
       }else if(property === 'charging'){
          servicesarray.push({id:property,label:'Charging',price:model[property],link:'charging.webp',time: '40 Minutes',warranty: '6 Months',description: 'If your device camera is not functioning or the pictures are blurry, a camera replacement might be necessary.'})
       }else if(property === 'backpanel'){
          servicesarray.push({id:property,label:'Backpanel',price:model[property],link:'backpanel.webp',time: '30 Minutes',warranty: '6 Months',description: 'If the back panel of your device is cracked or damaged, a replacement can restore its original look and functionality.'})
       }else if(property === 'tempered'){
          servicesarray.push({id:property,label:'Tempered',price:model[property],link:'tempered.webp',time: '15 Minutes',warranty: '3 Months',description: 'Protect your device screen from scratches and cracks with a high-quality tempered glass replacement.'});
       }else if(property === 'glass'){
          servicesarray.push({id:property,label:'Glass',price:model[property],link:'tempered.webp',time: '30 Minutes',warranty: '6 Months',description: 'If the glass of your device is cracked or shattered, it can be replaced to restore a smooth and clear surface.'})
       }else if(property === 'speaker'){
          servicesarray.push({id:property,label:'Speaker',price:model[property],link:'speaker.webp',time: '25 Minutes',warranty: '6 Months',description: 'If your device speaker is not working properly and you can’t hear sound or it’s distorted, it might need a speaker replacement.' })
       }else if(property === 'receiver'){
          servicesarray.push({id:property,label:'Receiver',price:model[property],link:'dialer.webp',time: '30 Minutes',warranty: '6 Months',description: 'If your device receiver is not working properly and you can’t hear people during calls, it might need a receiver replacement.'})
       }else if(property === 'touch'){
          servicesarray.push({id:property,label:'Touch',price:model[property],link:'display.webp',time: '30 Minutes',warranty: '6 Months',description: 'If your device touch screen is unresponsive or malfunctioning, it might need a touch replacement.'})
       }
    }
    servicesarray.push({id:'others',label:'Others',price:199,link:'others.svg',time: '30 Minutes',warranty: '6 Months',description: 'Select from the others services or describe us your issue so that we can help your in a best possible way'})  
    setServices(servicesarray);
 }

 const checkProductInCart = (modelid:string) => {
    const foundProduct = cart.find((order:any) => order.modelid === modelid);
    return foundProduct;
 }

 const checkCartInitialSetup = () => {
    const product:any = checkProductInCart(props.data._id);
    if(product){
       let selectedservicesArray = [];
       for(const property in product){
         if(property === 'display'){
          const displayProperty = product.display;
          selectedservicesArray.push({id:"display",label:`Display(${displayProperty.type})`,displayLabel:displayProperty.type,price:displayProperty.price})
         }else if (property === 'battery'){
          selectedservicesArray.push({id:property,label:'Battery',price:product[property]})
         }else if (property === 'charging'){ 
          selectedservicesArray.push({id:property,label:'Charging',price:product[property]})
         }else if(property === 'backpanel'){
          selectedservicesArray.push({id:property,label:'Backpanel',price:product[property]})
         }else if(property === 'tempered'){
          selectedservicesArray.push({id:property,label:'Tempered',price:product[property]})
         }else if(property === 'glass'){
          selectedservicesArray.push({id:property,label:'Glass',price:product[property]})
         }else if(property === 'speaker'){
          selectedservicesArray.push({id:property,label:'Speaker',price:product[property]})
         }else if(property === 'receiver'){
          selectedservicesArray.push({id:property,label:'Receiver',price:product[property]})
         }else if(property === 'touch'){
          selectedservicesArray.push({id:property,label:'Touch',price:product[property]})
         }else if(property === 'others'){ 
          const  othersProperty = product.display;
          selectedservicesArray.push({id:"others",label:'Others',price:product[property]?.price,issues:othersProperty?.issues,query:othersProperty?.query})
         }else if(property === 'total'){ 
          setPrice(product[property]);
         }else if(property === 'servicetype'){ 
          setServiceType(product[property])
         }else if(property === 'couponapplied'){
            if(product[property] !== 'No'){
               setPromoCodeApplied(true);
               setAppliedPromoCode(product[property]);
               setDiscountedPrice(product['discountedprice']);
            }
         }
       }
       setFaultyCheck(true);
       setSelectedServices(selectedservicesArray);
    }
 }

const selectService = (event:any,service:any) => {
  event.preventDefault();;
  const elementindex = selectedservices.findIndex((servicelement:any) => servicelement.id === service.id);
  if(elementindex > -1){
      if(service.id === 'display'){
         let serviceprice = selectedservices[elementindex].price;
         let array = [...selectedservices];
         array.splice(elementindex,1);
         setSelectedServices(array);
         if(array.length > 0){
            let priced = serviceprice > price ? serviceprice - price : price - serviceprice;
            if(priced < 1000){
               setPrice(Math.round(serviceprice > price ? serviceprice - price : price - serviceprice + discountedprice));   
               if(promocodeapplied){
                  setPromoCodeError(true);
                  setPromoCodeApplied(false);
                  setDiscountedPrice(0);
               }else{
                  setPromoCodeError(false);
                  setPromoCodeApplied(false);
                  setDiscountedPrice(0);
               }
            }else{
               if(promocodeapplied){
                  const foundOffer:any = promoCodeArray.find((offer:any) => offer.label === appliedPromoCode);
                  const totalPrice =  serviceprice > price ? serviceprice - price + discountedprice : price - serviceprice + discountedprice;
                  const discountNew = Math.round(totalPrice * foundOffer.discountpercent/100);
                  const newDiscountedPrice = totalPrice - discountNew;
                  setDiscountedPrice(discountNew);
                  setPrice(Math.round(newDiscountedPrice));
               }else{
                  setPrice(priced);
               }
               setPromoCodeError(false);
            }
         }else{
            setPrice(0);   
            setPromoCodeApplied(false);
            setDiscountedPrice(0);
         }  
      }else{
         let array = [...selectedservices];
         array.splice(elementindex,1);
         setSelectedServices(array);
         if(array.length > 0){
            let priced = service.price > price ? service.price - price : price - service.price;
            if(priced < 1000){
               setPrice(Math.round(service.price > price ? service.price - price : price - service.price + discountedprice));
               if(promocodeapplied){
                  setPromoCodeError(true);
                  setPromoCodeApplied(false);
                  setDiscountedPrice(0);
               }else{
                  setPromoCodeError(false);
                  setPromoCodeApplied(false);
                  setDiscountedPrice(0);
               }
            }else{
               if(promocodeapplied){
                  const foundOffer:any = promoCodeArray.find((offer:any) => offer.label === appliedPromoCode);
                  const totalPrice = service.price > price ? service.price - price + discountedprice : price - service.price + discountedprice;
                  const discountNew = Math.round(totalPrice * foundOffer.discountpercent/100);
                  const newDiscountedPrice = totalPrice - discountNew;
                  setDiscountedPrice(discountNew);
                  setPrice(Math.round(newDiscountedPrice));
               }else{
                  setPrice(priced);
               }
               setPromoCodeError(false);
            }
         }else{
            setPrice(0);  
            setPromoCodeApplied(false);
            setDiscountedPrice(0); 
         } 
      }      
  }else{
      if(service.id === 'display'){
        setShowDisplayPrices(true);
      }else if(service.id === 'others'){
        setShowOthers(true);
      }else{
         let array = [...selectedservices];
         array.push(service);
         setSelectedServices(array);
         if(promocodeapplied){
            const totalPrice = price + service.price + discountedprice;
            const discountNew = Math.round(totalPrice * 10/100);
            const newDiscountedPrice = totalPrice - discountNew;
            setDiscountedPrice(discountNew);
            setPrice(Math.round(newDiscountedPrice));
         }else{
            setPrice(price + service.price);
         }
         if(price + service.price > 1000){
            setPromoCodeError(false);
         }
      }
  }
}

const selectDisplayService = (service:any) => {
  let array = [...selectedservices];
  array.push(service);
  setTimeout(() => {
     setSelectedServices(array);
     if(promocodeapplied){
        const totalPrice = price + service.price + discountedprice;
        const discountNew = Math.round(totalPrice * 10/100);
        const newDiscountedPrice = totalPrice - discountNew;
        setDiscountedPrice(discountNew);
        setPrice(Math.round(newDiscountedPrice));
     }else{
        setPrice(price + service.price);
     }
    setShowDisplayPrices(false);
 },500);
}
const showOthersHandler = () => {
  setQueryDetails("");
  setSelectedOtherIssues([]);
  setShowOthers(false);
}

const selectOtherIssueHandler = (issue:any) => {
  const elementindex = selectedOtherIssues.findIndex((element:any) => element.id === issue.id);
  if(elementindex > -1){
     let array = [...selectedOtherIssues];
     array.splice(elementindex,1);
     setSelectedOtherIssues(array);
  }else{
     let array = [...selectedOtherIssues];
     array.push(issue);
     setSelectedOtherIssues(array);
  }
}
const selectOtherService = () => {
if(selectedOtherIssues.length === 0){
  toast.error('Please select a issue',{
     theme:"colored",
     position:"top-center"
   }) 
}else if(queryDetails === ""){
  toast.error('Please enter your query',{
     theme:"colored",
     position:"top-center"
   }) 
}else{
  let service = {
     id:"others",
     label:'Others',
     link:'others.svg',
     price:199,
     issues : selectedOtherIssues,
     query:queryDetails
  }
  let array = [...selectedservices];
  array.push(service);
  setSelectedServices(array);
  if(promocodeapplied){
     const totalPrice = price + service.price + discountedprice;
     const discountNew = Math.round(totalPrice * 10/100);
     const newDiscountedPrice = totalPrice - discountNew;
     setDiscountedPrice(discountNew);
     setPrice(Math.round(newDiscountedPrice));
  }else{
     setPrice(price + service.price);
  }
  showOthersHandler();
}
}

const queryChangeHandler = (e:any) => {
  setQueryDetails(e.target.value);
}


const applypromocode = (promo:any) => {
  if(promocodeapplied){
   toast.error('Promo code already applied',{
      theme:"colored",
      position:"top-center"
    }) 
  }else if(price <= 1000 ){
   toast.error('Bill amount should be more than 1000',{
      theme:"colored",
      position:"top-center"
    })
    setPromoCodeError(true);
  }else if(promo.applicableservice !== "all" && !selectedservices.find((service:any) => service.id === promo.applicableservice)){
   toast.error(`Please select the ${promo.applicableservice} service`,{
      theme:"colored",
      position:"top-center"
    })
    setPromoCodeError(true);
  }
  else{
   const discount = price * promo.discountpercent/100;
   setDiscountedPrice(discount);
   const discountedprice = price - discount;
   setPrice(Math.round(discountedprice));
   setPromoCodeApplied(true);
   setPromoCodeError(false);
   setAppliedPromoCode(promo.label);
  }
 setShowCodes(false);
}

const applyEnteredPromoCode = () => {
if(enteredPromoCode.length > 0){
   const foundPromoCode = promoCodeArray.find((promo:any) => promo.label === enteredPromoCode);
   if(foundPromoCode){
       applypromocode(foundPromoCode);
   }else{
      toast.error('Invalid promo code',{
         theme:"colored",
         position:"top-center"
       })
   }
}else{
   toast.error('Please enter promo code',{
      theme:"colored",
      position:"top-center"
    })
}
}

const revertPromoCode = () => {
const revertedPrice = price + discountedprice;
setPrice(Math.round(revertedPrice));
setPromoCodeApplied(false);
setDiscountedPrice(0);
setPromoCodeError(false);
}
 

const serviceTypeChangeHandler = (checked:any,value:any) => {
  if(checked){
      if(value === "Express"){
        if(promocodeapplied){
          const foundOffer:any = promoCodeArray.find((offer:any) => offer.label === appliedPromoCode);
          const discountNew = discountedprice + Math.round(100 * foundOffer.discountpercent/100);
          setDiscountedPrice(discountNew);
          setPrice(price +  100 - Math.round(100 * foundOffer.discountpercent/100));
        }else{
          setPrice(price + 100);
        }
        setServiceType(value);
      }else{
        if(promocodeapplied){
          const foundOffer:any = promoCodeArray.find((offer:any) => offer.label === appliedPromoCode);
          const discountNew = discountedprice - Math.round(100 * foundOffer.discountpercent/100);
          setDiscountedPrice(discountNew);
          setPrice(price -  100 +  Math.round(100 * foundOffer.discountpercent/100));
        }else{
          if(price >= 100){
            setPrice(price - 100);
          }else{
             setPrice(100 - price);
          }
        }
        setServiceType(value);
      }
  }
}


const addProductInCart = () => {
   if(selectedservices.length){
      if(faultyCheck === false){
        toast.error('Please select submit faulty parts box',{
           theme:"colored",
           position:"top-center"
         })
      }else if(status !== "authenticated"){
         updateShowLogin(true);
      }else{
        removeFromCart(modelDetails.id)
        let product:any = {};
        product['modelid'] = modelDetails.id;
        product['brand'] = modelDetails.brand;
        product['model'] = modelDetails.model;
        product['modelimagelink'] = modelDetails.modelimagelink;
        selectedservices.map((service:any) => {
           if(service.id === "others"){
             product[`${service.id}`] = {issues:service.issues,query:service.query,price:service.price};
           }else if(service.id === "display"){
             product[`${service.id}`] = {type:service.displayLabel,price:service.price};
           }else{
             product[`${service.id}`] = service.price;
           }               
          })
        product['price'] = price;
        product['total'] = price;
        product['servicetype'] = serviceType;
        product['couponapplied'] = promocodeapplied ? appliedPromoCode : "No";
        product['discountedprice'] = discountedprice;
        product['orderid'] = uuid();
        console.log(product)
        addToCart(product)
        router.push('/cart')
      }
   }else{
     toast.error('Please select a service',{
        theme:"colored",
        position:"top-center"
    })
   }
}


  useEffect(() => {
    updateLoading(false);
    checkCartInitialSetup();
    setInitialServices(props.data);
    getOffers();
  },[])

  return (
    <>
     <Metaseo
         title={props.data.modelname}
         description={props.data.modelname}
         keywords={props.data.modelname}
         metadataBase={""}
         urlslug={props.data.modelname}
        />
     {showDisplayPrices && 
     <Displayprices 
      displayPrices = {displayprices}
      selectDisplayService = {selectDisplayService}
      setShowDisplayPrices = {setShowDisplayPrices}
     />
     }
     {showOthers && 
      <Otherservices
      selectOtherIssueHandler= {selectOtherIssueHandler}
      selectOtherService = {selectOtherService}
      queryChangeHandler = {queryChangeHandler}
      showOthersHandler = {showOthersHandler}
      selectedOtherIssues = {selectedOtherIssues}
      />
     }
     {showCodes && 
      <Promocodes 
        offers = {promoCodeArray}
        applypromocode = {applypromocode}
        setShowCodes = {setShowCodes}
      />
     }
      <div className="min-h-screen bg-white flex flex-col md:flex-row items-start justify-center p-4 md:p-10">
  <div className="w-full md:w-1/2 flex justify-center items-center p-4 md:p-10">
    <img
      src={props.data.modelimagelink ||  "/images/no-preview.jpg"} 
      alt={props.data.modelname}
      className="max-w-full max-h-screen object-contain "
      onError={(e) => {
          e.currentTarget.src = "/images/no-preview.jpg";
      }}
    />
  </div>
  <div className="w-full md:w-1/2 flex flex-col items-center p-4 md:p-10">
    <h1 className="text-2xl font-bold text-center mb-6 text-gray-700">Select a Service</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 w-full mb-6">
      {services.map((service:any) => (
        <label
          key={service.label}
          className={`flex flex-col border p-4 md:p-6 rounded-lg cursor-pointer transform transition-transform hover:scale-105 ${
            selectedservices.find((services:any) => services.id === service.id) ? 'bg-orange-500 text-white' : 'bg-white text-gray-700'
          } shadow-lg`}
          onClick={(e) => selectService(e,service)}
        >
          <div className="flex items-center justify-between w-full mb-4">
            <img src={`/images/product-service/${service.link}`} alt={service.label} className="w-12 h-12" />
            <div className="text-right">
              <div className="text-sm font-bold">Repairing Time: {service.time}</div>
              <div className="text-sm font-bold">Warranty: {service.warranty}</div>
            </div>
          </div>
          <input
            type="checkbox"
            name="service"
            value={service.name}
            checked={selectedservices.includes(service.name)}
            className="hidden"
          />
          <div className="text-left">
            <span className="font-bold">{service.label}</span>
            <div style={{ marginTop: '10px' }}>
              <p className="product-info">{service.description}</p>
            </div>
            <div className="font-bold mt-2">{service.price ? `₹${service.price}` : ""}</div>
          </div>
        </label>
      ))}
    </div>
    <div className="w-full p-4 md:p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4 text-gray-700">Booking Summary</h2>

      {/* Service Type Selection */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Select Service Type:</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {serviceTypeArray.map((servicetype:any) => (
            <label
              key={servicetype.id}
              className={`flex items-center p-2 border rounded-lg cursor-pointer ${
                serviceType === servicetype.value ? 'bg-orange-500 text-white font-bold' : 'bg-white text-gray-700 font-bold'
              }`}
            >
              <input
                type="radio"
                checked={serviceType === servicetype.value ? true : false}
                onChange={(e) => serviceTypeChangeHandler(e.target.checked,servicetype.value)}
                className="mr-2"
              />
              {servicetype.label}
            </label>
          ))}
        </div>
      </div>

      {/* Booking Summary Details */}
      <ul className="mb-4">
        {selectedservices.map((service:any) => {
          return (
            <li key={service.label} className="flex justify-between">
              <span>{service.label}</span>
              <span>₹{service.price}</span>
            </li>
          );
        })}
      </ul>
      <div className="flex justify-between mb-4">
        <span className="font-bold text-gray-700">Total</span>
        <span className="font-bold text-gray-700">₹{price}</span>
      </div>

      {/* Promo Code Input */}
      <div className="flex w-full mb-4">
        <input
          type="text"
          placeholder="Apply Promo Code"
          onChange={(e) => setEnteredPromoCode(e.target.value)}
          className="flex-grow p-2 border rounded-l"
        />
        <button className="w-32 p-2 bg-orange-500 text-white rounded-r" onClick={() => applyEnteredPromoCode()}>Apply</button>
      </div>
      {promocodeapplied && (
        <div className="text-green-600 mt-2 flex items-center">
        Saved ₹{discountedprice} with coupon code applied{' '}
        <span className="font-bold underline mx-1">{appliedPromoCode}</span>
        <button
          className="ml-2 p-2 bg-red-500 text-white rounded"
          onClick={() => revertPromoCode()}
        >
          Remove
        </button>
      </div>
      )}
      {/* View Promo Codes Button */}
      <button className="w-full mb-4 p-2 bg-orange-500 text-white rounded mt-4" onClick={() => setShowCodes(true)}>View Promo Codes</button>

      {/* Faulty Parts Checkbox */}
      <label className="flex items-center mb-4 font-bold">
        <input
          type="checkbox"
          checked={faultyCheck}
          onChange={() => setFaultyCheck(!faultyCheck)}
          className="mr-2"
        />
        Customer needs to submit faulty parts
      </label>

      {/* Add to Cart Button */}
      <button className="w-full p-2 bg-green-500 text-white rounded" onClick={addProductInCart}>Add to Cart</button>
    </div>
  </div>
</div>
    </>

  );
  }
export async function getServerSideProps(context : any) {
  const { modelid } = context.params;
   try{
    const data = {
      "modelid" : modelid
   }
   const getModel = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/models/getmodel`,data)
   .then((response) => {
      return response.data.model
   })
   .catch((error) => {
      return { notFound: true };
   })
   return { props: { data: getModel } };
   }catch(error){
    return { notFound: true };
   }
 }