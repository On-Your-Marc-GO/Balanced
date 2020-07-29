# Balance - Fitness Goal Tracker

## Live Site URL

[Balance - Live Site](https://damp-hollows-23644.herokuapp.com/)

## Project Proposal

User Story

```
AS AN avid fitness nerd, or someone trying to lose the COVID 15
I WANT a fitness application that can track my workouts and daily nutriton
SO THAT I can glean what my progress is at any point in time towards my goals
```

Acceptance Criteria

```
GIVEN that I am attempting to track my health and wellbeing progress
WHEN I arrive at the site
THEN I am given a dashboard showing all entries to date thus far
WHEN I select one of the journal entires
THEN I am taken to a view displaying all entered exercise/nutrition information in a post type view
WHEN I want to add a new entry
THEN I am taken to a form view that will prompt for the user to select what activity(ies) I did and what they ate.
WHEN I want to set a fitness goal for overall time spent active
THEN I am shown a form that allows me to enter my time goal
WHEN I want to see my progress on any given goal and click on one
THEN I am shown a visual indicator or the progress thus far (hitting a goal will do something amazing)
```

## TABLE OF CONTENTS

-   [Devlopers](#developers)
-   [Tech Stack](#technologies)
-   [Usage](#usage)
-   [Future Dev Roadmap](#future_development)
-   [Credits](#credits)
-   [License](#license)

## Developers

-   Miriam Ghaffar
    -   [Github Profile](https://github.com/mghaffar89)
-   Koan Loc
    -   [Github Profile](https://github.com/loc-koan)
-   Marc Arguijo
    -   [Github Profile](https://github.com/On-Your-Marc-GO)

## Technologies

#### Front-End

-   [Bootstrap](https://getbootstrap.com/)
-   [Handlebars](https://handlebarsjs.com/)
-   [jQuery](https://api.jquery.com/)

#### Back-End

-   [Express](https://www.npmjs.com/package/express)
-   [Sequelize](http://sequelize.org/master/)
-   [PassPort](https://www.npmjs.com/package/passport)

## Installation

Since the application has been deployed via Heroku you can simply navigate to the provided site link above. If you would like to instead run it locally on your dev machine, follow the next steps.

1. From the Repo screen clone this repository to your local machine. Assuming you have a valid git terminal and SSH key, you can utilize the SSH URL provided along with the 'git clone' command.
2. Open the repo in whatever development environment you so choose (ex. Visual Studio Code)
3. Once viewing the source, using Node.js, install the NPM packages
   associated with this project.
4. Ensure that you run the schema.sql and seeds.sql file to have a data source to work with locally.
5. In your terminal, run the 'node server.js' command in order to have the application run locally and continue to follow the application.

## Usage

## Future Development

Ideas for future development include but are not limited to the following:

-   Ability to track specific activity metrics and load them based on the category. (Ex. If the category for an activity is 'Run', we will record metrics such as Pace, Total Time Run, and Distance. If the user selects 'Biking' the forms will load with and track Distance, Pace, Elevation Change, etc.)
-   Rewards/Accomplishment functionality. When a user hits their goals there could be a trophy case displaying these to the user and others that view profiles.
-   A social media communnity aspect. The next iteration of this application could serve as a platform for sharing in the future.
-   The ability to tap into other fitness web API's in order to share and syncronize data. (Ex. Garmin, Nike, Strava, etc.)

## Credits

-   [Resource 1](www.google.com)
-   [Resource 2](www.google.com)

## License

MIT License

Copyright (c) 2020 Miriam, Ghaffar, Koan Loc, Marc Arguijo

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

© 2020 Miriam, Ghaffar, Koan Loc, Marc Arguijo All Rights Reserved.
