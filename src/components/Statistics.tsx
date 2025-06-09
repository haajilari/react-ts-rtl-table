import React from 'react';
import { Users, TrendingUp, DollarSign, Award } from 'lucide-react';
import type { Employee } from '../data/mockData';

interface StatisticsProps {
  data: Employee[];
}

const Statistics: React.FC<StatisticsProps> = ({ data }) => {
  const totalEmployees = data.length;
  const activeEmployees = data.filter(emp => emp.status === 'فعال').length;
  const averageSalary = data.reduce((sum, emp) => sum + emp.salary, 0) / data.length;
  const averageRating = data.reduce((sum, emp) => sum + emp.rating, 0) / data.length;
  
  const departmentCounts = data.reduce((acc, emp) => {
    acc[emp.department] = (acc[emp.department] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const topDepartment = Object.entries(departmentCounts)
    .sort(([,a], [,b]) => b - a)[0];

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('fa-IR', {
      style: 'currency',
      currency: 'IRR',
      maximumFractionDigits: 0
    }).format(value);
  };

  const stats = [
    {
      title: 'کل کارمندان',
      value: totalEmployees.toLocaleString('fa-IR'),
      icon: Users,
      color: 'bg-blue-500',
      subtitle: `${activeEmployees} نفر فعال`
    },
    {
      title: 'میانگین حقوق',
      value: formatCurrency(averageSalary),
      icon: DollarSign,
      color: 'bg-green-500',
      subtitle: 'ماهانه'
    },
    {
      title: 'بهترین دپارتمان',
      value: topDepartment ? topDepartment[0] : 'نامشخص',
      icon: TrendingUp,
      color: 'bg-purple-500',
      subtitle: topDepartment ? `${topDepartment[1]} نفر` : ''
    },
    {
      title: 'میانگین امتیاز',
      value: averageRating.toFixed(1),
      icon: Award,
      color: 'bg-yellow-500',
      subtitle: 'از ۵ امتیاز'
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow duration-300"
        >
          <div className="flex items-center justify-between mb-4">
            <div className={`p-3 rounded-full ${stat.color} bg-opacity-10`}>
              <stat.icon className={`text-2xl ${stat.color.replace('bg-', 'text-')}`} size={24} />
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-medium text-gray-600 mb-1">{stat.title}</h3>
            <p className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</p>
            {stat.subtitle && (
              <p className="text-sm text-gray-500">{stat.subtitle}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Statistics;