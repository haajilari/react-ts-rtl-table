📊 Persian Tabulator Data Table
     
A reusable, mobile-first, RTL data table component built with React, TypeScript, Vite, and Tabulator, styled with Tailwind CSS. This project supports all free Tabulator features (sorting, filtering, pagination, column resizing, etc.) and is optimized for Persian (Farsi) language with RTL layout. It also includes Progressive Web App (PWA) functionality for offline access and a seamless user experience.

✨ (Features)

📱 Mobile-First Design: Fully responsive layout optimized for mobile devices.
➡️ RTL Support: Right-to-left layout for Persian language compatibility.
🇮🇷 Persian Language: UI text and mock data entirely in Farsi.
📊 Tabulator Features: All free features enabled, including sorting, filtering, pagination, and column resizing.
🎨 Tailwind CSS Styling: Modern, clean, and customizable design.
🌐 PWA Enabled: Offline support and app-like experience with service workers.
⚡️ Vite-Powered: Fast development and production builds.
🔒 TypeScript: Type-safe code for better maintainability and scalability.


🚀 (Quick Start)
 (Prerequisites)

Node.js (v18 or higher)
npm or Yarn
A modern browser supporting PWA

 (Installation)

Clone the repository:
git clone https://github.com/your-username/persian-tabulator-table.git
cd persian-tabulator-table


Install dependencies:
npm install
# or
yarn install


Start the development server:
npm run dev
# or
yarn dev


Open http://localhost:5173 in your browser to view the app.

(Build)
To create a production build:
npm run build
# or
yarn build

Serve the production build:
npm run preview
# or
yarn preview


🎨 (Styling & Beautification)

Tailwind CSS: Utility-first classes for responsive and RTL-compatible styling.
Custom Animations: Smooth transitions for table interactions (e.g., filtering, sorting) using Tailwind’s animation utilities.
Visual Enhancements:
🖼️ Consistent typography with Persian fonts (e.g., Vazir or IRANSans).
🌈 Hover effects and subtle animations on table rows and buttons.
📏 Responsive column widths for optimal viewing on all devices.




Tip: To add custom animations, extend Tailwind’s configuration in tailwind.config.js with keyframes for effects like fade-in or slide-in for table rows.


🌐 (PWA Support)
This project is a Progressive Web App, enabling:

Offline access via service workers.
App-like installation on mobile and desktop devices.
Push notifications (optional setup).

To customize the PWA:

Update the manifest.json in the public/ folder with your app details.
Configure the Vite PWA plugin in vite.config.ts.



const App = () => {
  return (
    <div className="container mx-auto p-4">
      <DataTable data={mockData} />
    </div>
  );
};
 (Mock Data Example)
const mockData = [
  { id: 1, نام: "علی رضایی", سن: 30, شهر: "تهران" },
  { id: 2, نام: "مریم حسینی", سن: 25, شهر: "اصفهان" },
  // ...
];


⚙️ Tabulator (Tabulator Configuration)
The table includes all free Tabulator features:

Sorting: Click column headers to sort.
Filtering: Built-in filters for quick data search.
Pagination: Configurable page sizes.
Column Resizing: Drag to resize columns.
Responsive Layout: Collapsible columns for mobile view.

To customize, modify the DataTable.tsx component’s Tabulator options.


Use Persian fonts like Vazir or IRANSans for a native look. Install via npm or CDN:<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/vazir-font@33.0.0/dist/font-face.css" />


Add subtle Tailwind animations:.table-row {
  @apply transition-all duration-300 hover:bg-gray-100;
}


Use gradient backgrounds for headers:.tabulator-header {
  @apply bg-gradient-to-r from-blue-500 to-indigo-600 text-white;
}




🤝 (Contributing)
Contributions are welcome! To contribute:

Fork the repository.
Create a feature branch (git checkout -b feature/YourFeature).
Commit your changes (git commit -m 'Add YourFeature').
Push to the branch (git push origin feature/YourFeature).
Open a Pull Request.


📄(License)
This project is licensed under the MIT License. See the LICENSE file for details.
