import { Outlet } from 'react-router-dom'

export function AppLayout() {
  return (
    <div>
      <p>Header</p>
      <div>
        <Outlet />
      </div>
    </div>
  )
}
