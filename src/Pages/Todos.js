import { useEffect, useState } from "react";
import { doGet } from "../service";
import Todo from "../Components/Todo";
import Selectuser from '../Components/SelectUser'

function Todos() {
    const [todos, setTodos] = useState([]);
    const [data, setData] = useState([]);
    const [currentUser, setCurrentUser] = useState('');
    const [completed, setCompleted] = useState(false);
    const [isFiltering,setisFiltering] = useState(false);
    const [page, setPage] = useState(1)

    function filter(userId, completed, page) {
        return data.filter((item,index) =>
            (item.userId == userId || !userId) &&
            (item.completed === completed || !isFiltering)
        ).filter((item,index)=> index>=(page-1)*10 && index<page*10)
    }

    async function getTodos() {
        const res = await doGet("/todos");
        setData(res)
        setTodos(res.filter((item, index) => index >= 0 && index < 10))
    }

    useEffect(() => {
        getTodos();
    }, []);

    function onChangefilter(userId) {
        const res = filter(userId, completed,page)
        setTodos(res);
        setCurrentUser(userId);
    }

    function handleCheck(event) {
        let checked = event.target.checked;
        const res = filter(currentUser, checked,page)
        setCompleted(checked)
        setTodos(res)
        setisFiltering(true)
    }

    function reset() {
        setTodos(data)
        setCurrentUser('')
        setCompleted(false)
        setisFiltering(false)
    }

    function onNext() {
        setPage(prevState => prevState + 1)
    }
    function onPrev() {
        setPage(prevState => prevState - 1)
    }

    useEffect(() => {
        const res = filter(currentUser, completed, page)
        setTodos(res)
    }, [page])

    return (
        <div className="container">
            <h1 className="text-center mb-2">Todos</h1>
            <div className="row">
                <div className="col-md-3">
                    <Selectuser onChange={onChangefilter}/>
                </div>
                <div className="col-md-3">
                    completed
                    <input style={{ transform: 'scale(1.8)' }} className='mx-4' type="checkbox" onChange={handleCheck} checked={completed} />
                </div>
                <div className="col-md-5">
                    <button className="btn btn-outline-primary" onClick={reset}>Reset</button>
                </div>
            </div>
            {todos.map((item, index) => (
                <Todo key={index} item={item} />
            ))}

            <div className="row my-4 mx-5">
                <div className="col-md-3">
                    <button className="btn btn-outline-primary btn-block" onClick={onPrev}>{'<<'}Prev</button>
                </div>
                <div className="col-md-3">
                    <h1 className="text-center">{page}</h1>
                </div>
                <div className="col-md-3">
                    <button className="btn btn-outline-primary btn-block" onClick={onNext}>Next{'>>'}</button>
                </div>
            </div>
        </div>
    );
}

export default Todos;
