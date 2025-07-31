import Search from './components/Search';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="text-center py-4 bg-white shadow">
        <h1 className="text-2xl font-bold">GitHub User Search</h1>
      </header>
      <main>
        <Search />
      </main>
    </div>
  );
}

export default App;
