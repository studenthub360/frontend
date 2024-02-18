import React from "react";
import vector from "./images/Vector.png";
import cash from "./images/game_cash.png";
import hat from "./images/Vector_ghat.png";
import user from "./images/user.png";
import chat from "./images/chat.png";
import well from "./images/well-being.png";
import social from "./images/social.png";
import { Link } from "react-router-dom";

const Links = () => {
  return (
    <div
      id="benefits"
      className="mx-auto p-2 w-full bg-center bg-white text-white"
    >
      <div className="mb-8 px-4 md:px-10 lg:px-20 xl:px-40">
        <h2 className="text-4xl text-center py-6 text-[#3A4FFE] font-bold mb-4">
          What will you gain?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-10 justify-center items-center text-black">
          <Link className="text-center">
            <div className="bg-white p-4 h-auto w-auto rounded-lg shadow-md hover:shadow-lg transform hover:scale-110 transition duration-300 cursor-pointer">
              <img
                src={vector}
                alt="vector"
                width={40}
                className="mx-auto mb-2"
              />
              <h3 className="text-xl font-semibold mb-2 text-[#3A4FFE]">
                Time Management
              </h3>
              <p className="px-4 text-left py-5">
                It helps in allocating and prioritizing your time to accomplish
                academic tasks, extracurricular activities, personal
                commitments, and leisure activities while maintaining a healthy
                balance.
              </p>
            </div>
          </Link>
          <Link className="text-center">
            <div className="bg-white p-4 h-auto w-auto rounded-lg shadow-md hover:shadow-lg transform hover:scale-110 transition duration-300 cursor-pointer">
              <img src={cash} alt="cash" width={40} className="mx-auto mb-2" />
              <h3 className="text-xl font-semibold mb-2 text-[#3A4FFE]">
                Financial Management
              </h3>
              <p className="px-4 text-left py-6">
                It helps to effectively manage your finances to cover expenses,
                save for future goals, and avoid debt.
              </p>
            </div>
          </Link>
          <Link className="text-center">
            <div className="bg-white p-4 h-auto w-auto rounded-lg shadow-md hover:shadow-lg transform hover:scale-110 transition duration-300 cursor-pointer">
              <img src={hat} alt="hat" width={40} className="mx-auto mb-2" />
              <h3 className="text-xl font-semibold mb-2 text-[#3A4FFE]">
                Academic Support
              </h3>
              <p className="px-4 text-left py-5">
                It helps in provision of resources, tools, and strategies aimed
                at helping students excel academically while also managing their
                finances effectively.
              </p>
            </div>
          </Link>
          <Link className="text-center">
            <div className="bg-white p-4 h-auto w-auto rounded-lg shadow-md hover:shadow-lg transform hover:scale-110 transition duration-300 cursor-pointer">
              <img
                src={social}
                alt="user"
                width={40}
                className="mx-auto mb-2"
              />
              <h3 className="text-xl font-semibold mb-2 text-[#3A4FFE]">
                Social Networking
              </h3>
              <p className="px-4 text-left py-5">
                It helps in promoting a sense of community among students and
                encourages active participation in academic and extracurricular
                activities.
              </p>
            </div>
          </Link>
          <Link className="text-center">
            <div className="bg-white p-4 h-auto w-auto rounded-lg shadow-md hover:shadow-lg transform hover:scale-110 transition duration-300 cursor-pointer">
              <img src={chat} alt="user" width={40} className="mx-auto mb-2" />
              <h3 className="text-xl font-semibold mb-2 text-[#3A4FFE]">
              Community Chat
              </h3>
              <p className="px-4 text-left py-5">
              It helps  streamline communication and coordination within academic teams and study groups by  creating dedicated channels or groups for specific courses and projects.
              </p>
            </div>
          </Link>
          <Link className="text-center">
            <div className="bg-white p-4 h-auto w-auto rounded-lg shadow-md hover:shadow-lg transform hover:scale-110 transition duration-300 cursor-pointer">
              <img src={well} alt="user" width={40} className="mx-auto mb-2" />
              <h3 className="text-xl font-semibold mb-2 text-[#3A4FFE]">
                Well-being
              </h3>
              <p className="px-4 text-left py-5">
              It helps verifying the identity of users accessing the platform and granting them appropriate levels of access based on their roles or permissions. 
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Links;
