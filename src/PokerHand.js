const Result = {
    WIN: 1,
    LOSS: 2,
    TIE: 3
};

const handOne = ('AC 4C 5C 8C AC');
const handTwo = ('4S 5S 8C AS AD');
const handThree = ('AH 2H 3H 4H 5H');
const handFour = ('10C JC QC KC AC');
const handFive = ('AD KH JS QD 10H');
const handSix = ('6H 2H 3H 4H 5H');

const hands = ['Royal flush', 'Straight flush', 'Four of a kind', 'Full house',
    'Flush', 'Straight', 'Three of a kind', 'Two pairs', 'Pair', 'High card'
]

const ranks = [
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        'J',
        'Q',
        'K',
        'A'
    ]
  
//HELPER FUNCTIONS

function splitHand(hand) {
    hand = hand.split(" ").sort(function(a, b){  
        return ranks.indexOf(a.charAt(0)) - ranks.indexOf(b.charAt(0));
        });
    let rankArray =  hand.map(ele => ele.length === 3 ? ele.slice(0, 2) : ele.slice(0, 1));
    let suitArray = hand.map(ele => ele.length === 3 ? ele.slice(2) : ele.slice(1));
    return {'rankArray':rankArray, 'suitArray':suitArray};
}

  
function isConsecutive(hand) {
    const rankArray = splitHand(hand)['rankArray'];
    const ref = ranks.indexOf(rankArray[0]);
    section = rankArray.join('');
        if (rankArray[0] === '2' && /2345A/.test(section)) {
                return true; 
        } else {
            return rankArray.every((ele, index) => ele === ranks[index + ref]);
        }
}

function duplicates(hand, arr) {
    let result = splitHand(hand)[arr];
    let countDuplicates = {};
    result.reduce((acc, ele, idx) => 
    countDuplicates[result[idx]] = (countDuplicates[result[idx]]) + 1 || 1, 1);
    return countDuplicates;
}

//HANDS

function isRoyalFlush(hand) {
    const royalCheck = /10JQKA/.test(splitHand(hand)['suitArray'].join(''));
    const dupCheck = duplicates(hand, 'suitArray');
    return (royalCheck === true && 
    Object.keys(dupCheck).find(key => dupCheck[key] === 5)) ? 
        true : false;
}

function isStraightFlush(hand) {
    const dupCheck = duplicates(hand, 'suitArray');
    return (isConsecutive(hand) === true && 
    Object.keys(dupCheck).find(key => dupCheck[key] === 5)) ?
        true : false;
}
    
function isFourOfAKind(hand) {
    const rankArray = splitHand(hand)['rankArray'];
    return (Object.keys(rankArray).find(key => rankArray[key] === 4)) ?
       true : false;
}

function isFullHouse(hand) {
    const rankArray = splitHand(hand)['rankArray'];
    return (Object.keys(rankArray).find(key => rankArray[key] === 3)
    &&  pairs(hand) === 1) ? true : false;
}

function isFlush(hand) {
    const dupCheck = duplicates(hand, 'suitArray');
    if (Object.keys(dupCheck).find(key => dupCheck[key] === 5)) {
        return true;
    } else {
        return false;
    }
}

function isStraight(hand) {
    return (isConsecutive(hand)) ? true : false;
}

function isThreeOfAKind(hand) {
    const dupCheck = duplicates(hand, 'rankArray');
    return (Object.keys(dupCheck).find(key => dupCheck[key] === 3)) ? 
    true : false;
}

function isTwoPairs(hand) {
    const dupCheck = duplicates(hand, 'rankArray');
    return (Object.keys(dupCheck).find(key => dupCheck[key] === 2).length === 2);
}

function isPair(hand) {
    const dupCheck = duplicates(hand, 'rankArray');
    return (Object.keys(dupCheck).find(key => dupCheck[key] === 2).length === 1);
}

function isHighCard(hand) {
    const rankArray = splitHand(hand)['rankArray'];
    return ranks.indexOf(rankArray[rankArray.length - 1]);
}

function pokerHand(hand) {
    if (isRoyalFlush(hand)) {
    return 000;
    } else if (isStraightFlush(hand)) {
    return 100;
    } else if (isFourOfAKind(hand)) {
    return 200;
    } else if (isFullHouse(hand)) {
    return 300;
    } else if (isFlush(hand)) {
    return 400;
    } else if (isStraight(hand)) {
    return 500;
    } else if (isThreeOfAKind(hand)) {
    return 600;
    } else if (isTwoPairs(hand)) {
    return 700;
    } else if (isPair(hand)) {
    return 800;
    } else {
    return 900;
    }
}

function compareWith(handOne, handTwo) { 
    let regEx = /((([2-9]|10)|[JQKA])[CDHS]\s?){5}/;
    if (regEx.test(handOne) === false && regEx.test(handTwo) === false ) {
      alert ('Invalid Entry!');
    } else {
      let rankHandOne = pokerHand(handOne);
      let rankHandTwo = pokerHand(handTwo);
      if(rankHandOne === 900 && rankHandTwo === 900) {
          rankHandOne += isHighCard(hand);
          rankHandTwo =+ isHighCard(hand);
      }
      return rankHandOne === rankHandTwo ? Result.TIE : rankHandOne > rankHandTwo ? Result.LOSS : Result.WIN;
    }
  }

 
