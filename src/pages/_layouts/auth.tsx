import { Outlet } from 'react-router-dom'

export function AuthLayout() {
  return (
    <div>
      <p>AuthLayout</p>
      <div>
        <Outlet />
      </div>
    </div>
  )
}
