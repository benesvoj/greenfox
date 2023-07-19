let counter = 0

const increaseCounter = () => {
    counter++;

    return $('h2').text(counter);
}

const decreaseCounter =  () => {
        counter--;
        return $('h2').text(counter);
}

$('#increaseButton').click(increaseCounter)
$('#decreaseButton').click(decreaseCounter)