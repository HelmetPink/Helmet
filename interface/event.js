import Axios from "axios";
import FactoryABI from "~/web3/abis/FactoryABI.json";
import OrderABI from "~/web3/abis/OrderABI.json";
import moment from "moment";
import BigNumber from "bignumber.js";
import qs from "qs";

export const getInsuranceStatus = () => {
  return Axios({
    method: "post",
    url: "https://api.thegraph.com/index-node/graphql",
    data: {
      query: `{
        indexingStatusForCurrentVersion(subgraphName: "app-helmet-insure/helmet-insure") {
            synced
            health
            fatalError {
                message
                block {
                    number
                    hash
                }
                handler
            }
            chains {
                chainHeadBlock {
                    number
                }
                latestBlock {
                    number
                }
            }
        }
    }`,
    },
  }).then((res) => {
    let Status = res.data.data.indexingStatusForCurrentVersion.health;
    console.log(res);
    return Status;
  });
};

const getGraphList1 = async function() {
  return Axios({
    method: "post",
    url:
      "https://api.thegraph.com/subgraphs/name/app-helmet-insure/helmet-insure",
    data: {
      query: `{
                options(first:1000) {
                  id
                  creator
                  collateral 
                  underlying
                  strikePrice
                  expiry
                  long
                  short
                  asks(first:1000) {
                    askID
                    seller
                    volume
                    settleToken
                    price
                    isCancel
                    binds {
                      bidID
                      askID
                      buyer
                      volume
                      amount
                    }
                  }
                }
              }
              `,
    },
  });
};
const getGraphList2 = async function() {
  return Axios({
    method: "post",
    url: "https://graph.helmet.insure/bsc/subgraphs/name/helmet/insure",
    data: {
      query: `{
                options(first:1000) {
                  id
                  creator
                  collateral 
                  underlying
                  strikePrice
                  expiry
                  long
                  short
                  asks(first:1000) {
                    askID
                    seller
                    volume
                    settleToken
                    price
                    isCancel
                    binds {
                      bidID
                      askID
                      buyer
                      volume
                      amount
                    }
                  }
                }
              }
              `,
    },
  });
};
//get Insurance
export const getInsuranceList = async function() {
  let Status = await getInsuranceStatus();
  console.log("The Graph is " + Status);
  if (Status === "healthy") {
    return getGraphList1();
  } else {
    return getGraphList2();
  }
};
export const getLongType = async function() {
  let rightTime = parseInt(moment.now());
  let leftTime = parseInt(moment.now()) - 518400000;
  console.log(rightTime, leftTime);
  return Axios({
    method: "post",
    url:
      "https://api.thegraph.com/subgraphs/name/app-helmet-insure/helmet-insure",
    data: {
      query: `{
                options(first: 1000) {
                  id
                  creator
                  collateral 
                  underlying
                  strikePrice
                  expiry
                  long
                  short
                  asks(first:1000) {
                    askID
                    seller
                    volume
                    settleToken
                    price
                    isCancel
                    binds {
                      bidID
                      askID
                      buyer
                      volume
                      amount
                    }
                  }
                }
              }
              `,
    },
  }).then((res) => {
    return res.data.data.options.length;
  });
};
export const getSignDataSyn = (data, callback) => {
  let SignNumberFlag = true;
  let SignResultData = [];
  for (let index = 1; index < 6; index++) {
    let params = qs.stringify(data, { encodeValuesOnly: true });
    let Url = `https://node${index}.chainswap.exchange/web/getSignDataSyn`;
    Axios.get(Url + "?" + params).then((res) => {
      try {
        if (SignResultData.length === 3 && SignNumberFlag) {
          SignNumberFlag = false;
          console.log(SignResultData);
          callback(SignResultData);
        } else {
          if (SignResultData.length < 3) {
            let { signatory, signV, signR, signS } = res.data.data;
            SignResultData.push([signatory, signV, signR, signS]);
          }
        }
      } catch (error) {
        console.log(error);
      }
    });
  }
};
export const getLongTokenValue = (data) => {
  return Axios.get("https://api.llama.fi/protocols").then((res) => {
    let data = res.data;
    let filterData = data.filter((item) => item.id === "437")[0];
    let TVLS = filterData.chainTvls.Binance;
    return TVLS;
  });
};
export const getTokenPrice = (data) => {
  let HelmetAddress = "0x948d2a81086A075b3130BAc19e4c6DEe1D2E3fE8".toUpperCase();
  if (data.fromTokenAddress.toUpperCase() === HelmetAddress) {
    data.protocols = "PANCAKESWAP_V2";
  }
  return Axios({
    method: "get",
    url: "https://api.1inch.exchange/v3.0/56/quote",
    params: { ...data },
  }).then((res) => {
    return res;
  });
};
