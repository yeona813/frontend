import { ReactNode } from 'react';
import ReactDOM from 'react-dom';

interface PortalProps {
  children: ReactNode;
}

const SideBarPortal = ({ children }: PortalProps) => {
  const element = document.getElementById('sideBarModal') as HTMLElement;

  return ReactDOM.createPortal(children, element);
};

export default SideBarPortal;
