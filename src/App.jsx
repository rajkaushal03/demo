import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { FaGreaterThan } from "react-icons/fa";
import { GrAttachment } from "react-icons/gr";
import { useState, useEffect } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState([]);
  const [currentTime, setCurrentTime] = useState("");

  const handleMessageSubmit = () => {
    if (inputValue.trim() !== "") {
      const currentTime = new Date(); 
      const formattedTime = currentTime.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      }); 

      const newMessage = { content: inputValue, time: formattedTime }; 
      setMessages([...messages, newMessage]);
      setInputValue("");
    }
  };
  const updateTime = () => {
    const now = new Date();
    const timeOptions = { hour: "2-digit", minute: "2-digit", hour12: true };
    setCurrentTime(now.toLocaleTimeString([], timeOptions));
  };
  useEffect(() => {
    updateTime();
  }, []);
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleMessageSubmit();
    }
  };

  return (
    <>
      <div className="bg-white p-2   rounded-lg font-sans">
        <div className="flex justify-between text-blue-500 bg-blue-100 p-3  rounded-t-lg">
          <div className="flex gap-2">
            <div className="rounded-full flex items-center bg-white">
              <img
                src="/robo.png "
                alt="Description of the image"
                className=" w-14 h-12"
              />

              <div className=" w-2 h-2 bg-green-500  mt-10 mr-1 rounded-full"></div>
            </div>
            <div className=" pt-1 pb-1 font-sans">
              <div className=" flex gap-2">
                <div className="font-semibold text-lg">Timpu</div>
                <div className=" w-4 h-4 mt-1 rounded-full  border border-solid border-yellow-400 bg-yellow-200">
                  <IoCheckmarkDoneSharp />
                </div>
              </div>
              <div className=" font-medium text-base">Chat assistant</div>
            </div>
          </div>
          <div className=" flex items-center gap-1  ">
            <div className=" w-2 h-2 bg-green-500  rounded-full"></div>
            <div className="font-medium text-base">Online</div>
          </div>
        </div>

        <div className="h-[46rem] bg-white overflow-auto ">
          <div className="m-2 ">
            <div className=" w-64 p-3 rounded-2xl bg-gradient-to-br from-blue-200 to-white">
              Hi Swayam Kaushal! I am your personal shopping assistant,how can i help you
              today?
            </div>
            <div className="text-sm bg-white  m-1 text-gray-500">
              {currentTime}
            </div>
          </div>
          <div className="flex flex-col items-end">
            {messages.map((message, index) => (
              <div key={index}>
                <div className="w-64 bg-green-200 py-3  m-1 text-black rounded-lg p-2">
                  {message.content}
                </div>
                <div className="text-sm bg-white text-end m-1 text-gray-500">
                  {message.time}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-blue-100 p-3 rounded-b-lg">
          <div className="flex">
            <div className="flex w-full bg-white border border-solid border-blue-300 rounded-lg">
              <input
                type="text"
                className="w-full h-10 rounded-lg p-2 focus:outline-none"
                autoFocus
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type your message"
              />
              <button
                onClick={() => console.log("fiel handling")}
                className="h-10 px-3 bg-white text-gray-400 rounded-r-lg cursor-pointer"
              >
                <GrAttachment />
              </button>
            </div>
            <div
              className=" w-20 ml-1 bg-blue-500 rounded-lg flex justify-center items-center text-white cursor-pointer"
              onClick={handleMessageSubmit}
            >
              <button>
                <FaGreaterThan />
              </button>
            </div>
          </div>
          <div className="flex justify-center  gap-1">
            <div className="font-normal text-sm text-gray-400">Powered by</div>
            <div className="font-semibold text-sm text-gray-700 ">Krunk.ai</div>
            <img src="/Logo.svg" alt="" className=" w-5 h-5 bg-opacity-50" />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
