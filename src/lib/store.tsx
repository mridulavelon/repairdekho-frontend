import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface displayService{
  type:string;
  price:Number;
}

interface issues{
    id: Number;
    label: String;
}

interface othersService{
  issues:issues[];
  query: String;
  price: Number;
}

interface Product {
  id: String;
  _id: String;
  modelid: String;
  brand: String;
  model:string;
  modelimagelink: String;
  touch?: Number;
  display?: displayService;
  battery?: Number;
  charging?: Number;
  backpanel?: Number;
  tempered?:Number;
  speaker?: Number;
  receiver?: Number;
  glass?: Number;
  others?: othersService;
  price: Number;
  total: Number;
  servicetype: String;
  couponapplied?: String;
  discountedprice?: Number;
  orderid: String;
}

interface StoreState {
  loading: boolean;
  showLogin: boolean;
  showRegister: boolean;
  showForgotPassword: boolean;
  cart: Product[];
  updateLoading: (loadingState: boolean) => void;
  updateShowLogin: (showState: boolean) => void;
  updateShowRegister: (showState: boolean) => void;
  updateShowForgotPassword: (showState: boolean) => void;
  addToCart: (product: Product) => void;
  removeFromCart: (orderId: string) => void;
  resetCart: () => void;
}

const useStore = create<StoreState>()(devtools((set) => ({
  loading: false,
  showLogin: false,
  showRegister: false,
  showForgotPassword: false,
  cart: [],
  updateLoading: (loadingState) => set({ loading: loadingState }),
  updateShowLogin: (showState) => set({ showLogin: showState }),
  updateShowRegister: (showState) => set({ showRegister: showState }),
  updateShowForgotPassword: (showState) => set({ showForgotPassword: showState }),
  addToCart: (product: Product) => set((state) => ({ cart: [...state.cart, product] })),
  removeFromCart: (modelid: string) => set((state) => ({
    cart: state.cart.filter((product) => product.modelid !== modelid)
  })),
  resetCart: () => set({ cart: [] })
})));

export default useStore;