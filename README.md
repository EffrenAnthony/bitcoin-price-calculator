# Bitcoin Price Calculator

## Overview
Bitcoin Price Calculator is a web application that allows users to calculate the amount of Bitcoin they can get based on a given input amount. The application updates the Bitcoin price in real-time using WebSockets and provides a historical price chart of the last 10 captured values from the API.

## Features
- **Real-time Bitcoin Price Updates**: Fetches live BTC prices using WebSockets.
- **Instant Calculation**: Users can input a value to see the equivalent amount in Bitcoin.
- **Historical Price Chart**: Clicking the box opens a chart displaying the last 10 recorded prices.

## Technologies Used
- **Frontend**: React, TypeScript, Vite
- **State Management**: React State + TanStack Query
- **Styling**: Tailwind CSS
- **Charting**: Chart.js, react-chartjs-2
- **WebSockets**: socket.io-client
- **Linting & Formatting**: ESLint, Prettier, Husky
- **Testing**: Vitest, React Testing Library

## Setup & Installation

### Prerequisites
Ensure you have **Node.js** installed.

### Installation Steps
1. Clone the repository:
   ```sh
   git clone https://github.com/effrenanthony/bitcoin-price-calculator.git
   cd bitcoin-price-calculator
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory and add:
   ```sh
   VITE_API_BASE_URL=http://localhost:4000
   ```

4. Run the development server:
   ```sh
   npm run dev
   ```

## Scripts
- **`npm run dev`** - Start development server
- **`npm run build`** - Build the application
- **`npm run preview`** - Preview the production build
- **`npm run lint`** - Run ESLint
- **`npm run test`** - Run tests using Vitest

## Folder Structure
```
📦 bitcoin-price-calculator
├── 📂 src
│   ├── 📂 components  # Reusable UI components
│   ├── 📂 hooks       # Custom React hooks
│   ├── 📂 pages       # Page components
│   ├── 📂 services    # API and WebSocket logic
│   ├── 📂 utils       # Helper functions
│   ├── main.tsx      # Application entry point
│   ├── App.tsx       # Root component
├── .env               # Environment variables
├── package.json       # Dependencies and scripts
├── README.md          # Project documentation
```

## Contributing
1. Fork the repository
2. Create a feature branch (`git checkout -b feature-name`)
3. Commit your changes (`git commit -m "Add feature"`)
4. Push to the branch (`git push origin feature-name`)
5. Open a pull request

## License
This project is licensed under the MIT License.