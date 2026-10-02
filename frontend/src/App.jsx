import './styles/App.css'
import { Card } from './exercises/01-profile-card-props/Card'

function App() {
    const profiles = [{
      id: 1,
      name: "Mark",
      title: "Front-End developer",
      bio: "I like to work with different front-end technologies and play video games."
    }];
  return (
    <div className="flex-container">
      {profiles.map(profile =>(
        <Card key={profile.id} name={profile.name} title={profile.title} bio={profile.bio} />
      ))}
    </div>
  )
}

export default App
