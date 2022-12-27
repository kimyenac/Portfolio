import { useState } from "react";

const useOpenProjectModal = () => {
  const [openProjectModalQuarter, setOpenProjectModalQuarter] = useState("");

  const onOpenProjectModal = ({ quarter }: { quarter: string }) => {
    setOpenProjectModalQuarter(quarter);
  };

  const onCloseProjectModal = () => {
    setOpenProjectModalQuarter("");
  };

  return { openProjectModalQuarter, onOpenProjectModal, onCloseProjectModal };
};

export default useOpenProjectModal;
