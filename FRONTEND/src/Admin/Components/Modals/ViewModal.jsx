function View({ userId, onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="w-96 rounded bg-neutral-800 p-4 text-white">
        <h1>User ID: {userId}</h1>

        <button onClick={onClose} className="mt-4 rounded bg-red-500 px-3 py-1">
          Close
        </button>
      </div>
    </div>
  );
}

export default View;
