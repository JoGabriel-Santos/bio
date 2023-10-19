const formatPrice = (value) => {
    if (typeof value === 'number') {
        value = value.toFixed(2);
    }

    value = value.replace('.', ',');

    if (!value.includes(',')) {
        value += ',00';

    } else if (value.endsWith(',')) {
        value += '00';

    } else if (value.endsWith(',0')) {
        value += '0';
    }

    return value;
};

export default formatPrice;