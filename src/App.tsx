import { ReactNode } from "react";
import { Counter } from "./components/Counter";
// import { useState } from "react";
import { Timer } from "./components/Timer";
import { UserList } from "./components/UserList";
import { useToggle } from "./hooks/useToggle";
// import { useVisibilityFilters } from "./hooks/useVisibilityFilters";

interface Props {
  label: string;
  isInitialyEnabled?: boolean;
  children: ReactNode;
}

const Togglable = ({ label, children, isInitialyEnabled = false }: Props) => {
  const [isEnabled, toggle] = useToggle(isInitialyEnabled);

  return (
    <div>
      <div>
        <button onClick={toggle}>
          {isEnabled ? "Hide" : "Show"} {label}
        </button>
      </div>

      {isEnabled ? children : null}
    </div>
  );
};

export const App = () => {
  return (
    <>
      <Togglable label="Counter">
        <Counter initialCount={1337} ratio={1000} />
      </Togglable>

      <Togglable label="Clock">
        <Timer />
      </Togglable>

      <Togglable label="Users" isInitialyEnabled>
        <UserList />
      </Togglable>
    </>
  );
};

// export const App = () => {
//   const [{ counter, timer, users }, dispatch] = useVisibilityFilters();

//   const showCounter = () =>
//     dispatch({ type: "COUNTER", payload: { isEnabled: true } });
//   const hideCounter = () =>
//     dispatch({ type: "COUNTER", payload: { isEnabled: false } });

//   return (
//     <div>
//       <button onClick={showCounter}>Show counter</button>
//       <button onClick={hideCounter}>Hide counter</button>

//       {counter && <Counter />}
//     </div>
//   );
// };

// export const App = () => {
//   const [isCounterEnabled, toggleCounter] = useToggle(false);
//   const [isTimerEnabled, toggleTimer] = useToggle(false);
//   const [areUsersEnabled, toggleUsers] = useToggle(false);

//   return (
//     <>
//       <button onClick={toggleCounter}>
//         {isCounterEnabled ? "Hide" : "Show"} Counter
//       </button>

//       <button onClick={toggleTimer}>
//         {isTimerEnabled ? "Hide" : "Show"} Timer
//       </button>

//       <button onClick={toggleUsers}>
//         {areUsersEnabled ? "Hide" : "Show"} Users
//       </button>

//       {isCounterEnabled && <Counter initialCount={1337} ratio={1000} />}
//       {isTimerEnabled && <Timer />}
//       {areUsersEnabled && <UserList />}
//     </>
//   );
// };
