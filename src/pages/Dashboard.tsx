import { BookOpen, Clock, Target, Trophy } from 'lucide-react';
import DashboardSidebar from '../components/DashboardSidebar';

export default function Dashboard() {
  const stats = [
    { icon: BookOpen, label: 'Active Courses', value: '3' },
    { icon: Clock, label: 'Hours Learned', value: '24' },
    { icon: Target, label: 'Goals Completed', value: '8' },
    { icon: Trophy, label: 'Certificates', value: '2' },
  ];

  const upcomingSessions = [
    {
      title: 'Web Development Basics',
      mentor: 'John Smith',
      time: 'Today, 2:00 PM',
      duration: '1 hour',
    },
    {
      title: 'React Advanced Concepts',
      mentor: 'Sarah Johnson',
      time: 'Tomorrow, 10:00 AM',
      duration: '1.5 hours',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <DashboardSidebar />
      
      <div className="pl-64">
        <main className="py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>

            {/* Stats */}
            <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={index}
                    className="bg-white overflow-hidden shadow rounded-lg"
                  >
                    <div className="p-5">
                      <div className="flex items-center">
                        <div className="flex-shrink-0">
                          <Icon className="h-6 w-6 text-gray-400" />
                        </div>
                        <div className="ml-5 w-0 flex-1">
                          <dl>
                            <dt className="text-sm font-medium text-gray-500 truncate">
                              {stat.label}
                            </dt>
                            <dd className="text-lg font-semibold text-gray-900">
                              {stat.value}
                            </dd>
                          </dl>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Upcoming Sessions */}
            <div className="mt-8">
              <h2 className="text-lg font-medium text-gray-900">Upcoming Sessions</h2>
              <div className="mt-4 grid gap-5 sm:grid-cols-2">
                {upcomingSessions.map((session, index) => (
                  <div
                    key={index}
                    className="bg-white overflow-hidden shadow rounded-lg"
                  >
                    <div className="p-5">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-lg font-medium text-gray-900">
                            {session.title}
                          </h3>
                          <p className="mt-1 text-sm text-gray-500">
                            with {session.mentor}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium text-gray-900">
                            {session.time}
                          </p>
                          <p className="mt-1 text-sm text-gray-500">
                            {session.duration}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}