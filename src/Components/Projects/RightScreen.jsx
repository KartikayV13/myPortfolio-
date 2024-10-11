import React from 'react'

// images of react projects

import BGchanger from "../../assets/react/BGchanger.jpg"
import calc from "../../assets/react/calc.jpg"
import currency from "../../assets/react/currency.jpg"
import ipod from "../../assets//react/ipod.jpg"
import quote from "../../assets/react/quote.jpg"
import reciepe from "../../assets/react/reciepe.jpg"
import sassy from "../../assets/react/sassy.jpg"
import tictactoe from "../../assets/react/tiktactoe.jpg"
import todo from "../../assets/react/todo.jpg"
import yt from "../../assets/react/yt.jpg"
import music from "../../assets//react/musicPlayer.png"
import portfolio from "../../assets/react/portfolio.png"

const RightScreen = () => {

const ReactJs = [
    {
        name: "Bg Changer",
        discription: "Developed a React component that allows users to dynamically change the background color by clicking different buttons. Implemented state management using React's useState hook to update the background color based on user interaction. Designed a user-friendly interface with multiple buttons, each representing a distinct color.Applied conditional rendering and styling to ensure seamless and responsive color changes.",
        path: "https://github.com/KartikayV13/react/tree/main/bgchanger",
        img: BGchanger,
    },
    {
        name: "Basic Calculator",
        discription: "Built a fully functional basic calculator using React, capable of performing addition, subtraction, multiplication, and division operations. Utilized React's useState hook to manage user input and calculation results dynamically. Designed an intuitive and responsive UI for both desktop and mobile users using conditional rendering. Implemented error handling for invalid inputs, ensuring accurate results and a smooth user experience.",
        path: "https://github.com/KartikayV13/react_calculator",
        img: calc,
    },
    {
        name: "Currency Convertor",
        discription: "Built a fully functional currency exchanger using React that allows users to convert between multiple currencies. Integrated real-time exchange rate data using an external API for accurate currency conversion. Utilized React's useState and useEffect hooks to manage state and handle asynchronous data fetching. Created an intuitive and responsive interface, enabling users to select currencies and input amounts for conversion. Implemented error handling and form validation to ensure accurate and user-friendly interaction",
        path: "https://github.com/KartikayV13/react-currency_convertor",
        img: currency,
    },
    {
        name: "Qoute Generator",
        discription: "Built a dynamic quote generator using React and integrated a third-party API to fetch random quotes. Utilized useEffect for fetching data asynchronously, ensuring the quotes are updated each time the user clicks a button. Employed Axios (or fetch API) to handle API requests and manage responses efficiently. Enhanced the UI with buttons for generating new quotes, providing a smooth and interactive user experience.",
        path: "https://codepen.io/Kartikay-Varun/pen/BaXNeex",
        img: quote,
    },
    {
        name: "Tic Tac Toe",
        discription: "Built an interactive Tic-Tac-Toe game using React, implementing core game logic and player turns. Utilized React's useState and useEffect hooks to manage game state, track moves, and determine the winner. Designed the UI to display the game board dynamically and highlight the winning combination. Ensured smooth game resets and status updates after each round, providing an engaging user experience.",
        path: "https://github.com/KartikayV13/react-tictactoe",
        img: tictactoe,
    },
    {
        name: "Mini Ipod",
        discription: "Built an interactive Tic-Tac-Toe game using React, implementing core game logic and player turns. Utilized React's useState and useEffect hooks to manage game state, track moves, and determine the winner. Designed the UI to display the game board dynamically and highlight the winning combination. Ensured smooth game resets and status updates after each round, providing an engaging user experience.",
        path: "https://github.com/KartikayV13/react-tictactoe",
        img: ipod,
    },
    {
        name: "Todo List",
        discription: "Built a to-do list application in React with local storage integration to persist tasks across sessions. Utilized React's useState and useEffect hooks for efficient state management and synchronization with local storage. Implemented features for adding, editing, deleting, and marking tasks as completed, offering a smooth user experience. Ensured data persistence by storing tasks in the browser’s local storage, allowing users to retain their lists after page reloads.",
        path: "https://github.com/KartikayV13/TodoList",
        img: todo,
    },
    {
        name: " Food Recipe App",
        discription: "Built a dynamic food recipe app using React, integrated with a third-party recipe API to fetch and display a variety of recipes. Implemented asynchronous data fetching with axios/fetch to retrieve recipe data from the API. Developed search functionality that allows users to filter recipes by ingredients, cuisine, or meal type. Utilized React state management and hooks to handle dynamic UI updates and API responses. Created a responsive, visually appealing design with recipe images, ingredients, and preparation steps. Focused on user experience by incorporating pagination, error handling, and loading states.",
        path: "https://github.com/KartikayV13/food_recipe",
        img: reciepe,
    },
    {
        name: "Youtube-Clone",
        discription: "Built a YouTube-like application using React, allowing users to search and view videos via YouTube API integration. Implemented search functionality to fetch video data dynamically, using Axios to make API requests. Developed a responsive user interface with components for video listing, player, and related video suggestions. Leveraged React Hooks (useState, useEffect) for efficient state management and API data handling. Focused on optimizing the user experience with smooth video loading and intuitive navigation.",
        path: "https://github.com/KartikayV13/yt-clone",
        img: yt,
    },
    {
        name: "Sassy Slice(Food Ordering App)",
        discription: "Developed a dynamic food ordering website using React, featuring a diverse menu of items including pizza, sandwiches, fries, shakes, and noodles etc. Implemented a responsive user interface with clear navigation and engaging design to enhance user experience across devices. Utilized React Router for seamless page transitions and to manage the navigation between the menu, order summary, and checkout sections. Integrated state management to track user selections, manage the shopping cart, and calculate order totals in real-time.Designed and implemented a visually appealing layout with CSS for effective presentation of menu items, including images, descriptions, and prices.",
        path: "https://github.com/KartikayV13/Sassy-Slice",
        img: sassy,
    },
    {
        name: "Spotify Clone (Selected Songs)",
        discription: "Developed a music streaming application mimicking Spotify's functionality using React.Integrated a library of 50 selected songs, allowing users to play, pause, and skip tracks seamlessly. Implemented a responsive design to ensure optimal performance across various devices and screen sizes. Utilized state management with React hooks to manage song playback, track selection, and user interactions. Enhanced user experience with features like song search, playlist creation, and real-time updates on currently playing tracks.",
        path: "",
        img: music,
    },
    {
        name: "My PortFolio",
        discription: "Developed a Portfolio Website which is telling about my skills and education using React.Basically it is like a resume but a didgital one which is easy to share and very much handy. It tells what i am How i am, So have a look.",
        path: "https://github.com/KartikayV13/myPortfolio-",
        img: portfolio,
    },
]



  return (
    <div className="react-all">
         <div className="project_heading">
        <h2 className="project_h2">
          React JS
        </h2>
        <h5>Projects</h5>
      </div>
<div className="project-name">
    <div className="project-grids">
    {
        ReactJs.map((item , index) => (
            <div className="map">
                <div className="image">
                <img src={item.img} alt="" />
                <h3>{item.name}</h3>
                </div>

                <div className='code'>
                    <a href={item.path}>View Code</a>
                </div>

                <div className='discription_react'>
                    <p>{item.discription}</p>
                </div>

            </div>
          
        ))
    }
    </div>
</div>

    </div>
  )
}

export default RightScreen