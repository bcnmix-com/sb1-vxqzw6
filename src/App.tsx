import Header from './components/Header';
import Hero from './components/Hero';
import PopularExperiences from './components/PopularExperiences';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <PopularExperiences />
      </main>
    </div>
  );
}

export default App;