import { NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import {
  HomeIcon, BriefcaseIcon, UserGroupIcon,
  ChartBarIcon, BellIcon, Cog6ToothIcon,
  ArrowUpTrayIcon, ArrowRightOnRectangleIcon,
} from '@heroicons/react/24/outline'

const links = [
  { to: '/dashboard',  label: 'Dashboard',   icon: HomeIcon },
  { to: '/jobs',       label: 'Vagas',        icon: BriefcaseIcon },
  { to: '/upload',     label: 'Upload',       icon: ArrowUpTrayIcon },
  { to: '/analytics',  label: 'Analytics',    icon: ChartBarIcon },
  { to: '/notifications', label: 'Notificações', icon: BellIcon },
  { to: '/settings',   label: 'Configurações',icon: Cog6ToothIcon },
]

export default function Sidebar() {
  const { logout } = useAuth()
  const navigate   = useNavigate()

  const handleLogout = async () => {
    await logout()
    navigate('/login')
  }

  return (
    <aside className="w-64 bg-white dark:bg-dark-800 border-r border-gray-200 dark:border-gray-700 flex flex-col">
      {/* Logo */}
      <div className="flex items-center gap-2 px-6 py-5 border-b border-gray-200 dark:border-gray-700">
        <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-sm">R</span>
        </div>
        <span className="font-bold text-gray-900 dark:text-white text-lg">
          Recrutech <span className="text-primary-600">AI</span>
        </span>
      </div>

      {/* Links */}
      <nav className="flex-1 px-3 py-4 space-y-1">
        {links.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `sidebar-link ${isActive ? 'active' : ''}`
            }
          >
            <Icon className="w-5 h-5" />
            {label}
          </NavLink>
        ))}
      </nav>

      {/* Logout */}
      <div className="px-3 py-4 border-t border-gray-200 dark:border-gray-700">
        <button
          onClick={handleLogout}
          className="sidebar-link w-full text-red-500 hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-900/20"
        >
          <ArrowRightOnRectangleIcon className="w-5 h-5" />
          Sair
        </button>
      </div>
    </aside>
  )
}
