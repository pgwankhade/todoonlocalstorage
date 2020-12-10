import react, { useState, useEffect } from 'react';

function Todo() {
    const [addtask, setAddtask] = useState("");
    const [tasklist, setTasklist] = useState([]);
    const onInputChange = (e) => {
        setAddtask(e.target.value)
    }

    const onaddTask = () => {
        const data = localStorage.getItem("tasklist")
        if (data) {
            const updated = [...JSON.parse(data), addtask]
            setTasklist(updated)
            localStorage.setItem("tasklist", JSON.stringify(updated))
        }
        else {
            setTasklist([addtask])
            localStorage.setItem("tasklist", JSON.stringify([addtask]))
        }
    }

    const deleteTask = (item) => {
        const filtered = tasklist.filter(task => task !== item)
        const data = localStorage.setItem("tasklist", JSON.stringify(filtered))
        setTasklist([...filtered])
    }


    return (
        <div>
            <div className=" App flex items-center mt3 mw5 mw7-ns center bg-light-gray pa2 ph5-ns ">
                <input
                  onChange={onInputChange}
                  placeholder="add task.."
                  className="center pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="text"
                  name="name"
                  id="name"
                />
                <button 
                onClick={onaddTask}
                className="ml2 mt2 f6 link dim ph3 pv2 mb2 dib white bg-dark-blue"
                >Add</button>
              </div> 
            {
                tasklist.map((item, i) => (
                    <div className="App2">
                        <ul className=" list pl0 mt0 measure center">
                            <li className=" flex items-center lh-copy pa2 ph0-l bb b--black-10">
                                <div className="pl3 flex-auto">
                                    <span className="f6 db black-70">{tasklist[i]}</span>
                                </div>
                                <div >
                                    <button onClick={() =>deleteTask(tasklist[i])} className="mr4 f6 pointer link dim ph3 pv2 mb2 dib white bg-dark-blue" type="button" id={i} value="task">Done</button>
                                </div>
                            </li>
                        </ul>

                    </div>


                ))
            }

        </div>

    );

}

export default Todo;