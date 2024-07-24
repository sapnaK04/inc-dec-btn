let value = 0;

        const valueDisplay = document.getElementById('value');
        const incrementButton = document.getElementById('increment');
        const decrementButton = document.getElementById('decrement');

        incrementButton.addEventListener('click', () => {
            value++;
            valueDisplay.textContent = value;
        });

        decrementButton.addEventListener('click', () => {
            value--;
            valueDisplay.textContent = value;
        });