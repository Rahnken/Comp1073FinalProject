# Comp 1073 Final Project

## Dungeons & Dragons: Character Creator
#### The Break It Group 
 > Holly Bedard 200443133 <br>
 > Michael Caldwell 200445010 <br> 
 > Jordan Coulter 200236142 <br>
 > Eric Donnelly 200433532  <br>
 > Lani Low 200440104 
 
 
>>Client-Side JavaScript Comp 1073 <br>
> Professor Shivali Dhaka <br>
> Tuesday Mornings
****
## Project Overview
This project is a Dungeons and Dragons ( D&D) Character Creator. We are starting to build it for the basic fifth edition rules ( 5e) however due to the sheer amount of possible race/class we have limited the selection based on those within the Player’s Handbook. 

We will have a landing page where clients can create an account or login to an existing account. If the users decide that they just want to make a 1 time character they do not need to create an account but there will be an option to save and reopen existing characters.  Users then proceed to the character creation page where they can create their character either by manually entering values, or by using the randomized roll tool. Once validated, the character stats are then sent to the character output page, where the user is given the option to save their character and/or print a character sheet using the data from the creation stage. If the user saves the character the data is stored in the database, using the JSON file connected to the userID. This allows the user to return to edit the character at a later time. 
### Development Environments and Third-party Integrations
> Stephanie /Holly IDE - Webstorm <br>
> Michael - Webstorm <br>
> Jordan -  <br>
> Eric - WebStorm <br>
> Lani IDE - notepad/ atom <br>

Third-party Integration 
 > Jquery - Google Hosted

## Functional Requirements / Use Cases

##### JSON
>Used to store character stats for each user

 ##### Validation
> Ensuring valid data is entered by the user in all fields 
- Name fields 
  - including username, character name
- sanitized strings 
   - no html/js elements or SQL expressions
- Stat fields 
    - integer values
    - range from 4-20 
- Passwords field 1 of each
   - uppercase
   - lowercase 
   - number 
   - special char 
   - min length 8   
##### Events
- On blur validations
- On hover navbar enlarging 
- On click events to randomize certain fields
- Select event, race choosing 
##### Complex Data Types
- Character created will be an object
- Use of arraylists and maps for character details
##### Forms
- Login form
- Register form
- Character creator form
- Output form





##### CSS
- creating a cohesive style for all pages

## Project Design

![image of project design](./img/BlockDiagramJSFolder.jpg)

By: Michael Caldwell

## Work Assignments
>_**While we won’t work on each other's assigned sections, 
>we do plan on reviewing each other's sections for a better understanding of our overall project.**_

##### Here’s a list of our currently planned features:
- [x] Home (landing page)
- [x] Login page (html w/ JS)
- [x] Registration Page
- [x] Character Creation  (html w/ JS)
- [x] Output page  (html w/ JS)
- [x] Stylesheet
- [x]  Json files 

##### And the following is a breakdown of what work we will each be responsible for :
###### Holly Bedard
- [x] Character creation page:

- [x] Responsible for the code which allows the user to create characters
    - Some fields generated with dice roll, others with dropdown menu
- [x] Character stat fields include:
    
    - Name 
    - Race 
    - Class
    - Gender
    - Level
    
    - Strength
    - Dexterity
    - Constitution
    - Intelligence
    - Wisdom
    - Charisma
    
    - Trait
    - Ideals
    - Bonds
    - Flaws
    - Background
    - Feauture

The user has three options for creating their character:
1. Use a button that randomly selects values for each of the stats fields all at once.  
2. Use a randomized dice roller tool that allows the user to select each field individually.  
3. Use input fields which allows the user to enter their own values for each field. 

If the user uses the randomizer tool, these input fields will be auto-populated with the results of the tool.

- [x] Create event listeners for each field which dynamically change main character image using the selected character stat.
###### Michael Caldwell
- [x] Visio block diagram for project proposal 
    - shows the general flow of how a user will interact with our website.
- [x] Output page - responsible for outputting a formatted character sheet that is ready for printing. This will involve retrieving data from our localstorage. 

###### Jordan Coulter
- [ ] Home Page / Landing Page 
    - a page that prompts the user to create a character
    - Explains the use of the website 
    
###### Eric Donnelly
- [ ] CSS
    - will create a cohesive  design for all pages 
    - modify bootstrap css as required for desired look
- [ ] Default Characters
    - Set of characters that a user can use with just an update to the name
    
###### Lani Low
- [x] Login/ register pages
    - Login page will have fields to input username and password
    - Register page will include form asking for 
        -username
        - password
        - email 
        - first name
        - last name
- [ ] load/ save characters
        - create methods to save characters for users and load saved characters for editing

****
### References
* Wizards.com (2020), 5E Character Sheet Fillable. Retrieved from  https://media.wizards.com/2016/dnd/downloads/5E_CharacterSheet_Fillable.pdf

* DnD Beyond(2020), Character races for Dungeons & Dragons. Retrieved from https://www.dndbeyond.com/races

