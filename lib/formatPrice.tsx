export function formatPrice(price: number) {
    const priceFormat = new Intl.NumberFormat('es-AR', {
        style: 'currency',
        currency: 'ARS',
    });
    const finalPrice = priceFormat.format(price);
    return finalPrice;
}