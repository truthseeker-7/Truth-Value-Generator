Truth Value Generator
This is a JavaScript application that generates a truth table based on logical operators. It allows users to input logical expressions, select operators, and generate a table of truth values.

Getting Started
To use this application, simply open the index.html file in your browser. You will see a form with input fields for logical expressions and radio buttons for selecting operators.

Enter the logical expressions you want to evaluate in the input field but you only use that as a text header to what you intend on evaluating. You can enter up to two expressions, which will be evaluated using the logical operator selected by the radio button. The application currently supports the following logical operators:

and
or
not
implies
converse-implies
bi (for biconditional)

Once you have entered your expressions and selected two columns to evaluate using the checkboxes and selected an operator, click the "Add Column" button to generate a new row in the truth table. You can continue adding column to the table.

How it Works
The application uses JavaScript to dynamically generate an HTML table based on the user's inputs. When the "Add Column" button is clicked, the application evaluates the logical expressions using the selected operator and inserts the resulting truth values into the table.

To evaluate the expressions, the application uses a switch statement to determine which logical operator to use. It then uses a for loop to iterate over the rows of the table, retrieving the values from the input fields and evaluating them based on the selected operator. The resulting truth values are then inserted into the table.

Limitations
This application is currently limited to evaluating two logical expressions at a time. 

Acknowledgments
This application was created by Pawlos Million Zeyede as a personal project. It was inspired by a desire to my discrete math class easier. 
