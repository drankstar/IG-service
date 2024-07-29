import { Suspense } from "react"
import Home from "./pages/Home/Home"
import { Route, Routes } from "react-router-dom"
import Panting from "./pages/Panting/Panting"
import Polishing from "./pages/Polishing/Polishing"
import ReplacingParts from "./pages/ReplacingParts/ReplacingParts"
import BodyRepair from "./pages/BodyRepair/BodyRepair"
import Loyout from "./components/Loyout/Loyout"

function App() {
  return (
    <>
      <Suspense>
        <Routes>
          <Route path='/' element={<Loyout />}>
            <Route index element={<Home />} />
            <Route path='/panting' element={<Panting />} />
            <Route path='/polising' element={<Polishing />} />
            <Route path='/replacing' element={<ReplacingParts />} />
            <Route path='/body' element={<BodyRepair />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  )
}

export default App
