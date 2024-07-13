const parser = {

    currency: (value, locale = "fr-FR", currency = "EUR") => {
        return new Intl.NumberFormat(locale, {
            style: "currency",
            currency,
        }).format(value);
    }

}

export default parser;