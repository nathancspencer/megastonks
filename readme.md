# MEGASTONKS

Made by Jordan Huang and Nathan Spencer, first year CSE students.

## A Brokerage Comparison Calculator

Deciding on a broker is a challenge. 

Every company charges you in a different way. A percentage of what you invest, a variable fee depending on investment amount, free purchasing but charged selling, a flat fee, etc.

There is no easy way of quantifying how much could be saved by what broker you choose, particularly because savings on brokerage can be reinvested, and depends on how much you invest.

This is why we created MEGASTONKS - to compare brokerage personalised to how you invest in the market. 

For this calculator, we decided to compare the three largest brokers in Australia: CommSec, OpenMarkets (the broker behind Pearler) and CMC. In future, we plan on expanding this calculator to overseas brokers and other Australian ones.

We found that the savings by between brokers are significant, generally amounting to several thousands dollars depending on investment style (you can see for yourself by trying out the calculator.)

This is our first ever HTML/JS/CSS project, so please forgive any rough edges.

## Underlying Mathematics

The underlying mathematics is essentially a geometric series, with the terms changing depending on the fees of the broker.

Given the 3 inputs, the calculator finds the number of investment periods in a year, as well as the expected growth per period that corresponds to the given annual return.

The calculator assumes that the amount invested each time is exactly the amount that you will be spending each time i.e. it includes the fees of the stockbroker as well (so investing $1000 with $6.5 fees means that you will buy only $993.5 in stocks). 
It also assumes (admittedly unrealistically) that you can spend all such money on stocks without any left over. However, because this leftover amount can be reinvested at a later date, it has minimal effect on the calculations.