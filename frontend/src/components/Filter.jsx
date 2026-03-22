function Filter({ setFilter }) {
  return (
    <div className="flex justify-center gap-4 mt-4">
      <button onClick={() => setFilter("all")} className="text-blue-500">
        All
      </button>
      <button onClick={() => setFilter("completed")} className="text-green-500">
        Completed
      </button>
      <button onClick={() => setFilter("pending")} className="text-red-500">
        Pending
      </button>
    </div>
  );
}

export default Filter;