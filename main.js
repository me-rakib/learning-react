const domContainer = document.getElementById('root')

const reactElement = (
    <div>
        <h1 id="display">0</h1>
        <div>
            <button id="button">Increment +</button>
        </div>
    </div>
);

ReactDOM.render(reactElement, domContainer)