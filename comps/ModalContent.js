import ReactDOM from 'react-dom';
import LogIn from './authentication/LogIn';
import SignUp from './authentication/SignUp';

//Modal box design borrowed from https://assortment.io/posts/accessible-modal-component-react-portals-part-1
export default function ModalContent(props) {
    return ReactDOM.createPortal(
      <aside className="c-modal-cover">
        <div className="c-modal">
          <button className="c-modal__close" aria-label="Close Modal" onClick={props.onClick}>
            <span className="u-hide-visually">Close</span>
            <svg className="c-modal__close-icon" viewBox="0 0 40 40"><path d="M 10,10 L 30,30 M 30,10 L 10,30"></path></svg>
          </button>
          <div className="c-modal__body">
            {(props.value == "Log In" ? <LogIn /> : <SignUp />)}
          </div>
        </div>
      </aside>,
      document.body
    );
}