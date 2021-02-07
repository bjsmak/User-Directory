//Function for sorting last name on button clicks
const sortLastName = data => {
    return data.sort((x, y) => {
        const nameOne = (x.name.last).toUpperCase();
        const nameTwo = (y.name.last).toUpperCase();
        if (nameOne < nameTwo) {
            return -1;
        }
        if (nameOne > nameTwo) {
            return 1;
        }
        return 0;
    })
}

export default sortLastName;