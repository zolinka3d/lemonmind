# lemonmind

Air Cargo Shipment Form

# Description

This application provides an online form for adding goods to be transported via air. The form allows adding one or more goods, where fields for the next load can be added dynamically by the user e.g., through the `Dodaj ładunek` button.

The transport can take place exclusively from Monday to Friday.

The form is composed of the following fields:

- Transport z (text field, required)
- Transport do (text field, required)
- Typ samolotu (option to select one of two types: Airbus A380, Boeing 747, required field)
- Dokumenty przewozowe (field where you can upload several files using Drag and Drop, optional field, file type restrictions: jpg, png, doc, docx, pdf)
- Data transportu (option to select a date from the calendar, required field)

Fields for a single load:

- Nazwa ładunku (text field, required)
- Ciężar ładunku w kg (numeric field, required)
- Typ ładunku (option to select one of two: ordinary load, dangerous load, required field)

A single load cannot exceed the maximum weight depending on the selected type of aircraft. Please refer to the appropriate documentation for the weight restrictions based on aircraft type.

`Airbus A380` 35 000
`Boeing 747` 38 000

# Getting Started

To run the application:

- `cd frontend`
- `npm install`
- `npm start`

# Prerequisites

- Node.js
- npm

# Author

Zofia Tokarczyk
