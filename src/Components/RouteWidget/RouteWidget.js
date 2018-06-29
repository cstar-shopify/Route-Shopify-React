import React, { Component, cloneElement } from 'react';
import Modal from 'react-modal';
import './routeWidget.css';
import './PlusMinus/plusMinus.css';
import './MoreInfoModal/moreInfoModal.css';

import RouteLogoWhite from '../../images/RouteLogoKionaWhite.png';
import InfoIcon from '../../images/infoLogo.png';
import RouteLogo from '../../images/RouteLogoKiona.png';
import Lost from '../../images/LostIcon.png';
import Damage from '../../images/DamageIcon.png';
import Theft from '../../images/TheftIcon.png';
import OneClick from '../../images/OneClickIconGreen.png';
import Certified from '../../images/RouteCertifiedBar.png';

class RouteWidget extends Component {
    constructor(props) {
        super(props);
        this.state = {
            plusMinus: true,
            checked: false,
            showModal: false
        }
        this.handlePlusMinus = this.handlePlusMinus.bind(this);
        this.handleMoreInfo = this.handleMoreInfo.bind(this);
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    handlePlusMinus() {
        if(this.state.plusMinus === true){
            this.setState({ plusMinus: false, checked: true });
        }
        else {
            this.setState({ plusMinus: true, checked: false });
        }
    }

    handleMoreInfo() {
        if(this.state.moreInfo === false) {
            this.setState({ moreInfo: true });
        }
        else {
            this.setState({ moreInfo: false });
        }
    }

    openModal() {
        this.setState({ showModal: true });
      }

    closeModal() {
    this.setState({ showModal: false });
    }

  render() {
    console.log(this.state);
    return (
        <div id="widget-body">
            <div id="route-main">
                <div id="route-content">
                    <div id="widget-top" onClick={this.handlePlusMinus}>
                        <div id="route-check">
                            <div className={`circle-plus ${this.state.plusMinus ? "closed" : "opened"} `}>
                                <div className="circle">
                                    <div className="horizontal"></div>
                                    <div className="vertical"></div>
                                </div>
                            </div>
                        </div>
                        <div id="rightside">
                            <div id="widget-header">
                                <p id="widget-ship-protect">Add Shipping Protection for Only<span id="routeq"> $0.00</span></p>
                            </div>
                            <div id="protect-from">
                                <p>Fully Protect from Lost &bull; Damaged &bull; Stolen</p>
                            </div>
                        </div>
                    </div>
                    <div id="widget-bottom">
                        <a id="widget-powered-by" href="https://www.routeapp.io/" target="_blank">
                            <p>Powered by</p>
                            <img src={RouteLogoWhite} alt="route logo"/>
                        </a>
                        <div id="widget-more-info">
                            <button id="routehelp" onMouseOver={this.openModal}>
                                <p>More Info</p>
                                <img src={InfoIcon} alt="info icon"/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Modal
                isOpen={this.state.showModal}
                onRequestClose={this.closeModal}
                contentLabel="Example Modal"
                style="display:flex; justify-content:center; "
                className="route-modal"
                overlayClassName="route-modal-overlay"
                >

                <div id="dialog">
                <div id="close-wrap"><span id="close-route-modal" onClick={this.closeModal}>&times;</span></div>
                <div id="powered-container">
                    <div id="powered-wrapper">
                        <p>powered by</p>
                        <a href="https://www.routeapp.io/" target="_blank"><img src={RouteLogo} alt="route logo"/></a>
                    </div>
                </div>
                <div id="route-divider"></div>
                <div id="learn-more-header">
                    <h2>Never deal with shipping companies over lost, broken, or stolen goods.</h2>
                    <p>Trusted by Over 300,000 Customers</p>
                </div>
                <div id="description-box" data-name="description">
                    <div id="description-wrapper">
                        <h3 id="description-header"> Bulletproof your shipment from: </h3>
                        <div id="description-content">
                            <div id="lost">
                                <img id="lost-img" src={Lost}/>
                                <div id="description-lost">
                                    <h4>LOST</h4>
                                    <p>Package is lost in transit.</p>
                                </div>
                            </div>
                            <div id="damage">
                                <img id="damage-img" src={Damage}/>
                                <div id="description-damage">
                                    <h4>DAMAGE</h4>
                                    <p>Item is received damaged prior to opening.</p>
                                </div>
                            </div>
                            <div id="theft">
                                <img  id="theft-img" src={Theft}/>
                                <div id="description-theft">
                                    <h4>THEFT / PORCH PIRATING</h4>
                                    <p>Item is stolen after delivery</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="one-click">
                    <div id="one-click-icon">
                        <img src={OneClick}/>
                        <h3>ONE-CLICK</h3>
                    </div>
                    <h4>Instantly protect your package.</h4>
                </div>
                <div id="learn-more-terms">
                    <p id="terms-and-conditions">
                        This protection has been offered to you solely in order to effectuate the shipment of your package(s). Route is the only named assured on the Route Policy.
                        While you are not a named assured under the policy, your shipment is protected. Your election below to add your package to the Route Policy is entirely optional.
                        You have the option of obtaining protection from an alternative source or not at all. The cost of adding your shipment to the Route Policy includes compensation
                        paid to Safe Order Solutions, LLC (a licensed insurance agency affiliate of Route), for making this protection available. \n
                    </p>
                </div>
                <img id="route_certified_image" src={Certified}/>
                </div>
            </Modal>
        </div>
    );
  }
}

export default RouteWidget;