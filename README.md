# Reward Points App

## Overview
This is a **React + Vite + Tailwind CSS** application that simulates a retailer's reward points system based on customer purchases. Customers earn points based on transaction amounts and can view their monthly and total rewards.

## Features
- **Rewards Calculation**:  
  - 2 points for every dollar spent over **$100**.  
  - 1 point for every dollar spent between **$50-$100**.  
  - Example: A $120 purchase earns **90 points** `(2x$20 + 1x$50)`.  

- **Customer Transactions**:  
  - Displays reward points per customer **by month** and **total rewards**.  

- **Transaction Input**:  
  - Users can enter their **name**, **select items from a dropdown**, and **record a purchase**.  

- **Month Toggle**:  
  - Allows filtering transactions based on **selected months**.  

- **Code Splitting**:  
  - Components are modularized for better maintainability.  

## Tech Stack
- **Frontend**: React (Vite)  
- **Styling**: Tailwind CSS  
- **State Management**: React Hooks (useState, useEffect)  
- **Async API Simulation**: setTimeout to fetch mock data  

## Installation
1. Clone the repository:  
   ```git clone https://github.com/your-username/reward-points-app.git```
2. Navigate to the project directory
  ```cd assignment-ztek```
3. Install dependencies
  ```npm install```
4. Start the development server
  ```npm run dev```
