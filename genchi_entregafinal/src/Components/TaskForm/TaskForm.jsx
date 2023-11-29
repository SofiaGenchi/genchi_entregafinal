import React from "react";

export default function TaskForm({ handleSubmit, handleChange, inputValue }) {
  return (
    <form onSubmit={handleSubmit}>
      <div class="flex items-center justify-center m-10">
        <div class="relative">
          <input
            id="username"
            name="username"
            type="text"
            class="border-b border-gray-300 py-1 focus:border-b-2 focus:border-purple-700 transition-colors focus:outline-none peer bg-inherit"
          />
          <label
            for="username"
            class="absolute left-0 top-1 cursor-text peer-focus:text-xs peer-focus:-top-4 transition-all peer-focus:text-purple-700"
          >
            Tareas:
          </label>
        </div>
      </div>
    </form>
  );
}
