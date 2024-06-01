import { Routes, Route, Navigate } from "react-router-dom"
import { MainView } from "../features/mainview/MainView"

export const AppRouter = () => {

  return (
    <Routes>
      <Route path="amelia" element={<MainView date={new Date(2024, 3, 14, 5, 21)} />} />
      <Route path="isor" element={<MainView date={new Date(1991, 5, 9, 5, 21)} />} />
      <Route path="julo" element={<MainView date={new Date(1990, 9, 8, 9, 30)} />} />
      <Route path="*" element={<Navigate to={"amelia"} />} />
    </Routes>
  )
}
