import { ReactNode } from 'react';
import ReactDOM from 'react-dom';

interface PortalProps {
  children: ReactNode;
}

const DeleteAccountPortal = ({ children }: PortalProps) => {
  const element = document.getElementById('deleteAccountModal') as HTMLElement;

  return ReactDOM.createPortal(children, element);
};

export default DeleteAccountPortal;
