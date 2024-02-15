import mysql.connector

# Connect to the database
connection = mysql.connector.connect(
    host='your_database_host',
    user='your_username',
    password='your_password',
    database='your_database_name'
)

# Create a cursor object
cursor = connection.cursor()

# Example: Insert data into a table
#insert_query = "INSERT INTO your_table (column1, column2, column3) VALUES (%s, %s, %s)"
make_name = str(input("enter the van make"))
model_name = str(input("enter the van make"))
year = str(input("enter the van make"))
data_to_insert = ('value1', 'value2', 'value3')

cursor.execute(insert_query, data_to_insert)

# Commit the changes
connection.commit()

# Close the cursor and connection
cursor.close()
connection.close()
