# Bedaya

## What is this?

This is the interactive website of **Kafelat Bedaya** that is made to manage and register data.

## Development facts

These are the open source projects used for the website:
* [SurveyJS](https://github.com/surveyjs/survey-library)
* [SheetJS](https://github.com/sheetjs/js-xlsx)

**SurveyJS** is used as an easy user interactive form for data entry.
**SheetJS** in the other hand is an advanced tool to edit and view the data entered.

This project also uses **Bootstrap** and **JQuery** frameworks.

## How should the project look like
As an intial plan the application should have 2 main parts:
* An editor (SheetJS viewport)
  * This should be the main data center and the only way to read data from the server.
* Serveral Survey viewports
  * Those viewports should have the input from the agent. It should be one for each agent (Receptionist, Doctor,..etc.)
  
All of these view ports are hosted within a nav-bar from bootstrap.
