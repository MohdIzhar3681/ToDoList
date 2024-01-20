import React, { useState } from "react";
import ToDoList from './ToDoList.jsx';

const App = () => {

    const [item, setItem] = useState("");
    const [input, setInput] = useState([]);

    const itemEvent = (event) => {
        // console.log(event.target.value);
        setItem(event.target.value);

    }

    const listOfItem = () => {
        setInput((oldItems) => {
            return [...oldItems, item];
        });
        setItem("");
    };

    const deleteItem = (id) => {
        console.log('deleted');

        setInput((oldItems) => {
            return oldItems.filter((arrayElem,index) => {
                return index !== id ;
            });
        });

    }

    return (

        <>
            <div className="main_div">
                <div className="center_div">
                    <br />
                    <h1>ToDo List</h1>
                    <br />
                    <input type="text" placeholder="Add a Items"
                        value={item}
                        onChange={itemEvent} />
                    <button onClick={listOfItem}> + </button>

                    <ol>
                        {/* <li>{item}</li> */}

                        {input.map((itemval, index) => {
                            return (<ToDoList
                                key={index}
                                id={index}
                                text={itemval}
                                onSelect={deleteItem} />

                            );

                        })}
                    </ol>
                </div>

            </div>

        </>
    );
};


export default App;