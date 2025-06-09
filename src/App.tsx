import React, { useState, useEffect } from 'react';
import DataTable from './components/DataTable';
import Statistics from './components/Statistics';
import PWAInstaller from './components/PWAInstaller';
import { mockEmployees, type Employee } from './data/mockData';
import { Database, RefreshCw, Users, Settings } from 'lucide-react';

function App() {
  const [employees, setEmployees] = useState<Employee[]>(mockEmployees);
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(null);
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [lastUpdated, setLastUpdated] = useState(new Date());

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const handleRowClick = (employee: Employee) => {
    setSelectedEmployee(employee);
  };

  const handleDataChanged = (newData: Employee[]) => {
    setEmployees(newData);
    setLastUpdated(new Date());
  };

  const refreshData = () => {
    setEmployees([...mockEmployees]);
    setLastUpdated(new Date());
  };

  return (
    <div className="min-h-screen bg-gray-50 font-persian">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary-100 rounded-lg">
                <Database className="text-primary-600" size={24} />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  سیستم مدیریت کارمندان
                </h1>
                <p className="text-sm text-gray-600">
                  جدول داده‌های پیشرفته با قابلیت‌های کامل
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              {/* Online/Offline Status */}
              <div className={`flex items-center gap-2 px-3 py-1 rounded-full text-sm ${
                isOnline 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-red-100 text-red-800'
              }`}>
                <div className={`w-2 h-2 rounded-full ${
                  isOnline ? 'bg-green-500' : 'bg-red-500'
                }`} />
                {isOnline ? 'آنلاین' : 'آفلاین'}
              </div>
              
              {/* Last Updated */}
              <div className="hidden sm:flex items-center gap-2 text-sm text-gray-600">
                <RefreshCw size={14} />
                آخرین بروزرسانی: {lastUpdated.toLocaleTimeString('fa-IR')}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Statistics */}
        <Statistics data={employees} />

        {/* Data Table */}
        <DataTable
          data={employees}
          title="لیست کارمندان شرکت"
          height={600}
          onRowClick={handleRowClick}
          onDataChanged={handleDataChanged}
        />

        {/* Employee Details Modal */}
        {selectedEmployee && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-gray-900">جزئیات کارمند</h3>
                  <button
                    onClick={() => setSelectedEmployee(null)}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    ×
                  </button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        نام و نام خانوادگی
                      </label>
                      <p className="text-lg font-semibold text-gray-900">
                        {selectedEmployee.name}
                      </p>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        سمت
                      </label>
                      <p className="text-gray-900">{selectedEmployee.position}</p>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        دپارتمان
                      </label>
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                        {selectedEmployee.department}
                      </span>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        وضعیت
                      </label>
                      <span className={`px-3 py-1 rounded-full text-sm ${
                        selectedEmployee.status === 'فعال' 
                          ? 'bg-green-100 text-green-800'
                          : selectedEmployee.status === 'غیرفعال'
                          ? 'bg-red-100 text-red-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {selectedEmployee.status}
                      </span>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        حقوق ماهانه
                      </label>
                      <p className="text-lg font-semibold text-green-600">
                        {new Intl.NumberFormat('fa-IR', {
                          style: 'currency',
                          currency: 'IRR',
                          maximumFractionDigits: 0
                        }).format(selectedEmployee.salary)}
                      </p>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        سن
                      </label>
                      <p className="text-gray-900">{selectedEmployee.age} سال</p>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        سابقه کاری
                      </label>
                      <p className="text-gray-900">{selectedEmployee.experience} سال</p>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        امتیاز عملکرد
                      </label>
                      <div className="flex items-center gap-2">
                        <span className="text-yellow-500">
                          {'★'.repeat(Math.floor(selectedEmployee.rating))}
                          {'☆'.repeat(5 - Math.floor(selectedEmployee.rating))}
                        </span>
                        <span className="text-gray-600">
                          ({selectedEmployee.rating}/5)
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      ایمیل
                    </label>
                    <a 
                      href={`mailto:${selectedEmployee.email}`}
                      className="text-blue-600 hover:text-blue-800 underline"
                    >
                      {selectedEmployee.email}
                    </a>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      تلفن
                    </label>
                    <a 
                      href={`tel:${selectedEmployee.phone}`}
                      className="text-blue-600 hover:text-blue-800 underline font-mono"
                    >
                      {selectedEmployee.phone}
                    </a>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        تاریخ استخدام
                      </label>
                      <p className="text-gray-900">{selectedEmployee.hireDate}</p>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        شهر
                      </label>
                      <p className="text-gray-900">{selectedEmployee.city}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* PWA Installer */}
      <PWAInstaller />

      {/* Footer */}
      <footer className="bg-white border-t mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-gray-600">
              <Users size={16} />
              <span className="text-sm">
                سیستم مدیریت کارمندان - نسخه ۱.۰.۰
              </span>
            </div>
            
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <span>ساخته شده با React و TypeScript</span>
              <span>•</span>
              <span>PWA Ready</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;