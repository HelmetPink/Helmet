import HELMETLOGO from "../assets/img/insurancetype/HELMET.png";
import ETHLOGO from "../assets/img/insurancetype/ETH.png";
import BTCBLOGO from "../assets/img/insurancetype/BTCB.png";
import CAKELOGO from "../assets/img/insurancetype/CAKE.png";
import CTKLOGO from "../assets/img/insurancetype/CTK.png";
import BURGERLOGO from "../assets/img/insurancetype/BURGER.png";
import WBNBLOGO from "../assets/img/insurancetype/WBNB.png";
import MATHLOGO from "../assets/img/insurancetype/MATH.png";
import SHIBLOGO from "../assets/img/insurancetype/SHIB.png";
import FORLOGO from "../assets/img/insurancetype/FOR.png";
import BABYLOGO from "../assets/img/insurancetype/BABY.png";
import MCRNLOGO from "../assets/img/insurancetype/MCRN.png";
import FARALOGO from "../assets/img/insurancetype/FARA.png";
import ALPACALOGO from "../assets/img/insurancetype/ALPACA.png";
import BANANALOGO from "../assets/img/insurancetype/BANANA.png";
const NowTime = new Date() / 1000;
export const InsuranceTypeList = [
  {
    InsuranceName: "HELMET",
    InsuranceLogo: HELMETLOGO,
    SettleTokenSymbol: "HELMET",
    SettleTokenAddress: "0x948d2a81086A075b3130BAc19e4c6DEe1D2E3fE8",
    SettleTokenDecimals: 18,
    ShowExpiry: "2021-09-24 24:00",
    ShowExpiryDay: Math.ceil((1632499200 - NowTime) / 86400),
    Expiry: 1632499200,
    LastPrice: "--",
    LastUsdtPrice: "--",
    LastPriceDecimals: 4,
    LastUsdtPriceDecimals: 4,
    Call: {
      StrikePrice: "0.0018",
      StrikePriceDecimals: 18,
      PolicyPriceDecimals: 18,
      CollateralSymbol: "HELMET",
      CollateralAddress: "0x948d2a81086A075b3130BAc19e4c6DEe1D2E3fE8",
      CollateralDecimals: 18,
      UnderlyingSymbol: "BNB",
      UnderlyingAddress: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
      UnderlyingDecimals: 18,
    },
    Put: {
      StrikePrice: "0.0004",
      StrikePriceDecimals: 18,
      PolicyPriceDecimals: 18,
      CollateralSymbol: "BNB",
      CollateralAddress: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
      CollateralDecimals: 18,
      UnderlyingSymbol: "HELMET",
      UnderlyingAddress: "0x948d2a81086A075b3130BAc19e4c6DEe1D2E3fE8",
      UnderlyingDecimals: 18,
    },
  },
  {
    InsuranceName: "ETH",
    InsuranceLogo: ETHLOGO,
    SettleTokenSymbol: "HELMET",
    SettleTokenAddress: "0x948d2a81086A075b3130BAc19e4c6DEe1D2E3fE8",
    SettleTokenDecimals: 18,
    ShowExpiry: "2021-09-24 24:00",
    ShowExpiryDay: Math.ceil((1632499200 - NowTime) / 86400),
    Expiry: 1632499200,
    LastPrice: "--",
    LastUsdtPrice: "--",
    LastPriceDecimals: 4,
    LastUsdtPriceDecimals: 4,
    Call: {
      StrikePrice: "15.0154",
      StrikePriceDecimals: 18,
      PolicyPriceDecimals: 18,
      CollateralSymbol: "ETH",
      CollateralAddress: "0x2170ed0880ac9a755fd29b2688956bd959f933f8",
      CollateralDecimals: 18,
      UnderlyingSymbol: "BNB",
      UnderlyingAddress: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
      UnderlyingDecimals: 18,
    },
    Put: {
      StrikePrice: "3.7538",
      StrikePriceDecimals: 18,
      PolicyPriceDecimals: 18,
      CollateralSymbol: "BNB",
      CollateralAddress: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
      CollateralDecimals: 18,
      UnderlyingSymbol: "ETH",
      UnderlyingAddress: "0x2170ed0880ac9a755fd29b2688956bd959f933f8",
      UnderlyingDecimals: 18,
    },
  },
  {
    InsuranceName: "BTCB",
    InsuranceLogo: BTCBLOGO,
    SettleTokenSymbol: "HELMET",
    SettleTokenAddress: "0x948d2a81086A075b3130BAc19e4c6DEe1D2E3fE8",
    SettleTokenDecimals: 18,
    ShowExpiry: "2021-09-24 24:00",
    ShowExpiryDay: Math.ceil((1632499200 - NowTime) / 86400),
    Expiry: 1632499200,
    LastPrice: "--",
    LastUsdtPrice: "--",
    LastPriceDecimals: 4,
    LastUsdtPriceDecimals: 4,
    Call: {
      StrikePrice: "219.436",
      StrikePriceDecimals: 18,
      PolicyPriceDecimals: 18,
      CollateralSymbol: "BTCB",
      CollateralAddress: "0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c",
      CollateralDecimals: 18,
      UnderlyingSymbol: "BNB",
      UnderlyingAddress: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
      UnderlyingDecimals: 18,
    },
    Put: {
      StrikePrice: "54.859",
      StrikePriceDecimals: 18,
      PolicyPriceDecimals: 18,
      CollateralSymbol: "BNB",
      CollateralAddress: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
      CollateralDecimals: 18,
      UnderlyingSymbol: "BTCB",
      UnderlyingAddress: "0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c",
      UnderlyingDecimals: 18,
    },
  },
  {
    InsuranceName: "APPLY",
  },
  {
    InsuranceName: "CAKE",
    InsuranceLogo: CAKELOGO,
    SettleTokenSymbol: "HELMET",
    SettleTokenAddress: "0x948d2a81086A075b3130BAc19e4c6DEe1D2E3fE8",
    SettleTokenDecimals: 18,
    ShowExpiry: "2021-09-24 24:00",
    ShowExpiryDay: Math.ceil((1632499200 - NowTime) / 86400),
    Expiry: 1632499200,
    LastPrice: "--",
    LastUsdtPrice: "--",
    LastPriceDecimals: 4,
    LastUsdtPriceDecimals: 4,
    Call: {
      StrikePrice: "0.1034",
      StrikePriceDecimals: 18,
      PolicyPriceDecimals: 18,
      CollateralSymbol: "CAKE",
      CollateralAddress: "0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82",
      CollateralDecimals: 18,
      UnderlyingSymbol: "BNB",
      UnderlyingAddress: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
      UnderlyingDecimals: 18,
    },
    Put: {
      StrikePrice: "0.0258",
      StrikePriceDecimals: 18,
      PolicyPriceDecimals: 18,
      CollateralSymbol: "BNB",
      CollateralAddress: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
      CollateralDecimals: 18,
      UnderlyingSymbol: "CAKE",
      UnderlyingAddress: "0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82",
      UnderlyingDecimals: 18,
    },
  },
  {
    InsuranceName: "CTK",
    InsuranceLogo: CTKLOGO,
    SettleTokenSymbol: "HELMET",
    SettleTokenAddress: "0x948d2a81086A075b3130BAc19e4c6DEe1D2E3fE8",
    SettleTokenDecimals: 18,
    ShowExpiry: "2021-09-24 24:00",
    ShowExpiryDay: Math.ceil((1632499200 - NowTime) / 86400),
    Expiry: 1632499200,
    LastPrice: "--",
    LastUsdtPrice: "--",
    LastPriceDecimals: 4,
    LastUsdtPriceDecimals: 4,
    Call: {
      StrikePrice: "0.0094",
      StrikePriceDecimals: 30,
      PolicyPriceDecimals: 30,
      CollateralSymbol: "CTK",
      CollateralAddress: "0xa8c2b8eec3d368c0253ad3dae65a5f2bbb89c929",
      CollateralDecimals: 6,
      UnderlyingSymbol: "BNB",
      UnderlyingAddress: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
      UnderlyingDecimals: 18,
    },
    Put: {
      StrikePrice: "0.0023",
      StrikePriceDecimals: 6,
      PolicyPriceDecimals: 18,
      CollateralSymbol: "BNB",
      CollateralAddress: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
      CollateralDecimals: 18,
      UnderlyingSymbol: "CTK",
      UnderlyingAddress: "0xa8c2b8eec3d368c0253ad3dae65a5f2bbb89c929",
      UnderlyingDecimals: 6,
    },
  },
  {
    InsuranceName: "BURGER",
    InsuranceLogo: BURGERLOGO,
    SettleTokenSymbol: "HELMET",
    SettleTokenAddress: "0x948d2a81086A075b3130BAc19e4c6DEe1D2E3fE8",
    SettleTokenDecimals: 18,
    ShowExpiry: "2021-09-24 24:00",
    ShowExpiryDay: Math.ceil((1632499200 - NowTime) / 86400),
    Expiry: 1632499200,
    LastPrice: "--",
    LastUsdtPrice: "--",
    LastPriceDecimals: 4,
    LastUsdtPriceDecimals: 4,
    Call: {
      StrikePrice: "0.0254",
      StrikePriceDecimals: 18,
      PolicyPriceDecimals: 18,
      CollateralSymbol: "BURGER",
      CollateralAddress: "0xAe9269f27437f0fcBC232d39Ec814844a51d6b8f",
      CollateralDecimals: 18,
      UnderlyingSymbol: "BNB",
      UnderlyingAddress: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
      UnderlyingDecimals: 18,
    },
    Put: {
      StrikePrice: "0.0063",
      StrikePriceDecimals: 18,
      PolicyPriceDecimals: 18,
      CollateralSymbol: "BNB",
      CollateralAddress: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
      CollateralDecimals: 18,
      UnderlyingSymbol: "BURGER",
      UnderlyingAddress: "0xAe9269f27437f0fcBC232d39Ec814844a51d6b8f",
      UnderlyingDecimals: 18,
    },
  },
  {
    InsuranceName: "WBNB",
    InsuranceLogo: WBNBLOGO,
    SettleTokenSymbol: "HELMET",
    SettleTokenAddress: "0x948d2a81086A075b3130BAc19e4c6DEe1D2E3fE8",
    SettleTokenDecimals: 18,
    ShowExpiry: "2021-09-24 24:00",
    ShowExpiryDay: Math.ceil((1632499200 - NowTime) / 86400),
    Expiry: 1632499200,
    LastPrice: "--",
    LastUsdtPrice: "--",
    LastPriceDecimals: 4,
    LastUsdtPriceDecimals: 4,
    Call: {
      StrikePrice: "856",

      StrikePriceDecimals: 18,
      PolicyPriceDecimals: 18,
      CollateralSymbol: "BNB",
      CollateralAddress: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
      CollateralDecimals: 18,
      UnderlyingSymbol: "BUSD",
      UnderlyingAddress: "0xe9e7cea3dedca5984780bafc599bd69add087d56",
      UnderlyingDecimals: 18,
    },
    Put: {
      StrikePrice: "214",

      StrikePriceDecimals: 18,
      PolicyPriceDecimals: 18,
      CollateralSymbol: "BUSD",
      CollateralAddress: "0xe9e7cea3dedca5984780bafc599bd69add087d56",
      CollateralDecimals: 18,
      UnderlyingSymbol: "BNB",
      UnderlyingAddress: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
      UnderlyingDecimals: 18,
    },
  },
  {
    InsuranceName: "MATH",
    InsuranceLogo: MATHLOGO,
    SettleTokenSymbol: "HELMET",
    SettleTokenAddress: "0x948d2a81086A075b3130BAc19e4c6DEe1D2E3fE8",
    SettleTokenDecimals: 18,
    ShowExpiry: "2021-09-24 24:00",
    ShowExpiryDay: Math.ceil((1632499200 - NowTime) / 86400),
    Expiry: 1632499200,
    LastPrice: "--",
    LastUsdtPrice: "--",
    LastPriceDecimals: 4,
    LastUsdtPriceDecimals: 4,
    Call: {
      StrikePrice: "0.0058",
      StrikePriceDecimals: 18,
      PolicyPriceDecimals: 18,
      CollateralSymbol: "MATH",
      CollateralAddress: "0xF218184Af829Cf2b0019F8E6F0b2423498a36983",
      CollateralDecimals: 18,
      UnderlyingSymbol: "BNB",
      UnderlyingAddress: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
      UnderlyingDecimals: 18,
    },
    Put: {
      StrikePrice: "0.0014",
      StrikePriceDecimals: 18,
      PolicyPriceDecimals: 18,
      CollateralSymbol: "BNB",
      CollateralAddress: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
      CollateralDecimals: 18,
      UnderlyingSymbol: "MATH",
      UnderlyingAddress: "0xF218184Af829Cf2b0019F8E6F0b2423498a36983",
      UnderlyingDecimals: 18,
    },
  },
  {
    InsuranceName: "SHIB",
    InsuranceLogo: SHIBLOGO,
    SettleTokenSymbol: "HELMET",
    SettleTokenAddress: "0x948d2a81086A075b3130BAc19e4c6DEe1D2E3fE8",
    SettleTokenDecimals: 18,
    ShowExpiry: "2021-09-24 24:00",
    ShowExpiryDay: Math.ceil((1632499200 - NowTime) / 86400),
    Expiry: 1632499200,
    LastPrice: "--",
    LastUsdtPrice: "--",
    LastPriceDecimals: 10,
    LastUsdtPriceDecimals: 10,
    Call: {
      StrikePrice: "0.0000002004",
      StrikePriceDecimals: 18,
      PolicyPriceDecimals: 18,
      CollateralSymbol: "SHIB",
      CollateralAddress: "0xaf90e457f4359adcc8b37e8df8a27a1ff4c3f561",
      CollateralDecimals: 18,
      UnderlyingSymbol: "BNB",
      UnderlyingAddress: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
      UnderlyingDecimals: 18,
    },
    Put: {
      StrikePrice: "0.0000000501",
      StrikePriceDecimals: 18,
      PolicyPriceDecimals: 18,
      CollateralSymbol: "BNB",
      CollateralAddress: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
      CollateralDecimals: 18,
      UnderlyingSymbol: "SHIB",
      UnderlyingAddress: "0xaf90e457f4359adcc8b37e8df8a27a1ff4c3f561",
      UnderlyingDecimals: 18,
    },
  },
  {
    InsuranceName: "FOR",
    InsuranceLogo: FORLOGO,
    SettleTokenSymbol: "HELMET",
    SettleTokenAddress: "0x948d2a81086A075b3130BAc19e4c6DEe1D2E3fE8",
    SettleTokenDecimals: 18,
    ShowExpiry: "2021-09-24 24:00",
    ShowExpiryDay: Math.ceil((1632499200 - NowTime) / 86400),
    Expiry: 1632499200,
    LastPrice: "--",
    LastUsdtPrice: "--",
    LastPriceDecimals: 4,
    LastUsdtPriceDecimals: 4,
    Call: {
      StrikePrice: "0.0004",
      StrikePriceDecimals: 18,
      PolicyPriceDecimals: 18,
      CollateralSymbol: "FOR",
      CollateralAddress: "0x658a109c5900bc6d2357c87549b651670e5b0539",
      CollateralDecimals: 18,
      UnderlyingSymbol: "BNB",
      UnderlyingAddress: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
      UnderlyingDecimals: 18,
    },
    Put: {
      StrikePrice: "0.0001",
      StrikePriceDecimals: 18,
      PolicyPriceDecimals: 18,
      CollateralSymbol: "BNB",
      CollateralAddress: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
      CollateralDecimals: 18,
      UnderlyingSymbol: "FOR",
      UnderlyingAddress: "0x658a109c5900bc6d2357c87549b651670e5b0539",
      UnderlyingDecimals: 18,
    },
  },
  {
    InsuranceName: "BABY",
    InsuranceLogo: BABYLOGO,
    SettleTokenSymbol: "HELMET",
    SettleTokenAddress: "0x948d2a81086A075b3130BAc19e4c6DEe1D2E3fE8",
    SettleTokenDecimals: 18,
    ShowExpiry: "2021-09-24 24:00",
    ShowExpiryDay: Math.ceil((1632499200 - NowTime) / 86400),
    Expiry: 1632499200,
    LastPrice: "--",
    LastUsdtPrice: "--",
    LastPriceDecimals: 4,
    LastUsdtPriceDecimals: 4,
    Call: {
      StrikePrice: "0.0016",
      StrikePriceDecimals: 18,
      PolicyPriceDecimals: 18,
      CollateralSymbol: "BABY",
      CollateralAddress: "0x53E562b9B7E5E94b81f10e96Ee70Ad06df3D2657",
      CollateralDecimals: 18,
      UnderlyingSymbol: "BNB",
      UnderlyingAddress: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
      UnderlyingDecimals: 18,
    },
    Put: {
      StrikePrice: "0.0004",
      StrikePriceDecimals: 18,
      PolicyPriceDecimals: 18,
      CollateralSymbol: "BNB",
      CollateralAddress: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
      CollateralDecimals: 18,
      UnderlyingSymbol: "BABY",
      UnderlyingAddress: "0x53E562b9B7E5E94b81f10e96Ee70Ad06df3D2657",
      UnderlyingDecimals: 18,
    },
  },
  {
    InsuranceName: "MCRN",
    InsuranceLogo: MCRNLOGO,
    SettleTokenSymbol: "HELMET",
    SettleTokenAddress: "0x948d2a81086A075b3130BAc19e4c6DEe1D2E3fE8",
    SettleTokenDecimals: 18,
    ShowExpiry: "2021-09-24 24:00",
    ShowExpiryDay: Math.ceil((1632499200 - NowTime) / 86400),
    Expiry: 1632499200,
    LastPrice: "--",
    LastUsdtPrice: "--",
    LastPriceDecimals: 4,
    LastUsdtPriceDecimals: 4,
    Call: {
      StrikePrice: "0.03",

      StrikePriceDecimals: 18,
      PolicyPriceDecimals: 18,
      CollateralSymbol: "MCRN",
      CollateralAddress: "0xacb2d47827c9813ae26de80965845d80935afd0b",
      CollateralDecimals: 18,
      UnderlyingSymbol: "BNB",
      UnderlyingAddress: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
      UnderlyingDecimals: 18,
    },
    Put: {
      StrikePrice: "0.0075",
      StrikePriceDecimals: 18,
      PolicyPriceDecimals: 18,
      CollateralSymbol: "BNB",
      CollateralAddress: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
      CollateralDecimals: 18,
      UnderlyingSymbol: "MCRN",
      UnderlyingAddress: "0xacb2d47827c9813ae26de80965845d80935afd0b",
      UnderlyingDecimals: 18,
    },
  },
  {
    InsuranceName: "FARA",
    InsuranceLogo: FARALOGO,
    SettleTokenSymbol: "HELMET",
    SettleTokenAddress: "0x948d2a81086A075b3130BAc19e4c6DEe1D2E3fE8",
    SettleTokenDecimals: 18,
    ShowExpiry: "2021-09-24 24:00",
    ShowExpiryDay: Math.ceil((1632499200 - NowTime) / 86400),
    Expiry: 1632499200,
    LastPrice: "--",
    LastUsdtPrice: "--",
    LastPriceDecimals: 4,
    LastUsdtPriceDecimals: 4,
    Call: {
      StrikePrice: "0.016",
      StrikePriceDecimals: 18,
      PolicyPriceDecimals: 18,
      CollateralSymbol: "MCRN",
      CollateralAddress: "0xf4ed363144981d3a65f42e7d0dc54ff9eef559a1",
      CollateralDecimals: 18,
      UnderlyingSymbol: "BNB",
      UnderlyingAddress: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
      UnderlyingDecimals: 18,
    },
    Put: {
      StrikePrice: "0.004",

      StrikePriceDecimals: 18,
      PolicyPriceDecimals: 18,
      CollateralSymbol: "BNB",
      CollateralAddress: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
      CollateralDecimals: 18,
      UnderlyingSymbol: "MCRN",
      UnderlyingAddress: "0xf4ed363144981d3a65f42e7d0dc54ff9eef559a1",
      UnderlyingDecimals: 18,
    },
  },
  {
    InsuranceName: "ALPACA",
    InsuranceLogo: ALPACALOGO,
    SettleTokenSymbol: "HELMET",
    SettleTokenAddress: "0x948d2a81086A075b3130BAc19e4c6DEe1D2E3fE8",
    SettleTokenDecimals: 18,
    ShowExpiry: "2021-09-24 24:00",
    ShowExpiryDay: Math.ceil((1632499200 - NowTime) / 86400),
    Expiry: 1632499200,
    LastPrice: "--",
    LastUsdtPrice: "--",
    LastPriceDecimals: 4,
    LastUsdtPriceDecimals: 4,
    Call: {
      StrikePrice: "0.0054",
      StrikePriceDecimals: 18,
      PolicyPriceDecimals: 18,
      CollateralSymbol: "ALPACA",
      CollateralAddress: "0x8f0528ce5ef7b51152a59745befdd91d97091d2f",
      CollateralDecimals: 18,
      UnderlyingSymbol: "BNB",
      UnderlyingAddress: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
      UnderlyingDecimals: 18,
    },
    Put: {
      StrikePrice: "0.0013",
      StrikePriceDecimals: 18,
      PolicyPriceDecimals: 18,
      CollateralSymbol: "BNB",
      CollateralAddress: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
      CollateralDecimals: 18,
      UnderlyingSymbol: "ALPACA",
      UnderlyingAddress: "0x8f0528ce5ef7b51152a59745befdd91d97091d2f",
      UnderlyingDecimals: 18,
    },
  },
  {
    InsuranceName: "BANANA",
    InsuranceLogo: BANANALOGO,
    SettleTokenSymbol: "HELMET",
    SettleTokenAddress: "0x948d2a81086A075b3130BAc19e4c6DEe1D2E3fE8",
    SettleTokenDecimals: 18,
    ShowExpiry: "2021-09-24 24:00",
    ShowExpiryDay: Math.ceil((1632499200 - NowTime) / 86400),
    Expiry: 1632499200,
    LastPrice: "--",
    LastUsdtPrice: "--",
    LastPriceDecimals: 4,
    LastUsdtPriceDecimals: 4,
    Call: {
      StrikePrice: "0.0196",
      StrikePriceDecimals: 18,
      PolicyPriceDecimals: 18,
      CollateralSymbol: "BANANA",
      CollateralAddress: "0x603c7f932ed1fc6575303d8fb018fdcbb0f39a95",
      CollateralDecimals: 18,
      UnderlyingSymbol: "BNB",
      UnderlyingAddress: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
      UnderlyingDecimals: 18,
    },
    Put: {
      StrikePrice: "0.0049",
      StrikePriceDecimals: 18,
      PolicyPriceDecimals: 18,
      CollateralSymbol: "BNB",
      CollateralAddress: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
      CollateralDecimals: 18,
      UnderlyingSymbol: "BANANA",
      UnderlyingAddress: "0x603c7f932ed1fc6575303d8fb018fdcbb0f39a95",
      UnderlyingDecimals: 18,
    },
  },
];
