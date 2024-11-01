"use strict"

function solveEquation(a, b, c) {
	let arr = [];
	let d = b ** 2 - 4 * a * c;

	if (d < 0) {
		return [];
	}
	if (d === 0) {
		return [-b / (2 * a)];
	}
	if (d > 0) {
		return [
			(-b + Math.sqrt(d)) / (2 * a),
			(-b - Math.sqrt(d)) / (2 * a)
		]
	}
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	let monthlyPercent = (percent / 100) / 12;
	let loanBody = amount - contribution;
	let payment = loanBody * (monthlyPercent + (monthlyPercent / (((1 + monthlyPercent) ** countMonths) - 1)));
	let totalAmount = payment * countMonths;
	totalAmount = totalAmount.toFixed(2);
	return Number(totalAmount);
}