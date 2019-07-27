import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
it('renders without crashing', function () {
    var div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
});
//# sourceMappingURL=App.test.jsx.map