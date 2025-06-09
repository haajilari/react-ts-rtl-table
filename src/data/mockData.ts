export interface Employee {
  id: number;
  name: string;
  position: string;
  department: string;
  salary: number;
  age: number;
  email: string;
  phone: string;
  hireDate: string;
  status: 'فعال' | 'غیرفعال' | 'مرخصی';
  city: string;
  experience: number;
  rating: number;
}

export const mockEmployees: Employee[] = [
  {
    id: 1,
    name: 'علی احمدی',
    position: 'مدیر فنی',
    department: 'فناوری اطلاعات',
    salary: 25000000,
    age: 32,
    email: 'ali.ahmadi@company.ir',
    phone: '09121234567',
    hireDate: '1401/03/15',
    status: 'فعال',
    city: 'تهران',
    experience: 8,
    rating: 4.8
  },
  {
    id: 2,
    name: 'فاطمه محمدی',
    position: 'توسعه‌دهنده ارشد',
    department: 'فناوری اطلاعات',
    salary: 18000000,
    age: 28,
    email: 'fateme.mohammadi@company.ir',
    phone: '09129876543',
    hireDate: '1401/06/20',
    status: 'فعال',
    city: 'اصفهان',
    experience: 5,
    rating: 4.6
  },
  {
    id: 3,
    name: 'رضا کریمی',
    position: 'مدیر فروش',
    department: 'فروش و بازاریابی',
    salary: 22000000,
    age: 35,
    email: 'reza.karimi@company.ir',
    phone: '09135678901',
    hireDate: '1400/11/10',
    status: 'فعال',
    city: 'مشهد',
    experience: 12,
    rating: 4.9
  },
  {
    id: 4,
    name: 'مریم صادقی',
    position: 'محاسب ارشد',
    department: 'مالی',
    salary: 16000000,
    age: 30,
    email: 'maryam.sadeghi@company.ir',
    phone: '09147890123',
    hireDate: '1401/09/05',
    status: 'مرخصی',
    city: 'شیراز',
    experience: 7,
    rating: 4.4
  },
  {
    id: 5,
    name: 'حسن زارعی',
    position: 'مدیر منابع انسانی',
    department: 'منابع انسانی',
    salary: 20000000,
    age: 38,
    email: 'hassan.zarei@company.ir',
    phone: '09156789012',
    hireDate: '1399/04/12',
    status: 'فعال',
    city: 'تبریز',
    experience: 15,
    rating: 4.7
  },
  {
    id: 6,
    name: 'زهرا موسوی',
    position: 'طراح رابط کاربری',
    department: 'فناوری اطلاعات',
    salary: 15000000,
    age: 26,
    email: 'zahra.mousavi@company.ir',
    phone: '09167890123',
    hireDate: '1402/01/08',
    status: 'فعال',
    city: 'اهواز',
    experience: 3,
    rating: 4.3
  },
  {
    id: 7,
    name: 'امیر حسینی',
    position: 'تحلیلگر سیستم',
    department: 'فناوری اطلاعات',
    salary: 17000000,
    age: 29,
    email: 'amir.hosseini@company.ir',
    phone: '09178901234',
    hireDate: '1401/12/15',
    status: 'فعال',
    city: 'کرج',
    experience: 6,
    rating: 4.5
  },
  {
    id: 8,
    name: 'سارا جعفری',
    position: 'مدیر پروژه',
    department: 'مدیریت پروژه',
    salary: 21000000,
    age: 33,
    email: 'sara.jafari@company.ir',
    phone: '09189012345',
    hireDate: '1400/08/22',
    status: 'فعال',
    city: 'تهران',
    experience: 9,
    rating: 4.8
  },
  {
    id: 9,
    name: 'محمد رضایی',
    position: 'مسئول کیفیت',
    department: 'کیفیت',
    salary: 14000000,
    age: 31,
    email: 'mohammad.rezaei@company.ir',
    phone: '09190123456',
    hireDate: '1401/05/30',
    status: 'غیرفعال',
    city: 'قم',
    experience: 8,
    rating: 4.2
  },
  {
    id: 10,
    name: 'نسرین علی‌پور',
    position: 'مسئول روابط عمومی',
    department: 'روابط عمومی',
    salary: 13000000,
    age: 27,
    email: 'nasrin.alipour@company.ir',
    phone: '09201234567',
    hireDate: '1402/02/14',
    status: 'فعال',
    city: 'کرمان',
    experience: 4,
    rating: 4.1
  },
  {
    id: 11,
    name: 'داوود نجفی',
    position: 'مهندس شبکه',
    department: 'فناوری اطلاعات',
    salary: 16500000,
    age: 34,
    email: 'davood.najafi@company.ir',
    phone: '09212345678',
    hireDate: '1400/10/03',
    status: 'فعال',
    city: 'اردبیل',
    experience: 10,
    rating: 4.6
  },
  {
    id: 12,
    name: 'لیلا باقری',
    position: 'کارشناس بازاریابی',
    department: 'فروش و بازاریابی',
    salary: 12000000,
    age: 25,
    email: 'leila.bagheri@company.ir',
    phone: '09223456789',
    hireDate: '1402/04/18',
    status: 'فعال',
    city: 'رشت',
    experience: 2,
    rating: 3.9
  },
  {
    id: 13,
    name: 'بهروز میرزایی',
    position: 'مدیر عملیات',
    department: 'عملیات',
    salary: 23000000,
    age: 40,
    email: 'behrooz.mirzaee@company.ir',
    phone: '09234567890',
    hireDate: '1398/07/25',
    status: 'فعال',
    city: 'یزد',
    experience: 18,
    rating: 4.9
  },
  {
    id: 14,
    name: 'شیما حسن‌زاده',
    position: 'کارشناس حسابداری',
    department: 'مالی',
    salary: 11000000,
    age: 24,
    email: 'shima.hasanzadeh@company.ir',
    phone: '09245678901',
    hireDate: '1402/06/12',
    status: 'فعال',
    city: 'ساری',
    experience: 1,
    rating: 3.8
  },
  {
    id: 15,
    name: 'کامران شریفی',
    position: 'توسعه‌دهنده موبایل',
    department: 'فناوری اطلاعات',
    salary: 19000000,
    age: 30,
    email: 'kamran.sharifi@company.ir',
    phone: '09256789012',
    hireDate: '1401/01/20',
    status: 'مرخصی',
    city: 'همدان',
    experience: 7,
    rating: 4.7
  }
];

export const departmentStats = [
  { department: 'فناوری اطلاعات', count: 6, avgSalary: 17166667 },
  { department: 'فروش و بازاریابی', count: 2, avgSalary: 17000000 },
  { department: 'مالی', count: 2, avgSalary: 13500000 },
  { department: 'منابع انسانی', count: 1, avgSalary: 20000000 },
  { department: 'مدیریت پروژه', count: 1, avgSalary: 21000000 },
  { department: 'کیفیت', count: 1, avgSalary: 14000000 },
  { department: 'روابط عمومی', count: 1, avgSalary: 13000000 },
  { department: 'عملیات', count: 1, avgSalary: 23000000 }
];