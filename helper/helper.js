var deck_size = 10

export function random() {
    let j, x, i;
    let a = Array.from(Array(deck_size).keys())
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }

    return a;
}

export default {
    random
}