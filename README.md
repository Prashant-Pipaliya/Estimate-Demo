# Estimate Table Project

This is a React project that simulates an estimate table with dynamic sections, allowing users to edit item quantities and costs. It supports infinite scroll and calculates the grand total for all sections. The grand total is fixed and represents the sum of all sections, regardless of how many sections are displayed at any given time.

## Tech Stack

- **React with Vite**: A fast and modern build tool for React applications.
- **React-Bootstrap**: Bootstrap components for React for UI styling.
- **Axios**: For making API requests.
- **TanStack Query** : For data fetching, caching, and synchronization.
  
## Table of Contents
- [Features](#features)
- [File Structure](#file-structure)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features
- **Editable Item Rows**: Users can edit the quantity and unit cost for items in each section.
- **Section Totals**: Each section has its own total, and the grand total is updated based on section totals.
- **Grand Total**: The grand total is fixed and reflects the sum of all sections.

## File Structure

```
Estimate-Table/
│
├── src/
│   ├── api/
│   │   └── estimateApi.js           # API call functions (e.g., fetching estimate data)
│   │
│   ├── components/
│   │   ├── SectionRow.js            # Displays individual section data
│   │   ├── ItemRow.js               # Displays individual item data
│   │   ├── SectionHeader.js         # Displays section header with grand total info
│   │   └── EstimateTable.js         # Main component that handles section data, load more functionality, and grand total
│   │
│   ├── hooks/
│   │   └── useEstimate.js           # Custom hook to handle fetching and state management for estimates
│   │
│   ├── App.js                       # Root component, renders EstimateTable
│   ├── index.js                     # Entry point for the React app
│   └── styles.css                   # Custom styles for the project
│
├── package.json                     # Project dependencies and scripts
├── .gitignore                       # Git ignore configuration
└── README.md                        # Project documentation
```

## Installation

Follow these steps to get the project up and running on your local machine.

### Prerequisites
- Ensure that you have **Node.js** and **npm** installed on your machine.

### Steps

1. Clone the repository to your local machine.

   ```bash
   git clone https://github.com/Prashant-Pipaliya/Estimate-Demo.git
   cd Estimate-Demo
   ```

2. Install dependencies using npm.

   ```bash
   npm install
   ```

3. Start the development server.

   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173/` to view the application.

## Usage

1. The table initially loads a sections, displaying their details.
3. Each section's total is calculated dynamically based on the item quantity and unit cost.
4. The grand total is always fixed and shows the sum of all sections.