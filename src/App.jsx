import Navbar from './components/Navbar'
import Tasks from './components/Tasks'

function App() {

  return (
    <>
      <div className='bg-gradient-to-tl from-slate-50 to-slate-200 dark:bg-gradient-to-r dark:from-slate-900 dark:to-slate-800 dark:text-white  flex flex-col w-full min-h-screen font-reddit text-zinc-700 ' >
        <Navbar />
        <Tasks />
      </div>
    </>
  )
}

export default App
