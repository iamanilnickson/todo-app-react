import React from "react";
/**
 * A TodoList Component
 * Props
 * - todoList: the list of items
 * - strike: style, should there be strikethrough text
 * - function: when todo item clicked, what should happen
 */
export default function TodoList(props) {
  return (
    <div>
      <ul>
        {props.todoList.map((todo, index) => {
          return (
            <div
              style={
                props.strike
                  ? {
                      margin: 10,
                      padding: 10,
                      borderRadius: 10,
                      backgroundColor: "green",
                      width: 200,
                    }
                  : {
                      margin: 10,
                      padding: 10,
                      borderRadius: 10,
                      backgroundColor: "#000333",
                      width: 200,
                    }
              }
            >
              <li
                onClick={() => props.function(index)}
                key={index}
                style={
                  props.strike
                    ? {
                        textDecoration: "line-through",
                        color: "white",
                        cursor: "pointer",
                        userSelect: "none",
                      }
                    : { color: "white", cursor: "pointer", userSelect: "none" }
                }
              >
                {todo}
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
}
