# **Poker Hand Comparison**

Poker Hand Comparison is a little program that will compare two hands of poker according to the rules of [Texas Hold'em rules](https://en.wikipedia.org/wiki/Texas_hold_%27em#Hand_values).

The scoreHand() function takes a hand, string of 5 cards delimited by a space. It sorts the cards and finds the rank of the hand. 

The PokerHand() function takes two hands and calls on scoreHand() to find the rank of each hand and then compare's handOne to handTwo. If handOne wins the result is 1, if handTwo wins, the result is 2, a draw is 3. It accounts for card ranks when tie-ing high cards, but not two-pair, three of a kind etc.
