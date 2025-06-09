import React, { ReactElement, useEffect, useRef, useState } from "react";
import { TabulatorFull as Tabulator } from "tabulator-tables";
import "tabulator-tables/dist/css/tabulator.min.css";
import { Download, Filter, Search, RefreshCw, Plus, Settings } from "lucide-react";
import type { Employee } from "../data/mockData";

interface DataTableProps {
  data: Employee[];
  title?: string;
  height?: number;
  onRowClick?: (row: any) => void;
  onDataChanged?: (data: Employee[]) => void;
}

const DataTable: React.FC<DataTableProps> = ({
  data,
  title = "جدول داده‌ها",
  height = 600,
  onRowClick,
  onDataChanged,
}) => {
  const tableRef = useRef<HTMLDivElement>(null);
  const tabulator = useRef<Tabulator>();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const departments = [...new Set(data.map((emp) => emp.department))];
  const statuses = [...new Set(data.map((emp) => emp.status))];

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("fa-IR", {
      style: "currency",
      currency: "IRR",
      maximumFractionDigits: 0,
    }).format(value);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "فعال":
        return "bg-green-100 text-green-800";
      case "غیرفعال":
        return "bg-red-100 text-red-800";
      case "مرخصی":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  useEffect(() => {
    if (!tableRef.current) return;

    tabulator.current = new Tabulator(tableRef.current, {
      data: data,
      height: height,
      layout: "fitDataTable",
      responsiveLayout: "collapse",
      pagination: true,
      paginationSize: 10,
      paginationSizeSelector: [5, 10, 20, 50],
      movableColumns: true,
      resizableRows: true,
      selectableRows: true,
      // tooltipsHeader: ,
      // tooltips: true,
      locale: "fa",
      langs: {
        fa: {
          pagination: {
            page_size: "اندازه صفحه",
            first: "اول",
            first_title: "صفحه اول",
            last: "آخر",
            last_title: "صفحه آخر",
            prev: "قبلی",
            prev_title: "صفحه قبلی",
            next: "بعدی",
            next_title: "صفحه بعدی",
            all: "همه",
            counter: {
              showing: "نمایش",
              of: "از",
              rows: "ردیف",
            },
          },
        },
      },
      columns: [
        {
          title: "شناسه",
          field: "id",
          width: 80,
          sorter: "number",
          headerFilter: "input",
          headerFilterPlaceholder: "جستجو...",
        },
        {
          title: "نام و نام خانوادگی",
          field: "name",
          width: 200,
          sorter: "string",
          headerFilter: "input",
          headerFilterPlaceholder: "جستجو نام...",
          formatter: (cell) => {
            const value = cell.getValue();
            return `<div class="font-medium text-gray-900">${value}</div>`;
          },
        },
        {
          title: "سمت",
          field: "position",
          width: 180,
          sorter: "string",
          headerFilter: "input",
          headerFilterPlaceholder: "جستجو سمت...",
        },
        {
          title: "دپارتمان",
          field: "department",
          width: 150,
          sorter: "string",
          headerFilter: "input",
          headerFilterParams: {
            values: ["", ...departments],
            defaultValue: "",
            clearable: true,
          },
          formatter: (cell) => {
            const value = cell.getValue();
            return `<span class="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">${value}</span>`;
          },
        },
        {
          title: "حقوق (ریال)",
          field: "salary",
          width: 150,
          sorter: "number",
          headerFilter: "number",
          headerFilterPlaceholder: "حداقل حقوق...",
          formatter: (cell) => {
            return formatCurrency(cell.getValue());
          },
        },
        {
          title: "سن",
          field: "age",
          width: 80,
          sorter: "number",
          headerFilter: "number",
          headerFilterPlaceholder: "سن...",
        },
        {
          title: "ایمیل",
          field: "email",
          width: 220,
          sorter: "string",
          headerFilter: "input",
          headerFilterPlaceholder: "جستجو ایمیل...",
          formatter: (cell) => {
            const value = cell.getValue();
            return `<a href="mailto:${value}" class="text-blue-600 hover:text-blue-800 underline">${value}</a>`;
          },
        },
        {
          title: "تلفن",
          field: "phone",
          width: 130,
          sorter: "string",
          headerFilter: "input",
          headerFilterPlaceholder: "شماره تلفن...",
          formatter: (cell) => {
            const value = cell.getValue();
            return `<div class="font-mono text-sm">${value}</div>`;
          },
        },
        {
          title: "تاریخ استخدام",
          field: "hireDate",
          width: 130,
          sorter: "string",
          headerFilter: "input",
          headerFilterPlaceholder: "تاریخ...",
        },
        {
          title: "وضعیت",
          field: "status",
          width: 120,
          sorter: "string",
          headerFilter: true,
          headerFilterParams: {
            values: ["", ...statuses],
            defaultValue: "",
            clearable: true,
          },
          formatter: (cell) => {
            const value = cell.getValue();
            const colorClass = getStatusColor(value);
            return `<span class="px-2 py-1 ${colorClass} rounded-full text-xs font-medium">${value}</span>`;
          },
        },
        {
          title: "شهر",
          field: "city",
          width: 100,
          sorter: "string",
          headerFilter: "input",
          headerFilterPlaceholder: "شهر...",
        },
        {
          title: "سابقه (سال)",
          field: "experience",
          width: 120,
          sorter: "number",
          headerFilter: "number",
          headerFilterPlaceholder: "سابقه...",
        },
        {
          title: "امتیاز",
          field: "rating",
          width: 100,
          sorter: "number",
          headerFilter: "number",
          headerFilterPlaceholder: "امتیاز...",
          formatter: (cell) => {
            const value = cell.getValue();
            const stars =
              "★".repeat(Math.floor(value)) + "☆".repeat(5 - Math.floor(value));
            return `<div class="text-yellow-500">${stars} ${value}</div>`;
          },
        },
      ],
      rowClick: (e: any, row: any) => {
        if (onRowClick) {
          onRowClick(row.getData());
        }
      },
      dataChanged: (data: any) => {
        if (onDataChanged) {
          onDataChanged(data);
        }
      },
    });

    return () => {
      if (tabulator.current) {
        tabulator.current.destroy();
      }
    };
  }, [data, height, onRowClick, onDataChanged]);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    if (tabulator.current) {
      if (term) {
        tabulator.current.setFilter(
          [
            { field: "name", type: "like", value: term },
            { field: "position", type: "like", value: term },
            { field: "email", type: "like", value: term },
            { field: "department", type: "like", value: term },
          ],
          "or"
        );
      } else {
        tabulator.current.clearFilter(true);
      }
    }
  };

  const handleDepartmentFilter = (dept: string) => {
    setSelectedDepartment(dept);
    if (tabulator.current) {
      if (dept) {
        tabulator.current.setFilter("department", "=", dept);
      } else {
        tabulator.current.clearFilter(true);
      }
    }
  };

  const handleStatusFilter = (status: string) => {
    setSelectedStatus(status);
    if (tabulator.current) {
      if (status) {
        tabulator.current.setFilter("status", "=", status);
      } else {
        tabulator.current.clearFilter(true);
      }
    }
  };

  const handleExport = (format: "csv" | "xlsx" | "json") => {
    if (tabulator.current) {
      setIsLoading(true);
      setTimeout(() => {
        if (format === "csv") {
          tabulator.current!.download("csv", `${title}.csv`, { bom: true });
        } else if (format === "xlsx") {
          tabulator.current!.download("xlsx", `${title}.xlsx`, { sheetName: title });
        } else if (format === "json") {
          tabulator.current!.download("json", `${title}.json`);
        }
        setIsLoading(false);
      }, 500);
    }
  };

  const clearAllFilters = () => {
    setSearchTerm("");
    setSelectedDepartment("");
    setSelectedStatus("");
    if (tabulator.current) {
      tabulator.current.clearFilter(true);
      tabulator.current.clearHeaderFilter();
    }
  };

  const refreshData = () => {
    setIsLoading(true);
    setTimeout(() => {
      if (tabulator.current) {
        tabulator.current.replaceData(data);
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary-500 to-primary-600 px-6 py-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <h2 className="text-xl font-bold text-white">{title}</h2>
          <div className="flex items-center gap-2">
            <button
              onClick={() => handleExport("xlsx")}
              disabled={isLoading}
              className="flex items-center gap-2 px-3 py-2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white rounded-md transition-colors duration-200 disabled:opacity-50"
            >
              <Download size={16} />
              <span className="hidden sm:inline">خروجی Excel</span>
            </button>
            <button
              onClick={refreshData}
              disabled={isLoading}
              className="flex items-center gap-2 px-3 py-2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white rounded-md transition-colors duration-200 disabled:opacity-50"
            >
              <RefreshCw size={16} className={isLoading ? "animate-spin" : ""} />
              <span className="hidden sm:inline">بروزرسانی</span>
            </button>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="p-4 bg-gray-50 border-b">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="relative">
            <Search
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={16}
            />
            <input
              type="text"
              placeholder="جستجوی کلی..."
              value={searchTerm}
              onChange={(e) => handleSearch(e.target.value)}
              className="w-full pr-10 pl-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>

          <select
            value={selectedDepartment}
            onChange={(e) => handleDepartmentFilter(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          >
            <option value="">همه دپارتمان‌ها</option>
            {departments.map((dept) => (
              <option key={dept} value={dept}>
                {dept}
              </option>
            ))}
          </select>

          <select
            value={selectedStatus}
            onChange={(e) => handleStatusFilter(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          >
            <option value="">همه وضعیت‌ها</option>
            {statuses.map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>

          <button
            onClick={clearAllFilters}
            className="flex items-center justify-center gap-2 px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-md transition-colors duration-200"
          >
            <Filter size={16} />
            پاک کردن فیلترها
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <div ref={tableRef} className="min-h-[400px]" />
      </div>

      {/* Footer */}
      <div className="px-6 py-3 bg-gray-50 border-t text-sm text-gray-600">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <span>جدول قابل تعامل با قابلیت‌های پیشرفته</span>
          <div className="flex items-center gap-4">
            <button
              onClick={() => handleExport("csv")}
              className="text-primary-600 hover:text-primary-800 transition-colors"
            >
              خروجی CSV
            </button>
            <button
              onClick={() => handleExport("json")}
              className="text-primary-600 hover:text-primary-800 transition-colors"
            >
              خروجی JSON
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataTable;
