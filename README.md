# Personal Financial Planner (Project 2)

## Description
The purpose of this project was to build a single-page React application which would provide the user with an analysis of his or her finances. "npm React minimal pie chart" was used to make pie charts from user data and "npm ?" was used to make a graph. The document was styled using MotionUI and Bootstrap. Before user data is entered, the webpage contains demo charts and a graph in order to clarify how the page works and what information will be obtained from the financial analysis. These demo figures are made from data stored in .json files. Information regarding savings, income and expenses are obtained through forms constructed using React.Component classes; and user data is kept in localStorage. Once all relevant data is collected, the user may click a "Review" button on the home page. Demo data is then replaced with user data through the useState hook and this change is propagated to all the relevant components throughout the webpage with createContext and useContext. The user may then view his or her finanical data represented in pie charts, a graph and in a table summarizing all the income and expenses figures he or she has entered. As this data is retained in localStorage it may be viewed again after refreshing or re-opening the page by re-clicking "Review". The user may also remove all data from localStorage by clicking the "Clear" button.

## Installation
N/A

## Usage
To enter your financial data into the planner click the "Begin/Review" button on the Home Page. Then click "Start" and follows the directions on the forms. Once the last form is complete click "Finish" to return to the Home Page. Then click "Begin/Review" and click "Review". It will then be possible to view your financial analysis in the Charts, Forecast and Summary pages. To remove all financial data from the app, click "Begin/Review"; then click "Clear". All financial data will be immediately deleted.

## Credits
This webpage was made by the following contributors:

- David Adams, Logic; https://github.com/DavidBlueLamassu 
- Daley Cutler, Styling; https://github.com/DC19Bootcamp 
- Elias Hakimi, Logic; https://github.com/EliasHakimi00 
- Dercio Macie, Styling; https://github.com/DecoMacie 

## License
N/A

## Tests
N/A

## https://davidbluelamassu.github.io/react-portfolio/

![Screenshot of the Personal Financial Planner](./public/assets/images/react-portfolio-screenshot.png)