import { useEffect, useState } from "react";
import {doGet} from '../service'

const card ={
    height:'200px'
}

function OnePost({history,match,location}){

    const [post,setPost] = useState('')
    const [user,setUser] = useState('')

    useEffect(() => {
        getOnePost(match.params.id)
    },[])

    async function getOnePost(id) {
        const onePost = await doGet('/posts/' + id)
        setPost(onePost)
        const oneUser = await doGet('/users/' + onePost.userId)
        setUser(oneUser)
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <div className="card border border-primary" style={card}>
                        <div className="card-header border-primary text-left" style={{background: '#76AFFE'}}>
                            {user.name}
                        </div>
                        <div className="card-body">
                            {user.phone}
                        </div>
                    </div>
                </div>
                <div className="col-md-9">
                    <div className="card border border-primary" style={card}>
                        <div className="card-header border-primary text-left" style={{background: '#76AFFE'}}>
                            {post.id+'. '+post.title}
                        </div>
                        <div className="card-body">
                            {post.body}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default OnePost