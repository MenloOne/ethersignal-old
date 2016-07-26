/* @flow */

import React, { PropTypes }  from 'react';
import { render } from 'react-dom';
import { combineReducers, createStore } from 'redux';
import { connect, Provider } from 'react-redux';

const initialState = {
	positions: [
		{
			title: 'TITLE',
			text: 'TEXT',
			nextBlockNum: 0,
			regAddr: '',
			amplitude: 0
		}
	]
}

function positions(state = initialState, action) {
	switch (action.type) {
		case 'ADD_POSITION':
			return [
				...state,
				{
					title: action.title,
					text: action.text,
					nextBlockNum: action.nextBlockNum,
					regAddr: action.regAddr,
					amplitude: action.amplitude
				}
			]
		case 'UPDATE_POSITION_TALLY':
			return [
				...state,
				{
				}
			]
		default:
			return state;
	}
}

let reducer = combineReducers({ positions });
let store = createStore(reducer);

store.dispatch({
	type: 'ADD_POSITION',
	title: 'Test',
	text: 'This is a test position',
	nextBlockNum: 1000000,
	regAddr: '',
	amplitude: 0
});

console.log('XXXADS: ' + store.getState());

const Position = ({title, text, nextBlockNum, regAddr, amplitude}) => (
	<li>
		{title} - {text} (@{nextBlockNum}, by {regAddr}, amplitude: {amplitude})
	</li>
)

Position.propTypes = {
	title: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	nextBlockNum: PropTypes.number.isRequired,
	regAddr: PropTypes.string.isRequired,
	amplitude: PropTypes.number.isRequired
}

const PositionList = ({positions}) => (
	<ul>
		{positions.map(position =>
			<Position
				key={position.id}
				{...position}
			/>
		)}
	</ul>
)

PositionList.propTypes = {
	positions: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number.isRequired,
		title: PropTypes.string.isRequired,
		text: PropTypes.string.isRequired,
		nextBlockNum: PropTypes.number.isRequired,
		regAddr: PropTypes.string.isRequired,
		amplitude: PropTypes.number.isRequired
	}).isRequired).isRequired
}

const getAllPositions = (positions) => {
	return positions;
}

const mapStateToPositions = (state) => {
	return {
		positions: getAllPositions(state.positions)
	}
}

const VisiblePositionList = connect(
	mapStateToPositions
)(PositionList)

const EtherSignalApp = () => (
	<div>
		<VisiblePositionList />
	</div>
)

render(
	<Provider store={store}>
		<EtherSignalApp />
	</Provider>,
	document.getElementById('root')
)
/*
var ethersignalContract = web3.eth.contract([{"constant":false,"inputs":[{"name":"amount","type":"uint256"}],"name":"withdraw","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"pro","type":"bool"}],"name":"setSignal","outputs":[],"type":"function"},{"constant":false,"inputs":[],"name":"endSignal","outputs":[],"type":"function"},{"inputs":[{"name":"rAddr","type":"address"}],"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"pro","type":"bool"},{"indexed":false,"name":"addr","type":"address"}],"name":"LogSignal","type":"event"},{"anonymous":false,"inputs":[],"name":"EndSignal","type":"event"}]);

var positionregistryContract = web3.eth.contract([{"constant":false,"inputs":[{"name":"title","type":"string"},{"name":"text","type":"string"}],"name":"registerPosition","outputs":[],"type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"regAddr","type":"address"},{"indexed":true,"name":"sigAddr","type":"address"},{"indexed":false,"name":"title","type":"string"},{"indexed":false,"name":"text","type":"string"}],"name":"LogPosition","type":"event"}]);
var positionregistry = positionregistryContract.at('0x17351fb5e243ebf9c4480734c010a875853f8d9e')

function WithdrawPosition(sigAddr) {
	var ethersignal = ethersignalContract.at(sigAddr);

	ethersignal.endSignal();

	return true;
}

function WithdrawFromPosition(sigAddr, amount) {
	var ethersignal = ethersignalContract.at(sigAddr);
	var gas = ethersignal.withdraw.estimateGas(web3.toWei(amount)) * 2;

	ethersignal.withdraw(web3.toWei(amount), {from: web3.eth.accounts[0], gas: gas});

	return true;
}

function SetSignal(sigAddr, pro) {
	var ethersignal = ethersignalContract.at(sigAddr);
	var gas = ethersignal.setSignal.estimateGas(pro);

	ethersignal.setSignal(pro, {from: web3.eth.accounts[0], gas: gas});

	return true;
}

function ListPositions(minDeposit) {
	var posMap = {};
	var minDeposit = typeof minDeposit !== 'undefined' ? minDeposit : 0;

	positionregistry.LogPosition({}, {fromBlock: 1200000}, function(error, result){
		if (!error)
		{
			posMap[result.args.sigAddr] = [result.args.title, result.args.text, result.args.regAddr, result.blockNumber];
		}
	})

	console.log("[Positions: cut & paste the CalcSignal(); portion to see current signal levels]");

	var numFiltered = 0;
	Object.keys(posMap).map(function(k) {
		var deposit = web3.fromWei(web3.eth.getBalance(k));

		if (deposit >= minDeposit)
		{
			console.log("\nPosition CalcSignal(\"" + k + "\"," + posMap[k][3] + ");");
			console.log(" registered by " + posMap[k][2]);
			console.log(" eth deposit: " + deposit);
			console.log("Title: " + posMap[k][0]);
			console.log("Text: " + posMap[k][1]);
		} else {
			numFiltered++;
		}
	});

	console.log("Positions filtered for being under the minDeposit of " + minDeposit + ": " + numFiltered);

	return true;
}

function CalcSignal(posAddr, startBlock) {
	var proMap = {};
	var antiMap = {};

	var ethersignal = ethersignalContract.at(posAddr);

	ethersignal.LogSignal({}, {fromBlock: startBlock}, function(error, result){
		if (!error)
		{
			if (result.args.pro) {
				proMap[result.args.addr] = 1;
				antiMap[result.args.addr] = 0;
			} else {
				proMap[result.args.addr] = 0;
				antiMap[result.args.addr] = 1;
			}
		}
	})

	var totalPro = 0;
	var totalAgainst = 0;

	// call getBalance just once per address
	Object.keys(proMap).map(function(a) {
		var bal = web3.fromWei(web3.eth.getBalance(a));
		proMap[a] = proMap[a] * bal;
		antiMap[a] = antiMap[a] * bal;
	});

	// sum the pro and anti account values
	Object.keys(proMap).map(function(a) { totalPro += parseFloat(proMap[a]); });
	Object.keys(antiMap).map(function(a) { totalAgainst += parseFloat(antiMap[a]); });

	return {pro: totalPro, against: totalAgainst}
}
*/

var Web3 = require('web3');
console.log("window.web3: " + window.web3);
var web3 = new Web3(window.web3.currentProvider);
//var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

var ethersignalContract = web3.eth.contract([{"constant":false,"inputs":[{"name":"amount","type":"uint256"}],"name":"withdraw","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"pro","type":"bool"}],"name":"setSignal","outputs":[],"type":"function"},{"constant":false,"inputs":[],"name":"endSignal","outputs":[],"type":"function"},{"inputs":[{"name":"rAddr","type":"address"}],"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"pro","type":"bool"},{"indexed":false,"name":"addr","type":"address"}],"name":"LogSignal","type":"event"},{"anonymous":false,"inputs":[],"name":"EndSignal","type":"event"}]);

var positionregistryContract = web3.eth.contract([{"constant":false,"inputs":[{"name":"title","type":"string"},{"name":"text","type":"string"}],"name":"registerPosition","outputs":[],"type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"regAddr","type":"address"},{"indexed":true,"name":"sigAddr","type":"address"},{"indexed":false,"name":"title","type":"string"},{"indexed":false,"name":"text","type":"string"}],"name":"LogPosition","type":"event"}]);
var positionregistry = positionregistryContract.at('0x17351fb5e243ebf9c4480734c010a875853f8d9e')

var lastBlockNumber = 1200000;

function ListPositions(nextBlock) {
	var posMap = {};

	var results = positionregistry.LogPosition({}, {fromBlock: nextBlock}).get(function(error, results){
		if (!error)
		{
			var idx;
			for (idx in results) {
				var k = results[idx].args.sigAddr;
				posMap[k] = [results[idx].args.title, results[idx].args.text, results[idx].args.regAddr, results[idx].blockNumber];
				if (results[idx].blockNumber > lastBlockNumber) { lastBlockNumber = results[idx].blockNumber + 1; }
				var deposit = web3.fromWei(web3.eth.getBalance(k));
				console.log('ADD_POSITION: ' + posMap[k] + ", " + deposit);

				store.dispatch({
					type: 'ADD_POSITION',
					title:        posMap[k][0],
					text:         posMap[k][1],
					nextBlockNum: posMap[k][3],
					regAddr:      posMap[k][2],
					amplitude:    Number(deposit)
				});
			}
		}
	})
}

ListPositions(lastBlockNumber);

setInterval(function() {
	console.log('XXXADS: ' + lastBlockNumber);
	ListPositions(lastBlockNumber);
},2000);

console.log('XXXADS');
