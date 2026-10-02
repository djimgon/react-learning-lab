import './styles/App.css'
import { Card } from './exercises/01-profile-card-props/Card'

function App() {
  return (
    <div className="flex-container">
      <Card
        name="Mark"
        title="Front-End developer"
        bio="I like to work with different front-end technologies and play video games."
      />
    </div>
  )
}

export default App
