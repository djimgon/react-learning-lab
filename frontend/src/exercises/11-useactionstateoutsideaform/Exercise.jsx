"use client";

import { useActionState, startTransition } from "react";
import { getUsers } from "./actions/getUsers";

export default function Exercise() {
  const [users, fetchAction, isPending] = useActionState(getUsers, []);

  return (
    <div className="p-6 max-w-lg mx-auto">
      <button
        onClick={() => startTransition(() => fetchAction())}
        disabled={isPending}
        className="px-4 py-2 cursor-pointer bg-green-500 text-white rounded-lg hover:bg-green-600 disabled:bg-gray-400 font-bold"
      >
        {isPending ? "Fetching Users..." : "Fetch Users"}
      </button>

      <ul className="mt-4 space-y-2">
        {users.map((user) => (
          <li key={user.id} className="p-3 bg-gray-100 rounded-lg">
            <p className="font-semibold">{user.name}</p>
            <p className="text-sm text-gray-600">{user.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
