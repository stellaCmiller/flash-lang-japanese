import ModalContent from './ModalContent';

function ModalTrigger(props) {
    return(
        <a onClick={props.onClick}>{props.TriggerValue}</a>
    )
}

//The modal trigger text goes through this intermediate class before reach the Modal trigger
//Look into fixing this behavior, or integrating redux
export default class Modal extends React.Component {
    constructor(props){
        super(props);
        this.state = { isOpen: false };
        this.popModal = this.popModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    popModal(){
        this.setState({ isOpen: true});
    }

    closeModal(){
        this.setState({ isOpen: false});
    }

    render() {
        const isOpen = this.state.isOpen;
        return (
          <React.Fragment>
            <ModalTrigger onClick={this.popModal} TriggerValue={this.props.TriggerValue}/>
            {isOpen && <ModalContent value={this.props.TriggerValue} onClick={this.closeModal}/>}
          </React.Fragment>
        );
    }
}