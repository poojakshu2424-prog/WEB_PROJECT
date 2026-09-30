
import React, {
  createContext,
  useContext,
  useEffect,
  useState
} from "react";

import {
  Routes,
  Route,
  Link,
  useNavigate
} from "react-router-dom";

const TodoContext = createContext();

function getToday() {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

// Context API and localStorage
export function TodoProvider({ children }) {
  const [todos, setTodos] = useState(() => {
    try {
      const saved = localStorage.getItem("myTodos");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("myTodos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoContext.Provider value={{ todos, setTodos }}>
      {children}
    </TodoContext.Provider>
  );
}

// Reusable task list
function TaskList({ tasks, onEdit, onDelete, onToggle }) {
  if (tasks.length === 0) {
    return <p className="empty">No tasks found. Add a new task!</p>;
  }

  return (
    <div className="task-list">
      {tasks.map((task) => (
        <div className="task" key={task.id}>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => onToggle(task.id)}
          />

          <div className="task-info">
            <span className={task.completed ? "completed" : ""}>
              {task.title}
            </span>
            <small>{task.date}</small>
          </div>

          <button
            className="edit-btn"
            onClick={() => onEdit(task)}
          >
            Edit
          </button>

          <button
            className="delete-btn"
            onClick={() => onDelete(task.id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

// Shared task management
function TodoManager({ tasks, heading, selectedDate }) {
  const { todos, setTodos } = useContext(TodoContext);

  const [title, setTitle] = useState("");
  const [date, setDate] = useState(selectedDate || getToday());
  const [error, setError] = useState("");
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    if (selectedDate) {
      setDate(selectedDate);
    }
  }, [selectedDate]);

  function handleSubmit(e) {
    e.preventDefault();

    if (!title.trim()) {
      setError("Please enter a task name.");
      return;
    }

    if (!date) {
      setError("Please select a date.");
      return;
    }

    if (editId !== null) {
      setTodos((prev) =>
        prev.map((task) =>
          task.id === editId
            ? { ...task, title: title.trim(), date }
            : task
        )
      );
      setEditId(null);
    } else {
      setTodos((prev) => [
        ...prev,
        {
          id: Date.now(),
          title: title.trim(),
          date,
          completed: false
        }
      ]);
    }

    setTitle("");
    setError("");
  }

  function handleEdit(task) {
    setTitle(task.title);
    setDate(task.date);
    setEditId(task.id);
    setError("");
  }

  function handleDelete(id) {
    setTodos((prev) => prev.filter((task) => task.id !== id));

    if (editId === id) {
      setEditId(null);
      setTitle("");
    }
  }

  function handleToggle(id) {
    setTodos((prev) =>
      prev.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  }

  function cancelEdit() {
    setEditId(null);
    setTitle("");
    setError("");
  }

  return (
    <section className="manager">
      <h2>{heading}</h2>

      <form className="todo-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your task..."
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
            setError("");
          }}
        />

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <button type="submit">
          {editId !== null ? "Update Task" : "Add Task"}
        </button>

        {editId !== null && (
          <button
            type="button"
            className="cancel-btn"
            onClick={cancelEdit}
          >
            Cancel
          </button>
        )}
      </form>

      {error && <p className="error">{error}</p>}

      <TaskList
        tasks={tasks}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onToggle={handleToggle}
      />
    </section>
  );
}

// Home page
function Home() {
  const { todos } = useContext(TodoContext);

  const pending = todos.filter((task) => !task.completed).length;

  return (
    <div className="hero">
      <p className="eyebrow">PLAN • ORGANIZE • ACHIEVE</p>
      <h1>Make every day count.</h1>
      <p>Organize your tasks and stay on top of your goals.</p>

      <Link to="/dashboard" className="primary-link">
        Go to Dashboard
      </Link>

      <div className="home-stats">
        <div>
          <h2>{todos.length}</h2>
          <p>Total Tasks</p>
        </div>
        <div>
          <h2>{pending}</h2>
          <p>Pending Tasks</p>
        </div>
        <div>
          <h2>{todos.length - pending}</h2>
          <p>Completed</p>
        </div>
      </div>
    </div>
  );
}

// Dashboard page
function Dashboard() {
  const { todos } = useContext(TodoContext);

  useEffect(() => {
    document.title = "Dashboard | My Tasks";
  }, []);

  const completed = todos.filter((task) => task.completed).length;
  const pending = todos.length - completed;

  return (
    <div className="page">
      <h1>Dashboard</h1>
      <p className="subtitle">Manage all your tasks in one place.</p>

      <div className="stats">
        <div className="stat-card purple">
          <p>Total Tasks</p>
          <h2>{todos.length}</h2>
        </div>
        <div className="stat-card orange">
          <p>Pending</p>
          <h2>{pending}</h2>
        </div>
        <div className="stat-card green">
          <p>Completed</p>
          <h2>{completed}</h2>
        </div>
      </div>

      <TodoManager tasks={todos} heading="All Tasks" />
    </div>
  );
}

// Daily page
function Daily() {
  const { todos } = useContext(TodoContext);
  const today = getToday();

  const tasks = todos.filter((task) => task.date === today);

  return (
    <div className="page">
      <h1>Daily Tasks</h1>
      <p className="subtitle">Tasks scheduled for today: {today}</p>
      <TodoManager
        tasks={tasks}
        heading="Today's To-Do List"
        selectedDate={today}
      />
    </div>
  );
}

// Weekly page
function Weekly() {
  const { todos } = useContext(TodoContext);

  const today = new Date();
  const start = new Date(today);
  const day = today.getDay();

  // Monday is the first day of the week
  start.setDate(today.getDate() - (day === 0 ? 6 : day - 1));
  start.setHours(0, 0, 0, 0);

  const end = new Date(start);
  end.setDate(start.getDate() + 6);

  function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  const startDate = formatDate(start);
  const endDate = formatDate(end);

  const tasks = todos.filter(
    (task) => task.date >= startDate && task.date <= endDate
  );

  return (
    <div className="page">
      <h1>Weekly Tasks</h1>
      <p className="subtitle">
        {startDate} to {endDate}
      </p>
      <TodoManager tasks={tasks} heading="This Week's Tasks" />
    </div>
  );
}

// Important Days calendar
function ImportantDays() {
  const { todos } = useContext(TodoContext);
  const [month, setMonth] = useState(() => {
    const today = new Date();
    return new Date(today.getFullYear(), today.getMonth(), 1);
  });

  const [selectedDate, setSelectedDate] = useState(getToday());

  const year = month.getFullYear();
  const monthIndex = month.getMonth();
  const firstDay = new Date(year, monthIndex, 1).getDay();
  const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();

  function formatDate(day) {
    const mm = String(monthIndex + 1).padStart(2, "0");
    const dd = String(day).padStart(2, "0");
    return `${year}-${mm}-${dd}`;
  }

  function changeMonth(amount) {
    setMonth(new Date(year, monthIndex + amount, 1));
  }

  const cells = [
    ...Array(firstDay).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1)
  ];

  const selectedTasks = todos.filter(
    (task) => task.date === selectedDate
  );

  return (
    <div className="page">
      <h1>Important Days</h1>
      <p className="subtitle">Select a date to manage its tasks.</p>

      <div className="calendar">
        <div className="calendar-header">
          <button onClick={() => changeMonth(-1)}>←</button>
          <h2>
            {month.toLocaleString("en-US", {
              month: "long",
              year: "numeric"
            })}
          </h2>
          <button onClick={() => changeMonth(1)}>→</button>
        </div>

        <div className="calendar-grid">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
            (day) => (
              <div className="weekday" key={day}>{day}</div>
            )
          )}

          {cells.map((day, index) => {
            if (!day) {
              return <div className="empty-day" key={`empty-${index}`} />;
            }

            const dateString = formatDate(day);
            const hasTasks = todos.some(
              (task) => task.date === dateString
            );

            return (
              <button
                key={dateString}
                className={[
                  "calendar-day",
                  selectedDate === dateString ? "selected" : "",
                  getToday() === dateString ? "today" : ""
                ].join(" ")}
                onClick={() => setSelectedDate(dateString)}
              >
                {day}
                {hasTasks && <span className="task-dot" />}
              </button>
            );
          })}
        </div>
      </div>

      <TodoManager
        tasks={selectedTasks}
        heading={`Tasks for ${selectedDate}`}
        selectedDate={selectedDate}
      />
    </div>
  );
}

// Main app and React Router
export default function App() {
  return (
    <>
      <nav className="navbar">
        <Link to="/" className="brand">TaskFlow.</Link>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/daily">Daily</Link>
          <Link to="/weekly">Weekly</Link>
          <Link to="/important-days">Important Days</Link>
          <Link to="/dashboard">Dashboard</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/daily" element={<Daily />} />
        <Route path="/weekly" element={<Weekly />} />
        <Route path="/important-days" element={<ImportantDays />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>

      <footer>TaskFlow © 2026 | Organize your day, your way.</footer>
    </>
  );
}