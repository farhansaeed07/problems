const first = 100
const last = 200

const getCount = (n) => {
    let counter = 0;
    while (true) {
        counter++;
        if(n==1) return counter
        n = n % 2 != 0 ? 3 * n + 1 : n / 2
    }
}

let max = 0

for (let i = first; i <= last; i++) {
    const count = getCount(i)
    if( count > max ) {
        max = count
    }
}
console.log(max)
