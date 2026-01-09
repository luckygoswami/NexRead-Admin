# NexRead Admin Panel

**NexRead Admin** is a robust management dashboard designed for library administrators to oversee the digital book catalog. Built with **React**, **Vite**, and **Tailwind CSS**, it provides a secure interface for managing book metadata, uploading assets, and monitoring library inventory.

## 🚀 Features

- **Secure Authentication**: Role-based access with login and registration flows to protect administrative data.
- **Book Management**: Full CRUD operations to add, view, and manage digital books.
- **Asset Uploads**: Integrated support for uploading book cover images and PDF files.
- **Interactive Dashboard**: High-level overview of library statistics and recent activities.
- **Modern UI**: Built with a comprehensive suite of accessible components including data tables, sidebars, and alerts.
- **State Management**: Optimized performance using **Zustand** for global state and **React Query** for data fetching.

## 🛠️ Tech Stack

- **Frontend Library**: [React 18](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) & [Shadcn UI](https://ui.shadcn.com/)
- **State Management**: [Zustand](https://docs.pmnd.rs/zustand/getting-started/introduction)
- **Data Fetching**: [TanStack Query (React Query)](https://tanstack.com/query/latest)
- **Forms**: [React Hook Form](https://react-hook-form.com/) & [Zod](https://zod.dev/)

## 📂 Project Structure

```text
src/
├── components/       # Shadcn UI and custom interface components
├── hooks/            # Custom React hooks (e.g., use-mobile)
├── http/             # API service layer and Axios configurations
├── layouts/          # Authentication and Dashboard shell layouts
├── pages/            # View components (Books, Add Book, Auth pages)
├── store             # Zustand global state definitions
└── types             # TypeScript interfaces and global definitions

```

## 🚦 Getting Started

### Prerequisites

- Node.js (LTS version)
- pnpm (recommended)

### Installation

1. **Clone the repository**:

```bash
git clone https://github.com/luckygoswami/nexread-admin
cd nexread-admin

```

2. **Install dependencies**:

```bash
pnpm install

```

3. **Environment Setup**:
   Create a `.env` file in the root directory:

```env
VITE_BACKEND_URL='<your-api-endpoint>'

```

4. **Run Development Server**:

```bash
pnpm run dev

```

## 🏗️ Building for Production

To create an optimized production build:

```bash
pnpm run build

```

## Contributing

Contributions are welcome! Please feel free to open issues or submit pull requests to enhance the functionality of Credinox.

1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature/YourFeature`).
3.  Commit your changes (`git commit -m 'Add some feature'`).
4.  Push to the branch (`git push origin feature/YourFeature`).
5.  Open a Pull Request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

## Contact

If you have any questions or suggestions, feel free to open an issue on GitHub or contact me directly via [GitHub Issues](https://github.com/luckygoswami/nexread-admin/issues).
