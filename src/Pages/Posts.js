import { useEffect, useState } from "react";
import { doGet, doPost } from "../service"
import Selectuser from '../Components/SelectUser'
import ModalPost from '../Components/ModalPost'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const cardHeader = {
  height: '100px',
  background: '#76AFFE'
}

function Posts({ history }) {
  <ToastContainer />
  function filter(userId,) {
    return data.filter(item => (item.userId == userId) || !userId)
  }

  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([]);
  const [posts, setPosts] = useState([]);
  const [modalVisible, setmodalVisible] = useState(false);
  const [user, setUser] = useState(false)


  async function getPosts() {
    const res = await doGet('/posts')
    setPosts([...res])
    setData([...res])
  }

  async function savePost(data) {
    const res = await doPost('/posts', data)
    setLoading(false)
    setmodalVisible(false)
    toast('Malumot saqlandi')
    setData(prev => {
      prev.unshift(res)
      setPosts(...prev)
      return prev
    })

    setPosts(prev => {
      prev.unshift(res)
      setPosts(...prev)
      return prev
    })
  }

  useEffect(() => {
    getPosts()
  }, []);

  function openOnePost(id) {
    history.push('/posts/' + id)
  }

  function onChangeUser(userId) {
    const res = filter(userId)
    setPosts(res)
  }

  function toggleModal() {
    setmodalVisible(prev => !prev)
  }

  function onSubmit(data) {
    setLoading(true)
    data.user = user
    savePost(data)
  }

  function changeUser(id) {
    setUser(id)
  }

  return (
    <div className="container-fluid post-page">
      <h1 className="text-center">Posts</h1>
      <div className="row">

      </div>
      <div className="row">
        <div className="col-md-3">
          <Selectuser onChange={onChangeUser} />
        </div>
        <div className="col-md-2">
          <button className="btn btn-outline-primary" onClick={toggleModal}>Add Posts</button>
        </div>
      </div>
      <div className="row">
        {posts.map((item, index) => (
          <div key={index} className="col-md-3" onClick={() => openOnePost(item.id)}>
            <div className="card border border-primary m-2 post-card">
              <div className="card-header border-primary text-white text-left" style={cardHeader}>{item.title}</div>
              <div className="card-body">{item.body}</div>
            </div>
          </div>
        ))}
      </div>
      <ModalPost loading={loading} changeUser={changeUser} isOpen={modalVisible} toggle={toggleModal} save={onSubmit} />
    </div>
  );
}

export default Posts;
