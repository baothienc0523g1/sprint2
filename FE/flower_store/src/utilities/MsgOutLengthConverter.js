const msgOutLengthConverter = (inputNe, maxLength) => {

    if (inputNe.length >= maxLength) {
        return inputNe.substring(0, maxLength) + "...";
    } else {
        return inputNe;
    }
}

export {msgOutLengthConverter};