const dateTimeConverter = (inputNe) => {

    let time = new Date(inputNe);

    const dates = time.getDate();
    const months = time.getMonth() + 1;
    const years = time.getFullYear();

    const minutes = time.getMinutes();
    const hours = time.getHours();

    const result = `${hours}:${minutes} - ${dates}/${months}/${years}`;

    return result;
}
export {dateTimeConverter};