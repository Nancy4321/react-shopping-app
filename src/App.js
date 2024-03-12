import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { AppProvider } from './context/AppContext';
import CartValue from './components/CartValue';
import ExpenseList from './components/ExpenseList';
import ItemSelected from './components/ItemSelected';
import Location from './components/Location';

function App() {
  return (
    <div className="App">
        <AppProvider>
            <div className="row p-5">
                <div className="col-12">
                    <h1>Shopping App</h1>
                </div>
                <div className="row">
                    <div className="col-6">
                        <CartValue />
                    </div>
                    <div className="col-6">
                        <Location />
                    </div>
                </div>
                <div className="col-12">
                    <ExpenseList />
                </div>
                <div className="col-12">
                    <ItemSelected />
                </div>
            </div>
        </AppProvider>
    </div>
  );
}

export default App;
