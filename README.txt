Teammates:
Beck Addison

Roles:
Users Guru: Beck Addison
Products Guru: Beck Addison
Carts Guru: Beck Addison
Sellers Guru: Beck Addison
Social Guru: Beck Addison

Summary of changes:

Since Milestone 2, I've made several changes. 

Flask -> Sveltekit:
First and foremost, I moved away from using Flask as the backend and just chose to use the SvelteKit backend tools instead. This made it a lot easier to pass all the models I wrote across the application (see the next point!)

TS Models:
As mentioned, I created several classes representative of the objects I am passing around as part of the store. These are stored in the "models" folder in Typescript. They interact well with the Svelte frontend and are critical for passing information around the website.

Svelte Cleanup:
At Milestone 2, a bunch of the frontend was kind of sloppy and otherwise not well thought-out. I reorganized a lot of that mess into a clearer component structure.

SQL -> MongoDB:
At Milestone 2, I was attempting to shoehorn an SQL server into something that I feel is much more apt to use a NoSQL server like MongoDB. As such, I transitioned the database from SQL to MongoDB. Since all the data was fake in the first place, this was as easy as deleting the first dataset and repopulating another. This also involved redesigning the data model - see REPORT.pdf for an ER diagram with more information.

New Data Generation for Mock DB: 
The method I used for mock data generation was very poor and caused a ton of problems at Milestone 2. I redesigned it using the faker JS library to make generating data easier and quicker.
