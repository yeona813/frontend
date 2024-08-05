import { ReactNode } from 'react';
import ReactDOM from 'react-dom';

interface PortalProps {
  children: ReactNode;
}

const UserProfilePortal = ({ children }: PortalProps) => {
  const element = document.getElementById('userProfileModal') as HTMLElement;

  return ReactDOM.createPortal(children, element);
};

export default UserProfilePortal;
