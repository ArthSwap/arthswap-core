pragma solidity =0.5.16;

import '../PancakeFactory.sol';

contract TestPancakeERC20 is PancakeERC20 {
    constructor(uint _totalSupply) public {
        _mint(msg.sender, _totalSupply);
    }
}
