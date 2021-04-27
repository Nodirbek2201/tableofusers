function Todo({ item }) {
    const checkbox = {
        transform: 'scale(1.5)'
    }
    return (

        <div className="container">
            <div className="row border m-1 p-1  bg-light">
                <div className="col-md-auto">
                    <h4>{item.id}</h4>
                </div>
                <div className="col-md-auto">
                    <input style={checkbox} id={'checkbox' + item.id} type="checkbox" checked={item.completed} />
                </div>
                <div className="col-md-10">
                    <h5><label htmlFor={'checkbox' + item.id}>{item.title}</label></h5>
                </div>
            </div>
        </div>
    )
}

export default Todo