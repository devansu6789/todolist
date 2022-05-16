import { useDispatch, useSelector } from "react-redux";
import { RiCheckboxBlankCircleLine } from "react-icons/ri";
import { FcOk } from "react-icons/fc";
import { todoActions } from "../store/TodoSlice";
import { FiXCircle } from "react-icons/fi";

const TodoItemList = () => {
  const items = useSelector((state) => state.todo.todoItem);
  const dispatch = useDispatch(todoActions);
  // console.log(items.length);
  // console.log(items);
  return (
    <div className=" bg-white rounded-xl shadow-xl overflow-y-scroll no-scrollbar max-h-[400px] w-[100%]">
      <ul>
        {items.map((item) => (
          <li
            key={item.id}
            className={`px-4 py-4 border-b-2 divide-y divide-gray-500 text-lg font-medium text-gray-500 flex items-center justify-start cursor-pointer ${
              item.checked ? "line-through" : "no-underline"
            }`}
            onClick={() => {
              dispatch(todoActions.toggleStatus({ item }));
            }}
          >
            <div className="mr-6 relative flex justify-center items-center">
              <div className="absolute">
                {item.checked && <FcOk size={20} />}
              </div>
              <RiCheckboxBlankCircleLine size={20} />
              <div
                className=" absolute left-[22.5rem] cursor-pointer z-10"
                onClick={() => {
                  dispatch(todoActions.removeItem({ item }));
                }}
              >
                {item.checked && <FiXCircle size={20} />}
              </div>
            </div>
            {item.title}
          </li>
        ))}
      </ul>
      {items.length > 0 && (
        <div className="bg-white rounded-xl max-h-[400px] w-[100%] m-2">
          information
        </div>
      )}
    </div>
  );
};

export default TodoItemList;
