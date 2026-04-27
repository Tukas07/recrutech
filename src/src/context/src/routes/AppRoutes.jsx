import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import Layout       from '../components/layout/Layout'

// Auth
import Login    from '../pages/auth/Login'
import Register from '../pages/auth/Register'

// Legal
import PrivacyPolicy  from '../pages/legal/PrivacyPolicy'
import TermsOfUse     from '../pages/legal/TermsOfUse'
import CookiesPolicy  from '../pages/legal/CookiesPolicy'

// App
import Dashboard         from '../pages/Dashboard'
import JobList           from '../pages/Jobs/JobList'
import JobCreate         from '../pages/Jobs/JobCreate'
import JobDetail         from '../pages/Jobs/JobDetail'
import Upload            from '../pages/Candidates/Upload'
import Processing        from '../pages/Candidates/Processing'
import CandidateRanking  from '../pages/Candidates/CandidateRanking'
import CandidateDetail   from '../pages/Candidates/CandidateDetail'
import Analytics         from '../pages/Analytics'
import Notifications     from '../pages/Notifications'
import Settings          from '../pages/Settings/Settings'
import Privacy           from '../pages/Settings/Privacy'
import Users             from '../pages/Settings/Users'
import AIModels          from '../pages/Settings/AIModels'
import Integrations      from '../pages/Settings/Integrations'
import ActivityLog       from '../pages/Settings/ActivityLog'

function PrivateRoute({ children }) {
  const { user } = useAuth()
  return user ? children : <Navigate to="/login" replace />
}

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Públicas */}
        <Route path="/login"          element={<Login />} />
        <Route path="/register"       element={<Register />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-use"   element={<TermsOfUse />} />
        <Route path="/cookies-policy" element={<CookiesPolicy />} />

        {/* Privadas */}
        <Route path="/" element={<PrivateRoute><Layout /></PrivateRoute>}>
          <Route index                              element={<Navigate to="/dashboard" replace />} />
          <Route path="dashboard"                   element={<Dashboard />} />
          <Route path="jobs"                        element={<JobList />} />
          <Route path="jobs/create"                 element={<JobCreate />} />
          <Route path="jobs/:jobId"                 element={<JobDetail />} />
          <Route path="upload"                      element={<Upload />} />
          <Route path="processing"                  element={<Processing />} />
          <Route path="candidates/ranking/:jobId"   element={<CandidateRanking />} />
          <Route path="candidates/:candidateId"     element={<CandidateDetail />} />
          <Route path="analytics"                   element={<Analytics />} />
          <Route path="notifications"               element={<Notifications />} />
          <Route path="settings"                    element={<Settings />} />
          <Route path="settings/privacy"            element={<Privacy />} />
          <Route path="settings/users"              element={<Users />} />
          <Route path="settings/ai-models"          element={<AIModels />} />
          <Route path="settings/integrations"       element={<Integrations />} />
          <Route path="settings/activity-log"       element={<ActivityLog />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
