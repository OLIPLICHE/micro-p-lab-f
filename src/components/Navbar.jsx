import React, { useEffect } from 'react';
import { CgMenuGridR } from 'react-icons/cg';
import { FiShoppingCart } from 'react-icons/fi';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification4Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import Chat from './Chat';
import Notification from './Notification';
import UserProfile from './UserProfile';
import Cart from './Cart';
import owner from '../data/images/owner.jpg';
import { useStateContext } from '../contexts/ContextProvider';

const NavButton = ({
  title, customFunc, icon, color, dotColor,
}) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button
      type="button"
      onClick={customFunc}
      style={{ color }}
      className="relative text-xl rounded-full p-3 hover:bg-light-gray"
    >
      <span
        style={{ background: dotColor }}
        className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
      />
      {icon}
    </button>
  </TooltipComponent>
);

const Navbar = () => {
  const {
    handleClick, setActiveMenu, isClicked, screenSize, setScreenSize,
  } = useStateContext();

  // To figure out the size when the window loads
  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize);

    handleResize();

    // In react, whenever you use window.Event..., you also have to remove it
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // To track the screen size
  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  return (
    <div className="flex justify-between p-2 md:mx-6 relative">
      <NavButton
        title="Menu"
        customFunc={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
        color="blue"
        icon={<CgMenuGridR />}
      />
      <div className="flex">
        <NavButton
          title="Cart"
          customFunc={() => handleClick('cart')}
          color="blue"
          icon={<FiShoppingCart />}
        />
        <NavButton
          title="Chat"
          dotColor="#03C9D7"
          customFunc={() => handleClick('chat')}
          color="blue"
          icon={<BsChatLeft />}
        />
        <NavButton
          title="Notification"
          dotColor="#03C9D7"
          customFunc={() => handleClick('notification')}
          color="blue"
          icon={<RiNotification4Line />}
        />
        <TooltipComponent
          content="Profile"
          position="BottomCenter"
          onClick={() => handleClick('userProfile')}
          className="flex items-center gap-2 cursor-pointer p-1 hoher:bg-light-gray rounded-lg "
        >
          <img
            className="rounded-full w-8 h-8"
            alt="owner"
            src={owner}
          />
          <p>
            <span className="text-zinc-900 text-14">Hello,</span>
            {' '}
            <span className="text-zinc-900 font-bold ml-1 text-14">
              Paka
            </span>
          </p>
          <MdKeyboardArrowDown className="text-zinc-900 text-14" />
        </TooltipComponent>
        {isClicked.cart && <Cart />}
        {isClicked.chat && <Chat />}
        {isClicked.notification && <Notification />}
        {isClicked.userProfile && <UserProfile />}
      </div>
    </div>
  );
};

export default Navbar;
