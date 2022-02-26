//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";


contract ProfileImageNfts is ERC721, Ownable{
    // https://ethereum.stackexchange.com/questions/97186/what-is-the-reason-behind-writing-using-counters-for-counters-counters-when-us
    using Counters for Counters.Counter;
    //https://forum.openzeppelin.com/t/what-does-this-mean-using-strings-for-uint256-in-erc721-contracts/7964
    using Strings for uint256;

    Counters.Counter _tokenIds;

// The tokenURI on an NFT is a unique identifier of what the token "looks" like.
// A URI could be an API call over HTTPS, an IPFS hash, or anything else unique.
    mapping(uint256 => string) _tokenURIs;

    struct RenderToken{
        uint256 id;
        string uri;
        string space;
    }

    constructor() ERC721("ProfileImageNfts","PIN"){}
    
    //populating _tokenURIs
    function _setTokenURI(uint256 tokenId , string memory _tokenURI) internal{
        _tokenURIs[tokenId] = _tokenURI;
    }

    function tokenURI(uint256 tokenId) public view virtual override returns (string memory){
        require(_exists(tokenId), 'URI does not exits on that IDss');
        string memory _RUri = _tokenURIs[tokenId];
        return _RUri;
    }

    function getAlltoken()public view returns (RenderToken[] memory){
        uint256 latestId = _tokenIds.current();

        //res is gonna be array of objects - 
        //(RenderToken[](latestId)) describing the sixe of render token
        RenderToken[] memory res = new RenderToken[](latestId);

        for(uint256 i=0; i<= latestId; i++){

            //checking if the conract exists
            if(_exists(i)){
                string memory uri = tokenURI(i);

                //this is appending to the array(res)
                res[i] = RenderToken(i, uri, "");
            }
        }
        return res;
    }

    function mint(address recipients, string memory _uri) public returns(uint256){
        uint256 newId = _tokenIds.current();
        _mint(recipients, newId);
        _setTokenURI(newId, _uri);
        _tokenIds.increment();
        return newId;
    }
}