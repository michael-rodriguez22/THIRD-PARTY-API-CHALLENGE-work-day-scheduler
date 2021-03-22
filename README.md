# Work Day Scheduler
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with time blocks for standard business hours
WHEN I view the time blocks for that day
THEN each time block is color-coded to indicate whether it is in the past, present, or future
WHEN I click into a time block
THEN I can enter an event
WHEN I click the save button for that time block
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist

feature 1: display current date at top
feature 2: create timeblocks for 9-5
feature 3: color code timeblocks (past, present, future)
feature 4: allow users to input events into time blocks
feature 5: save events to local storage