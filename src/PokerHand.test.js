
describe('splitHand()', () => {
	it(`sorts and splits ranks`, () => {
		expect(splitHand(handOne)['rankArray']).toEqual(
			['4', '5', '8', 'A', 'A']);
	    expect(splitHand(handTwo)['rankArray']).toEqual(
		 	['4', '5', '8', 'A', 'A']);
		expect(splitHand(handFour)['rankArray']).toEqual(
			['10', 'J', 'Q', 'K', 'A']);
	});
	it(`sorts (according to rank) and splits suites`, () => {
		expect(splitHand(handOne)['suitArray']).toEqual(
			['C', 'C', 'C', 'C', 'C']);
		expect(splitHand(handTwo)['suitArray']).toEqual(
			['S', 'S', 'C', 'S', 'D']);
	});
});

describe('isConsequtive()', () => {
	it(`checks for 5 cards in a row`, () => {
		expect(isConsecutive(handOne)).toEqual(
			false);
		expect(isConsecutive(handTwo)).toEqual(
			false);
		expect(isConsecutive(handThree)).toEqual(
			true);
		expect(isConsecutive(handFour)).toEqual(
			true);
		expect(isConsecutive(handFive)).toEqual(
			true);
		expect(isConsecutive(handSix)).toEqual(
			true);
	});
});

describe('duplicates()', () => {
	it(`returns count of each suit`, () => {
		expect(duplicates(handOne, 'rankArray')).toEqual(
			{ 4 : 1, 5: 1, 8 : 1, A : 2});
		expect(duplicates(handOne, 'suitArray')).toEqual(
			{C : 5});
		expect(duplicates(handTwo, 'rankArray')).toEqual(
			{ 4 : 1, 5: 1, 8: 1, A : 2});
		expect(duplicates(handTwo, 'suitArray')).toEqual(
			{ S : 3, C : 1, D : 1});
		expect(duplicates(handThree, 'rankArray')).toEqual(
			{ A: 1, 2 : 1, 3 : 1, 4 : 1, 5 : 1});
		expect(duplicates(handThree, 'suitArray')).toEqual(
			{ H : 5});
	});
});

describe('Test hand functions', () => {
	it(`returns true or false`, () => {
		expect(isRoyalFlush(handOne)).toEqual(
			false);
		expect(isRoyalFlush(handTwo)).toEqual(
			false);
		expect(isFullHouse(handOne)).toEqual(
			false);
		expect(isFullHouse(handTwo)).toEqual(
			false);
		expect(isFourOfAKind(handOne)).toEqual(
			false);
		expect(isFourOfAKind(handTwo)).toEqual(
			false);
		expect(isStraight(handOne)).toEqual(
			false);
		expect(isStraight(handTwo)).toEqual(
			false);
		expect(isStraightFlush(handOne)).toEqual(
			false);
		expect(isStraightFlush(handTwo)).toEqual(
			false);
		expect(isThreeOfAKind(handOne)).toEqual(
			false);
		expect(isThreeOfAKind(handTwo)).toEqual(
			false);
		expect(isTwoPairs(handOne)).toEqual(
			false);
		expect(isTwoPairs(handTwo)).toEqual(
			false);
		expect(isPair(handOne)).toEqual(
			true);
		expect(isPair(handTwo)).toEqual(
			true);
		expect(isHighCard(handOne)).toEqual(
			12);
		expect(isHighCard(handOne)).toEqual(
			12);
	});
});

describe('compareWith()', () => {
	it(`compares two hands to give result`, () => {
		expect(compareWith(handOne, handTwo)).toEqual(
			1 );
	});
});

