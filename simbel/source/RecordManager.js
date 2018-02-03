var contract_abi=web3.eth.contract([{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"recordList","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"die","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"ipfs_hash","type":"string"},{"name":"fname","type":"string"},{"name":"desc","type":"string"}],"name":"addRecord","outputs":[{"name":"rowNumber","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"seed","type":"uint256"}],"name":"randomGen","outputs":[{"name":"randomNumber","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"ipfs_hash","type":"string"}],"name":"isRecord","outputs":[{"name":"isIndeed","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"ipfs_hash","type":"string"},{"name":"fname","type":"string"},{"name":"desc","type":"string"}],"name":"newRecord","outputs":[{"name":"rowNumber","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"getRecordCount","outputs":[{"name":"recordCount","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"row","type":"uint256"}],"name":"getRecordByRow","outputs":[{"name":"owner_address","type":"address"},{"name":"ipfs_hash","type":"string"},{"name":"fname","type":"string"},{"name":"desc","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"ipfs_hash","type":"string"},{"name":"fname","type":"string"},{"name":"desc","type":"string"}],"name":"updateRecord","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_i","type":"uint256"}],"name":"greet_omar","outputs":[{"name":"greeting","type":"string"}],"payable":false,"type":"function"},{"inputs":[],"payable":true,"type":"constructor"}]);

var contract_obj = contract_abi.new(
{
from: web3.eth.accounts[0],
data: '0x60606040525b33600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506040805190810160405280601d81526020017f48692c206d79206e616d65206973204f6d6172204d657477616c6c792e000000815250600360006006811015156200008d57fe5b0160005b509080519060200190620000a792919062000284565b50606060405190810160405280602281526020017f4920616d207468652063726561746f72206f66207468697320636f6e7472616381526020017f742e000000000000000000000000000000000000000000000000000000000000815250600360016006811015156200011657fe5b0160005b5090805190602001906200013092919062000284565b506040805190810160405280601181526020017f426c61636b205377616e204c6976657321000000000000000000000000000000815250600360026006811015156200017857fe5b0160005b5090805190602001906200019292919062000284565b50606060405190810160405280603581526020017f5761746368696e67205061726e6173737573206f6e206120626561757469667581526020017f6c2c2073756e6e792064617920696e2053462e2e2e00000000000000000000008152506003806006811015156200020057fe5b0160005b5090805190602001906200021a92919062000284565b506040805190810160405280601c81526020017f4865616c74686361726520697320612068756d616e2072696768742e00000000815250600360046006811015156200026257fe5b0160005b5090805190602001906200027c92919062000284565b505b62000333565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10620002c757805160ff1916838001178555620002f8565b82800160010185558215620002f8579182015b82811115620002f7578251825591602001919060010190620002da565b5b5090506200030791906200030b565b5090565b6200033091905b808211156200032c57600081600090555060010162000312565b5090565b90565b61169e80620003436000396000f300606060405236156100ad576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806319da83a8146100b257806335f469941461014f5780633f723c6214610164578063434b14e71461025b5780635e6fc129146102925780638da5cb5b1461030757806396e8d14c1461035c578063ca267f2814610453578063d923c99e1461047c578063f30562b614610626578063f4b9657014610709575b600080fd5b34156100bd57600080fd5b6100d360048080359060200190919050506107a6565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156101145780820151818401525b6020810190506100f8565b50505050905090810190601f1680156101415780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561015a57600080fd5b610162610863565b005b341561016f57600080fd5b610245600480803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509190803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509190803590602001908201803590602001908080601f016020809104026020016040519081016040528093929190818152602001838380828437820191505050505050919050506108f7565b6040518082815260200191505060405180910390f35b341561026657600080fd5b61027c600480803590602001909190505061092c565b6040518082815260200191505060405180910390f35b341561029d57600080fd5b6102ed600480803590602001908201803590602001908080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505091905050610970565b604051808215151515815260200191505060405180910390f35b341561031257600080fd5b61031a6109f6565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561036757600080fd5b61043d600480803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509190803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509190803590602001908201803590602001908080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505091905050610a1c565b6040518082815260200191505060405180910390f35b341561045e57600080fd5b610466610d3b565b6040518082815260200191505060405180910390f35b341561048757600080fd5b61049d6004808035906020019091905050610d49565b604051808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001806020018060200180602001848103845287818151815260200191508051906020019080838360005b838110156105185780820151818401525b6020810190506104fc565b50505050905090810190601f1680156105455780820380516001836020036101000a031916815260200191505b50848103835286818151815260200191508051906020019080838360005b8381101561057f5780820151818401525b602081019050610563565b50505050905090810190601f1680156105ac5780820380516001836020036101000a031916815260200191505b50848103825285818151815260200191508051906020019080838360005b838110156105e65780820151818401525b6020810190506105ca565b50505050905090810190601f1680156106135780820380516001836020036101000a031916815260200191505b5097505050505050505060405180910390f35b341561063157600080fd5b610707600480803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509190803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509190803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509190505061126d565b005b341561071457600080fd5b61072a600480803590602001909190505061143d565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561076b5780820151818401525b60208101905061074f565b50505050905090810190601f1680156107985780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6001818154811015156107b557fe5b906000526020600020900160005b915090508054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561085b5780601f106108305761010080835404028352916020019161085b565b820191906000526020600020905b81548152906001019060200180831161083e57829003601f168201915b505050505081565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614156108f457600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16ff5b5b565b600061090284610970565b156109175761091284848461126d565b610924565b610922848484610a1c565b505b5b9392505050565b6000600a6001430340836040518083600019166000191681526020018281526020019250505060405180910390206001900481151561096757fe5b0690505b919050565b600080826040518082805190602001908083835b6020831015156109aa57805182525b602082019150602081019050602083039250610984565b6001836020036101000a038019825116818451168082178552505050505050905001915050908152602001604051809103902060040160009054906101000a900460ff1690505b919050565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000610a2784610970565b15610a3157600080fd5b336000856040518082805190602001908083835b602083101515610a6b57805182525b602082019150602081019050602083039250610a45565b6001836020036101000a038019825116818451168082178552505050505050905001915050908152602001604051809103902060000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550836000856040518082805190602001908083835b602083101515610b1957805182525b602082019150602081019050602083039250610af3565b6001836020036101000a03801982511681845116808217855250505050505090500191505090815260200160405180910390206001019080519060200190610b62929190611519565b50826000856040518082805190602001908083835b602083101515610b9d57805182525b602082019150602081019050602083039250610b77565b6001836020036101000a03801982511681845116808217855250505050505090500191505090815260200160405180910390206002019080519060200190610be6929190611519565b50816000856040518082805190602001908083835b602083101515610c2157805182525b602082019150602081019050602083039250610bfb565b6001836020036101000a03801982511681845116808217855250505050505090500191505090815260200160405180910390206003019080519060200190610c6a929190611519565b5060016000856040518082805190602001908083835b602083101515610ca657805182525b602082019150602081019050602083039250610c80565b6001836020036101000a038019825116818451168082178552505050505050905001915050908152602001604051809103902060040160006101000a81548160ff0219169083151502179055506001808054806001018281610d089190611599565b916000526020600020900160005b8790919091509080519060200190610d2f929190611519565b500390505b9392505050565b600060018054905090505b90565b6000610d536115c5565b610d5b6115c5565b610d636115c5565b610e22600186815481101515610d7557fe5b906000526020600020900160005b508054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610e185780601f10610ded57610100808354040283529160200191610e18565b820191906000526020600020905b815481529060010190602001808311610dfb57829003601f168201915b5050505050610970565b1515610e2d57600080fd5b6000600186815481101515610e3e57fe5b906000526020600020900160005b506040518082805460018160011615610100020316600290048015610ea85780601f10610e86576101008083540402835291820191610ea8565b820191906000526020600020905b815481529060010190602001808311610e94575b5050915050908152602001604051809103902060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1693506000600186815481101515610ef257fe5b906000526020600020900160005b506040518082805460018160011615610100020316600290048015610f5c5780601f10610f3a576101008083540402835291820191610f5c565b820191906000526020600020905b815481529060010190602001808311610f48575b505091505090815260200160405180910390206001018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156110065780601f10610fdb57610100808354040283529160200191611006565b820191906000526020600020905b815481529060010190602001808311610fe957829003601f168201915b50505050509250600060018681548110151561101e57fe5b906000526020600020900160005b5060405180828054600181600116156101000203166002900480156110885780601f10611066576101008083540402835291820191611088565b820191906000526020600020905b815481529060010190602001808311611074575b505091505090815260200160405180910390206002018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156111325780601f1061110757610100808354040283529160200191611132565b820191906000526020600020905b81548152906001019060200180831161111557829003601f168201915b50505050509150600060018681548110151561114a57fe5b906000526020600020900160005b5060405180828054600181600116156101000203166002900480156111b45780601f106111925761010080835404028352918201916111b4565b820191906000526020600020905b8154815290600101906020018083116111a0575b505091505090815260200160405180910390206003018054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561125e5780601f106112335761010080835404028352916020019161125e565b820191906000526020600020905b81548152906001019060200180831161124157829003601f168201915b505050505090505b9193509193565b61127683610970565b151561128157600080fd5b336000846040518082805190602001908083835b6020831015156112bb57805182525b602082019150602081019050602083039250611295565b6001836020036101000a038019825116818451168082178552505050505050905001915050908152602001604051809103902060000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550816000846040518082805190602001908083835b60208310151561136957805182525b602082019150602081019050602083039250611343565b6001836020036101000a038019825116818451168082178552505050505050905001915050908152602001604051809103902060020190805190602001906113b2929190611519565b50806000846040518082805190602001908083835b6020831015156113ed57805182525b6020820191506020810190506020830392506113c7565b6001836020036101000a03801982511681845116808217855250505050505090500191505090815260200160405180910390206003019080519060200190611436929190611519565b505b505050565b6114456115c5565b6000821015151561145557600080fd5b60068210151561146457600080fd5b60038260068110151561147357fe5b0160005b508054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561150c5780601f106114e15761010080835404028352916020019161150c565b820191906000526020600020905b8154815290600101906020018083116114ef57829003601f168201915b505050505090505b919050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061155a57805160ff1916838001178555611588565b82800160010185558215611588579182015b8281111561158757825182559160200191906001019061156c565b5b50905061159591906115d9565b5090565b8154818355818115116115c0578183600052602060002091820191016115bf91906115fe565b5b505050565b602060405190810160405280600081525090565b6115fb91905b808211156115f75760008160009055506001016115df565b5090565b90565b61162791905b80821115611623576000818161161a919061162a565b50600101611604565b5090565b90565b50805460018160011615610100020316600290046000825580601f10611650575061166f565b601f01602090049060005260206000209081019061166e91906115d9565b5b505600a165627a7a7230582072d2fc81a868bf82e7c983c7f282d7388ecf21fa587b5703b5cb647bdab062870029',
gas: '4000000'
}, function (e, contract) {
console.log(e, contract);
if (typeof contract.address !== 'undefined') {
console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
}
})