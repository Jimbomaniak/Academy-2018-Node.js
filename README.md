### Routes

Route | Method | BODY | Description
--- | :---: | :---: | ---
`/users` | GET | - | List all users
`/users/talked/id` | GET | - |  Get users talked with user
`/users/id` | GET | - | Get user with ID (hex format)
`/users/` | POST | {"name": "Vasya", "email" : "vasya@asf.com"} | Create new user with email
`/users/id` | DELETE | - | Delete user with ID (hex format)
`/messages` | GET | - | List all messages
`/messages/id`| GET | - | Get  messages with ID (hex format)
`/messages/` | POST | {"senderId": ID, "receiverId": ID, "message": "message" } | Create new message
`/messages/id` | PUT | {"message": "i change this message"} | Edit message text
`/messages/id` | DELETE | - | Delete message with ID in hex format
