## Project Choice (Tell us which project you're doing!)
> A name for your Project  
Book Easy

## Project Description
> General App Idea/Purpose<br />

The purpose behind this would be a way for someone to track the books they have read. They should be able to leave a short description about their thoughts on it, if it's worth reading, and how much the book was along with an image of it and where to find a copy. 

> Models including field names and their datatypes<br /> 
Books Model = {
Title : String,
Cost: Number, 
Is it worth reading: Boolean,
Rating: Number,
img: String,
Description: String,
Genre: String
Author: String
} 


> A list of routes (e.g. `POST /pins/ allows users to post a picture of a pin`)<br />
INDEX -> Allows a user to see all the books reviewed on the same page.
SHOW-> This will allow the user to see more specific details like the description and "if it is worth reading".
NEW -> 
Create-> The user will be able to put in information and create another book entry
Update -> the user will be able to change anything they want from the model. 
Delete-> The user will have the ability to delete a book entry if they choose.

## Wireframes
> Wireframes with basic page layouts<br />
![Drawing-1 sketchpad](https://media.git.generalassemb.ly/user/46402/files/0a2f8ed7-5f08-4dbd-9839-838e84f10a06)
![Drawing-2 sketchpad (1)](https://media.git.generalassemb.ly/user/46402/files/d16719a8-05d8-4e50-92fa-280914fca400)
![Drawing-3 sketchpad](https://media.git.generalassemb.ly/user/46402/files/e16c53ca-d59f-4a3b-ab89-facf60559d8d)
> Copy and paste or drag and drop your images here.

## User Stories
> User stories detailing app functionality<br />
> Add user stories following the _As a [type of user], I want [what the user wants], so that [what it helps accomplish]_ format.
I want to be able to track what books I've just read and be able to log it in this space.
I want to be able to put any image related to the book on the page, as a visual reference.

### MVP Goals
I want users to be able to see all entries, be able to edit or delete entries, and be able to make an entry if they so choose. 
^ Basically, the app needs to work as intended with no issues and all routes should work without any problems to the user.
I want the Styling to look clean and to not be plain.

### Stretch Goals
I want users to be able to log in and see their own book entries or log in and that's what gives them the editing abilities for the page.

### What I Used
I used bcrypt, dotenv, ejs, express, method-override, mongoose.

### What I would do better
I would like to add some better CSS styling, make user logins, and a shopping cart so it would be like a normal functioning site. 
I would add connections between the data models, right now I'm not sure how to do that.