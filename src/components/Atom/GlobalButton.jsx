const GlobalButton = ({ title, styled, bg, ...args }) => {
  return (
    <button
      className={`text-white rounded-md px-4 py-1 ${
        bg ? bg : "bg-secondary"
      } ${styled}`}
      {...args}
    >
      {title}
    </button>
  );
};

export default GlobalButton;
