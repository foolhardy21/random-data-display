# Data Display Panel

A single-page React application that dynamically displays different types of data visualizations based on API responses. The app fetches random data and automatically renders the appropriate component (metric, chart, list, or progress) based on the data type.

## Features

- **Dynamic Data Display**: Automatically switches between 4 different display types based on API response
- **4 Display Types**:
  - **Metric**: Large numbers with trend indicators (up/down arrows)
  - **Chart**: Line charts using Recharts library
  - **List**: Items with status badges
  - **Progress**: Goal tracking with progress bars
- **Modern UI**: Built with Tailwind CSS for responsive, clean styling
- **API Integration**: Express.js backend serving random data
- **Loading States**: User feedback during API calls

## Tech Stack

- **Frontend**: React 19, Vite, Tailwind CSS
- **Backend**: Express.js, Node.js
- **Charts**: Recharts
- **Styling**: Tailwind CSS v4

## Project Structure

```
inventic/
├── src/
│   ├── components/
│   │   ├── displayTypes/
│   │   │   ├── index.jsx          # Component exports
│   │   │   ├── MetricDisplay.jsx  # Metric component
│   │   │   ├── ChartDisplay.jsx   # Chart component
│   │   │   ├── ListDisplay.jsx    # List component
│   │   │   └── ProgressDisplay.jsx # Progress component
│   │   └── DisplayController.jsx  # Main display logic
│   ├── constants.js              # Sample data (for reference)
│   ├── App.jsx                   # Main app component
│   └── main.jsx                  # App entry point
├── server.js                     # Express server
├── package.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (v20.19+ or v22.12+ recommended)
- npm or yarn

### Installation

1. **Clone the repository** (if applicable) or navigate to the project directory

2. **Install dependencies**:
   ```bash
   npm install
   ```

### Running the Application

The application consists of two parts: the frontend (React) and the backend (Express API).

#### Start the Backend Server

```bash
npm run server
```

This starts the Express server on `http://localhost:3000`

#### Start the Frontend

In a separate terminal:

```bash
npm run dev
```

This starts the Vite development server on `http://localhost:5174`

### Usage

1. Open your browser and navigate to `http://localhost:5174`
2. Click the "Fetch Random Data" button
3. The app will make an API call and display one of the 4 data types randomly
4. Click again to see different data visualizations

## API Endpoints

- `GET /api/random-data`: Returns a random data object with one of the 4 display types

### Sample API Response

```json
{
  "type": "metric",
  "data": {
    "value": 1247,
    "label": "Active Users",
    "change": "+12.5%",
    "trend": "up"
  }
}
```

## Available Scripts

- `npm run dev` - Start the Vite development server
- `npm run server` - Start the Express backend server
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build
- `npm run lint` - Run ESLint for code quality checks

## Development

The project uses:
- **Vite** for fast development and building
- **ESLint** for code linting
- **Tailwind CSS v4** for styling
- **Recharts** for data visualization

### Component Architecture

- **DisplayController**: Main component that decides which display type to render
- **Individual Display Components**: Specialized components for each data type
- **Modular Exports**: Clean component exports through index files

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is for educational purposes.