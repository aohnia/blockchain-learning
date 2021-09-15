"use strict";

const SHA256 = require('crypto-js/sha256');
const { BlockList } = require('net');

//var crypto = require("crypto");

// The Power of a Smile
// by Tupac Shakur
var poem = [
	"The power of a gun can kill",
	"and the power of fire can burn",
	"the power of wind can chill",
	"and the power of a mind can learn",
	"the power of anger can rage",
	"inside until it tears u apart",
	"but the power of a smile",
	"especially yours can heal a frozen heart",
];

var Blockchain = {
	blocks: [],
};

// Genesis block
Blockchain.blocks.push({
	index: 0,
	hash: "000000",
	data: "",
	timestamp: Date.now(),
});

// TODO: insert each line into blockchain
 for (let line of poem) {
	createBlock(line)
 }

function createBlock(_data) {
	let block = {
		index: Blockchain.blocks.length,
		prevHash: Blockchain.blocks[Blockchain.blocks.length -1].hash,
		data: _data,
		timestamp: Date.now()
	}
	block.hash = blockHash(block);
	Blockchain.blocks.push(block);
	console.log(block);
	return block;
}

 console.log(`Blockchain is valid: ${verifyChain(Blockchain)}`);

// **********************************

function blockHash(bl) {
	return SHA256(bl.index + bl.prevHash + bl.timestamp + JSON.stringify(bl.data)).toString();   
	//return crypto.createHash("sha256").update(
		//`${bl.index};${bl.prevHash};${bl.data};${bl.timestamp};`
		// TODO: use block data to calculate hash
///	).digest("hex");
}
  
//function which takes the text for its data, creates an object for the block,
// and computes its hash, finally returning the block object. 
//Insert this object into the `blocks` array for the blockchain.

function verifyBlock(){


	
}

function verifyChain(){


}



