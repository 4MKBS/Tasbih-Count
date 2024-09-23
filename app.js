let counts = [0, 0, 0, 0];
let shows = [
    document.getElementById('show1'),
    document.getElementById('show2'),
    document.getElementById('show3'),
    document.getElementById('show4')
];

function add(n) {
    if (n < 1 || n > 4) return; // Validate input

    counts[n - 1]++; // Increment the corresponding count
    if (counts[n - 1] === 100) counts[n - 1] = 0; // Reset if 100

    shows[n - 1].textContent = counts[n - 1]; // Update display
}
