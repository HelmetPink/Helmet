import { IIO, expERC20 } from './index.js';
import {
    getAddress,
    getContract,
    getWei,
    getID,
} from '~/assets/utils/address-pool.js';
import bus from '~/assets/js/bus';
import Message from '~/components/common/Message';
export const ticketVol3 = async (ContractAdress, TicketAddress) => {
    const charID = window.chainID;
    if (ContractAdress.indexOf('0x') === -1) {
        ContractAdress = getContract(ContractAdress, charID);
    }
    if (TicketAddress.indexOf('0x') === -1) {
        TicketAddress = getContract(TicketAddress, charID);
    }
    const IIOContract = await IIO(ContractAdress);
    return IIOContract.methods
        .ticketVol3(TicketAddress)
        .call()
        .then((res) => {
            let unit = TicketAddress;
            return window.WEB3.utils.fromWei(res, getWei(unit));
        });
};
export const earned3 = async (ContractAdress) => {
    const charID = window.chainID;
    const account = window.CURRENTADDRESS;
    if (ContractAdress.indexOf('0x') === -1) {
        ContractAdress = getContract(ContractAdress, charID);
    }
    const IIOContract = await IIO(ContractAdress);
    return IIOContract.methods
        .earned3(account)
        .call()
        .then((res) => {
            let unit = ContractAdress;
            return window.WEB3.utils.fromWei(res, getWei(unit));
        });
};
export const getReward3 = async (ContractAdress) => {
    const charID = window.chainID;
    const account = window.CURRENTADDRESS;
    if (ContractAdress.indexOf('0x') === -1) {
        ContractAdress = getContract(ContractAdress, charID);
    }
    const IIOContract = await IIO(ContractAdress);
    try {
        IIOContract.methods
            .getReward3()
            .send({ from: account })
            .on('transactionHash', function(hash) {
                bus.$emit('CLOSE_STATUS_DIALOG');
                bus.$emit('OPEN_STATUS_DIALOG', {
                    type: 'submit',
                    conText: `<a href="https://bscscan.com/tx/${hash}" target="_blank">View on BscScan</a>`,
                });
            })
            .on('confirmation', function(confirmationNumber, receipt) {
                if (confirmationNumber === 0) {
                    bus.$emit(`CLAIM_LOADING_${type}`);
                    bus.$emit(`RELOAD_DATA_${type}`);
                    bus.$emit('REFRESH_BALANCE');
                    if (window.statusDialog) {
                        bus.$emit('CLOSE_STATUS_DIALOG');
                        bus.$emit('OPEN_STATUS_DIALOG', {
                            type: 'success',
                            title: 'Successfully claim',
                            conTit: '<div>Claim activated successfully</div>',
                            conText: `<a href="https://bscscan.com/tx/${receipt.transactionHash}" target="_blank">View on BscScan</a>`,
                        });
                    } else {
                        Message({
                            message: 'Claim activated successfully',
                            type: 'success',
                        });
                    }
                    setTimeout(() => {
                        bus.$emit('REFRESH_ASSETS');
                        bus.$emit('REFRESH_MINING');
                    }, 1000);
                }
            })
            .on('error', function(error, receipt) {
                bus.$emit(`CLAIM_LOADING_${type}`);
                bus.$emit('CLOSE_STATUS_DIALOG');
                bus.$emit('REFRESH_BALANCE');
                // if (error && error.message) {
                //     Message({
                //         message: error && error.message,
                //         type: 'error',
                //     });
                // }
            });
    } catch (error) {
        console.log(error);
    }
};
export const applyReward3 = async (ContractAdress, TicketAddress, callBack) => {
    const charID = window.chainID;
    const account = window.CURRENTADDRESS;
    if (ContractAdress.indexOf('0x') === -1) {
        ContractAdress = getContract(ContractAdress, charID);
    }
    if (TicketAddress.indexOf('0x') === -1) {
        TicketAddress = getContract(TicketAddress, charID);
    }
    bus.$emit('OPEN_STATUS_DIALOG', {
        type: 'pending',
        // 租用 0.5 个WETH 帽子，执行价格为300 USDT
        conText: `<p>Rent <span> </span>, the execution price is <span></span></p>`,
    });
    try {
        const Contract = await expERC20(TicketAddress);
        await oneKeyArrpove(Contract, ContractAdress, 1000000, callBack);
        const IIOContract = await IIO(ContractAdress);
        IIOContract.methods
            .applyReward3()
            .send({ from: account })
            .on('transactionHash', function(hash) {
                bus.$emit('CLOSE_STATUS_DIALOG');
                bus.$emit('OPEN_STATUS_DIALOG', {
                    type: 'submit',
                    conText: `<a href="https://bscscan.com/tx/${hash}" target="_blank">View on BscScan</a>`,
                });
            })
            .on('confirmation', function(confirmationNumber, receipt) {
                if (confirmationNumber === 0) {
                    if (window.statusDialog) {
                        bus.$emit('CLOSE_STATUS_DIALOG');
                        bus.$emit('OPEN_STATUS_DIALOG', {
                            type: 'success',
                            title: 'Successfully rented',
                            conTit:
                                '<div>The rental advertisement is published successfully, you can check it on <a href="/sell" target="blank">my rental advertisement page</a></div>',
                            conText: `<a href="https://bscscan.com/tx/${receipt.transactionHash}" target="_blank">View on BscScan</a>`,
                        });
                    } else {
                        Message({
                            message:
                                'The rental advertisement is published successfully',
                            type: 'success',
                            // duration: 0,
                        });
                    }
                    setTimeout(() => {
                        bus.$emit('REFRESH_BALANCE');
                    }, 1000);
                }
            })
            .on('error', function(error, receipt) {
                bus.$emit('CLOSE_STATUS_DIALOG');
            });
    } catch (error) {
        console.log(error);
    }
};
const allowance = async (token_exp, contract_str) => {
    // const WEB3 = await web3();
    const charID = await getID();
    const result = await token_exp.methods
        .allowance(window.CURRENTADDRESS, contract_str)
        .call({ from: window.CURRENTADDRESS });

    return window.WEB3.utils.fromWei(result, getWei());
};
// 一键授权
const oneKeyArrpove = async (token_exp, contract_str, num, callback) => {
    if (contract_str.indexOf('0x') === -1) {
        contract_str = getContract(contract_str, charID);
    }
    // 校验参数
    if (!token_exp || !contract_str) return;
    // 判断授权额度是否充足
    const awc = await allowance(token_exp, contract_str);
    if (parseInt(awc) >= parseInt(num)) {
        // console.log("额度充足", parseInt(awc));
        return;
    }
    // 无限授权
    const res = await approve(token_exp, contract_str, callback);
};

const approve = async (token_exp, contract_str, callback = (status) => {}) => {
    const charID = await getID();
    const result = await token_exp.methods
        .approve(
            contract_str,
            '0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff'
        )
        .send({ from: window.CURRENTADDRESS })
        .on('transactionHash', (hash) => {
            callback('approve');
        })
        .on('confirmation', (_, receipt) => {
            callback('success');
        })
        .on('error', (err, receipt) => {
            bus.$emit('CLOSE_STATUS_DIALOG');
            callback('failed');
        });
    return result;
};