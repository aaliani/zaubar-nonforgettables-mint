// SPDX-License-Identifier: MIT
pragma solidity <0.8.0;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

contract ZaubarXPRO is ERC1155 {
    uint256 public constant XPRO = 1;

    constructor() ERC1155("https://ipfs.io/ipfs/bafybeidrz6yzoua2l5fefl6wr2sdlpnf7l7htrztn7nnxpf6jue253inlq/{id}.json") {
        _mint(msg.sender, XPRO, 99, "");

    }

    function uri(uint256 _tokenid) override public pure returns (string memory) {
        return string(
            abi.encodePacked(
                "https://ipfs.io/ipfs/bafybeidrz6yzoua2l5fefl6wr2sdlpnf7l7htrztn7nnxpf6jue253inlq/",
                Strings.toString(_tokenid),".json"
            )
        );
    }
}