## Daily Event scheduler

A simple React.js application to manage events within a 24-hour day. The app ensures that events do not overlap and provides an intuitive interface for scheduling and viewing events.

---

## install dependencies

npm install

## Start the application

npm start
Open http://localhost:3000 in your browser.

## **Features**
- Add events by specifying a start and end time (0-23, 24-hour format).
- Validate inputs to prevent overlapping or invalid events.
- Display scheduled events in a clear, readable list.
- Show error messages for invalid inputs.

---

## **Getting Started**

### **Prerequisites**
- Node.js installed on your system.

---

### **Installation**

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/daily-event-scheduler.git
   cd daily-event-scheduler

## Components
## Scheduler
The core component of the application. It handles:

Input validation and error handling.
Managing a list of events in React state.
Rendering a form for event input and a list for displaying scheduled events.
## App
The main entry point of the app, which renders the Scheduler component.

## How to Use
Enter the start and end times for an event (e.g., 9 for 9:00 AM, 17 for 5:00 PM).
Click Add Event.
If valid, the event will appear in the list of scheduled events.
If invalid or overlapping, an error message will be displayed.

## Validation Rules
Start time must be less than end time.
Both times must be within the range 0-23.
Events cannot overlap with existing ones.

## Example Usage
Add an event from 9:00 AM to 12:00 PM:

Input: Start Time = 9, End Time = 12
Output: "9:00 - 12:00" in the event list.
Try to add an overlapping event from 11:00 AM to 2:00 PM:

Error: "Event overlaps with an existing event."
Add a non-overlapping event from 12:00 PM to 2:00 PM:

Input: Start Time = 12, End Time = 14
Output: "12:00 - 14:00" in the event list.

## Technologies Used
React.js for UI
CSS for styling

## Future Improvements
Add a visual timeline view.
Implement event editing or deletion.
Store events persistently using localStorage or a backend service.
Contributing
Contributions are welcome! Please submit a pull request with your proposed changes.

## License
This project is licensed under the MIT License.


This README file provides clear, step-by-step instructions and documentation for your project. Let me know if you need help adding further details!

