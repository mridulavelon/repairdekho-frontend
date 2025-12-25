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
import { Check, Clock, Shield, Wrench, Sparkles } from "lucide-react";

export default function Product(props: any) {
  const { cart, addToCart, removeFromCart, updateShowLogin, updateLoading } = useStore();
  const { data: session, status } = useSession();
  const router = useRouter();
  const [selectedservices, setSelectedServices] = useState<any>([]);
  const [modelDetails, setModelDetails] = useState<any>({});
  const [services, setServices] = useState<any>([]);
  const [price, setPrice] = useState(0);
  const [discountedprice, setDiscountedPrice] = useState(0);
  const [promocodeapplied, setPromoCodeApplied] = useState(false);
  const [promocodeerror, setPromoCodeError] = useState(false);
  const [displayprices, setDisplayPrices] = useState<any>([]);
  const [showDisplayPrices, setShowDisplayPrices] = useState(false);
  const [showCodes, setShowCodes] = useState(false);
  const [enteredPromoCode, setEnteredPromoCode] = useState("");
  const [appliedPromoCode, setAppliedPromoCode] = useState("");
  const [showOthers, setShowOthers] = useState(false);
  const [selectedOtherIssues, setSelectedOtherIssues] = useState<any>([]);
  const [queryDetails, setQueryDetails] = useState("");
  const [serviceType, setServiceType] = useState("Normal");
  const [faultyCheck, setFaultyCheck] = useState(true);
  const [promoCodeArray, setPromoCodeArray] = useState([]);
  const { uuid } = require('uuidv4');

  const serviceTypeArray = [
    {
      id: 1,
      label: "Express Service (₹ 100)",
      value: "Express"
    },
    {
      id: 2,
      label: "Normal Service",
      value: "Normal"
    }
  ];

  const getOffers = async () => {
    const offersCall = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/offers/getoffers`)
      .then((response) => {
        if (response.status === 200) {
          setPromoCodeArray(response.data.response);
        }
      }).catch((error) => {
        toast.error(error.message ? error.message : "Something unexpected happened please try again later", {
          theme: "colored",
          position: "top-center"
        });
      });
  };

  const setInitialServices = (model: any) => {
    let servicesarray = [];
    setModelDetails({
      id: model._id,
      brand: model.brand,
      model: model.modelname,
      modelimagelink: model.modelimagelink
    });

    for (const property in model) {
      if (property === 'display') {
        // Only add Display service if there are display options with prices > 0
        let displayContainingObj = JSON.parse(JSON.stringify(model[property]));
        delete displayContainingObj._id;
        let displayArray = [];
        for (const item in displayContainingObj) {
          const label = item.replace(/^./, item[0].toUpperCase());
          let displayText;
          if (label === "Local") {
            displayText = 'Local display replacement: Affordable option with basic quality.';
          } else if (label === "Branded") {
            displayText = 'Branded display replacement: Higher quality with brand assurance.';
          } else {
            displayText = 'OLED display replacement: Premium option with superior color and clarity.';
          }
          const displayObj = { id: "display", label: `Display(${label})`, displayLabel: label, price: displayContainingObj[item], displayText: displayText };
          // Only add to displayArray if price is not zero
          if (displayContainingObj[item] > 0) {
            displayArray.push(displayObj);
          }
        }
        
        // Only add Display service card if there are display options available
        if (displayArray.length > 0) {
          servicesarray.push({
            id: property,
            label: 'Display',
            link: 'display.webp',
            time: '30 Minutes',
            warranty: '6 Months',
            description: 'If your device Touch/LCD is damaged (Cracked) and has a destroyed image, no image or touch is not responding properly/ Only Half Display works.'
          });
          setDisplayPrices(displayArray);
        }
      } else if (property === 'battery' && model[property] > 0) {
        servicesarray.push({ id: property, label: 'Battery', price: model[property], link: 'battery.webp', time: '20 Minutes', warranty: '3 Months', description: 'If your device battery is draining quickly or not charging properly, it might need a battery replacement.' });
      } else if (property === 'charging' && model[property] > 0) {
        servicesarray.push({ id: property, label: 'Charging', price: model[property], link: 'charging.webp', time: '40 Minutes', warranty: '6 Months', description: 'If your device camera is not functioning or the pictures are blurry, a camera replacement might be necessary.' });
      } else if (property === 'backpanel' && model[property] > 0) {
        servicesarray.push({ id: property, label: 'Backpanel', price: model[property], link: 'backpanel.webp', time: '30 Minutes', warranty: '6 Months', description: 'If the back panel of your device is cracked or damaged, a replacement can restore its original look and functionality.' });
      } else if (property === 'tempered' && model[property] > 0) {
        servicesarray.push({ id: property, label: 'Tempered', price: model[property], link: 'tempered.webp', time: '15 Minutes', warranty: '3 Months', description: 'Protect your device screen from scratches and cracks with a high-quality tempered glass replacement.' });
      } else if (property === 'glass' && model[property] > 0) {
        servicesarray.push({ id: property, label: 'Glass', price: model[property], link: 'tempered.webp', time: '30 Minutes', warranty: '6 Months', description: 'If the glass of your device is cracked or shattered, it can be replaced to restore a smooth and clear surface.' });
      } else if (property === 'speaker' && model[property] > 0) {
        servicesarray.push({ id: property, label: 'Speaker', price: model[property], link: 'speaker.webp', time: '25 Minutes', warranty: '6 Months', description: 'If your device speaker is not working properly and you can\'t hear sound or it\'s distorted, it might need a speaker replacement.' });
      } else if (property === 'receiver' && model[property] > 0) {
        servicesarray.push({ id: property, label: 'Receiver', price: model[property], link: 'dialer.webp', time: '30 Minutes', warranty: '6 Months', description: 'If your device receiver is not working properly and you can\'t hear people during calls, it might need a receiver replacement.' });
      } else if (property === 'touch' && model[property] > 0) {
        servicesarray.push({ id: property, label: 'Touch', price: model[property], link: 'display.webp', time: '30 Minutes', warranty: '6 Months', description: 'If your device touch screen is unresponsive or malfunctioning, it might need a touch replacement.' });
      }
    }
    // Always show "Others" service
    servicesarray.push({ id: 'others', label: 'Others', price: 199, link: 'others.svg', time: '30 Minutes', warranty: '6 Months', description: 'Select from the others services or describe us your issue so that we can help your in a best possible way' });
    setServices(servicesarray);
  };

  const checkProductInCart = (modelid: string) => {
    const foundProduct = cart.find((order: any) => order.modelid === modelid);
    return foundProduct;
  };

  const checkCartInitialSetup = () => {
    const product: any = checkProductInCart(props.data._id);
    if (product) {
      let selectedservicesArray = [];
      for (const property in product) {
        if (property === 'display') {
          const displayProperty = product.display;
          selectedservicesArray.push({ id: "display", label: `Display(${displayProperty.type})`, displayLabel: displayProperty.type, price: displayProperty.price });
        } else if (property === 'battery') {
          selectedservicesArray.push({ id: property, label: 'Battery', price: product[property] });
        } else if (property === 'charging') {
          selectedservicesArray.push({ id: property, label: 'Charging', price: product[property] });
        } else if (property === 'backpanel') {
          selectedservicesArray.push({ id: property, label: 'Backpanel', price: product[property] });
        } else if (property === 'tempered') {
          selectedservicesArray.push({ id: property, label: 'Tempered', price: product[property] });
        } else if (property === 'glass') {
          selectedservicesArray.push({ id: property, label: 'Glass', price: product[property] });
        } else if (property === 'speaker') {
          selectedservicesArray.push({ id: property, label: 'Speaker', price: product[property] });
        } else if (property === 'receiver') {
          selectedservicesArray.push({ id: property, label: 'Receiver', price: product[property] });
        } else if (property === 'touch') {
          selectedservicesArray.push({ id: property, label: 'Touch', price: product[property] });
        } else if (property === 'others') {
          const othersProperty = product.display;
          selectedservicesArray.push({ id: "others", label: 'Others', price: product[property]?.price, issues: othersProperty?.issues, query: othersProperty?.query });
        } else if (property === 'total') {
          setPrice(product[property]);
        } else if (property === 'servicetype') {
          setServiceType(product[property]);
        } else if (property === 'couponapplied') {
          if (product[property] !== 'No') {
            setPromoCodeApplied(true);
            setAppliedPromoCode(product[property]);
            setDiscountedPrice(product['discountedprice']);
          }
        }
      }
      setFaultyCheck(true);
      setSelectedServices(selectedservicesArray);
    }
  };

  const selectService = (event: any, service: any) => {
    event.preventDefault();
    const elementindex = selectedservices.findIndex((servicelement: any) => servicelement.id === service.id);
    if (elementindex > -1) {
      if (service.id === 'display') {
        let serviceprice = selectedservices[elementindex].price;
        let array = [...selectedservices];
        array.splice(elementindex, 1);
        setSelectedServices(array);
        if (array.length > 0) {
          let priced = serviceprice > price ? serviceprice - price : price - serviceprice;
          if (priced < 1000) {
            setPrice(Math.round(serviceprice > price ? serviceprice - price : price - serviceprice + discountedprice));
            if (promocodeapplied) {
              setPromoCodeError(true);
              setPromoCodeApplied(false);
              setDiscountedPrice(0);
            } else {
              setPromoCodeError(false);
              setPromoCodeApplied(false);
              setDiscountedPrice(0);
            }
          } else {
            if (promocodeapplied) {
              const foundOffer: any = promoCodeArray.find((offer: any) => offer.label === appliedPromoCode);
              const totalPrice = serviceprice > price ? serviceprice - price + discountedprice : price - serviceprice + discountedprice;
              const discountNew = Math.round(totalPrice * foundOffer.discountpercent / 100);
              const newDiscountedPrice = totalPrice - discountNew;
              setDiscountedPrice(discountNew);
              setPrice(Math.round(newDiscountedPrice));
            } else {
              setPrice(priced);
            }
            setPromoCodeError(false);
          }
        } else {
          setPrice(0);
          setPromoCodeApplied(false);
          setDiscountedPrice(0);
        }
      } else {
        let array = [...selectedservices];
        array.splice(elementindex, 1);
        setSelectedServices(array);
        if (array.length > 0) {
          let priced = service.price > price ? service.price - price : price - service.price;
          if (priced < 1000) {
            setPrice(Math.round(service.price > price ? service.price - price : price - service.price + discountedprice));
            if (promocodeapplied) {
              setPromoCodeError(true);
              setPromoCodeApplied(false);
              setDiscountedPrice(0);
            } else {
              setPromoCodeError(false);
              setPromoCodeApplied(false);
              setDiscountedPrice(0);
            }
          } else {
            if (promocodeapplied) {
              const foundOffer: any = promoCodeArray.find((offer: any) => offer.label === appliedPromoCode);
              const totalPrice = service.price > price ? service.price - price + discountedprice : price - service.price + discountedprice;
              const discountNew = Math.round(totalPrice * foundOffer.discountpercent / 100);
              const newDiscountedPrice = totalPrice - discountNew;
              setDiscountedPrice(discountNew);
              setPrice(Math.round(newDiscountedPrice));
            } else {
              setPrice(priced);
            }
            setPromoCodeError(false);
          }
        } else {
          setPrice(0);
          setPromoCodeApplied(false);
          setDiscountedPrice(0);
        }
      }
    } else {
      if (service.id === 'display') {
        setShowDisplayPrices(true);
      } else if (service.id === 'others') {
        setShowOthers(true);
      } else {
        let array = [...selectedservices];
        array.push(service);
        setSelectedServices(array);
        if (promocodeapplied) {
          const totalPrice = price + service.price + discountedprice;
          const discountNew = Math.round(totalPrice * 10 / 100);
          const newDiscountedPrice = totalPrice - discountNew;
          setDiscountedPrice(discountNew);
          setPrice(Math.round(newDiscountedPrice));
        } else {
          setPrice(price + service.price);
        }
        if (price + service.price > 1000) {
          setPromoCodeError(false);
        }
      }
    }
  };

  const selectDisplayService = (service: any) => {
    let array = [...selectedservices];
    array.push(service);
    setTimeout(() => {
      setSelectedServices(array);
      if (promocodeapplied) {
        const totalPrice = price + service.price + discountedprice;
        const discountNew = Math.round(totalPrice * 10 / 100);
        const newDiscountedPrice = totalPrice - discountNew;
        setDiscountedPrice(discountNew);
        setPrice(Math.round(newDiscountedPrice));
      } else {
        setPrice(price + service.price);
      }
      setShowDisplayPrices(false);
    }, 500);
  };

  const showOthersHandler = () => {
    setQueryDetails("");
    setSelectedOtherIssues([]);
    setShowOthers(false);
  };

  const selectOtherIssueHandler = (issue: any) => {
    const elementindex = selectedOtherIssues.findIndex((element: any) => element.id === issue.id);
    if (elementindex > -1) {
      let array = [...selectedOtherIssues];
      array.splice(elementindex, 1);
      setSelectedOtherIssues(array);
    } else {
      let array = [...selectedOtherIssues];
      array.push(issue);
      setSelectedOtherIssues(array);
    }
  };

  const selectOtherService = () => {
    if (selectedOtherIssues.length === 0) {
      toast.error('Please select a issue', {
        theme: "colored",
        position: "top-center"
      });
    } else if (queryDetails === "") {
      toast.error('Please enter your query', {
        theme: "colored",
        position: "top-center"
      });
    } else {
      let service = {
        id: "others",
        label: 'Others',
        link: 'others.svg',
        price: 199,
        issues: selectedOtherIssues,
        query: queryDetails
      };
      let array = [...selectedservices];
      array.push(service);
      setSelectedServices(array);
      if (promocodeapplied) {
        const totalPrice = price + service.price + discountedprice;
        const discountNew = Math.round(totalPrice * 10 / 100);
        const newDiscountedPrice = totalPrice - discountNew;
        setDiscountedPrice(discountNew);
        setPrice(Math.round(newDiscountedPrice));
      } else {
        setPrice(price + service.price);
      }
      showOthersHandler();
    }
  };

  const queryChangeHandler = (e: any) => {
    setQueryDetails(e.target.value);
  };

  const applypromocode = (promo: any) => {
    if (promocodeapplied) {
      toast.error('Promo code already applied', {
        theme: "colored",
        position: "top-center"
      });
    } else if (price <= 1000) {
      toast.error('Bill amount should be more than 1000', {
        theme: "colored",
        position: "top-center"
      });
      setPromoCodeError(true);
    } else if (promo.applicableservice !== "all" && !selectedservices.find((service: any) => service.id === promo.applicableservice)) {
      toast.error(`Please select the ${promo.applicableservice} service`, {
        theme: "colored",
        position: "top-center"
      });
      setPromoCodeError(true);
    } else {
      const discount = price * promo.discountpercent / 100;
      setDiscountedPrice(discount);
      const discountedprice = price - discount;
      setPrice(Math.round(discountedprice));
      setPromoCodeApplied(true);
      setPromoCodeError(false);
      setAppliedPromoCode(promo.label);
    }
    setShowCodes(false);
  };

  const applyEnteredPromoCode = () => {
    if (enteredPromoCode.length > 0) {
      const foundPromoCode = promoCodeArray.find((promo: any) => promo.label === enteredPromoCode);
      if (foundPromoCode) {
        applypromocode(foundPromoCode);
      } else {
        toast.error('Invalid promo code', {
          theme: "colored",
          position: "top-center"
        });
      }
    } else {
      toast.error('Please enter promo code', {
        theme: "colored",
        position: "top-center"
      });
    }
  };

  const revertPromoCode = () => {
    const revertedPrice = price + discountedprice;
    setPrice(Math.round(revertedPrice));
    setPromoCodeApplied(false);
    setDiscountedPrice(0);
    setPromoCodeError(false);
  };

  const serviceTypeChangeHandler = (checked: any, value: any) => {
    if (checked) {
      if (value === "Express") {
        if (promocodeapplied) {
          const foundOffer: any = promoCodeArray.find((offer: any) => offer.label === appliedPromoCode);
          const discountNew = discountedprice + Math.round(100 * foundOffer.discountpercent / 100);
          setDiscountedPrice(discountNew);
          setPrice(price + 100 - Math.round(100 * foundOffer.discountpercent / 100));
        } else {
          setPrice(price + 100);
        }
        setServiceType(value);
      } else {
        if (promocodeapplied) {
          const foundOffer: any = promoCodeArray.find((offer: any) => offer.label === appliedPromoCode);
          const discountNew = discountedprice - Math.round(100 * foundOffer.discountpercent / 100);
          setDiscountedPrice(discountNew);
          setPrice(price - 100 + Math.round(100 * foundOffer.discountpercent / 100));
        } else {
          if (price >= 100) {
            setPrice(price - 100);
          } else {
            setPrice(100 - price);
          }
        }
        setServiceType(value);
      }
    }
  };

  const addProductInCart = () => {
    if (selectedservices.length) {
      if (status !== "authenticated") {
        updateShowLogin(true);
      } else {
        removeFromCart(modelDetails.id);
        let product: any = {};
        product['modelid'] = modelDetails.id;
        product['brand'] = modelDetails.brand;
        product['model'] = modelDetails.model;
        product['modelimagelink'] = modelDetails.modelimagelink;
        selectedservices.map((service: any) => {
          if (service.id === "others") {
            product[`${service.id}`] = { issues: service.issues, query: service.query, price: service.price };
          } else if (service.id === "display") {
            product[`${service.id}`] = { type: service.displayLabel, price: service.price };
          } else {
            product[`${service.id}`] = service.price;
          }
        });
        product['price'] = price;
        product['total'] = price;
        product['servicetype'] = serviceType;
        product['couponapplied'] = promocodeapplied ? appliedPromoCode : "No";
        product['discountedprice'] = discountedprice;
        product['orderid'] = uuid();
        console.log(product);
        addToCart(product);
        router.push('/cart');
      }
    } else {
      toast.error('Please select a service', {
        theme: "colored",
        position: "top-center"
      });
    }
  };

  useEffect(() => {
    updateLoading(false);
    checkCartInitialSetup();
    setInitialServices(props.data);
    getOffers();
  }, []);

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
          displayPrices={displayprices}
          selectDisplayService={selectDisplayService}
          setShowDisplayPrices={setShowDisplayPrices}
        />
      }
      {showOthers &&
        <Otherservices
          selectOtherIssueHandler={selectOtherIssueHandler}
          selectOtherService={selectOtherService}
          queryChangeHandler={queryChangeHandler}
          showOthersHandler={showOthersHandler}
          selectedOtherIssues={selectedOtherIssues}
        />
      }
      {showCodes &&
        <Promocodes
          offers={promoCodeArray}
          applypromocode={applypromocode}
          setShowCodes={setShowCodes}
        />
      }
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
        <div className="lg:container mx-auto px-3 sm:px-4 md:px-6 py-4 sm:py-6 md:py-10">
          <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-8">
            {/* Product Image Section */}
            <div className="w-full lg:w-1/2 flex justify-center items-start lg:sticky lg:top-6 lg:self-start">
              <div className="bg-white rounded-2xl sm:rounded-3xl shadow-lg sm:shadow-xl p-4 sm:p-6 md:p-8 w-full max-w-md lg:max-w-lg">
                <div className="relative">
                  <img
                    src={props.data.modelimagelink || "/images/no-preview.jpg"}
                    alt={props.data.modelname}
                    className="w-full h-auto object-contain rounded-xl sm:rounded-2xl max-h-64 sm:max-h-80 md:max-h-96"
                    onError={(e) => {
                      e.currentTarget.src = "/images/no-preview.jpg";
                    }}
                  />
                </div>
                <div className="mt-4 sm:mt-6 text-center">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-1 sm:mb-2">
                    {props.data.modelname}
                  </h2>
                  <p className="text-gray-600 font-medium text-sm sm:text-base">{props.data.brand}</p>
                </div>
              </div>
            </div>

            {/* Services Section */}
            <div className="w-full lg:w-1/2 space-y-4 sm:space-y-6">
              <div className="text-center lg:text-left">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-1 sm:mb-2">
                  Select a Service
                </h1>
                <p className="text-gray-600 text-xs sm:text-sm md:text-base">
                  Choose the repair services you need
                </p>
              </div>

              {/* Service Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {services.map((service: any) => {
                  const isSelected = selectedservices.find((s: any) => s.id === service.id);
                  return (
                    <div
                      key={service.id}
                      onClick={(e) => selectService(e, service)}
                      className={`relative cursor-pointer rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-5 transition-all duration-300 transform hover:scale-[1.02] sm:hover:scale-105 hover:shadow-lg sm:hover:shadow-xl ${isSelected
                          ? 'bg-gradient-to-br from-pink-500 to-pink-600 text-white shadow-md sm:shadow-xl ring-2 sm:ring-4 ring-pink-300'
                          : 'bg-white text-gray-700 shadow-md sm:shadow-lg hover:shadow-lg sm:hover:shadow-xl'
                        }`}
                    >
                      {isSelected && (
                        <div className="absolute top-2 right-2 sm:top-3 sm:right-3 bg-white rounded-full p-1">
                          <Check className="w-4 h-4 sm:w-5 sm:h-5 text-pink-600" />
                        </div>
                      )}

                      <div className="flex items-start gap-2 sm:gap-3 mb-2 sm:mb-3">
                        <div className={`p-2 sm:p-3 rounded-lg sm:rounded-xl ${isSelected ? 'bg-white/20' : 'bg-pink-100'}`}>
                          <Wrench className={`w-5 h-5 sm:w-6 sm:h-6 ${isSelected ? 'text-white' : 'text-pink-600'}`} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className={`text-base sm:text-lg font-bold mb-1 truncate ${isSelected ? 'text-white' : 'text-gray-800'}`}>
                            {service.label}
                          </h3>
                          {service.price && (
                            <p className={`text-lg sm:text-xl font-extrabold ${isSelected ? 'text-white' : 'text-pink-600'}`}>
                              ₹{service.price}
                            </p>
                          )}
                        </div>
                      </div>

                      <p className={`text-xs sm:text-sm mb-2 sm:mb-3 leading-relaxed line-clamp-2 sm:line-clamp-3 ${isSelected ? 'text-white/90' : 'text-gray-600'}`}>
                        {service.description}
                      </p>

                      <div className={`flex items-center justify-between text-xs font-semibold ${isSelected ? 'text-white/80' : 'text-gray-500'}`}>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                          <span className="truncate">{service.time}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Shield className="w-3 h-3 sm:w-4 sm:h-4" />
                          <span className="truncate">{service.warranty}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Booking Summary */}
              <div className="bg-white rounded-2xl sm:rounded-3xl shadow-lg sm:shadow-xl p-4 sm:p-6 md:p-8">
                <div className="flex items-center gap-2 mb-4 sm:mb-6">
                  <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-pink-600" />
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Booking Summary</h2>
                </div>

                {/* Service Type Selection */}
                <div className="mb-4 sm:mb-6">
                  <h3 className="text-sm sm:text-base font-semibold text-gray-700 mb-2 sm:mb-3">
                    Select Service Type:
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                    {serviceTypeArray.map((servicetype: any) => (
                      <label
                        key={servicetype.id}
                        className={`flex items-center justify-center p-3 sm:p-4 border-2 rounded-lg sm:rounded-xl cursor-pointer transition-all font-semibold text-sm sm:text-base ${serviceType === servicetype.value
                            ? 'bg-gradient-to-r from-pink-500 to-pink-600 text-white border-pink-600 shadow-md sm:shadow-lg'
                            : 'bg-white text-gray-700 border-gray-200 hover:border-pink-300'
                          }`}
                      >
                        <input
                          type="radio"
                          checked={serviceType === servicetype.value ? true : false}
                          onChange={(e) => serviceTypeChangeHandler(e.target.checked, servicetype.value)}
                          className="mr-2 sm:mr-3 w-4 h-4 sm:w-5 sm:h-5 accent-pink-600"
                        />
                        {servicetype.label}
                      </label>
                    ))}
                  </div>
                </div>

                {/* Selected Services List */}
                {selectedservices.length > 0 && (
                  <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-pink-50 rounded-lg sm:rounded-xl">
                    <ul className="space-y-1 sm:space-y-2">
                      {selectedservices.map((service: any) => (
                        <li key={service.id} className="flex justify-between text-gray-700 font-medium text-sm sm:text-base">
                          <span className="truncate pr-2">{service.label}</span>
                          <span className="font-bold text-pink-600 whitespace-nowrap">₹{service.price}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="flex justify-between items-center mb-4 sm:mb-6 p-3 sm:p-4 bg-gradient-to-r from-pink-100 to-purple-100 rounded-lg sm:rounded-xl">
                  <span className="text-base sm:text-lg font-bold text-gray-800">Total Amount</span>
                  <span className="text-xl sm:text-2xl font-extrabold text-pink-600">₹{price}</span>
                </div>

                {/* Promo Code Input */}
                <div className="mb-4 sm:mb-6">
                  <div className="flex flex-col sm:flex-row gap-2">
                    <input
                      type="text"
                      placeholder="Enter Promo Code"
                      value={enteredPromoCode}
                      onChange={(e) => setEnteredPromoCode(e.target.value)}
                      className="flex-1 px-3 sm:px-4 py-2 sm:py-3 border-2 border-gray-200 rounded-lg sm:rounded-xl focus:outline-none focus:border-pink-400 font-medium text-sm sm:text-base"
                    />
                    <button
                      className="px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-pink-500 to-pink-600 text-white font-bold rounded-lg sm:rounded-xl hover:from-pink-600 hover:to-pink-700 transition-all shadow-md sm:shadow-lg hover:shadow-lg sm:hover:shadow-xl text-sm sm:text-base"
                      onClick={applyEnteredPromoCode}
                    >
                      Apply
                    </button>
                  </div>

                  {promocodeapplied && (
                    <div className="mt-2 sm:mt-3 p-2 sm:p-3 bg-green-50 border border-green-200 rounded-lg sm:rounded-xl flex items-center justify-between">
                      <div className="text-green-700 font-semibold text-xs sm:text-sm">
                        Saved ₹{discountedprice} with <span className="font-bold truncate">{appliedPromoCode}</span>
                      </div>
                      <button
                        className="px-3 sm:px-4 py-1 sm:py-2 bg-red-500 text-white text-xs sm:text-sm font-bold rounded-lg hover:bg-red-600 transition-all whitespace-nowrap ml-2"
                        onClick={revertPromoCode}
                      >
                        Remove
                      </button>
                    </div>
                  )}
                </div>

                <button
                  className="w-full mb-4 sm:mb-6 py-2 sm:py-3 bg-gradient-to-r from-pink-500 to-pink-600 text-white font-bold rounded-lg sm:rounded-xl hover:from-pink-600 hover:to-pink-700 transition-all shadow-md sm:shadow-lg hover:shadow-lg sm:hover:shadow-xl text-sm sm:text-base"
                  onClick={() => setShowCodes(true)}
                >
                  View Promo Codes
                </button>

                {/* Faulty Parts Checkbox */}
                <label className="flex items-center mb-4 sm:mb-6 p-3 sm:p-4 bg-gray-50 rounded-lg sm:rounded-xl cursor-pointer hover:bg-gray-100 transition-all">
                  <input
                    type="checkbox"
                    checked={faultyCheck}
                    onChange={() => setFaultyCheck(!faultyCheck)}
                    className="mr-2 sm:mr-3 w-4 h-4 sm:w-5 sm:h-5 accent-pink-600"
                  />
                  <span className="font-semibold text-gray-700 text-sm sm:text-base">
                    Customer needs to submit faulty parts
                  </span>
                </label>

                {/* Add to Cart Button */}
                <button
                  className="w-full py-3 sm:py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold text-base sm:text-lg rounded-lg sm:rounded-xl hover:from-green-600 hover:to-green-700 transition-all shadow-md sm:shadow-lg hover:shadow-lg sm:hover:shadow-xl"
                  onClick={addProductInCart}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(context: any) {
  const { modelid } = context.params;
  try {
    const data = {
      "modelid": modelid
    };
    const getModel = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/models/getmodel`, data)
      .then((response) => {
        return response.data.model;
      })
      .catch((error) => {
        return { notFound: true };
      });
    return { props: { data: getModel } };
  } catch (error) {
    return { notFound: true };
  }
}