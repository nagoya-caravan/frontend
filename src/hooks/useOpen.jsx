import React from "react";

const useOpen = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const handleOpen = () => setIsOpen(!isOpen);

  return { isOpen, handleOpen };
};

export default useOpen;
