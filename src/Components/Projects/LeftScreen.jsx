import React, { useState } from "react";

const LeftScreen = () => {

  
  const HCJ = [
    { name: "Product Landing Page",
       description: "Developed a responsive product landing page for trombones, featuring a visually appealing design that highlights key product details, and pricing. Technologies used: HTML, CSS, JavaScript, React.", 
      path: "https://github.com/KartikayV13/Product_Landing_Page" },
    { name: "TriBute page",
       description: "Created a tribute page for Dr. Norman Borlaug, celebrating his contributions to agriculture and world hunger relief. The page features key achievements, and impactful quotes, designed with a clean, responsive layout. Technologies used: HTML, CSS, JavaScript.",
       path: "https://github.com/KartikayV13/TributePage" },
    { name: "JS Documentation page", 
      description: "Developed comprehensive JavaScript documentation, detailing key concepts, functions, and code examples. Structured the content for clarity and ease of understanding, enhancing accessibility for both beginners and experienced developers. Technologies used: JavaScript, HTML.",
       path: "https://github.com/KartikayV13/JSDocumentationPage" },
    { name: "Survey Form", 
      description: "Designed and implemented a responsive survey form, capturing user input with various question types (text, radio buttons, checkboxes). Ensured a clean and intuitive interface for smooth user experience. Technologies used: HTML, CSS, JavaScript.", 
      path: "https://github.com/KartikayV13/SurveyForm2" },
    { name: "Qoute Generator",
       description: "Built a dynamic quote generator, displaying random inspirational quotes with each click. Implemented smooth transitions and an API for fetching quotes. Technologies used: HTML, CSS, JavaScript, API integration.",
       path: "https://github.com/KartikayV13/QuoteGenerater" },
    { name: "Roman Number Convertor", 
      description: "Developed a Roman Numeral Converter that converts between Roman numerals and standard numbers. Implemented an intuitive user interface with instant conversion functionality and error handling for invalid inputs. Technologies used: HTML, CSS, JavaScript.", 
      path: "https://github.com/KartikayV13/RomanNumberConverter" },
    { name: "Telephone validator", 
      description: "Implemented a telephone number validator, ensuring proper formatting and validation of phone numbers using regex. The tool provides real-time feedback for user input. Technologies used: HTML, CSS, JavaScript.", 
      path: "https://github.com/KartikayV13/TelePhoneValidator" },
    { name: "Plaindrom Checker", 
      description: "Developed a palindrome checker, allowing users to verify if a string is a palindrome by checking for symmetry. The tool includes case-insensitive and non-alphanumeric character handling. Technologies used: HTML, CSS, JavaScript.",
       path: "https://github.com/KartikayV13/palindromCheck" },
    { name: "Pokemon Details App", 
      description: "Created a Pokémon Details App that provides comprehensive information about various Pokémon, including stats, abilities, and evolutions. The app features a user-friendly interface and dynamic data retrieval from a Pokémon API. Technologies used: HTML, CSS, JavaScript, API integration.", 
      path: "https://github.com/KartikayV13/PokemonDetailsApp" },
    { name: "Drum Beat", 
      description: "Developed a Drum Beat application that allows users to create and customize drum patterns through an interactive interface. The app features sound playback, tempo adjustment, and rhythm visualization. Technologies used: HTML, CSS, JavaScript.", 
      path: "https://github.com/KartikayV13/DrumBeat" },
    { name: "Tic tac Toe", 
      description: "Created a Tic Tac Toe game featuring single-player and multiplayer modes, with an intuitive interface for users to easily place their marks. Implemented game logic to determine winners and handle draws. Technologies used: HTML, CSS, JavaScript.", 
      path: "https://github.com/KartikayV13/ticTacToe" },
    { name: "Rock Paper Scissor", 
      description: "Developed a Rock Paper Scissors game with a user-friendly interface that allows players to compete against the computer. The application includes score tracking and dynamic results display based on user choices. Technologies used: HTML, CSS, JavaScript.",
       path: "https://github.com/KartikayV13/rockPaperScissor" },
    { name: "Mini Music Player", 
      description: "Created a Mini Music Player featuring a selection of 10 songs, allowing users to play, pause, skip, and shuffle tracks. The player includes a visually appealing interface and responsive design for an enhanced user experience. Technologies used: HTML, CSS, JavaScript.", 
      path: "https://github.com/KartikayV13/miniMusicPlayer" },
    { name: "Mini-Ipod",
       description: "Developed a Mini iPod application that simulates a music player interface, allowing users to browse and play a curated selection of songs. The app features play, pause, skip, and shuffle functionalities with a sleek and responsive design. Technologies used: HTML, CSS, JavaScript.", 
       path: "https://github.com/KartikayV13/mini_ipod" },
    { name: "Calculator", 
      description: "Created a web-based calculator that performs basic arithmetic operations, including addition, subtraction, multiplication, and division. The application features a user-friendly interface with responsive design for seamless interaction across devices. Technologies used: HTML, CSS, JavaScript.", 
      path: "https://github.com/KartikayV13/calculator" },
    { name: "Clock", 
      description: "Developed a digital clock application that displays the current time, date, and customizable time zones. The app features a sleek design and real-time updating functionality using JavaScript. Technologies used: HTML, CSS, JavaScript", 
      path: "https://github.com/KartikayV13/Clock" },
    { name: "Weather App", 
      description: "Created a Weather App that provides real-time weather updates based on user location or city input. The application features a clean and responsive design, utilizing an API for accurate weather data retrieval. Technologies used: HTML, CSS, JavaScript, API integration.", 
      path: "https://github.com/KartikayV13/weatheringAPP" },
  ];


  const [show , setShow] = useState(Array(HCJ.length).fill(false));
  
  const toggleDescription = (index) => {
    setShow((prevShow) =>
      prevShow.map((item, i) => (i === index ? !item : item)) // Toggle only the clicked item
  );
};

return (
    <div className="all_list">
      <div className="project_heading">
        <h2 className="project_h2">
          HTML, CSS <span className="symbol1">&</span> JS
        </h2>
        <h5>Projects</h5>
      </div>

      <div className="projects_name">
        <ul className="project_ul">
        {HCJ.map((item , index) => (
<li className="project_li" key={index}>
  <div className="title">
  <p className="project_titles" key={index}>{item.name}</p>
  <span onClick={() => toggleDescription(index)} className="plus_icon">
                  {show[index] ? "-" : "+"}
                </span>
  </div>
  {show[index] && <p className="project_desc">({item.description})</p>}
 
  <a className="view" target="_blank" href={item.path}>View Project</a>
</li>
        ))}
        </ul>
      </div>
    </div>
  );
};

export default LeftScreen;
