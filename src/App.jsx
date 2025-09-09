
import { Achievements,Projects, Contacts, Footer, Header, Profile, AllProjects,Education } from "./Component";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="min-h-screen text-white font-inter flex flex-col items-center justify-center" style={{ background: 'radial-gradient(at 0% 0%, #121212 0%, #09080a 50%, #0f0f2a 100%)', backgroundAttachment: 'fixed' }}>
      <Header />
      <main className="w-full max-w-6xl mx-auto md:px-8 py-12 flex flex-col items-center justify-center">
        <Routes>
          <Route path="/" element={
            <>
              <Profile />
              <Projects />
              <Achievements />
              <Education />
              <Contacts />
            </>
          } />
          <Route path="/projects" element={<AllProjects />} />
          {/* <Route path="/blog" element={<BlogPosts />} /> */}          
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
