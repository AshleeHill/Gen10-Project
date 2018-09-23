$(document).ready(function() {
    alert("Please Enter in how many Dollars you have to bet");
});

function gameStart()
{
    $(".resultsTable").css("visibility", "hidden");
      $("#playButton").text("Play");
    var startingBet = $("#startingBet").val();
    startingBet = startingBet.replace('$','');
    if(verifySufficientMoney(startingBet))
    {
        var gameMoney = startingBet;
        var rollCount = 0;
        var maxMoney = 0;
        var maxMoneyRollCount = 0;

        gameLoop(gameMoney, rollCount, maxMoney, maxMoneyRollCount);
    }
    else
    {
        alert("Error! Your Starting Bet Must be a number greater than 0");
    }
}

function verifySufficientMoney(moneyAmount)
{
    return (!isNaN(moneyAmount) && moneyAmount > 0);
}

function gameLoop(gameMoney, rollCount, maxMoney, maxMoneyRollCount)
{
    var startingBet = gameMoney;
    maxMoney = gameMoney;

    while(verifySufficientMoney(gameMoney))
    {
        var diceTotal = rollDice() + rollDice();
        rollCount++;

        if(diceTotal == 7)
        {
            gameMoney = gameMoney + 4;
        } else
        {
            gameMoney = gameMoney - 1;
        }

        if(gameMoney > maxMoney)
        {
            maxMoney = gameMoney;
            maxMoneyRollCount = rollCount;
        }
    }

    $("#startingBetResult").text("$" + roundToNearestThousandths(startingBet));
    $("#rollsBeforeGoingBrokeResult").text(rollCount);
    $("#highestAmountWonResult").text("$" + roundToNearestThousandths(maxMoney));
    $("#rollCountAtHighestAmountWonResult").text(maxMoneyRollCount);

    $("#playButton").text("Play Again");
    $(".resultsTable").css("visibility", "visible");
}

function rollDice()
{
    return Math.floor(Math.random() * 6) + 1;
}

function roundToNearestThousandths(number)
{
    return Math.round(100 * number) / 100;
}
