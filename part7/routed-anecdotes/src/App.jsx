import { useState } from 'react'
import {BrowserRouter as Router,Routes,Route,Link, useParams, useNavigate} from 'react-router-dom'

import { useField} from './hooks'


const Anecdote = ({anecdotes}) => {

  const id=useParams().id;

  const anacodeElement= anecdotes.find((element)=>element.id==Number(id))
 
  return (
    <div>
      <h2>{anacodeElement.content}</h2>
      <p>{anacodeElement.author}</p>
      <p>{anacodeElement.info}</p>
     
    </div>
  )
}

const AnecdoteList = ({ anecdotes }) => (
  <div>
    <h2>Anecdotes</h2>
    <ul>
      {anecdotes.map(anecdote => <li key={anecdote.id} >   <Link to={`/anecdote/${anecdote.id}`}>{anecdote.content}</Link> </li>)}
    </ul>
  </div>
)

const About = () => (
  <div>
    <h2>About anecdote app</h2>
    <p>According to Wikipedia:</p>

    <em>An anecdote is a brief, revealing account of an individual person or an incident.
      Occasionally humorous, anecdotes differ from jokes because their primary purpose is not simply to provoke laughter but to reveal a truth more general than the brief tale itself,
      such as to characterize a person by delineating a specific quirk or trait, to communicate an abstract idea about a person, place, or thing through the concrete details of a short narrative.
      An anecdote is "a story with a point."</em>

    <p>Software engineering is full of excellent anecdotes, at this app you can find the best and add more.</p>
  </div>
)

const Footer = () => (
  <div>
    Anecdote app for <a href='https://fullstackopen.com/'>Full Stack Open</a>.

    See <a href='https://github.com/fullstack-hy2020/routed-anecdotes/blob/master/src/App.js'>https://github.com/fullstack-hy2020/routed-anecdotes/blob/master/src/App.js</a> for the source code.
  </div>
)

const CreateNew = (props) => {

  const navigate= useNavigate();
 
  const name = useField('content')
  const authorname = useField('author')
  const infoname = useField('info')


  const handleReset = (e) => {
    e.preventDefault(); // Prevent the default form action
    name.reset();
    authorname.reset();
    infoname.reset();
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    props.addNew({
      content:name.value,
      author:authorname.value,
      info:infoname.value,
      votes: 0
    })
    props.setNotification(`A new anecdote "${name.value}" created!`);
    

    setTimeout(() => {
      props.setNotification('');
    }, 5000);
    navigate('/')
   
  }
  

  return (
    <div>
      <h2>create a new anecdote</h2>
      <form onSubmit={handleSubmit}>
        <div>
          content
          <input {...name} />
        </div>
        <div>
          author
          <input {...authorname} />
        </div>
        <div>
          url for more info
          <input {...infoname} />
        </div>
        <button>create</button>
        <button type="button" onClick={handleReset}>reset</button>
      </form>
    </div>
  )

}

const App = () => {
  const [anecdotes, setAnecdotes] = useState([
    {
      content: 'If it hurts, do it more often',
      author: 'Jez Humble',
      info: 'https://martinfowler.com/bliki/FrequencyReducesDifficulty.html',
      votes: 0,
      id: 1
    },
    {
      content: 'Premature optimization is the root of all evil',
      author: 'Donald Knuth',
      info: 'http://wiki.c2.com/?PrematureOptimization',
      votes: 0,
      id: 2
    }
  ])
  const padding = {
    paddingRight: 5
  }

  const [notification, setNotification] = useState('')

  const addNew = (anecdote) => {
    anecdote.id = Math.round(Math.random() * 10000)
    setAnecdotes(anecdotes.concat(anecdote))
  }

  const anecdoteById = (id) =>
    anecdotes.find(a => a.id === id)

  const vote = (id) => {
    const anecdote = anecdoteById(id)

    const voted = {
      ...anecdote,
      votes: anecdote.votes + 1
    }

    setAnecdotes(anecdotes.map(a => a.id === id ? voted : a))
  }

  return (
    <Router>
      <h1>Software anecdotes</h1>

      <Link style={padding} to='/'>anecdotes</Link>
<Link style={padding} to='/create'>create new</Link>
<Link style={padding} to='/about'>about</Link>

<p>{notification}</p>

      <Routes>

        <Route path='/' element={ <AnecdoteList anecdotes={anecdotes} />}></Route>
        <Route path='/create' element={  <CreateNew addNew={addNew} setNotification={setNotification} />}></Route>
        <Route path='/about' element={  <About /> }></Route>
        <Route path="/anecdote/:id" element={<Anecdote anecdotes={anecdotes} />} />
      </Routes>




    
     
     
    
      <Footer />
    </Router>
  )
}

export default App