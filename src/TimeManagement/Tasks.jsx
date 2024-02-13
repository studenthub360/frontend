import React, { useState, useEffect } from "react";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState("");
  const [description, setTaskDescription] = useState("");
  const [filterCompleted, setFilterCompleted] = useState(false);

  useEffect(() => {
    // Fetch tasks from the API when the component mounts
    fetchTasks();
  }, []);

  const fetchTasks = () => {
    const token = localStorage.getItem("accessToken"); // Assuming you store the token in localStorage

    fetch("https://student360-api.onrender.com/api/task", {
      headers: {
        Authorization: `${token}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch tasks");
        }
        return response.json();
      })
      .then((data) => {
        setTasks(data);
      })
      .catch((error) => {
        console.error("Error fetching tasks:", error);
      });
  };

  const addTask = () => {
    const token = localStorage.getItem("accessToken"); // Assuming you store the token in localStorage

    const newTask = {
      name: taskName,
      description: description,
    };

    // Make a POST request to the API to create a new task
    fetch("https://student360-api.onrender.com/api/task", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
      },
      body: JSON.stringify(newTask),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to add task");
        }
        return response.json();
      })
      .then(() => {
        // Fetch tasks again after successfully adding a new task
        fetchTasks();
        setTaskName("");
        setTaskDescription("");
      })
      .catch((error) => {
        console.error("Error adding task:", error);
      });
  };

  const removeTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const toggleTaskStatus = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const filteredTasks = filterCompleted
    ? tasks.filter((task) => task.completed)
    : tasks;

  return (
    <div className="flex flex-col lg:flex-row w-full  ">
      {/* Form to add new tasks */}
      <div className="lg:w-1/2 w-full p-5">
        <h2 className="text-2xl font-bold mb-4">Tasks</h2>
        <form>
          <div className="mb-4">
            <label className="font-bold" htmlFor="taskName">
              Task Name:
            </label>
            <input
              type="text"
              id="taskName"
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
              className="p-1 w-full border border-black rounded-lg"
            />
          </div>

          <div className="mb-4">
            <label className="font-bold" htmlFor="taskDescription">
              Write a short note describing task:
            </label>
            <textarea
              id="taskDescription"
              value={description}
              onChange={(e) => setTaskDescription(e.target.value)}
              className="p-2 border-black rounded-lg w-full border"
            />
          </div>

          <button
            type="button"
            onClick={addTask}
            className="bg-[#3B50FE] rounded-lg text-white py-2 px-6"
          >
            ADD
          </button>
        </form>
      </div>

      {/* Tasks list with Completed/Pending button */}
      <div className="lg:w-1/2 p-5">
        <ol className="w-full border rounded-lg p-4 container border-black mt-4">
          <div className="flex justify-between space-x-16 items-center p-5 border-b">
            <li className="font-bold text-[#3B50FE]">Tasks</li>
            <button
              onClick={() => setFilterCompleted(!filterCompleted)}
              className="bg-[#3B50FE] rounded-lg text-white py-1 px-1 mt-1 lg:mt-0"
            >
              {filterCompleted ? "Pending" : "Completed"}
            </button>
          </div>
          {filteredTasks.map((task, index) => (
            <li
              key={index}
              className={`flex justify-between items-center  p-5 border-b ${
                task.completed ? "bg-white p-5" : ""
              }`}
            >
              <div className="">
                <span className="font-semibold">
                  {index + 1}. {task.name}
                </span>
                <p>{task.description}</p>
              </div>
              <div>
                <button
                  onClick={() => toggleTaskStatus(index)}
                  className={`text-${
                    task.completed
                      ? "white bg-blue-600 p-1 rounded-lg"
                      : "white bg-red-600 p-1 rounded-lg"
                  } mr-2`}
                >
                  {task.completed ? "Completed" : "Pending"}
                </button>
                <button
                  onClick={() => removeTask(index)}
                  className="text-red-500"
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Tasks;
